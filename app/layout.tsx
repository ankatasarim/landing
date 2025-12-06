import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ 
  subsets: ["latin"], 
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ANKA TASARIM | Taş Tozundan Dekoratif Parçalar",
  description: "Modern ve şık dekoratif aksesuarlar. Taş tozundan el yapımı ürünler. Uygun fiyat, yüksek kalite.",
  keywords: "dekoratif ürünler, taş tozu, ev aksesuarları, modern dekorasyon, el yapımı",
  icons: {
    icon: "/logo-ico.ico",
    shortcut: "/logo-ico.ico",
    apple: "/logo-ico.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

