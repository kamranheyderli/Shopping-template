import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, } from "react-icons/bs/";
import { AiOutlineHeart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Logo from "../assets/image/logo.png.webp"




export const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav)
    }

    return (

        <div className=" flex  justify-between  h-[84px] bg-white  mx-auto items-center w-full shadow-lg fixed top-0 z-30">
            <div className="ml-[35px] md:">
                <img src={Logo} alt="" />
            </div>

            <nav className='hidden md:flex mt-[15px]'>
                <ul className='hidden sm:flex font-montserrat'>
                    <li className="p-4" ><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8 ' to="/">Home</Link></li>
                    <li className="p-4" ><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/womens">Women's</Link></li>
                    <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/mens">Men's</Link></li>
                    <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/shop">Shop</Link></li>
                    <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/pages">Pages</Link></li>
                    <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/blog">Blog</Link></li>
                    <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="hidden sm:flex gap-x-4 mt-[15px] font-montserrat ">
                <Link to="">Login/Register</Link>
                <BsSearch />
                <AiOutlineHeart />
                <MdOutlineLocalGroceryStore />
            </div>

            {/* mobile  menu */}
            <div onClick={handleClick} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={30} style={{ marginRight: "30" }} /> : <AiOutlineClose size={30} style={{ marginRight: "30" }} />}
            </div>

            <div className={!nav ? 'hidden' : 'fixed top-0 left-0  w-[40%] border-r border-r-red-300 bg-white ease-in-out duration-700 h-full'}>
                <img src={Logo} className="mt-4 ml-4" alt="" />

                <nav className=''>
                    <ul className=' p-4 uppercase text-black text-3sm'>
                        <li className="p-4" ><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8 ' to="/">Home</Link></li>
                        <li className="p-4" ><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/womens">Women's</Link></li>
                        <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/mens">Men's</Link></li>
                        <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/shop">Shop</Link></li>
                        <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/pages">Pages</Link></li>
                        <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/blog">Blog</Link></li>
                        <li className="p-4"><Link className='hover:underline decoration-4 hover:decoration-red-500 hover:underline-offset-8' to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>


        </div>


    )
};

export default Navbar
