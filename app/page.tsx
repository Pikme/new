"use client";

import "./globals.css";

export default function Home() {
  return (
    <>

{/* Navigation Header */}
<header className="navbar">
    <div className="container">
        <div className="navbar-content">
            <div className="logo">
                <span className="logo-icon">https://pikme.org/images/logo.png</span>
            </div>
            <nav className="nav-menu">
                <a href="#packages" className="nav-link">Packages</a>
                <a href="#itinerary" className="nav-link">Itinerary</a>
                <a href="#faq" className="nav-link">FAQ</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <button className="cta-button">Book Now</button>
            <button className="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

{/* Mobile Menu */}
<nav className="mobile-menu" id="mobileMenu">
    <a href="#packages" className="mobile-nav-link">Packages</a>
    <a href="#itinerary" className="mobile-nav-link">Itinerary</a>
    <a href="#faq" className="mobile-nav-link">FAQ</a>
    <a href="#contact" className="mobile-nav-link">Contact</a>
    <button className="cta-button" style={{width: '100%', marginTop: '1rem'}}>Book Now</button>
</nav>

{/* Hero Section */}
<section className="hero">
    <div className="hero-content">
        <h1 className="hero-title">Sacred Abode Of Varanasi Near Pindhi Varanasi - 2024</h1>
        <p className="hero-subtitle">Experience the spiritual essence of India's holiest cities</p>
        <button className="hero-cta">Explore Packages</button>
    </div>
</section>

{/* Quick Booking Section */}
<section className="booking-section">
    <div className="container">
        <div className="booking-header">
            <h2>Quick Booking</h2>
            <p>Select your preferred destination and duration</p>
        </div>
        <div className="booking-grid">
            <div className="booking-card">
                <div className="booking-destination">Katra - Jammu</div>
                <div className="booking-stay">Stay: HK Clarks INN OR Similar</div>
                <div className="booking-duration">Duration: 1 Night</div>
                <button className="book-btn">Select</button>
            </div>
            <div className="booking-card">
                <div className="booking-destination">Amritsar - Punjab</div>
                <div className="booking-stay">Stay: Holiday INN OR Similar</div>
                <div className="booking-duration">Duration: 2 Nights</div>
                <button className="book-btn">Select</button>
            </div>
            <div className="booking-card">
                <div className="booking-destination">Varanasi - Uttar Pradesh</div>
                <div className="booking-stay">Stay: Premium Hotel OR Similar</div>
                <div className="booking-duration">Duration: 3 Nights</div>
                <button className="book-btn">Select</button>
            </div>
        </div>
    </div>
</section>

{/* Package Details */}
<section className="packages-section" id="packages">
    <div className="container">
        <h2 className="section-title">Our Premium Packages</h2>
        <p className="section-subtitle">Carefully curated spiritual journeys</p>

        <div className="package-card featured">
            <div className="package-header">
                <h3>Kashi Vishwanath Tour Package from Bangalore</h3>
                <span className="package-badge">Popular</span>
            </div>
            <p className="package-description">
                Embark on a transformative journey to Varanasi, the spiritual heart of India. This meticulously planned tour combines sacred temple visits with authentic cultural experiences. Witness the mesmerizing Ganga Aarti, explore ancient ghats, and immerse yourself in the spiritual ambiance that has attracted pilgrims for centuries.
            </p>
            <div className="package-highlights">
                <div className="highlight">
                    <span className="highlight-icon">🕉️</span>
                    <span>Temple Visits</span>
                </div>
                <div className="highlight">
                    <span className="highlight-icon">🌊</span>
                    <span>Ganga Aarti</span>
                </div>
                <div className="highlight">
                    <span className="highlight-icon">🏨</span>
                    <span>Premium Stay</span>
                </div>
                <div className="highlight">
                    <span className="highlight-icon">🍽️</span>
                    <span>Meals Included</span>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Itinerary Section */}
<section className="itinerary-section" id="itinerary">
    <div className="container">
        <h2 className="section-title">Your Itinerary</h2>
        <p className="section-subtitle">Day-by-day breakdown of your spiritual journey</p>

        <div className="itinerary-timeline">
            <div className="timeline-item">
                <div className="timeline-marker">
                    <span className="day-number">Day 1</span>
                </div>
                <div className="timeline-content">
                    <h4>Arrival & Orientation</h4>
                    <p>Arrive at Varanasi. Check-in at your hotel. Evening Ganga Aarti at Dashashwamedh Ghat. Dinner and overnight stay.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker">
                    <span className="day-number">Day 2</span>
                </div>
                <div className="timeline-content">
                    <h4>Temple & Ghat Exploration</h4>
                    <p>Early morning boat ride on the Ganges. Visit Kashi Vishwanath Temple. Explore the ancient ghats. Lunch at a local restaurant. Afternoon rest and spa.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker">
                    <span className="day-number">Day 3</span>
                </div>
                <div className="timeline-content">
                    <h4>Cultural Immersion</h4>
                    <p>Visit Sarnath Buddhist temple complex. Explore local markets. Evening meditation session. Farewell dinner with cultural performance.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-marker">
                    <span className="day-number">Day 4</span>
                </div>
                <div className="timeline-content">
                    <h4>Departure</h4>
                    <p>Breakfast and departure. Transfer to airport. End of tour with cherished memories.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Inclusions & Exclusions */}
<section className="inclusions-section">
    <div className="container">
        <div className="inclusions-grid">
            <div className="inclusions-card">
                <h3>✓ Inclusions</h3>
                <ul>
                    <li>Accommodation in 3-star hotels</li>
                    <li>Daily breakfast and dinner</li>
                    <li>All sightseeing tours</li>
                    <li>Professional guide services</li>
                    <li>Airport transfers</li>
                    <li>Travel insurance</li>
                </ul>
            </div>
            <div className="inclusions-card exclusions">
                <h3>✗ Exclusions</h3>
                <ul>
                    <li>International flights</li>
                    <li>Personal expenses</li>
                    <li>Meals not mentioned</li>
                    <li>Optional activities</li>
                    <li>Tips and gratuities</li>
                    <li>Travel visa fees</li>
                </ul>
            </div>
        </div>
    </div>
</section>

{/* Cancellation & Payment */}
<section className="policies-section">
    <div className="container">
        <h2 className="section-title">Cancellation Policy & Payment Terms</h2>

        <div className="policy-grid">
            <div className="policy-card">
                <h4>Cancellation Policy</h4>
                <table className="policy-table">
                    <tr>
                        <th>Days Before</th>
                        <th>Refund %</th>
                    </tr>
                    <tr>
                        <td>30+ days</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>15-29 days</td>
                        <td>75%</td>
                    </tr>
                    <tr>
                        <td>7-14 days</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>Less than 7</td>
                        <td>0%</td>
                    </tr>
                </table>
            </div>
            <div className="policy-card">
                <h4>Payment Terms</h4>
                <table className="policy-table">
                    <tr>
                        <th>Payment Stage</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Booking</td>
                        <td>30%</td>
                    </tr>
                    <tr>
                        <td>30 Days Before</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>7 Days Before</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>100%</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>

{/* FAQ Section */}
<section className="faq-section" id="faq">
    <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-container">
            <div className="faq-item">
                <button className="faq-question">
                    <span>What is the best time to visit Varanasi?</span>
                    <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                    <p>The best time to visit Varanasi is from October to March when the weather is pleasant and cool. Avoid the summer months (April-June) as it gets extremely hot.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question">
                    <span>Are meals included in the package?</span>
                    <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                    <p>Yes, breakfast and dinner are included in all our packages. Lunch can be taken at your preferred restaurant, and we can provide recommendations.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question">
                    <span>What documents do I need for the tour?</span>
                    <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                    <p>You'll need a valid passport, visa (if required), travel insurance, and any required vaccination certificates. We'll provide a detailed checklist upon booking.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question">
                    <span>Can I customize my itinerary?</span>
                    <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                    <p>Absolutely! We offer customizable packages. Contact our team to discuss your preferences and we'll create a personalized itinerary for you.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question">
                    <span>What is the group size?</span>
                    <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                    <p>Our groups typically consist of 10-20 people to ensure a personalized experience. Private tours for smaller groups are also available.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question">
                    <span>Is travel insurance included?</span>
                    <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                    <p>Yes, basic travel insurance is included. We recommend purchasing comprehensive travel insurance for additional coverage.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Contact Section */}
<section className="contact-section" id="contact">
    <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have questions? We're here to help</p>

        <div className="contact-grid">
            <div className="contact-info">
                <div className="info-item">
                    <span className="info-icon">📞</span>
                    <div>
                        <h4>Phone</h4>
                        <p>+91 8860 1234</p>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">📧</span>
                    <div>
                        <h4>Email</h4>
                        <p>info@sacredabode.com</p>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">📍</span>
                    <div>
                        <h4>Address</h4>
                        <p>Varanasi, Uttar Pradesh, India</p>
                    </div>
                </div>
            </div>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows={5} required></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    </div>
</section>

{/* Footer */}
<footer className="footer">
    <div className="container">
        <div className="footer-grid">
            <div className="footer-section">
                <h4>About Us</h4>
                <p>Sacred Abode specializes in spiritual tours across India's holiest destinations.</p>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#packages">Packages</a></li>
                    <li><a href="#itinerary">Itinerary</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">Twitter</a>
                </div>
            </div>
            <div className="footer-section">
                <h4>Certifications</h4>
                <p>ISO 9001:2015 Certified</p>
                <p>IATA Approved</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Sacred Abode. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
        </div>
    </div>
</footer>

<script src="./script.js"></script>

    </>
  );
}
