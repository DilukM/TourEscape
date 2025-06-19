class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-brand">
                        <h3>TourEscape</h3>
                        <p>Your journey begins with us. Discover the world's most beautiful destinations and create unforgettable memories.</p>
                    </div>
                    
                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <a href="/pages/destinations.html">Destinations</a>
                        <a href="/pages/packages.html">Packages</a>
                        <a href="/pages/attractions.html">Attractions</a>
                        <a href="/pages/about.html">About Us</a>
                        <a href="/pages/contact.html">Contact</a>
                    </div>
                    
                    <div class="footer-social">
                        <h4>Connect With Us</h4>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} TourEscape. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent); 