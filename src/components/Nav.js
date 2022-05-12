import React from "react";
import '../Styles/Nav.css';
function Nav (){
    const pages = ['page1', 'page2'];
    
    return(
        <div className="nav-bar" >
            <div className="nav-bar-page1">
           <ul className="nav-bar-page1-name" >
               <li className="nav-bar-page1-item" >page1</li> 
           </ul>
           </div>

           <div className="nav-bar-page2" >
               <ul className="nav-bar-page2-name" >
                   <li className="nav-bar-page2-item" >page2</li>
               </ul>
           </div>
        </div>
    )
}

export default Nav;