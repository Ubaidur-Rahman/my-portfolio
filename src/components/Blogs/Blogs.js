import React from 'react';
import basicJs from '../../images/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg';
import es6 from '../../images/maxresdefault.jpg';
import important10 from '../../images/Top-10-Tips-To-Learn-JavaScript.jpg';
import SingleBlog from '../SingleBlog/SingleBlog';



const Blogs = () => {

    const myAllBlogs = [
        {
            sl_no: 1,
            title: "Some basic methods of Javascript",
            img: basicJs,
            details: "A variable is like a container where something is kept. In a variable, you can save numbers, string, object, or a function...",
            liveLink: "https://ubaidur-rahman.medium.com/some-basic-methods-of-javascripts-652b32f00bc3"
        },
        {
            sl_no: 2,
            title: "10 most important javascript problems",
            img: important10,
            details: "“” empty string is a falsy value whereas if the string length is greater than 0 even than in a string...",
            liveLink: "https://ubaidur-rahman.medium.com/10-most-important-javascript-problems-c641a81e37b8"
        },
        {
            sl_no: 3,
            title: "Some Important ES6 features in Javascript",
            img: es6,
            details: "let and const, If we declared variables by var are hoisted to the top because var is function scope. It means...",
            liveLink: "https://ubaidur-rahman.medium.com/some-important-es6-features-in-javascript-cd18e5adcb01"
        },
        
    ]
    return (
        <div id="blogs" className="container">
            <h1 className="divider component-title m-5">Blogs</h1>
            <div className="row gx-2">
            {
                myAllBlogs.map(blog => <SingleBlog blog={blog} />   )
            }
            </div>
        </div>
    );
};

export default Blogs;