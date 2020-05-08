import React from 'react';
import './skills.scss';
import Skill from "./Skill";

const Skills = ({ skills = { intro: [], cards: [] } }) => {
  return (
    <section className="skills pt-5 pb-3">
      <div id="skills" className="container mb-3">
        <h2>Skills</h2>
        <div className="row">
          {skills.cards.map((card, index) => <div key={index} className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch"><Skill skill={card}/></div>)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
