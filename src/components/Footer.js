import React from 'react'
import './Footer.css';
import logo from '../assets/images/logo/white-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="footer padding-y-120">
        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-xl-3 col-sm-6 col-xsm-6">
              <div className="footer-item">
                <div className="footer-item__logo">
                  <a href="index.html"> <img src={logo} alt="" /></a>
                </div>
                <p className="footer-item__desc">It is a long established fact that a reader will be distracted</p>
                <ul className="social-list">
                  <li className="social-list__item">
                    <a href="https://www.facebook.com" className="social-list__link flx-center">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="https://www.twitter.com" className="social-list__link flx-center">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="https://www.linkedin.com" className="social-list__link flx-center">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="https://www.pinterest.com" className="social-list__link flx-center">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xsm-6">
              <div className="footer-item ms-xl-5">
                <h6 className="footer-item__title">Useful Links</h6>
                <ul className="footer-menu">
                  <li className="footer-menu__item"><a href="blog-classic.html" className="footer-menu__link">Blog</a></li>
                  <li className="footer-menu__item"><a href="faq.html" className="footer-menu__link">FAQ</a></li>
                  <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Property</a></li>
                  <li className="footer-menu__item"><a href="about.html" className="footer-menu__link">About Us</a></li>
                  <li className="footer-menu__item"><a href="contact.html" className="footer-menu__link">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xsm-6">
              <div className="footer-item">
                <h6 className="footer-item__title">Services</h6>
                <ul className="footer-menu">
                  <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Reliable Rentals </a></li>
                  <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Golden Key Properties </a></li>
                  <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Swift Home Sales </a></li>
                  <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Elite Realty Services </a></li>
                  <li className="footer-menu__item"><a href="property.html" className="footer-menu__link">Dream Property Solutions </a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xsm-6">
              <div className="footer-item">
                <h6 className="footer-item__title">Our gallery</h6>
                <div className="gallery-list">
                  <div className="gallery-list__item">
                    <img src="assets/images/thumbs/gallery1.png" alt="" />
                    <a href="https://www.instagram.com" className="gallery-list__link"><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-list__item">
                    <img src="assets/images/thumbs/gallery2.png" alt="" />
                    <a href="https://www.instagram.com" className="gallery-list__link"><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-list__item">
                    <img src="assets/images/thumbs/gallery3.png" alt="" />
                    <a href="https://www.instagram.com" className="gallery-list__link"><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-list__item">
                    <img src="assets/images/thumbs/gallery4.png" alt="" />
                    <a href="https://www.instagram.com" className="gallery-list__link"><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-list__item">
                    <img src="assets/images/thumbs/gallery5.png" alt="" />
                    <a href="https://www.instagram.com" className="gallery-list__link"><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="gallery-list__item">
                    <img src="assets/images/thumbs/gallery6.png" alt="" />
                    <a href="https://www.instagram.com" className="gallery-list__link"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-footer">
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text"> &copy; CityScape 2024 | All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#" className="footer-link">Terms & Condition</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
