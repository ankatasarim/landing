# ANKA TASARIM - Landing Page

Taş tozundan dekoratif ürünler satan işletme için modern bir landing page/katalog websitesi.

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **App Router** - Next.js App Router yapısı

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Özellikler

- ✅ Modern ve responsive tasarım
- ✅ Hero section
- ✅ Ürün kataloğu ve filtreleme
- ✅ Özellikler bölümü
- ✅ Hakkımızda bölümü
- ✅ İletişim formu
- ✅ Instagram entegrasyonu
- ✅ Mobil uyumlu navigasyon

## Proje Yapısı

```
ankatasarim/
├── app/
│   ├── layout.tsx      # Ana layout
│   ├── page.tsx        # Ana sayfa
│   └── globals.css     # Global stiller
├── components/
│   ├── Navbar.tsx      # Navigasyon çubuğu
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Özellikler bölümü
│   ├── ProductGallery.tsx  # Ürün galerisi
│   ├── About.tsx       # Hakkımızda
│   ├── Contact.tsx     # İletişim formu
│   └── Footer.tsx      # Footer
└── package.json
```

## Özelleştirme

### Renkler
Renkleri `tailwind.config.ts` dosyasındaki `primary` ve `stone` renk paletlerinden özelleştirebilirsiniz.

### Ürünler
Ürünleri `components/ProductGallery.tsx` dosyasındaki `products` array'inden güncelleyebilirsiniz.

### İletişim Bilgileri
İletişim bilgilerini `components/Contact.tsx` ve `components/Footer.tsx` dosyalarından güncelleyebilirsiniz.

## Build

Production build için:
```bash
npm run build
npm start
```

## Lisans

Bu proje özel kullanım içindir.

