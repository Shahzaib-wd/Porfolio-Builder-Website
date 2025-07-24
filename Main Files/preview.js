  window.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("userName") || "Your Name";
    const bio = localStorage.getItem("userBio") || "a developer";
    const profileImage = localStorage.getItem("profileImage");
    const experience = localStorage.getItem("experience");

    // Settings
    document.getElementById("name").textContent = name;
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