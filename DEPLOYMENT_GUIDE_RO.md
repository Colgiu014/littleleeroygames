# 🇷🇴 Deployment & Domain Guide for Romanian PFA

## 📋 For Your PFA (Persoană Fizică Autorizată)

### Business Information to Add
Once you have your PFA registered, update the website with:

**Footer** (`components/Footer.tsx`):
```typescript
// Add your business details
<p className="text-gray-400 text-sm">
  Little Leeroy Games - PFA [Your Name]
  <br />
  CUI: [Your CUI number]
  <br />
  Reg. Com: [Your registration number]
</p>
```

**Contact Page** (`components/Contact.tsx`):
- Add your business email
- Add business phone (optional)
- Add registered business address (if required)

## 🌐 Domain Registration (Romania)

### Recommended Romanian Domain Registrars:

1. **Rotld.ro** - .ro domains
   - Official .ro domain registrar
   - ~13-15 EUR/year for .ro
   - Website: https://www.rotld.ro/

2. **Domain.ro**
   - Popular Romanian provider
   - .ro, .com, .games domains
   - Website: https://www.domain.ro/

3. **Gazduire-Web.ro**
   - Includes hosting + domain
   - Good support in Romanian
   - Website: https://www.gazduire-web.ro/

4. **Namecheap** (International)
   - Good prices for .com domains
   - ~$12/year
   - Website: https://www.namecheap.com/

### Domain Suggestions:
- `littleleeroygames.ro` (Romanian, professional)
- `littleleeroygames.com` (International)
- `littleleeroy.games` (Modern, gaming-specific)
- `llgames.ro` (Short version)

## 🚀 Free Deployment Options

### 1. Vercel (RECOMMENDED - Free Tier)
**Best for**: Quick deployment, automatic updates, great performance

**Pros:**
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ Built for Next.js
- ✅ Free tier is generous

**Setup:**
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Add environment variables
5. Deploy (takes 2 minutes)

**Free Tier Limits:**
- Unlimited projects
- 100 GB bandwidth/month (more than enough)
- Automatic scaling

**Custom Domain:**
1. Buy domain from Romanian registrar
2. Add domain in Vercel dashboard
3. Update DNS records (Vercel provides instructions)

### 2. Netlify (Alternative - Free)
**Setup:**
1. Push to GitHub
2. Go to netlify.com
3. Import repository
4. Deploy

**Free Tier:**
- 100 GB bandwidth/month
- 300 build minutes/month

### 3. Firebase Hosting (Since you're using Firebase)
**Setup:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

**Free Tier:**
- 10 GB storage
- 360 MB/day bandwidth
- Custom domain support

## 💰 Paid Options (For Scaling Later)

### When to upgrade?
- When you get >10,000 visitors/month
- When you need analytics/monitoring
- When you want priority support

### Romanian Hosting Providers:
1. **GazduireWeb.ro** - 5-20 EUR/month
2. **HostGator.ro** - Starting at 20 RON/month
3. **Gazduire.com** - 15-30 RON/month

## 🔐 SSL Certificate
All recommended platforms (Vercel, Netlify, Firebase) include:
- ✅ Free SSL certificate (Let's Encrypt)
- ✅ Automatic renewal
- ✅ HTTPS by default

For Romanian hosting: Most providers offer free SSL now.

## 📊 Analytics Setup

### Google Analytics (Free)
1. Go to analytics.google.com
2. Create property for your website
3. Get tracking ID
4. Firebase Analytics is already integrated!

### Alternatives:
- **Plausible** - Privacy-friendly, GDPR compliant
- **Vercel Analytics** - Built-in if using Vercel
- **Cloudflare Analytics** - Free, basic analytics

## 📧 Business Email

### Professional Email Options:

1. **Google Workspace** (Recommended)
   - contact@littleleeroygames.ro
   - ~6 EUR/user/month
   - Professional, reliable

2. **Zoho Mail** (Free tier available)
   - Free for 1 domain, 5 users
   - contact@yourdomain.com

3. **Domain Provider Email**
   - Most Romanian registrars offer email
   - Usually 5-10 RON/month

## 🎯 Recommended Setup for Starting PFA

### Budget-Friendly (0-50 EUR/year):
```
✅ Domain (.ro): ~15 EUR/year (Rotld.ro)
✅ Hosting: FREE (Vercel)
✅ SSL: FREE (included with Vercel)
✅ Email: FREE (Zoho Mail free tier)
✅ Analytics: FREE (Google Analytics)
✅ Firebase: FREE (Spark plan - includes what you need)

Total: ~15 EUR/year
```

### Professional Setup (150-200 EUR/year):
```
✅ Domain (.ro + .com): ~30 EUR/year
✅ Hosting: FREE or paid (~100 EUR/year for Romanian host)
✅ Business Email: Google Workspace (~72 EUR/year)
✅ Analytics: FREE or paid
✅ Firebase: FREE (upgrade when needed)

Total: ~200 EUR/year
```

## 📱 Mobile App Stores (For BBBlocks)

### Google Play Store
- **One-time fee**: $25 USD (~115 RON)
- PFA details required for Romanian developers
- Tax information needed

### Apple App Store
- **Annual fee**: $99 USD (~455 RON/year)
- Need Apple Developer account
- Can register with PFA

### Required for Store Listings:
- Privacy Policy (add page to website)
- Terms of Service (add page to website)
- Support email (your business email)
- Business address (PFA address)

## 📄 Legal Pages to Add

Create these pages for compliance:

1. **Privacy Policy** (`app/privacy/page.tsx`)
   - Required for app stores
   - GDPR compliance for EU/Romania
   - Use generator: https://www.freeprivacypolicy.com/

2. **Terms of Service** (`app/terms/page.tsx`)
   - Good practice
   - Required for some partnerships

3. **Cookie Policy** (if using analytics)
   - GDPR requirement for Romania/EU

## 🔄 Git & Version Control

```bash
# Initialize git (if not done)
cd /home/cristi/dev/littleleeroygames
git init
git add .
git commit -m "Initial commit - Little Leeroy Games website"

# Create GitHub repository
# Go to github.com, create new repository
# Then:
git remote add origin https://github.com/your-username/littleleeroygames.git
git branch -M main
git push -u origin main
```

## 🎮 Game Launch Checklist

When launching BBBlocks or new games:

- [ ] Update game link in `components/Games.tsx`
- [ ] Add game screenshot to `public/games/`
- [ ] Update game status to "Available Now"
- [ ] Add game to Google Play / App Store
- [ ] Update metadata (SEO)
- [ ] Announce on social media
- [ ] Update privacy policy if needed
- [ ] Set up Firebase Analytics for game

## 📞 Support & Resources

### Romanian Developer Communities:
- Facebook: "Dezvoltatori Web Romania"
- Reddit: r/programare
- LinkedIn: Romanian Tech groups

### Useful for PFA:
- ANAF website: www.anaf.ro
- E-factura registration (required for B2B)
- REVISAL registration (if hiring)

---

**Mult succes cu business-ul tău! 🚀🇷🇴**

Good luck with your business!
