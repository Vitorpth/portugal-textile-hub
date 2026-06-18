import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portugal Textile Hub | Apparel Sourcing & Supply Chain Partner",
  description:
    "Strategic apparel sourcing and supply chain management in Portugal and Morocco. Connecting brands with trusted manufacturing partners through transparency, expertise and execution.",
  openGraph: {
    title: "Portugal Textile Hub | Apparel Sourcing & Supply Chain Partner",
    description:
      "Strategic apparel sourcing and supply chain management in Portugal and Morocco.",
    url: "https://www.portugaltextilehub.com",
    siteName: "Portugal Textile Hub",
    type: "website",
  },
  verification: {
    google: "1an4Bbg4WISoT6Pj9g08kocLwBvKZo6ojAiWyfsFaqM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-00XQ3QVXBM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-00XQ3QVXBM');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}