import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pixel = localFont({
  src: [
    { path: "../fonts/Galmuri11.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Galmuri11-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pixel",
  display: "swap",
  adjustFontFallback: false,
});

const mono = localFont({
  src: "../fonts/GalmuriMono11.woff2",
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "최예준 ♥ 양윤주",
  description: "2027년 7월 10일 토요일 오전 11시, 서울대학교 연구공원",
  openGraph: {
    title: "최예준 ♥ 양윤주",
    description: "2027년 7월 10일 토요일 오전 11시, 서울대학교 연구공원",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07091a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pixel.variable} ${mono.variable}`}>
      <body className={pixel.className}>{children}</body>
    </html>
  );
}
