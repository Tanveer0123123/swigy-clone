
import React, { useState } from 'react'
import { LuSettings2 } from "react-icons/lu";
import { IoFilterOutline, IoChevronDown, IoClose } from 'react-icons/io5'


const Sticky = () => {


    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [selectedSort, setSelectedSort] = useState('Relevance (Default)')

    return (
        <div className='sticky max-md:top-20 top-0 bg-white w-full z-[1000]  mb-10'>
            <div className='container mx-auto px-4'>
            {/* <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Bhopal</div>
            </div> */}
            {/* Sticky Filter Bar */}
            <div className=' bg-white  py-4 mx-auto border-gray-100 '>
                <div className='flex gap-2 items-center overflow-x-auto scrollbar-hide'>
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
            </div>
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
                            {/* Left Sidebar */}
                            <div className='w-1/3 bg-gray-50 p-4 space-y-4'>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Sort</div>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Delivery Time</div>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Cuisines</div>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Explore</div>
                                <div className='text-gray-700 font-medium cursor-pointer hover:text-orange-500'>Ratings</div>
                            </div>

                            {/* Right Content */}
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

                        {/* Footer */}
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
            </div>
        </div>
    )
}

export default Sticky