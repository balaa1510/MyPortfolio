import { Link } from "react-router-dom"
import "./GitProStyles.css"
import React from 'react'
import { FaGithub } from "react-icons/fa"

const GitPro = () => {
  return (
    <div className="git">
        <p>Dive into my GitHub repository for a closer look at my projects.</p>
        <Link className="link" to="https://github.com/balaa1510"><FaGithub size={20} style={{color:"#fff", marginRight:"1rem"}}/></Link>
    </div>
  )
}

export default GitPro
