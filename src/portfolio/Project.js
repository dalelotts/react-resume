import React from 'react';
import './portfolio.scss';

const Project = ({project = {cards: []}}) => {
  return (
    <div className="card mb-3">
      <img className="card-img-top p-3" src={process.env.PUBLIC_URL + "/static/media/" + project.image} alt={project.image} />
        <div className="card-body">
          <h5 className="card-title">{project.heading}</h5>
          {project.description.map((paragraph, index) => <p key={index} className="card-text">{paragraph}</p> )}
          <a href={project.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">See more</a>
        </div>
    </div>
  );
}

export default Project;
