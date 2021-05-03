import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
        <Header />
        <AboutMe />
        <Projects />
        <Blogs />
        <Contact />
        </div>
    );
};

export default Home;