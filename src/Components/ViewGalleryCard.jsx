import React from 'react';
import './ViewGalleryCard.css';

const ViewGalleryCard = (props) =>{

    return(
        <div>
            <div className="cardView">
                {console.log(props.name)}
                <div style={{backgroundColor: props.color}} className="imgClass">
                    <img src="src/assets/angry-bird-b&w.png" alt="cannot load" width="70" height="80"/>
                </div>
                <h3>Name: {props.name}</h3>
                <p>Power: {props.power}</p>
                <br/>
                <button className='editBtn'>Edit AngryBird</button>
            </div>
        </div>
    );
}

export default ViewGalleryCard;