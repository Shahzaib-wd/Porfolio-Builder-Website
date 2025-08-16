// Portfolio Preview JavaScript
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
  }

  loadPortfolioData() {
    try {
      const data = localStorage.getItem('portfolioData');
      if (!data) {
        this.showError('No portfolio data found. Please create your portfolio first.');
        return;
      }
      
      this.portfolioData = JSON.parse(data);
    } catch (error) {
      console.error('Error loading portfolio data:', error);
      this.showError('Error loading portfolio data.');
    }
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

    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
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
        { icon: 'fab fa-aws', name: 'AWS', desc: 'Cloud deployment & scaling' },
        { icon: 'fab fa-google', name: 'GCP', desc: 'Google Cloud infrastructure' },
        { icon: 'fas fa-network-wired', name: 'Networking', desc: 'Routing, DNS, security' },
        { icon: 'fas fa-database', name: 'Cloud DB', desc: 'Scalable storage solutions' }
      ],
      'devops engineer': [
        { icon: 'fas fa-tools', name: 'CI/CD', desc: 'Build, test, deploy pipelines' },
        { icon: 'fab fa-docker', name: 'Docker', desc: 'Containerization' },
        { icon: 'fab fa-jenkins', name: 'Jenkins', desc: 'Pipeline automation' },
        { icon: 'fab fa-aws', name: 'AWS', desc: 'Cloud orchestration' }
      ],
      'ai engineer': [
        { icon: 'fas fa-brain', name: 'Machine Learning', desc: 'Predictive models & automation' },
        { icon: 'fab fa-python', name: 'Python', desc: 'AI with TensorFlow, PyTorch' },
        { icon: 'fas fa-robot', name: 'AI Algorithms', desc: 'Neural networks & deep learning' },
        { icon: 'fas fa-chart-line', name: 'Data Processing', desc: 'Feature engineering' }
      ]
    };
  }

  renderProjects(projects) {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';

    if (!projects || projects.length === 0) {
      projectsContainer.innerHTML = '<p class="text-center">No projects found.</p>';
      return;
    }

    projects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.setAttribute('data-aos', 'fade-up');
      projectCard.setAttribute('data-aos-delay', index * 100);

      const tags = project.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      const tagsHtml = tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

      projectCard.innerHTML = `
        <img src="${project.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop'}" 
             alt="${project.title}" class="project-image">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-links">
            ${project.link ? `
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link primary">
                <i class="fas fa-external-link-alt"></i> View Live
              </a>
            ` : `
              <button class="project-link primary" disabled>
                <i class="fas fa-external-link-alt"></i> View Live
              </button>
            `}
            <button class="project-link secondary">
              <i class="fab fa-github"></i> Code
            </button>
          </div>
        </div>
      `;

      projectsContainer.appendChild(projectCard);
    });
  }

  updateStats(personal, projects) {
    document.getElementById('projectCount').textContent = projects.length;
    document.getElementById('experienceYears').textContent = personal.experience;
  }

  handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        e.target.reset();
        
        alert('Thank you for your message! I will get back to you soon.');
      }, 2000);
    }, 1500);
  }

  showError(message) {
    const body = document.body;
    body.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center; padding: 2rem;">
        <div>
          <h1 style="color: #e53e3e; margin-bottom: 1rem;">⚠️ Error</h1>
          <p style="color: #4a5568; margin-bottom: 2rem;">${message}</p>
          <a href="buildnow.html" style="background: #3182ce; color: white; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 8px;">
            Go to Portfolio Builder
          </a>
        </div>
      </div>
    `;
  }
}

// Initialize the portfolio preview when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioPreview();
});