import React from 'react';
import './Contact.scss';

const Contact = ({ name, contact = { intro: [] } }) => {
  return (
    <section className="contact pt-5 pb-5">
      <div id="contact" className="container rounded p-5">
        <h2>Contact Me</h2>
        <div className="row">
          <div className="col-md-2 text-center d-none d-md-block">
            <i className="fas fa-envelope fa-5x"/>
          </div>
          <div className="col-sm-12 col-md-5">
            {contact.intro.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>

          <div className="col-sm-12 col-md-5">
            <p className="mb-0">{name}</p>
            <p className="mb-0">{contact.city}</p>
            <p className="mb-0">{contact.phone}</p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
        </div>
        <form name="contact-me" method="POST">
          <input type="hidden" name="form-name" value="contact-me"/>
          {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" id="b876e5e4" name="b876e5e4" tabIndex="-1"/>
          </div>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-lg">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" name="name" required={true}
                     placeholder="Enter your full name"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" name="email" required={true}
                     placeholder="your.name@example.com"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="subject" className="col-sm-2 col-form-label col-form-label-lg">Subject</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="subject" name="subject" required={true}
                     placeholder="Subject of your message"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="message" className="col-sm-2 col-form-label col-form-label-lg">Message</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="message" name="message" rows="5" required={true}
                        placeholder="Enter your message here."/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
