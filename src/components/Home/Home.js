import React from 'react';
import './Home.css';
import img from '../images/laptop.jpg'
import { Link } from 'react-router-dom';
import ThreeCustomerReview from '../ThreeCustomerReview/ThreeCustomerReview';

const Home = () => {
    return (
        <div className='home'>
           <div className="row">
               <div className="content">
                   <h1>Lenovo IdeaPad</h1>
                   <p>The Lenovo IdeaPad Slim 3i 15IGL comes with Intel Celeron N4020 (4M Cache, 1.10 GHz up to 2.80 GHz) and 4GB DDR4 2400MHz RAM. It also comes with a 1TB 5400rpm 2.5" HDD to store all your important data. It is integrated with Integrated Intel UHD Graphics 600 and it has a 15.6″ HD (1366×768) display with TN panel and 220nits Anti-glare screen</p>
                   <button className='btn'>Live demo</button>
               </div>
               <div className="images">
                   <img src={img} alt="" />
               </div>
           </div>

           <div className='customer-reviews'>
               <h3>Customer Reviews (3) </h3>
               <ThreeCustomerReview></ThreeCustomerReview>
               <Link to='/reviews' className='btn'>See All Reviews</Link>
           </div>
        </div>
    );
};

export default Home;