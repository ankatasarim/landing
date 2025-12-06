"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "h-20" : "h-32 sm:h-40"
        }`}>
          <div className="flex-shrink-0">
            <Link href="/" className="block transition-all hover:scale-105 duration-300 group">
              <Image
                src="/logo-transparent.svg"
                alt="ANKA TASARIM Logo"
                width={220}
                height={73}
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-20 sm:h-24" : "h-24 sm:h-44"
                }`}
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-1">
              <a 
                href="#urunler" 
                onClick={(e) => handleLinkClick(e, '#urunler')}
                className="px-5 py-2.5 text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium text-sm rounded-lg hover:bg-primary-50/80 relative group cursor-pointer"
              >
                <span className="relative z-10">Ürünler</span>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>
              <a 
                href="#ozellikler" 
                onClick={(e) => handleLinkClick(e, '#ozellikler')}
                className="px-5 py-2.5 text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium text-sm rounded-lg hover:bg-primary-50/80 relative group cursor-pointer"
              >
                <span className="relative z-10">Özellikler</span>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>
              <a 
                href="#hakkimizda" 
                onClick={(e) => handleLinkClick(e, '#hakkimizda')}
                className="px-5 py-2.5 text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium text-sm rounded-lg hover:bg-primary-50/80 relative group cursor-pointer"
              >
                <span className="relative z-10">Hakkımızda</span>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>
              <a 
                href="https://www.shopier.com/aankatasarim"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-6 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Mağaza
              </a>
              <a 
                href="#iletisim" 
                onClick={(e) => handleLinkClick(e, '#iletisim')}
                className="ml-2 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-sm cursor-pointer"
              >
                İletişim
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-primary-600 focus:outline-none transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden animate-slide-up">
          <div className={`px-6 pt-6 pb-8 space-y-2 backdrop-blur-xl border-t shadow-xl transition-all duration-300 ${
            isScrolled 
              ? "bg-white/95 border-primary-100" 
              : "bg-white/90 border-white/20"
          }`}>
            <a
              href="#urunler"
              onClick={(e) => handleLinkClick(e, '#urunler')}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-semibold text-sm cursor-pointer"
            >
              Ürünler
            </a>
            <a
              href="#ozellikler"
              onClick={(e) => handleLinkClick(e, '#ozellikler')}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-semibold text-sm cursor-pointer"
            >
              Özellikler
            </a>
            <a
              href="#hakkimizda"
              onClick={(e) => handleLinkClick(e, '#hakkimizda')}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-semibold text-sm cursor-pointer"
            >
              Hakkımızda
            </a>
            <a
              href="https://www.shopier.com/aankatasarim"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shopier Mağaza
            </a>
            <a
              href="#iletisim"
              onClick={(e) => handleLinkClick(e, '#iletisim')}
              className="block px-6 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-sm cursor-pointer"
            >
              İletişim
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

