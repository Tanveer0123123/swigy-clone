
// import React, { useRef, useState } from 'react'
// import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
// import Card from './Card'
// import { resturentChain } from '../resturentChain.js'

// const TopRest = () => {
//   const scrollRef = useRef(null)
//   const [slide, setSlide] = useState(0)

//   const cardWidth = 220   
//   const visibleCards = 4  
//   const slideStep = 3     

//   const nextSlide = () => {
//     if (slide >= resturentChain.length - visibleCards) return
//     setSlide(slide + slideStep)
//     scrollRef.current.scrollBy({ left: cardWidth * slideStep, behavior: 'smooth' })
//   }

//   const prevSlide = () => {
//     if (slide <= 0) return
//     setSlide(slide - slideStep)
//     scrollRef.current.scrollBy({ left: -cardWidth * slideStep, behavior: 'smooth' })
//   }

//   return (
//     <div className="max-w-[1050px] mx-auto z-10 ">
//       {/* Header */}
//       <div className="flex my-3 items-center justify-between">
//         <div className="text-[25px] font-bold">
//           Top restaurant chains in Bhopal
//         </div>
//         <div className="flex">
//           <div
//             onClick={prevSlide}
//             className="flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
//           >
//             <FiArrowLeft />
//           </div>
//           <div
//             onClick={nextSlide}
//             className="flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
//           >
//             <FiArrowRight />
//           </div>
//         </div>
//       </div>

//       <div
//         ref={scrollRef}
//         className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide cursor-pointer"
//       >
//         {resturentChain.map((d, i) => (
//           <Card {...d} key={i} />
//         ))}
//       </div>

//       <hr className="border-[1px] border-gray-300 my-12" />
//     </div>
//   )
// }

// export default TopRest






import React, { useRef, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Card from './Card'
import { resturentChain } from '../resturentChain.js'

const TopRest = () => {
  const scrollRef = useRef(null)
  const [slide, setSlide] = useState(0)

  const cardWidth = 220   
  const visibleCards = 4  
  const slideStep = 3     

  const nextSlide = () => {
    if (slide >= resturentChain.length - visibleCards) return
    setSlide(slide + slideStep)
    scrollRef.current.scrollBy({ left: cardWidth * slideStep, behavior: 'smooth' })
  }

  const prevSlide = () => {
    if (slide <= 0) return
    setSlide(slide - slideStep)
    scrollRef.current.scrollBy({ left: -cardWidth * slideStep, behavior: 'smooth' })
  }

  return (
    <div className="max-w-[1050px] mx-auto z-10 ">
      {/* Header */}
      <div className="flex my-3 items-center justify-between">
        <div className=" ml-6 lg:ml-0 text-[19px] lg:text-[25px] font-bold ">
          Top restaurant chains in Bhopal
        </div>
        <div className="flex">
          <div
            onClick={prevSlide}
            className="hidden lg:flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="hidden  lg:flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FiArrowRight />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="   flex gap-2 lg:gap-5 overflow-x-auto scroll-smooth scrollbar-hide cursor-pointer"
      >
        {resturentChain.map((d, i) => (
          <Card {...d} key={i} />
        ))}
      </div>

      <hr className="border-[1px] border-gray-300 my-12" />
    </div>
  )
}

export default TopRest



