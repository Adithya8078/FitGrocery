import React from 'react'
import Maincarosel from '../../components/Homecarosel/Maincarosel'
import Homesectioncarosel from '../../components/Homesectioncarosel/Homesectioncarosel'
import { mens_kurta } from '../../../Data/menskurtha'

const Homepages = () => {
  return (
    <div>
      <Maincarosel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Homesectioncarosel data={mens_kurta} sectionName={'Popular Products'}/>
        <Homesectioncarosel data={mens_kurta} sectionName={'Trending Products'}/>
        <Homesectioncarosel data={mens_kurta} sectionName={'Newly Added Products'}/>
        <Homesectioncarosel data={mens_kurta} sectionName={'Top Rated'}/>
        <Homesectioncarosel data={mens_kurta} sectionName={'Top Rated'}/>
      </div>
    </div>
  )
}

export default Homepages
