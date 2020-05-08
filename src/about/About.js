import React from 'react';
import './About.scss';
import profile from './profile.jpeg';

const About = ({ about = [] }) => {
  return (
    <section className="about pt-5 pb-3">
      <div className="container">
        <div id="about" className="row">
          <div className="col-sm-2">
            <figure className="figure">
              <img className="figure-img img-fluid rounded" alt="Profile" src={profile}/>
              <figcaption className="figure-caption">Dale Lotts circa 2009</figcaption>
            </figure>
          </div>
          <div className="col">
            <h2>About Me</h2>
            {about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
