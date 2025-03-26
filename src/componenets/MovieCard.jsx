import Button from "./Button";

export default function MovieCard({ movie }) {
    return (
        <div className=" flex-grow w-full max-w-[320px] sm:max-w-[380px] md:max-w-[280px] lg:max-w-[240px] xl:max-w-[220px] shadow-md bg-white rounded-2xl overflow-hidden transform transition-all hover:scale-105">
            {/* Movie Poster */}
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[300px] sm:h-[350px] md:h-[300px] lg:h-[280px] xl:h-[260px] object-cover rounded-t-2xl"
            />

            {/* Movie Details */}
            <div className="p-4">
                <h2 className={`font-semibold text-gray-800 ${movie.title.length < 30 ? "text-lg" : "text-sm"}`}>
                    {movie.title}
                </h2>
                <p className="text-gray-500 text-xs mt-1">{movie.genre}</p>
                <p className="text-gray-500 text-xs mt-1">Release: {movie.releaseDate}</p>

                {/* Book Button */}
                <div className="mt-3">
                    <Button>Book Now</Button>
                </div>
            </div>
        </div>
    );
}
