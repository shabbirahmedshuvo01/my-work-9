import React from 'react';

const LocalReview = (props) => {
    const { name, comment, ratings } = props.opinion;
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

export default LocalReview;