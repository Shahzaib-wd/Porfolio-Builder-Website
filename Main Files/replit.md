# Portfolio Builder

## Overview

This is a client-side portfolio website builder application that allows users to create professional portfolios through a template-based system. The application provides multiple pre-designed templates, an interactive form builder, and generates responsive portfolio websites that can be previewed and customized. It uses vanilla JavaScript with Bootstrap for styling and includes features like theme switching, form validation, and local storage for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a multi-page architecture with separate HTML files for each template and functionality:

**Core Pages:**
- `buildnow.html` - Main portfolio builder interface with template selection and form inputs
- `preview.html` - Template 1 (Professional theme with light/dark mode)
- `preview2.html` - Template 2 (Black and yellow modern design)
- `preview3.html` - Template 3 (Bootstrap-based colorful design)

**JavaScript Architecture:**
- **PortfolioBuilder Class** (`buildnow_1756148494434.js`) - Handles form logic, data validation, template selection, and local storage operations
- **PortfolioPreview Class** (`preview_1756148494437.js`) - Universal preview system that dynamically detects template type and renders portfolio data accordingly

**CSS Organization:**
- Template-specific stylesheets for each design variant
- CSS custom properties (CSS variables) for consistent theming
- Responsive design with mobile-first approach
- Modular styling with component-based CSS classes

### Data Management
**Client-Side Storage:**
- Uses browser localStorage for data persistence
- JSON-based data structure storing personal information, projects, skills, and template selection
- No server-side database required - fully client-side application

**Data Structure:**
- Personal information (name, email, phone, role, experience, skills, profile image)
- Project portfolio (title, description, technologies, images, links)
- Template preferences and theme settings
- Form validation and state management

### Template System
**Multi-Template Architecture:**
- Template detection system that automatically identifies current template
- Universal data binding that works across all template variations
- Shared JavaScript logic with template-specific rendering
- Consistent data structure across all templates

**Template Features:**
- Template 1: Professional design with light/dark theme toggle
- Template 2: Modern black/yellow aesthetic with animations
- Template 3: Bootstrap-based colorful design with smooth scrolling

### UI/UX Features
**Interactive Elements:**
- Step-by-step portfolio building process
- Real-time form validation and feedback
- Dynamic project addition/removal (2-6 projects)
- Profile image upload and preview
- Responsive navigation with mobile hamburger menu

**Theme and Styling:**
- CSS custom properties for consistent theming
- Smooth transitions and hover effects
- Font Awesome icons throughout the interface
- Google Fonts integration (Inter, Poppins, Segoe UI)

## External Dependencies

### CSS Frameworks and Libraries
- **Bootstrap 5.3.0** - UI framework for responsive layout and components
- **Font Awesome 6.4.0** - Icon library for UI elements
- **AOS (Animate On Scroll) 2.3.1** - Scroll-based animations
- **Google Fonts** - Web fonts (Inter, Poppins font families)

### Content Delivery Networks
- **Bootstrap CDN** - CSS and JavaScript framework delivery
- **Cloudflare CDN** - Font Awesome icon delivery
- **Google Fonts CDN** - Web font delivery
- **Unpkg CDN** - AOS animation library delivery

### Browser APIs
- **localStorage API** - Client-side data persistence
- **FileReader API** - Profile image upload and preview functionality
- **CSS Custom Properties** - Dynamic theming system

### Asset Dependencies
- Placeholder image service for default profile images
- Favicon support for branding
- No external image hosting dependencies (uses data URLs for uploaded images)