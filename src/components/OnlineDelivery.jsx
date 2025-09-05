
import React, { useState } from 'react'
import { resturentChain } from '../resturentChain.js'
import Card from './Card.jsx'
import { IoFilterOutline, IoChevronDown, IoClose } from 'react-icons/io5'
import { LuSettings2 } from "react-icons/lu";

const OnlineDelivery = (props) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [selectedSort, setSelectedSort] = useState('Relevance (Default)')
    return (
        <div className='max-w-[1050px] mx-auto'>
            {/* <div className='flex my-3 items-center justify-between'>
                <div className=' ml-4 lg:ml-0 m-2 text-[20px] lg:text-[25px] font-bold'>Restaurants with online food delivery in Bhopal</div>
            </div> */}

            {/* Sticky Filter Bar */}
            {/* <div className='sticky  top-10 lg:top-0   ml-2 lg:ml-0 bg-white  z-[1000] py-4  border-gray-100 '>
                <div className=' flex gap-3 items-center overflow-x-auto scrollbar-hide'>
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className='flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'
                    >
                        Filter
                        <LuSettings2 className='w-4 h-4' />
                    </button>

                    <button
                        onClick={() => setIsSortOpen(true)}
                        className='flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'
                    >
                        Sort By
                        <IoChevronDown className='w-4 h-4' />
                    </button>

                    <button className='px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'>
                        Fast Delivery
                    </button>

                    <button className='px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'>
                        New on Swiggy
                    </button>

                    <button className='px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'>
                        Ratings 4.0+
                    </button>

                    <button className='px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'>
                        Pure Veg
                    </button>

                    <button className='px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'>
                        Offers
                    </button>

                    <button className='px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'>
                        Rs. 300-Rs. 600
                    </button>

                    <button className='px-3 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'>
                        Less than Rs. 300
                    </button>
                </div>
            </div> */}




            {/* Filter Modal */}
            {isFilterOpen && (
                <div className='fixed inset-0  bg-opacity-50  flex items-center justify-center black-overlay  duration-500 bg-black bg-opacity-50 z-[99999]'>
                    <div className='bg-white w-[700px] h-[400px] rounded-lg overflow-hidden'>
                        <div className='flex items-center justify-between p-4 border-b'>
                            <h2 className='text-[25px] font-semibold'>Filter</h2>
                            <button onClick={() => setIsFilterOpen(false)}>
                                <IoClose className='w-6 h-6' />
                            </button>
                        </div>

                        <div className='flex h-[calc(100%-140px)]'>

                            <div className='w-1/3 bg-gray-50 p-4 space-y-4'>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Sort</div>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Delivery Time</div>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Cuisines</div>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Explore</div>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Ratings</div>
                            </div>


                            <div className='flex-1 p-4'>
                                <div className='mb-4'>
                                    <h3 className='font-semibold text-gray-700 mb-3'>SORT BY</h3>
                                    <div className='space-y-3'>
                                        <label className='flex items-center space-x-3 cursor-pointer'>
                                            <input type='radio' name='sort' className='w-4 h-4 text-orange-500' defaultChecked />
                                            <span className='text-gray-700'>Relevance (Default)</span>
                                        </label>
                                        <label className='flex items-center space-x-3 cursor-pointer'>
                                            <input type='radio' name='sort' className='w-4 h-4 text-orange-500' />
                                            <span className='text-gray-700'>Delivery Time</span>
                                        </label>
                                        <label className='flex items-center space-x-3 cursor-pointer'>
                                            <input type='radio' name='sort' className='w-4 h-4 text-orange-500' />
                                            <span className='text-gray-700'>Rating</span>
                                        </label>
                                        <label className='flex items-center space-x-3 cursor-pointer'>
                                            <input type='radio' name='sort' className='w-4 h-4 text-orange-500' />
                                            <span className='text-gray-700'>Cost: Low to High</span>
                                        </label>
                                        <label className='flex items-center space-x-3 cursor-pointer'>
                                            <input type='radio' name='sort' className='w-4 h-4 text-orange-500' />
                                            <span className='text-gray-700'>Cost: High to Low</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='flex p-4 border-t-gray-1000 space-x-3 '>
                            <button className='flex-1 py-2 w-[200px] text-orange-500 font-medium hover:bg-orange-50 rounded'>
                                Clear Filters
                            </button>
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className='flex-1 py-2 w-[100px] bg-orange-500 text-white font-medium rounded hover:bg-orange-600'
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sort By Dropdown */}
            {isSortOpen && (
                <div className='fixed inset-0  bg-opacity-50  flex items-center justify-center black-overlay  duration-500 bg-black bg-opacity-50 z-[99999]'>
                    <div className='bg-white w-[250px] rounded-lg overflow-hidden'>
                        <div className='p-4 space-y-3'>
                            {['Relevance (Default)', 'Delivery Time', 'Rating', 'Cost: Low to High', 'Cost: High to Low'].map((option) => (
                                <label key={option} className='flex items-center space-x-3 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='sortQuick'
                                        className='w-4 h-4 text-orange-500'
                                        checked={selectedSort === option}
                                        onChange={() => setSelectedSort(option)}
                                    />
                                    <span className='text-gray-700'>{option}</span>
                                </label>
                            ))}
                        </div>
                        <div className='p-4 border-t'>
                            <button
                                onClick={() => setIsSortOpen(false)}
                                className='w-full py-2 bg-orange-500 text-white font-medium rounded hover:bg-orange-600'
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* <div className=' ml-5   lg:ml-10 grid grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-0 md:gap-3 lg:gap-3 mt-4'>
                {
                    resturentChain.map((d, i) => {
                        return <Card {...d} key={i} />
                    })
                }
            </div> */}

            <div className='  lg:ml-10 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4 max-w-[1050px] mx-auto px-4 md:px-0'>
                {
                    resturentChain.map((d, i) => (
                        <div key={i} className=" group cursor-pointer hover:scale-95 transition-all duration-300">
                            <div className="relative">
                                <img src={`./images/${d.image}`} alt={d.name} className="w-full h-[170px] object-cover rounded-2xl" />
                                <div className="absolute bottom-0 w-full h-[90px] bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                                    {d.offer && (
                                        <div className="absolute bottom-2 left-2 text-white text-sm font-bold text-[19px]">
                                            <div className="mb-1 ">{d.offer}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className=" items-start justify-between">
                                    {/* <div>
                                    <h3 className="font-bold text-[17px] text-gray-800">{d.title}</h3>
                                    </div> */}
                                    <div className="mt-2 sm:mt-2 md:mt-3 text-lg sm:text-xl md:text-xl font-bold">
                                        {d.title}
                                    </div>
                                    <div className="text-sm sm:text-base md:text-base  ">
                                        {/* <span className=''>★</span> */}
                                         <Start className="inline-block mr-1" /> {d.rating}
                                        <span className="ml-2 ">{d.minTime} - {d.maxTime} mins</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-[15px] ">
                                    <span className="truncate">{d.name}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-1 text-[15px] text-gray-500">
                                    {d.place}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

const Start = (props) => {
    return (
        <svg
            className={props.className}
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx={10}
                cy={10}
                r={9}
                fill="url(#StoreRating20_svg__paint0_linear)"
            />
            <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
            />
            <defs>
                <linearGradient
                    id="StoreRating20_svg__paint0_linear"
                    x1={10}
                    y1={1}
                    x2={10}
                    y2={19}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#21973B" />
                    <stop offset={1} stopColor="#128540" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default OnlineDelivery