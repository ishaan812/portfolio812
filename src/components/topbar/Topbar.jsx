import React from 'react';
import {AiFillCode,AiFillMail} from "react-icons/ai";
import '././topbar.scss';

export default function topbar({MenuOpen,SetMenuOpen}) {
    
    
    return (
        <div className={"topbar " +(MenuOpen && "active")}>
            <div className="Wrapper">
                <div className="Left">
                    <a href="#contact" className="Logo">I.S.</a>
                    <div className="github">
                        <AiFillCode className="codeicon"/>
                        <span> https://github.com/ishaan812</span>     
                    </div>
                    <div className="mail">
                        <AiFillMail className="mailicon"/>
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
      