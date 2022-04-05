import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ThreeCustomerReviewDetails = ({cart}) => {
    const {img, name, comment} = cart;
    return (
        <div className='reviews-details'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2 className='icons'>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
            </h2>
            <h2>{comment}</h2>
        </div>
    );
};

export default ThreeCustomerReviewDetails;