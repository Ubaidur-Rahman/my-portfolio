import React from 'react';
import { Link } from 'react-router-dom';
import Resume from '../../Resume-of-Ubaidur.pdf';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-lg-top bg-navbar">
            <div className="container-fluid">
                {/* <Link to="/" className="text-white"><img style={{ height: '66px' }} src="" alt="" /></Link> */}
                <h2 className="text-white">UBAIDUR RAHMAN</h2>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse topnav " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mx-5 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link custom-nav-style ms-3 active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutMe" className="nav-link custom-nav-style ms-3" >About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link custom-nav-style ms-3" >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link custom-nav-style ms-3" >Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link custom-nav-style ms-3" >Contact</Link>
                        </li>
                    </ul>
                    <a rel="noreferrer" href={Resume} target="_blank" download="Resume-of-ubaidur"><button className="btn custom-btn-bg my-2 my-sm-0" >Download Resume</button></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;