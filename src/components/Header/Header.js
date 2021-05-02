import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1 className="fixed-part">
                I am a 
                <div className="changing-part">
                    <span className="changing-text">
						 Web Developer ! <br />
                         JS Developer ! <br />
						 Web Designer ! <br />
                         React Developer ! <br />
                    </span>
                </div>
            </h1>
        </header>
    );
};

export default Header;