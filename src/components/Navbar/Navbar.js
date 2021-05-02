import React from 'react';
import Resume from '../../Resume-of-Ubaidur.pdf';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ubaidur</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Contact</a>
                        </li>
                    </ul>
                    <a href={Resume} target="_blank" download="Resume-of-ubaidur"><button className="btn btn-outline-success my-2 my-sm-0" >Download Resume</button></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;