# TechVision Inc. Website - Deployment Guide

## 🚀 Vercel Deployment Instructions

### 1. GitHub Repository
- Repository: `https://github.com/hagisho0907/HP_Design_Mock.git`
- Project Location: `/techvision-inc/`

### 2. Vercel Setup Steps

1. **Import Project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub: `hagisho0907/HP_Design_Mock`

2. **Configure Build Settings**
   ```
   Framework Preset: Next.js
   Root Directory: techvision-inc
   Build Command: npm run build (default)
   Output Directory: .next (default)
   Install Command: npm install (default)
   ```

   **Important**: Make sure to set the Root Directory to `techvision-inc` in Vercel dashboard

3. **Environment Variables** (if needed)
   - No environment variables required for this project

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

### 3. Alternative Manual Deployment

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd techvision-inc

# Deploy
vercel

# Follow prompts:
# - Link to existing project? N
# - Project name: techvision-inc
# - Directory: ./
# - Override settings? N
```

### 4. Domain Configuration

After deployment:
- Custom domain can be added in Vercel dashboard
- SSL is automatically configured
- CDN is enabled globally

### 5. Automatic Deployments

- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback available in Vercel dashboard

## 📝 Project Structure

```
techvision-inc/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Home page
│   ├── news/           # News page
│   ├── works/          # Portfolio page
│   ├── recruit/        # Careers page
│   ├── contact/        # Contact page
│   └── privacy/        # Privacy policy
├── components/         # React components
├── public/            # Static assets
└── package.json       # Dependencies
```

## 🎨 Design Features

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons
- **Responsive**: Mobile-first design
- **Theme**: Minimalist black/white aesthetic

## 📱 Pages Included

- **Home** - Hero section with company overview
- **News** - Blog/news listing with grid layout
- **Works** - Portfolio showcase with project cards
- **Recruit** - Career opportunities and company culture
- **Contact** - Contact form and office information
- **Privacy** - Privacy policy and legal information

## 🔧 Performance Optimizations

- Next.js automatic code splitting
- Image optimization (when images are added)
- CSS-in-JS with Tailwind
- Framer Motion with reduced motion support
- Semantic HTML for accessibility

## 🚨 Pre-deployment Checklist

- ✅ All pages implemented
- ✅ Responsive design tested
- ✅ ESLint errors fixed
- ✅ TypeScript compilation successful
- ✅ Build process verified
- ✅ Git repository updated

Ready for deployment! 🎉