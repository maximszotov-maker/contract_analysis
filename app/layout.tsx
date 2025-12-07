import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contract Analysis - Анализ договоров на базе ИИ",
  description: "Профессиональный анализ юридических рисков в договорах с помощью искусственного интеллекта. Быстро, точно, доступно.",
  keywords: ["анализ договоров", "юридический анализ", "ИИ", "GPT-4", "проверка договора"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
