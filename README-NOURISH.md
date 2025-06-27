# Nourish Poultry Bangladesh - Modern Website

A modern, responsive recreation of the Nourish Poultry Bangladesh website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### ✨ Modern Design & Animations
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth interactions
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Modern UI**: Clean, minimal design with beautiful gradients and glassmorphism effects
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds

### 🎨 Visual Elements
- **Animated Hero Slider**: Dynamic slider with smooth transitions showcasing "We Breed", "We Feed", "We Nourish", "The Nourish Effect"
- **Interactive Cards**: Hover effects, floating particles, and shimmer animations
- **Gradient Backgrounds**: Beautiful orange-to-red gradients matching the brand colors
- **Custom Animations**: Float, pulse, bounce, and custom keyframe animations

### 📱 Components
- **Header**: Sticky navigation with dropdown menus and mobile responsiveness
- **Hero Slider**: Full-screen animated slider with auto-play and manual controls
- **Services Section**: About Nourish with animated service cards
- **Business Activities**: Interactive showcase of all business services
- **Footer**: Comprehensive footer with contact info, links, and animated elements

### 🛠 Technology Stack
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework
- **Framer Motion**: Advanced animation library
- **React Icons & Heroicons**: Beautiful icon sets

## 🎯 Content Preserved from Original

### Navigation Structure
- **Home**: Main landing page
- **About**: 
  - People, Place & Planet
  - The Journey Begins
  - Vision, Mission, Values
  - Nourish DNA
  - Quality Assurance System
- **Business Activities**:
  - Broiler, Layer & Fish Feed
  - Broiler & Layer Day Old Chicks
  - Grand Parent Stocks
  - Commercial Broilers
  - Tilapia Fry
  - Further Processing Food Items
- **Accomplishments**:
  - Business Growth
  - Awards
  - Certifications
- **Career**
- **Contact Us**

### Company Information
- **Address**: House # 39, Sonargaon Janapath Road, Sector # 07, Uttara, Dhaka-1230
- **Phone**: +88 02 48963023-27, +88 02 58150177
- **Copyright**: © 2024 Nourish Bangladesh All rights reserved

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
# Navigate to the project directory
cd nourish-poultry

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 📁 Project Structure
```
src/
├── app/
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSlider.tsx      # Animated hero slider
│   ├── ServicesSection.tsx # About services
│   ├── BusinessActivities.tsx # Business showcase
│   └── Footer.tsx          # Site footer
└── assets/
    └── images/             # Image assets
```

## 🎨 Design Features

### Color Scheme (Preserved from Original)
- **Primary Orange**: #f97316 (Orange-500)
- **Secondary Orange**: #ea580c (Orange-600)
- **Accent Green**: #16a34a (Green-600)
- **Background**: White to light gray gradients
- **Text**: Dark gray (#1f2937) for main content

### Animations
- **Page Load**: Staggered animations for smooth entrance
- **Scroll Triggers**: Elements animate into view as user scrolls
- **Hover Effects**: Interactive feedback on all clickable elements
- **Micro-interactions**: Subtle animations for enhanced UX

### Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1920px
- **Ultra-wide**: 1920px+

## 🔧 Customization

### Adding New Pages
1. Create new page in `src/app/[page-name]/page.tsx`
2. Add navigation links in `Header.tsx`
3. Update footer links if needed

### Modifying Animations
- Edit animation variants in component files
- Adjust timing in `transition` properties
- Add new keyframes in `globals.css`

### Color Theme Updates
- Update color values in component `className` props
- Modify gradients in `globals.css`
- Adjust Tailwind color references

## 📊 Performance Features
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load only when needed
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🌐 Browser Support
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📧 Contact
For any questions or modifications to this modern website recreation, please contact the development team.

---
**Built with ❤️ using modern web technologies while preserving the essence and content of the original Nourish Poultry Bangladesh website.**
