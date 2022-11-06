import React from "react";
import Review from "./Review";
import StarRating from "./StarRating";
import ReviewList from "./ReviewList";




const MovieList = (props) =>{
    return(
        <>  <div>
            {props.movies?.map((movies, index) => (
                <div className="image-container d-flex justify-content-start m-40">
                    <img src={movies.Poster} alt='movie'></img>
                    <br></br>
                    <StarRating />
                    <br></br>
                    <ReviewList />
                    
                </div>
                
            ))}
            </div>
        </>
    )
}
export default MovieList;