import React from 'react';
import './testimonials.scss';
import Testimonial from "./Testimonial";

const Testimonials  = ({ testimonials = [] }) => {
  return (
    <section className="testimonials pt-5 pb-3">
      <div id="testimonials" className="container mb-3">
        <h2>Testimonials</h2>
        <div className="row">
          <div className="col-sm-2">
            <i className="fas fa-5x fa-quote-left"/>
          </div>
          <div className="col">
            {testimonials.map((testimonial, index) => <Testimonial key={index} testimonial={testimonial}/> )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
