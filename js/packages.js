// Packages page specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Get all package cards
    const packageCards = document.querySelectorAll('.package-card');

    // Add hover effect and click handling to each card
    packageCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });

        // Handle click on Book Now button
        const bookNowBtn = card.querySelector('.package-cta');
        bookNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const packageName = card.querySelector('h3').textContent;
            const packagePrice = card.querySelector('.price-tag').textContent;
            const packageDuration = card.querySelector('.package-duration').textContent;

            // Get all features
            const features = Array.from(card.querySelectorAll('.package-feature'))
                .map(feature => feature.textContent.trim())
                .join('\n');

            // You can implement your own logic here, for example:
            // - Show a booking form
            // - Add to cart functionality
            // - Navigate to a booking page
            console.log(`Booking package: ${packageName}`);

            // Example: Show an alert with package details (replace this with your preferred UI interaction)
            alert(`Package: ${packageName}\nPrice: ${packagePrice}\nDuration: ${packageDuration}\n\nFeatures:\n${features}`);
        });
    });

    // Add smooth scroll behavior for the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation for badges
    const badges = document.querySelectorAll('.package-badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.1)';
        });
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1)';
        });
    });
}); 