class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get the current page path to determine correct relative paths
        const currentPath = window.location.pathname;
        const isInPages = currentPath.includes('/pages/');

        // Set the base path for navigation links
        const basePath = isInPages ? '../' : './';

        this.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <a href="${basePath}pages/home.html" class="logo">TourEscape</a>
                    <ul class="nav-links">
                        <li><a href="${basePath}pages/home.html">Home</a></li>
                        <li><a href="${basePath}pages/destinations.html">Destinations</a></li>
                        <li><a href="${basePath}pages/packages.html">Packages</a></li>
                        <li><a href="${basePath}pages/about.html">About</a></li>
                        <li><a href="${basePath}pages/contact.html">Contact</a></li>
                    </ul>
                    <div class="mobile-menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        `;

        // Add click event listeners to handle navigation
        this.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                try {
                    window.location.href = href;
                } catch (error) {
                    console.error('Navigation error:', error);
                    alert('Sorry, there was an error loading the page.');
                }
            });
        });

        // Mobile menu functionality
        const mobileMenuBtn = this.querySelector('.mobile-menu-btn');
        const navLinks = this.querySelector('.nav-links');

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.nav-container')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            });
        }
    }
}

customElements.define('nav-bar', Navbar); 