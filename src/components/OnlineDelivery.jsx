import React from 'react'
import { resturentChain } from '../resturentChain.js'
import Card from './Card.jsx'

const OnlineDelivery = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Bhopal</div>
            </div>
            <div className='grid grid-cols-4 gap-3'>
                {
                    resturentChain.map((d, i) => {
                      return <Card {...d} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default OnlineDelivery