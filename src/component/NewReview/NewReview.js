import React, { useEffect, useState } from 'react';
import LocalReview from './LocalReview';

const NewReview = () => {
    const [opinions, setoPinion] = useState([]);

    useEffect(() => {
        fetch('visitor.json')
            .then(res => res.json())
            .then(data => setoPinion(data))
    }, [])


    return (
        <div className='visit-work'>
            {
                opinions.map(opinion => <LocalReview key={opinion.id} opinion={opinion}></LocalReview>)
            }
        </div>
    );
};

export default NewReview;