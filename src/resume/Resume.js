import React from 'react';
import './resume.scss';
import Entry from "./Entry";

const Resume = ({resume = {}}) => {
  return (
    <section className="resume pt-5 pb-3">
      <div id="resume" className="container">
        <p className="mb-5">
          <a className="btn btn-dark" href="http://resume.dalelotts.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>&nbsp;Download Resume</a>
        </p>
        {Object.entries(resume).map(([section, entries], index) => {
          return <div key={index} className="row mb-5">
            <div className="col-md-3"><h2>{section}</h2></div>
            <div className="col">
              {entries.map((entry, index) => <Entry key={index} entry={entry} />)}
            </div>
          </div>
        })}
      </div>
    </section>
  );
}

export default Resume;
