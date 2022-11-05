import React from "react";
import AddFavorite from "./AddtoFavorites";

const MovieList = (props) =>{
    return(
        <>
            {props.movies?.map((movies, index) => (
                <div className="image-container d-flex justify-content-start m-5">
                    <img src={movies.Poster} alt='movie'></img>
                    <div className="overlay d-flex align-items-center justify-content-center"><AddFavorite/></div>
                </div>
            ))}
        </>
    )
}
export default MovieList;