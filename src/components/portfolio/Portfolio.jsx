import React from 'react';
import './portfolio.scss';
import {AiFillCode,AiFillMail} from "react-icons/ai";

export default function Portfolio({Instapopupopen,setInstapopupopen}) {
    
    return (
        <div className="portfolio" id="portfolio">
        <div className="row1">
            <div className="instagramy" onClick={()=>setInstapopupopen(!Instapopupopen)}>
                <div className="thumbnail">
                    <img className="tn" alt="icon" src={require('./instabot.png')} ></img>
                </div>
                <h2 className="caption">Instagram Downloader Bot</h2>
            </div>
            <div className="item">
                <div className="thumbnail"><AiFillMail className="tn"/></div>
                <h2 className="caption">Spam Checker</h2>
            </div>        
        </div>
        <div className="row2">
            <div className="item">
                <div className="thumbnail"><AiFillCode className="tn"/></div>
                    <h2 className="caption">C++ project</h2>
                </div>
                <div className="item" style={{opacity:0}}></div>        
        </div>
        </div>
        
    )
}
