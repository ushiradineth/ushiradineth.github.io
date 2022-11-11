import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center lg:mx-20 mx:10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      {portfolio.map(item => { return <PortfolioItem key={item.title} title={item.title} imgurl={item.imgUrl} stack={item.stack} github={item.github} website={item.website} /> })}
      </div>
    </div>
  )
}

export default Portfolio