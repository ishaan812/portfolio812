import React from 'react';
import {AiFillCode,AiFillMail} from "react-icons/ai";
import '././topbar.scss';

export default function topbar({MenuOpen,SetMenuOpen}) {
    
    
    return (
        <div className={"topbar " +(MenuOpen && "active")}>
            <div className="Wrapper">
                <div className="Left">
                    <a href="#contact" className="Logo"><img src={require("./IS.gif")} alt="Logo"/></a>
                    <div className="github">
                        <AiFillCode className="codeicon" onClick={event=>window.open('https://github.com/ishaan812')}/>
                        <span> https://github.com/ishaan812</span>     
                    </div>
                    <div className="mail">
                        <AiFillMail className="mailicon" onClick={event=>window.open('mailto:ishaan.shah@gmail.com')}/>
                        <span> ishaan.shah@gmail.com</span>     
                    </div>
                    
                </div>
                <div className="Right">
                    <div className="hamburger" onClick={()=>SetMenuOpen(!MenuOpen)}>
                        <span className="line1"></span>    
                        <span className="line2"></span>    
                        <span className="line3"></span>    
                    </div>
                </div>
            </div>
        </div>
    )
}
      