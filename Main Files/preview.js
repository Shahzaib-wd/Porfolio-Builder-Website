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


    document.title = `Vizume | ${name}'s Portfolio`

    // Set image if exists
    if (profileImage) {
      document.getElementById("profile").src = profileImage;
    } else {
      document.getElementById("profile").src = "https://placehold.co/500x500"; // fallback image
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
                
                // Form validation
                if (!name || !email || !subject || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Simulate form submission (in a real app, you would send this data to a server)
                console.log({ name, email, subject, message });
                
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            });
        }