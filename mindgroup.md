# Mind Group Global - Website Build Documentation

## Project Overview

**Project Name**: Mind Group Global  
**Description**: Corporate website for Mind Group, a diversified holding company providing integrated business solutions across Engineering, Technology, and Human Capital.  
**Tagline**: "People to Power. Systems to Scale. Operations to Last"  
**Founded**: 1992  
**Rebranded**: 2005  
**Domain**: https://mindgroupadvisors.com/

---

## Technology Stack

### Core Framework
- **React**: ^19.2.0
- **React DOM**: ^19.2.0
- **React Router DOM**: ^7.12.0 (for client-side routing)

### Build Tool
- **Vite**: ^7.2.4 (build tool and dev server)
- **@vitejs/plugin-react**: ^5.1.1

### Styling
- **Tailwind CSS**: ^4.1.18
- **@tailwindcss/vite**: ^4.1.18
- **PostCSS**: ^8.5.6
- **Autoprefixer**: ^10.4.23

### UI Libraries & Animations
- **Framer Motion**: ^12.27.5 (animations)
- **React Icons**: ^5.5.0 (icon library)
- **Lucide React**: ^0.562.0 (additional icons)

### Development Tools
- **ESLint**: ^9.39.1
- **@eslint/js**: ^9.39.1
- **eslint-plugin-react-hooks**: ^7.0.1
- **eslint-plugin-react-refresh**: ^0.4.24

### Type Definitions
- **@types/react**: ^19.2.5
- **@types/react-dom**: ^19.2.3

---

## Build Configuration

### Vite Configuration (`vite.config.js`)
```javascript
- React plugin enabled
- Tailwind CSS plugin enabled
- Production builds output to `/dist` folder
```

### Build Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to /dist)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## Project Structure

```
Mind Group/
├── public/                    # Static assets
│   ├── assets/               # Images and media
│   │   ├── Data center.webp
│   │   ├── Engineering.jpg
│   │   ├── Human Capital.jpg
│   │   ├── Human Capital.webp
│   │   ├── MG Logo.png
│   │   ├── Mind Group Logo white.png
│   │   ├── Mindgroup hero New.webp
│   │   ├── Mindgroup Hero.webp
│   │   ├── og-image.jpg
│   │   ├── PCOT.webp
│   │   ├── Sky Mind Group.mp4
│   │   ├── Technology.jpg
│   │   └── Technology.webp
│   ├── brand logos/          # Company brand logos
│   │   ├── Blue PEak.png
│   │   ├── digilium.png
│   │   ├── Mind Search.webp
│   │   ├── Mind Select.webp
│   │   ├── msc logo v1.png
│   │   ├── msc logo.png
│   │   ├── Open Mind.png
│   │   └── Open MInd.webp
│   ├── team/                 # Leadership team photos
│   │   ├── B.R. Sheaker.jpg
│   │   ├── Deep Murthy.jpg
│   │   └── Jennifer Hill.png
│   └── favicon.ico
├── src/
│   ├── components/           # Reusable React components
│   │   ├── CTASection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LeadModal.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ServicesCarousel.jsx
│   │   ├── StatCard.jsx
│   │   ├── TeamCard.jsx
│   │   ├── TeamMember.jsx
│   │   ├── Testimonial.jsx
│   │   ├── TestimonialCarousel.jsx
│   │   ├── Timeline.jsx
│   │   └── VerticalsSection.jsx
│   ├── context/              # React Context providers
│   │   └── LeadModalContext.jsx
│   ├── data/                 # Content data
│   │   └── content.js        # Centralized content management
│   ├── pages/                # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── GroupCompanies.jsx
│   │   ├── Home.jsx
│   │   ├── Leadership.jsx
│   │   └── Services.jsx
│   ├── App.jsx               # Main app component with routing
│   ├── App.css
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── dist/                     # Production build output
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies and scripts
├── DEPLOY.md                 # Deployment guide
└── SECTION_SIZES.md         # Section sizing documentation
```

---

## Application Architecture

### Routing Structure
The app uses React Router DOM for client-side routing with the following routes:

- `/` - Home page
- `/about` - About page
- `/leadership` - Leadership team page
- `/services` - Services page
- `/contact` - Contact page

### Key Features
- **Error Boundary**: Custom error boundary component for error handling
- **Scroll to Top**: Automatically scrolls to top on route changes
- **Lead Modal**: Context-based modal system for lead capture
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Animations**: Framer Motion for smooth page transitions and animations

---

## Content Management

### Content Structure (`src/data/content.js`)
All website content is centralized in `content.js` with the following structure:

#### Landing Page Content
- Story section with company history
- Strategic evolution narrative
- Diversification messaging

#### About Page Content
- Company introduction
- Mission statement
- Expertise areas:
  - Recruitment & Counselling (Human Capital)
  - Engineering Services
  - PBOMT (Project Build, Operate, Maintain & Transfer)
  - Data Centre Transformation
- Partner benefits
- Vision, Mission, and Values
- Company timeline (1992, 2005, 2025)

#### Leadership Content
- **Founding Team**:
  - B.R. Sheaker (Co-Founder & MD)
  - Deepa Murthy (Co-Founder since 1992)
  - Venkat N Pakala (Co-Founder)
- **Expert Team**: 9 domain experts across Finance, Infrastructure, Engineering, IT, AI, Automotive, and HR

#### Group Companies
1. Mind Search Consultants - Executive Search & Recruitment
2. Mind Select Consultants - Specialized Talent Acquisition
3. Open Mind Consultants - HR Consulting & Advisory
4. Mind Search Consultants – Dubai - Middle East Operations
5. Digileum - Digital Transformation Specialists
6. Blue-Peak.us - US Market Solutions

#### Contact Information
- Phone: +91 80 4022 6222
- Email: info@mindgroupsolutions.com
- Address: No 315, 14th Cross, 9th Main, II Block, Jayanagar, Bangalore 560 011

---

## SEO & Meta Tags

### Primary Meta Tags
- **Title**: "Mind Group Global | People to Power. Systems to Scale. Operations to Last"
- **Description**: "Diversified holding company providing integrated business solutions across Engineering, Technology, and Human Capital. 30+ years of excellence, 6 group companies, global presence."

### Open Graph Tags
- Optimized for Facebook, WhatsApp sharing
- OG Image: `/assets/og-image.jpg` (1200x630px)
- Full URL: https://mindgroupadvisors.com/

### Twitter Card
- Summary large image card
- Twitter-specific meta tags configured

### Theme
- Theme color: #0A1128 (brand navy)

---

## Brand Assets

### Logos
- **Primary Logo**: `MG Logo.png`
- **White Logo**: `Mind Group Logo white.png`

### Brand Colors
- Primary: Brand Navy (#0A1128)
- Background: White

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

---

## Deployment

### Production Build
1. Run `npm run build` to create optimized production files
2. Output directory: `/dist`
3. Files are minified and optimized for production

### Deployment Target
- **Hosting Type**: Shared hosting (cPanel/GoDaddy/Hostinger compatible)
- **Deployment Method**: FTP/cPanel File Manager
- **Documentation**: See `DEPLOY.md` for detailed deployment instructions

### Server Requirements
- Apache server with mod_rewrite enabled
- `.htaccess` file required for SPA routing
- SSL certificate recommended

### Post-Deployment Checklist
- [ ] Update meta tags with actual domain URL
- [ ] Verify all routes work (no 404 errors)
- [ ] Check image/video loading
- [ ] Test contact forms
- [ ] Verify SSL certificate
- [ ] Test mobile responsiveness

---

## Key Components

### Navigation
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Company information, links, and contact details

### Page Components
- **Hero**: Hero section with video/image background
- **CTASection**: Call-to-action sections
- **ServiceCard**: Service display cards
- **ServicesCarousel**: Carousel for services
- **TeamCard/TeamMember**: Leadership team display
- **Testimonial/TestimonialCarousel**: Client testimonials
- **Timeline**: Company timeline visualization
- **VerticalsSection**: Business verticals display
- **LeadModal**: Lead capture modal (context-based)

---

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Code Quality
- ESLint configured for React best practices
- React Hooks linting enabled
- React Refresh plugin for fast development

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement

---

## Performance Optimizations

### Build Optimizations
- Vite production builds with code splitting
- Asset optimization and minification
- Tree shaking for unused code elimination

### Image Optimization
- WebP format for images where possible
- Responsive image loading
- Lazy loading for below-fold content

### Recommended Server Optimizations
- Gzip compression (see DEPLOY.md)
- Browser caching headers
- CDN for static assets (optional)

---

## Version Information

- **React**: 19.2.0
- **Vite**: 7.2.4
- **Tailwind CSS**: 4.1.18
- **Node.js**: Compatible with Node 18+

---

## Support & Maintenance

### Content Updates
- Edit `src/data/content.js` for text content changes
- Add images to `public/assets/` or `public/brand logos/`
- Update team photos in `public/team/`

### Styling Updates
- Tailwind CSS classes in components
- Global styles in `src/index.css`
- Component-specific styles in `App.css`

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `Navbar.jsx` and `Footer.jsx`

---

## Last Updated
**Date**: January 2026  
**Build System**: Vite + React + Tailwind CSS  
**Status**: Production Ready

---

## Notes
- All content is managed through `src/data/content.js` for easy updates
- Lead modal uses React Context for state management
- Error boundary catches and displays errors gracefully
- Scroll-to-top functionality on route changes
- All routes are client-side rendered (SPA)
