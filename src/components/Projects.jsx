import React from 'react'
import projects from '../data/projects'
import ProjectItem from "./ProjectItem"

function Projects() {
  return (
    <div className='flex flex-col md:flex-row justify-center mt-20 px-4'>
     	<div>
				<div className='text-2xl font-bold decoration-4 mb-10 text-white text-center'>Projects</div>
				{projects.map(item => { return <ProjectItem key={item.title} year={item.year} title={item.title} details={item.details} github={item.github} website={item.website} /> })}
		 	</div>
    </div>
  )
}

export default Projects