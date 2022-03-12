import React from 'react';
import "./exercisepopup.scss";
import { AiFillCloseCircle } from 'react-icons/ai';


export default function Exercisepopup({Exercisepopupopen,setExercisepopupopen}) {
    return (Exercisepopupopen)? (
        <div className="Exercisepopup">
            <div className="content">
                <AiFillCloseCircle className="closebutton" onClick={()=>setExercisepopupopen(!Exercisepopupopen)}/>
               <div className="text">
                    <div className="title">Exercise Tracker CRUD</div>
                    <div className="skilllist">
                        <div className="skills">MongoDB</div>
                        <div className="skills">Express.js</div>
                        <div className="skills">Node.js</div>
                        <div className="skills">React</div>
                        <div className="skills">Bootstrap</div>
                        <div className="skills">Axios</div>
                    </div>
                    <div className="descriptionbox">
                        <div className="description">
                            This is a full stack responsive web applictaion with all the CRUD operations included 
                            connected to MongoDB using the Express.js server. On the frontend it uses 
                            React and Bootstrap. It fulfills the basic utility of recording your 
                            exercises and displaying them in a systematic order. Axios is used to work 
                            with the API backend.
                        </div> 
                    </div>
                    <div className="buttons">
                        <button className="githubbutton" onClick={event =>  window.open('https://github.com/ishaan812/exercisecrud','_blank')} >
                            <img src={require('./GitHub_Logo_White.png')} alt="Github icon"/>   
                        </button>
                    </div>
                </div>
                <div className="imagebox">
                    {/* {
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
                    } */}
                </div>
                
                
            </div>
        </div>
    ) : "";
}          
