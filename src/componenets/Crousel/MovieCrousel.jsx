import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const movies = [

    { "title": "The Dark Knight", "image": "https://pixflow.net/wp-content/uploads/2023/09/TV2x-imgae_00132.jpg" },
    { "title": "Inception", "image": "https://pixflow.net/wp-content/uploads/2023/09/TV2x-imgae_00132.jpg" },
    { "title": "Interstellar", "image": "https://pixflow.net/wp-content/uploads/2023/09/TV2x-imgae_00132.jpg" },
    { "title": "Avengers: Endgame", "image": "https://pixflow.net/wp-content/uploads/2023/09/TV2x-imgae_00132.jpg" },
    { "title": "The Matrix", "image": "https://pixflow.net/wp-content/uploads/2023/09/TV2x-imgae_00132.jpg" }

];

export default function MovieCarousel() {
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full max-w-6xl mx-auto mt-6 ">
            {/* Custom Navigation Buttons */}
            <button
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white text-gray-600 p-2 sm:p-3 rounded-full shadow-lg z-2 hover:bg-gray-300 transition"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white text-gray-600 p-2 sm:p-3 rounded-full shadow-lg z-2 hover:bg-gray-300 transition"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Swiper Carousel */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={15}
                slidesPerView={1}

                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-lg shadow-lg"
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index} className="relative flex justify-center">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full max-h-[350px] sm:max-h-[400px] object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded">
                            <h2 className="text-md sm:text-lg font-bold">{movie.title}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
