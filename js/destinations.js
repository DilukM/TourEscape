// Destinations page specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Modal Management
    const createModal = () => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    };

    const showModal = (content) => {
        const modal = createModal();
        const modalBody = modal.querySelector('.modal-body');
        const closeBtn = modal.querySelector('.close-modal');

        modalBody.innerHTML = content;
        modal.style.display = 'block';

        const closeModal = () => {
            modal.style.display = 'none';
            modal.remove();
        };

        closeBtn.onclick = closeModal;
        window.onclick = (event) => {
            if (event.target === modal) {
                closeModal();
            }
        };
    };

    // Destination data
    const destinationData = {
        mountain: {
            title: 'Mountain Retreat',
            description: 'Experience the serenity of nature in our mountain retreats',
            details: `
                <h2>Mountain Retreat Experience</h2>
                <div class="modal-grid">
                    <div class="modal-info">
                        <h3>Package Details</h3>
                        <ul>
                            <li><i class="fas fa-check"></i> Luxury mountain lodge accommodation</li>
                            <li><i class="fas fa-check"></i> Guided hiking tours</li>
                            <li><i class="fas fa-check"></i> Mountain biking trails</li>
                            <li><i class="fas fa-check"></i> Evening campfire sessions</li>
                            <li><i class="fas fa-check"></i> Local cuisine cooking classes</li>
                        </ul>
                        <h3>Best Time to Visit</h3>
                        <p>Spring (March-May) and Fall (September-November)</p>
                        <h3>Duration</h3>
                        <p>3-7 days recommended</p>
                        <button class="modal-button">Book Now</button>
                    </div>
                    <div class="modal-gallery">
                        <div class="gallery-item"><i class="fas fa-mountain"></i></div>
                        <div class="gallery-item"><i class="fas fa-tree"></i></div>
                        <div class="gallery-item"><i class="fas fa-campground"></i></div>
                    </div>
                </div>
            `
        },
        beach: {
            title: 'Beach Paradise',
            description: 'Relax on pristine beaches with crystal clear waters',
            details: `
                <h2>Beach Paradise Experience</h2>
                <div class="modal-grid">
                    <div class="modal-info">
                        <h3>Package Details</h3>
                        <ul>
                            <li><i class="fas fa-check"></i> Beachfront resort accommodation</li>
                            <li><i class="fas fa-check"></i> Water sports activities</li>
                            <li><i class="fas fa-check"></i> Sunset cruises</li>
                            <li><i class="fas fa-check"></i> Snorkeling and diving</li>
                            <li><i class="fas fa-check"></i> Beach yoga sessions</li>
                        </ul>
                        <h3>Best Time to Visit</h3>
                        <p>Year-round, peak season (December-April)</p>
                        <h3>Duration</h3>
                        <p>5-10 days recommended</p>
                        <button class="modal-button">Book Now</button>
                    </div>
                    <div class="modal-gallery">
                        <div class="gallery-item"><i class="fas fa-umbrella-beach"></i></div>
                        <div class="gallery-item"><i class="fas fa-water"></i></div>
                        <div class="gallery-item"><i class="fas fa-sun"></i></div>
                    </div>
                </div>
            `
        },
        urban: {
            title: 'Urban Explorer',
            description: 'Discover vibrant cities and their unique cultures',
            details: `
                <h2>Urban Explorer Experience</h2>
                <div class="modal-grid">
                    <div class="modal-info">
                        <h3>Package Details</h3>
                        <ul>
                            <li><i class="fas fa-check"></i> City center hotel accommodation</li>
                            <li><i class="fas fa-check"></i> Guided city tours</li>
                            <li><i class="fas fa-check"></i> Museum passes</li>
                            <li><i class="fas fa-check"></i> Local food tours</li>
                            <li><i class="fas fa-check"></i> Nightlife experiences</li>
                        </ul>
                        <h3>Best Time to Visit</h3>
                        <p>Spring and Fall for mild weather</p>
                        <h3>Duration</h3>
                        <p>4-7 days recommended</p>
                        <button class="modal-button">Book Now</button>
                    </div>
                    <div class="modal-gallery">
                        <div class="gallery-item"><i class="fas fa-city"></i></div>
                        <div class="gallery-item"><i class="fas fa-building"></i></div>
                        <div class="gallery-item"><i class="fas fa-utensils"></i></div>
                    </div>
                </div>
            `
        }
    };

    // Get all destination cards
    const destinationCards = document.querySelectorAll('.destination-card');

    // Add hover effect and click handling to each card
    destinationCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });

        // Handle click on View Details button
        const viewDetailsBtn = card.querySelector('.destination-cta');
        viewDetailsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const destinationName = card.querySelector('h3').textContent;
            const destinationKey = Object.keys(destinationData).find(key =>
                destinationData[key].title === destinationName
            );

            if (destinationKey) {
                showModal(destinationData[destinationKey].details);
            }
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
});
