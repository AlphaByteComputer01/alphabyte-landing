import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ALPHABYTE | Building Africa's Trusted Digital Infrastructure",
  description:
    "ALPHABYTE develops secure digital platforms for governance, commerce and education. Discover UniVote, our flagship electronic voting platform.",
  keywords: [
    "Alphabyte",
    "UniVote",
    "Electronic Voting",
    "GovTech",
    "Africa",
    "Startup",
    "DR Congo",
  ],
  authors: [
    {
      name: "Beniel Moka",
    },
  ],
  creator: "ALPHABYTE",
  openGraph: {
    title: "ALPHABYTE",
    description:
      "Building Africa's Trusted Digital Infrastructure.",
    type: "website",
  },
  icons: {
    icon: "/logo/favicon.ico",
    shortcut: "/logo/favicon.ico",
    apple: "/logo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
