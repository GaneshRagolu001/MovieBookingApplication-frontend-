import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const movies = [
    {
        title: "Spider-Man: No Way Home",
        image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
        tags: ["XXI", "CGV", "Cinépolis"],
    },
    {
        title: "Yowis Ben Finale",
        image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
        tags: ["XXI", "CGV", "Cinépolis"],
    },
    {
        title: "Interstellar",
        image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
        tags: ["IMAX", "Dolby", "4DX"],
    },
    {
        title: "Avengers: Endgame",
        image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
        tags: ["Marvel", "Superhero"],
    },
];

export default function MovieCardCarousel() {
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 ">
            {/* Custom Navigation Buttons */}
            <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-gray-500 p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 hover:text-white transition hidden md:flex"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-500 p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 hover:text-white transition hidden md:flex"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Swiper Carousel */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                    640: { slidesPerView: 1, spaceBetween: 20 }, // Small tablets
                    768: { slidesPerView: 2, spaceBetween: 25 }, // Tablets
                    1024: { slidesPerView: 2, spaceBetween: 30 }, // Laptops
                    1280: { slidesPerView: 2, spaceBetween: 35 }, // Desktops
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-lg h-[54vh]  lg:h-[92vh] "
            >
                {movies.map((movie, index) => (

                    <SwiperSlide key={index} className="flex justify-center ">
                        <div className="bg-white rounded-lg shadow-lg p-4 w-full lg:h-[85vh] lg:w-[26vw] lg:mx-auto ">
                            <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-lg lg:h-[70vh]" />
                            <h2 className={"text-center text-xs font-semibold mt-4 "}>{movie.title}</h2>
                            <div className="flex justify-center mt-2 space-x-2">
                                {movie.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-yellow-500 text-white px-3 py-1 text-sm rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
