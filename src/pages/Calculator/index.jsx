import { useState } from "react";
import "./styles.scss";

const Calculator = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">QuickWeb</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a onClick={() => setMenuOpen(false)} href="#services">Services</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#process">Process</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#portfolio">Work</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#reviews">Reviews</a></li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="#contact"
              className="nav-btn"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* HERO */}
      {/* (baaki code same rahega – hero, services, etc.) */}

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Professional Websites <br /> Built for Growth
          </h1>
          <p>
            QuickWeb helps businesses create fast, modern and scalable websites
            that convert visitors into customers.
          </p>
          <a href="#contact" className="btn primary">
            Request a Quote
          </a>
        </div>

        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
            alt="Professional web design"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <h2>Services</h2>
        <div className="grid">
          <div className="card">
            <h3>Business Websites</h3>
            <p>Clean, fast and reliable websites for brands.</p>
          </div>
          <div className="card">
            <h3>Landing Pages</h3>
            <p>Conversion-focused pages for marketing campaigns.</p>
          </div>
          <div className="card">
            <h3>E-Commerce</h3>
            <p>Secure and scalable online stores.</p>
          </div>
          <div className="card">
            <h3>Website Redesign</h3>
            <p>Upgrade outdated websites with modern UI.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <h2>Our Process</h2>
        <div className="timeline">
          <span>Consultation</span>
          <span>Planning</span>
          <span>Design</span>
          <span>Development</span>
          <span>Launch</span>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio" id="portfolio">
        <h2>Recent Projects</h2>
        <div className="grid">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" />
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <h2>Client Testimonials</h2>

        <div className="review">
          ⭐⭐⭐⭐⭐
          <p>“QuickWeb delivered exactly what we needed.”</p>
          <span>— Marketing Consultant</span>
        </div>

        <div className="review">
          ⭐⭐⭐⭐⭐
          <p>“Excellent communication and structured workflow.”</p>
          <span>— Startup Founder</span>
        </div>

        <div className="review">
          ⭐⭐⭐⭐⭐
          <p>“Our website looks premium and works smoothly.”</p>
          <span>— Business Owner</span>
        </div>

        <div className="review">
          ⭐⭐⭐⭐⭐
          <p>“Professional approach and timely delivery.”</p>
          <span>— Product Manager</span>
        </div>

        <div className="review">
          ⭐⭐⭐⭐⭐
          <p>“Great post-launch support and reliability.”</p>
          <span>— Service Company</span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Start Your Project</h2>
        <p>Let’s discuss how we can help your business grow online.</p>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="btn primary"
          target="_blank"
          rel="noreferrer"
        >
          Contact via WhatsApp
        </a>
      </section>

      <footer>© 2026 QuickWeb. All rights reserved.</footer>
    </>
  );
};

export default Calculator;
