import React from 'react'
import './Productcard.css'

const Productcard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top'src='https://www.kagomeindia.com/wp-content/uploads/top-view-ripe-fresh-tomatoes-with-water-drops-black-background-scaled.jpg' alt="" />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>Premium Tomato(Ozone washed) </p>
          <p className='text-gray-10'>Fresh Tomato </p>
        </div>
        <div className='flex items-center space-x-2'> 
          <p className='font-semibold'>₹20.00 </p>
          <p className='line-through opacity-50'>₹160</p>
          <p className='text-green-600 font-semibold'>30% off</p>
        </div>
      </div>
      
    </div>
  )
}

export default Productcard
