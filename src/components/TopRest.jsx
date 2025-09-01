import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Card from './Card'
import { resturentChain } from '../resturentChain.js'

const TopRest = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant chains in Bhopal</div>
                <div className='flex'>
                    <div  className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FiArrowLeft/></div>
                    <div  className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FiArrowRight /></div>
                </div>
            </div>
            <div className='flex gap-5 overflow-hidden'>
                {
                    resturentChain.map((d, i) => (
                        <Card {...d} key={i} />
                    ))
                }
            </div>
             <hr className='border-[1px] border-gray-300 my-12' />
        </div>
    )
}

export default TopRest