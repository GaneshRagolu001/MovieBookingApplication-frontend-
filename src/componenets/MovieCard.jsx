import Button from "./Button";

export default function MovieCard({ movie }) {
    return (
        <div className=" flex-grow w-full lg:h-[82vh] shadow-md bg-white rounded-2xl overflow-hidden transform transition-all hover:scale-105">
            {/* Movie Poster */}
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full lg:w-[40vh] object-cover rounded-t-2xl"
            />

            {/* Movie Details */}
            <div className="p-4 ">
                <h2 className={`font-semibold text-gray-800  ${movie.title.length < 30 ? "text-lg" : "text-[0.67rem]"}`}>
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
