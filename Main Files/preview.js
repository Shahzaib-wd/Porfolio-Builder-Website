  window.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("userName") || "Your Name";
    const bio = localStorage.getItem("userBio") || "a developer";
    const profileImage = localStorage.getItem("profileImage");
    const experience = localStorage.getItem("experience");
    const email = localStorage.getItem("userEmail");
    const pNumber = localStorage.getItem("userPhone");

      

    // Settings
    document.getElementById("name").textContent = name;
    document.getElementById("email").textContent = email;
    document.getElementById("pnumber").textContent = pNumber;
    document.getElementById("bio").textContent = bio;
    document.getElementById("bioo").textContent = bio
    document.getElementById("exp").textContent = experience
    const about = document.getElementById("about-me")
    const heroP = document.getElementById("hero-p")
    const footerNmae = document.getElementById("nameee")
    const footerName = document.getElementById("nameeee")




    document.title = `Vizume | ${name}'s Portfolio`
    const role = bio.trim().toLowerCase();
    const heroPara = heroP
    footerNmae.textContent = `${name}'s PORTFOLIO`
    footerName.textContent = name


    // Set image if exists
    if (profileImage) {
      document.getElementById("profile").src = profileImage;
    } else {
      document.getElementById("profile").src = "https://placehold.co/500x500"; // fallback image
    }
    if (linkedinURL) document.getElementById("linkedin").href = linkedinURL;
    if (githubURL) document.getElementById("github").href = githubURL;




if (role === "software engineer") {
  about.textContent = `Experienced Software Engineer with ${experience}+ years of crafting high-performance software solutions that solve real-world problems and scale businesses.`;
  heroPara.textContent = `Turning complex ideas into scalable, maintainable software that evolves with user needs.`;

}
else if (role === "web developer") {
  about.textContent = `Creative Web Developer with ${experience}+ years of building sleek, responsive websites that combine functionality with modern UI/UX principles.`;
    heroPara.textContent = `Transforming concepts into interactive, engaging websites users love to explore.`;

}
else if (bio === "web designer") {
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

  const skillsContainer = document.querySelector(".skills-container");
const userRole = localStorage.getItem("userBio")?.toLowerCase();


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
    { icon: "fas fa-adjust", name: "Color Theory", desc: "Designing with contrast, emotion & harmony" },
  ],
  "full stack developer": [
    { icon: "fab fa-js", name: "JavaScript", desc: "Dynamic logic and interactivity" },
    { icon: "fab fa-react", name: "React", desc: "Frontend component-based architecture" },
    { icon: "fab fa-node-js", name: "Node.js", desc: "Backend logic and APIs" },
    { icon: "fas fa-database", name: "MongoDB", desc: "NoSQL DB for scalable storage" },
  ],
  "backend developer": [
    { icon: "fab fa-node-js", name: "Node.js", desc: "Server-side scripting" },
    { icon: "fas fa-database", name: "MongoDB", desc: "Efficient data modeling" },
    { icon: "fas fa-lock", name: "Auth Systems", desc: "Secure login & session flow" },
    { icon: "fas fa-server", name: "REST APIs", desc: "Data flow and backend logic" },
  ],
  "frontend developer": [
    { icon: "fab fa-html5", name: "HTML5", desc: "Structured markup" },
    { icon: "fab fa-css3-alt", name: "CSS3", desc: "Animations and design" },
    { icon: "fab fa-js", name: "JavaScript", desc: "Interactive logic" },
    { icon: "fab fa-react", name: "React", desc: "Modern UI components" },
  ],
  "web developer": [
    { icon: "fab fa-html5", name: "HTML5", desc: "Clean and semantic markup" },
    { icon: "fab fa-css3-alt", name: "CSS3", desc: "Responsive layouts and design" },
    { icon: "fab fa-js", name: "JavaScript", desc: "Frontend logic and DOM control" },
    { icon: "fab fa-node-js", name: "Node.js", desc: "Backend and API creation" },
  ],
  "ai engineer": [
    { icon: "fas fa-brain", name: "Machine Learning", desc: "Predictive models and automation" },
    { icon: "fab fa-python", name: "Python", desc: "AI scripting with libraries like TensorFlow" },
    { icon: "fas fa-robot", name: "AI Algorithms", desc: "Neural nets and smart logic" },
    { icon: "fas fa-chart-line", name: "Data Processing", desc: "Data cleaning and feature engineering" },
  ],
  "devops engineer": [
    { icon: "fas fa-tools", name: "CI/CD", desc: "Build, test, and deploy pipelines" },
    { icon: "fab fa-docker", name: "Docker", desc: "Containerization & isolation" },
    { icon: "fab fa-jenkins", name: "Jenkins", desc: "Pipeline automation" },
    { icon: "fab fa-aws", name: "AWS", desc: "Cloud orchestration and infra" },
  ],
  "cloud engineer": [
    { icon: "fab fa-aws", name: "AWS", desc: "Cloud deployment and scaling" },
    { icon: "fab fa-google", name: "GCP", desc: "Google Cloud infrastructure" },
    { icon: "fas fa-network-wired", name: "Networking", desc: "Routing, DNS, and security" },
    { icon: "fas fa-database", name: "Cloud DB", desc: "Scalable and distributed storage" },
  ],
  "ethical hacker": [
    { icon: "fas fa-user-secret", name: "Pen Testing", desc: "Testing for system vulnerabilities" },
    { icon: "fas fa-lock", name: "Cybersecurity", desc: "Network & data protection" },
    { icon: "fas fa-bug", name: "Exploit Dev", desc: "Finding & exploiting flaws" },
    { icon: "fab fa-linux", name: "Linux", desc: "Kali tools & scripting" },
  ],
  "data scientist": [
    { icon: "fas fa-database", name: "Data Analysis", desc: "Extract insights from data" },
    { icon: "fab fa-python", name: "Python", desc: "Pandas, NumPy, and matplotlib" },
    { icon: "fas fa-chart-pie", name: "Data Viz", desc: "Interactive dashboards" },
    { icon: "fas fa-brain", name: "ML Models", desc: "Training models on data" },
  ],
  "ui/ux designer": [
    { icon: "fas fa-pen-nib", name: "UI Design", desc: "Clean interfaces" },
    { icon: "fas fa-user-friends", name: "UX Research", desc: "User testing & empathy maps" },
    { icon: "fab fa-figma", name: "Figma", desc: "High-fidelity prototyping" },
    { icon: "fas fa-mobile", name: "Responsive UX", desc: "Mobile-first strategies" },
  ]
};

// Dynamically render cards
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



// porjects section 


const projectsData = {
  "software engineer": [
  {
    title: "Hospital Management System",
    description: "Developed a complete hospital management web app with patient records, doctor schedules, and billing system.",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image: "https://www.inkthemes.com/wp-content/uploads/2019/03/Hospital-automanger-thumb-image11.png"
  },
  {
    title: "Bug Tracking Tool",
    description: "Built an issue tracking system like Jira with user roles, ticket statuses, and real-time notifications.",
    tags: ["Python", "Django", "PostgreSQL", "WebSockets"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqh_U8PhYjt8kjqmFppzCN2WxVouMmJEnJw&s"
  }
]
,
  "web designer": [
    {
      title: "Creative Landing Page",
      description: "A stylish landing page using modern typography and responsive layout.",
      tags: ["HTML", "CSS", "Figma"],
      image: "https://elements-resized.envatousercontent.com/elements-cover-images/edbbc4ab-95c0-4fca-b096-036d38cc9711?w=433&cf_fit=scale-down&q=85&format=auto&s=3055db25f7249cccc3be0006043c1d05b75d5250c9dc3ed0d834b382906e22db"
    },
    {
      title: "Brand Identity Website",
      description: "Designed a complete brand kit layout with visual consistency.",
      tags: ["Adobe XD", "CSS Grid", "Animations"],
      image: "https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/67726638dbb269da7923745a_Brand-Identity-Design-Services.webp"
    }
  ],
  "full stack developer": [
    {
      title: "MERN Stack Blog",
      description: "Full-featured blog with authentication, comments, and admin panel.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYdStPSRN9Cwo2n6on29_ZaAx0tjPpUJuig&s"
    },
    {
      title: "Task Manager",
      description: "Full-stack app for managing tasks, deadlines, and project goals.",
      tags: ["Next.js", "Prisma", "Tailwind"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBWkaiq-byUKUFcSa7ItAORoPNe5CCXnLlIiMXDum8MaBqYiyLgkSKiw_foARLoQsEto&usqp=CAU"
    }
  ],
  "backend developer": [
    {
      title: "REST API",
      description: "Built scalable REST API with JWT auth and rate limiting.",
      tags: ["Node.js", "Express", "MongoDB"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsLyOG2n-ka3lBXtE4uQsX02EvDXFi4hHCEzvFcadyrLrVAyiVI1uP39r0ODo7TTVf7k&usqp=CAU",

    },
    {
      title: "Microservices Setup",
      description: "Created distributed microservices architecture using Docker & RabbitMQ.",
      tags: ["Docker", "RabbitMQ", "Redis"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl0-K8v1V1ltOkTGneZ-KeoHwwuhEj85Neg&s"
    }
  ],
  "frontend developer": [
    {
      title: "Netflix Clone",
      description: "Built a Netflix UI with TMDB API integration and animated sliders.",
      tags: ["React", "API", "Styled-Components"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4g_yIlTSrxIFKWrrTx8ymwGfWBiawBcJng&s"
    },
    {
      title: "Admin Dashboard",
      description: "Frontend panel with graphs, charts, and dark/light mode.",
      tags: ["Vue.js", "Chart.js", "SASS"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxHn2yUPxhpIJFmem3OMxQEH_QfL_CIvsfA&s"
    }
  ],
  "web developer": [
    {
      title: "Responsive Website",
      description: "Created a fully responsive multi-page site for a local brand.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://assets.designhill.com/design-blog/wp-content/uploads/2024/12/4-1.jpg"
    },
    {
      title: "JS Form Validation",
      description: "Built reusable vanilla JS form validation system.",
      tags: ["JavaScript", "Regex"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60F7D-XlCd0Cazux6PUh_iWjsq6dlnw3SBplrKMaXdmLMpDUE-rJWGFD2OKeJwc8V_CA&usqp=CAU"
    }
  ],
  "ai engineer": [
    {
      title: "Chatbot using NLP",
      description: "Created a support chatbot using NLP techniques and TensorFlow.",
      tags: ["Python", "TensorFlow", "NLP"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcWCXt9IrsOz_nT4-21dKx4gqFoLjG4GT8A&s"
    },
    {
      title: "AI Image Classifier",
      description: "Trained a model to classify images using CNN architecture.",
      tags: ["Keras", "OpenCV", "CNN"],
      image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7562507/amazon_rekognition_dog.jpg?quality=90&strip=all&crop=0,12.668682250571,100,74.662635498857"
    }
  ],
  "devops engineer": [
    {
      title: "CI/CD Pipeline",
      description: "Setup automated CI/CD pipelines using GitHub Actions and Docker.",
      tags: ["CI/CD", "Docker", "GitHub Actions"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdei2ZcOZBXeHSGoO2uoV7_3um4Kytf_ibG8Ut31vRf4332xd_1VIeSdXeHq2z05k-CbM&usqp=CAU"
    },
    {
      title: "Monitoring System",
      description: "Implemented full monitoring stack with Prometheus and Grafana.",
      tags: ["Prometheus", "Grafana", "Kubernetes"],
      image: "https://cdn.dribbble.com/userupload/42355347/file/original-cd990b6ee01405e3fde53b73f3c8123d.jpg?resize=400x0"
    }
  ],
  "cloud engineer": [
    {
      title: "AWS Infrastructure",
      description: "Setup scalable EC2 + S3 + RDS system for web deployment.",
      tags: ["AWS", "EC2", "S3", "RDS"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCx0FSwAHpNv7iuP-U5A5EKCMUR0OXcXRKlg&s"
    },
    {
      title: "Azure App Hosting",
      description: "Deployed Node.js app on Azure with monitoring and scaling.",
      tags: ["Azure", "App Service", "DevOps"],
      image: "https://cdn.educba.com/academy/wp-content/uploads/2021/11/Azure-hosting.jpg"
    }
  ],
  "ethical hacker": [
    {
      title: "Vulnerability Scanner",
      description: "Made a script to detect SQLi and XSS on vulnerable sites.",
      tags: ["Python", "Requests", "OWASP"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7cCssSXDUW9MD78Ely46yyluAyO9KxTlPQ&s"
    },
    {
      title: "Pentest Report",
      description: "Performed black box testing and documented results.",
      tags: ["Kali Linux", "Nmap", "Burp Suite"],
      image: "https://www.defense.com/assets/penetration-testing/penetration-testing-report-eb1121a480b59f3ebadae59f9152736434c2cd06896e9a0d15b520b27115a831.png"
    }
  ],
  "data scientist": [
    {
      title: "Sales Prediction Model",
      description: "Predicted sales using linear regression and time series forecasting.",
      tags: ["Pandas", "Scikit-learn", "Matplotlib"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGduGL4LFMcKkRQWQXN-CkVwYAo4_pias_B4QrE7xK2v5F9v7rwXkDDmPoSZcXSiTxdzE&usqp=CAU"
    },
    {
      title: "Customer Segmentation",
      description: "Used KMeans clustering for customer persona analysis.",
      tags: ["KMeans", "NumPy", "Seaborn"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTGWzySasp342_hTQ-dC1cUvX35DN1VhuZA&s"
    }
  ],
  "ui/ux designer": [
    {
      title: "UX Case Study",
      description: "Redesigned an e-commerce checkout process with usability testing.",
      tags: ["Figma", "User Testing", "Wireframing"],
      image: "https://miro.medium.com/v2/resize:fit:2000/1*SIPP_wkofiqN0iQ2TzPh1g.png"
    },
    {
      title: "Mobile App Prototype",
      description: "Designed interactive prototype for a finance app.",
      tags: ["Figma", "InVision", "Mobile UX"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPYfkCqomtJx_PbMunrDLg2RBgKHSSkKEGw&s"
    }
  ]
};


function renderProjectsSection(profession) {
  const container = document.querySelector(".projects-container");
  container.innerHTML = "";

  const projects = projectsData[profession.toLowerCase()];
  if (!projects) return;

  projects.forEach((project, index) => {
    container.innerHTML += `
      <div class="project-card" style="--order: ${index};">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
        </div>
      </div>
    `;
  });
}
const userProfession = localStorage.getItem("userBio");
if (userProfession) {
  renderProjectsSection(userProfession);
}


































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