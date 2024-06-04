import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-image">
          <img src="/images/as.jpg" alt="Frontend Developer" />
        </div>
        <h2>Frontend Developer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at mauris eu ex aliquam blandit.</p>
        <div className="social-media">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="contact-info">
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="/images/developr.jpg" alt="Frontend Developer" />
        </div>
        <h2>Frontend Developer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at mauris eu ex aliquam blandit.</p>
        <div className="social-media">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="contact-info">
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="/images/as.jpg" alt="Frontend Developer" />
        </div>
        <h2>Frontend Developer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at mauris eu ex aliquam blandit.</p>
        <div className="social-media">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="contact-info">
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default Services;