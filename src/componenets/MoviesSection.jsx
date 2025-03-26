import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export const MOVIES = [
    {
        title: "Inception",
        genre: "Sci-Fi, Thriller",
        releaseDate: "2010-07-16",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        releaseDate: "2008-07-18",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        title: "Interstellar",
        genre: "Sci-Fi, Adventure, Drama",
        releaseDate: "2014-11-07",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        title: "Avatar",
        genre: "Action, Adventure, Fantasy",
        releaseDate: "2009-12-18",
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },
    {
        title: "Titanic",
        genre: "Romance, Drama",
        releaseDate: "1997-12-19",
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    },
    {
        title: "Avengers: Endgame",
        genre: "Action, Adventure, Sci-Fi",
        releaseDate: "2019-04-26",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
        title: "The Matrix",
        genre: "Action, Sci-Fi",
        releaseDate: "1999-03-31",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
    {
        title: "Joker",
        genre: "Crime, Drama, Thriller",
        releaseDate: "2019-10-04",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    }
];

function MoviesSection() {
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 my-auto">
            {/* Left Navigation Button */}
            <button
                className="absolute left-2 top-1/2 -translate-y-1/2 hidden md:flex bg-white text-gray-700 p-3 rounded-full shadow-lg z-10 hover:bg-gray-300 transition"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Right Navigation Button */}
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 hidden md:flex bg-white text-gray-700 p-3 rounded-full shadow-lg z-10 hover:bg-gray-300 transition"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Swiper Component */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    480: { slidesPerView: 1, spaceBetween: 15 }, // Small screens
                    768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
                    1024: { slidesPerView: 3, spaceBetween: 25 }, // Laptops
                    1280: { slidesPerView: 4, spaceBetween: 30 }, // Desktops
                }}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[Pagination, Navigation]}
                className="overflow-hidden rounded-lg h-[70vh] w-full py-4"
            >
                {MOVIES.map((movie, index) => (
                    <SwiperSlide key={index} className="p-2 ">
                        <MovieCard movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MoviesSection;
