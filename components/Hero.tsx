"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-stone-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-stone-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(196,152,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(196,152,8,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-40 sm:pt-48 pb-20">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block px-6 py-2 bg-primary-100 border border-primary-200 rounded-full">
              <span className="text-primary-700 font-semibold text-sm">El Yapımı Ürünler</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              <span className="block">Taş Tozundan</span>
              <span className="block text-primary-600 mt-3">Dekoratif Parçalar</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg font-light">
              Modern dekorasyon için <span className="text-primary-600 font-semibold">özenle tasarlanmış</span> taş tozu ürünleri. 
              Her parça <span className="text-primary-600 font-semibold">el yapımı</span> ve benzersiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Link
                href="#urunler"
                className="group relative px-6 py-3 bg-primary-600 text-white rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Keşfet
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <a
                href="https://www.shopier.com/aankatasarim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary-600 text-primary-600 rounded-full font-medium text-sm hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Mağazaya Git
              </a>
              <Link
                href="#iletisim"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-50 transition-all duration-300"
              >
                İletişim
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary-600">100+</div>
                <div className="text-xs text-gray-600 mt-2 font-medium">Müşteri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-xs text-gray-600 mt-2 font-medium">Ürün</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-xs text-gray-600 mt-2 font-medium">El Yapımı</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div className="relative lg:h-[600px] animate-scale-in">
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white shadow-2xl group hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-shadow duration-500">
              <Image
                src="/images/kolaj1.png"
                alt="ANKA TASARIM Ürün Kolajı"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

