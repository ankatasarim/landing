"use client";

import { Hand, Award, Sparkles, Wallet } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "El Yapımı",
      description: "Her ürün özenle ve titizlikle el yapımı olarak üretilmektedir.",
      icon: Hand,
      gradient: "from-primary-600 to-primary-800",
    },
    {
      title: "Yüksek Kalite",
      description: "Taş tozundan üretilen dayanıklı ve uzun ömürlü ürünler.",
      icon: Award,
      gradient: "from-primary-500 to-primary-700",
    },
    {
      title: "Modern Tasarım",
      description: "Şık ve modern dekorasyon anlayışına uygun minimalist tasarımlar.",
      icon: Sparkles,
      gradient: "from-primary-700 to-primary-900",
    },
    {
      title: "Uygun Fiyat",
      description: "Kaliteli ürünleri uygun fiyatlarla sunuyoruz.",
      icon: Wallet,
      gradient: "from-primary-600 to-primary-800",
    },
  ];

  return (
    <section id="ozellikler" className="py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary-100 border border-primary-200 rounded-full mb-8">
            <span className="text-primary-700 font-semibold text-sm">Özellikler</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Neden</span>
            <span className="block text-primary-600 mt-3">ANKA TASARIM?</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Her ürünümüz <span className="text-primary-600 font-semibold">özenle seçilmiş</span> malzemeler ve titiz işçilikle üretilmektedir.
          </p>
        </div>

        {/* Features Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg p-8"
              >
                {/* Icon - no background, just colored */}
                <div className="absolute top-5 right-5">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-5">
                    <div className={`w-12 h-1 bg-gradient-to-r ${feature.gradient} mb-4 group-hover:w-20 transition-all duration-500 rounded-full`}></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

