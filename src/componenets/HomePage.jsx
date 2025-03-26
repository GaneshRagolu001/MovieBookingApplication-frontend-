import React from 'react'
import MovieCardCrousel from './Crousel/MovieCardCrousel'
import MovieCarousel from './Crousel/MovieCrousel'
import MoviesSection from './MoviesSection'

function HomePage() {
  return (
    <div className='m-[2rem] '>
      <div className='m-[1.5rem]  mb-14 '>
        <MovieCarousel />
      </div>
      <div className='m-[1.5rem] mb-14'>
        <MovieCardCrousel />

      </div>
      <h3 className="text-sm  text-center m-0 font-bold text-gray-800">
        NOW SHOWING
      </h3>
      <div className='m-[1.5rem] mx-auto '>
        <MoviesSection />
      </div>
      <h3 className="text-sm text-center font-bold text-gray-800">
        UPCOMING MOVIES
      </h3>
      <div className='m-[1.5rem] mx-auto '>
        <MoviesSection />
      </div>

    </div>
  )
}

export default HomePage