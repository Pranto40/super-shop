import React from 'react';

import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blogs-details'>
                <h1>what is context api</h1>
                <p>We can send data from one component to another through context API. We can send the child through the porps to send the child from the parents but there is a problem in sending the data through it and there is no problem through the context.And the data can be sent directly without sending it through the baby</p>
            </div>
            <div className='blogs-details'>
                <h1>what is semantic tag in html</h1>
                <p>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. example: header, nav, section, article, aside, footer</p>
            </div>
            <div className='blogs-details'>
                <h1>Inline vs Inline-Block</h1>
                <p>I was actually asked about this in an interview question. I was interviewing for a Front-end role, so I only prepared for algorithm questions. So I stumbled on this. That's why I always recommend folks applying to as many place as they can. Interview is like any skill, the more practice you get, the better you get.</p>
            </div>
        </div>
    );
};

export default Blogs;