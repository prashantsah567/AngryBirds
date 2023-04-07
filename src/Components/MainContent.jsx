import React from 'react';
import './MainContent.css';

const MainContent = () =>{

    return(
        <div className='mainContent'>
            <div className="contents">
                <h1>Welcome to the Angry Bird Creator!</h1>
                <br/>
                <h3>Here you can create your very own set of angry birds with your own customization!</h3>
                <br/><br/>
                <div className='image'>
                    <img src="src/assets/angry-bird.png" alt="cannot load" width="400" height="400"/>
                </div>
            </div>
        </div>
    );
}

export default MainContent;