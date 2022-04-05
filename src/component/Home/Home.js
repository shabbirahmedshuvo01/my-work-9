import React, { useEffect, useState } from 'react';
import './Home.css';
import image from '../images/01.jpg'
import Review from '../Review/Review';
import { Link } from 'react-router-dom';


const Home = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('visitor.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);


    return (
        <div>
            <div className='container'>
                <div>
                    <h2>That's our Shop</h2>
                    <h2>You are most Welcome</h2>
                    <p>Shopping has almost become an art,
                        <br />
                        and not everyone has the talent to buy the right things.
                        <br />
                        As your shopping buddies grow,
                        <br />
                        it is always better to have some quotes about shopping handy.</p>
                </div>
                <div className='photo-work'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className='visit-work'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
                <Link to={"/reviews"}>
                    <button className='btn-work'>Review</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;