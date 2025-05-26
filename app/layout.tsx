import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "All of Us Now",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-QT94YW487S" />
    </html>
  );
}
