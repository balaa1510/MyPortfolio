import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react'
import React1 from "../assets/Rupee.jpg"
import React2 from "../assets/Rupee.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>A Little About Me :</h1>
            <p>Hi, this is Balaa Rupeni and I've completed my Bachelor's degree in Electronics and Communication Engineering from Anna University Regional Campus, Coimbatore with the CGPA of 8.59. I'm a passionate Front-end Developer who enjoys the life on front-end.Experienced in building multi-platform websites using Responsive Web Design, also completed a course on MERN stack development. And now, as a self-learner and having a deep passion for software development, learning and growing as a Full Stack Developer.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default AboutContent
