# Ian Chege - IT Graduate & Problem Solver Portfolio

A premium, Apple/OpenAI-inspired portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- Dark/Light mode toggle with smooth transitions
- Smooth scroll animations with Framer Motion
- Glassmorphism card design
- Responsive mobile-first layout (all devices)
- Typing animation effect in hero section
- Interactive skill bars with category switcher
- Project modal detail view with live demo iframes
- Live project demos (DRMS, NBA Prediction, Sentiment Analysis)
- Timeline experience section (mobile + desktop layouts)
- Contact form powered by FormSubmit.co (real emails)
- Click-to-view photo lightbox
- Animated stat counters
- Certifications showcase with icons
- Testimonials slider
- SEO metadata & Open Graph tags
- Fast loading with Vite

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** React Icons (Fa + Si)
- **Fonts:** Space Grotesk (headings), Inter (body)
- **Contact Form:** FormSubmit.co (free, no backend)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── project-images/
│       ├── pic1.jpeg          # Hero profile photo
│       ├── pic2.jpeg          # About section photo
│       ├── drms.svg           # DRMS project screenshot
│       ├── nba.svg            # NBA prediction screenshot
│       ├── sentiment.svg      # Sentiment analysis screenshot
│       ├── ecommerce.svg      # E-commerce screenshot
│       ├── stocktracker.svg   # Stock tracker screenshot
│       └── openvpn.svg        # OpenVPN screenshot
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── certifications.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useTypingEffect.js
│   │   ├── useScrollAnimation.js
│   │   └── useCounter.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Projects Included

| Project | Live Demo | Source Code |
|---------|-----------|-------------|
| DRMS (Digital Records Management) | [drms-app.onrender.com](https://drms-app.onrender.com/src/frontend/assets/login.php) | GitHub |
| NBA Score Predictor | [nba-prediction-system.streamlit.app](https://nba-prediction-system-sean.streamlit.app/) | GitHub |
| Sentiment Analysis System | [Streamlit App](https://sentiment-tracking-system-kdbpunesxqqmszpyghbrlu.streamlit.app/) | GitHub |
| E-Commerce Platform | - | [GitHub](https://github.com/DEPSATTABOBBY/e-commerce) |
| Stock Market Tracker | - | [GitHub](https://github.com/DEPSATTABOBBY/stock-market-website) |
| OpenVPN Configuration | - | GitHub |

## Contact Form

Uses **FormSubmit.co** to send emails directly to `chegeian88@gmail.com`. No backend required.

**First-time setup:**
1. Deploy the site and submit the form once
2. Check your email for a FormSubmit confirmation link
3. Click the link to activate your form endpoint

Features:
- Honeypot anti-spam field
- CAPTCHA enabled
- Success/error feedback
- Falls back to native form if JavaScript fails

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Render
Build Command: `npm install && npm run build`
Publish Directory: `dist`

## Customization

### Personal Info
Edit the data files in `src/data/` to update:
- `projects.js` - Your projects with live demo URLs and GitHub links
- `skills.js` - Your skills and categories
- `experience.js` - Work experience and stats
- `certifications.js` - Certifications and testimonials

### Colors
Update the color palette in `tailwind.config.js` under `theme.extend.colors`.

### Profile Images
- Hero photo: `public/project-images/pic1.jpeg`
- About photo: `public/project-images/pic2.jpeg`

### Theme
Dark mode is default. The theme toggle switches between dark and light mode with full CSS custom property support.

## License

MIT
