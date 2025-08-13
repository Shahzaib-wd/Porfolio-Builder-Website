    window.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("userName") || "Your Name";
    const roleSelect = localStorage.getItem("role"); "a developer";
    const profileImage = localStorage.getItem("profileImage");
    const experience = localStorage.getItem("experience");
    const email = localStorage.getItem("userEmail");
    const pNumber = localStorage.getItem("userPhone");

      

    // Settings
    document.getElementById("name").textContent = name;
    document.getElementById("email").textContent = email;
    document.getElementById("pnumber").textContent = pNumber;
    document.getElementById("bio").textContent = roleSelect;
    document.getElementById("bioo").textContent = roleSelect;
    document.getElementById("exp").textContent = experience
    const about = document.getElementById("about-me")
    const heroP = document.getElementById("hero-p")
    const footerNmae = document.getElementById("nameee")
    const footerName = document.getElementById("nameeee")




    document.title = `${name} PORTFOLIO`
    const role = roleSelect;
    const heroPara = heroP
    footerNmae.textContent = `${name} PORTFOLIO`
    footerName.textContent = name


    // Set image if exists
    if (profileImage) {
      document.getElementById("profile").src = profileImage;
    } else {
      document.getElementById("profile").src = "https://placehold.co/500x500"; // fallback image
    }





if (role === "software engineer") {
  about.textContent = `Experienced Software Engineer with ${experience}+ years of crafting high-performance software solutions that solve real-world problems and scale businesses.`;
  heroPara.textContent = `Turning complex ideas into scalable, maintainable software that evolves with user needs.`;

}
else if (role === "web developer") {
  about.textContent = `Creative Web Developer with ${experience}+ years of building sleek, responsive websites that combine functionality with modern UI/UX principles.`;
    heroPara.textContent = `Transforming concepts into interactive, engaging websites users love to explore.`;

}
else if (role === "web designer") {
  about.textContent = `Web Designer with ${experience}+ years of crafting visually appealing, user-friendly designs that blend creativity with performance.`;
    heroPara.textContent = "Designing sleek, functional, and high-converting web experiences with creativity and purpose.";

}
else if (role === "frontend developer") {
  about.textContent = `Frontend Developer with ${experience}+ years of experience crafting stunning, user-focused interfaces with the latest web technologies.`;
    heroPara.textContent = `Focused on creating immersive visuals and seamless user interactions across devices.`;

}
else if (role === "backend developer") {
  about.textContent = `Backend Developer with ${experience}+ years of experience building secure, scalable systems and robust APIs for modern applications.`;
  heroPara.textContent = `Architecting the logic and performance that powers reliable digital experiences.`;

}
else if (role === "full stack developer") {
  about.textContent = `Full Stack Developer with ${experience}+ years of hands-on experience delivering complete web apps using both frontend and backend technologies.`;
  heroPara.textContent = `Bridging frontend creativity and backend logic for end-to-end digital products.`;

}
else if (role === "ui/ux designer") {
  about.textContent = `UI/UX Designer with ${experience}+ years of creating visually striking and user-centric designs that enhance usability and aesthetics.`;
  heroPara.textContent = `Designing visually stunning and emotionally resonant user journeys.`;

}
else if (role === "mobile app developer") {
  about.textContent = `Mobile App Developer with ${experience}+ years of experience building seamless, high-performance mobile applications for Android and iOS.`;
    heroPara.textContent = `Building fluid, responsive mobile apps that perform flawlessly across platforms.`;

}
else if (role === "data scientist") {
  about.textContent = `Data Scientist with ${experience}+ years of transforming data into actionable insights using ML, statistics, and data storytelling.`;
  heroPara.textContent = `Extracting actionable insights from data to empower smart decisions.`;

}
else if (role === "ethical hacker") {
  about.textContent = `Ethical Hacker with ${experience}+ years of experience identifying security flaws and strengthening systems through professional penetration testing.`;
  heroPara.textContent = `Dedicated to fortifying digital systems through proactive ethical testing.`;

}
else if (role === "cloud engineer") {
  about.textContent = `Cloud Engineer with ${experience}+ years of deploying and managing secure, scalable cloud infrastructures on AWS, Azure, and beyond.`;
  heroPara.textContent = `Engineering scalable cloud environments that support modern business agility.`;

}
else if (role === "devops engineer") {
  about.textContent = `DevOps Engineer with ${experience}+ years of experience streamlining development through CI/CD, automation, and infrastructure-as-code.`;
  heroPara.textContent = `Streamlining deployments with automation, monitoring, and seamless CI/CD.`;

}
else if (role === "ai engineer") {
  about.textContent = `AI Engineer with ${experience}+ years of crafting intelligent systems using NLP, deep learning, and real-world AI applications.`;
  heroPara.textContent = `Crafting intelligent models that solve problems through data-driven learning.`;

}
else {
  about.textContent = `Passionate ${bio} with ${experience}+ years of experience delivering impactful solutions driven by innovation, precision, and growth mindset.`;
}

  });




  // skill section 

  const skillsContainer = document.getElementById("skills-container");
const userRole = localStorage.getItem("role")?.toLowerCase();

const skillsMap = {
  "software engineer": [
    { icon: "fas fa-code", name: "Programming", desc: "Strong in core languages like Java, Python, C++ or JavaScript" },
    { icon: "fas fa-sitemap", name: "System Design", desc: "Design scalable systems using architecture patterns and design principles" },
    { icon: "fas fa-database", name: "Databases", desc: "Work with SQL (MySQL/PostgreSQL) & NoSQL (MongoDB/Firebase)" },
    { icon: "fas fa-project-diagram", name: "Data Structures & Algorithms", desc: "Problem solving using efficient data structures and algorithms" }
  ],
  "web designer": [
    { icon: "fas fa-palette", name: "UI Design", desc: "Clean, modern, and aesthetic interface design" },
    { icon: "fas fa-layer-group", name: "Figma/XD", desc: "High-fidelity wireframes and prototypes" },
    { icon: "fab fa-css3-alt", name: "CSS3", desc: "Animations, layouts, and responsiveness" },
    { icon: "fas fa-adjust", name: "Color Theory", desc: "Designing with contrast, emotion & harmony" }
  ],
  "full stack developer": [
    { icon: "fab fa-js", name: "JavaScript", desc: "Dynamic logic and interactivity" },
    { icon: "fab fa-react", name: "React", desc: "Frontend component-based architecture" },
    { icon: "fab fa-node-js", name: "Node.js", desc: "Backend logic and APIs" },
    { icon: "fas fa-database", name: "MongoDB", desc: "NoSQL DB for scalable storage" }
  ],
  "backend developer": [
    { icon: "fab fa-node-js", name: "Node.js", desc: "Server-side scripting" },
    { icon: "fas fa-database", name: "MongoDB", desc: "Efficient data modeling" },
    { icon: "fas fa-lock", name: "Auth Systems", desc: "Secure login & session flow" },
    { icon: "fas fa-server", name: "REST APIs", desc: "Data flow and backend logic" }
  ],
  "frontend developer": [
    { icon: "fab fa-html5", name: "HTML5", desc: "Structured markup" },
    { icon: "fab fa-css3-alt", name: "CSS3", desc: "Animations and design" },
    { icon: "fab fa-js", name: "JavaScript", desc: "Interactive logic" },
    { icon: "fab fa-react", name: "React", desc: "Modern UI components" }
  ],
  "web developer": [
    { icon: "fab fa-html5", name: "HTML5", desc: "Clean and semantic markup" },
    { icon: "fab fa-css3-alt", name: "CSS3", desc: "Responsive layouts and design" },
    { icon: "fab fa-js", name: "JavaScript", desc: "Frontend logic and DOM control" },
    { icon: "fab fa-node-js", name: "Node.js", desc: "Backend and API creation" }
  ],
  "ai engineer": [
    { icon: "fas fa-brain", name: "Machine Learning", desc: "Predictive models and automation" },
    { icon: "fab fa-python", name: "Python", desc: "AI scripting with libraries like TensorFlow" },
    { icon: "fas fa-robot", name: "AI Algorithms", desc: "Neural nets and smart logic" },
    { icon: "fas fa-chart-line", name: "Data Processing", desc: "Data cleaning and feature engineering" }
  ],
  "devops engineer": [
    { icon: "fas fa-tools", name: "CI/CD", desc: "Build, test, and deploy pipelines" },
    { icon: "fab fa-docker", name: "Docker", desc: "Containerization & isolation" },
    { icon: "fab fa-jenkins", name: "Jenkins", desc: "Pipeline automation" },
    { icon: "fab fa-aws", name: "AWS", desc: "Cloud orchestration and infra" }
  ],
  "cloud engineer": [
    { icon: "fab fa-aws", name: "AWS", desc: "Cloud deployment and scaling" },
    { icon: "fab fa-google", name: "GCP", desc: "Google Cloud infrastructure" },
    { icon: "fas fa-network-wired", name: "Networking", desc: "Routing, DNS, and security" },
    { icon: "fas fa-database", name: "Cloud DB", desc: "Scalable and distributed storage" }
  ],
  "ethical hacker": [
    { icon: "fas fa-user-secret", name: "Pen Testing", desc: "Testing for system vulnerabilities" },
    { icon: "fas fa-lock", name: "Cybersecurity", desc: "Network & data protection" },
    { icon: "fas fa-bug", name: "Exploit Dev", desc: "Finding & exploiting flaws" },
    { icon: "fab fa-linux", name: "Linux", desc: "Kali tools & scripting" }
  ],
  "data scientist": [
    { icon: "fas fa-database", name: "Data Analysis", desc: "Extract insights from data" },
    { icon: "fab fa-python", name: "Python", desc: "Pandas, NumPy, and matplotlib" },
    { icon: "fas fa-chart-pie", name: "Data Viz", desc: "Interactive dashboards" },
    { icon: "fas fa-brain", name: "ML Models", desc: "Training models on data" }
  ],
  "ui/ux designer": [
    { icon: "fas fa-pen-nib", name: "UI Design", desc: "Clean interfaces" },
    { icon: "fas fa-user-friends", name: "UX Research", desc: "User testing & empathy maps" },
    { icon: "fab fa-figma", name: "Figma", desc: "High-fidelity prototyping" },
    { icon: "fas fa-mobile", name: "Responsive UX", desc: "Mobile-first strategies" }
  ]
};

// Render cards dynamically
function renderSkillCards(role) {
  skillsContainer.innerHTML = "";
  const skillSet = skillsMap[role];

  if (skillSet) {
    skillSet.forEach((skill, index) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.style = `--order: ${index};`;
      card.innerHTML = `
        <div class="skill-icon"><i class="${skill.icon}"></i></div>
        <h3 class="skill-name">${skill.name}</h3>
        <p>${skill.desc}</p>
        <div class="skill-progress">
          <div class="progress-bar" style="width: ${90 - index * 5}%"></div>
        </div>`;
      skillsContainer.appendChild(card);
    });
  } else {
    skillsContainer.innerHTML = `<p style="text-align:center;">No skill data found for <strong>${role}</strong>.</p>`;
  }
}

renderSkillCards(userRole);

































   // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animate progress bars on scroll
        const animateProgressBars = function() {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const rect = bar.parentElement.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    bar.style.width = bar.style.width;
                }
            });
        };

        window.addEventListener('scroll', animateProgressBars);
        window.addEventListener('load', animateProgressBars);

        // Scroll reveal animations
        const scrollReveal = function() {
            const elements = document.querySelectorAll('.section-header, .about-image, .about-text, .skill-card, .project-card, .contact-info, .contact-form');
            
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                    const animation = element.style.animation;
                    if (!animation || animation.includes('fadeIn')) {
                        return;
                    }
                    element.style.animation = '';
                    void element.offsetWidth; // Trigger reflow
                    element.style.animation = getComputedStyle(element).getPropertyValue('animation');
                }
            });
        };

        window.addEventListener('scroll', scrollReveal);
        window.addEventListener('load', scrollReveal);

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                
                
                // Simulate form submission (in a real app, you would send this data to a server)
                console.log({ name, email, subject, message });
                
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            });
        }







// alpha