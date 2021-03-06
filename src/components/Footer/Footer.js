import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import './Footer.css';




const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (
        <footer className="footer-section">
            <div className="container-fluid p-3">
                <h2 className='divider text-center component-title'>Get In Touch</h2>

                <div className="footer-cta pt-5 pb-5">
                    <div className="footer-social-icon mb-5 text-center">
                        <a rel="noreferrer" href="https://web.facebook.com/ubaidurarian/" target="_blank"><FontAwesomeIcon icon={faFacebookF} className="socialIcon facebook-bg" /></a>
                        <a rel="noreferrer" href="https://twitter.com/ubaidurarian" target="_blank"><FontAwesomeIcon icon={faTwitter} className="socialIcon twitter-bg" /></a>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/ubaidurarian/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="socialIcon linkedIn-bg" /></a>
                        <a rel="noreferrer" href="https://github.com/Ubaidur-Rahman" target="_blank"><FontAwesomeIcon icon={faGithub} className="socialIcon github-bg" /></a>
                    </div>
                    <div className="row gx-2">
                        <div data-aos="flip-right" className="col-xl-4  col-md-4">
                            <div className="single-cta cta-hover p-5">
                            <Tilt className="Tilt" options={{ max: 25 }}  >
                                <div className="Tilt-inner"> 
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
                                <div className="cta-text">
                                    <h4>Find Me</h4>
                                    <span>3180 Shibnagor, Kanaighat, Sylhet</span>
                                </div></div>
                                </Tilt>
                            </div>
                        </div>
                        <div data-aos="flip-right" className="col-xl-4 col-md-4 ">
                            <div className="single-cta cta-hover p-5">
                                
                                
                                <Tilt className="Tilt" options={{ max: 25 }}  >
                                <div className="Tilt-inner"> <FontAwesomeIcon icon={faPhone} className='icon' /><div className="cta-text">
                                    <h4>Call Me</h4>
                                    <span>+8801303865327</span>
                                </div> </div>
                                </Tilt>
                            </div>
                        </div>
                        <div data-aos="flip-right" className="col-xl-4 col-md-4">
                            <div className="single-cta cta-hover p-5">
                            <Tilt className="Tilt" options={{ max: 25 }}  >
                                <div className="Tilt-inner"> 
                                <FontAwesomeIcon icon={faEnvelopeOpen} className='icon' />
                                <div className="cta-text">
                                    <h4>Mail To Me</h4>
                                    <span>ubaidurrahmanmcc@gmail.com</span>
                                </div></div>
                                </Tilt>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="copyright-area">
                    <div className="">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>&copy; 2021 All Right Reserved <a rel="noreferrer" href="https://web.facebook.com/ubaidurarian/" >Ubaidur</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/" className=" custom-nav-style " >Home</Link></li>
                                        <li><Link to="/aboutMe" className=" custom-nav-style " >About Me</Link></li>
                                        <li><Link to="/projects" className=" custom-nav-style " >Projects</Link></li>
                                        <li><Link to="/blogs" className=" custom-nav-style " >Blogs</Link></li>
                                        <li><Link to="/contact" className=" custom-nav-style " >Contact</Link></li>
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