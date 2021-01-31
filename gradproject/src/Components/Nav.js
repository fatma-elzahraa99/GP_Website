import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav =()=>{
    return(
        <div className="navbar">
              <div className="container">
               <a href="#" className="logo">Wired meetings</a>
              <ul>
                
              <FontAwesomeIcon icon={faHome} /><a href='/'>Home</a>
              <FontAwesomeIcon icon={faUser}/><a href='/signup'>Signup</a>
              <FontAwesomeIcon icon={faCoffee} /><a href='/story'>Our story</a>
             </ul>
        </div>

        </div>
      
    )

}
export default Nav;