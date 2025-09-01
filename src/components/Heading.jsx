import React from 'react'
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { PiNumberSquareZeroLight } from "react-icons/pi";

const Heading = () => {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }
    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoBagOutline />,
            label: 'Swiggy Corporate'
        },
        {
            icon: <IoSearchSharp />,
            label: 'Search'
        },
        {
            icon: <BiSolidOffer />,
            label: 'Offers',
            sup: 'New'
        },
        {
            icon: <IoHelpBuoyOutline />,
            label: 'Help'
        },
        {
            icon: <FaRegUser />,
            label: 'Sign In'
        },
        {
            icon: <PiNumberSquareZeroLight />,
            label: 'Cart',
        }
    ]

    return (
        <>
          <div  onClick={hideSideMenu} className='black-overlay w-full h-full fixed duration-500' style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? 'visible' : 'hidden'
          }}></div>
          <div 
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='w-[500px] bg-white h-full absolute duration-[400ms]'
            style={{
                left: toggle ? '0%' : '-100%'
            }}
          ></div>
            <header className='p-[15px] shadow-xl sticky top-0 bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[100px] '>
                        <img src="./images/Swiggy-logo.png" className='w-full h-auto' alt="swigy logo" />
                    </div>
                    <div className='text-[#686b78]'>
                        <span className='font-bold  border-b-[3px] text-[black] border-[black]'>
                            Aish Bagh</span>  LIG Colony, Bhopal, Madhya Pradesh 462008
                        <FaAngleDown  onClick={showSideMenu} className='inline text-[0.9rem] cursor-pointer text-[#fc8019] ml-1' />
                    </div>
                    <nav className='flex list-none gap-4 ml-auto text-[18px] '>
                       {
                        links.map((link, index) =>{
                          return  <li key={index} className='flex items-center gap-1 cursor-pointer hover:text-[#fc8019]'>
                                {link.icon}
                                {link.label}
                                <sup>{link.sup}</sup>
                            </li>
                        })
                       }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Heading