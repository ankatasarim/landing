import Image from "next/image";

export default function About() {
  return (
    <section id="hakkimizda" className="py-32 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <div className="inline-block px-6 py-2 bg-primary-100 border border-primary-200 rounded-full">
              <span className="text-primary-700 font-semibold text-sm">Hakkımızda</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Hakkımızda</span>
            </h2>
            
            <div className="space-y-5 text-base lg:text-lg text-gray-600 leading-relaxed">
              <p className="text-lg lg:text-xl font-light">
                <span className="text-primary-600 font-bold text-2xl">ANKA TASARIM</span> olarak, taş tozundan 
                üretilen dekoratif parçalarla <span className="text-primary-600 font-semibold">modern ve şık</span> ev aksesuarları sunuyoruz.
              </p>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Her ürünümüz özenle tasarlanmış ve el yapımı olarak üretilmektedir. 
                Minimalist ve modern dekorasyon anlayışına uygun ürünlerimizle 
                evlerinize zarafet katıyoruz.
              </p>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                <span className="text-primary-600 font-semibold">Uygun fiyat, yüksek kalite</span> 
                {" "}prensibiyle çalışıyoruz. Müşteri memnuniyeti bizim için önceliklidir.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 pt-10">
              <div className="bg-white p-6 rounded-2xl border border-primary-100/40 hover:border-primary-200/60 transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600 font-semibold text-xs">Mutlu Müşteri</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-primary-100/40 hover:border-primary-200/60 transform rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 font-semibold text-xs">Ürün Çeşidi</div>
              </div>
            </div>
          </div>

          {/* Right Side - Floating Product Images */}
          <div className="relative h-[500px] lg:h-[650px] animate-scale-in group">
            <div className="relative w-full h-full">
              {/* Subtle Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/15 via-primary-50/10 to-transparent rounded-full blur-2xl opacity-40"></div>
              
              {/* Floating Product Card 1 - img29 (Top Left) */}
              <div className="absolute top-[5%] left-[5%] w-28 h-28 lg:w-36 lg:h-36 transform rotate-[-4deg] hover:rotate-[-2deg] hover:scale-105 transition-all duration-300 z-10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-primary-100/40 hover:shadow-xl transition-all duration-300 animate-float">
                  <Image
                    src="/images/products/img29.png"
                    alt="ANKA TASARIM Ürün"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Floating Product Card 2 - img24 (Top Right) */}
              <div className="absolute top-[8%] right-[5%] w-28 h-28 lg:w-36 lg:h-36 transform rotate-[5deg] hover:rotate-[2deg] hover:scale-105 transition-all duration-300 z-10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-primary-100/40 hover:shadow-xl transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Image
                    src="/images/products/img20.png"
                    alt="ANKA TASARIM Ürün"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Floating Product Card 3 - img20 (Center) */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-36 h-36 lg:w-44 lg:h-44 transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-20">
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl border border-primary-100/40 hover:shadow-2xl transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                  <Image
                    src="/images/products/img24.png"
                    alt="ANKA TASARIM Ürün"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Floating Product Card 4 - img28 (Bottom Left) */}
              <div className="absolute bottom-[8%] left-[5%] w-28 h-28 lg:w-36 lg:h-36 transform rotate-[-6deg] hover:rotate-[-3deg] hover:scale-105 transition-all duration-300 z-10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-primary-100/40 hover:shadow-xl transition-all duration-300 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Image
                    src="/images/products/img28.png"
                    alt="ANKA TASARIM Ürün"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Floating Product Card 5 - img16 (Bottom Right) */}
              <div className="absolute bottom-[5%] right-[5%] w-28 h-28 lg:w-36 lg:h-36 transform rotate-[4deg] hover:rotate-[2deg] hover:scale-105 transition-all duration-300 z-10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-primary-100/40 hover:shadow-xl transition-all duration-300 animate-float" style={{ animationDelay: '2s' }}>
                  <Image
                    src="/images/products/img16.png"
                    alt="ANKA TASARIM Ürün"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

