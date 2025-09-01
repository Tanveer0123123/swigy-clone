import React, { useEffect } from 'react'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { category } from '../category.js';
import { useState } from 'react';

const Category = () => {

    // const [categories, setCategories] = useState([]);

    // const fetchCategories = async () => {
    //     const response = await fetch('https://api.example.com/categories');
    //     const data = await response.json();
    //     setCategories(data);
    // }

    // useEffect(() => {
    //     console.log(category);
    //     fetchCategories();
    // }, []);

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        console.log(category.length)
        console.log(slide + 3)
        if(category.length - 8 == slide) return false;
        setSlide(slide + 3);
    }
    const prevSlide = () => {
        if(slide == 0) return false;
        setSlide(slide - 3);
    }

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div onClick={prevSlide} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FiArrowLeft /></div>
                    <div onClick={nextSlide} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FiArrowRight /></div>
                </div>
            </div>
            <div className='flex overflow-hidden'>
                {category.map((cat, index) => {
                    return(
                        <div key={index}
                        style={{transform: `translateX(-${slide * 100}%)`}}
                         className='w-[150px] shrink-0 duration-500 '>
                            <img   src={`./images/${cat.image}`} alt={cat.path} />
                        </div>
                    )
                })}
            </div>
            <hr className='border-[1px] border-gray-300 my-6' />
             
        </div>
    )
}

export default Category