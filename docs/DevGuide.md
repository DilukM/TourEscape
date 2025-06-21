# Tour Escape - Developer Guide

This guide provides technical documentation for developers working on the Tour Escape project.

## Project Overview

Tour Escape is a modern travel website built with vanilla HTML, CSS, and JavaScript, featuring EmailJS integration for contact form functionality.

## Technical Stack

### Frontend Technologies

- **HTML5**: Semantic markup with modern standards
- **CSS3**: Advanced styling with flexbox, grid, and animations
- **JavaScript ES6+**: Modern JavaScript with async/await, arrow functions
- **EmailJS**: Client-side email service integration
- **Font Awesome**: Icon library for consistent iconography

### Development Tools

- **Git**: Version control system
- **GitHub**: Repository hosting and collaboration
- **VS Code**: Recommended IDE with extensions

## Project Structure

```
TourEscape/
├── css/                    # Stylesheet files
├── js/
│   └── contact.js         # Contact form functionality
├── images/                # Image assets and media files
├── docs/                  # Documentation files
│   ├── UserGuide.md      # User documentation
│   └── DevGuide.md       # Developer documentation
├── index.html            # Homepage
├── contact.html          # Contact page
├── README.md             # Project overview
├── CHANGELOG.md          # Version history
├── LICENSE               # MIT License
└── .gitignore           # Git ignore rules
```

## Development Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Git for version control
- EmailJS account for contact form functionality

### Local Development

1. Clone the repository
2. Open project folder in your preferred editor
3. Use a local server for development (Live Server extension for VS Code)
4. Configure EmailJS credentials in `contact.js`

## Core Functionality

### Contact Form System

#### File: `js/contact.js`

The contact form system includes:

**Form Validation**

```javascript
// Email validation using regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation for international format
const phoneRegex = /^\+?[\d\s-]{10,}$/;
```

**EmailJS Integration**

```javascript
// Service configuration
const serviceID = "service_vj0tdx8";
const templateID = "template_t4c7vin";
const publicKey = "DEWq7OG1lFyc7Oq1m";

// Email sending with error handling
emailjs.send(serviceID, templateID, templateParams, publicKey);
```

**Interactive Features**

- Real-time form validation
- Focus/blur animations
- Loading states during submission
- Success/error feedback

### Animation System

**Parallax Effects**

```javascript
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
});
```

**Hover Interactions**

- Contact detail animations
- Social link transformations
- Form field focus effects

## EmailJS Configuration

### Setup Process

1. Create EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Set up email service (Gmail, Outlook, etc.)
3. Create email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email
   - `{{phone_number}}` - Phone number
   - `{{message}}` - Message content

### Security Configuration

```javascript
// Public key authentication (safe for client-side)
const publicKey = "your_public_key_here";

// Service and template IDs
const serviceID = "your_service_id";
const templateID = "your_template_id";
```

### HTML Integration

```html
<!-- EmailJS CDN -->
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
<script>
  (function () {
    emailjs.init("your_public_key");
  })();
</script>
```

## Form Validation System

### Client-Side Validation

- **Required fields**: Name, email, message
- **Email format**: RFC-compliant email validation
- **Phone format**: International phone number support
- **Real-time feedback**: Immediate validation on blur events

### Validation Functions

```javascript
// Email validation
if (!emailRegex.test(formData.email)) {
  alert("Please enter a valid email address");
  return;
}

// Phone validation (optional field)
if (formData.phone && !phoneRegex.test(formData.phone)) {
  alert("Please enter a valid phone number");
  return;
}
```

## Responsive Design Implementation

### CSS Architecture

- **Mobile-first approach**: Base styles for mobile, enhanced for larger screens
- **Flexbox and Grid**: Modern layout techniques
- **CSS Custom Properties**: Maintainable color and spacing systems

### Breakpoint Strategy

```css
/* Mobile-first base styles */
.container {
  /* mobile styles */
}

/* Tablet and up */
@media (min-width: 768px) {
  /* tablet styles */
}

/* Desktop and up */
@media (min-width: 1024px) {
  /* desktop styles */
}
```

## Performance Considerations

### Optimization Techniques

- **Lazy loading**: Images load as needed
- **Minified assets**: Reduced file sizes
- **Efficient selectors**: Optimized CSS and JavaScript
- **Event delegation**: Efficient event handling

### Loading Strategy

- **Critical CSS**: Above-the-fold styles prioritized
- **Progressive enhancement**: Core functionality works without JavaScript
- **Graceful degradation**: Fallbacks for older browsers

## Browser Compatibility

### Supported Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills and Fallbacks

- CSS Grid fallbacks using Flexbox
- JavaScript ES6+ features with appropriate fallbacks
- Progressive enhancement for modern features

## Deployment

### Static Hosting Options

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Advanced features with continuous deployment
- **Vercel**: Fast global CDN deployment
- **Traditional hosting**: Any web server supporting static files

### Build Process

No build process required - direct deployment of source files:

1. Upload all files to web server
2. Configure EmailJS credentials
3. Test contact form functionality
4. Verify responsive design across devices

## Testing Guidelines

### Manual Testing Checklist

- [ ] Contact form submission works
- [ ] Email validation functions correctly
- [ ] Phone validation handles international formats
- [ ] Responsive design works on all screen sizes
- [ ] Animations perform smoothly
- [ ] EmailJS integration delivers emails

### Browser Testing

- Test core functionality in all supported browsers
- Verify responsive breakpoints
- Check form validation in different environments
- Confirm email delivery across email providers

## Troubleshooting

### Common Issues

**EmailJS Not Working**

- Verify public key is correct
- Check service and template IDs
- Confirm EmailJS account is active
- Review browser console for errors

**Form Validation Issues**

- Check regex patterns for edge cases
- Verify all required fields are properly marked
- Test with various input formats

**Responsive Design Problems**

- Use browser dev tools to test breakpoints
- Check CSS media queries
- Verify viewport meta tag is present

### Debug Mode

Enable console logging for debugging:

```javascript
console.log("Form data:", formData);
console.log("EmailJS response:", response);
```

## Contributing Guidelines

### Code Standards

- **Consistent indentation**: 2 spaces for HTML/CSS, 2 spaces for JavaScript
- **Semantic HTML**: Use appropriate HTML5 elements
- **CSS organization**: Logical grouping and commenting
- **JavaScript best practices**: ES6+ features, proper error handling

### Git Workflow

1. Create feature branch from main
2. Make changes with descriptive commits
3. Test thoroughly before pushing
4. Submit pull request with detailed description

### Documentation

- Update this guide when adding new features
- Document any configuration changes
- Include examples for complex implementations
- Maintain changelog for version tracking

---

For additional technical support, refer to the project issues on GitHub or contact the development team.
