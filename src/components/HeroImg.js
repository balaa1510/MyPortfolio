import "./HeroimgStyles.css"
import React from 'react'
import BgImg from "../assets/bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={BgImg} alt="BgImg"/>
      </div>
        <div className="content">
            <p>HI, I'M BALAA RUPENI.</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/projects"className="btn">Projects</Link>
                <Link to="/contact"className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
