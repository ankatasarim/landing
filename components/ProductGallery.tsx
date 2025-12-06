"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Beyaz Dekor Seti",
    category: "Setler",
    image: "/images/img1.jpg",
    description: "Uyumlu parçalardan oluşan bu set ile dekorasyon zahmetine girmeden tek tıkla şıklığı yakalayın.",
  },
  {
    id: 2,
    name: "Deniz Kabuğu",
    category: "Dekoratif Objeler",
    image: "/images/img2.jpeg",
    description: "Deniz kabuğu formundaki modern tasarımıyla yaşam alanınıza zarif ve doğal bir dokunuş katın.",
  },
  {
    id: 3,
    name: "Dekoratif Tepsi",
    category: "Dekoratif Objeler",
    image: "/images/img3.jpeg",
    description: "Minimal tasarımlı oval formu ile yaşam alanınıza zarif, modern ve düzenli bir görünüm kazandırın.",
  },
  {
    id: 4,
    name: "Dekoratif El Objesi",
    category: "Dekoratif Objeler",
    image: "/images/img4.jpeg",
    description: "İki el formuyla tasarlanmış bu özel dekoratif obje, yaşam alanınıza zarafet, anlam ve estetik bir dokunuş katıyor.",
  },
  {
    id: 5,
    name: "Kadın Figürlü Dekoratif Obje",
    category: "Dekoratif Objeler",
    image: "/images/img5.jpeg",
    description: "Zarif kadın figürünün yumuşak hatlarıyla tasarlanan bu dekoratif obje, bulunduğu ortama estetik, huzurlu ve sanatsal bir atmosfer kazandırır.",
  },
  {
    id: 6,
    name: "Dekoratif Vazo",
    category: "Vazolar",
    image: "/images/img6.jpeg",
    description: "Uyumlu dokusuyla bulunduğu ortama zarif bir hava katan bu dekoratif parça ile tek tıkla şıklığı yakalayın.",
  },
  {
    id: 7,
    name: "Dekoratif Obje",
    category: "Dekoratif Objeler",
    image: "/images/img7.png",
    description: "Uyumlu parçalardan oluşan bu set ile dekorasyon zahmetine girmeden tek tıkla şıklığı yakalayın.",
  },
  {
    id: 8,
    name: "Dekoratif Kalp",
    category: "Dekoratif Objeler",
    image: "/images/img8.png",
    description: "Zarif formu ve minimal çizgileriyle bulunduğu ortama sıcak bir dokunuş katan bu dekoratif parça, tek tıkla şıklığı yaşam alanlarınıza taşıyor.",
  },
  {
    id: 9,
    name: "Örgü Dokulu Mini Saksı",
    category: "Saksılar",
    image: "/images/img9.png",
    description: "Uyumlu tasarımı ile dekorasyon zahmetine girmeden tek tıkla şıklığı yakalayın.",
  },
  {
    id: 10,
    name: "Dekoratif Baloncuk Kenarlı Kalp",
    category: "Dekoratif Objeler",
    image: "/images/img10.png",
    description: "Modern dokusu ile bulunduğu alana estetik bir hava katar.",
  },
];

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

  const categories = ["Tümü", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === "Tümü"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="urunler" className="py-32 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/50 to-white"></div>
      
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 hover:scale-105 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary-50 to-stone-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary-700 font-semibold text-xs rounded-full border border-primary-200 shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-white flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm flex-1">
                  {product.description}
                </p>
                <a
                  href="https://www.shopier.com/aankatasarim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] text-center mt-auto"
                >
                  Satın Al
                  <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

