# MBC Laboratory Website

A modern, responsive website for MBC Laboratory (Multimedia, Big Data, and Cybersecurity Laboratory) built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
mbcweb/
├── public/                    # Static assets
│   ├── logo.png              # MBC Laboratory logo
│   ├── MBC 2.png            # About section image
│   ├── NCM 1.png            # About section image
│   ├── foto.png             # Developer photo
│   └── *.svg                # Various SVG icons
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout with providers
│   │   ├── page.tsx         # Homepage (/)
│   │   ├── globals.css      # Global styles
│   │   ├── kontak/          # Contact page (/kontak)
│   │   │   └── page.tsx     # Contact form with EmailJS
│   │   ├── divisi/          # Division page (/divisi)
│   │   │   └── page.tsx     # Division carousel
│   │   └── developer/       # Developer page (/developer)
│   │       └── page.tsx     # Developer profile
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── HeroSection.tsx  # Hero with video background
│   │   ├── AboutSection.tsx # About MBC Laboratory
│   │   ├── VisionMissionSection.tsx # Vision & Mission
│   │   ├── Footer.tsx       # Site footer
│   │   ├── VideoBackground.tsx # YouTube video background
│   │   ├── ScrollAnimatedSection.tsx # Scroll animations
│   │   └── ui/              # Shadcn/ui components
│   │       ├── button.tsx   # Button component
│   │       ├── carousel.tsx # Carousel component
│   │       └── *.tsx        # Other UI components
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection
│   │   ├── useScrollAnimation.tsx # Scroll animations
│   │   ├── useScrollOptimized.tsx # Optimized scroll
│   │   └── use-toast.ts     # Toast notifications
│   └── lib/                 # Utilities
│       ├── constants.ts     # App constants
│       └── utils.ts         # Utility functions
├── package.json             # Dependencies & scripts
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## 🚀 Features

### **Frontend Features:**
- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive design** for all devices
- 🎬 **Video background** (YouTube embed)
- ✨ **Smooth animations** with Framer Motion
- 🎠 **Interactive carousel** for divisions
- 📧 **Contact form** with EmailJS integration
- 🌙 **Dark theme** optimized
- ♿ **Accessibility** compliant

### **Technical Features:**
- 🔧 **TypeScript** for type safety
- 🎯 **ESLint** for code quality
- 📦 **Optimized builds** with Turbopack
- 🚀 **Performance optimized** with Next.js
- 🔍 **SEO optimized** with metadata
- 📊 **Analytics ready** (can be added)

## 🛠️ Local Installation

### **Prerequisites:**
- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### **Installation Steps:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hafiz010/MBC-tech-WEB.git
   cd MBC-tech-WEB
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create `.env.local` file:
   ```env
   # EmailJS Configuration (for contact form)
   EMAILJS_SERVICE_ID=service_o12y0v8
   EMAILJS_TEMPLATE_ID=template_ymt81wd
   EMAILJS_PUBLIC_KEY=VEDsaRRj16_7KILZV
   
   # Supabase (if using backend)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### **Vercel Deployment (Recommended):**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js
   - Add environment variables if needed
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Configure DNS as instructed

### **Other Deployment Options:**

#### **Netlify:**
```bash
# Build command
npm run build

# Publish directory
.next
```

#### **Railway:**
- Connect GitHub repository
- Auto-detects Next.js
- Deploys automatically

#### **DigitalOcean App Platform:**
- Connect GitHub repository
- Select Node.js environment
- Build command: `npm run build`
- Run command: `npm start`

## 🔒 SSL Configuration

### **Vercel (Automatic):**
- ✅ SSL certificates are automatically provisioned
- ✅ HTTPS is enabled by default
- ✅ No additional configuration needed

### **Custom Domain SSL:**
1. **Vercel handles SSL automatically**
2. **For other providers:**
   - Let's Encrypt certificates
   - Cloudflare SSL/TLS
   - Provider-specific SSL

## 🔧 Backend Configuration

### **Current Setup:**
- **Frontend-only** with EmailJS for contact form
- **No backend server** required
- **Static deployment** ready

### **Adding Backend (Optional):**

#### **Option 1: Supabase (Recommended)**
```bash
npm install @supabase/supabase-js
```

Add to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### **Option 2: API Routes (Next.js)**
Create `src/app/api/` directory for API routes.

#### **Option 3: External Backend**
- Node.js/Express
- Python/Django/FastAPI
- PHP/Laravel
- Any REST API

### **Database Options:**
- **Supabase** (PostgreSQL)
- **PlanetScale** (MySQL)
- **MongoDB Atlas**
- **Firebase Firestore**

## 📱 Performance Optimization

### **Current Optimizations:**
- ✅ **Next.js Image optimization**
- ✅ **Code splitting** with App Router
- ✅ **Lazy loading** for components
- ✅ **Optimized fonts** with next/font
- ✅ **Minified CSS/JS** in production

### **Additional Optimizations:**
```bash
# Analyze bundle size
npm run build
npm run analyze

# Add to next.config.ts
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['your-domain.com'],
  },
};
```

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Additional (if needed)
npm run type-check   # TypeScript type checking
npm run test         # Run tests (if configured)
```

## 🎨 Customization

### **Styling:**
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Customize theme in `tailwind.config.js`

### **Content:**
- Update text in component files
- Replace images in `public/` directory
- Modify constants in `src/lib/constants.ts`

### **Features:**
- Add new pages in `src/app/`
- Create new components in `src/components/`
- Add custom hooks in `src/hooks/`

## 📊 Analytics & Monitoring

### **Recommended Tools:**
- **Vercel Analytics** (built-in)
- **Google Analytics 4**
- **Hotjar** for user behavior
- **Sentry** for error tracking

## 🐛 Troubleshooting

### **Common Issues:**

1. **Build fails:**
   ```bash
   npm run build
   # Check for TypeScript errors
   ```

2. **Images not loading:**
   - Ensure images are in `public/` directory
   - Use correct paths (e.g., `/logo.png`)

3. **Contact form not working:**
   - Verify EmailJS configuration
   - Check environment variables

4. **Styling issues:**
   ```bash
   npm run dev
   # Clear browser cache
   ```

## 📄 License

This project is private and proprietary to MBC Laboratory.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support, contact:
- **Developer:** Muhammad Hafiz Fahrial
- **GitHub:** [Hafiz010](https://github.com/Hafiz010)
- **Email:** [Your email]

---

**Built with ❤️ for MBC Laboratory**
