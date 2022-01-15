import './intro.scss'
import {MdOutlineSchool,MdOutlineMonitor,MdArrowDropDownCircle} from 'react-icons/md';
import {BsSun} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import React, { useRef, useEffect } from 'react';
import { init } from 'ityped';



export default function Intro() {
    
    const Greeter= useRef();

    useEffect(()=>{
        init(Greeter.current, 
                {strings: ['Hello!', 'नमस्ते!','こんにちわ!','Hola!' ,'Hej!', "Bonjour!" ,"Guten Tag!", "Marhaba!"] ,
                backDelay: 3000,
            loop: true})

    })
    
    

    
    return (
        <div className="intro" id="intro">
            <div className="wrapper">
                <div className="left">
                    <div className="textbox">
                        <div className="greeting" ref={Greeter}></div>
                        <div className="Initials">
                            <div className="im">I'm</div>
                            <div className="Name"> Ishaan Shah.</div>
                        </div>
                        <div className="detail">
                            <div className="college"> <MdOutlineSchool className="gradicon"/>  B.Tech IT, D.J Sanghvi Institute of Technology (2024)</div>
                            <div className="age"><BsSun className="ageicon"/>20 Years old</div>
                            <div className="loc"><HiOutlineLocationMarker className="locicon"/>Mumbai</div>
                            <div className="job"><MdOutlineMonitor className="jobicon"/>Software Developer</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="graphic">
                        <div className="pixelart-to-css" />
                        <a href="#portfolio"><MdArrowDropDownCircle className="arrow"/></a>  
                    </div>
                </div>
            </div>
        </div>
    
    )}
    

