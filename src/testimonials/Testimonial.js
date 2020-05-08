import React from 'react';

const Testimonial = ({ testimonial = {} }) => {
  return (
    <blockquote className="rounded"><p>{testimonial.text}</p><cite>{testimonial.author}</cite></blockquote>
  );
}

export default Testimonial;
