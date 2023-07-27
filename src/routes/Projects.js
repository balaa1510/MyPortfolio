import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Work from '../components/Work';
import GitPro from '../components/GitPro';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <GitPro/>
      <Footer/>
    </div>
  )
}

export default Projects;
