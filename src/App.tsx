import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Style & Style</h2>
            <span>Men's Hair Salon</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
            <a onClick={() => scrollToSection('services')} className="nav-link">Services</a>
            <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
            <a onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Style & Style</h1>
          <h2>Premium Men's Hair Salon</h2>
          <p>Where style meets sophistication. Experience the finest cuts and grooming services.</p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Book Appointment
          </button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h3>Haircuts</h3>
              <p>Professional cuts tailored to your style and face shape</p>
              <span className="price">$25 - $45</span>
            </div>
            <div className="service-card">
              <div className="service-icon">💈</div>
              <h3>Beard Trim</h3>
              <p>Expert beard grooming and shaping services</p>
              <span className="price">$15 - $25</span>
            </div>
            <div className="service-card">
              <div className="service-icon">🧴</div>
              <h3>Hair Styling</h3>
              <p>Professional styling for special occasions</p>
              <span className="price">$20 - $35</span>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Hair Coloring</h3>
              <p>Professional hair coloring and highlights</p>
              <span className="price">$45 - $85</span>
            </div>
            <div className="service-card">
              <div className="service-icon">💆</div>
              <h3>Scalp Treatment</h3>
              <p>Relaxing scalp massage and treatment</p>
              <span className="price">$30 - $50</span>
            </div>
            <div className="service-card">
              <div className="service-icon">👔</div>
              <h3>Executive Package</h3>
              <p>Complete grooming package for busy professionals</p>
              <span className="price">$75 - $120</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Style & Style</h2>
              <p>Founded with a passion for excellence, Style & Style has been the premier destination for men's grooming since 2010. Our experienced stylists are dedicated to creating the perfect look that reflects your personality and lifestyle.</p>
              <p>We use only the finest products and latest techniques to ensure you leave our salon looking and feeling your best. From classic cuts to modern styles, we specialize in all types of men's hair and grooming needs.</p>
              <div className="about-stats">
                <div className="stat">
                  <h3>13+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>5000+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Expert Stylists</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Salon Interior</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item">
                <div className="gallery-placeholder">
                  <span>Style {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>123 Style Street, Downtown<br />City, State 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>info@styleandstyle.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <h4>Hours</h4>
                  <p>Mon-Sat: 9AM - 8PM<br />Sunday: 10AM - 6PM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Book Appointment</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="haircut">Haircut</option>
                    <option value="beard-trim">Beard Trim</option>
                    <option value="styling">Hair Styling</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="scalp-treatment">Scalp Treatment</option>
                    <option value="executive">Executive Package</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Special Requests (Optional)" rows={4}></textarea>
                </div>
                <button type="submit" className="submit-button">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Style & Style</h3>
              <p>Premium men's hair salon where style meets sophistication.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a onClick={() => scrollToSection('services')}>Services</a>
              <a onClick={() => scrollToSection('about')}>About</a>
              <a onClick={() => scrollToSection('gallery')}>Gallery</a>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <a>Haircuts</a>
              <a>Beard Trim</a>
              <a>Hair Styling</a>
              <a>Hair Coloring</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📱</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Style & Style. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
