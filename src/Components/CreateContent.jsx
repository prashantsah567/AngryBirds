import React from "react";
import './CreateContent.css';

const CreateContent = () =>{

    return(
        <div className="mainContent">
            <div className="contents">
                <h1>Create a new Angry Bird</h1>

                <div className="inputs">
                    <div className="namePower">
                        <div className="card">
                            <h2>Name</h2><br/><input placeholder="name your angry bird"/>
                        </div>
                        <br/>
                        <div className="card">
                            <h2>Power</h2><br/><input placeholder="power your angry bird"/>
                        </div>
                    </div>
                    <br/>
                    <div className="color-card">
                        <h2>Color</h2>
                        <input type="radio" name="rButton" value="red"/>Red<br/>
                        <input type="radio" name="rButton" value="green"/>Green<br/>
                        <input type="radio" name="rButton" value="blue"/>Blue<br/>
                        <input type="radio" name="rButton" value="purple"/>Purple<br/>
                        <input type="radio" name="rButton" value="yellow"/>Yellow<br/>
                        <input type="radio" name="rButton" value="orange"/>Orange<br/>
                        <input type="radio" name="rButton" value="pink"/>Pink<br/>
                        <input type="radio" name="rButton" value="rainbow"/>Rainbow<br/>
                        <input type="radio" name="rButton" value="violet"/>Violet<br/>
                        <input type="radio" name="rButton" value="coral"/>Coral<br/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <button className="btn">Create Angry Bird</button>
                </div>
            </div>
        </div>
    );
}

export default CreateContent;