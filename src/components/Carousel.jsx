import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom"



export const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

  };
  return (

    <Slider {...settings}>

      <div className='w-[610px] h-[200px] mx-[500px] my-[155px] '>
        <span className='text-red-500 text-2xl font-montserrat mx-7'>The Chloe Collection</span>
        <h1 className='font-cookie text-7xl'>The Project Jacket</h1>
        <Link className='text-2xl font-bold mx-10 text-red-600' to="">Shop Now</Link>

      </div>

      <div className=' w-[610px] h-[200px] mx-[500px] my-[155px] '>
        <span className='text-red-500 text-2xl font-montserrat mx-7'>The Chloe Collection</span>
        <h1 className='font-cookie text-7xl'>The Project Jacket</h1>
        <Link className='text-2xl font-bold mx-10 text-red-600' to="">Shop Now</Link>

      </div>

      <div className=' w-[610px] h-[200px] mx-[500px] my-[155px] '>
        <span className='text-red-500 text-2xl font-montserrat mx-7'>The Chloe Collection</span>
        <h1 className='font-cookie text-7xl'>The Project Jacket</h1>
        <Link className='text-2xl font-bold mx-10 text-red-600' to="">Shop Now</Link>

      </div>




    </Slider>

  )
};
export default Carousel;





