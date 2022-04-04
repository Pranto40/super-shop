import React from 'react';
import './Home.css';
import img from '../images/laptop.jpg'
import Reviews from '../Reviews/Reviews';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
           <div className="row">
               <div className="content">
                   <h1>This is my laptop</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quod. Impedit quisquam perspiciatis dolores earum, velit cupiditate a voluptatibus expedita ipsam accusantium eum voluptates asperiores, non ipsum iure aut maiores.</p>
                   <button className='btn'>Live demo</button>
               </div>
               <div className="images">
                   <img src={img} alt="" />
               </div>
           </div>

           <div className='customer-reviews'>
               <h3>Customer Reviews</h3>
               <Reviews></Reviews>
               <Link to='/reviews' className='btn'>See All Reviews</Link>
           </div>
        </div>
    );
};

export default Home;