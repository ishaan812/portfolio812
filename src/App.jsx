import React,  {useState,useEffect} from "react";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
//import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/menu"
import Instapopup from "./components/instapopup/Instapopup";
import './app.scss';
import ClipLoader from "react-spinners/ClipLoader";
import { BarLoader } from "react-spinners";




function App() {
  const [MenuOpen,SetMenuOpen]=useState(false);
  const [Instapopupopen,setInstapopupopen]=useState(false);
  const [Loading,SetLoading]=useState(false);

  useEffect(()=>{
    SetLoading(true);
    setTimeout(()=>{
      SetLoading(false)
    },5000)
  },[])
    
  return (
    <div className="App">
      {
        Loading ?
          <div className="loaderwrapper">
            <img src={require("././components/topbar/IS.gif")} alt="Logo"/>
            <BarLoader className="bar" color={'#28282B'} loading={Loading} width={300}/>
          </div>

        :

        <><Topbar MenuOpen={MenuOpen} SetMenuOpen={SetMenuOpen} /><Menu MenuOpen={MenuOpen} SetMenuOpen={SetMenuOpen} />
          <Instapopup Instapopupopen={Instapopupopen} setInstapopupopen={setInstapopupopen} />
          <div className="sections">
            <Intro className="intro" />
            <Portfolio Instapopupopen={Instapopupopen} setInstapopupopen={setInstapopupopen} />
            <Contact />
          </div></>
      }
      
      
      
      
    </div>
    
  );
}

export default App;
