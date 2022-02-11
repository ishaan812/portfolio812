import React from 'react';
import "./tkinterpopup.scss";
import { AiFillCloseCircle } from 'react-icons/ai';


export default function Tkinterpopup({Tkinterpopupopen,setTkinterpopupopen}) {
    return (Tkinterpopupopen)? (
        <div className="tkinterpopup">
            <div className="content">
                <AiFillCloseCircle className="closebutton" onClick={()=>setTkinterpopupopen(!Tkinterpopupopen)}/>
               <div className="text">
                    <div className="title">Display Picture Downloader</div>
                    <div className="skilllist">
                        <div className="skills">Python</div>
                        <div className="skills">Tkinter</div>
                        <div className="skills">PIL</div>
                        <div className="skills">UrlLib</div>
                        <div className="skills">API's</div>
                    </div>
                    <div className="descriptionbox">
                        <div className="description">
                            This is a python app which has the very basic utility of scraping profile picture from instagram accounts and
                            allowing the user to downloading the uncropped picture in its original quality all the user has to input is to 
                            enter the Instagram username.
                        </div> 
                    </div>
                    <div className="buttons">
                        <button className="githubbutton" onClick={event =>  window.open('https://github.com/ishaan812/insta-profilepicture-gui','_blank')} >
                            <img src={require('./GitHub_Logo_White.png')} alt="Github icon"/>   
                        </button>
                    </div>
                </div>
                
                
            </div>
        </div>
    ) : "";
}          
