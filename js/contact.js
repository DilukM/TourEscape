// Contact Page Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.contact-hero');

    // Form interaction effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // Smooth scroll for anchor links
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

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            // Validate form data
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all required fields');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Validate phone number if provided
            if (formData.phone) {
                const phoneRegex = /^\+?[\d\s-]{10,}$/;
                if (!phoneRegex.test(formData.phone)) {
                    alert('Please enter a valid phone number');
                    return;
                }
            }

            
            console.log('Form submitted:', formData);

           
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }


     // Add hover effects to contact details
    const contactDetails = document.querySelectorAll('.contact-detail');
    contactDetails.forEach(detail => {
        detail.addEventListener('mouseenter', () => {
            detail.style.transform = 'translateX(5px)';
            const icon = detail.querySelector('i');
            icon.style.color = '#007bff';
        });

        detail.addEventListener('mouseleave', () => {
            detail.style.transform = 'translateX(0)';
            const icon = detail.querySelector('i');
            icon.style.color = '';
        });
    });
    
        // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2)';
            link.style.backgroundColor = '#007bff';
            link.style.color = 'white';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.backgroundColor = '';
            link.style.color = '';
        });

        // Add click handler for social links
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = link.querySelector('i').className.split('-')[1];
            console.log(`Opening ${platform} profile`);
            // You can implement your own logic here for social media links
        });
    });

}); 