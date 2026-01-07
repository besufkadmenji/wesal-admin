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

function getLocale(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/ar")) return "ar";
  if (req.cookies.has("lng")) return req.cookies.get("lng")?.value;
  return acceptLanguage.get(req.headers.get("Accept-Language")) || fallbackLng;
}

const preAuthPaths = (locale: string) => [
  `/${locale}/login`,
  `/${locale}/forgot-password`,
  `/${locale}/verify-reset-code`,
  `/${locale}/reset-password`,
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const currentLocale = getLocale(request);
  const pathnameHasLocale =
    pathname.startsWith(`/${currentLocale}/`) ||
    pathname === `/${currentLocale}`;

  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(
        `/${currentLocale}${pathname}${request.nextUrl.search}`,
        request.url,
      ),
    );
  }
  const isPreAuthPath = preAuthPaths(currentLocale ?? "ar").some(
    (path) => pathname === path,
  );
  const isLoggedIn = await getAdmin(request);
  if (!isLoggedIn) {
    if (!isPreAuthPath) {
      return NextResponse.redirect(
        new URL(`/${currentLocale}/login`, request.url),
      );
    }
  }

  if (isPreAuthPath && isLoggedIn) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/dashboard`, request.url),
    );
  }

  return NextResponse.next();
}

const getAdmin = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  if (!token) return null;
  try {
    const adminResult = await client(
      token,
      `${process.env.API_BASE_URL}/graphql`,
    ).query({
      query: ME_ADMIN_QUERY,
    });
    console.log("adminResult", token, adminResult.data);
    return adminResult.data?.meAdmin ?? null;
  } catch (error) {
    return null;
  }
};
