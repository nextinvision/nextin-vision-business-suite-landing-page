import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Management Platform | All-in-One Solution",
  description: "Streamline your projects, manage your team, track finances, and grow your business with our powerful all-in-one platform.",
  openGraph: {
    title: "Business Management Platform | All-in-One Solution",
    description: "Streamline your projects, manage your team, track finances, and grow your business.",
    type: "website",
    locale: "en_US",
    url: "https://example.com", // Replace with actual URL when deployed
    siteName: "BusinessPlatform",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
