import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "西岡優太 | Portfolio",
  description:
    "Web / Mobile Engineer志望として、研究・実務・個人開発の成果を整理したポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
