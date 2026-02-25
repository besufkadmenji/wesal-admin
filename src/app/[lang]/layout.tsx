import { expoArabic } from "@/assets/fonts/expo.arabic";
import { inter } from "@/assets/fonts/inter";
import { AppHeroUIProvider } from "@/config/app.provider";
import { dir } from "i18next";
import type { Metadata } from "next";
import Script from "next/script";
import { twMerge } from "tailwind-merge";

// import "leaflet-draw/dist/leaflet.draw.css";
import "../globals.css";

export const metadata: Metadata = {
  title: "Wesal Admin",
  description: "Welcome to Wesal Admin Dashboard",
};

export type Params = Promise<{ lang: string }>;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={dir(lang)} key={lang} suppressHydrationWarning>
      <head>
        <Script id="remove-hash" strategy="beforeInteractive">
          {`if (location.hash) history.replaceState(null, '', location.href.split('#')[0]);`}
        </Script>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css"
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"
        />
      </head>
      <body
        className={twMerge(
          "overflow-hidden antialiased",
          lang === "en" ? `${inter.className}` : `${expoArabic.className}`,
        )}
      >
        <AppHeroUIProvider>{children}</AppHeroUIProvider>
      </body>
    </html>
  );
}
