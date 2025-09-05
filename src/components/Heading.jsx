

import React from 'react'
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { PiNumberSquareZeroLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
// import logo from "../../public/images/Swiggy-logo3.png"

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

    const recentSearches = [
        {
            name: "Bhopal Junction Railway Station",
            address: "Railway Colony, Bhopal, Madhya Pradesh, India"
        },
        {
            name: "AIIMS Bhopal",
            address: "Saket Nagar, Bhopal, Madhya Pradesh, India"
        },
        {
            name: "Van Vihar National Park",
            address: "Shymala Hills, Bhopal, Madhya Pradesh, India"
        }
    ]

    return (
        <>
            <div onClick={hideSideMenu} className='black-overlay w-full h-full fixed duration-500 bg-black bg-opacity-50 z-[99999]' style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden'
            }}></div>

            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='w-[500px] bg-white h-full fixed duration-[400ms] z-[999999]'
                style={{
                    left: toggle ? '0%' : '-170%',
                    top: 0
                }}
            >
                {/* Slide Menu Content */}
                <div className=' max-w-[400px] m-auto  p-6 h-full overflow-y-auto'>
                    <div className='flex  mb-4 '>
                        <IoClose
                            onClick={hideSideMenu}
                            className='text-2xl cursor-pointer text-gray-600 hover:text-gray-800'
                        />
                    </div>

                    {/* Search Input */}
                    <div className='mb-6'>
                        <input
                            type="text"
                            placeholder="Search for area, street name.."
                            className='w-full p-3 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none shadow-lg'
                        />
                    </div>

                    {/* Get Current Location */}
                    <div className='border border-gray-200  p-4 mb-6 cursor-pointer hover:bg-gray-50'>
                        <div className='flex items-center gap-3'>
                            <MdMyLocation className=' text-xl' />
                            <div>
                                <h3 className='font-semibold text-gray-800 hover:text-orange-500'>Get current location</h3>
                                <p className='text-gray-500 text-sm'>Using GPS</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Searches */}
                    <div>
                        <h3 className='text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide '>Recent Searches</h3>

                        {recentSearches.map((location, index) => (
                            <div key={index} className='border border-gray-200  p-4 mb-3 cursor-pointer hover:bg-gray-50 transition-colors'>
                                <div className='flex items-start gap-3'>
                                    <IoTimeOutline className='text-gray-400 text-lg mt-1' />
                                    <div className='flex-1'>
                                        <h4 className='font-semibold text-gray-800 mb-1 hover:text-orange-500'>{location.name}</h4>
                                        <p className='text-gray-500 text-sm leading-relaxed'>{location.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <header className=' hidden md:flex p-[15px] shadow-xl sticky top-0 bg-white z-[999]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[100px] '>
                        <img src="/images/swiggy-logo3.png" className='w-[50px] h-[50px] rounded-[30%] hover:scale-105 transition-transform cursor-pointer' alt="swigy logo" />
                    </div>
                    <div onClick={showSideMenu} className='text-[#686b78] flex items-center'>
                        <span className='font-bold text-[13px] hover:text-[#fc8019] hover:border-b-[#fc8019] cursor-pointer border-b-[3px] text-[black] border-[black]'>
                            Aish Bagh</span>
                        <p className='cursor-pointer text-[14px] ml-2 mr-2'>LIG Colony, Bhopal, Madhya Pradesh</p>
                        <FaAngleDown className='text-[0.9rem] cursor-pointer text-[#fc8019] ml-1 mr-8' />
                    </div>
                    <nav className='flex list-none gap-4 ml-auto text-[18px] '>
                        {
                            links.map((link, index) => {
                                return <li key={index} className='flex items-center gap-3 font-semibold cursor-pointer hover:text-[#fc8019]'>
                                    {link.icon}
                                    {link.label}
                                    <sup className='text-[#fc8019]'>{link.sup}</sup>
                                </li>
                            })
                        }
                    </nav>
                </div>
            </header>

            <header className=" lg:hidden border-b border-gray-300 md:hidden flex items-center justify-between  py-3 shadow-md sticky top-0 bg-white z-[999]">
                {/* Back Arrow + Title */}
                <div className=" ml-6 flex items-center gap-2">
                    <button className="text-[25px] font-bold">
                        ←
                    </button>
                    <h1 className="font-bold">Other</h1>
                    <IoIosArrowDropdown className=" text-[20px] font-bold text-gray-600" />
                </div>

                {/* Profile Icon */}
                <div className=" mr-4 w-10 h-10  rounded-full bg-gray-800 text-white flex items-center justify-center">
                    <FaRegUser />
                </div>
            </header>
        </>
    )
}

export default Heading

