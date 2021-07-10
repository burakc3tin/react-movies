import * as actionTypes from './actionTypes'


export const searchMovie = () => ({

    type : actionTypes.SEARCH_MOVIE,
    payload : "https://api.themoviedb.org/3/search/movie?api_key=31a037d03560f73a923bc940d4cfaa4f&query=Avatar"

    


})

export const searchWords = (e) => ({

    type : actionTypes.SEARCH_WORDS,
    payload : e.target.value
    


})


     
 
 