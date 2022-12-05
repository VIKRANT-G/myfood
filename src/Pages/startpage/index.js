import React from 'react';
import "../startpage/style.scss";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import Boy from "../../assets/images/boy.svg";
import Girl from "../../assets/images/girl.svg";



const Startpage = () => {
  return (
    <div className='container-main'>
        <div className='logo-startpage'>
         <Logo className="start-logo" />
        </div>
        <div className='text-food'>
            Food For every one 
        </div>
         <div>
            <img src={Girl} alt="" />
            <img src={Boy} alt="" />
         </div>
        
         <div>
            <button className='btn-start'>Get Started</button>
         </div>
    </div>
    
  )
}

export default Startpage