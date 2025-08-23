// Portfolio Preview JavaScript
class PortfolioPreview {
  constructor() {
    this.portfolioData = null;
    this.currentTheme = localStorage.getItem('theme') || 'light';
    
    this.init();
  }

  init() {
    this.loadPortfolioData();
    this.setupEventListeners();
    this.setupTheme();
    this.setupAnimations();
    this.renderPortfolio();
  }

  loadPortfolioData() {
    try {
      const data = localStorage.getItem('portfolioData');
      this.portfolioData = data ? JSON.parse(data) : null;
      
      if (!this.portfolioData) {
        this.showError('No portfolio data found. Please build your portfolio first.');
        return;
      }
    } catch (error) {
      console.error('Error loading portfolio data:', error);
      this.showError('Error loading portfolio data.');
    }
  }

  setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Mobile navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }

    // Download button
    const downloadCodeBtn = document.getElementById('downloadCodeBtn');
    
    if (downloadCodeBtn) {
      downloadCodeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.downloadHTMLFile();
      });
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  setupTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.updateThemeIcon();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
      themeIcon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }

  setupAnimations() {
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        offset: 100,
        once: true
      });
    }
  }

  renderPortfolio() {
    if (!this.portfolioData) return;

    this.renderPersonalInfo();
    this.renderProjects();
    this.renderSkills();
    this.renderContactInfo();
  }

  renderPersonalInfo() {
    const { personal } = this.portfolioData;
    
    // Profile image
    const profileImage = document.getElementById('profileImage');
    if (profileImage && personal.profileImage) {
      profileImage.src = personal.profileImage;
      profileImage.alt = `${personal.name} - Profile Picture`;
    }

    // Name
    const userName = document.getElementById('userName');
    const footerName = document.getElementById('footerName');
    const copyrightName = document.getElementById('copyrightName');
    
    if (userName) userName.textContent = personal.name;
    if (footerName) footerName.textContent = personal.name;
    if (copyrightName) copyrightName.textContent = personal.name;

    // Hero description
    const heroDescription = document.getElementById('heroDescription');
    if (heroDescription) {
      heroDescription.textContent = `I'm a passionate ${personal.role} with ${personal.experience}+ years of experience creating amazing digital experiences.`;
    }

    // About description
    const aboutDescription = document.getElementById('aboutDescription');
    if (aboutDescription) {
      aboutDescription.textContent = `I'm a dedicated ${personal.role} with ${personal.experience} years of experience in creating innovative solutions. I love working with cutting-edge technologies and delivering high-quality projects that make a real impact.`;
    }

    // Experience years
    const experienceYears = document.getElementById('experienceYears');
    if (experienceYears) {
      experienceYears.textContent = personal.experience;
    }

    // Project count
    const projectCount = document.getElementById('projectCount');
    if (projectCount) {
      projectCount.textContent = this.portfolioData.projects.length;
    }

    // Update page title
    document.title = `${personal.name} - ${personal.role}`;
  }

  renderContactInfo() {
    const { personal } = this.portfolioData;
    
    const userEmail = document.getElementById('userEmail');
    const userPhone = document.getElementById('userPhone');
    
    if (userEmail) userEmail.textContent = personal.email;
    if (userPhone) userPhone.textContent = personal.phone;
  }

  renderSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    if (!skillsContainer) return;

    // Use skills from personal data instead of extracting from projects
    const skillsString = this.portfolioData.personal.skills || '';
    const uniqueSkills = skillsString
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill);

    // Skill icons mapping
    const skillIcons = {
      'react': 'fab fa-react',
      'vue': 'fab fa-vuejs',
      'angular': 'fab fa-angular',
      'javascript': 'fab fa-js-square',
      'typescript': 'fab fa-js-square',
      'node.js': 'fab fa-node-js',
      'nodejs': 'fab fa-node-js',
      'python': 'fab fa-python',
      'java': 'fab fa-java',
      'php': 'fab fa-php',
      'html': 'fab fa-html5',
      'html5': 'fab fa-html5',
      'css': 'fab fa-css3-alt',
      'css3': 'fab fa-css3-alt',
      'sass': 'fab fa-sass',
      'bootstrap': 'fab fa-bootstrap',
      'mysql': 'fas fa-database',
      'mongodb': 'fas fa-database',
      'postgresql': 'fas fa-database',
      'git': 'fab fa-git-alt',
      'github': 'fab fa-github',
      'docker': 'fab fa-docker',
      'aws': 'fab fa-aws',
      'firebase': 'fas fa-fire',
      'figma': 'fab fa-figma',
      'photoshop': 'fas fa-paint-brush',
      'illustrator': 'fas fa-palette'
    };

    skillsContainer.innerHTML = uniqueSkills.map(skill => {
      const skillLower = skill.toLowerCase();
      const icon = skillIcons[skillLower] || 'fas fa-code';
      
      return `
        <div class="skill-card" data-aos="fade-up">
          <div class="skill-icon">
            <i class="${icon}"></i>
          </div>
          <h3 class="skill-name">${skill}</h3>
          <p>Experienced in ${skill} development</p>
        </div>
      `;
    }).join('');
  }

  renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = this.portfolioData.projects.map(project => {
      // Process tech tags as custom badges
      const techBadges = project.tags
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech)
        .map(tech => `<span class="tech-badge">${tech}</span>`)
        .join('');

      return `
        <div class="project-card" data-aos="fade-up">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${techBadges}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value
    };

    // Show success message
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = '#28a745';
    
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      document.getElementById('contactForm').reset();
    }, 3000);
  }

  downloadHTMLFile() {
    if (!this.portfolioData) {
      alert('No portfolio data available for download.');
      return;
    }

    const htmlContent = this.generateCompleteHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.portfolioData.personal.name.replace(/\s+/g, '_')}_portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  generateCompleteHTML() {
    const { personal, projects } = this.portfolioData;
    
    // Generate projects HTML
    const projectsHTML = projects.map(project => {
      const techBadges = project.tags
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech)
        .map(tech => `<span class="tech-badge">${tech}</span>`)
        .join('');

      return `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${techBadges}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Generate skills HTML
    const skillsString = personal.skills || '';
    const uniqueSkills = skillsString
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill);
    
    const skillIcons = {
      'react': 'fab fa-react',
      'vue': 'fab fa-vuejs',
      'angular': 'fab fa-angular',
      'javascript': 'fab fa-js-square',
      'typescript': 'fab fa-js-square',
      'node.js': 'fab fa-node-js',
      'nodejs': 'fab fa-node-js',
      'python': 'fab fa-python',
      'java': 'fab fa-java',
      'php': 'fab fa-php',
      'html': 'fab fa-html5',
      'html5': 'fab fa-html5',
      'css': 'fab fa-css3-alt',
      'css3': 'fab fa-css3-alt',
      'sass': 'fab fa-sass',
      'bootstrap': 'fab fa-bootstrap',
      'mysql': 'fas fa-database',
      'mongodb': 'fas fa-database',
      'postgresql': 'fas fa-database',
      'git': 'fab fa-git-alt',
      'github': 'fab fa-github',
      'docker': 'fab fa-docker',
      'aws': 'fab fa-aws',
      'firebase': 'fas fa-fire',
      'figma': 'fab fa-figma',
      'photoshop': 'fas fa-paint-brush',
      'illustrator': 'fas fa-palette'
    };

    const skillsHTML = uniqueSkills.map(skill => {
      const skillLower = skill.toLowerCase();
      const icon = skillIcons[skillLower] || 'fas fa-code';
      
      return `
        <div class="skill-card">
          <div class="skill-icon">
            <i class="${icon}"></i>
          </div>
          <h3 class="skill-name">${skill}</h3>
          <p>Experienced in ${skill} development</p>
        </div>
      `;
    }).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - ${personal.role}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
${this.getEmbeddedCSS()}
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav id="navbar">
        <div class="nav-container">
            <a href="#" class="logo">Portfolio.</a>
            <div class="nav-links" id="navLinks">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="nav-actions">
                <button id="themeToggle" class="theme-toggle">
                    <i class="fas fa-moon"></i>
                </button>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <div class="hero-image">
                <img src="${personal.profileImage}" alt="Profile" class="profile-img">
            </div>
            <h2 class="hero-subtitle">Hi, I'm</h2>
            <h1 class="hero-title">
                <span class="highlight">${personal.name}</span>
            </h1>
            <p class="hero-description">I'm a passionate ${personal.role} with ${personal.experience}+ years of experience creating amazing digital experiences.</p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">
                    <i class="fas fa-eye"></i> View My Work
                </a>
                <a href="#contact" class="btn btn-secondary">
                    <i class="fas fa-envelope"></i> Contact Me
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">About Me</h2>
                <p class="section-subtitle">Get to know me better</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Who Am I?</h3>
                    <p>I'm a dedicated ${personal.role} with ${personal.experience} years of experience in creating innovative solutions. I love working with cutting-edge technologies and delivering high-quality projects that make a real impact.</p>
                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-number">${projects.length}</div>
                            <div class="stat-label">Projects</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${personal.experience}+</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
                <div class="about-visual">
                    <div class="about-card">
                        <i class="fas fa-code"></i>
                        <h4>Clean Code</h4>
                        <p>Writing maintainable, scalable solutions</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">My Skills</h2>
                <p class="section-subtitle">Technologies I work with</p>
            </div>
            <div class="skills-container">
                ${skillsHTML}
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">My Projects</h2>
                <p class="section-subtitle">A selection of my recent work</p>
            </div>
            <div class="projects-container">
                ${projectsHTML}
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-subtitle">Let's discuss your next project</p>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Let's Connect</h3>
                    <p>I'm currently available for freelance work and would love to discuss your project.</p>
                    <div class="contact-items">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Email</h4>
                                <p>${personal.email}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Phone</h4>
                                <p>${personal.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="contactName">Your Name</label>
                            <input type="text" id="contactName" required placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <label for="contactEmail">Your Email</label>
                            <input type="email" id="contactEmail" required placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="contactSubject">Subject</label>
                            <input type="text" id="contactSubject" required placeholder="Subject of your message">
                        </div>
                        <div class="form-group">
                            <label for="contactMessage">Your Message</label>
                            <textarea id="contactMessage" required placeholder="Write your message here"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <a href="#" class="footer-logo">
                    <span>${personal.name}</span>
                </a>
                <div class="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="copyright">
                    <p>&copy; 2025 ${personal.name}. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to top button -->
    <button id="backToTop" class="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </button>

    <script>
${this.getEmbeddedJS()}
    </script>
</body>
</html>`;
  }

  getEmbeddedCSS() {
    return `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
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

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: all 0.3s ease;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

#navbar {
  position: fixed; top: 0; left: 0; right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000; transition: all 0.3s ease;
}

[data-theme="dark"] #navbar { background: rgba(26, 32, 44, 0.95); }

.nav-container {
  max-width: 1200px; margin: 0 auto; padding: 0 20px;
  display: flex; justify-content: space-between;
  align-items: center; height: 70px;
}

.logo {
  font-size: 1.5rem; font-weight: 700;
  color: var(--accent-primary); text-decoration: none;
}

.nav-links { display: flex; gap: 2rem; transition: all 0.3s ease; }
.nav-links a {
  color: var(--text-secondary); text-decoration: none;
  font-weight: 500; transition: color 0.3s ease;
}
.nav-links a:hover { color: var(--accent-primary); }

.nav-actions { display: flex; align-items: center; gap: 1rem; }

.theme-toggle {
  background: none; border: 2px solid var(--border-color);
  border-radius: 50%; width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary); cursor: pointer; transition: all 0.3s ease;
}
.theme-toggle:hover { border-color: var(--accent-primary); color: var(--accent-primary); }

.hamburger { display: none; flex-direction: column; cursor: pointer; gap: 4px; padding: 8px; }
.hamburger span {
  width: 25px; height: 3px; background: var(--text-primary);
  transition: all 0.3s ease; border-radius: 2px;
}

.hero {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: var(--accent-gradient); color: white; text-align: center;
  position: relative; overflow: hidden;
}

.hero-content { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 0 20px; }
.hero-image { margin-bottom: 1rem; }
.profile-img {
  width: 250px; height: 250px; border-radius: 50%; object-fit: cover;
  border: 4px solid white; box-shadow: var(--shadow-heavy);
  animation: floatAnimation 3s ease-in-out infinite;
}

@keyframes floatAnimation {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hero-subtitle { font-size: 1.2rem; margin-bottom: 0.5rem; opacity: 0.9; }
.hero-title {
  font-size: 3.5rem; font-weight: 800; margin-bottom: 1rem;
  animation: slideInUp 1s ease-out;
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.highlight {
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;
  animation: slideInUp 1s ease-out 0.2s both;
}

.hero-buttons {
  display: flex; gap: 1rem; justify-content: center;
  flex-wrap: wrap; animation: slideInUp 1s ease-out 0.4s both;
}

.btn {
  padding: 12px 24px; border-radius: 50px; text-decoration: none;
  font-weight: 600; transition: all 0.3s ease; display: inline-flex;
  align-items: center; gap: 0.5rem; border: none; cursor: pointer; font-size: 1rem;
}

.btn-primary { background: white; color: var(--accent-primary); }
.btn-primary:hover {
  transform: translateY(-2px); box-shadow: var(--shadow-medium);
  color: var(--accent-primary); text-decoration: none;
}

.btn-secondary { background: transparent; color: white; border: 2px solid white; }
.btn-secondary:hover {
  background: white; color: var(--accent-primary);
  transform: translateY(-2px); text-decoration: none;
}

.section-header { text-align: center; margin-bottom: 4rem; }
.section-title {
  font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-primary);
}
.section-subtitle { font-size: 1.1rem; color: var(--text-muted); }

.about { padding: 6rem 0; background: var(--bg-secondary); }
.about-content {
  display: grid; grid-template-columns: 2fr 1fr;
  gap: 4rem; align-items: center;
}

.about-text h3 {
  font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--text-primary);
}
.about-text p {
  font-size: 1.1rem; color: var(--text-secondary);
  margin-bottom: 2rem; line-height: 1.8;
}

.stats { display: flex; gap: 2rem; flex-wrap: wrap; }
.stat-item { text-align: center; }
.stat-number {
  font-size: 2rem; font-weight: 700; color: var(--accent-primary);
  margin-bottom: 0.5rem;
}
.stat-label { color: var(--text-muted); font-size: 0.9rem; }

.about-visual { display: flex; justify-content: center; }
.about-card {
  background: var(--bg-primary); padding: 2rem; border-radius: 20px;
  text-align: center; box-shadow: var(--shadow-medium);
  transition: transform 0.3s ease;
}
.about-card:hover { transform: translateY(-10px); }
.about-card i {
  font-size: 3rem; color: var(--accent-primary); margin-bottom: 1rem;
}
.about-card h4 {
  font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-primary);
}
.about-card p { color: var(--text-secondary); font-size: 0.9rem; }

.skills-section { padding: 6rem 0; background: var(--bg-primary); }
.skills-container {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;
}

.skill-card {
  background: var(--bg-secondary); padding: 2rem; border-radius: 15px;
  text-align: center; transition: all 0.3s ease;
  border: 1px solid var(--border-color); animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.skill-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-medium); }

.skill-icon {
  width: 60px; height: 60px; background: var(--accent-gradient);
  border-radius: 50%; display: flex; align-items: center;
  justify-content: center; margin: 0 auto 1rem;
}
.skill-icon i { font-size: 1.5rem; color: white; }

.skill-name {
  font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);
}
.skill-card p { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem; }

.projects { padding: 6rem 0; background: var(--bg-secondary); }
.projects-container {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;
}

.project-card {
  background: var(--bg-primary); border-radius: 15px; overflow: hidden;
  box-shadow: var(--shadow-medium); transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out;
}
.project-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-heavy); }

.project-image { width: 100%; height: 200px; object-fit: cover; }
.project-content { padding: 2rem; }
.project-title {
  font-size: 1.4rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-primary);
}
.project-description {
  color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;
}
.project-tech { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tech-badge {
  background: var(--accent-primary); color: white;
  padding: 0.25rem 0.75rem; border-radius: 20px;
  font-size: 0.875rem; font-weight: 500;
}

.contact-section { padding: 6rem 0; background: var(--bg-primary); }
.contact-container {
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;
}

.contact-info h3 {
  font-size: 1.8rem; margin-bottom: 1rem; color: var(--text-primary);
}
.contact-info p {
  color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6;
}

.contact-items { display: flex; flex-direction: column; gap: 1.5rem; }
.contact-item { display: flex; align-items: center; gap: 1rem; }
.contact-icon {
  width: 50px; height: 50px; background: var(--accent-gradient);
  border-radius: 50%; display: flex; align-items: center;
  justify-content: center; color: white;
}
.contact-details h4 {
  font-size: 1.1rem; margin-bottom: 0.25rem; color: var(--text-primary);
}
.contact-details p { color: var(--text-secondary); margin: 0; }

.contact-form {
  background: var(--bg-secondary); padding: 2rem; border-radius: 15px;
  border: 1px solid var(--border-color);
}

.form-group { margin-bottom: 1.5rem; }
.form-group label {
  display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);
}
.form-group input, .form-group textarea {
  width: 100%; padding: 12px 16px; border: 2px solid var(--border-color);
  border-radius: 8px; background: var(--bg-primary); color: var(--text-primary);
  font-size: 1rem; transition: all 0.3s ease;
}
.form-group input:focus, .form-group textarea:focus {
  outline: none; border-color: var(--accent-primary);
  box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.15);
}
.form-group textarea { resize: vertical; min-height: 120px; font-family: inherit; }

.submit-btn {
  background: var(--accent-primary); color: white; border: none;
  padding: 12px 24px; border-radius: 8px; font-weight: 600;
  cursor: pointer; transition: all 0.3s ease; display: flex;
  align-items: center; gap: 0.5rem; width: 100%; justify-content: center;
}
.submit-btn:hover {
  background: var(--accent-secondary); transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

footer { background: var(--bg-tertiary); padding: 3rem 0 1rem; }
.footer-content {
  display: grid; grid-template-columns: 1fr auto 1fr;
  gap: 2rem; align-items: center; text-align: center;
}
.footer-logo {
  font-size: 1.5rem; font-weight: 700; color: var(--accent-primary);
  text-decoration: none; justify-self: start;
}
.footer-links { display: flex; gap: 2rem; justify-self: center; }
.footer-links a {
  color: var(--text-secondary); text-decoration: none; transition: color 0.3s ease;
}
.footer-links a:hover { color: var(--accent-primary); }
.copyright { justify-self: end; }
.copyright p { color: var(--text-muted); margin: 0; }

.back-to-top {
  position: fixed; bottom: 30px; right: 30px; background: var(--accent-primary);
  color: white; border: none; width: 50px; height: 50px; border-radius: 50%;
  cursor: pointer; transition: all 0.3s ease; opacity: 0; visibility: hidden;
  transform: translateY(20px); z-index: 1000;
}
.back-to-top.show { opacity: 1; visibility: visible; transform: translateY(0); }
.back-to-top:hover { background: var(--accent-secondary); transform: translateY(-2px); }

@media (max-width: 1024px) {
  .about-content, .contact-container { grid-template-columns: 1fr; gap: 2rem; }
  .footer-content {
    grid-template-columns: 1fr; gap: 1rem; text-align: center;
  }
  .footer-logo, .copyright { justify-self: center; }
  .footer-links { justify-self: center; }
}

@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed; top: 70px; left: 0; right: 0; background: var(--bg-primary);
    border-bottom: 1px solid var(--border-color); flex-direction: column;
    padding: 2rem; gap: 1rem; transform: translateY(-100%);
    opacity: 0; visibility: hidden; transition: all 0.3s ease;
  }
  .nav-links.active { transform: translateY(0); opacity: 1; visibility: visible; }
  .nav-links a { padding: 0.75rem 0; border-bottom: 1px solid var(--border-color); font-size: 1.1rem; }
  .nav-links a:last-child { border-bottom: none; }
  
  .hero-title { font-size: 2.5rem; }
  .profile-img { width: 200px; height: 200px; }
  .section-title { font-size: 2rem; }
  .projects-container { grid-template-columns: 1fr; }
  .skills-container { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
  .stats { justify-content: center; }
  .hero-buttons { flex-direction: column; align-items: center; }
  .btn { width: 200px; justify-content: center; }
  .footer-links { flex-wrap: wrap; justify-content: center; }
}

@media (max-width: 480px) {
  .container { padding: 0 15px; }
  .hero-title { font-size: 2rem; }
  .profile-img { width: 150px; height: 150px; }
  .nav-container { padding: 0 15px; }
  .project-content { padding: 1.5rem; }
  .contact-form { padding: 1.5rem; }
}
    `;
  }

  getEmbeddedJS() {
    return `
class PortfolioPreview {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupTheme();
  }

  setupEventListeners() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  setupTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.updateThemeIcon();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
      themeIcon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }

  handleContactForm(e) {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = '#28a745';
    
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      document.getElementById('contactForm').reset();
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioPreview();
});
    `;
  }

  showError(message) {
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #dc3545;
      color: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    errorDiv.innerHTML = `
      <h3>Error</h3>
      <p>${message}</p>
      <button onclick="window.location.href='buildnow.html'" style="
        background: white;
        color: #dc3545;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 1rem;
      ">Go to Portfolio Builder</button>
    `;
    
    document.body.appendChild(errorDiv);
  }
}

// Initialize the portfolio preview when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioPreview = new PortfolioPreview();
});
