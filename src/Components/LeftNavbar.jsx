import React from 'react';
import {Link} from 'react-router-dom';
import './LeftNavbar.css';

const LeftNavbar = () =>{

    return(
        <div className='leftNavbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-content">Create an AngryBird</Link></li>
                <li><Link to="/view-content">AngryBird Gallery</Link></li>
            </ul>
        </div>
    );
}

export default LeftNavbar;