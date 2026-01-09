"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
  tags?: string[];
  seoDescription?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Beyaz Dekor Seti",
    category: "Setler",
    image: "img1.jpg",
    description: "Uyumlu parçalardan oluşan bu set ile dekorasyon zahmetine girmeden tek tıkla şıklığı yakalayın.",
    price: 550,
    tags: ["DekorSeti", "Beyaz", "Modern", "EvDekorasyonu"],
    seoDescription: "Beyaz dekor seti, modern yaşam alanlarınız için özenle seçilmiş uyumlu parçalardan oluşmaktadır. Minimalist tasarımı ile her mekana uyum sağlar.",
  },
  {
    id: 4,
    name: "Dekoratif El Objesi",
    category: "Dekoratif Objeler",
    image: "img4.jpeg",
    description: "İki el formuyla tasarlanmış bu özel dekoratif obje, yaşam alanınıza zarafet, anlam ve estetik bir dokunuş katıyor.",
    price: 250,
    tags: ["Figür", "ElSanatı", "Dekoratif", "Hediye"],
  },
  {
    id: 5,
    name: "Kadın Figürlü Dekoratif Obje",
    category: "Dekoratif Objeler",
    image: "img5.jpeg",
    description: "Zarif kadın figürünün yumuşak hatlarıyla tasarlanan bu dekoratif obje, bulunduğu ortama estetik, huzurlu ve sanatsal bir atmosfer kazandırır.",
    price: 250,
    tags: ["Figür", "KadınFigürü", "Dekoratif"],
  },
  {
    id: 6,
    name: "Dekoratif Vazo",
    category: "Vazolar",
    image: "img6.jpeg",
    description: "Uyumlu dokusuyla bulunduğu ortama zarif bir hava katan bu dekoratif parça ile tek tıkla şıklığı yakalayın.",
    price: 250,
    tags: ["Vazo", "ÇiçekVazosu", "Dekoratif", "Modern"],
  },
  {
    id: 7,
    name: "Dekoratif Obje",
    category: "Dekoratif Objeler",
    image: "img7.png",
    description: "Uyumlu parçalardan oluşan bu set ile dekorasyon zahmetine girmeden tek tıkla şıklığı yakalayın.",
    price: 250,
    tags: ["DekoratifObje", "Modern", "Minimalist", "EvDekorasyonu"],
  },
  {
    id: 8,
    name: "Dekoratif Kalp",
    category: "Dekoratif Objeler",
    image: "img8.png",
    description: "Zarif formu ve minimal çizgileriyle bulunduğu ortama sıcak bir dokunuş katan bu dekoratif parça, tek tıkla şıklığı yaşam alanlarınıza taşıyor.",
    price: 250,
    tags: ["Kalp", "Sevgi", "Dekoratif", "Hediye"],
  },
  {
    id: 9,
    name: "Örgü Dokulu Mini Saksı",
    category: "Saksılar",
    image: "img9.png",
    description: "Uyumlu tasarımı ile dekorasyon zahmetine girmeden tek tıkla şıklığı yakalayın.",
    price: 250,
    tags: ["Saksı", "BitkiSaksısı", "Mini", "Dekoratif"],
  },
  {
    id: 11,
    name: "Geo Mini Vazo - 1",
    category: "Dekoratif Objeler",
    image: "img11.png",
    description: "Zarif tasarımıyla yaşam alanınıza modern ve estetik bir dokunuş katın.",
    price: 250,
    tags: ["Vazo", "Geometrik", "Mini", "Modern"],
  },
  {
    id: 12,
    name: "Geo Mini Vazo - 2",
    category: "Dekoratif Objeler",
    image: "img12.png",
    description: "Minimal çizgileriyle bulunduğu ortama şıklık ve zarafet katan dekoratif parça.",
    price: 250,
    tags: ["Vazo", "Geometrik", "Mini", "Minimalist"],
  },
  {
    id: 13,
    name: "Geo Mini Vazo - 3",
    category: "Dekoratif Objeler",
    image: "img13.png",
    description: "Özenle tasarlanmış bu dekoratif obje ile yaşam alanlarınıza özel bir dokunuş ekleyin.",
    price: 250,
    tags: ["Vazo", "Geometrik", "Mini", "Dekoratif"],
  },
  {
    id: 14,
    name: "Baloncuk Desenli Yuvarlak Tabak - Büyük",
    category: "Dekoratif Objeler",
    image: "img14.png",
    description: "Modern tasarımıyla bulunduğu ortama estetik bir hava katan dekoratif parça.",
    price: 250,
    tags: ["Tabak", "ServisTabağı", "BaloncukDesenli", "Dekoratif"],
  },
  {
    id: 15,
    name: "Baloncuk Desenli Yuvarlak Tabak - Küçük",
    category: "Dekoratif Objeler",
    image: "img15.png",
    description: "Zarif formu ile yaşam alanınıza şıklık ve modern bir görünüm kazandırın.",
    price: 250,
    tags: ["Tabak", "ServisTabağı", "BaloncukDesenli", "Dekoratif"],
  },
  {
    id: 16,
    name: "İri Baloncuklu Dekoratif Obje",
    category: "Dekoratif Objeler",
    image: "img16.png",
    description: "Uyumlu tasarımıyla dekorasyon zahmetine girmeden tek tıkla şıklığı yakalayın.",
    price: 250,
    tags: ["DekoratifObje", "BaloncukDesenli", "Modern", "EvDekorasyonu"],
  },
  {
    id: 17,
    name: "Baloncuk Desenli Yatay Tabak",
    category: "Dekoratif Objeler",
    image: "img17.png",
    description: "Minimalist yaklaşımıyla bulunduğu ortama sade ve zarif bir dokunuş katın.",
    price: 250,
    tags: ["Tabak", "ServisTabağı", "BaloncukDesenli", "Minimalist"],
  },
  {
    id: 18,
    name: "Baloncuk Desenli Kalp",
    category: "Dekoratif Objeler",
    image: "img18.png",
    description: "Özel tasarımıyla yaşam alanlarınıza estetik ve modern bir atmosfer kazandırın.",
    price: 250,
    tags: ["Kalp", "Sevgi", "BaloncukDesenli", "Hediye"],
  },
  {
    id: 19,
    name: "Deniz Kabuğu",
    category: "Dekoratif Objeler",
    image: "img19.png",
    description: "Zarif çizgileriyle bulunduğu ortama şıklık ve huzur veren dekoratif parça.",
    price: 250,
    tags: ["DenizTemalı", "Doğal", "Dekoratif", "Huzur"],
  },
  {
    id: 20,
    name: "Deniz Yıldızı",
    category: "Dekoratif Objeler",
    image: "img20.png",
    description: "Modern dokusu ile yaşam alanınıza özel bir görünüm kazandıran dekoratif obje.",
    price: 250,
    tags: ["DenizTemalı", "Doğal", "Dekoratif", "Huzur"],
  },
  {
    id: 21,
    name: "Düz Dekoratif Tepsi",
    category: "Dekoratif Objeler",
    image: "img21.png",
    description: "Uyumlu parçalardan oluşan bu dekoratif obje ile tek tıkla şıklığı yakalayın.",
    price: 250,
    tags: ["Tepsi", "DekoratifTepsi", "Minimalist", "Modern"],
  },
  {
    id: 22,
    name: "Bulut Desenli Yuvarlak Tabak",
    category: "Dekoratif Objeler",
    image: "img22.png",
    description: "Zarif formu ve minimal tasarımıyla bulunduğu ortama estetik bir hava katar.",
    price: 250,
    tags: ["Tabak", "ServisTabağı", "BulutDesenli", "Dekoratif"],
  },
  {
    id: 23,
    name: "Bulut Desenli Yatay Tabak",
    category: "Dekoratif Objeler",
    image: "img23.png",
    description: "Özenle tasarlanmış bu parça ile yaşam alanlarınıza modern bir dokunuş ekleyin.",
    price: 250,
    tags: ["Tabak", "ServisTabağı", "BulutDesenli", "Modern"],
  },
  {
    id: 24,
    name: "Şık Yüzük Vazo Seti",
    category: "Dekoratif Objeler",
    image: "img24.png",
    description: "Minimal çizgileriyle bulunduğu ortama şıklık ve zarafet katan dekoratif obje.",
    price: 250,
    tags: ["Vazo", "VazoSeti", "YüzükVazo", "Dekoratif"],
  },
  {
    id: 25,
    name: "Şık Yüzük Vazo - Küçük",
    category: "Dekoratif Objeler",
    image: "img25.png",
    description: "Modern tasarımıyla yaşam alanınıza estetik ve özel bir görünüm kazandırın.",
    price: 250,
    tags: ["Vazo", "YüzükVazo", "Dekoratif", "Modern"],
  },
  {
    id: 26,
    name: "Şık Yüzük Vazo - Büyük",
    category: "Dekoratif Objeler",
    image: "img26.png",
    description: "Zarif dokusu ile bulunduğu ortama sıcak ve modern bir atmosfer katan parça.",
    price: 250,
    tags: ["Vazo", "YüzükVazo", "Dekoratif", "Modern"],
    seoDescription: "Şık yüzük vazo büyük boy, modern dekorasyon anlayışınıza uygun olarak tasarlanmıştır. Zarif formu ve minimal çizgileriyle yaşam alanlarınıza estetik bir değer katar.",
  },
  {
    id: 27,
    name: "Mini Dekoratif Kase",
    category: "Dekoratif Objeler",
    image: "img27.png",
    description: "Uyumlu tasarımıyla dekorasyon zahmetine girmeden tek tıkla şıklığı yakalayın.",
    price: 250,
    tags: ["Kase", "DekoratifKase", "Mini", "Modern"],
  },
  {
    id: 28,
    name: "3'lü Geo Vazo Seti",
    category: "Dekoratif Objeler",
    image: "img28.png",
    description: "Özel formuyla yaşam alanlarınıza estetik ve zarif bir dokunuş katın.",
    price: 250,
    tags: ["Vazo", "VazoSeti", "Mini", "Dekoratif", "Geometrik"],
  },
  {
    id: 29,
    name: "2'li Bulut Desenli Tabak Seti",
    category: "Dekoratif Objeler",
    image: "img29.png",
    description: "Minimalist yaklaşımıyla bulunduğu ortama sade ve şık bir görünüm kazandırın.",
    price: 250,
    tags: ["Tabak", "TabakSeti", "BulutDesenli", "Dekoratif"],
  },
];

export default function ProductGallery() {
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedProductIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProductIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedProductIndex !== null) {
      const newIndex = selectedProductIndex > 0 
        ? selectedProductIndex - 1 
        : products.length - 1;
      setSelectedProductIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedProductIndex !== null) {
      const newIndex = selectedProductIndex < products.length - 1 
        ? selectedProductIndex + 1 
        : 0;
      setSelectedProductIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProductIndex !== null) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowLeft') {
          const newIndex = selectedProductIndex > 0 
            ? selectedProductIndex - 1 
            : products.length - 1;
          setSelectedProductIndex(newIndex);
        } else if (e.key === 'ArrowRight') {
          const newIndex = selectedProductIndex < products.length - 1 
            ? selectedProductIndex + 1 
            : 0;
          setSelectedProductIndex(newIndex);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProductIndex]);

  const currentProduct = selectedProductIndex !== null ? products[selectedProductIndex] : null;

  return (
    <>
      <section id="urunler" className="py-32 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary-100 border border-primary-200 rounded-full mb-6">
              <span className="text-primary-700 font-semibold text-sm">Koleksiyon</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Ürün</span>
              <span className="block text-primary-600 mt-3">Kataloğumuz</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Taş tozundan üretilmiş <span className="text-primary-600 font-semibold">özenle tasarlanmış</span> dekoratif ürünlerimizi keşfedin.
            </p>
          </div>

          {/* Product Count */}
          <div className="mb-8 text-left">
            <span className="text-gray-600 font-medium">{products.length} ürün</span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                onClick={() => openModal(index)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={`/images/products/${product.image}`}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                </div>
                
                {/* Product Info */}
                <div className="px-0 pt-2">
                  <h3 className="text-gray-900 font-semibold text-sm">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProductIndex !== null && currentProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 md:p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl md:rounded-2xl max-w-6xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Mobile Only */}
            <button
              onClick={closeModal}
              className="md:hidden absolute top-4 right-4 z-20 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container - Left Side */}
            <div className="relative w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-4 md:p-8 min-h-[400px] md:min-h-0 flex-shrink-0">
              {/* Navigation Buttons - Desktop Only */}
              {products.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="hidden md:flex absolute left-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full items-center justify-center text-gray-700 transition-all duration-300 shadow-lg z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="hidden md:flex absolute right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full items-center justify-center text-gray-700 transition-all duration-300 shadow-lg z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              <Image
                src={`/images/products/${currentProduct.image}`}
                alt={currentProduct.name}
                width={800}
                height={800}
                className="object-contain max-h-[60vh] md:max-h-[80vh] w-auto h-auto rounded-lg"
                priority
              />
            </div>

            {/* Product Info - Right Side */}
            <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-between md:overflow-y-auto flex-shrink-0">
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-gray-900 font-bold text-xl md:text-3xl mb-4">{currentProduct.name}</h3>
                
                {/* Description */}
                <div className="mb-4 md:mb-6">
                  <p className="text-gray-600 text-base md:text-lg mb-3 md:mb-4 leading-relaxed">{currentProduct.description}</p>
                  
                  {/* SEO Description */}
                  {currentProduct.seoDescription && (
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                      {currentProduct.seoDescription}
                    </p>
                  )}
                  
                  {/* SEO Content */}
                  <div className="text-gray-500 text-xs md:text-sm leading-relaxed space-y-2">
                    <p>
                      Bu özenle tasarlanmış dekoratif ürün, taş tozundan üretilmiş olup modern yaşam alanlarınıza zarif bir dokunuş katmaktadır. 
                      Minimalist tasarım anlayışıyla üretilen bu parça, hem fonksiyonel hem de estetik bir değer sunmaktadır.
                    </p>
                    <p>
                      Dekoratif objeler, ev dekorasyonunda önemli bir yere sahiptir. Bu ürün, yaşam alanlarınızı zenginleştirirken 
                      aynı zamanda modern ve şık bir görünüm kazandırır. El yapımı detayları ve özenli işçiliği ile dikkat çeken bu parça, 
                      koleksiyonunuzun vazgeçilmez bir parçası olacaktır.
                    </p>
                  </div>
                </div>

                {/* Tags */}
                {currentProduct.tags && currentProduct.tags.length > 0 && (
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-2">
                      {currentProduct.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-3 md:space-y-4 mt-4 md:mt-0">
                {/* Navigation Buttons - Mobile Only */}
                {products.length > 1 && (
                  <div className="flex justify-between items-center gap-2 md:hidden">
                    <button
                      onClick={goToPrevious}
                      className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 transition-all duration-300 text-sm"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Önceki
                    </button>
                    <button
                      onClick={goToNext}
                      className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 transition-all duration-300 text-sm"
                    >
                      Sonraki
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
                
                <a
                  href="https://www.shopier.com/aankatasarim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 md:py-4 px-4 md:px-6 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-base md:text-base text-center shadow-lg hover:scale-[1.02] z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  Satın Al
                </a>
                {products.length > 1 && (
                  <p className="text-gray-500 text-xs md:text-sm text-center">
                    {selectedProductIndex + 1} / {products.length}
                  </p>
                )}
              </div>
              
              {/* Close Button - Desktop Only */}
              <div className="hidden md:flex absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

