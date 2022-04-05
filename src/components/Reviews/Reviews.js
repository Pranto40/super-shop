import React from 'react';
import useCart from '../../Hooks/useCart';
import ReviewsDetails from '../ReviewsDetails/ReviewsDetails';
import './Reviews.css'

const Reviews = () => {
    const [carts] = useCart([])
    return (
        <div className='reviews'>
            {
                carts.map(cart => <ReviewsDetails
                key={cart.id}
                cart = {cart}
                ></ReviewsDetails>)
            }
        </div>
    );
};

export default Reviews;