import React from 'react'
import './App.css'
import Heading from './components/Heading'
import Category from './components/Category'
import TopRest from './components/TopRest'
import OnlineDelivery from './components/OnlineDelivery'
import Cuisines from './components/Cuisines'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Heading />
      <Category />
      <TopRest/>
      <OnlineDelivery/>
      <Cuisines/>
      <Footer/>
    </div>
  )
}

export default App