// Skills management functions
function addSkill() {
  const container = document.getElementById('skillsContainer');
  const skillGroups = container.querySelectorAll('.skill-input-group');
  
  if (skillGroups.length >= 6) {
    alert('You can add maximum 6 skills');
    return;
  }

  const newSkillGroup = document.createElement('div');
  newSkillGroup.className = 'skill-input-group mb-2';
  newSkillGroup.innerHTML = `
    <div class="row">
      <div class="col-7">
        <input type="text" class="form-control skill-name" placeholder="e.g. Python" required>
      </div>
      <div class="col-4">
        <select class="form-select skill-level" required>
          <option value="">Level</option>
          <option value="90">Expert (90%)</option>
          <option value="80">Advanced (80%)</option>
          <option value="70">Intermediate (70%)</option>
          <option value="50">Beginner (50%)</option>
        </select>
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-outline-danger btn-sm remove-skill" onclick="removeSkill(this)">×</button>
      </div>
    </div>
  `;
  
  container.appendChild(newSkillGroup);
  updateRemoveButtons();
}

function removeSkill(button) {
  button.closest('.skill-input-group').remove();
  updateRemoveButtons();
}

function updateRemoveButtons() {
  const skillGroups = document.querySelectorAll('.skill-input-group');
  skillGroups.forEach((group, index) => {
    const removeBtn = group.querySelector('.remove-skill');
    removeBtn.style.display = skillGroups.length > 1 ? 'block' : 'none';
  });
}

// Form validation and submission
document.getElementById("portfolioForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const profileFile = document.getElementById("profileInput").files[0];
  const name = document.getElementById("nameInput").value.trim();
  const bio = document.getElementById("bioInput").value.trim();
  const about = document.getElementById("aboutInput").value.trim();
  const experience = document.getElementById("experience").value;
  const email = document.getElementById("emailInput").value.trim();
  const phoneNumber = document.getElementById("phoneInput").value.trim();
  const location = document.getElementById("locationInput").value.trim();
  
  // Social media links
  const linkedin = document.getElementById("linkedinInput").value.trim();
  const github = document.getElementById("githubInput").value.trim();
  const twitter = document.getElementById("twitterInput").value.trim();
  const portfolio = document.getElementById("portfolioInput").value.trim();

  // Collect skills
  const skills = [];
  const skillGroups = document.querySelectorAll('.skill-input-group');
  skillGroups.forEach(group => {
    const skillName = group.querySelector('.skill-name').value.trim();
    const skillLevel = group.querySelector('.skill-level').value;
    if (skillName && skillLevel) {
      skills.push({ name: skillName, level: skillLevel });
    }
  });

  // Validation
  if (!profileFile) {
    showError("Please upload a profile image.");
    return;
  }

  if (skills.length === 0) {
    showError("Please add at least one skill.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    // Store all data in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userBio", bio);
    localStorage.setItem("userAbout", about);
    localStorage.setItem("profileImage", reader.result);
    localStorage.setItem("experience", experience);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phoneNumber);
    localStorage.setItem("userLocation", location);
    localStorage.setItem("userSkills", JSON.stringify(skills));
    
    // Social media
    localStorage.setItem("userLinkedin", linkedin);
    localStorage.setItem("userGithub", github);
    localStorage.setItem("userTwitter", twitter);
    localStorage.setItem("userPortfolio", portfolio);

    // Show success message and redirect
    showSuccess("Portfolio data saved successfully! Redirecting to preview...");
    setTimeout(() => {
      window.location.href = "preview.html";
    }, 1500);
  };

  reader.readAsDataURL(profileFile);
});

function showError(message) {
  // Remove existing alerts
  const existingAlert = document.querySelector('.alert');
  if (existingAlert) existingAlert.remove();
  
  const alert = document.createElement('div');
  alert.className = 'alert alert-danger alert-dismissible fade show';
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  document.querySelector('.card').prepend(alert);
}

function showSuccess(message) {
  // Remove existing alerts
  const existingAlert = document.querySelector('.alert');
  if (existingAlert) existingAlert.remove();
  
  const alert = document.createElement('div');
  alert.className = 'alert alert-success alert-dismissible fade show';
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  document.querySelector('.card').prepend(alert);
}

// Initialize remove buttons on page load
document.addEventListener('DOMContentLoaded', function() {
  updateRemoveButtons();
});

    console.log("Experience from localStorage:", localStorage.getItem("experience"));
