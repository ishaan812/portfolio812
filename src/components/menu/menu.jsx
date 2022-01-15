import React from 'react';
import './menu.scss';

export default function menu({MenuOpen,SetMenuOpen}) {
    return (
        <div className={"menu " + (MenuOpen && "active")}>
            <ul>
                <li onClick={()=>SetMenuOpen(!MenuOpen)}><a href="#intro">Intro</a></li> 
                <li onClick={()=>SetMenuOpen(!MenuOpen)}><a href="#portfolio">Portfolio</a></li> 
                <li onClick={()=>SetMenuOpen(!MenuOpen)}><a href="#contact">Contact</a></li> 
            </ul>

        </div>
    )
}
