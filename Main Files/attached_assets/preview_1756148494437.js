// Universal Portfolio Preview JavaScript - Works with any template
class PortfolioPreview {
  constructor() {
    this.portfolioData = null;
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.templateNumber = this.detectTemplate();
    
    this.init();
  }

  detectTemplate() {
    // Auto-detect template number from current URL
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'preview.html' || currentPage === '') {
      return 1;
    }
    
    // Extract number from preview2.html, preview3.html, etc.
    const match = currentPage.match(/preview(\d+)\.html/);
    return match ? parseInt(match[1]) : 1;
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

      // Ensure backward compatibility - if no selectedTemplate, default to 1
      if (!this.portfolioData.selectedTemplate) {
        this.portfolioData.selectedTemplate = 1;
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

    // Download button will be set up after preview controls are added
    setTimeout(() => this.setupDownloadListeners(), 100);

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

    // Edit portfolio button
    const editBtn = document.querySelector('.edit-portfolio-btn, .btn-edit');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        window.location.href = 'buildnow.html';
      });
    }
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
    this.addPreviewControls();
  }

  renderPersonalInfo() {
    const { personal } = this.portfolioData;
    
    // Profile image
    const profileImages = document.querySelectorAll('#profileImage, .profile-img, .hero-image img, img[alt*="Profile"]');
    profileImages.forEach(img => {
      if (personal.profileImage) {
        img.src = personal.profileImage;
        img.alt = `${personal.name} - Profile Picture`;
      }
    });

    // Name elements
    const nameSelectors = [
      '#userName', 
      '.hero-name', 
      '.profile-name',
      '#footerName', 
      '#copyrightName',
      '.footer-logo span',
      '.hero-title',
      '.name'
    ];
    
    nameSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element) element.textContent = personal.name;
      });
    });

    // Role/Profession
    const roleSelectors = [
      '#userRole', 
      '.hero-role', 
      '.profession',
      '.hero-subtitle',
      '.role'
    ];
    
    roleSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element) element.textContent = personal.role;
      });
    });

    // Hero description
    const heroDescriptions = document.querySelectorAll('#heroDescription, .hero-description, .hero-text p, .hero-subtitle');
    heroDescriptions.forEach(element => {
      if (element && element.id === 'heroDescription') {
        element.textContent = `I'm a passionate ${personal.role} with ${personal.experience}+ years of experience creating amazing digital experiences.`;
      }
    });

    // About description  
    const aboutDescriptions = document.querySelectorAll('#aboutDescription, .about-text p, .about-description');
    aboutDescriptions.forEach(element => {
      if (element && (element.id === 'aboutDescription' || element.classList.contains('about-description'))) {
        element.textContent = `I'm a dedicated ${personal.role} with ${personal.experience} years of experience in creating innovative solutions. I love working with cutting-edge technologies and delivering high-quality projects that make a real impact.`;
      }
    });

    // Experience years
    const experienceElements = document.querySelectorAll('#experienceYears, .experience-years, .years-experience');
    experienceElements.forEach(element => {
      if (element) element.textContent = personal.experience;
    });

    // Project count
    const projectCountElements = document.querySelectorAll('#projectCount, .project-count');
    projectCountElements.forEach(element => {
      if (element) element.textContent = this.portfolioData.projects.length;
    });

    // Update page title
    document.title = `${personal.name} - ${personal.role}`;
  }

  renderContactInfo() {
    const { personal } = this.portfolioData;
    
    // Email elements
    const emailElements = document.querySelectorAll('#userEmail, .contact-email, .email');
    emailElements.forEach(element => {
      if (element) element.textContent = personal.email;
    });
    
    // Phone elements
    const phoneElements = document.querySelectorAll('#userPhone, .contact-phone, .phone');
    phoneElements.forEach(element => {
      if (element) element.textContent = personal.phone;
    });
  }

  renderSkills() {
    const skillsContainers = document.querySelectorAll('#skillsContainer, .skills-container, .skills-grid');
    if (skillsContainers.length === 0) return;

    // Use skills from personal data
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

    const skillsHTML = uniqueSkills.map(skill => {
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

    skillsContainers.forEach(container => {
      container.innerHTML = skillsHTML;
    });
  }

  renderProjects() {
    const projectsContainers = document.querySelectorAll('#projectsContainer, .projects-container, .projects-grid');
    if (projectsContainers.length === 0) return;

    const projectsHTML = this.portfolioData.projects.map(project => {
      // Process tech tags as custom badges
      const techBadges = project.tags
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech)
        .map(tech => `<span class="tech-badge project-tag">${tech}</span>`)
        .join('');

      return `
        <div class="project-card" data-aos="fade-up">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech project-tags">
              ${techBadges}
            </div>
          </div>
        </div>
      `;
    }).join('');

    projectsContainers.forEach(container => {
      container.innerHTML = projectsHTML;
    });
  }

  addPreviewControls() {
    // Add preview-only controls if they don't exist
    if (!document.querySelector('.preview-controls')) {
      // Create floating preview controls
      const controls = document.createElement('div');
      controls.className = 'preview-controls';
      controls.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.9);
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
      `;
      
      controls.innerHTML = `
        <div class="preview-actions" style="display: flex; gap: 10px;">
          <button class="btn edit-portfolio-btn" onclick="window.location.href='buildnow.html'" style="
            background: #3182ce;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
          ">
            <i class="fas fa-edit"></i> Edit Portfolio
          </button>
          <button class="btn download-btn" id="downloadHTMLBtn" style="
            background: #28a745;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
          ">
            <i class="fas fa-download"></i> Download Portfolio
          </button>
        </div>
      `;
      
      document.body.appendChild(controls);
      
      // Add hover effects and click listeners
      const editBtn = controls.querySelector('.edit-portfolio-btn');
      const downloadBtn = controls.querySelector('.download-btn');
      
      // Download functionality
      downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.downloadHTMLFile();
      });
      
      editBtn.addEventListener('mouseenter', () => {
        editBtn.style.background = '#2c5aa0';
        editBtn.style.transform = 'translateY(-2px)';
      });
      editBtn.addEventListener('mouseleave', () => {
        editBtn.style.background = '#3182ce';
        editBtn.style.transform = 'translateY(0)';
      });
      
      downloadBtn.addEventListener('mouseenter', () => {
        downloadBtn.style.background = '#218838';
        downloadBtn.style.transform = 'translateY(-2px)';
      });
      downloadBtn.addEventListener('mouseleave', () => {
        downloadBtn.style.background = '#28a745';
        downloadBtn.style.transform = 'translateY(0)';
      });
    }
  }

  setupDownloadListeners() {
    // Set up download button listener if it exists but doesn't have listener yet
    const downloadHTMLBtn = document.getElementById('downloadHTMLBtn');
    if (downloadHTMLBtn && !downloadHTMLBtn.hasAttribute('data-listener-added')) {
      downloadHTMLBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.downloadHTMLFile();
      });
      downloadHTMLBtn.setAttribute('data-listener-added', 'true');
    }
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
    const submitBtn = document.querySelector('.submit-btn, button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = '#28a745';
    
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      document.getElementById('contactForm').reset();
    }, 3000);
  }

  showError(message) {
    // Create error overlay
    const errorOverlay = document.createElement('div');
    errorOverlay.className = 'error-overlay';
    errorOverlay.innerHTML = `
      <div class="error-content">
        <h2>Portfolio Not Found</h2>
        <p>${message}</p>
        <button onclick="window.location.href='buildnow.html'" class="btn btn-primary">
          Build Portfolio
        </button>
      </div>
    `;
    
    document.body.appendChild(errorOverlay);
  }

  async downloadHTMLFile() {
    if (!this.portfolioData) {
      alert('No portfolio data available for download.');
      return;
    }

    try {
      // Create complete standalone HTML file
      const completeHTML = await this.generateStandaloneHTML();
      
      const blob = new Blob([completeHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      
      // Simple username.html naming
      const username = this.portfolioData.personal.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
      a.download = `${username}.html`;
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating download:', error);
      alert('Error generating download file.');
    }
  }

  async generateStandaloneHTML() {
    const { personal, projects } = this.portfolioData;
    
    // Get external stylesheets content
    const cssContent = await this.getAllCSS();
    const jsContent = await this.getAllJS();
    
    // Generate projects HTML
    const projectsHTML = projects.map(project => {
      const techBadges = project.tags
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech)
        .map(tech => `<span class="tech-badge project-tag">${tech}</span>`)
        .join('');

      return `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech project-tags">
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
      'react': 'fab fa-react', 'vue': 'fab fa-vuejs', 'angular': 'fab fa-angular',
      'javascript': 'fab fa-js-square', 'typescript': 'fab fa-js-square',
      'node.js': 'fab fa-node-js', 'nodejs': 'fab fa-node-js',
      'python': 'fab fa-python', 'java': 'fab fa-java', 'php': 'fab fa-php',
      'html': 'fab fa-html5', 'html5': 'fab fa-html5',
      'css': 'fab fa-css3-alt', 'css3': 'fab fa-css3-alt',
      'sass': 'fab fa-sass', 'bootstrap': 'fab fa-bootstrap',
      'mysql': 'fas fa-database', 'mongodb': 'fas fa-database', 'postgresql': 'fas fa-database',
      'git': 'fab fa-git-alt', 'github': 'fab fa-github', 'docker': 'fab fa-docker',
      'aws': 'fab fa-aws', 'firebase': 'fas fa-fire', 'figma': 'fab fa-figma',
      'photoshop': 'fas fa-paint-brush', 'illustrator': 'fas fa-palette'
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

    return this.getCompleteHTMLTemplate(cssContent, jsContent, projectsHTML, skillsHTML);
  }

  async getAllCSS() {
    let allCSS = '';
    
    try {
      // Get current page's CSS files (excluding external CDNs)
      const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
      for (const link of cssLinks) {
        // Skip external CDNs but include local CSS files
        if (!link.href.includes('cdnjs.cloudflare.com') && 
            !link.href.includes('unpkg.com') && 
            !link.href.includes('googleapis.com')) {
          try {
            const response = await fetch(link.href);
            if (response.ok) {
              const css = await response.text();
              allCSS += css + '\n';
            }
          } catch (e) {
            console.warn('Could not fetch CSS:', link.href);
            // Fallback: try to get CSS content if it's a local file
            if (link.href.includes(window.location.origin)) {
              try {
                const fallbackResponse = await fetch(link.href.replace(window.location.origin, ''));
                if (fallbackResponse.ok) {
                  const css = await fallbackResponse.text();
                  allCSS += css + '\n';
                }
              } catch (fallbackError) {
                console.warn('Fallback CSS fetch failed:', fallbackError);
              }
            }
          }
        }
      }
      
      // Get inline styles
      const styleElements = document.querySelectorAll('style');
      styleElements.forEach(style => {
        allCSS += style.textContent + '\n';
      });
      
    } catch (error) {
      console.warn('Error fetching CSS:', error);
    }
    
    return allCSS;
  }

  async getAllJS() {
    let allJS = '';
    
    try {
      // Get current page's JS files (excluding external CDNs)
      const scriptTags = document.querySelectorAll('script[src]');
      for (const script of scriptTags) {
        if (!script.src.includes('cdnjs.cloudflare.com') && 
            !script.src.includes('unpkg.com') && 
            script.src.includes(window.location.origin)) {
          try {
            const response = await fetch(script.src);
            const js = await response.text();
            allJS += js + '\n';
          } catch (e) {
            console.warn('Could not fetch JS:', script.src);
          }
        }
      }
    } catch (error) {
      console.warn('Error fetching JS:', error);
    }
    
    return allJS;
  }

  getCompleteHTMLTemplate(cssContent, jsContent, projectsHTML, skillsHTML) {
    const { personal } = this.portfolioData;
    
    // Choose template structure based on detected template
    if (this.templateNumber === 2) {
      return this.getTemplate2HTML(cssContent, jsContent, projectsHTML, skillsHTML);
    }
    
    // Default to Template 1 structure
    return this.getTemplate1HTML(cssContent, jsContent, projectsHTML, skillsHTML);
  }

  getTemplate1HTML(cssContent, jsContent, projectsHTML, skillsHTML) {
    const { personal } = this.portfolioData;
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - ${personal.role}</title>
    <meta name="description" content="${personal.name} - ${personal.role} Portfolio">
    <meta name="keywords" content="${personal.skills}">
    <meta name="author" content="${personal.name}">
    <meta property="og:title" content="${personal.name} - Portfolio">
    <meta property="og:description" content="Professional ${personal.role} with ${personal.experience}+ years of experience">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <style>
${cssContent}

/* Remove preview-only elements */
.preview-controls,
.preview-actions,
.download-btn,
.edit-portfolio-btn,
.btn-edit,
.preview-only {
    display: none !important;
}
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
                <img src="${personal.profileImage}" alt="${personal.name} Profile" class="profile-img">
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
                            <div class="stat-number">${this.portfolioData.projects.length}</div>
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

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
${jsContent}

// Standalone portfolio functionality
document.addEventListener('DOMContentLoaded', () => {
    // Theme functionality
    const themeToggle = document.getElementById('themeToggle');
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
            updateThemeIcon();
        });
    }
    
    function updateThemeIcon() {
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
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
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#28a745';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // Smooth scrolling
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

    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 100,
            once: true
        });
    }
});
    </script>
</body>
</html>`;
  }

  getTemplate2HTML(cssContent, jsContent, projectsHTML, skillsHTML) {
    const { personal } = this.portfolioData;
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Portfolio</title>
    <meta name="description" content="${personal.name} - ${personal.role} Portfolio">
    <meta name="keywords" content="${personal.skills}">
    <meta name="author" content="${personal.name}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Template 2 Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --black: #000000;
            --yellow: #FFD700;
            --dark-gray: #1a1a1a;
            --light-gray: #333333;
            --white: #ffffff;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--black);
            color: var(--white);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Navigation */
        .nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            padding: 1rem 0;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--yellow);
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--yellow);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 100px 0 50px;
        }

        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .hero-badge {
            background: var(--yellow);
            color: var(--black);
            padding: 0.5rem 1rem;
            border-radius: 25px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }

        .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        .hero-title span {
            color: var(--yellow);
        }

        .hero-subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            color: #ccc;
        }

        .hero-image img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 20px;
        }

        /* Sections */
        .section {
            padding: 100px 0;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background: var(--yellow);
        }

        /* Skills */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .skill-card {
            background: var(--dark-gray);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s ease;
            border: 1px solid rgba(255, 215, 0, 0.1);
        }

        .skill-card:hover {
            transform: translateY(-5px);
            border-color: var(--yellow);
        }

        .skill-icon {
            font-size: 2.5rem;
            color: var(--yellow);
            margin-bottom: 1rem;
        }

        .skill-name {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        /* Projects */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .project-card {
            background: var(--dark-gray);
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease;
            border: 1px solid rgba(255, 215, 0, 0.1);
        }

        .project-card:hover {
            transform: translateY(-5px);
            border-color: var(--yellow);
        }

        .project-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .project-content {
            padding: 1.5rem;
        }

        .project-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--yellow);
        }

        .project-description {
            color: #ccc;
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .project-tag {
            background: rgba(255, 215, 0, 0.1);
            color: var(--yellow);
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.8rem;
        }

        /* Contact */
        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }

        .contact-info h3 {
            color: var(--yellow);
            margin-bottom: 1rem;
        }

        /* Mobile */
        @media (max-width: 768px) {
            .hero-content, .contact-content {
                grid-template-columns: 1fr;
            }
            
            .hero-title {
                font-size: 2.5rem;
            }
            
            .nav-links {
                display: none;
            }
        }

${cssContent}

/* Remove preview-only elements */
.preview-controls,
.preview-actions,
.download-btn,
.edit-portfolio-btn,
.btn-edit,
.preview-only {
    display: none !important;
}
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <a href="#" class="logo">${personal.name}</a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-badge">${personal.role}</div>
                    <h1 class="hero-title">Hello, I'm <span>${personal.name}</span></h1>
                    <p class="hero-subtitle">I'm a passionate ${personal.role} with ${personal.experience}+ years of experience creating amazing digital experiences.</p>
                </div>
                <div class="hero-image">
                    <img src="${personal.profileImage}" alt="${personal.name}">
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
        <div class="container">
            <h2 class="section-title">My Skills</h2>
            <div class="skills-grid">
                ${skillsHTML}
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
                ${projectsHTML}
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Let's Connect</h3>
                    <p>I'm currently available for freelance work and would love to discuss your project.</p>
                    <p><strong>Email:</strong> ${personal.email}</p>
                    <p><strong>Phone:</strong> ${personal.phone}</p>
                </div>
                <div class="contact-form">
                    <p>Feel free to reach out to me directly via email or phone!</p>
                </div>
            </div>
        </div>
    </section>

    <script>
${jsContent}

// Standalone functionality
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
    </script>
</body>
</html>`;
  }
}

// Initialize the portfolio preview when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioPreview = new PortfolioPreview();
});

// CSS for error overlay and preview controls
const previewStyles = document.createElement('style');
previewStyles.textContent = `
  .error-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  }

  .error-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    margin: 20px;
  }

  .error-content h2 {
    color: #dc3545;
    margin-bottom: 1rem;
  }

  .error-content p {
    color: #6c757d;
    margin-bottom: 1.5rem;
  }

  .preview-controls {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color, #e2e8f0);
  }

  .preview-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .edit-portfolio-btn, .download-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .edit-portfolio-btn {
    background: #6b7280;
    color: white;
  }

  .edit-portfolio-btn:hover {
    background: #4b5563;
    text-decoration: none;
    color: white;
  }

  .download-btn {
    background: #059669;
    color: white;
  }

  .download-btn:hover {
    background: #047857;
  }

  @media (max-width: 768px) {
    .preview-actions {
      flex-direction: column;
      align-items: center;
    }
    
    .edit-portfolio-btn, .download-btn {
      width: 100%;
      max-width: 200px;
      justify-content: center;
    }
  }
`;

document.head.appendChild(previewStyles);
