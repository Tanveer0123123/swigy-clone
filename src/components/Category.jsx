
// import React, { useRef } from 'react'
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
// import { category } from '../category.js';
// import { useState } from 'react';

// const Category = () => {
//   const scrollRef = useRef(null);

//   const cardWidth = 160;
//   const visibleCards = 7;
//   const step = 3;

//   const nextSlide = () => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({ left: cardWidth * step, behavior: 'smooth' });
//   };

//   const prevSlide = () => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({ left: -cardWidth * step, behavior: 'smooth' });
//   };

//   return (
//     <div className='max-w-[1050px] mx-auto '>
//       <div className='flex my-3 items-center justify-between'>
//         <div className='text-[25px] font-bold'>What's on your mind?</div>
//         <div className='flex'>
//           <div
//             onClick={prevSlide}
//             className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
//             <FiArrowLeft />
//           </div>
//           <div
//             onClick={nextSlide}
//             className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
//             <FiArrowRight />
//           </div>
//         </div>
//       </div>

//       {/* Slider with scrollbar (hidden) */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4  overflow-x-auto scroll-smooth scrollbar-hide"
//       >
//         {category.map((cat, index) => (
//           <div key={index} className="w-[150px] shrink-0 ">
//             <img src={`./images/${cat.image}`} alt={cat.path} />
//           </div>
//         ))}
//       </div>

//       <hr className='border-[1px] border-gray-300 my-6' />
//     </div>
//   )
// }

// export default Category



import React, { useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { category } from '../category.js';

const Category = () => {
  const scrollRef = useRef(null);

  const cardWidth = 160;
  const step = 3;

  const nextSlide = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: cardWidth * step, behavior: 'smooth' });
  };

  const prevSlide = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -cardWidth * step, behavior: 'smooth' });
  };

  return (
    <div className='max-w-[1050px] mx-auto'>
      {/* Header */}
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold ml-[30px] md:ml-0 '>What's on your mind?</div>

        {/* Arrows only desktop */}
        <div className='hidden md:flex'>
          <div
            onClick={prevSlide}
            className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
          >
            <FiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
          >
            <FiArrowRight />
          </div>
        </div>
      </div>

      {/* Desktop → Horizontal Slider */}
      {/* <div
        ref={scrollRef}
        className="hidden md:flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {category.map((cat, index) => (
          <div key={index} className="w-[150px] shrink-0">
            <img src={`./images/${cat.image}`} alt={cat.path} />
          </div>
        ))}
      </div> */}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-6"
      >
        {Array.from({ length: Math.ceil(category.length / 8) }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="
        snap-start shrink-0 
        md:flex md:gap-4 md:w-auto   /* desktop view */
        grid grid-cols-4 w-[350px]  /* mobile view */
      "
          >
            {category
              .slice(pageIndex * 8, pageIndex * 8 + 8)
              .map((cat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={`./images/${cat.image}`}
                    alt={cat.path}
                    className="w-[150px] h-[100px] md:h-[150px] my-6 object-contain"
                  />
                  <p className="text-sm mt-1">{cat.name}</p>
                </div>
              ))}
          </div>
        ))}
      </div>


      {/* Mobile → Grid (4x2) */}
      {/* <div>
        <div ref={scrollRef}  className="grid grid-cols-4   gap-0 md:hidden w-full overflow-x-auto scroll-smooth scrollbar-hide">
        {category.slice(0, 8).map((cat, index) => (
          <div key={index} className="flex justify-center ">
            <img
              src={`./images/${cat.image}`}
              alt={cat.path}
              className="w-[90px] h-[90px]  object-contain"
            />
          </div>
        ))}
      </div>
      <div ref={scrollRef}  className="grid grid-cols-4   gap-0 md:hidden w-full overflow-x-auto scroll-smooth scrollbar-hide">
        {category.slice(0, 8).map((cat, index) => (
          <div key={index} className="flex justify-center ">
            <img
              src={`./images/${cat.image}`}
              alt={cat.path}
              className="w-[90px] h-[90px]  object-contain"
            />
          </div>
        ))}
      </div>
      </div> */}

      <hr className='border-[1px] border-gray-300 my-6' />
    </div>
  )
}

export default Category
