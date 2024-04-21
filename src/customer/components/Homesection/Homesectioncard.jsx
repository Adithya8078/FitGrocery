import React from 'react';
// import Amazon from '../Cart/Amazon';
// import Cards from '../Cart/Card';

const Homesectioncard = ({ product, onAddToCart }) => {
  

  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border transition duration-300 ease-in-out transform hover:scale-105'>
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt=''/>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm'>
          <span className='font-semibold'>₹{product.discountedPrice.toLocaleString()}   </span>
          <span className='text-green-600 font-semibold'>        {product.discountPersent}% off</span>
        </p>
        {/* Add to Cart button */}
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'  >Add to Cart</button>
      </div>
    </div>
  );
};

export default Homesectioncard;
