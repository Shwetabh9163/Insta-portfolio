# Instagram Influencer Portfolio

A modern, interactive portfolio website designed for Instagram influencers and content creators to showcase their work, statistics, and services.

## ✨ Features

- **Hero Section** - Eye-catching animated hero with orbit effects
- **Media Showcase** - Beautiful carousel for displaying reels and content
- **Statistics Section** - Display engagement metrics and audience insights
- **Services Offering** - Showcase available services and collaborations
- **Testimonials** - Client testimonials and success stories
- **Audience Insights** - Interactive data visualization
- **Brand Wall** - Display brand collaborations
- **Contact CTA** - Easy call-to-action for business inquiries
- **Custom Effects** - Magnetic buttons, grain overlay, custom cursor, atmospheric effects

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS + React components
- **Build Tool**: Vite
- **CSS Processing**: PostCSS

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/Shwetabh9163/Insta-portfolio.git
cd Insta-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy your project.

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.js` with your repository name and follow Vite's deployment guide.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Atmosphere.jsx
│   ├── CustomCursor.jsx
│   ├── GrainOverlay.jsx
│   └── MagneticButton.jsx
├── sections/           # Page sections
│   ├── HeroSection.jsx
│   ├── AboutMe.jsx
│   ├── EnhancedShowcase.jsx
│   ├── ReelCarousel.jsx
│   ├── AudienceInsights.jsx
│   ├── StatsSection.jsx
│   ├── ServicesOffer.jsx
│   ├── BrandWall.jsx
│   ├── Testimonials.jsx
│   ├── MediaKitBubbles.jsx
│   ├── HeroOrbit.jsx
│   └── ContactCTA.jsx
├── constants/          # Static data
│   └── assets.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

1. Update media assets in `public/assets/`
2. Configure portfolio data in `src/constants/assets.js`
3. Customize colors in `tailwind.config.js`
4. Modify animations in individual component files

## 📊 Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 🔧 Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 📄 Additional Documentation

See [MediaGuide.md](./MediaGuide.md) for media asset guidelines and specifications.

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📧 Contact

For inquiries or collaboration opportunities, visit the portfolio website or contact through the contact form.

---

**Built with ❤️ for content creators**
