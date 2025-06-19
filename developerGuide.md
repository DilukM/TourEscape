# TourEscape Developer Guide

## 🚀 Quick Start

### Prerequisites

- Git installed on your machine
- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (VS Code recommended)
- A modern web browser

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/DilukM/TourEscape.git
   cd TourEscape
   ```

2. **Create a new branch for your feature**

   ```bash
   git checkout -b feature/your-feature-name
   # Example: git checkout -b feature/home
   ```

3. **Make your changes**

   - Edit files in the appropriate directories
   - Follow the project structure and naming conventions
   - Test your changes locally

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   # Examples:
   # git commit -m "Add: booking form validation"
   # git commit -m "Fix: mobile navigation menu"
   # git commit -m "Update: tour card styling"
   ```

5. **Push your branch**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the GitHub repository
   - Click "Compare & pull request"
   - Fill out the PR template with:
     - Description of changes
     - Screenshots (if applicable)
     - Testing steps
   - Submit the pull request

## 📁 Project Structure

```
TourEscape/
├── index.html          # Entry point
├── pages/              # HTML pages
├── css/                # Stylesheets
├── js/                 # JavaScript files
└── images/             # Image assets
```

## 🔧 Development Workflow

### Branch Naming Convention

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `update/component-name` - Updates to existing features
- `docs/documentation-update` - Documentation changes

### Commit Message Format

```
Type: Brief description

Types:
- Add: New feature or file
- Fix: Bug fix
- Update: Modify existing feature
- Remove: Delete feature or file
- Docs: Documentation changes
```

## 🐛 Reporting Issues

### Creating an Issue

1. Go to the [Issues tab](https://github.com/your-username/TourEscape/issues)
2. Click "New Issue"
3. Choose the appropriate template:
   - **Bug Report**: For reporting bugs
   - **Feature Request**: For suggesting new features
   - **Question**: For general questions

### Bug Report Template

```markdown
## Bug Description

Brief description of the bug

## Steps to Reproduce

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior

What you expected to happen

## Screenshots

If applicable, add screenshots

## Environment

- Browser: [e.g., Chrome 91]
- Device: [e.g., iPhone 12, Desktop]
- OS: [e.g., iOS 14, Windows 10]
```

## 📝 Code Guidelines

### HTML

- Use semantic HTML5 elements
- Include proper `alt` attributes for images
- Use 2-space indentation

### CSS

- Use kebab-case for class names
- Follow mobile-first approach
- Use CSS custom properties for colors and spacing

### JavaScript

- Use modern ES6+ syntax
- Add comments for complex logic
- Use descriptive variable names

## 🚀 Publishing/Deployment

### Automatic Deployment

The project uses GitHub Pages for automatic deployment:

- Main branch deploys to production automatically
- All pushes to main trigger a new build
- Live site: `https://your-username.github.io/TourEscape`

### Manual Deployment Commands

```bash
# Deploy to GitHub Pages
git checkout main
git pull origin main
git merge feature/your-feature-name
git push origin main
```

## 💬 Getting Help

### Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Pull Request Comments**: For code-specific discussions

### Response Times

- Issues: Within 2-3 business days
- Pull Requests: Within 1-2 business days
- Questions: Within 24 hours

## 🎯 Contribution Guidelines

### Before You Start

- Check existing issues and PRs to avoid duplicates
- For major changes, create an issue first to discuss
- Follow the existing code style and structure

### Pull Request Checklist

- [ ] Code follows project conventions
- [ ] Changes are tested locally
- [ ] All links and images work correctly
- [ ] Mobile responsiveness is maintained
- [ ] No console errors or warnings
- [ ] PR description explains the changes

### Review Process

1. Automated checks run on your PR
2. Maintainer reviews the code
3. Feedback or approval is provided
4. Changes are merged to main branch
5. Automatic deployment to live site

---

**Ready to contribute? Clone the repo and start coding! 🎉**

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Development Environment](#development-environment)
3. [Project Architecture](#project-architecture)
4. [Coding Standards](#coding-standards)
5. [Component Development](#component-development)
6. [Styling Guidelines](#styling-guidelines)
7. [JavaScript Best Practices](#javascript-best-practices)
8. [Responsive Design](#responsive-design)
9. [Performance Optimization](#performance-optimization)
10. [Testing](#testing)
11. [SEO Guidelines](#seo-guidelines)
12. [Deployment](#deployment)
13. [Troubleshooting](#troubleshooting)

---

## 🚀 Getting Started

### Prerequisites

Before you begin development, ensure you have:

- Basic knowledge of HTML5, CSS3, and JavaScript
- A modern text editor or IDE (VS Code recommended)
- Git for version control
- A modern web browser for testing
- Basic understanding of responsive web design

### Quick Setup

```bash
# Clone the repository
git clone <repository-url>
cd TourEscape

# Start development (choose one method)
# Method 1: VS Code Live Server (recommended)
# Install Live Server extension and right-click index.html

# Method 2: Python simple server
python -m http.server 8000

# Method 3: Node.js live-server
npx live-server --port=8080
```

---

## 🛠️ Development Environment

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "ritwickdey.liveserver",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-css-peek",
    "zignd.html-css-class-completion"
  ]
}
```

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "html.format.indentInnerHtml": true,
  "css.validate": true,
  "javascript.validate.enable": true,
  "emmet.includeLanguages": {
    "html": "html",
    "css": "css"
  }
}
```

### Development Server Configuration

```bash
# Live Server settings (create .vscode/settings.json)
{
  "liveServer.settings.port": 5500,
  "liveServer.settings.root": "/",
  "liveServer.settings.CustomBrowser": "chrome",
  "liveServer.settings.AdvanceCustomBrowserCmdLine": "",
  "liveServer.settings.NoBrowser": false,
  "liveServer.settings.ignoreFiles": [
    ".vscode/**",
    "**/*.scss",
    "**/*.sass",
    "**/*.ts"
  ]
}
```

---

## 🏗️ Project Architecture

### Directory Structure

```
TourEscape/
├── index.html                 # Entry point (redirects to home)
├── README.md                  # Project overview
├── developerGuide.md         # This file
├── .gitignore                # Git ignore file
├── .vscode/                  # VS Code configuration
│   ├── settings.json
│   └── extensions.json
├── pages/                    # HTML pages
│   ├── home.html            # Main homepage
│   ├── tours.html           # Tour packages page
│   ├── destinations.html    # Destinations showcase
│   ├── about.html           # About us page
│   ├── contact.html         # Contact page
│   └── booking.html         # Booking form page
├── css/                     # Stylesheets
│   ├── main.css            # Global styles and variables
│   ├── reset.css           # CSS reset/normalize
│   ├── components/         # Component-specific styles
│   │   ├── header.css
│   │   ├── navigation.css
│   │   ├── hero.css
│   │   ├── card.css
│   │   ├── form.css
│   │   ├── gallery.css
│   │   └── footer.css
│   ├── pages/              # Page-specific styles
│   │   ├── home.css
│   │   ├── tours.css
│   │   ├── destinations.css
│   │   ├── about.css
│   │   ├── contact.css
│   │   └── booking.css
│   └── utils/              # Utility styles
│       ├── responsive.css
│       ├── animations.css
│       └── utilities.css
├── js/                     # JavaScript files
│   ├── main.js            # Main application logic
│   ├── config.js          # Configuration settings
│   ├── components/        # Reusable components
│   │   ├── navigation.js
│   │   ├── image-slider.js
│   │   ├── modal.js
│   │   ├── form-validator.js
│   │   └── scroll-effects.js
│   ├── pages/             # Page-specific functionality
│   │   ├── home.js
│   │   ├── tours.js
│   │   ├── destinations.js
│   │   ├── contact.js
│   │   └── booking.js
│   └── utils/             # Utility functions
│       ├── api.js
│       ├── helpers.js
│       ├── validation.js
│       └── storage.js
└── images/                # Image assets
    ├── hero/              # Hero section images
    ├── destinations/      # Destination photos
    ├── tours/             # Tour package images
    ├── gallery/           # Gallery images
    ├── testimonials/      # Customer photos
    ├── team/              # Team member photos
    ├── icons/             # UI icons and symbols
    └── ui/                # UI elements and graphics
```

### File Naming Conventions

- **HTML Files**: Use kebab-case (e.g., `tour-packages.html`, `about-us.html`)
- **CSS Files**: Use kebab-case (e.g., `main-styles.css`, `responsive-design.css`)
- **JavaScript Files**: Use kebab-case (e.g., `image-slider.js`, `form-validation.js`)
- **Images**: Use descriptive kebab-case names (e.g., `sigiriya-rock-fortress.jpg`, `kandy-temple-sunset.jpg`)
- **Folders**: Use kebab-case for consistency

---

## 📝 Coding Standards

### HTML Guidelines

```html
<!-- Use semantic HTML5 elements -->
<header class="site-header">
  <nav class="main-navigation" role="navigation" aria-label="Main menu">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="home.html" class="nav-link" aria-current="page">Home</a>
      </li>
    </ul>
  </nav>
</header>

<!-- Use proper indentation (2 spaces) -->
<section class="tour-packages">
  <div class="container">
    <h2 class="section-title">Featured Tours</h2>
    <div class="tour-grid">
      <article class="tour-card">
        <img
          src="images/tours/cultural-tour.jpg"
          alt="Cultural heritage tour in Kandy"
          loading="lazy"
        />
        <div class="tour-content">
          <h3 class="tour-title">Cultural Heritage Tour</h3>
          <p class="tour-description">
            Explore ancient temples and historical sites
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- Always include alt text for images -->
<img
  src="images/destinations/ella-nine-arch.jpg"
  alt="Nine Arch Bridge in Ella surrounded by green tea plantations"
  loading="lazy"
  width="800"
  height="600"
/>
```

### CSS Organization

```css
/* Use CSS custom properties for consistency */
:root {
  /* Color Palette */
  --primary-color: #2c5282;
  --primary-dark: #1a365d;
  --primary-light: #4299e1;
  --secondary-color: #ed8936;
  --secondary-dark: #c05621;
  --secondary-light: #fbb040;
  --accent-color: #38a169;
  --accent-dark: #2f855a;
  --accent-light: #48bb78;

  /* Neutral Colors */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;

  /* Typography */
  --font-primary: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-secondary: "Playfair Display", Georgia, serif;
  --font-mono: "JetBrains Mono", Monaco, monospace;

  /* Font Sizes */
  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem; /* 36px */
  --text-5xl: 3rem; /* 48px */

  /* Spacing Scale */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */

  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 /
          0.1);

  /* Border Radius */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
}

/* CSS Reset and Base Styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 100%;
}

body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--gray-800);
  background-color: var(--gray-50);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Component Example: Tour Card */
.tour-card {
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Spacing */
  padding: var(--space-6);
  margin-bottom: var(--space-6);

  /* Visual Design */
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-200);

  /* Interactions */
  transition: var(--transition-normal);
  cursor: pointer;
}

.tour-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-light);
}

.tour-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}

.tour-card__title {
  font-family: var(--font-secondary);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--space-2);
}

.tour-card__description {
  color: var(--gray-600);
  margin-bottom: var(--space-4);
  line-height: 1.5;
}

.tour-card__price {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--space-4);
}
```

---

## 🎨 Styling Guidelines

### Mobile-First Responsive Design

```css
/* Mobile styles (default) */
.container {
  width: 100%;
  padding: 0 var(--space-4);
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    padding: 0 var(--space-6);
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 0 var(--space-8);
  }

  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop styles */
@media (min-width: 1280px) {
  .container {
    max-width: 1400px;
  }

  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Utility Classes

```css
/* Layout Utilities */
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.flex-row {
  flex-direction: row;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}

/* Spacing Utilities */
.p-4 {
  padding: var(--space-4);
}
.px-4 {
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
.py-4 {
  padding-top: var(--space-4);
  padding-bottom: var(--space-4);
}
.m-4 {
  margin: var(--space-4);
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

/* Text Utilities */
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-primary {
  color: var(--primary-color);
}
.text-secondary {
  color: var(--secondary-color);
}

/* Visibility Utilities */
.hidden {
  display: none;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Responsive Utilities */
@media (max-width: 767px) {
  .md\:hidden {
    display: none;
  }
}

@media (min-width: 768px) {
  .hidden\:md {
    display: none;
  }
}
```

---

## ⚡ JavaScript Best Practices

### Module Organization

```javascript
// config.js - Application configuration
const CONFIG = {
  API_BASE_URL: "https://api.tourescape.com",
  ENVIRONMENT: "development", // 'development' | 'production'
  GOOGLE_MAPS_API_KEY: "your-api-key-here",
  IMAGES: {
    LAZY_LOADING: true,
    PLACEHOLDER:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+",
  },
  FEATURES: {
    BOOKING_SYSTEM: true,
    PAYMENT_INTEGRATION: false,
    USER_ACCOUNTS: false,
  },
};

export default CONFIG;
```

```javascript
// utils/helpers.js - Utility functions
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const formatCurrency = (amount, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", {
    ...defaultOptions,
    ...options,
  }).format(new Date(date));
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};
```

```javascript
// components/image-slider.js - Reusable component
class ImageSlider {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      autoPlay: true,
      interval: 5000,
      showDots: true,
      showArrows: true,
      pauseOnHover: true,
      transition: "slide", // 'slide' | 'fade'
      ...options,
    };

    this.currentIndex = 0;
    this.slides = [];
    this.autoPlayTimer = null;
    this.isPlaying = false;

    this.init();
  }

  init() {
    this.setupSlides();
    this.setupControls();
    this.bindEvents();

    if (this.options.autoPlay) {
      this.startAutoPlay();
    }
  }

  setupSlides() {
    this.slides = Array.from(this.element.querySelectorAll(".slide"));
    this.slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? "block" : "none";
      slide.setAttribute("data-slide-index", index);
    });
  }

  setupControls() {
    if (this.options.showArrows) {
      this.createArrows();
    }

    if (this.options.showDots) {
      this.createDots();
    }
  }

  createArrows() {
    const prevArrow = document.createElement("button");
    prevArrow.className = "slider-arrow slider-arrow--prev";
    prevArrow.innerHTML = "&#8249;";
    prevArrow.setAttribute("aria-label", "Previous slide");

    const nextArrow = document.createElement("button");
    nextArrow.className = "slider-arrow slider-arrow--next";
    nextArrow.innerHTML = "&#8250;";
    nextArrow.setAttribute("aria-label", "Next slide");

    this.element.appendChild(prevArrow);
    this.element.appendChild(nextArrow);

    prevArrow.addEventListener("click", () => this.previousSlide());
    nextArrow.addEventListener("click", () => this.nextSlide());
  }

  createDots() {
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "slider-dots";

    this.slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      if (index === 0) dot.classList.add("active");

      dot.addEventListener("click", () => this.goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    this.element.appendChild(dotsContainer);
    this.dots = Array.from(dotsContainer.querySelectorAll(".slider-dot"));
  }

  bindEvents() {
    if (this.options.pauseOnHover) {
      this.element.addEventListener("mouseenter", () => this.pauseAutoPlay());
      this.element.addEventListener("mouseleave", () => this.resumeAutoPlay());
    }

    // Keyboard navigation
    this.element.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.previousSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    // Touch support for mobile
    let startX = 0;
    let endX = 0;

    this.element.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    this.element.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.previousSlide();
        }
      }
    });
  }

  goToSlide(index) {
    if (index === this.currentIndex) return;

    // Hide current slide
    this.slides[this.currentIndex].style.display = "none";

    // Show new slide
    this.slides[index].style.display = "block";

    // Update dots
    if (this.dots) {
      this.dots[this.currentIndex].classList.remove("active");
      this.dots[index].classList.add("active");
    }

    this.currentIndex = index;

    // Emit custom event
    this.element.dispatchEvent(
      new CustomEvent("slideChange", {
        detail: {
          currentIndex: this.currentIndex,
          slide: this.slides[this.currentIndex],
        },
      })
    );
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  previousSlide() {
    const prevIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  startAutoPlay() {
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, this.options.interval);
  }

  pauseAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
      this.isPlaying = false;
    }
  }

  resumeAutoPlay() {
    if (this.options.autoPlay && !this.isPlaying) {
      this.startAutoPlay();
    }
  }

  destroy() {
    this.pauseAutoPlay();
    // Remove event listeners and clean up
    this.element.innerHTML = "";
  }
}

export default ImageSlider;
```

### API Integration

```javascript
// utils/api.js - API service
class APIService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.headers,
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint, { method: "GET" });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: "DELETE" });
  }

  // Specific API methods
  async getTours(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    return this.get(`/tours${queryParams ? `?${queryParams}` : ""}`);
  }

  async getTourById(id) {
    return this.get(`/tours/${id}`);
  }

  async getDestinations() {
    return this.get("/destinations");
  }

  async submitBooking(bookingData) {
    return this.post("/bookings", bookingData);
  }

  async submitContactForm(formData) {
    return this.post("/contact", formData);
  }
}

export default APIService;
```

---

## 📱 Responsive Design

### Breakpoint Strategy

```css
/* Mobile First Breakpoints */
:root {
  --bp-xs: 320px; /* Small phones */
  --bp-sm: 480px; /* Large phones */
  --bp-md: 768px; /* Tablets */
  --bp-lg: 1024px; /* Small laptops */
  --bp-xl: 1280px; /* Desktops */
  --bp-2xl: 1536px; /* Large screens */
}

/* Usage Examples */
@media (min-width: 480px) {
  .hero-title {
    font-size: var(--text-3xl);
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: var(--text-4xl);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--text-5xl);
  }
}
```

### Responsive Images

```html
<!-- Method 1: Picture element with art direction -->
<picture>
  <source
    media="(min-width: 1024px)"
    srcset="images/hero-desktop.jpg 1920w, images/hero-desktop-2x.jpg 3840w"
  />
  <source
    media="(min-width: 768px)"
    srcset="images/hero-tablet.jpg 1024w, images/hero-tablet-2x.jpg 2048w"
  />
  <img
    src="images/hero-mobile.jpg"
    alt="Beautiful Sri Lankan landscape"
    loading="lazy"
    width="800"
    height="600"
  />
</picture>

<!-- Method 2: Responsive images with srcset -->
<img
  srcset="
    images/destination-small.jpg   400w,
    images/destination-medium.jpg  800w,
    images/destination-large.jpg  1200w
  "
  sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
  src="images/destination-medium.jpg"
  alt="Scenic view of tea plantations in Nuwara Eliya"
  loading="lazy"
/>
```

### Flexible Typography

```css
/* Fluid typography using clamp() */
.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1.3;
}

.body-text {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}

/* Container with fluid width */
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}
```

---

## 🚀 Performance Optimization

### Image Optimization

```javascript
// Lazy loading images
const observerOptions = {
  root: null,
  rootMargin: "50px",
  threshold: 0.1,
};

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.dataset.src;

      if (src) {
        img.src = src;
        img.classList.add("loaded");
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    }
  });
}, observerOptions);

// Initialize lazy loading
document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img);
});
```

### Critical CSS

```html
<!-- Inline critical CSS in head -->
<style>
  /* Critical above-the-fold styles */
  .header {
    /* ... */
  }
  .hero {
    /* ... */
  }
  .nav {
    /* ... */
  }
</style>

<!-- Load non-critical CSS asynchronously -->
<link
  rel="preload"
  href="css/main.css"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript><link rel="stylesheet" href="css/main.css" /></noscript>
```

### Resource Hints

```html
<!-- DNS prefetch for external resources -->
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//api.tourescape.com" />

<!-- Preconnect to important third-party origins -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload important resources -->
<link
  rel="preload"
  href="fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<link rel="preload" href="images/hero-mobile.jpg" as="image" />
```

---

## 🧪 Testing

### Cross-Browser Testing

Test your website on:

- **Chrome** (latest 2 versions)
- **Firefox** (latest 2 versions)
- **Safari** (latest 2 versions)
- **Edge** (latest 2 versions)
- **Mobile Safari** (iOS)
- **Chrome Mobile** (Android)

### Performance Testing

```javascript
// Basic performance monitoring
window.addEventListener("load", () => {
  if ("performance" in window) {
    const perfData = performance.getEntriesByType("navigation")[0];
    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;

    console.log("Page load time:", loadTime + "ms");

    // Track to analytics
    if (typeof gtag !== "undefined") {
      gtag("event", "page_load_time", {
        value: Math.round(loadTime),
        custom_parameter: window.location.pathname,
      });
    }
  }
});

// Core Web Vitals monitoring
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === "largest-contentful-paint") {
      console.log("LCP:", entry.startTime);
    }
    if (entry.entryType === "first-input") {
      console.log("FID:", entry.processingStart - entry.startTime);
    }
  }
});

observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] });
```

### Accessibility Testing

```html
<!-- Semantic HTML structure -->
<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="#" aria-current="page">Home</a></li>
    <li><a href="#">Tours</a></li>
  </ul>
</nav>

<!-- Proper form labels -->
<form>
  <label for="email">Email Address</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    aria-describedby="email-help"
  />
  <div id="email-help">We'll never share your email with anyone else.</div>
</form>

<!-- Skip links for keyboard navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
/* Skip link styling */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-color);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}

/* Ensure sufficient color contrast */
.text-primary {
  color: var(--primary-color); /* Ensure contrast ratio ≥ 4.5:1 */
}

/* Focus indicators */
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

---

## 🔍 SEO Guidelines

### Meta Tags Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary Meta Tags -->
    <title>Page Title | TourEscape Sri Lanka - Discover Amazing Tours</title>
    <meta name="title" content="Page Title | TourEscape Sri Lanka" />
    <meta
      name="description"
      content="Discover breathtaking tours and destinations in Sri Lanka with TourEscape. Cultural heritage, natural beauty, and unforgettable experiences await."
    />
    <meta
      name="keywords"
      content="sri lanka tours, ceylon travel, cultural tours, adventure travel, kandy temple, sigiriya rock"
    />
    <meta name="author" content="TourEscape" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://tourescape.com/page-url" />
    <meta property="og:title" content="Page Title | TourEscape Sri Lanka" />
    <meta
      property="og:description"
      content="Discover breathtaking tours and destinations in Sri Lanka"
    />
    <meta
      property="og:image"
      content="https://tourescape.com/images/og-image.jpg"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="TourEscape Sri Lanka" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://tourescape.com/page-url" />
    <meta
      property="twitter:title"
      content="Page Title | TourEscape Sri Lanka"
    />
    <meta
      property="twitter:description"
      content="Discover breathtaking tours and destinations in Sri Lanka"
    />
    <meta
      property="twitter:image"
      content="https://tourescape.com/images/twitter-image.jpg"
    />
    <meta property="twitter:creator" content="@tourescape" />

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2c5282" />
    <meta name="msapplication-TileColor" content="#2c5282" />
    <meta name="theme-color" content="#2c5282" />

    <!-- Canonical URL -->
    <link rel="canonical" href="https://tourescape.com/page-url" />

    <!-- Schema.org markup -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "TourEscape Sri Lanka",
        "description": "Premium tour operator specializing in Sri Lankan cultural and adventure tours",
        "url": "https://tourescape.com",
        "logo": "https://tourescape.com/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Tour Street",
          "addressLocality": "Colombo",
          "addressCountry": "Sri Lanka"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+94-XXX-XXX-XXX",
          "contactType": "customer service"
        }
      }
    </script>
  </head>
</html>
```

### Structured Data Examples

```html
<!-- Tour Package Schema -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Cultural Heritage Tour of Sri Lanka",
    "description": "5-day cultural tour covering ancient temples and historical sites",
    "image": "https://tourescape.com/images/cultural-tour.jpg",
    "touristType": "Cultural enthusiasts",
    "offers": {
      "@type": "Offer",
      "price": "450.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "TourEscape Sri Lanka"
    }
  }
</script>

<!-- Destination Schema -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Sigiriya Rock Fortress",
    "description": "Ancient rock fortress and palace ruins dating back to the 5th century",
    "image": "https://tourescape.com/images/sigiriya.jpg",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "7.9570",
      "longitude": "80.7603"
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "Sri Lanka"
    }
  }
</script>
```

---

## 🚀 Deployment

### Pre-deployment Checklist

- [ ] All images optimized (WebP format preferred)
- [ ] CSS and JavaScript minified
- [ ] All internal links tested
- [ ] Forms validated and working
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags added to all pages
- [ ] Performance optimized (PageSpeed score >90)
- [ ] Accessibility tested (WCAG 2.1 AA compliance)
- [ ] SSL certificate configured
- [ ] 404 error page created
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured

### Build Process

```bash
# Create production build directory
mkdir dist

# Minify CSS
npx clean-css-cli -o dist/css/main.min.css css/*.css

# Minify JavaScript
npx terser js/*.js -o dist/js/main.min.js

# Optimize images
npx imagemin images/*.jpg --out-dir=dist/images

# Copy HTML files
cp pages/*.html dist/

# Update asset references in HTML
# (Use build tools like Webpack, Parcel, or Vite for automation)
```

### Hosting Recommendations

1. **GitHub Pages** (Free)

   - Perfect for static sites
   - Custom domain support
   - HTTPS by default

2. **Netlify** (Free tier available)

   - Continuous deployment
   - Form handling
   - Edge functions

3. **Vercel** (Free tier available)
   - Fast global CDN
   - Automatic HTTPS
   - Analytics

### Deployment Commands

```bash
# Deploy to GitHub Pages
git add .
git commit -m "Deploy to production"
git push origin main

# Deploy to Netlify (drag & drop or CLI)
npm install -g netlify-cli
netlify deploy --dir=dist --prod

# Deploy to Vercel
npm install -g vercel
vercel --prod
```

---

## 🐛 Troubleshooting

### Common Issues

#### Images Not Loading

```javascript
// Debug image loading issues
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", (e) => {
    console.error("Failed to load image:", e.target.src);
    // Fallback image
    e.target.src = "images/placeholder.jpg";
  });

  img.addEventListener("load", (e) => {
    console.log("Image loaded successfully:", e.target.src);
  });
});
```

#### CSS Not Applying

```html
<!-- Check file paths (case-sensitive on some servers) -->
<link rel="stylesheet" href="css/main.css" />

<!-- Verify MIME type in server configuration -->
<!-- Add to .htaccess for Apache -->
AddType text/css .css

<!-- Force refresh with cache busting -->
<link rel="stylesheet" href="css/main.css?v=1.0.0" />
```

#### JavaScript Errors

```javascript
// Error handling wrapper
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", {
    message: e.message,
    filename: e.filename,
    line: e.lineno,
    column: e.colno,
    error: e.error,
  });
});

// Promise rejection handling
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
});
```

#### Mobile Layout Issues

```css
/* Ensure viewport meta tag is correct */
/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */

/* Debug mobile styles */
@media (max-width: 767px) {
  * {
    border: 1px solid red; /* Temporary debug borders */
  }
}

/* Fix iOS zoom on input focus */
input[type="text"],
input[type="email"],
textarea {
  font-size: 16px; /* Prevents zoom on iOS */
}
```

### Browser Developer Tools Tips

```javascript
// Performance monitoring
console.time("pageLoad");
window.addEventListener("load", () => {
  console.timeEnd("pageLoad");
});

// Debug responsive design
console.log("Viewport:", {
  width: window.innerWidth,
  height: window.innerHeight,
  devicePixelRatio: window.devicePixelRatio,
});

// Test touch events
document.addEventListener("touchstart", (e) => {
  console.log("Touch detected:", e.touches[0]);
});
```

---

## 📚 Resources

### Documentation

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)
- [Web.dev](https://web.dev/)

### Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance analysis
- [WAVE](https://wave.webaim.org/) - Accessibility testing
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Color contrast
- [TinyPNG](https://tinypng.com/) - Image compression

### Design Resources

- [Unsplash](https://unsplash.com/) - High-quality photos
- [Google Fonts](https://fonts.google.com/) - Web fonts
- [Heroicons](https://heroicons.com/) - SVG icons
- [Coolors](https://coolors.co/) - Color palette generator

---

**Happy Development! 🚀**

For questions or contributions, please refer to the main README.md file or contact the development team.
