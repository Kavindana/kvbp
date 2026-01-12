// ============================================
// PORTFOLIO WEBSITE - INTERACTIVE FUNCTIONALITY
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // LOADING SCREEN
    // ============================================
    
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Simulate loading progress
    const loadingProgress = document.querySelector('.loading-progress');
    loadingProgress.style.width = '100%';
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        
        // Remove loading screen from DOM after fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Trigger initial animations after loading
            animateOnScroll();
        }, 800);
    }, 2000);
    
    // ============================================
    // NAVIGATION FUNCTIONALITY
    // ============================================
    
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.querySelector('.back-to-top');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Update active link
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        // Add/remove scrolled class for navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
        
        // Trigger scroll animations
        animateOnScroll();
    });
    
    // Back to top functionality
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // ACTIVE NAV LINK UPDATER
    // ============================================
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // ============================================
    // ANIMATION ON SCROLL
    // ============================================
    
    function animateOnScroll() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
        
        // Animate skill bars
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            
            if (barTop < window.innerHeight - 100) {
                const width = bar.getAttribute('data-width');
                bar.style.width = `${width}%`;
            }
        });
        
        // Animate stats counter
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const statTop = stat.getBoundingClientRect().top;
            
            if (statTop < window.innerHeight - 100 && !stat.classList.contains('animated')) {
                animateCounter(stat);
                stat.classList.add('animated');
            }
        });
    }
    
    // Initialize animations on page load
    animateOnScroll();
    
    // ============================================
    // COUNTER ANIMATION
    // ============================================
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }
    
    // ============================================
    // THEME TOGGLE
    // ============================================
    
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.toggle-container i');
    
    themeToggle.addEventListener('click', () => {
        // Toggle between moon and sun icons
        if (themeIcon.classList.contains('fa-moon')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            
            // Add light theme class to body
            document.body.classList.add('light-theme');
            
            // Update CSS variables for light theme
            document.documentElement.style.setProperty('--primary-dark', '#f8f9fa');
            document.documentElement.style.setProperty('--secondary-dark', '#e9ecef');
            document.documentElement.style.setProperty('--text-primary', '#212529');
            document.documentElement.style.setProperty('--text-secondary', '#495057');
            document.documentElement.style.setProperty('--card-bg', '#ffffff');
            document.documentElement.style.setProperty('--card-border', '#dee2e6');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            
            // Remove light theme class
            document.body.classList.remove('light-theme');
            
            // Reset to dark theme variables
            document.documentElement.style.setProperty('--primary-dark', '#0a0a0f');
            document.documentElement.style.setProperty('--secondary-dark', '#12121a');
            document.documentElement.style.setProperty('--text-primary', '#f0f0f0');
            document.documentElement.style.setProperty('--text-secondary', '#b0b0c0');
            document.documentElement.style.setProperty('--card-bg', '#1a1a24');
            document.documentElement.style.setProperty('--card-border', '#2a2a35');
        }
    });
    
    // ============================================
    // FORM VALIDATION & SUBMISSION
    // ============================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // ============================================
    // NOTIFICATION SYSTEM
    // ============================================
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        // Set icon based on type
        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'error') icon = 'exclamation-circle';
        if (type === 'warning') icon = 'exclamation-triangle';
        
        notification.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            closeNotification(notification);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                closeNotification(notification);
            }
        }, 5000);
    }
    
    function closeNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }
    
    // Add notification styles dynamically
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background-color: var(--card-bg);
            border-left: 4px solid var(--accent-color);
            border-radius: 5px;
            box-shadow: var(--shadow-heavy);
            display: flex;
            align-items: center;
            gap: 0.8rem;
            z-index: 10000;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            max-width: 350px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left-color: var(--success-color);
        }
        
        .notification.success i {
            color: var(--success-color);
        }
        
        .notification.error {
            border-left-color: var(--error-color);
        }
        
        .notification.error i {
            color: var(--error-color);
        }
        
        .notification.warning {
            border-left-color: var(--warning-color);
        }
        
        .notification.warning i {
            color: var(--warning-color);
        }
        
        .notification i {
            font-size: 1.2rem;
        }
        
        .notification span {
            flex: 1;
            color: var(--text-primary);
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            font-size: 1rem;
            transition: var(--transition-fast);
        }
        
        .notification-close:hover {
            color: var(--accent-color);
        }
    `;
    document.head.appendChild(notificationStyles);
    
    // ============================================
    // IMAGE LAZY LOADING
    // ============================================
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.classList.add('loaded');
        });
    }
    
    // ============================================
    // TYPING EFFECT FOR HERO SECTION (Optional)
    // ============================================
    
    // Uncomment this section if you want a typing effect
    /*
    const heroDescription = document.querySelector('.hero-description');
    const originalText = heroDescription.textContent;
    
    heroDescription.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            heroDescription.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    
    // Start typing effect after loading
    setTimeout(typeWriter, 2200);
    */
    
    // ============================================
    // PROJECT CARD INTERACTIONS
    // ============================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add a subtle shake effect to the card
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'cardShake 0.5s ease';
            }, 10);
        });
    });
    
    // Add card shake animation
    const cardShakeAnimation = document.createElement('style');
    cardShakeAnimation.textContent = `
        @keyframes cardShake {
            0%, 100% { transform: translateY(-10px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(1deg); }
            75% { transform: translateY(-10px) rotate(-1deg); }
        }
    `;
    document.head.appendChild(cardShakeAnimation);
    
    // ============================================
    // PROFILE IMAGE INTERACTION
    // ============================================
    
    const profileImg = document.getElementById('profile-img');
    
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transform = 'scale(1.05)';
        });
        
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1)';
        });
        
        // Add click effect to show a modal (optional)
        profileImg.addEventListener('click', () => {
            showNotification('Hello! This is Kavindana - a creative developer and storyteller from Sri Lanka.', 'info');
        });
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // PARALLAX EFFECT FOR HERO BACKGROUND
    // ============================================
    
    const heroBackground = document.querySelector('.hero-background');
    
    window.addEventListener('scroll', () => {
        if (heroBackground) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Apply parallax effect to floating shapes
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = 0.2 + (index * 0.1);
                shape.style.transform = `translateY(${rate * speed}px)`;
            });
        }
    });
    
    // ============================================
    // INITIALIZE ALL COMPONENTS
    // ============================================
    
    console.log('Portfolio website loaded successfully!');
    console.log('Welcome to Kavindana\'s creative digital space.');
    
    // Trigger a welcome notification
    setTimeout(() => {
        showNotification('Welcome to my portfolio! Explore my creative journey.', 'info');
    }, 2500);
});