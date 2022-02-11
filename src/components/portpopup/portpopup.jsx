import React from 'react';
import "./portpopup.scss";
import { AiFillCloseCircle } from 'react-icons/ai';
import {HiOutlineArrowSmRight, HiOutlineArrowSmLeft} from 'react-icons/hi';


export default function portpopup({Portpopupopen,setPortpopupopen,portpopimg,setportpopimg}) {



    return (Portpopupopen)? (
        <div className="portpopup">
            <div className="content">
                <AiFillCloseCircle className="closebutton" onClick={()=>setPortpopupopen(!Portpopupopen)}/>
               <div className="text">
                    <div className="title">Portfolio Website</div>
                    <div className="skilllist">
                        <div className="skills">React</div>
                        <div className="skills">Node.JS</div>
                        <div className="skills">SASS</div>
                        <div className="skills">HTML5</div>
                        <div className="skills">Heroku</div> 
                        <div className="skills">Responsive</div>
                        <div className="skills">Git</div>
                    </div>
                    <div className="descriptionbox">
                        <div className="description">
                            The very site you're looking at. My portfolio, a fully responsive website hosted with heroku on GitHub.
                            Built from the ground up using React, Nodejs, HTML5, SASS and has backend functionalities with various 
                            other JavaScript libraries. Constantly updating with new stuff as I learn more. Some features might 
                            be incomplete since it is always under more work from time to time. Also one of my first web development 
                            endeavours and my playground for trying out new things. 
                        </div> 
                    </div>
                    <div className="buttons">
                        
                        <button className="githubbutton" onClick={event =>  window.open('https://github.com/ishaan812/portfolio812','_blank')}>
                            <img src={require('./GitHub_Logo_White.png')} alt="Github icon"/>
                        </button>
                        
                    </div>
                </div>
                <div className="imagebox">
                    {
                        portpopimg==1 ?
                        <img src={require('./Responsive.png')} alt="picture 1"></img>
                        : portpopimg==2 ?
                        <img src={require('./portfolio.jpg')} alt="picture 2"></img>
                        : portpopimg==3 ?
                        <img src={require('./popup.jpg')} alt="picture 3" ></img>
                        : portpopimg==4 ?
                        <img src={require('./contact.jpg')} alt="picture 4"></img> 
                        :null
                    }
                    

                    { portpopimg!=4 ? 
                        <HiOutlineArrowSmRight size={35} className="rarrow" onClick={()=>setportpopimg(portpopimg+1)} />
                        :null
                    }
                    { portpopimg!=1 ?
                        <HiOutlineArrowSmLeft size={35} className="larrow" onClick={()=>setportpopimg(portpopimg-1)}/>
                        :null
                    }
                </div>
            </div>
        </div>
    ) : "";
}          
