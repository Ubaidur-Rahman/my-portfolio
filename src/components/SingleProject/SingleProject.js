
const SingleProject = (props) => {
  const { title, description, img, gitHubRepo, liveLink } = props.project;

  return (
    
      <div  className="col-md-6 mt-5">
      <div className="container">
      <div style={{backgroundColor: '#F6F5F5'}} className="card mb-3">
        <div className="row">
          <div className="col-md-6"><img style={{ maxHeight: '100%', maxWidth: '100%' }} src={img} className="card-img-top img-fluid p-5" alt={title} /></div>
          <div className="col-md-6"><div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SingleProject;