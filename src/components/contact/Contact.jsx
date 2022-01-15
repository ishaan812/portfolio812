import React from 'react';
import './contact.scss';
import { useState } from 'react';

export default function Contact() {
    
    const [message,setmessage] = useState(false);
    
    const handleSubmit= (e) =>{
        e.preventDefault();
        setmessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <div className="left">
                    <img src={require("./shake1.png")}  alt="shake" className="shake"></img>
                </div>
                <div className="right">
                    <h1>Contact form</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email"></input>
                        <textarea type="text" placeholder="Message"></textarea>
                        <button type="submit">Submit</button>
                        {message && <span>Will get back to you ASAP :)  </span>}
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="bottom">
                    <div className="ishaan">A website by Ishaan Shah</div>
                    <div className="anay">Designed by Anay Shah</div>
                </div>
            </div>
            
         
        </div>
    )
}
