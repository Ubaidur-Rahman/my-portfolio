import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Tilt from 'react-tilt';
import myImg from './../../images/DSC_0007.png';



const AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (
        <div id="about" className="container">
            <span className="divider component-title m-5">About</span>
            <div className="d-flex">
                <div className="row text-white align-items-center justify-content-center">
                    <div data-aos="flip-left" className="col-md-6 image-bg rounded-pill rounded-sm">
                        <Tilt className="Tilt" options={{ max: 50 }} >
                            <div className="Tilt-inner">
                                <img style={{ height: '400px' }} className="img-fluid my-image" src={myImg} alt="" />
                            </div>
                        </Tilt>

                    </div>
                    <div data-aos="zoom-in" className="col-md-6 p-5">
                        <h1>I am very passionate Person</h1>
                        <br />
                        <h6>A hard-working individual with proficiency in HTML, CSS, JavaScript, and React, as well as the ability to communicate effectively in a team setting.An enthusiastic web developer with a deep interest in JavaScript.</h6>
                    </div>
                </div>
            </div>
            <div className="skill">

            </div>
        </div>
    );
};

export default AboutMe;