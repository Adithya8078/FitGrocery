import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Maincaroseldata } from './Maincaroseldata';
import slider1 from '../Asserts/Images/slider1.png'



const Maincarosel = () => {
    
    const items =Maincaroseldata.map((item)=><img className='cursor-pointer -z-10' role='presentation' src={slider1} alt=''/>)
    return (
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
};
export default Maincarosel;