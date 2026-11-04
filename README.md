# Kiran Vijay Pawar - Portfolio Website

A modern, responsive, and production-ready personal portfolio website built with React, Vite, Framer Motion, and various modern web technologies.

## 🎯 Features

- **Modern Design**: Clean, premium UI with glassmorphism effects
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion for elegant transitions and effects
- **Interactive Components**: Hover effects, scroll animations, and typing effects
- **Contact Form**: EmailJS integration for direct messaging
- **Sticky Navigation**: Smooth scrolling with animated navbar
- **Social Integration**: Links to LinkedIn, GitHub, and email
- **SEO Optimized**: Proper semantic HTML and meta tags
- **Performance Optimized**: Fast load times and smooth interactions

## 📦 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.0
- **Animations**: Framer Motion 10.16.16
- **Icons**: React Icons 5.3.0
- **Routing**: React Router 6.25.0
- **Smooth Scrolling**: React Scroll 1.9.0
- **Email Service**: EmailJS 3.2.0
- **Styling**: Pure CSS with responsive design

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd "d:\My Portfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173` (or another available port)

4. **Build for production**
   ```bash
   npm run build
   ```

   The optimized build will be generated in the `dist/` folder

## 📁 Project Structure

```
portfolio/
├── public/                    # Static files
│   ├── resume.pdf            # Resume file
│   ├── profile.jpg           # Profile image
│   └── favicon.ico           # Favicon
├── src/
│   ├── components/           # React components
│   │   ├── Navbar/           # Navigation component
│   │   ├── Hero/             # Hero section
│   │   ├── About/            # About section
│   │   ├── Skills/           # Skills section
│   │   ├── Projects/         # Projects section
│   │   ├── Education/        # Education timeline
│   │   ├── Certificates/     # Certifications
│   │   ├── Contact/          # Contact form
│   │   └── Footer/           # Footer component
│   ├── assets/               # Images and media
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

## ⚙️ Configuration

### EmailJS Setup

To enable the contact form functionality:

1. **Create an EmailJS account**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Get your credentials**
   - Service ID
   - Template ID
   - Public Key

3. **Update Contact.jsx**
   - Open `src/components/Contact/Contact.jsx`
   - Replace the following placeholders:
     ```javascript
     emailjs.init('YOUR_EMAIL_JS_PUBLIC_KEY')
     ```
     ```javascript
     emailjs.send('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', ...)
     ```

4. **Create an email template** in EmailJS with these variables:
   - `to_email`
   - `from_name`
   - `from_email`
   - `subject`
   - `message`

## 🎨 Customization

### Update Portfolio Data

Edit the following components to personalize the portfolio:

1. **Navbar** (`src/components/Navbar/Navbar.jsx`)
   - Logo text
   - Menu items
   - Resume link

2. **Hero** (`src/components/Hero/Hero.jsx`)
   - Profile image
   - Greeting text
   - Title animation text
   - Social links
   - Resume download link

3. **About** (`src/components/About/About.jsx`)
   - About description
   - College name
   - Graduation year
   - CGPA

4. **Skills** (`src/components/Skills/Skills.jsx`)
   - Add/remove skills
   - Update skill levels
   - Change categories

5. **Projects** (`src/components/Projects/Projects.jsx`)
   - Add your projects
   - Project descriptions
   - GitHub links
   - Demo links
   - Technologies used

6. **Education** (`src/components/Education/Education.jsx`)
   - Educational background
   - Institutions
   - Percentages and CGPA

7. **Certificates** (`src/components/Certificates/Certificates.jsx`)
   - Add certifications
   - Certificate details
   - Issuing organizations

8. **Contact** (`src/components/Contact/Contact.jsx`)
   - Phone number
   - Email address
   - Location
   - Social media links

9. **Footer** (`src/components/Footer/Footer.jsx`)
   - Social links
   - Quick links
   - Copyright information

### Theme Customization

The site uses a color scheme with CSS variables. You can customize colors in:
- `src/index.css` (global styles)
- Component CSS files (individual color schemes)

**Color Palette:**
- Primary: `#001f3f` (Dark Navy)
- Accent: `#0047a3` (Royal Blue)
- Highlight: `#1e90ff` (Sky Blue)
- Background: `#ffffff` (White)

## 📱 Responsive Breakpoints

The portfolio is optimized for all screen sizes:

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## 🔄 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview built files locally
npm run preview
```

## 📋 Performance Tips

1. **Optimize Images**
   - Replace placeholder images with actual ones
   - Use optimized image formats (WebP, AVIF)
   - Compress images before uploading

2. **Lazy Load Components**
   - Consider implementing code splitting for large sections

3. **Caching**
   - Enable browser caching for static assets
   - Use CDN for faster delivery

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Connect to Netlify**
   - Push code to GitHub
   - Connect repository to Netlify
   - Netlify will auto-deploy on push

### Deploy to GitHub Pages

1. **Update vite.config.js**
   ```javascript
   export default {
     base: '/portfolio/',
     // ... rest of config
   }
   ```

2. **Build and deploy**
   ```bash
   npm run build
   gh-pages -d dist
   ```

## ♿ Accessibility

The portfolio includes:
- Semantic HTML elements
- ARIA labels for interactive components
- Proper heading hierarchy
- Keyboard navigation support
- Alt text for images
- Color contrast compliance

## 📝 License

This portfolio template is open source and available for personal use.

## 📧 Contact

**Kiran Vijay Pawar**
- Email: kiranvpawar369@gmail.com
- Phone: +91 8550904989
- LinkedIn: [linkedin.com/in/kiran-vijay-pawar](https://linkedin.com/in/kiran-vijay-pawar)
- GitHub: [github.com/kiranvpawar](https://github.com/kiranvpawar)

## 🙏 Acknowledgments

- React and Vite communities
- Framer Motion for smooth animations
- React Icons for beautiful icons
- EmailJS for email service

---

**Built with ❤️ using React & Vite**
