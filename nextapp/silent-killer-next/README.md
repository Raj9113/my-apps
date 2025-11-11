# Silent Killer eSports Website

## Project Overview
This is a Next.js application for the Silent Killer eSports team. The application is a responsive single-page website featuring a dynamic hero slider, a navigation bar, and a footer. It is built using TypeScript and adheres to modern web development practices.

## Project Structure
```
silent-killer-next
├── app
│   ├── layout.tsx          # Main layout of the application
│   ├── page.tsx            # Main entry point for the application
│   ├── globals.css         # Global styles and responsive design rules
│   ├── components           # Contains reusable components
│   │   ├── HeroSlider.tsx   # Hero slider component
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   └── Footer.tsx       # Footer component
│   └── lib                 # Utility functions
│       └── slider.ts        # Functions related to the hero slider
├── public
│   └── assets              # Directory for images and logos
├── package.json            # npm configuration file
├── next.config.js          # Next.js configuration settings
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd silent-killer-next
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Features
- **Hero Slider**: A dynamic slider that auto-advances every 8 seconds, with circular progress indicators and typing animations.
- **Responsive Navigation**: A mobile-friendly navigation bar with a hamburger menu toggle.
- **Footer**: Contains relevant links and information about the eSports team.

## Development Conventions
- Use TypeScript for type safety and better development experience.
- Follow a component-based architecture for reusability and maintainability.
- Utilize CSS custom properties for consistent theming and responsive design.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.