import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fantasyfutbol.co"),
  alternates: {
    canonical: "./",
  },
  title: "Fantasy Fútbol - Fantasy Soccer, Finally Done Right",
  description: "Draft entire clubs from Europe's top 5 leagues. Earn points across every competition — leagues, cups, and Champions League nights.",
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-sans antialiased`}
      >
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
