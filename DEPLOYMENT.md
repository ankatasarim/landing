# Canlıya Alma Rehberi (Deployment)

Siteyi canlıya almak için aşağıdaki adımları takip edin.

## ⚡ Hızlı Deploy (Vercel - Önerilen)

Vercel, Next.js için en kolay ve en hızlı deployment platformudur.

### 1. GitHub'a Yükleyin

1. Projenizi GitHub'a yükleyin:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
   git push -u origin main
   ```

2. **ÖNEMLİ:** `.env.local` dosyasını `.gitignore`'a ekleyin (zaten ekli)
   - Bu dosya GitHub'a yüklenmemeli

### 2. Vercel'e Deploy Edin

1. https://vercel.com adresine gidin
2. **Sign Up** ile GitHub hesabınızla giriş yapın
3. **Add New Project** butonuna tıklayın
4. GitHub repository'nizi seçin
5. **Import** butonuna tıklayın

### 3. Environment Variables Ekleyin

Vercel'de proje ayarlarına gidin ve **Environment Variables** sekmesinde şunları ekleyin:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Nasıl eklenir:**
1. Vercel Dashboard → Projenizi seçin
2. **Settings** → **Environment Variables**
3. Her bir değişkeni tek tek ekleyin:
   - Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Value: EmailJS Service ID'niz
   - Environment: Production, Preview, Development (hepsini seçin)
4. **Save** butonuna tıklayın
5. Diğer değişkenleri de aynı şekilde ekleyin

### 4. Deploy

1. **Deploy** butonuna tıklayın
2. Birkaç dakika bekleyin
3. Deployment tamamlandığında siteniz canlıda olacak!

**Not:** İlk deploy'dan sonra her kod değişikliğinde otomatik olarak yeniden deploy edilecek.

---

## 🌐 Alternatif Deployment Platformları

### Netlify

1. https://www.netlify.com adresine gidin
2. GitHub ile giriş yapın
3. **Add new site** → **Import an existing project**
4. Repository'nizi seçin

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`

**Environment Variables:**
- Site settings → Environment variables
- Aynı değişkenleri ekleyin

### Railway

1. https://railway.app adresine gidin
2. GitHub ile giriş yapın
3. **New Project** → **Deploy from GitHub repo**
4. Repository'nizi seçin

**Environment Variables:**
- Project → Variables
- Aynı değişkenleri ekleyin

### VPS (Kendi Sunucunuz)

Kendi sunucunuzda deploy etmek için:

```bash
# Sunucuya bağlanın
ssh kullanici@sunucu-ip

# Projeyi klonlayın
git clone https://github.com/KULLANICI_ADI/REPO_ADI.git
cd REPO_ADI

# Bağımlılıkları yükleyin
npm install

# Production build
npm run build

# PM2 ile çalıştırın (kurulum gerekli)
npm install -g pm2
pm2 start npm --name "ankatasarim" -- start

# PM2'yi sistem başlangıcında çalıştırın
pm2 startup
pm2 save

# Nginx reverse proxy ayarlayın (örnek)
```

**Environment Variables:**
- Sunucuda `.env.local` dosyası oluşturun
- Veya `export` komutları ile sistem değişkenleri olarak ekleyin

---

## ✅ Deployment Öncesi Kontrol Listesi

- [ ] Tüm kod değişiklikleri commit edildi
- [ ] `.env.local` dosyası `.gitignore`'da (GitHub'a yüklenmemeli)
- [ ] Environment variables hazır (EmailJS bilgileri)
- [ ] `npm run build` komutu hatasız çalışıyor
- [ ] Tüm linkler doğru (Shopier, Instagram, WhatsApp)
- [ ] Favicon çalışıyor
- [ ] İletişim formu test edildi

---

## 🔧 Deployment Sonrası Yapılacaklar

1. **Site URL'ini kontrol edin**
   - Vercel: `https://proje-adi.vercel.app`
   - Netlify: `https://proje-adi.netlify.app`

2. **EmailJS Domain Ayarları** (EmailJS kullanıyorsanız)
   - EmailJS Dashboard → Settings → Authorized Domains
   - Site URL'inizi ekleyin (ör: `ankatasarim.com`, `www.ankatasarim.com`)

3. **Özel Domain Bağlama** (İsteğe bağlı)
   - Vercel/Netlify → Domain Settings
   - Kendi domain'inizi ekleyin
   - DNS ayarlarını yapın

4. **Test Edin**
   - Tüm sayfaları ziyaret edin
   - İletişim formunu test edin
   - Shopier linklerini kontrol edin
   - Mobil görünümü test edin

---

## 🐛 Sorun Giderme

### Environment Variables Çalışmıyor

- Değişken isimlerinin `NEXT_PUBLIC_` ile başladığından emin olun
- Deployment sonrası yeniden deploy edin
- Browser console'da hataları kontrol edin

### Build Hataları

```bash
# Lokal olarak test edin
npm run build
```

### EmailJS Çalışmıyor

- Environment variables'ların doğru eklendiğinden emin olun
- EmailJS Dashboard'da domain'inizin authorized olduğundan emin olun
- Logs sekmesinden hataları kontrol edin

---

## 📝 Notlar

- **Environment Variables:** Production, Preview ve Development için aynı değerleri kullanabilirsiniz
- **Automatic Deployments:** GitHub'a push yaptığınızda otomatik deploy edilir
- **Custom Domain:** Kendi domain'inizi eklemek için DNS ayarları gerekir
- **SSL Certificate:** Vercel ve Netlify otomatik olarak SSL sertifikası sağlar

---

## 🆘 Yardım

Sorun yaşarsanız:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Deployment: https://nextjs.org/docs/deployment

