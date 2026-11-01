import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const bodyFont = localFont({
  src: "../public/fonts/Helvetica.woff2",
  variable: "--body-font",
  display: "swap",
});

const displayFont = localFont({
  src: "../public/fonts/oswald-bold-webfont.woff2",
  variable: "--display-font",
  weight: "700",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Sapatos masculinos: história, fabricação e estilos | Ferracini",
  description:
    "Conheça a história dos sapatos masculinos, da criação à fabricação, descubra curiosidades e encontre inspiração em diferentes estilos.",
  applicationName: "AreaH — Ferracini",
  authors: [{ name: "AreaH" }],
  creator: "AreaH",
  publisher: "Ferracini",
  category: "Moda e cultura",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Sapatos masculinos: história, fabricação e estilos | Ferracini",
    description:
      "Uma jornada pela história, pelo processo de fabricação e pelos estilos dos sapatos masculinos.",
    siteName: "AreaH — Ferracini",
    ...(siteUrl
      ? {
          images: [
            {
              url: "/imgs/img-header.png",
              width: 1902,
              height: 768,
              alt: "Sapatos masculinos Ferracini",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Sapatos masculinos: história, fabricação e estilos | Ferracini",
    description:
      "Uma jornada pela história, pelo processo de fabricação e pelos estilos dos sapatos masculinos.",
    ...(siteUrl ? { images: ["/imgs/img-header.png"] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
