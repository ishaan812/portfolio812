import React from 'react';
import './portfolio.scss';

export default function Portfolio({Instapopupopen,setInstapopupopen,Portpopupopen,setPortpopupopen,Tkinterpopupopen,setTkinterpopupopen}) {
    
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
                <div className="Tkinter" onClick={()=>setTkinterpopupopen(!Tkinterpopupopen)}>
                    <div className="thumbnail">
                        <img className="tn" alt="icon" src={require('./tkinter.png')} ></img>
                    </div>
                    <h2 className="caption">Display Picture Downloader</h2>
                </div> 
                <h2 className="belowcaption">Display Picture Downloader</h2>
            </div>
            <div className="itemwrapper" >
                <div className="react row2" onClick={()=>setPortpopupopen(!Portpopupopen)}>
                    <div className="thumbnail">
                        <img className="tn" alt="icon" src={require('./portfolio.png')} ></img>
                    </div>
                    <h2 className="caption">Portfolio Website</h2>
                </div>
                <h2 className="belowcaption">Portfolio Website</h2>
            </div>
            
            </div>
        </div>
    
        
    )
}
