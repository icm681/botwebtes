import React from 'react';
import './HomePage.css';
import FeaturesSection from './FeaturesSection';

const HomePage = ({ onGoToJoin }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <nav className="container">
          <div className="logo">
            <i className="fas fa-robot"></i>
            <span>VZ Botz Indonesia</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Beranda</a></li>
            <li><a href="#features" onClick={() => scrollToSection('features')}>Fitur</a></li>
            <li><a href="#pricing" onClick={() => scrollToSection('pricing')}>Harga</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>Tentang</a></li>
            <li><a href="#contact" onClick={onGoToJoin} className="join-btn">Kontak</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">VzBotz Indonesia</h1>
            <p className="hero-subtitle">Web Hosting Bot WhatsApp Gratis Deploy - Solusi Terdepan untuk Bisnis Anda</p>
            <button onClick={() => scrollToSection('pricing')} className="cta-button">
              <i className="fas fa-rocket"></i> Mulai Deploy Bot Anda
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Paket Hosting Bot WhatsApp</h2>
          <p className="section-subtitle">Pilih paket yang sesuai dengan kebutuhan dan budget Anda</p>
          <div className="pricing-grid">

            {/* Paket Trial */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="price">FREE</div>
                <div className="price-description">Paket Trial</div>
              </div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 7 hari trial</li>
                <li><i className="fas fa-check"></i> Nomor WhatsApp berbeda-beda</li>
                <li><i className="fas fa-check"></i> Bayar jika ingin lanjut full</li>
                <li><i className="fas fa-star"></i> Perform basic</li>
                <li><i className="fas fa-wifi"></i> Internet User</li>
              </ul>
              <button onClick={onGoToJoin} className="btn btn-primary">
                <i className="fas fa-gift"></i> Mulai Gratis
              </button>
            </div>

            {/* Paket Staf */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="price">Rp 3.000</div>
                <div className="price-description">Paket Staf</div>
              </div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 15 hari aktif</li>
                <li><i className="fas fa-shield-alt"></i> Garansi 4 hari</li>
                <li><i className="fas fa-star"></i> Perform basic</li>
                <li><i className="fas fa-wifi"></i> Internet User</li>
              </ul>
              <button onClick={onGoToJoin} className="btn btn-primary">
                <i className="fas fa-shopping-cart"></i> Pilih Paket
              </button>
            </div>

            {/* Paket Basic */}
            <div className="pricing-card featured">
              <div className="card-header">
                <div className="badge">POPULER</div>
                <div className="price">Rp 5.000</div>
                <div className="price-description">Paket Basic</div>
              </div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 27 hari aktif</li>
                <li><i className="fas fa-shield-alt"></i> Garansi 20 hari</li>
                <li><i className="fas fa-star"></i> Perform basic</li>
                <li><i className="fas fa-wifi"></i> Internet User</li>
              </ul>
              <button onClick={onGoToJoin} className="btn btn-featured">
                <i className="fas fa-shopping-cart"></i> Pilih Paket
              </button>
            </div>

            {/* Paket Premium */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="price">Rp 12.000</div>
                <div className="price-description">Paket Premium</div>
              </div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 60 hari aktif</li>
                <li><i className="fas fa-desktop"></i> Akses panel</li>
                <li><i className="fas fa-edit"></i> Bisa rename bot</li>
                <li><i className="fas fa-shield-alt"></i> Garansi full</li>
                <li><i className="fas fa-star"></i> Perform atas</li>
                <li><i className="fas fa-tools"></i> Gratis Nomor WhatsApp</li>
              </ul>
              <button onClick={onGoToJoin} className="btn btn-primary">
                <i className="fas fa-diamond"></i> Pilih Paket
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Tentang VzBotz Indonesia</h2>
              <p>VzBotz Indonesia adalah penyedia layanan hosting bot WhatsApp terpercaya yang dikembangkan oleh Hoshizora Group. Kami berkomitmen memberikan solusi hosting bot yang stabil, aman, dan mudah digunakan untuk semua kebutuhan bisnis Anda.</p>
              <p>Dengan pengalaman bertahun-tahun di bidang teknologi dan hosting, kami menyediakan berbagai paket yang sesuai dengan kebutuhan mulai dari personal hingga enterprise.</p>
              <p>Tim kami siap membantu Anda 24/7 untuk memastikan bot WhatsApp Anda berjalan dengan optimal dan memberikan performa terbaik.</p>
            </div>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Bot Aktif</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2025</span>
                <span className="stat-label">Since</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <i className="fas fa-robot"></i>
              <span>VZ Botz Indonesia</span>
            </div>
            <div className="social-links">
              <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              <a href="#" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 VzBotz Indonesia by Hoshizora Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;