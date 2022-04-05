import React from 'react';
import useCart from '../../Hooks/useCart';
import ThreeCustomerReviewDetails from '../ThreeCustomerReviewDetails/ThreeCustomerReviewDetails';

const ThreeCustomerReview = () => {
    const [carts] = useCart([]);
    const Three = carts.slice(0, 3);
    return (
        <div className='reviews'>
            {
                Three.map(cart => <ThreeCustomerReviewDetails
                key={cart.id}
                cart = {cart}
                ></ThreeCustomerReviewDetails>)
            }
        </div>
    );
};

export default ThreeCustomerReview;