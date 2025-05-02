import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StripeKeyWrapper from "@/lib/StripeKeyWrapper";
import LoadScript from "@/components/LoadScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Limo Reservation Software and App - Try All-in-One Limo App | 30 Days Free Trial",
  description: "Elevate your limo business online effortlessly with A to Z Dispatch. Fast, easy, and professional. Start now with 30 days Free Trial. Maximize revenue with All-in-One Limo Reservation Software with App. IOS & Android ready-to-use. Book demo now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description"
          content="Elevate your limo business online effortlessly with A to Z Dispatch. Fast, easy, and professional. Start now with 30 days Free Trial. Maximize revenue with All-in-One Limo Reservation Software with App. IOS & Android ready-to-use. Book demo now" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="canonical" href="https://atozdispatch.com" />
        <link rel="stylesheet" href="/smart-app-banner.css" type="text/css" media="screen" />
        <meta
          name="google-site-verification"
          content="kJHIYg5RqTFrGVc5VFT7r16_ubpXN2I2gkVRc6boahg"
        />

        <meta property="og:title" content="Best Limo Reservation Software and App" />
        <meta property="og:description"
          content="Elevate your limo business online effortlessly with A to Z Dispatch. Fast, easy, and professional. Start now with 30 days Free Trial. Maximize revenue with All-in-One Limo Reservation Software with App. IOS & Android ready-to-use. Book demo now" />
        <meta property="og:image" content="https://atozdispatch.com/static/media/atoz-test-banner.6a7ff3ea2c167c73b576.png" />
        <meta property="og:url" content="https://atozdispatch.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title"
          content="Best Limo Reservation Software and App - Try All-in-One Limo App | 30 Days Free Trial" />
        <meta name="twitter:description"
          content="Elevate your limo business online effortlessly with A to Z Dispatch. Fast, easy, and professional. Start now with 30 days Free Trial. Maximize revenue with All-in-One Limo Reservation Software with App. IOS & Android ready-to-use. Book demo now" />
        <meta name="twitter:image"
          content="https://atozdispatch.com/static/media/atoz-test-banner.6a7ff3ea2c167c73b576.png" />


      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        <StripeKeyWrapper>{children}</StripeKeyWrapper>
        <Footer />
        <LoadScript />
      </body>
    </html>
  );
}
