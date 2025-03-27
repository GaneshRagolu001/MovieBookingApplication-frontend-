import React from 'react'
import Button from './Button'

function MovieDetails({ movie }) {
    return (
        <div>
            <div className='flex flex-col items-center '>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-[30vw] h-[80vh] object-cover rounded-xl shadow-2xl my-5"
                />
            </div>
            <div className="m-10 mt-2  p-4 pt-2 flex flex-col items-start gap-1.5">
                <h2 className={`font-semibold text-gray-800 text-3xl uppercase`}>
                    {movie.title}
                </h2>
                <div className='flex mt-2'>
                    <div className='flex flex-col gap-2'>
                        <p className="text-gray-500 text-md ">Genre </p>
                        <p className="text-gray-500 text-md ">Release  </p>
                        <p className="text-gray-500 text-md ">Duration  </p>
                        <p className="text-gray-500 text-md ">Launguage</p>
                    </div>
                    <div className='flex flex-col gap-3 ml-4'>
                        <span className='ml-6 text-sm'>{movie.genre}</span>
                        <span className='ml-6 text-sm'>{movie.releaseDate}</span>
                        <span className='ml-6 text-sm'>140 min</span>
                        <span className='ml-6 text-sm'>English</span>
                    </div>
                </div>

                <div className='border border-gray-500 rounded-2xl w-full h-[30vh] p-6 mt-10'>
                    <h4 className=" text-xl uppercase">Theater Name</h4>
                    <div>
                        <p className=" text-sm mt-4 ">Location and date</p>
                        <div className='flex justify-between'>
                            <p className="text-sm mt-4 ">Show Name </p>
                            <p className="text-sm mt-4 "> Time</p>
                        </div>
                        <p className="text-gray-500 text-xs mt-4 ">* Cancleation is not available</p>
                    </div>

                    <div className=" mt-3 mx-auto w-50">
                        <Button>Book Now</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieDetails