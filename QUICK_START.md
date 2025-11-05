# IVY Fertility - Quick Start Guide

## 🚀 Getting Started in 2 Minutes

### **Option 1: Run Development Server (Testing)**

```bash
# Navigate to project directory
cd "C:\Users\clark\OneDrive\桌面\.claude\ivy-fertility"

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

**Result**: Opens at `http://localhost:3000` (or next available port)

---

### **Option 2: Production Build (Demo)**

```bash
# Build for production
npm run build

# Start production server
npm start
```

**Result**: Optimized build ready for deployment

---

## 📍 Website Routes

Once running, visit these URLs:

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero + Services overview + Success stories |
| Services | `/services` | List of all 8 fertility services |
| Service Details | `/services/egg-freezing` | Detailed info, process, pricing |
| About Us | `/about` | Mission, team, differentiators |
| Contact | `/contact` | Contact form + consultation booking |
| Dashboard | `/dashboard` | Staff only (existing feature) |

**Service Detail URLs:**
- `/services/egg-freezing`
- `/services/ivf`
- `/services/embryo-freezing`
- `/services/pgt-testing`
- `/services/donor-services`
- `/services/surrogacy`
- `/services/icsi`
- `/services/fertility-preservation`

---

## 🌍 Language Switching

- Click **中 / EN** button in top-right navigation
- Language preference saves to localStorage
- All content instantly translates between English and Chinese

---

## 📱 Features to Test

### **Homepage**
- ✓ Advantage carousel (click arrows or dots)
- ✓ Service grid (click any service)
- ✓ CTA buttons (all lead to `/contact`)
- ✓ Success stories
- ✓ Responsive design (resize browser)

### **Services Page**
- ✓ 8 service cards
- ✓ Click any card to see detailed page
- ✓ Responsive grid (1 col mobile → 4 col desktop)

### **Service Detail**
- ✓ Treatment process steps (numbered)
- ✓ Success rates
- ✓ Pricing information
- ✓ "Learn More" CTA

### **About Page**
- ✓ Doctor profiles (4 doctors)
- ✓ Specialty badges
- ✓ Differentiator cards (6 reasons)

### **Contact Form**
- ✓ Form validation (required fields, email format)
- ✓ Service dropdown
- ✓ Success message after submission
- ✓ Direct phone CTA

---

## 🎨 Customization

### **Change Colors**
Edit `lib/context.tsx` or `app/globals.css`:
- Primary brand color: `#e33479` (pink)
- Secondary: `#d01e6d`

### **Update Contact Info**
Edit these files:
- `app/contact/page.tsx` - Contact page
- `components/Footer.tsx` - Footer address/phone/hours

### **Change Doctor Names/Info**
Edit `app/about/page.tsx` - Find the `doctors` array

### **Update Service Info**
- **Service List**: `app/services/page.tsx`
- **Service Details**: `app/services/[id]/page.tsx` - Find `serviceData` object

### **Add New Service**
1. Add entry to `serviceData` in `app/services/[id]/page.tsx`
2. Add to services list in `app/services/page.tsx`
3. Service will auto-generate at `/services/[new-id]`

---

## 📝 Translation Keys

All text is centralized in `lib/context.tsx` in the `translations` object:

```typescript
const translations: Record<Language, Record<TranslationKey, string>> = {
  en: { ... },
  zh: { ... }
}
```

To add new bilingual text:
1. Add key to translations object (both languages)
2. Use `const { t } = useLanguage()` in component
3. Call `t('your-key')`

---

## 🔧 Troubleshooting

### **Port 3000 Already in Use**
Next.js automatically uses next available port (3001, 3002, etc.)

### **Build Errors**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### **Language Not Switching**
- Check browser console for errors
- Clear localStorage: `localStorage.clear()` in dev tools

### **Forms Not Submitting**
Currently, forms are frontend-only (demo mode). To enable:
- Connect to Supabase backend
- Update `/contact` page form submission

---

## 📊 Performance

**Build Stats:**
- Build time: ~2.6 seconds
- Pages: 9 routes (all optimized)
- Code splitting: Automatic
- Image optimization: Tailwind CSS only (no image assets yet)

**Browser Support:**
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Fully responsive

---

## 🎯 For Investor Demo

**Recommended Flow:**
1. **Home** → Show hero + advantages
2. **Services** → Display full service catalog
3. **About** → Highlight real clinic advantage + doctor credentials
4. **Contact** → Show contact form and accessibility
5. **Mobile** → Demonstrate responsive design (resize browser)
6. **Language** → Switch to Chinese to show bilingual support

**Key Talking Points:**
- "Unlike competitors (Life IVF), we're a real independent clinic"
- "Full-spectrum fertility services - 8 different treatments"
- "Dedicated Chinese-speaking support"
- "High success rates + transparent pricing"
- "Professional team of board-certified specialists"

---

## 🚢 Deployment

### **Deploy to Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Deploy to Other Platforms**
- Standard Next.js deployment
- Requires Node.js 18+
- Environment variables: None required for demo
- Database: Optional (Supabase config ready)

---

## 📞 Support

For questions about:
- **Code**: Check `PROJECT_SUMMARY.md`
- **Features**: See feature list above
- **Customization**: Edit files listed under "Customization" section
- **Deployment**: Refer to Next.js documentation

---

**Website Status**: ✅ Ready to Demo
**Last Updated**: November 4, 2025
**Build Version**: Production Ready
