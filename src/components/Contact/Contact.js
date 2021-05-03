import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {

    e.preventDefault();

    emailjs.sendForm('gmail', 'template_uzwf9ml', e.target, 'user_wadary0j8pmA3p4bigXNh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <div className="row d-flex justify-content-center">
    <h2 className='component-title m-5'>Contact</h2>
      <div className="col-md-6 ">
      <div className='mb-5' style={{ backgroundColor: "#EFEFEF" ,borderRadius: '15px' }}>
      <div className="contact-container">
        
        <form onSubmit={handleSubmit}>
          <label for="fname">Name</label>
          <input className="shadow" type="text" id="fname" name="name" placeholder="Your name.." />

          <label for="fname">Email</label>
          <input className="shadow" type="text" id="email" name="email" placeholder="Email Address" />

          <label for="message">Message</label>
          <textarea className="shadow" id="message" name="message" placeholder="Write Your Message" style={{ height: "200px" }}></textarea>

          <input className="btn custom-btn-bg w-100" type="submit" value="Send Email" />
        </form>
      </div>

    </div>
      </div>
      <hr style={{ height: "5px", color: "white"}}/>
    </div>

  );
};

export default Contact;