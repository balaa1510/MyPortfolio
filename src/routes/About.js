import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
       <Navbar/>
       <Heroimg2  heading="Hello There!" 
       text="I design, edit and paint."/>
       <AboutContent/>
       <Footer/>
    </div>
  )
}

export default About
