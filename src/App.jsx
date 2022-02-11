import React,  {useState,useEffect} from "react";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
//import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/menu"
import Instapopup from "./components/instapopup/Instapopup";
import Portpopup from "./components/portpopup/portpopup";
import Tkinterpopup from "./components/tkinterpopup/tkinterpopup";
import './app.scss';
import { BarLoader } from "react-spinners";




function App() {
  const [MenuOpen,SetMenuOpen]=useState(false);
  const [Instapopupopen,setInstapopupopen]=useState(false);
  const [Portpopupopen,setPortpopupopen]=useState(false);
  const [Tkinterpopupopen,setTkinterpopupopen]=useState(false);
  const [Loading,SetLoading]=useState(false);
  const [portpopimg,setportpopimg]=useState(1);

  useEffect(()=>{
    SetLoading(true);
    setTimeout(()=>{
      SetLoading(false)
    },3000)
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

        <>
        <Topbar MenuOpen={MenuOpen} SetMenuOpen={SetMenuOpen} />
          <Menu MenuOpen={MenuOpen} SetMenuOpen={SetMenuOpen} />
          <Instapopup Instapopupopen={Instapopupopen} setInstapopupopen={setInstapopupopen}  />
          <Portpopup Portpopupopen={Portpopupopen} setPortpopupopen={setPortpopupopen} portpopimg={portpopimg} setportpopimg={setportpopimg} />
          <Tkinterpopup Tkinterpopupopen={Tkinterpopupopen} setTkinterpopupopen={setTkinterpopupopen} />
          <div className="sections">
            <Intro className="intro" />
            <Portfolio Instapopupopen={Instapopupopen} setInstapopupopen={setInstapopupopen} 
                      Portpopupopen={Portpopupopen} setPortpopupopen={setPortpopupopen} 
                      Tkinterpopupopen={Tkinterpopupopen} setTkinterpopupopen={setTkinterpopupopen}  />
            <Contact />
          </div></>
      }
      
      
      
      
    </div>
    
  );
}

export default App;
