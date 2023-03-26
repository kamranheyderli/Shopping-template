import React from 'react';

// logo
import Logo from "../assets/image/logo.png.webp";

// icons
import { FaFacebookF, FaTwitter, } from "react-icons/fa";
import { BsYoutube, BsInstagram, BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom"


export const Footer = () => {
    return (
        <footer>
            <div className=' container mx-auto w-full md:max-w-[1200px] h-[223px] gap-y-5 md:gap-y-0 grid grid-cols-1 md:grid-cols-4'>

                <div className=" flex flex-col gap-y-5 ">
                    <div className="w-[98px] h-[31px] ">
                        <img src={Logo} alt="" />
                    </div>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>

                    <div className="flex ">
                        <Link to=""><img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-1.png.webp" alt="" /></Link>
                        <Link to=""><img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-2.png" alt="" /></Link>
                        <Link to=""><img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-3.png.webp" alt="" /></Link>
                        <Link to=""><img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-3.png.webp" alt="" /></Link>
                        <Link to=""><img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-5.png.webp" alt="" /></Link>
                    </div>
                </div>



                <div className="  flex flex-col md:items-center gap-y-4 font-montserrat ">
                    <h6 className='text-[16px] font-bold '>QUICK LINKS</h6>
                    <ul className='text-gray-500 text-1xl'>
                        <li> <Link to="">About</Link></li>
                        <li> <Link to="">Blogs</Link></li>
                        <li><Link to="">Contact</Link></li>
                        <li><Link to>FAQ</Link></li>
                    </ul>

                </div>


                <div className=" flex flex-col md:items-center gap-y-4 font-montserrat ">
                    <h6 className='text-[20px] font-bold '>ACCOUNT</h6>
                    <ul className='text-gray-500 text-1xl'>
                        <li> <Link to="">My Account</Link></li>
                        <li> <Link to="">Orders Tracking</Link></li>
                        <li><Link to="">Checkout</Link></li>
                        <li><Link to="">Wishlist</Link></li>
                    </ul>

                </div>




                <div className="flex flex-col md:items-center gap-y-4 font-montserrat ">
                    <h6 className='text-1xl font-bold'>NEWSLETTER</h6>


                    <div className="relative">
                        <input type="email" className='w-[250px] h-[52px]  border-2 rounded-[25px] px-4 ' placeholder='Email' />

                        <button className='bg-red-500 text-white w-[100px] h-[53px] border rounded-r-[25px] absolute left-[200px] md:right-0'>Subscribe</button>
                    </div>

                    <div className="social">
                        <ul className='flex gap-x-1 '>
                            <li className='w-[40px] h-[40px] border bg-gray-300 rounded-full flex items-center justify-center'><Link to=""><FaFacebookF /></Link> </li>
                            <li className='w-[40px] h-[40px] border bg-gray-300 rounded-full flex items-center justify-center'><Link to=""><FaTwitter /></Link></li>
                            <li className='w-[40px] h-[40px] border bg-gray-300 rounded-full flex items-center justify-center'><Link to=""><BsYoutube /></Link></li>
                            <li className='w-[40px] h-[40px] border bg-gray-300 rounded-full flex items-center justify-center'><Link to=""><BsInstagram /></Link></li>
                            <li className='w-[40px] h-[40px] border bg-gray-300 rounded-full flex items-center justify-center'><Link to=""><BsPinterest /></Link></li>
                        </ul>


                    </div>

                </div>



            </div>

        </footer>
    )
};

export default Footer;
