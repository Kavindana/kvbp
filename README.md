# Kavindana Vishwa Bandara Dissanayaka - Portfolio Website

## Overview
This is a dark-themed, animated portfolio website for Kavindana Vishwa Bandara Dissanayaka, a 19-year-old creative developer and storyteller from Sri Lanka. The website showcases his unique blend of technology and creativity, with smooth animations, interactive elements, and a responsive design.

## Features
- **Dark Theme Design**: Eye-friendly dark interface with accent colors
- **Smooth Animations**: CSS animations inspired by Prismic.io examples
- **Responsive Layout**: Works on all devices from mobile to desktop
- **Interactive Elements**: Hover effects, typing animation, scroll animations
- **Email Integration**: Contact form powered by EmailJS
- **Accessibility**: Semantic HTML and keyboard navigation support

## File Structure
portfolio/
├── index.html # Main HTML file
├── style.css # All CSS styles and animations
├── script.js # JavaScript for interactivity
├── README.md # This documentation file
└── assets/
└── images/ # All image assets
├── hero-bg.jpg # Hero background image
├── profile.jpg # Profile picture
├── web-project.jpg # Web project thumbnail
├── game-project.jpg # Game project thumbnail
└── storytelling-project.jpg # Storytelling project thumbnail

text

## Setup Instructions

### 1. Image Requirements
Create or generate the following images (recommended size: 1200x800 for backgrounds, 400x400 for profile):

1. **hero-bg.jpg**: Dark, tech-themed background with subtle patterns or code elements
2. **profile.jpg**: Professional/creative portrait (AI prompt: "thoughtful 19-year-old Sri Lankan developer with laptop, dark academic setting")
3. **web-project.jpg**: Web development project screenshot
4. **game-project.jpg**: Game development project visual
5. **storytelling-project.jpg**: Creative writing/digital storytelling project visual

### 2. EmailJS Configuration
The contact form uses EmailJS with these credentials:
- Service ID: `service_7npo3u2`
- Template ID: `template_wh2o26s`
- Public Key: `nAp-Qh32-VZtsudlt`

These are already configured in the HTML and JavaScript files.

### 3. Deployment
1. Upload all files to your web hosting service
2. Ensure all image paths are correct
3. Test the contact form with a test message

## Code Structure Details

### HTML (index.html)
- **Semantic Structure**: Uses proper HTML5 semantic elements
- **Section Organization**:
  - Hero Section: Introduction with typing animation
  - About Me: Personal information and traits
  - Creative Fusion: Showcases philosophy of blending art and tech
  - Projects: Portfolio work showcase
  - Contact: Form and contact information
- **Accessibility**: ARIA labels and proper heading hierarchy

### CSS (style.css)
- **CSS Variables**: Centralized design tokens for easy customization
- **Animation Keyframes**:
  - `float`: For background shapes
  - `slideInLeft/Right`: Entrance animations
  - `bounce`: Scroll indicator animation
  - `blink`: Typing cursor animation
- **Responsive Design**: Media queries for tablet and mobile
- **Dark Theme**: Carefully selected color palette for readability

### JavaScript (script.js)
- **Typing Animation**: Rotates through different roles
- **Scroll Animations**: Triggers animations when elements enter viewport
- **Form Handling**: EmailJS integration with success/error states
- **Interactive Elements**: Hover effects, mobile menu toggle
- **Smooth Scrolling**: For navigation links

## Customization Guide

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-bg: #0a0a0f;
    --accent-primary: #00b4d8;
    /* ... other variables */
}
Update Content
Personal Information: Update text in index.html

Projects: Modify project cards in the Projects section

Images: Replace placeholder images in assets/images/

Add New Sections
Add new HTML section with proper ID

Add corresponding CSS styles

Update navigation links if needed

Animation References
This website uses animations inspired by:

Prismic.io CSS Animation Examples: For smooth transitions and entrance effects

Modern Portfolio Trends: Card hover effects, typing animations

Creative Coding Principles: Code display animations, interactive elements

Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Performance Notes
Images are optimized for web

CSS animations use transform and opacity for GPU acceleration

JavaScript is defer-loaded and minimal

License
This portfolio template is created for Kavindana Vishwa Bandara Dissanayaka. Feel free to use as inspiration for your own portfolio.

Contact
For questions or customization help, refer to the contact section on the website.

text

## Image Generation Guide

For AI image generation, use these prompts:

1. **Hero Background**: "dark tech background with glowing code lines, abstract digital art, deep blue and purple tones, futuristic"
   
2. **Profile Picture**: "thoughtful 19-year-old Sri Lankan male with laptop, in a creative workspace, soft lighting, professional portrait, dark academic setting"

3. **Web Project**: "modern web development interface screenshot, dark theme, creative design, code editor visible"

4. **Game Project**: "2D game development screenshot with Sri Lankan mythological elements, pixel art style, adventure game UI"

5. **Storytelling Project**: "digital poetry interface, creative writing display, elegant typography, dark theme with accent colors"

## EmailJS Configuration Notes

The contact form is pre-configured with:
- Service ID: `service_7npo3u2`
- Template ID: `template_wh2o26s` 
- Public Key: `nAp-Qh32-VZtsudlt`

Make sure your EmailJS account has the template set up to receive:
- `name`: Sender's name
- `email`: Sender's email
- `subject`: Email subject
- `message`: Email body

## To Use This Portfolio:

1. **Create the image assets** using the AI prompts above
2. **Save the images** in the `assets/images/` folder with the names specified
3. **Upload all files** to your web hosting
4. **Test the contact form** to ensure EmailJS is working
5. **Customize the content** to match your specific details

The portfolio is now ready! It includes all the animations, dark theme, EmailJS integration, and responsive design as requested.