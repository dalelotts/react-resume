import React from 'react';

const Skill = ({ skill = { description: [] } }) => {
  return (
    <div className="card mb-3">
      <img src={process.env.PUBLIC_URL + "/static/media/" + skill.image} className="card-img-top p-3"
           alt={skill.heading}/>
      <div className="card-body">
        <h5 className="card-title">{skill.heading}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{skill.dates}</h6>
        {skill.description.map((paragraph, index) => <p key={index} className="card-text">{paragraph}</p>)}
      </div>
      <div className="card-footer">
        <div className="progress">
          <div className="progress-bar  bg-success" role="progressbar" style={{ width: skill.level }}
               aria-valuenow={skill.level} aria-valuemin="0"
               aria-valuemax="100">Expertise: {skill.level}</div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
