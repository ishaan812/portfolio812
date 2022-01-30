import React from 'react';
import './portfolio.scss';
import {AiFillCode,AiFillMail} from "react-icons/ai";

export default function Portfolio({Instapopupopen,setInstapopupopen}) {
    
    return (
        <div className="portfolio" id="portfolio">
            <div className="slider">
            <div className="itemwrapper">
                <div className="instagramy" onClick={()=>setInstapopupopen(!Instapopupopen)}>
                    <div className="thumbnail">
                       <img className="tn" alt="icon" src={require('./instabot.png')} ></img>
                    </div>
                    <h2 className="caption">Instagram Downloader Bot</h2>
                </div>
                <h2 className="belowcaption">Instagram Downloader Bot</h2>
            </div>
            <div className="itemwrapper">
                <div className="Tkinter">
                    <div className="thumbnail"><AiFillMail className="tn"/></div>
                    <h2 className="caption">Tkinter Display Picture Downloader</h2>
                </div> 
                <h2 className="belowcaption">Tkinter Display Picture Downloader</h2>
            </div>
            <div className="itemwrapper" >
                <div className="react row2">
                    <div className="thumbnail"><AiFillCode className="tn"/></div>
                    <h2 className="caption">React JS Portfolio Website</h2>
                </div>
                <h2 className="belowcaption">React JS Portfolio Website</h2>
            </div>
            
            </div>
        </div>
    
        
    )
}
