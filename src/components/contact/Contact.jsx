import React from 'react';
import './contact.scss';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    
    const [message,setmessage] = useState(false);
    
    const handleSubmit= (e) =>{
        e.preventDefault();
        emailjs.sendForm('testpy812@gmail.com', 'template_rx7457v', e.target , 'user_JCMmPDtx3CJOCSTCtUmRb')
        .then((result) => {
          console.log(result.text);
          setmessage(true);
          alert("Mail has been sent !");
        }, (error) => {
          console.log(error.text);
        },
        e.target.reset());
        
    }

    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <div className="left">
                    <img src="https://media.giphy.com/media/11fHSR7hmRLbkA/giphy.gif"  alt="animation" className="shake"></img>
                </div>
                <div className="right">
                    <h1>Contact form</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="name"></input>
                        <textarea type="text" placeholder="Message" name="message"></textarea>
                        <button type="submit">Submit</button>
                        {message && <span>Will get back to you ASAP :)</span>}
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="ishaan">A website by Ishaan Shah</div>
                <div className="anay">Designed by Anay Shah</div>
            </div>
            
         
        </div>
    )
}
