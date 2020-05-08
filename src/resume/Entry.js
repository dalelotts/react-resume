import React from 'react';

const Entry = ({entry = {description: []}})=> {
  return (
    <div className="entry">
      <h3>{entry.heading}</h3>
      <p><span className="subheading">{entry.subHeading}</span>&nbsp;•&nbsp;{entry.dates}</p>
      {entry.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  );
}

export default Entry;
