import React from 'react';
import './Home.css';
import img from '../images/laptop.jpg'

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
        </div>
    );
};

export default Home;