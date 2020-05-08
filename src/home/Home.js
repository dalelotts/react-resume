import * as React from 'react';
import './Home.scss';

const Home = ({ name, ima, introduction = [], children}) => {
  return (
    <div id="home" className="home container rounded text-center p-5">
      <h1>I'm {name}.</h1>
      <h2>{ima}</h2>
      {introduction.map((paragraph, index) => <p key={index} className="mb-1">{paragraph}</p>)}
      {children}
    </div>
  );
};

export default Home;
