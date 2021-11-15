import React from 'react';
import headerImg from './images/header-bike.png'

const Banner = () => {
   return (
      <div className='bg-info'>
         <div className="row row-cols-lg-2 row-cols-1 justify-content-center align-items-center">
            <div className="text-light text-start ps-5">
               <h1>ROLEX wtu 398</h1>
               <p className="w-75">A watch is a portable timepiece intended to be carried or worn by a person. ... During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches. </p>
            </div>
            <div className="">
               <img className="img-fluid" src={headerImg} alt="" />
            </div>
         </div>
      </div >
   );
};

export default Banner;