import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import { useEffect } from "react";
import Tilt from 'react-tilt';

const SingleProject = (props) => {
  const { title, description, img, img2, img3, gitHubRepo, liveLink } = props.project;

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <div data-aos="flip-right" className="mt-5 row">
      <div className="container col-md-8 justify-content-center align-items-center">
        <div style={{ backgroundColor: '#F6F5F5' }} className="card mb-3">
          <div className="row">
            <div className="col-md-6 justify-content-center align-items-center">

              <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                  <Tilt className="Tilt" options={{ max: 30 }} >
                    <div className="Tilt-inner">
                      <div className="carousel-item active">
                        <img style={{ maxHeight: '100%', maxWidth: '100%' }} src={img} className="card-img-top img-fluid p-5" alt={title} />
                      </div>
                      <div className="carousel-item">
                        <img style={{ maxHeight: '100%', maxWidth: '100%' }} src={img2} className="card-img-top img-fluid p-5" alt={title} />
                      </div>
                      <div className="carousel-item">
                        <img style={{ maxHeight: '100%', maxWidth: '100%' }} src={img3} className="card-img-top img-fluid p-5" alt={title} />
                      </div>
                    </div>
                  </Tilt>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h2 className="card-title component-title">{title}</h2>
                <p className="card-text text-center"><b>Description: </b> <br />{description}</p>
                <div className="card-text d-flex justify-content-around">
                  <a className="custom-btn-bg text-decoration-none" rel="noreferrer" href={liveLink} target="_blank"><FontAwesomeIcon icon={faEye} /> Demo</a>
                  <a className="custom-btn-bg text-decoration-none" rel="noreferrer" href={gitHubRepo} target="_blank"><FontAwesomeIcon icon={faGithub} /> Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;