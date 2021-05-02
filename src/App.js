import Particles from 'react-particles-js';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
      <div className = "App">
      <Navbar />
      <Particles 
                params={{
                    "particles": {
                        "number": {
                          "value": 130
                        },
                        "size": {"value": 2}
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
                height="100vh"
                
                 />
        
        <Header />
        <Blogs />
        <Contact />
        <Footer />
      </div>
  )
}

export default App;
