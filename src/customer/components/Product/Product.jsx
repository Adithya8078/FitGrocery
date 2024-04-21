import React from 'react';
import Productcard from './Productcard';
import { mens_kurta } from '../../../Data/menskurtha';

const Product = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      
      
      
      
      
        {mens_kurta.map((item, index) => (
          <Productcard key={index} product={item} />
        ))}
      </div>
      
  );
};

export default Product;
