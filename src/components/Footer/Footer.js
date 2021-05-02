import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
        <div className="container-fluid p-3">
        <h2 className='text-center fs-2 text-white'>Get In Touch</h2>
            <div className="footer-cta pt-5 pb-5">
            <div className="footer-social-icon mb-5 text-center">
                                <span>Follow Me</span>
                                <a href="https://web.facebook.com/ubaidurarian/"><FontAwesomeIcon icon={faFacebookF} className="socialIcon facebook-bg"/></a>
                                <a href="https://twitter.com/ubaidurarian"><FontAwesomeIcon icon={faTwitter}  className="socialIcon twitter-bg"/></a>
                                <a href="https://www.linkedin.com/in/ubaidurarian/"><FontAwesomeIcon icon={faLinkedinIn} className="socialIcon linkedIn-bg"/></a>
                            </div>
                <div className="row ">
                    <div className="col-xl-4 gx-5 col-md-4">
                        <div className="single-cta cta-hover p-5">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
                            <div className="cta-text">
                                <h4>Find Me</h4>
                                <span>3180 Shibnagor, Kanaighat, Sylhet</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 ">
                        <div className="single-cta cta-hover p-5">
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                            <div className="cta-text">
                                <h4>Call Me</h4>
                                <span>+8801303865327</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4">
                        <div className="single-cta cta-hover p-5 me-5">
                            
                            <FontAwesomeIcon icon={faEnvelopeOpen} className='icon'/>
                            <div className="cta-text">
                                <h4>Mail To Me</h4>
                                <span>ubaidurrahmanmcc@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="copyright-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>&copy; 2021 All Right Reserved <a href="https://web.facebook.com/ubaidurarian/">Ubaidur</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Me</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </footer>
    );
};

export default Footer;