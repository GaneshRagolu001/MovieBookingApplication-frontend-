import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { MOVIES } from './MoviesSection';
import MovieDetails from './MovieDetails';
const DATES = [
    { "date": "15 Dec Mon" },
    { "date": "22 Jan Wed" },
    { "date": "10 Feb Sat" },
    { "date": "05 Mar Tue" },
    { "date": "18 Apr Thu" },
    { "date": "30 May Fri" },
    { "date": "12 Jun Wed" },
    { "date": "25 Jul Thu" },
    { "date": "08 Aug Sun" },
    { "date": "19 Sep Fri" },
    { "date": "04 Oct Sat" },
    { "date": "27 Nov Thu" }
]

const LOCATIONS = [

    "New York",
    "London",
    "Tokyo",
    "Sydney",
    "Paris"
]

function Shows() {

    const [opendropdown, SetopenDropdown] = useState(false);
    const [getdropdown, Setdropdown] = useState(null);

    const swiperRef = useRef(null);

    return (
        <div className='m-10 border-b border-[#8F98AA] flex justify-evenly '>
            <div className=''>
                <div>
                    <h2 className='text-3xl font-semibold mb-4 uppercase'>Movie Title</h2>
                    <p className='text-xs max-w-[60vw] mb-4'>Movie desciption Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam, dolorem eligendi possimus odit voluptas delectus
                        doloribus molestiae nulla maiores! Perspiciatis repellendus excepturi placeat
                        id eaque ipsa obcaecati ducimus non!</p>
                </div>

                <div className='h-20 max-w-[40vw] ml-5 mt-15 m-6'>
                    <button
                        className="absolute  left-2  text-gray-600 p-2 sm:p-3 rounded-full   z-2  transition"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="absolute  right-[52.5vw]  text-gray-600 p-2 sm:p-3 rounded-full   z-2  transition"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Swiper Carousel */}
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={0}
                        slidesPerView={5}
                        pagination={false}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        className="rounded-lg "
                    >
                        {DATES.map((date, index) => (
                            <SwiperSlide key={index} className='max-w-[150px]' >
                                <div className=' rounded-md w-[90px] h-[80px] border flex flex-col justify-center items-center '>
                                    <p>{date.date.substring(0, 7)}</p>
                                    <p>{date.date.substring(7)}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='border-t border-t-gray-500'></div>
                <div className="flex  max-w-60 items-center mt-10">
                    <img src=" https://img.icons8.com/?size=100&id=85049&format=png&color=000000" alt="ig" className="h-5 w-5 rounded-full" />
                    <div className="relative inline-block">
                        <button onClick={() => SetopenDropdown(!opendropdown)} className="px-4 py-2 rounded flex-col justify-center">
                            {getdropdown ? getdropdown : "Current Location"} <span><img src="https://img.icons8.com/?size=100&id=85502&format=png&color=000000" alt="#" className='h-5 w-5 rounded-full float-end ml-2' /></span>
                        </button>
                        {opendropdown && (
                            <div className="absolute bg-white shadow-md mt-2 rounded w-40">
                                {LOCATIONS.map((loc) => (<button key={loc} className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => { Setdropdown(loc), SetopenDropdown((!opendropdown)) }}>{loc}</button>))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className=' w-[40vw] pt-20'>
                <MovieDetails movie={MOVIES[0]}/>
            </div>




        </div >

    )
}

export default Shows