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
    <div className='mb-5' style={{ backgroundColor: "#F4FDFB" }}>
      <div className="container">
        <h3 className='text-center'>Contact</h3>
        <form onSubmit={handleSubmit}>
          <label for="fname">Name</label>
          <input type="text" id="fname" name="name" placeholder="Your name.." />

          <label for="fname">Email</label>
          <input type="text" id="email" name="email" placeholder="Email Address" />

          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Write Your Message" style={{ height: "200px" }}></textarea>

          <input className="btn custom-btn-bg" type="submit" value="Send Email" />
        </form>
      </div>

    </div>

  );
};

export default Contact;