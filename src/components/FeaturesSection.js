import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-cloud",
      title: "Cloud Hosting",
      description: "Server cloud berkualitas tinggi dengan uptime 99.9% untuk menjamin bot Anda selalu online"
    },
    {
      icon: "fas fa-shield-alt", 
      title: "Aman & Terpercaya",
      description: "SSL encryption dan backup otomatis untuk melindungi data dan conversation bot Anda"
    },
    {
      icon: "fas fa-rocket",
      title: "Setup Cepat",
      description: "Proses setup hanya membutuhkan 5-10 menit, bot langsung aktif dan siap digunakan"
    },
    {
      icon: "fas fa-moon",
      title: "Support Ketika Malam",
      description: "Tim technical support tersedia khusus di waktu malam via WhatsApp dan Telegram"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Multi Device",
      description: "Bot dapat diakses dari berbagai device dan mendukung fitur WhatsApp terbaru"
    },
    {
      icon: "fas fa-tools",
      title: "Fitur Lengkap",
      description: "300+ fitur yang terdiri dari Menu group, tools, downloader, search, sticker untuk hiburan"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Fitur Unggulan Bot WhatsApp</h2>
          <p className="section-subtitle">
            VZ Botz Indonesia menyediakan solusi hosting bot WhatsApp terdepan dengan teknologi cloud modern, 
            uptime tinggi, dan dukungan teknis 24/7 untuk memastikan bot Anda selalu aktif dan responsif.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features-section {
          padding: 80px 0;
          background: white;
          position: relative;
        }

        .features-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .features-header .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .features-header .section-subtitle {
          font-size: 1.1rem;
          color: #718096;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          border-color: rgba(102, 126, 234, 0.2);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: scale(1.1);
        }

        .feature-icon i {
          font-size: 2rem;
          color: #667eea;
          transition: color 0.3s ease;
        }

        .feature-card:hover .feature-icon i {
          color: white;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .feature-card:hover .feature-title {
          color: #667eea;
        }

        .feature-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #718096;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 60px 0;
          }

          .features-header .section-title {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
          }

          .feature-icon {
            width: 70px;
            height: 70px;
          }

          .feature-icon i {
            font-size: 1.8rem;
          }

          .feature-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;