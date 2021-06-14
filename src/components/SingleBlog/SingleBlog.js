import React from 'react';

const SingleBlog = ({blog}) => {
    return (
        <div data-aos="flip-right" className="col-md-4 text-center">
            <div className="single-cta cta-hover p-5">
                    <img src={blog.img} alt={blog.title} style={{ height: '100px', width: '100px' }} />
                    <div className="cta-text">
                        <h4>{blog.title}</h4>
                        <br />
                        <p className='text-start text-white'>{blog.details}</p>
                    </div>
                    <br />
                    <a className="custom-btn-bg text-decoration-none" target="_blank" href={blog.liveLink} rel="noreferrer">Read Full</a>
            </div>
        </div>
    );
};

export default SingleBlog;