// Portfolio Builder JavaScript
class PortfolioBuilder {
  constructor() {
    this.projects = [];
    this.maxProjects = 6;
    this.minProjects = 2;
    
    this.init();
  }

  init() {
    this.loadExistingData();
    this.setupEventListeners();
    this.initializeProjects();
  }

  loadExistingData() {
    // Load existing portfolio data
    const existingData = this.getPortfolioData();
    
    if (existingData) {
      // Populate personal info
      if (existingData.personal) {
        document.getElementById('nameInput').value = existingData.personal.name || '';
        document.getElementById('emailInput').value = existingData.personal.email || '';
        document.getElementById('phoneInput').value = existingData.personal.phone || '';
        document.getElementById('roleSelect').value = existingData.personal.role || '';
        document.getElementById('experience').value = existingData.personal.experience || '';
        document.getElementById('skillsInput').value = existingData.personal.skills || '';
        
        if (existingData.personal.profileImage) {
          this.showProfilePreview(existingData.personal.profileImage);
        }
      }
      
      // Load projects
      if (existingData.projects && existingData.projects.length > 0) {
        this.projects = existingData.projects;
      }
    }
  }

  setupEventListeners() {
    // Profile image upload
    document.getElementById('profileInput').addEventListener('change', (e) => {
      this.handleProfileImageUpload(e);
    });

    // Add project button
    document.getElementById('addMoreProjects').addEventListener('click', () => {
      this.addProject();
    });

    // Form submission
    document.getElementById('portfolioForm').addEventListener('submit', (e) => {
      this.handleFormSubmit(e);
    });
  }

  initializeProjects() {
    if (this.projects.length === 0) {
      // Create initial projects
      this.projects = [
        { id: this.generateId(), title: '', description: '', tags: '', image: '' },
        { id: this.generateId(), title: '', description: '', tags: '', image: '' }
      ];
    }
    
    this.renderProjects();
  }

  generateId() {
    return 'project_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  handleProfileImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.showProfilePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  showProfilePreview(imageSrc) {
    const preview = document.getElementById('profilePreview');
    const img = document.getElementById('profileImg');
    
    img.src = imageSrc;
    preview.style.display = 'block';
  }

  addProject() {
    if (this.projects.length < this.maxProjects) {
      const newProject = {
        id: this.generateId(),
        title: '',
        description: '',
        tags: '',
        image: ''
      };
      
      this.projects.push(newProject);
      this.renderProjects();
      
      // Scroll to new project
      setTimeout(() => {
        const newProjectElement = document.querySelector(`[data-project-id="${newProject.id}"]`);
        if (newProjectElement) {
          newProjectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      alert(`Maximum ${this.maxProjects} projects allowed`);
    }
  }

  removeProject(projectId) {
    if (this.projects.length > this.minProjects) {
      const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
      
      // Add animation class
      projectElement.classList.add('removing');
      
      setTimeout(() => {
        this.projects = this.projects.filter(p => p.id !== projectId);
        this.renderProjects();
      }, 300);
    } else {
      alert(`Minimum ${this.minProjects} projects required`);
    }
  }

  updateProject(projectId, field, value) {
    const project = this.projects.find(p => p.id === projectId);
    if (project) {
      project[field] = value;
    }
  }

  handleProjectImageUpload(projectId, file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.updateProject(projectId, 'image', e.target.result);
        this.showProjectImagePreview(projectId, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  showProjectImagePreview(projectId, imageSrc) {
    const container = document.querySelector(`[data-project-id="${projectId}"] .image-upload-area`);
    const existingPreview = container.querySelector('.image-preview');
    
    if (existingPreview) {
      existingPreview.src = imageSrc;
    } else {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.className = 'image-preview';
      img.alt = 'Project preview';
      container.appendChild(img);
    }
    
    container.classList.add('has-image');
  }

  renderProjects() {
    const container = document.getElementById('projectsList');
    const countBadge = document.getElementById('projectCount');
    
    container.innerHTML = '';
    countBadge.textContent = this.projects.length;

    this.projects.forEach((project, index) => {
      const projectHtml = this.createProjectHTML(project, index);
      container.appendChild(projectHtml);
    });

    // Update add button state
    const addButton = document.getElementById('addMoreProjects');
    if (this.projects.length >= this.maxProjects) {
      addButton.style.display = 'none';
    } else {
      addButton.style.display = 'flex';
    }
  }

  createProjectHTML(project, index) {
    const div = document.createElement('div');
    div.className = 'project-input';
    div.setAttribute('data-project-id', project.id);
    
    div.innerHTML = `
      <div class="project-header">
        <h5 class="project-title">Project ${index + 1}</h5>
        ${this.projects.length > this.minProjects ? `
          <button type="button" class="remove-project" onclick="portfolioBuilder.removeProject('${project.id}')">
            <i class="fas fa-times"></i>
          </button>
        ` : ''}
      </div>

      <div class="project-row">
        <div class="project-col">
          <label class="form-label">Project Screenshot</label>
          <div class="image-upload-area ${project.image ? 'has-image' : ''}">
            <input type="file" class="form-control" accept="image/*" 
                   onchange="portfolioBuilder.handleProjectImageUpload('${project.id}', this.files[0])" 
                   ${!project.image ? 'required' : ''}>
            <small class="upload-text">
              <i class="fas fa-cloud-upload-alt"></i> Upload project screenshot
            </small>
            ${project.image ? `<img src="${project.image}" class="image-preview" alt="Project preview">` : ''}
          </div>
        </div>
        
        <div class="project-col">
          <div class="form-group">
            <label class="form-label">Project Title</label>
            <input type="text" class="form-control" value="${project.title}" 
                   onchange="portfolioBuilder.updateProject('${project.id}', 'title', this.value)"
                   placeholder="Enter project title" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">Technologies Used</label>
            <input type="text" class="form-control" value="${project.tags}" 
                   onchange="portfolioBuilder.updateProject('${project.id}', 'tags', this.value)"
                   placeholder="React, Node.js, MongoDB" required>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Project Description</label>
        <textarea class="project-textarea" 
                  onchange="portfolioBuilder.updateProject('${project.id}', 'description', this.value)"
                  placeholder="Describe your project, its features, and your role in it" required>${project.description}</textarea>
      </div>
    `;
    
    return div;
  }

  validateForm() {
    const personalInfo = this.getPersonalInfo();
    
    // Validate personal information
    if (!personalInfo.name.trim()) {
      alert('Please enter your name');
      return false;
    }
    
    if (!personalInfo.email.trim()) {
      alert('Please enter your email');
      return false;
    }
    
    if (!personalInfo.phone.trim()) {
      alert('Please enter your phone number');
      return false;
    }
    
    if (!personalInfo.role) {
      alert('Please select your profession');
      return false;
    }
    
    if (personalInfo.experience < 0) {
      alert('Please enter valid years of experience');
      return false;
    }

    if (!personalInfo.profileImage) {
      alert('Please upload a profile picture');
      return false;
    }

    if (!personalInfo.skills.trim()) {
      alert('Please enter your skills');
      return false;
    }

    // Validate projects
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];
      
      if (!project.title.trim()) {
        alert(`Please enter title for Project ${i + 1}`);
        return false;
      }
      
      if (!project.description.trim()) {
        alert(`Please enter description for Project ${i + 1}`);
        return false;
      }
      
      if (!project.tags.trim()) {
        alert(`Please enter technologies for Project ${i + 1}`);
        return false;
      }
      
      if (!project.image) {
        alert(`Please upload an image for Project ${i + 1}`);
        return false;
      }
    }

    return true;
  }

  getPersonalInfo() {
    const profileImg = document.getElementById('profileImg');
    
    return {
      name: document.getElementById('nameInput').value,
      email: document.getElementById('emailInput').value,
      phone: document.getElementById('phoneInput').value,
      role: document.getElementById('roleSelect').value,
      experience: parseInt(document.getElementById('experience').value) || 0,
      skills: document.getElementById('skillsInput').value,
      profileImage: profileImg.src || null
    };
  }

  getPortfolioData() {
    try {
      const data = localStorage.getItem('portfolioData');
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error loading portfolio data:', error);
      return null;
    }
  }

  savePortfolioData(data) {
    try {
      localStorage.setItem('portfolioData', JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error saving portfolio data:', error);
      return false;
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }

    const portfolioData = {
      personal: this.getPersonalInfo(),
      projects: this.projects,
      createdAt: new Date().toISOString()
    };

    if (this.savePortfolioData(portfolioData)) {
      // Show success message
      const submitBtn = document.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Saved Successfully!';
      submitBtn.classList.add('btn-success');
      
      setTimeout(() => {
        window.location.href = 'preview.html';
      }, 1000);
    } else {
      alert('Failed to save portfolio. Please try again.');
    }
  }
}

// Initialize the portfolio builder when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioBuilder = new PortfolioBuilder();
});
