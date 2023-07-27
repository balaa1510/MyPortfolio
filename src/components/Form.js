import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formsubmit.co/af294ff563bb4202490ab5ce4ec4db6c" method="POST">
            <label>Your Name</label>
            <input type="text" name="Name" required></input>
            <label>Email</label>
            <input type="email" name="Email" required></input>
            <label>Subject</label>
            <input type="text"  name="Sub"></input>
            <label>Message</label>
            <textarea name="Message" rows="6" placeholder="Type your message here"></textarea>
            <button className="btn" type="submit">Submit</button>
        </form>    
    </div>
  )
}

export default Form
