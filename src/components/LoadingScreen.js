import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo-container">
          <i className="fas fa-robot loading-logo"></i>
          <h1 className="loading-title">VZ Botz Indonesia</h1>
        </div>
        <div className="loading-spinner-container">
          <div className="loading-spinner-large"></div>
        </div>
        <p className="loading-text">Memuat aplikasi bot WhatsApp...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;