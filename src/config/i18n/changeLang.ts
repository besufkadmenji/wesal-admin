"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export async function changeLang(
  lng: string,
  pathname: string,
  search?: string,
  noRedirect?: boolean,
) {
  const cookieStore = await cookies();

  cookieStore.set("lang", lng);
  if (!noRedirect) {
    redirect(`/${lng}${pathname}?${search}`, RedirectType.replace);
  }
  return `/${lng}${pathname}?${search}`;
}
