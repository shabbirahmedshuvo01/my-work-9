import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, comment, ratings } = props.review;
    return (
        <div>
            <div className='public-told'>
                <h4>{name}</h4>
                <p>{comment}</p>
                <p>Ratings: {ratings} star</p>
            </div>
        </div>
    );
};

export default Review;