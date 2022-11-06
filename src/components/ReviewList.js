import React from "react";
import { useState } from "react";
import Review from "./Review";

export default class ReviewList extends React.Component{
    constructor(props){
        super(props);
        this.state = {reviews:[]};
        this.onReviewSubmit = this.onReviewSubmit.bind(this);
    }
    onReviewSubmit(formState){
        const newReviews = this.state.reviews.slice();
        newReviews.push(formState);
        this.setState({
            reviews:newReviews
        })
    }
    render(){
        return(
            <div className="container">
                {this.state.reviews.map(reviews => (
                    <li key={reviews}>{reviews}</li>
                ))}
                <br></br>
                <Review onReviewSubmit={(formState) => this.onReviewSubmit(formState)} />
            </div>
        )
    }
}