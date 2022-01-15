import React,  {useState} from "react";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/menu"
import Instapopup from "./components/instapopup/Instapopup";
import './app.scss';




function App() {
  const [MenuOpen,SetMenuOpen]=useState(false);
  const [Instapopupopen,setInstapopupopen]=useState(false);
  
  return (
    <div className="App">
      <Topbar MenuOpen={MenuOpen} SetMenuOpen={SetMenuOpen}/>
      <Menu MenuOpen={MenuOpen} SetMenuOpen={SetMenuOpen}/>
      <Instapopup Instapopupopen={Instapopupopen} setInstapopupopen={setInstapopupopen}/>
      <div className="sections">
        <Intro/>
        <Portfolio Instapopupopen={Instapopupopen} setInstapopupopen={setInstapopupopen}/>
        <Contact/>
      </div>
      
      
    </div>
    
  );
}

export default App;
