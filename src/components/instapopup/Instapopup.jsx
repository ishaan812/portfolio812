import React from 'react';
import "./instapopup.scss";
import { AiFillCloseCircle } from 'react-icons/ai';


export default function Instapopup({Instapopupopen,setInstapopupopen}) {
    return (Instapopupopen)? (
        <div className="instapopup">
            <div className="content">
                <AiFillCloseCircle className="closebutton" onClick={()=>setInstapopupopen(!Instapopupopen)}/>
               <div className="text">
                    <div className="title">Instagram Downloader Bot</div>
                    <div className="skilllist">
                        <div className="skills">Flask</div>
                        <div className="skills">Python</div>
                        <div className="skills">API's</div>
                        <div className="skills">Jinja</div>
                        <div className="skills">Bootstrap</div>
                        <div className="skills">Webscraping</div>   
                        <div className="skills">Werkzeug</div>   
                    </div>
                    <div className="descriptionbox">
                        <div className="description">
                            This flask app is made by using various Python libraries like Instagramy, Instaloader etc used to webscrape data from Instagram.
                            It is primarily used to download posts and display pictures from public Instagram accounts in their true quality. While the backend
                            comprises of Flask and Python. Frontend comprises of HTML with the jinja templating engine as well as Bootstrap.
                        </div> 
                    </div>
                    <div className="buttons">
                        
                        <button className="githubbutton" onClick={event =>  window.open('https://github.com/ishaan812/insta-bot','_blank')}>
                            <img src={require('./GitHub_Logo_White.png')} alt="Instagram icon"/>
                        </button>
                        
                    </div>
                </div>
                <div className="videobox">
                    <div className="vtitle">
                        
                    </div>
                    <video controls autoplay muted>
                        <source src={require('./Instagramydemosubbed.mp4')} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    ) : "";
}          
