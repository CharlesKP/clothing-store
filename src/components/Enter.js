import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/retro fashion crop.jpg'

function Enter() {
    return(
    <div className="enter">
        <Link to='/Home'>
             <img src={logo} alt=""/>
        </Link>        
    </div>
    )
}

export default Enter;