import React from 'react'
import './App.css'
import Heading from './components/Heading'
import Category from './components/Category'
import TopRest from './components/TopRest'
import OnlineDelivery from './components/OnlineDelivery'
import Cuisines from './components/Cuisines'
import Footer from './components/Footer'
import Sticky from './components/Sticky'

const App = () => {
  return (
    <div>
      <Heading />
      <Category />
      <TopRest />
      <div className='max-w-[1050px] mx-auto'>
        <div className='flex my-3 items-center justify-between'>
          <div className='text-[25px] font-bold ml-3 lg:pl-10'>Restaurants with online food delivery in Bhopal</div>
        </div>
      </div>
      <Sticky />
      <OnlineDelivery />
      <Cuisines />
      <Footer />
    </div>
  )
}

export default App