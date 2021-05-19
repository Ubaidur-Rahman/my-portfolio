import emailjs from 'emailjs-com';
import React from 'react';
import Tilt from 'react-tilt';
import contactImg from './../../images/contact.jpg';
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
    <div className="m-2">
      <h2 className='component-title divider m-5'>Contact</h2>
    
    <div style={{ backgroundColor: "white" , borderRadius: '15px' }} id="contact" className="row d-flex justify-content-center align-items-center p-5">
    <div className="col-md-5">
    <Tilt className="Tilt" options={{ max: 30 }} >
              <div className="Tilt-inner">
       <img className="img-fluid" src={contactImg} alt="" />
       </div>
       </Tilt>
      </div>
      <div className="col-md-5">
      <div style={{ backgroundColor: "#EFEFEF" ,borderRadius: '15px' }}>
      <div className="contact-container justify-content-center align-items-center">
        
        <form className="p-3" onSubmit={handleSubmit}>
          <label for="fname"><b>Name</b></label>
          <input className="shadow" type="text" id="fname" name="name" placeholder="Your name.." />

          <label for="fname"><b>Email</b></label>
          <input className="shadow" type="text" id="email" name="email" placeholder="Email Address" />

          <label for="message"><b>Message</b></label>
          <textarea className="shadow" id="message" name="message" placeholder="Write Your Message" style={{ height: "150px" }}></textarea>

          <input className="btn custom-btn-bg w-100" type="submit" value="Send Email" />
        </form>
      </div>

    </div>
      </div>
    </div>
</div>
  );
};

export default Contact;