import { useState } from 'react';
import { about } from '../data/about.js';

function AboutMe() {
 const topics = about;
  return (
    <article>
    {topics.map(
      (topic) => {
	const {id, header, text} = topic;
	if( Array.isArray( topic.text )) {
	  return ( 
	    <>
	    <h4>{header}</h4>
	    <ul>
	    {text.map((entry) => (
	      <li key = {entry}>
	      {entry}
	      </li>
	    ))}
	    </ul>
	    </>
	);
      } else {
	return ( 
	  <>
	  <h4>{header}</h4>
	  <p>{text}</p>
	  </>
	);
      }
    }
    )
    }
    </article>
  );
}

export default AboutMe;



















