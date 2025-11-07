# Silent Killer eSports Website - Copilot Instructions

## Project Overview
This is a responsive single-page website for Silent Killer eSports team built with HTML, CSS, and vanilla JavaScript. The site features a dynamic hero slider with automated transitions and mobile-responsive design.

## Key Components

### Core Files
- `index.html`: Main entry point with site structure and slider implementation
- `styles.css`: Global styles and responsive design rules
- `assets/`: Directory containing images and logos

### Design Patterns
1. CSS Custom Properties
   ```css
   :root {
     --ring-size: 80px;    /* Progress ring size */
     --ring-stroke: 4;     /* Ring thickness */
   }
   ```

2. Mobile-First Media Queries
   - Breakpoint at 768px for responsive layouts
   - Different progress ring sizes for mobile vs desktop

### Interactive Features

1. Hero Slider
   - Auto-advances every 8 seconds
   - Circular progress indicator
   - Navigation arrows
   - Typing animation for content
   
2. Navigation
   - Responsive menu with hamburger toggle on mobile
   - Sticky positioning

## Development Conventions

### Styling
- Use CSS custom properties for consistent theming
- Maintain separate mobile styles within media queries
- Follow BEM-like class naming (e.g., `nav-left`, `nav-links`)

### JavaScript
- Functions use camelCase naming
- Event handlers defined in script tags
- Animation timings specified in milliseconds

### Assets
- Hero images named sequentially (hero1.jpg through hero5.jpg)
- Logo assets split between tab-logo.svg and logo.png

## Common Development Tasks

1. Adding Hero Slides
   - Add new image to `assets/`
   - Copy existing slide div structure in `index.html`
   - Update image path in `background-image` style

2. Modifying Transition Timing
   - Change `intervalTime` constant in JavaScript (default 8000ms)
   - Adjust progress ring animation duration to match

## Dependencies
- Google Fonts (Goldman, Orbitron)
- No external JavaScript libraries required