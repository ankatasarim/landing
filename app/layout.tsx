import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1L77W412G8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1L77W412G8');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

