import * as React from 'react';
import './Social.scss'

const Social = ({ accounts = {} }) => {
  return (
    <ul className="social m-2">
      {Object.entries(accounts).map(([name, url]) => <li key={name} className="m-3"><a href={url} target="_blank" rel="noreferrer noopener" ><i className={`fab fa-3x fa-${name}`}/></a></li>)}
    </ul>
  );
};

export default Social;
