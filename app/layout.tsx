import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coffee-jfive.vercel.app"),

  title: {
    default: "COFFEE J' FIVE SINGKI'",
    template: "%s | COFFEE J' FIVE SINGKI'",
  },

  description:
    "COFFEE J' FIVE SINGKI' — nikmati makanan, minuman, dan suasana hangat bersama keluarga, teman, dan orang-orang terdekat.",

  keywords: [
    "Coffee J Five",
    "Coffee J' Five",
    "Coffee Singki",
    "Kopi Singki",
    "Cafe Singki",
    "COFFEE J' FIVE SINGKI'",
    "Makanan Singki",
    "Minuman Singki",
  ],

  authors: [
    {
      name: "COFFEE J' FIVE SINGKI'",
    },
  ],

  creator: "COFFEE J' FIVE SINGKI'",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "COFFEE J' FIVE SINGKI'",
    description:
      "Nikmati makanan, minuman, dan suasana hangat bersama keluarga, teman, dan orang-orang terdekat.",
    url: "https://coffee-jfive.vercel.app",
    siteName: "COFFEE J' FIVE SINGKI'",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Logo COFFEE J' FIVE SINGKI'",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "COFFEE J' FIVE SINGKI'",
    description:
      "Nikmati makanan, minuman, dan suasana hangat bersama keluarga, teman, dan orang-orang terdekat.",
    images: ["/icon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}