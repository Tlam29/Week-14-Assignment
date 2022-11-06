import React from "react";
import { useState } from "react";

function Review(){
    const [review, setReview]= useState(null);
    const [print,setPrint]= useState(false);
    //Function to get the data from text area
    function getData(val){
        setReview(val.target.value)
        setPrint(false)
    }

    return(
            <div className="d-flex justify-content-center align-items-center">
                <textarea type='text' onChange={getData} />
                <button onClick={()=>setPrint(true)} className='btn btn-primary m-5'>Submit Review</button>
                  {
                    //if print is true then output the review
                    print?
                    <p className="text-white">{review}</p>
                    :null
                }
            </div>
        )
}
export default Review;


    

   
    
        
    
