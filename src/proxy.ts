import { ME_ADMIN_QUERY } from "@/graphql/admin/meAdmin";
import client from "@/utils/apollo.client";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";
import { fallbackLng, languages } from "./config/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)",
  ],
};

/**
 * Resolve locale WITHOUT mutating cookies
 */
function resolveLocale(req: NextRequest): string {
  const { pathname } = req.nextUrl;
  console.log("pathname lang", pathname);

  const cookieLang = req.cookies.get("lang")?.value;
  if (cookieLang) return cookieLang;
  console.log("No lang cookie");

  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/ar")) return "ar";

  return acceptLanguage.get(req.headers.get("accept-language")) || fallbackLng;
}

const preAuthPaths = (locale: string) => [
  `/${locale}/login`,
  `/${locale}/forgot-password`,
  `/${locale}/verify-reset-code`,
  `/${locale}/reset-password`,
];

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const locale = resolveLocale(request);
  console.log("Resolved locale:", locale);
  const hasLocale =
    pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);

  let response: NextResponse;
  console.log("Middleware Request Pathname:", hasLocale, pathname);
  // 1️⃣ Redirect to locale-prefixed URL if missing
  if (!hasLocale) {
    console.log(
      "Redirecting to locale-prefixed URL",
      `/${locale}${pathname}${search}`,
    );
    response = NextResponse.redirect(
      new URL(
        `/${locale}${pathname.replace(locale === "en" ? "/ar" : "/en", "")}${search}`,
        request.url,
      ),
    );
  } else {
    response = NextResponse.next();
  }

  // 2️⃣ Ensure lang cookie is set (ONLY on response)
  const existingLang = request.cookies.get("lang")?.value;
  if (existingLang !== locale) {
    response.cookies.set("lang", locale, {
      path: "/",
      sameSite: "lax",
    });
  }

  // 3️⃣ Auth logic
  const checkedPathname = hasLocale ? pathname : `/${locale}${pathname}`;
  const isPreAuthPath = preAuthPaths(locale).includes(checkedPathname);
  console.log("isPreAuthPath", isPreAuthPath, checkedPathname);
  const isLoggedIn = await getAdmin(request);

  if (!isLoggedIn && !isPreAuthPath) {
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  if (isLoggedIn && isPreAuthPath) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
  }

  return response;
}

async function getAdmin(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) return null;

  try {
    const { data } = await client(
      token,
      `${process.env.API_BASE_URL}/graphql`,
    ).query({
      query: ME_ADMIN_QUERY,
    });

    return data?.meAdmin ?? null;
  } catch {
    return null;
  }
}
