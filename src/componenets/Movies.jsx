import React from 'react'
import { MOVIES } from './MoviesSection'
import MovieCard from './MovieCard'

export const MOREMOVIES = [
    ...MOVIES,
    {
        "title": "Forrest Gump",
        "genre": "Drama, Romance",
        "releaseDate": "1994-07-06",
        "poster": "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
    },
    {
        "title": "The Shawshank Redemption",
        "genre": "Drama, Crime",
        "releaseDate": "1994-09-23",
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    },
    {
        "title": "The Godfather",
        "genre": "Crime, Drama",
        "releaseDate": "1972-03-24",
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },
    {
        "title": "Pulp Fiction",
        "genre": "Crime, Drama",
        "releaseDate": "1994-10-14",
        "poster": "https://image.tmdb.org/t/p/w500/tptjnB3AdX0nO6gi9g7mnV5whZn.jpg"
    },
    {
        "title": "Fight Club",
        "genre": "Drama",
        "releaseDate": "1999-10-15",
        "poster": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "genre": "Adventure, Fantasy, Action",
        "releaseDate": "2003-12-17",
        "poster": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "genre": "Adventure, Fantasy, Action",
        "releaseDate": "2001-12-19",
        "poster": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "genre": "Adventure, Fantasy, Action",
        "releaseDate": "2002-12-18",
        "poster": "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg"
    },
    {
        "title": "Gladiator",
        "genre": "Action, Drama",
        "releaseDate": "2000-05-05",
        "poster": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
    },
    {
        "title": "The Lion King",
        "genre": "Animation, Drama, Family",
        "releaseDate": "1994-06-24",
        "poster": "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
    },
    {
        "title": "The Prestige",
        "genre": "Drama, Mystery, Sci-Fi",
        "releaseDate": "2006-10-20",
        "poster": "https://image.tmdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg"
    },
    {
        "title": "Django Unchained",
        "genre": "Western, Drama",
        "releaseDate": "2012-12-25",
        "poster": "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg"
    },
    {
        "title": "The Wolf of Wall Street",
        "genre": "Biography, Crime, Drama",
        "releaseDate": "2013-12-25",
        "poster": "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg"
    },
    {
        "title": "The Silence of the Lambs",
        "genre": "Crime, Drama, Thriller",
        "releaseDate": "1991-02-14",
        "poster": "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg"
    },
    {
        "title": "Se7en",
        "genre": "Crime, Drama, Thriller",
        "releaseDate": "1995-09-22",
        "poster": "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg"
    },
    {
        "title": "Saving Private Ryan",
        "genre": "Drama, War",
        "releaseDate": "1998-07-24",
        "poster": "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U36zxnDYYUQx9d.jpg"
    },
    {
        "title": "Schindler's List",
        "genre": "Biography, Drama, History",
        "releaseDate": "1993-12-15",
        "poster": "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg"
    },
    {
        "title": "The Departed",
        "genre": "Crime, Drama, Thriller",
        "releaseDate": "2006-10-06",
        "poster": "https://image.tmdb.org/t/p/w500/jyAgiqVSx5fl0NNj7WoGGKweXrL.jpg"
    },
    {
        "title": "Whiplash",
        "genre": "Drama, Music",
        "releaseDate": "2014-10-10",
        "poster": "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBaHXD.jpg"
    }
    


]
function Movies() {
    return (
        <div className='flex flex-wrap gap-10 lg:mt-10 justify-center '>
            {MOREMOVIES.map((movie,index) => <div key={index}><MovieCard movie={movie} /></div>)}
        </div>
    )
}

export default Movies