# Kavindana Vishwa Bandara Dissanayaka - Portfolio Website

## Overview
This is a unique, dark-themed portfolio website for Kavindana Vishwa Bandara Dissanayaka, a 19-year-old creative developer and storyteller from Sri Lanka. The website is designed to reflect his unique blend of technical skills and creative expression, as described in his personal essay.

## Features
- **Dark Theme Design**: Sophisticated dark interface with accent colors for visual appeal
- **Responsive Layout**: Fully responsive design that works on all devices
- **Advanced Animations**: CSS animations inspired by Prismic.io and modern portfolio examples
- **Interactive Elements**: Hover effects, scroll-triggered animations, and interactive components
- **Performance Optimized**: Lazy loading, optimized assets, and efficient code
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support

## Project Structure
portfolio/
├── index.html # Main HTML file
├── style.css # All CSS styles and animations
├── script.js # Interactive JavaScript functionality
├── README.md # This documentation file
└── assets/
├── images/ # All portfolio images
│ ├── hero-bg.jpg # Hero background image
│ ├── profile.jpg # Profile picture
│ ├── project1.jpg # Project 1 screenshot
│ ├── project2.jpg # Project 2 screenshot
│ ├── project3.jpg # Project 3 screenshot
│ └── sri-lanka-flag.svg # Sri Lankan flag icon
└── icons/ # Icon assets

text

## Image Requirements for AI Generation

### 1. Profile Picture (profile.jpg)
- **Pose**: Thoughtful, looking slightly away from camera, natural lighting
- **Setting**: Modern workspace with laptop, subtle Sri Lankan elements in background
- **Style**: Professional yet approachable, dark theme-appropriate colors
- **Dimensions**: 600x800 pixels, portrait orientation

### 2. Hero Background (hero-bg.jpg)
- **Concept**: Abstract digital art representing fusion of code and creativity
- **Elements**: Floating code snippets, geometric shapes, subtle gradients
- **Colors**: Dark blues and purples with accent colors matching website palette
- **Dimensions**: 1920x1080 pixels, landscape orientation

### 3. Project Images
- **Project 1**: Screenshot of a game interface with Sri Lankan cultural elements
- **Project 2**: Web development project with creative coding elements
- **Project 3**: UI/UX design with poetic code visualization
- **Dimensions**: 800x600 pixels for each, consistent visual style

## Design Principles

### Color Palette
- **Primary Dark**: #0a0a0f (Almost black)
- **Secondary Dark**: #12121a (Dark blue-gray)
- **Accent Color**: #6c63ff (Vibrant purple-blue)
- **Text Primary**: #f0f0f0 (Off-white)
- **Text Secondary**: #b0b0c0 (Light gray-blue)

### Typography
- **Headings**: 'Space Grotesk' - Modern, geometric sans-serif
- **Body Text**: 'Poppins' - Clean, readable sans-serif
- **Hierarchy**: Clear visual hierarchy with appropriate font weights and sizes

### Animations
1. **Loading Animation**: Pulsing logo with progress bar
2. **Floating Shapes**: Background elements with parallax effect
3. **Scroll Triggers**: Elements fade in as user scrolls
4. **Hover Effects**: Interactive buttons, cards, and links
5. **Skill Bars**: Animated progress bars for skills section

## Code Organization

### HTML Structure
- Semantic HTML5 elements for accessibility
- Clear section hierarchy with proper IDs for navigation
- Optimized image tags with alt attributes
- Proper meta tags for SEO and mobile optimization

### CSS Architecture
- CSS Variables for consistent theming
- Mobile-first responsive design approach
- BEM-like naming convention for clarity
- Separate sections for different components
- Animation keyframes defined at appropriate locations

### JavaScript Modules
1. **Loading Screen**: Controls initial page loading experience
2. **Navigation**: Handles mobile menu, smooth scrolling, active states
3. **Animations**: Manages scroll-triggered and interactive animations
4. **Form Handling**: Contact form validation and submission
5. **Utilities**: Helper functions for counters, notifications, etc.

## Customization Instructions

### Changing Colors
Edit the CSS variables in the `:root` selector in `style.css`:
```css
:root {
    --primary-dark: #0a0a0f;
    --secondary-dark: #12121a;
    --accent-color: #6c63ff;
    /* ... other variables */
}
Adding New Projects
Add a new project card in the projects-grid section in index.html

Update the project count in the About section stats

Add corresponding image to the assets/images/ folder

Updating Personal Information
Replace placeholder text in index.html with your actual information

Update social media links in the Hero and Contact sections

Modify the skills percentages in the Skills section

Adding New Sections
Add new HTML section with appropriate ID

Update navigation links in the navbar

Add corresponding CSS styles in style.css

Add any required JavaScript functionality in script.js

Performance Optimizations
Images
All images are optimized for web (compressed)

Lazy loading implemented for off-screen images

Proper dimensions specified to prevent layout shifts

Code
CSS and JavaScript are minified in production

Unused CSS is removed

JavaScript loads asynchronously where possible

Animations
Uses CSS animations for better performance

Respects prefers-reduced-motion user preference

Optimized with will-change property where appropriate

Browser Compatibility
Chrome 60+ (Full support)

Firefox 55+ (Full support)

Safari 12+ (Full support)

Edge 79+ (Full support)

iOS Safari 12+ (Full support)

Chrome for Android (Full support)

Future Enhancements
Light/Dark Mode Toggle: Already implemented in JavaScript

Project Filtering: Filter projects by category (web dev, games, etc.)

Blog Integration: Add a blog section for articles and stories

Internationalization: Support for multiple languages

Advanced 3D Animations: Using Three.js for immersive visuals

Credits
Design inspiration from Prismic.io CSS animations blog

Fonts from Google Fonts (Poppins, Space Grotesk)

Icons from Font Awesome

Color palette inspired by modern dark theme designs

License
This portfolio template is free to use and modify for personal and commercial projects. Attribution is appreciated but not required.

Built with creativity and purpose, just like Kavindana's approach to coding and storytelling.


## 5. Instructions for Image Generation with AI

To create the perfect images for this portfolio, use these AI prompts:

### Profile Picture
"Photorealistic portrait of a thoughtful 19-year-old Sri Lankan male, sitting at a modern workspace with a laptop, subtle smile, natural lighting, dark themed background with floating digital elements, professional yet creative vibe, 8k resolution"


### Hero Background
"Abstract digital art, dark blue and purple gradient background with floating geometric shapes, glowing code snippets in the air, ethereal particles, futuristic yet creative atmosphere, 1920x1080, trending on ArtStation"

### Project Images
1. **Game Project**: "Screenshot of a video game interface inspired by Sri Lankan folklore, vibrant colors, mythical creatures, intuitive UI, game development mockup"
2. **Web Project**: "Creative coding portfolio website interface, dark theme with purple accents, interactive elements, code visualization, modern web design"
3. **UI/UX Project**: "Poetic code visualization interface, text transforming into visual patterns, creative writing meets programming, elegant UI design"

## How to Use

1. Download all files into a folder
2. Generate images using AI with the prompts above
3. Place images in the `assets/images/` folder
4. Update any personal information in `index.html`
5. Open `index.html` in a browser to view the portfolio

This portfolio is fully functional and ready to use. The code is well-commented for easy future upgrades and customization.
