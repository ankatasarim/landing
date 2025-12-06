import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="mb-8">
              <Image
                src="/logo-transparent.svg"
                alt="ANKA TASARIM Logo"
                width={280}
                height={93}
                className="h-20 sm:h-28 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-8 max-w-md text-base leading-relaxed">
              Taş tozundan üretilen modern ve şık dekoratif parçalar. 
              Uygun fiyat, yüksek kalite ile evlerinize zarafet katıyoruz.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/aankatasarim/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-primary-50 hover:bg-primary-600 flex items-center justify-center text-primary-600 hover:text-white transition-all duration-300 hover:scale-110 border border-primary-100"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-base mb-6 uppercase tracking-wide">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#urunler" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm font-medium relative group">
                  Ürünler
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="#ozellikler" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm font-medium relative group">
                  Özellikler
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="#hakkimizda" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm font-medium relative group">
                  Hakkımızda
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.shopier.com/aankatasarim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm font-medium relative group inline-flex items-center gap-1"
                >
                  <span className="relative">
                    Mağaza
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <Link href="#iletisim" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm font-medium relative group">
                  İletişim
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 font-bold text-base mb-6 uppercase tracking-wide">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <a href="mailto:aankatasarim@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">
                  aankatasarim@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <a 
                  href="https://wa.me/905453366828" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
                >
                  +90 545 336 68 28
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <a
                  href="https://maps.app.goo.gl/1Gx7iRBuYjufjpjo7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
                >
                  Çelebi Mehmet Paşa caddesi, Mimar Sinan mahallesi, aybek sokak no:20 Ataşehir/İstanbul
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-medium">
              &copy; {new Date().getFullYear()} ANKA TASARIM. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

