import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "mk-fair-price-plumber.mikecsweet.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const siteUrl = `${protocol}://${host}`;

  return {
    title: "MK Fair Price Plumber",
    description:
      "Family run plumbing and heating services in Milton Keynes. Boiler repairs, plumbing emergencies, bathrooms, heating and narrowboat services.",
    other: {
      "theme-color": "#102b3e",
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "MK Fair Price Plumbing & Heating",
      description: "Fair prices. Proper workmanship.",
      url: siteUrl,
      images: [`${siteUrl}/og.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: "MK Fair Price Plumbing & Heating",
      description: "Fair prices. Proper workmanship.",
      images: [`${siteUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
