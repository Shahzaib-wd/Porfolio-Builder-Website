// Portfolio Preview JavaScript
// Embedded CSS content for client-side ZIP generation
const EMBEDDED_CSS_CONTENT = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Light theme colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #e2e8f0;
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  --text-muted: #718096;
  --accent-primary: #3182ce;
  --accent-secondary: #2b6cb0;
  --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --border-color: #e2e8f0;
  --shadow-light: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-medium: 0 10px 25px rgba(0, 0, 0, 0.1);
  --shadow-heavy: 0 20px 40px rgba(0, 0, 0, 0.15);
}

[data-theme="dark"] {
  /* Dark theme colors */
  --bg-primary: #1a202c;
  --bg-secondary: #2d3748;
  --bg-tertiary: #4a5568;
  --text-primary: #f7fafc;
  --text-secondary: #e2e8f0;
  --text-muted: #a0aec0;
  --accent-primary: #63b3ed;
  --accent-secondary: #3182ce;
  --accent-gradient: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  --border-color: #4a5568;
  --shadow-light: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-medium: 0 10px 25px rgba(0, 0, 0, 0.4);
  --shadow-heavy: 0 20px 40px rgba(0, 0, 0, 0.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navigation Styles */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: all 0.3s ease;
}

[data-theme="dark"] #navbar {
  background: rgba(26, 32, 44, 0.95);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  transition: all 0.3s ease;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: none;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 8px;
  transition: all 0.3s ease;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-color);
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links a {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
    font-size: 1.1rem;
  }

  .nav-links a:last-child {
    border-bottom: none;
  }
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-gradient);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-image {
  margin-bottom: 1rem;
}

.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: var(--shadow-heavy);
  animation: floatAnimation 3s ease-in-out infinite;
}

@keyframes floatAnimation {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  animation: slideInUp 1s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.highlight {
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: slideInUp 1s ease-out 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: slideInUp 1s ease-out 0.4s both;
}

.btn{
  padding: 12px 24px !important;
  border-radius: 50px !important;
  text-decoration: none !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
}

.btn-primary {
  background: white;
  color: var(--accent-primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: var(--accent-primary);
  transform: translateY(-2px);
}

/* Section Styles */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
}

/* About Section */
.about {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.about-text p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.about-visual {
  display: flex;
  justify-content: center;
}

.about-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: var(--shadow-medium);
  transition: transform 0.3s ease;
}

.about-card:hover {
  transform: translateY(-10px);
}

.about-card i {
  font-size: 3rem;
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.about-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.about-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Skills Section */
.skills-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.skill-icon {
  width: 60px;
  height: 60px;
  background: var(--accent-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.skill-icon i {
  font-size: 1.5rem;
  color: white;
}

.skill-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.skill-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.skill-progress {
  background: var(--bg-tertiary);
  border-radius: 10px;
  height: 6px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--accent-gradient);
  border-radius: 10px;
  transition: width 1s ease-out;
}

/* Projects Section */
.projects {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-primary);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-heavy);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tag {
  background: var(--accent-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--accent-secondary);
}

/* Contact Section */
.contact-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--accent-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.contact-details h4 {
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.contact-details p {
  color: var(--text-secondary);
  margin: 0;
}

.contact-form {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid var(--border-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-btn {
  background: var(--accent-gradient);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

/* Footer */
footer {
  background: var(--bg-secondary);
  padding: 3rem 0 2rem;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  text-decoration: none;
}

.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent-primary);
}

.footer-actions {
  margin: 1rem 0;
}

.download-btn {
  background: var(--accent-gradient);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.download-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.copyright {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Back to top button */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: var(--accent-gradient);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-heavy);
}

/* Hide download button in downloaded version */
.downloaded-version .preview-only {
  display: none !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .stats {
    justify-content: center;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-links {
    gap: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .profile-img {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .nav-container {
    padding: 0 15px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .skills-container {
    grid-template-columns: 1fr;
  }

  .projects-container {
    grid-template-columns: 1fr;
  }

  .back-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }

  .profile-img {
    width: 150px;
    height: 150px;
  }
}`;

class PortfolioPreview {
  constructor() {
    this.portfolioData = null;
    this.currentTheme = localStorage.getItem('theme') || 'light';
    
    this.init();
  }

  init() {
    this.loadPortfolioData();
    this.setupTheme();
    this.setupEventListeners();
    this.setupAnimations();
    this.renderPortfolio();
    this.setupMobileNavigation();
  }

  loadPortfolioData() {
    try {
      const data = localStorage.getItem('portfolioData');
      if (!data) {
        // Use default sample data if no portfolio data is found
        this.portfolioData = this.getDefaultPortfolioData();
        return;
      }
      
      this.portfolioData = JSON.parse(data);
    } catch (error) {
      console.error('Error loading portfolio data:', error);
      // Use default sample data on error
      this.portfolioData = this.getDefaultPortfolioData();
    }
  }

  getDefaultPortfolioData() {
    return {
      personal: {
        name: 'John Doe',
        role: 'web developer',
        experience: 5,
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
      },
      projects: [
        {
          title: 'E-commerce Website',
          description: 'A modern e-commerce platform with user authentication, shopping cart, and payment integration.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates and team features.',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
          technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Weather Dashboard',
          description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
          image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop',
          technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
          liveUrl: '#',
          githubUrl: '#'
        }
      ]
    };
  }

  setupTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (this.currentTheme === 'dark') {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  }

  setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
      this.toggleTheme();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile menu if open
          this.closeMobileNav();
        }
      });
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      this.handleContactSubmit(e);
    });

    // Back to top button
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });

    document.getElementById('backToTop').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Download button
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        this.downloadProject();
      });
    }
  }

  setupMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        this.toggleMobileNav();
      });

      // Close mobile nav when clicking outside
      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
          this.closeMobileNav();
        }
      });

      // Close mobile nav on window resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          this.closeMobileNav();
        }
      });
    }
  }

  toggleMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  }

  closeMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    this.updateThemeIcon();
  }

  setupAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }

    // Stagger animations for cards
    this.staggerAnimations('.skill-card', 100);
    this.staggerAnimations('.project-card', 150);
  }

  staggerAnimations(selector, delay) {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.style.animationDelay = `${index * delay}ms`;
    });
  }

  handleScroll() {
    const backToTop = document.getElementById('backToTop');
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Navbar scroll effect
    if (window.scrollY > 50) {
      navbar.style.background = this.currentTheme === 'dark' 
        ? 'rgba(26, 32, 44, 0.98)' 
        : 'rgba(255, 255, 255, 0.98)';
    } else {
      navbar.style.background = this.currentTheme === 'dark' 
        ? 'rgba(26, 32, 44, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)';
    }
  }

  async downloadProject() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (!window.JSZip) {
      alert('JSZip library not loaded. Please refresh the page and try again.');
      return;
    }

    try {
      downloadBtn.disabled = true;
      downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Download...';

      const zip = new JSZip();

      // Get current HTML and modify it for download
      const htmlContent = this.getModifiedHtmlContent();
      const cssContent = this.getCssContent();
      const jsContent = this.getJsContent();

      // Add files to zip
      zip.file('index.html', htmlContent);
      zip.file('style.css', cssContent);
      zip.file('script.js', jsContent);

      // Generate zip file
      const content = await zip.generateAsync({type: 'blob'});
      
      // Create download link
      const url = window.URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio-project.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      // Reset button
      downloadBtn.disabled = false;
      downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Project';

    } catch (error) {
      console.error('Error creating download:', error);
      alert('Error creating download. Please try again.');
      
      downloadBtn.disabled = false;
      downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Project';
    }
  }

  getModifiedHtmlContent() {
    // Get current HTML
    let htmlContent = document.documentElement.outerHTML;
    
    // Remove the download button and preview-only elements
    htmlContent = htmlContent.replace(/<div class="footer-actions preview-only">[\s\S]*?<\/div>/g, '');
    
    // Update file references
    htmlContent = htmlContent.replace(/href="preview\.css"/g, 'href="style.css"');
    htmlContent = htmlContent.replace(/src="preview\.js"/g, 'src="script.js"');
    
    // Remove JSZip script tag
    htmlContent = htmlContent.replace(/<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/jszip\/3\.10\.1\/jszip\.min\.js"><\/script>\s*/g, '');
    
    // Add downloaded-version class to body
    htmlContent = htmlContent.replace(/<body[^>]*>/g, match => {
      if (match.includes('class=')) {
        return match.replace(/class="([^"]*)"/, 'class="$1 downloaded-version"');
      } else {
        return match.replace('<body', '<body class="downloaded-version"');
      }
    });
    
    // Ensure proper DOCTYPE and structure
    if (!htmlContent.startsWith('<!DOCTYPE html>')) {
      htmlContent = '<!DOCTYPE html>\n' + htmlContent;
    }
    
    return htmlContent;
  }

  getCssContent() {
    // Return the embedded CSS content directly
    return EMBEDDED_CSS_CONTENT;
  }

  getJsContent() {
    // Return the JavaScript content without download functionality
    return `// Portfolio Preview JavaScript (Standalone Version)
class PortfolioPreview {
  constructor() {
    this.portfolioData = null;
    this.currentTheme = localStorage.getItem('theme') || 'light';
    
    this.init();
  }

  init() {
    this.loadPortfolioData();
    this.setupTheme();
    this.setupEventListeners();
    this.setupAnimations();
    this.renderPortfolio();
    this.setupMobileNavigation();
  }

  loadPortfolioData() {
    try {
      const data = localStorage.getItem('portfolioData');
      if (!data) {
        // Use default sample data if no portfolio data is found
        this.portfolioData = this.getDefaultPortfolioData();
        return;
      }
      
      this.portfolioData = JSON.parse(data);
    } catch (error) {
      console.error('Error loading portfolio data:', error);
      // Use default sample data on error
      this.portfolioData = this.getDefaultPortfolioData();
    }
  }

  getDefaultPortfolioData() {
    return {
      personal: {
        name: 'John Doe',
        role: 'web developer',
        experience: 5,
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
      },
      projects: [
        {
          title: 'E-commerce Website',
          description: 'A modern e-commerce platform with user authentication, shopping cart, and payment integration.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates and team features.',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
          technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Weather Dashboard',
          description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
          image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop',
          technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
          liveUrl: '#',
          githubUrl: '#'
        }
      ]
    };
  }

  setupTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (this.currentTheme === 'dark') {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  }

  setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
      this.toggleTheme();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile menu if open
          this.closeMobileNav();
        }
      });
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      this.handleContactSubmit(e);
    });

    // Back to top button
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });

    document.getElementById('backToTop').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  setupMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        this.toggleMobileNav();
      });

      // Close mobile nav when clicking outside
      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
          this.closeMobileNav();
        }
      });

      // Close mobile nav on window resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          this.closeMobileNav();
        }
      });
    }
  }

  toggleMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  }

  closeMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    this.updateThemeIcon();
  }

  setupAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }

    // Stagger animations for cards
    this.staggerAnimations('.skill-card', 100);
    this.staggerAnimations('.project-card', 150);
  }

  staggerAnimations(selector, delay) {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.style.animationDelay = \`\${index * delay}ms\`;
    });
  }

  handleScroll() {
    const backToTop = document.getElementById('backToTop');
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Navbar scroll effect
    if (window.scrollY > 50) {
      navbar.style.background = this.currentTheme === 'dark' 
        ? 'rgba(26, 32, 44, 0.98)' 
        : 'rgba(255, 255, 255, 0.98)';
    } else {
      navbar.style.background = this.currentTheme === 'dark' 
        ? 'rgba(26, 32, 44, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)';
    }
  }

  renderPortfolio() {
    if (!this.portfolioData) return;

    const { personal, projects } = this.portfolioData;

    // Update document title
    document.title = \`\${personal.name} - Portfolio\`;

    // Update personal information
    this.updatePersonalInfo(personal);
    
    // Render skills based on profession
    this.renderSkills(personal.role);
    
    // Render projects
    this.renderProjects(projects);
    
    // Update stats
    this.updateStats(personal, projects);
  }

  updatePersonalInfo(personal) {
    // Profile image
    const profileImage = document.getElementById('profileImage');
    profileImage.src = personal.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face';
    profileImage.alt = \`\${personal.name} - Profile Picture\`;

    // Name
    document.getElementById('userName').textContent = personal.name;
    document.getElementById('footerName').textContent = personal.name;
    document.getElementById('copyrightName').textContent = personal.name;

    // Hero description
    const heroDesc = document.getElementById('heroDescription');
    heroDesc.textContent = \`A passionate \${personal.role} with \${personal.experience} years of experience crafting innovative digital solutions that solve real-world problems.\`;

    // About description
    const aboutDesc = document.getElementById('aboutDescription');
    aboutDesc.textContent = this.getAboutDescription(personal.role, personal.experience);

    // Contact information
    document.getElementById('userEmail').textContent = personal.email;
    document.getElementById('userPhone').textContent = personal.phone;
  }

  getAboutDescription(role, experience) {
    const descriptions = {
      'software engineer': \`Experienced Software Engineer with \${experience}+ years of crafting high-performance software solutions that solve real-world problems and scale businesses.\`,
      'web developer': \`Creative Web Developer with \${experience}+ years of building sleek, responsive websites that combine functionality with modern UI/UX principles.\`,
      'web designer': \`Web Designer with \${experience}+ years of crafting visually appealing, user-friendly designs that blend creativity with performance.\`,
      'frontend developer': \`Frontend Developer with \${experience}+ years of experience crafting stunning, user-focused interfaces with the latest web technologies.\`,
      'backend developer': \`Backend Developer with \${experience}+ years of experience building secure, scalable systems and robust APIs for modern applications.\`,
      'full stack developer': \`Full Stack Developer with \${experience}+ years of hands-on experience delivering complete web applications using both frontend and backend technologies.\`,
      'ui/ux designer': \`UI/UX Designer with \${experience}+ years of creating visually striking and user-centric designs that enhance usability and aesthetics.\`,
      'mobile app developer': \`Mobile App Developer with \${experience}+ years of experience building seamless, high-performance mobile applications for Android and iOS.\`,
      'data scientist': \`Data Scientist with \${experience}+ years of transforming data into actionable insights using ML, statistics, and data storytelling.\`,
      'ethical hacker': \`Ethical Hacker with \${experience}+ years of experience identifying security flaws and strengthening systems through professional penetration testing.\`,
      'cloud engineer': \`Cloud Engineer with \${experience}+ years of deploying and managing secure, scalable cloud infrastructures on AWS, Azure, and beyond.\`,
      'devops engineer': \`DevOps Engineer with \${experience}+ years of experience streamlining development through CI/CD, automation, and infrastructure-as-code.\`,
      'ai engineer': \`AI Engineer with \${experience}+ years of crafting intelligent systems using NLP, deep learning, and real-world AI applications.\`
    };

    return descriptions[role] || \`Passionate \${role} with \${experience}+ years of experience delivering impactful solutions driven by innovation, precision, and growth mindset.\`;
  }

  renderSkills(profession) {
    const skillsContainer = document.getElementById('skillsContainer');
    const skillsMap = this.getSkillsMap();
    const skills = skillsMap[profession] || skillsMap['web developer'];

    skillsContainer.innerHTML = '';

    skills.forEach((skill, index) => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card';
      skillCard.setAttribute('data-aos', 'fade-up');
      skillCard.setAttribute('data-aos-delay', index * 100);

      skillCard.innerHTML = \`
        <div class="skill-icon">
          <i class="\${skill.icon}"></i>
        </div>
        <h3 class="skill-name">\${skill.name}</h3>
        <p>\${skill.desc}</p>
        <div class="skill-progress">
          <div class="progress-bar" style="width: \${90 - index * 5}%"></div>
        </div>
      \`;

      skillsContainer.appendChild(skillCard);
    });
  }

  getSkillsMap() {
    return {
      'software engineer': [
        { icon: 'fas fa-code', name: 'Programming', desc: 'Java, Python, C++, JavaScript' },
        { icon: 'fas fa-sitemap', name: 'System Design', desc: 'Scalable architecture patterns' },
        { icon: 'fas fa-database', name: 'Databases', desc: 'SQL & NoSQL databases' },
        { icon: 'fas fa-project-diagram', name: 'Algorithms', desc: 'Data structures & algorithms' }
      ],
      'web developer': [
        { icon: 'fab fa-html5', name: 'HTML5', desc: 'Semantic markup' },
        { icon: 'fab fa-css3-alt', name: 'CSS3', desc: 'Responsive design' },
        { icon: 'fab fa-js', name: 'JavaScript', desc: 'Interactive logic' },
        { icon: 'fab fa-node-js', name: 'Node.js', desc: 'Backend development' }
      ],
      'web designer': [
        { icon: 'fas fa-palette', name: 'UI Design', desc: 'Clean, modern interfaces' },
        { icon: 'fas fa-layer-group', name: 'Figma/XD', desc: 'High-fidelity prototypes' },
        { icon: 'fab fa-css3-alt', name: 'CSS3', desc: 'Animations & layouts' },
        { icon: 'fas fa-adjust', name: 'Color Theory', desc: 'Design harmony & contrast' }
      ],
      'frontend developer': [
        { icon: 'fab fa-react', name: 'React', desc: 'Modern UI components' },
        { icon: 'fab fa-js', name: 'JavaScript', desc: 'Interactive experiences' },
        { icon: 'fab fa-css3-alt', name: 'CSS3', desc: 'Animations & layouts' },
        { icon: 'fab fa-sass', name: 'Sass', desc: 'Advanced styling' }
      ],
      'backend developer': [
        { icon: 'fab fa-node-js', name: 'Node.js', desc: 'Server-side scripting' },
        { icon: 'fas fa-database', name: 'MongoDB', desc: 'Database management' },
        { icon: 'fas fa-lock', name: 'Auth Systems', desc: 'Secure authentication' },
        { icon: 'fas fa-server', name: 'REST APIs', desc: 'API development' }
      ],
      'full stack developer': [
        { icon: 'fab fa-react', name: 'React', desc: 'Frontend frameworks' },
        { icon: 'fab fa-node-js', name: 'Node.js', desc: 'Backend services' },
        { icon: 'fas fa-database', name: 'MongoDB', desc: 'Database management' },
        { icon: 'fas fa-server', name: 'REST APIs', desc: 'API development' }
      ],
      'ui/ux designer': [
        { icon: 'fas fa-pen-nib', name: 'UI Design', desc: 'Clean interfaces' },
        { icon: 'fas fa-user-friends', name: 'UX Research', desc: 'User testing & empathy' },
        { icon: 'fab fa-figma', name: 'Figma', desc: 'High-fidelity prototyping' },
        { icon: 'fas fa-mobile', name: 'Responsive UX', desc: 'Mobile-first design' }
      ],
      'mobile app developer': [
        { icon: 'fab fa-react', name: 'React Native', desc: 'Cross-platform apps' },
        { icon: 'fab fa-swift', name: 'Swift', desc: 'iOS development' },
        { icon: 'fab fa-android', name: 'Kotlin', desc: 'Android development' },
        { icon: 'fas fa-mobile-alt', name: 'UI/UX', desc: 'Mobile interfaces' }
      ],
      'data scientist': [
        { icon: 'fas fa-database', name: 'Data Analysis', desc: 'Extract insights from data' },
        { icon: 'fab fa-python', name: 'Python', desc: 'Pandas, NumPy, matplotlib' },
        { icon: 'fas fa-chart-pie', name: 'Data Viz', desc: 'Interactive dashboards' },
        { icon: 'fas fa-brain', name: 'ML Models', desc: 'Training predictive models' }
      ],
      'ethical hacker': [
        { icon: 'fas fa-user-secret', name: 'Pen Testing', desc: 'Security vulnerability testing' },
        { icon: 'fas fa-lock', name: 'Cybersecurity', desc: 'Network & data protection' },
        { icon: 'fas fa-bug', name: 'Exploit Dev', desc: 'Finding security flaws' },
        { icon: 'fab fa-linux', name: 'Linux', desc: 'Kali tools & scripting' }
      ],
      'cloud engineer': [
        { icon: 'fab fa-aws', name: 'AWS', desc: 'Cloud infrastructure' },
        { icon: 'fas fa-server', name: 'DevOps', desc: 'CI/CD pipelines' },
        { icon: 'fab fa-docker', name: 'Docker', desc: 'Containerization' },
        { icon: 'fas fa-cloud', name: 'Azure', desc: 'Microsoft cloud services' }
      ],
      'devops engineer': [
        { icon: 'fab fa-docker', name: 'Docker', desc: 'Container orchestration' },
        { icon: 'fas fa-code-branch', name: 'CI/CD', desc: 'Automated pipelines' },
        { icon: 'fab fa-aws', name: 'AWS', desc: 'Cloud infrastructure' },
        { icon: 'fab fa-linux', name: 'Linux', desc: 'System administration' }
      ],
      'ai engineer': [
        { icon: 'fas fa-brain', name: 'Machine Learning', desc: 'AI model development' },
        { icon: 'fab fa-python', name: 'Python', desc: 'TensorFlow, PyTorch' },
        { icon: 'fas fa-database', name: 'Data Processing', desc: 'Large dataset handling' },
        { icon: 'fas fa-robot', name: 'Deep Learning', desc: 'Neural networks' }
      ]
    };
  }

  renderProjects(projects) {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';

    if (!projects || projects.length === 0) {
      projectsContainer.innerHTML = '<p class="no-projects">No projects to display.</p>';
      return;
    }

    projects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.setAttribute('data-aos', 'fade-up');
      projectCard.setAttribute('data-aos-delay', index * 150);

      const tagsHtml = project.technologies?.map(tech => 
        \`<span class="project-tag">\${tech}</span>\`
      ).join('') || '';

      const linksHtml = \`
        <div class="project-links">
          \${project.liveUrl ? \`<a href="\${project.liveUrl}" target="_blank" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>\` : ''}
          \${project.githubUrl ? \`<a href="\${project.githubUrl}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> Code
          </a>\` : ''}
        </div>
      \`;

      projectCard.innerHTML = \`
        <img src="\${project.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop'}" 
             alt="\${project.title}" class="project-image">
        <div class="project-content">
          <h3 class="project-title">\${project.title}</h3>
          <p class="project-description">\${project.description}</p>
          <div class="project-tags">\${tagsHtml}</div>
          \${linksHtml}
        </div>
      \`;

      projectsContainer.appendChild(projectCard);
    });
  }

  updateStats(personal, projects) {
    // Project count
    document.getElementById('projectCount').textContent = projects?.length || 0;
    
    // Experience years
    document.getElementById('experienceYears').textContent = personal.experience || 0;
  }

  handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('contactName') || document.getElementById('contactName').value,
      email: formData.get('contactEmail') || document.getElementById('contactEmail').value,
      subject: formData.get('contactSubject') || document.getElementById('contactSubject').value,
      message: formData.get('contactMessage') || document.getElementById('contactMessage').value
    };
    
    // Create mailto link
    const mailtoLink = \`mailto:\${this.portfolioData?.personal?.email || 'contact@example.com'}?subject=\${encodeURIComponent(data.subject)}&body=\${encodeURIComponent(\`Name: \${data.name}\\nEmail: \${data.email}\\n\\nMessage: \${data.message}\`)}\`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    e.target.reset();
    
    // Show success message
    alert('Email client opened! Please send the message from your email application.');
  }

  showError(message) {
    console.error(message);
  }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioPreview();
});`;
  }

  renderPortfolio() {
    if (!this.portfolioData) return;

    const { personal, projects } = this.portfolioData;

    // Update document title
    document.title = `${personal.name} - Portfolio`;

    // Update personal information
    this.updatePersonalInfo(personal);
    
    // Render skills based on profession
    this.renderSkills(personal.role);
    
    // Render projects
    this.renderProjects(projects);
    
    // Update stats
    this.updateStats(personal, projects);
  }

  updatePersonalInfo(personal) {
    // Profile image
    const profileImage = document.getElementById('profileImage');
    profileImage.src = personal.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face';
    profileImage.alt = `${personal.name} - Profile Picture`;

    // Name
    document.getElementById('userName').textContent = personal.name;
    document.getElementById('footerName').textContent = personal.name;
    document.getElementById('copyrightName').textContent = personal.name;

    // Hero description
    const heroDesc = document.getElementById('heroDescription');
    heroDesc.textContent = `A passionate ${personal.role} with ${personal.experience} years of experience crafting innovative digital solutions that solve real-world problems.`;

    // About description
    const aboutDesc = document.getElementById('aboutDescription');
    aboutDesc.textContent = this.getAboutDescription(personal.role, personal.experience);

    // Contact information
    document.getElementById('userEmail').textContent = personal.email;
    document.getElementById('userPhone').textContent = personal.phone;
  }

  getAboutDescription(role, experience) {
    const descriptions = {
      'software engineer': `Experienced Software Engineer with ${experience}+ years of crafting high-performance software solutions that solve real-world problems and scale businesses.`,
      'web developer': `Creative Web Developer with ${experience}+ years of building sleek, responsive websites that combine functionality with modern UI/UX principles.`,
      'web designer': `Web Designer with ${experience}+ years of crafting visually appealing, user-friendly designs that blend creativity with performance.`,
      'frontend developer': `Frontend Developer with ${experience}+ years of experience crafting stunning, user-focused interfaces with the latest web technologies.`,
      'backend developer': `Backend Developer with ${experience}+ years of experience building secure, scalable systems and robust APIs for modern applications.`,
      'full stack developer': `Full Stack Developer with ${experience}+ years of hands-on experience delivering complete web applications using both frontend and backend technologies.`,
      'ui/ux designer': `UI/UX Designer with ${experience}+ years of creating visually striking and user-centric designs that enhance usability and aesthetics.`,
      'mobile app developer': `Mobile App Developer with ${experience}+ years of experience building seamless, high-performance mobile applications for Android and iOS.`,
      'data scientist': `Data Scientist with ${experience}+ years of transforming data into actionable insights using ML, statistics, and data storytelling.`,
      'ethical hacker': `Ethical Hacker with ${experience}+ years of experience identifying security flaws and strengthening systems through professional penetration testing.`,
      'cloud engineer': `Cloud Engineer with ${experience}+ years of deploying and managing secure, scalable cloud infrastructures on AWS, Azure, and beyond.`,
      'devops engineer': `DevOps Engineer with ${experience}+ years of experience streamlining development through CI/CD, automation, and infrastructure-as-code.`,
      'ai engineer': `AI Engineer with ${experience}+ years of crafting intelligent systems using NLP, deep learning, and real-world AI applications.`
    };

    return descriptions[role] || `Passionate ${role} with ${experience}+ years of experience delivering impactful solutions driven by innovation, precision, and growth mindset.`;
  }

  renderSkills(profession) {
    const skillsContainer = document.getElementById('skillsContainer');
    const skillsMap = this.getSkillsMap();
    const skills = skillsMap[profession] || skillsMap['web developer'];

    skillsContainer.innerHTML = '';

    skills.forEach((skill, index) => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card';
      skillCard.setAttribute('data-aos', 'fade-up');
      skillCard.setAttribute('data-aos-delay', index * 100);

      skillCard.innerHTML = `
        <div class="skill-icon">
          <i class="${skill.icon}"></i>
        </div>
        <h3 class="skill-name">${skill.name}</h3>
        <p>${skill.desc}</p>
        <div class="skill-progress">
          <div class="progress-bar" style="width: ${90 - index * 5}%"></div>
        </div>
      `;

      skillsContainer.appendChild(skillCard);
    });
  }

  getSkillsMap() {
    return {
      'software engineer': [
        { icon: 'fas fa-code', name: 'Programming', desc: 'Java, Python, C++, JavaScript' },
        { icon: 'fas fa-sitemap', name: 'System Design', desc: 'Scalable architecture patterns' },
        { icon: 'fas fa-database', name: 'Databases', desc: 'SQL & NoSQL databases' },
        { icon: 'fas fa-project-diagram', name: 'Algorithms', desc: 'Data structures & algorithms' }
      ],
      'web developer': [
        { icon: 'fab fa-html5', name: 'HTML5', desc: 'Semantic markup' },
        { icon: 'fab fa-css3-alt', name: 'CSS3', desc: 'Responsive design' },
        { icon: 'fab fa-js', name: 'JavaScript', desc: 'Interactive logic' },
        { icon: 'fab fa-node-js', name: 'Node.js', desc: 'Backend development' }
      ],
      'web designer': [
        { icon: 'fas fa-palette', name: 'UI Design', desc: 'Clean, modern interfaces' },
        { icon: 'fas fa-layer-group', name: 'Figma/XD', desc: 'High-fidelity prototypes' },
        { icon: 'fab fa-css3-alt', name: 'CSS3', desc: 'Animations & layouts' },
        { icon: 'fas fa-adjust', name: 'Color Theory', desc: 'Design harmony & contrast' }
      ],
      'frontend developer': [
        { icon: 'fab fa-react', name: 'React', desc: 'Modern UI components' },
        { icon: 'fab fa-js', name: 'JavaScript', desc: 'Interactive experiences' },
        { icon: 'fab fa-css3-alt', name: 'CSS3', desc: 'Animations & layouts' },
        { icon: 'fab fa-sass', name: 'Sass', desc: 'Advanced styling' }
      ],
      'backend developer': [
        { icon: 'fab fa-node-js', name: 'Node.js', desc: 'Server-side scripting' },
        { icon: 'fas fa-database', name: 'MongoDB', desc: 'Database management' },
        { icon: 'fas fa-lock', name: 'Auth Systems', desc: 'Secure authentication' },
        { icon: 'fas fa-server', name: 'REST APIs', desc: 'API development' }
      ],
      'full stack developer': [
        { icon: 'fab fa-react', name: 'React', desc: 'Frontend frameworks' },
        { icon: 'fab fa-node-js', name: 'Node.js', desc: 'Backend services' },
        { icon: 'fas fa-database', name: 'MongoDB', desc: 'Database management' },
        { icon: 'fas fa-server', name: 'REST APIs', desc: 'API development' }
      ],
      'ui/ux designer': [
        { icon: 'fas fa-pen-nib', name: 'UI Design', desc: 'Clean interfaces' },
        { icon: 'fas fa-user-friends', name: 'UX Research', desc: 'User testing & empathy' },
        { icon: 'fab fa-figma', name: 'Figma', desc: 'High-fidelity prototyping' },
        { icon: 'fas fa-mobile', name: 'Responsive UX', desc: 'Mobile-first design' }
      ],
      'mobile app developer': [
        { icon: 'fab fa-react', name: 'React Native', desc: 'Cross-platform apps' },
        { icon: 'fab fa-swift', name: 'Swift', desc: 'iOS development' },
        { icon: 'fab fa-android', name: 'Kotlin', desc: 'Android development' },
        { icon: 'fas fa-mobile-alt', name: 'UI/UX', desc: 'Mobile interfaces' }
      ],
      'data scientist': [
        { icon: 'fas fa-database', name: 'Data Analysis', desc: 'Extract insights from data' },
        { icon: 'fab fa-python', name: 'Python', desc: 'Pandas, NumPy, matplotlib' },
        { icon: 'fas fa-chart-pie', name: 'Data Viz', desc: 'Interactive dashboards' },
        { icon: 'fas fa-brain', name: 'ML Models', desc: 'Training predictive models' }
      ],
      'ethical hacker': [
        { icon: 'fas fa-user-secret', name: 'Pen Testing', desc: 'Security vulnerability testing' },
        { icon: 'fas fa-lock', name: 'Cybersecurity', desc: 'Network & data protection' },
        { icon: 'fas fa-bug', name: 'Exploit Dev', desc: 'Finding security flaws' },
        { icon: 'fab fa-linux', name: 'Linux', desc: 'Kali tools & scripting' }
      ],
      'cloud engineer': [
        { icon: 'fab fa-aws', name: 'AWS', desc: 'Cloud infrastructure' },
        { icon: 'fas fa-server', name: 'DevOps', desc: 'CI/CD pipelines' },
        { icon: 'fab fa-docker', name: 'Docker', desc: 'Containerization' },
        { icon: 'fas fa-cloud', name: 'Azure', desc: 'Microsoft cloud services' }
      ],
      'devops engineer': [
        { icon: 'fab fa-docker', name: 'Docker', desc: 'Container orchestration' },
        { icon: 'fas fa-code-branch', name: 'CI/CD', desc: 'Automated pipelines' },
        { icon: 'fab fa-aws', name: 'AWS', desc: 'Cloud infrastructure' },
        { icon: 'fab fa-linux', name: 'Linux', desc: 'System administration' }
      ],
      'ai engineer': [
        { icon: 'fas fa-brain', name: 'Machine Learning', desc: 'AI model development' },
        { icon: 'fab fa-python', name: 'Python', desc: 'TensorFlow, PyTorch' },
        { icon: 'fas fa-database', name: 'Data Processing', desc: 'Large dataset handling' },
        { icon: 'fas fa-robot', name: 'Deep Learning', desc: 'Neural networks' }
      ]
    };
  }

  renderProjects(projects) {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';

    if (!projects || projects.length === 0) {
      projectsContainer.innerHTML = '<p class="no-projects">No projects to display.</p>';
      return;
    }

    projects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.setAttribute('data-aos', 'fade-up');
      projectCard.setAttribute('data-aos-delay', index * 150);

      const tagsHtml = project.technologies?.map(tech => 
        `<span class="project-tag">${tech}</span>`
      ).join('') || '';

      const linksHtml = `
        <div class="project-links">
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>` : ''}
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> Code
          </a>` : ''}
        </div>
      `;

      projectCard.innerHTML = `
        <img src="${project.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop'}" 
             alt="${project.title}" class="project-image">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">${tagsHtml}</div>
          ${linksHtml}
        </div>
      `;

      projectsContainer.appendChild(projectCard);
    });
  }

  updateStats(personal, projects) {
    // Project count
    document.getElementById('projectCount').textContent = projects?.length || 0;
    
    // Experience years
    document.getElementById('experienceYears').textContent = personal.experience || 0;
  }

  handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('contactName') || document.getElementById('contactName').value,
      email: formData.get('contactEmail') || document.getElementById('contactEmail').value,
      subject: formData.get('contactSubject') || document.getElementById('contactSubject').value,
      message: formData.get('contactMessage') || document.getElementById('contactMessage').value
    };
    
    // Create mailto link
    const mailtoLink = `mailto:${this.portfolioData?.personal?.email || 'contact@example.com'}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage: ${data.message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    e.target.reset();
    
    // Show success message
    alert('Email client opened! Please send the message from your email application.');
  }

  showError(message) {
    console.error(message);
  }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioPreview();
});