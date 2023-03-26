import React from 'react';
import "../assets/styles/pages/home.scss";

// image
import Cover from "../assets/image/category-1.jpg.webp";
import Categories from "../assets/image/category-2.jpg.webp";
import Categories1 from "../assets/image/category-3.jpg.webp";
import Categories2 from "../assets/image/category-4.jpg";
import Categories3 from "../assets/image/category-5.jpg.webp";
import Cover2 from "../assets/image/banner-1.jpg.webp"
import cover3 from "../assets/image/discount.jpg.webp"

// components
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Countdown from '../components/Countdown';
import Footer from "../components/Footer"

// data
import { data } from "../mockdata";

// icons
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaHeadphonesAlt } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi"





export const Home = () => {
  return (
    <>
      {/* start category section */}

      <section className='categories'>

        <div className="w-100% md: mt-[53px] ">
          <div className='grid grid-rows-1 md:grid-cols-2  '>
            {/* start left section */}
            <div className="w-auto h-[660px] bg-center bg-no-repeat " style={{ backgroundImage: `url(${Cover})` }}>
              <div className=" w-[500px] h-[648px] flex items-center justify-center mx-10">
                <div className="flex flex-col">
                  <h1 className='font-cookie text-7xl font-medium'>Women's fashion</h1>
                  <p className='font-montserrat'>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
                  <p className='font-1xl mt-2 font-bold'>Shop Now</p>
                  <span className='w-[100px] h-[3px] bg-red-600 mt-2'></span>
                </div>

              </div>
            </div>


            {/* start right section */}

            <div className="md:w-100% lg:w-100% h-[660px]  grid grid-cols-1 my-1">
              {/* top right section */}
              <div className=" grid grid-cols-1 md:grid-cols-2 w-auto h-[330px] ">

                <div className=" w-100% mt-2 md:w-[320px] h-[320px] mx-[10px] bg-center bg-no-repeat bg-cover  " style={{ backgroundImage: `url(${Categories})` }}>
                  <div className=" w-[300px] h-[350px] flex flex-col justify-center px-[35px] scale-75 hover:scale-100 duration-1000">
                    <h1 className='text-[30px] font-medium'>Men's fashion</h1>
                    <span className='text-[15px] font-montserrat font-medium'>358 items</span>
                    <span className='text-[18px] font-medium mt-1'>  Shop Now </span>
                    <span className='w-[90px] h-1 bg-red-600'></span>
                  </div>
                </div>

                <div className=" md:w-100% mt-2 lg:w-[320px] h-[320px]  mx-[10px] bg-center bg-no-repeat bg-cover  " style={{ backgroundImage: `url(${Categories1})` }}>
                  <div className=" w-[300px] h-[350px] flex flex-col justify-center px-[35px] scale-75 hover:scale-100 duration-1000">
                    <h1 className='text-[30px] font-medium'>Kid's fashion</h1>
                    <span className='text-[15px] font-montserrat font-medium'>273 items</span>
                    <span className='text-[18px] font-medium mt-1'>  Shop Now </span>
                    <span className='w-[90px] h-1 bg-red-600'></span>
                  </div>
                </div>
              </div>

              {/* button right section */}
              <div className="mt-[335px] md:mt-0  grid grid-cols-1 md:grid-cols-2  w-auto h-[330px] ">

                <div className="md:w-full  lg:w-[320px] h-[320px] mx-[10px] bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url(${Categories2})` }}>
                  <div className=" w-[300px] h-[350px] flex flex-col justify-center px-[35px] scale-75 hover:scale-100 duration-1000">
                    <h1 className='text-[30px] font-medium'>Cosmetics</h1>
                    <span className='text-[15px] font-montserrat font-medium'>223 items</span>
                    <span className='text-[18px] font-medium mt-1'>  Shop Now </span>
                    <span className='w-[90px] h-1 bg-red-600'></span>
                  </div>
                </div>

                <div className=" w-full mt-2 md:  lg:w-[320px] h-[320px]  mx-[10px] bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url(${Categories3})` }}>
                  <div className=" w-[300px] h-[350px] flex flex-col justify-center px-[35px] scale-75 hover:scale-100 duration-1000">
                    <h1 className='text-[30px] font-medium'>Accessories</h1>
                    <span className='text-[15px] font-montserrat font-medium'>773 items</span>
                    <span className='text-[18px] font-medium mt-1'>  Shop Now </span>
                    <span className='w-[90px] h-1 bg-red-600'></span>
                  </div>
                </div>
              </div>

            </div>




          </div>
        </div>
      </section>


      {/* start product section */}
      <section className='products'>

        {/* start top product  */}
        <div className=" max-w-[968px] h-[1054px] mx-auto mt-[55px]  ">
          <div className=" mt-[690px] md:mt-0 grid grid-cols-1 md:grid-cols-2 mb-4  ">
            <div className="grid content-center">
              <h1 className='text-2xl font-bold  ml-3 md:text-2xl md:font-bold'>New Product</h1>
            </div>

            <div className="mt-[35px] md:mt-0 ml-4 md:ml-0 ">
              <ul className='flex  '>
                <li className='px-4'>All</li>
                <li className='px-4'>Women's</li>
                <li className='px-4'>Men's</li>
                <li className='px-4'>Kid's</li>
                <li className='px-4'>Accessories</li>
                <li className='px-4'>Cosmetics</li>
              </ul>

            </div>


          </div>

          <div className=" grid ml-[100px] md:ml-0 grid-cols-1 md:grid-cols-4 gap-y-5 gap-x-5">

            {data.map((item) => (
              <Card img={item.image} title={item.title.slice(0, 10)} description={item.description.slice(0, 10)} price={item.price} />
            ))}
          </div>
        </div>


      </section>

      {/* start slider section  */}
      <section className='w-100% h-[500px] mt-[2900px] md:mt-0' style={{ backgroundImage: `url(${Cover2})` }}>
        <div className="w-[463px] md:w-full md:mx-0 ">
          <Carousel />
        </div>

      </section>

      {/*  start countdown section */}
      <section className='countdown mt-[100px]'>
        <div className="container max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* left  */}
          <div className=" w-full md:w-[480px] h-[390px] " style={{ backgroundImage: `url(${cover3})` }}>

          </div>

          {/* right */}
          <div className="w-full md:w-[480px] h-[390px] bg-pink-100 flex justify-center items-center flex-col">
            <span className='font-montserrat'>Discount</span>
            <h2 className='text-5xl font-cookie text-red-600'>Summer 2019</h2>
            <Countdown targetDate={'2023-04-25T14:00:00'} />
            <span className='text-2xl font-bold mt-5 text-red-500'>Shop Now</span>
          </div>
        </div>


      </section>


      {/* start services section */}
      <section className='services mt-2'>
        <div className="container  max-w-[1170px] h-[402px] md:h-[242px] mx-auto  grid  grid-cols-1 md:grid-cols-4 items-center ">

          <div className="flex  gap-x-5 ">
            <div className='icon text-5xl text-red-500 '>
              <BsFillCarFrontFill />
            </div>
            <div className="tittle flex flex-col ">
              <p className='text-[16px] font-bold'>Free Shipping</p>
              <span className='text-[14px] font-montserrat'>For all oder over $99</span>
            </div>
          </div>

          <div className="flex gap-x-5 ">
            <div className='icon text-5xl text-red-500 '>
              <FaRegMoneyBillAlt />
            </div>
            <div className="tittle flex flex-col ">
              <p className='text-[16px] font-bold'>Money Back Guarantee</p>
              <span className='text-[14px] font-montserrat'>If good have Problems</span>
            </div>
          </div>

          <div className="flex gap-x-5 ">
            <div className='icon text-5xl text-red-500 '>
              <HiOutlineSupport />
            </div>
            <div className="tittle flex flex-col ">
              <p className='text-[16px] font-bold'>Online Support 24/7</p>
              <span className='text-[14px] font-montserrat'>Dedicated support</span>
            </div>
          </div>

          <div className="flex gap-x-5 ">
            <div className='icon text-5xl text-red-500 '>
              <BsFillCarFrontFill />
            </div>
            <div className="tittle flex flex-col ">
              <p className='text-[16px] font-bold'>Payment Secure</p>
              <span className='text-[14px] font-montserrat'>100% secure payment</span>
            </div>
          </div>

        </div>
      </section>
      <Footer />


    </>
  )
}
export default Home;
