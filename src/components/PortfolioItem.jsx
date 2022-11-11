import React from 'react'

function PortfolioItem({imgurl, title, stack, github, website}) {
  return (
    <div className='border-2 border-white rounded-md overflow-hidden'>
      <a href={website}><img src={imgurl} alt={title} className='w-full h-60 object-cover' /></a>
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold text-white'>
          {title}
        </h3>
        <p className='flex flex-wrap gap-2 flex-row items-center text-white justify-start text-xs md:text-sm'>
          {stack.map(item => { return <span key={item} className='inline-block px-2 py-1 font-semibold border-2 border-white rounded-md'>
              {item}
            </span> })}
          <a href={github} className='h-8 w-8 ml-auto'><img src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" /></a>
        </p>
      </div>
    </div>
  )
}

export default PortfolioItem