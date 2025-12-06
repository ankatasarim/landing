# Dosya Taşıma Talimatları

Logo ve ürün resimlerini `public` klasörüne taşımanız gerekiyor.

## Yapılacaklar

1. **Logo dosyasını taşıyın:**
   ```
   app/assets/ankatasarim-logo.svg → public/ankatasarim-logo.svg
   ```

2. **Ürün resimlerini taşıyın:**
   ```
   app/assets/img1.jpg → public/images/img1.jpg
   app/assets/img2.jpeg → public/images/img2.jpeg
   app/assets/img3.jpeg → public/images/img3.jpeg
   app/assets/img4.jpeg → public/images/img4.jpeg
   app/assets/img5.jpeg → public/images/img5.jpeg
   app/assets/img6.jpeg → public/images/img6.jpeg
   ```

## Klasör Yapısı

Taşıma işleminden sonra `public` klasörünüz şu şekilde olmalı:

```
public/
├── ankatasarim-logo.svg
└── images/
    ├── img1.jpg
    ├── img2.jpeg
    ├── img3.jpeg
    ├── img4.jpeg
    ├── img5.jpeg
    └── img6.jpeg
```

## Terminal Komutları (Mac/Linux)

Terminal'de proje klasöründe şu komutları çalıştırabilirsiniz:

```bash
# public/images klasörünü oluştur
mkdir -p public/images

# Logo'yu taşı
cp app/assets/ankatasarim-logo.svg public/

# Resimleri taşı
cp app/assets/img*.{jpg,jpeg} public/images/
```

## Manuel Taşıma

Dosyaları Finder'da manuel olarak da taşıyabilirsiniz:
1. `app/assets/ankatasarim-logo.svg` dosyasını `public/` klasörüne sürükleyin
2. `app/assets/img*.{jpg,jpeg}` dosyalarını `public/images/` klasörüne sürükleyin

## Not

Dosyaları taşıdıktan sonra `app/assets` klasörünü silebilirsiniz (artık kullanılmıyor).

---

# EmailJS Kurulumu (İletişim Formu)

İletişim formunun çalışması için EmailJS kurulumu gereklidir.

## 1. EmailJS Hesabı Oluşturma

1. https://www.emailjs.com/ adresine gidin
2. Ücretsiz hesap oluşturun (aylık 200 e-posta ücretsiz)

## 2. Email Servisi Ekleme

1. Dashboard'da **Email Services** sekmesine gidin
2. **Add New Service** butonuna tıklayın
3. Gmail, Outlook veya başka bir servis seçin
4. Servisi bağlayın ve kaydedin
5. **Service ID**'yi not edin (örn: `service_xxxxx`)

## 3. Email Template Oluşturma

1. **Email Templates** sekmesine gidin
2. **Create New Template** butonuna tıklayın
3. Aşağıdaki template'i kullanın:

```
Konu: Yeni İletişim Formu Mesajı - {{from_name}}

Mesaj:
Ad Soyad: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}

Mesaj:
{{message}}

---
Bu mesaj ANKA TASARIM web sitesinden gönderilmiştir.
```

4. Template'i kaydedin ve **Template ID**'yi not edin (örn: `template_xxxxx`)

## 4. Public Key Alma

1. **Account** → **General** sekmesine gidin
2. **Public Key**'i kopyalayın

## 5. Environment Variables Ayarlama

Proje kök dizininde `.env.local` dosyası oluşturun:

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Örnek:**
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz789
```

## 6. Paketleri Yükleme

```bash
npm install
```

## 7. Test Etme

1. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

2. Tarayıcıda http://localhost:3000 adresine gidin
3. İletişim formunu doldurup gönderin
4. E-posta kutunuzu kontrol edin

## Sorun Giderme

- E-posta gelmiyorsa, EmailJS Dashboard'da **Logs** sekmesinden hataları kontrol edin
- Environment variables'ların `NEXT_PUBLIC_` ile başladığından emin olun
- Sunucuyu yeniden başlatmayı deneyin (`.env.local` değişiklikleri için gerekli)

