import React from 'react';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
    const myAllProjects = [
        {
            sl_no: 01,
            title: "Haven Interior Design",
            img: {interior}, 
            description: "A Single page web app with dashboard where people can pick a service for their home or office interior design. People can see their order, share their valuable comment about any service from his dashboard . people can payment with debit or credit card. An admin can review order list, handle order status, make an admin or add a service from his dashboard.",
            gitHubRepo: "", 
            liveLink: "https://haven-interior-design.web.app/"
        },
        {
            sl_no: 02,
            title: "Municipal Transports",
            img: {municipal}, 
            description: "The website has a list of vehicles. You can ride anywhere using this vehicle. On the home page, you'll see the names of all the cars you click on.If you are not a logged in user, you can sign up with your email first and then login. You can log in using your Google or Facebook account.After logging in, you can see Google Maps and a search area by clicking anywhere on the home page or destination button. In the search box, you can type where you want to go and click the search button to see which cars are available for you to drive.",
            gitHubRepo: "", 
            liveLink: "https://municipal-transports.web.app/"
        },
        
        
        {
            sl_no: 03,
            title: "Finest Foods",
            img: {finest}, 
            description: "The website is a simple e-Commerce website. it has Login system and also have an Admin Panel. If you are an Admin you can add, delete or edit a product. if you are an User you can buy product as much as you need.You can see your checkout products in the orders page.",
            gitHubRepo: "", 
            liveLink: "https://finest-foods.web.app/"
        },
        {
            sl_no: 04,
            title: "Teams of EPL",
            img: {teamOfEpl}, 
            description: "The website is a list of all the Premier League clubs with detailed information. On the home page, you can see all the club names, their badges and an Explorer button. If you click the Explore button, you'll see detailed information about the club you clicked. You will see when the club was founded, with the club logo, club description, name of the stadium with details, image of the club jersey and stadium.You'll see three clickable social icons to connect with the club via social media and click on these icons to see their updated news.",
            gitHubRepo: "", 
            liveLink: "https://focused-albattani-9ab2e3.netlify.app/"
        },
        {
            sl_no: 05,
            title: "Penguin Fashion",
            img: {penguin}, 
            description: "",
            gitHubRepo: "", 
            liveLink: "https://ubaidur-rahman.github.io/penguin-fashion-responsive/"
        },
    ]

    return (
        <div>
{
    myAllProjects.map(project => <SingleProject project={project} />)
}
        </div>
    );
};

export default Projects;