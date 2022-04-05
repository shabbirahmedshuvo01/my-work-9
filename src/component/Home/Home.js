import React from 'react';
import './Home.css';
import image from '../images/01.jpg'

const Home = () => {
    return (
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
    );
};

export default Home;