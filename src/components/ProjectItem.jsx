import React from 'react'

function ProjectItem({ year, title, details, github, website }) {
  return (
    <ul className='flex flex-col md:flex-row relative border-1 border-stone-700 justify-center'>
			<li className="mb-10 justify-center" key={title}>
					<div className='flex flex-wrap gap-4 flex-row items-center text-xs md:text-sm mb-4 justify-center'>
						<span className='inline-block px-2 py-1 font-bold text-stone-900 bg-white rounded-md'>
							{year}
						</span>
            <h1 className='text-lg font-semibold text-white'>
						    {title}
							</h1>
              <a href={github}><img src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" className='h-8 w-8' /></a>
						{!website ?
						 	<></>
							:
              <div>
							  <a href={website} ><img src="https://www.nicepng.com/png/full/170-1709508_web-solutions-web-icon-white-png.png" className='h-8 w-8' /></a>
              </div>
						}
					</div>
					<div className='my-2 text-base font-normal text-stone-400 text-center'>
						<ul>							
							{details.map(item=> { return <li key={item}>{item}</li> })}
						</ul>
					</div>
				</li>
    </ul>
  )
}

export default ProjectItem