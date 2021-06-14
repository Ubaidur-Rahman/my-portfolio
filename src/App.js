import { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import HashLoader from 'react-spinners/HashLoader';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {


  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timing);
    }, []);

    if (loading) {
        return (
            <div className="loader">
                <HashLoader color="05C2C9" loading={loading} size={50} />
            </div>
        );
    }

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Particles
        params={{
          "particles": {
            "number": {
              "value": 25
            },
            "size": { "value": 2 }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          },
        }}
        height="70vh"
      />
      
            <Home />
            <Footer />
            
          </Route>
          <Route path="/aboutMe">
            <Navbar />
            <AboutMe />
            <Footer />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
            <Footer />
          </Route>
          <Route path="/projects">
            <Navbar />
            <Projects />
            <Footer />
          </Route>
          <Route path="/blogs">
            <Navbar />
            <Blogs />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
