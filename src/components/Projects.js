import { useState } from 'react';
import { projects } from '../data/projects.js';

const Projects = () => {
  const [projectList, setProjectList] = useState(projects);
  return (
    <>
    {projectList.map((project) => {
      console.log(project);
      const {id,name,link,description} = project
      return (
	<li key={id} >
	<h4>
	<a href={link}>{name}</a>
	</h4>
	<p>{description}</p>
	</li>
      );
    })}
</>
  );
};

export default Projects;















