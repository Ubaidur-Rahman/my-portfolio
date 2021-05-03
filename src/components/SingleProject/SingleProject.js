import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from 'react-tilt';

const SingleProject = (props) => {
  const { title, description, img, img2, img3, gitHubRepo, liveLink } = props.project;

  return (

    <div className="mt-5">
      <div className="container justify-content-center align-items-center">
        <div style={{ backgroundColor: '#F6F5F5' }} className="card mb-3">
          <div className="row">
            <div className="col-md-6">

              <Tilt className="Tilt" options={{ max: 30 }} >
                <div className="Tilt-inner">
                  <img style={{ maxHeight: '100%', maxWidth: '100%' }} src={img} className="card-img-top img-fluid p-5" alt={title} />
                </div>
              </Tilt>

            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h2 className="card-title component-title">{title}</h2>
                <p className="card-text text-center"><b>Description: </b> <br />{description}</p>
                <p className="card-text d-flex justify-content-around">
                  <a className="custom-btn-bg text-decoration-none" rel="noreferrer" href={liveLink} target="_blank"><FontAwesomeIcon icon={faEye} /> Demo</a>
                  <a className="custom-btn-bg text-decoration-none" rel="noreferrer" href={gitHubRepo} target="_blank"><FontAwesomeIcon icon={faGithub} /> Code</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;