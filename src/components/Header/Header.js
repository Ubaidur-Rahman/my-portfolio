import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import React, { useEffect } from 'react';
import Tilt from 'react-tilt';
import resume from './../../Resume-of-Ubaidur.pdf';
import './Header.css';

const Header = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <header>
        
        
            <h1 className="fixed-part row">
            
                <div data-aos="flip-right">
                    <Tilt className="Tilt" options={{ max: 50 }} >
                        <div className="Tilt-inner">
                            Hi! I'm Ubaidur <span className="name-color">Rahman</span> <br />
                            I am a -
                        <div className="changing-part">
                                <span className="changing-text">
                                    Web Developer!<br />
                                JS Developer!<br />
                                Web Designer!<br />
                                React Developer!<br />
                                </span>
                            </div>
                        </div>
                    </Tilt>
                    <a className="align-items-end" rel="noreferrer" href={resume} target="_blank" download="Resume-of-ubaidur"><button className="btn custom-btn-bg m-3" >Download Resume <FontAwesomeIcon icon={faFileDownload} /> </button></a>
                </div>
                
            </h1>
            
            
        </header>
    );
};

export default Header;