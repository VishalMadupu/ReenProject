import React from "react";

import footerimg from '../picture/img1.png';
import image2 from '../picture/image2.png';

function portfolio(){
    return(
        <div className="homecontent">
            <h1>hello</h1>
            <div className="project">
        <h2>Project 1: Personal Website</h2>
        <p>A personal website built using React.js and Bootstrap, showcasing my skills, projects, and contact information.</p>
        <p>Features:</p>
        <ul>
          <li>Responsive design for mobile and desktop devices</li>
          <li>Interactive components for project showcase</li>
          <li>Contact form for inquiries and collaboration opportunities</li>
        </ul>
        <img src={footerimg} alt="Project 1 Screenshot" />
      </div>
      <div className="project">
        <h2>Project 2: E-commerce Website</h2>
        <p>An e-commerce website developed with MERN stack (MongoDB, Express.js, React.js, Node.js) for selling fashion accessories.</p>
        <p>Features:</p>
        <ul>
          <li>User authentication and authorization for secure access</li>
          <li>Product catalog with filtering and sorting options</li>
          <li>Shopping cart and checkout functionality</li>
        </ul>
        <img src={image2}alt="Project 2 Screenshot" />
      </div>
        </div>
    )
}

export default portfolio;