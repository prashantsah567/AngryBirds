import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import './CreateContent.css';
import { createClient } from '@supabase/supabase-js';

const UpdateContent = () =>{

    const {id} = useParams();
    const [name, setName] = useState('');
    const [power, setPower] = useState('');
    const [color, setColor] = useState('');

    const supabaseUrl = 'https://cezjsgqokmecvarhwgvq.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlempzZ3Fva21lY3Zhcmh3Z3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5OTE3NzAsImV4cCI6MTk5NjU2Nzc3MH0.m8LlH7ZnmGzBvRwynpHtcphE0U9Nsifki2yqE1h_hv8';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handlePower = (e) =>{
        setPower(e.target.value);
    }

    const handleColor = (e) =>{
        setColor(e.target.value);
    }

    //need to change this code to update
    const handleUpdate = async() =>{
        const {data, error} = await supabase.from("AngryBirdTable").update([{name,power,color}]).match({id:id});

        if (error) {
            console.error(error);
            return;
        }else{
            console.log(`Row with id ${id} has been updated successfully!`);
            alert(`Row with id ${id} has been updated successfully!`);
        }
    }

    const handleDelete = async() =>{
        const {data, error} = await supabase.from("AngryBirdTable").delete().match({id:id});

        if (error) {
            console.log(error);
        } else {
            console.log(`Row with id ${id} has been deleted successfully!`);
            alert(`Row with id ${id} has been deleted successfully!`);
        }
    }

    return(
        <div className="mainContent">
            <div className="contents">
                <h1>Update your AngryBird</h1>
                <h3>Update for {id}</h3>
                <br/>
                {/* <img src="src/assets/angrybirds.jpeg" alt="cannot load" width="300" height="120"/> */}

                <div className="inputs">
                    <div className="namePower">
                        <div className="card">
                            <h2>Name</h2><br/><input placeholder="name your angry bird" onChange={handleName}/>
                        </div>
                        <br/>
                        <div className="card">
                            <h2>Power</h2><br/><input placeholder="power your angry bird" onChange={handlePower}/>
                        </div>
                    </div>
                    <br/>
                    <div className="color-card">
                        <h2>Color</h2>
                        <input type="radio" name="rButton" value="red" onChange={handleColor} />Red<br/>
                        <input type="radio" name="rButton" value="green" onChange={handleColor} />Green<br/>
                        <input type="radio" name="rButton" value="blue" onChange={handleColor} />Blue<br/>
                        <input type="radio" name="rButton" value="purple" onChange={handleColor} />Purple<br/>
                        <input type="radio" name="rButton" value="yellow" onChange={handleColor} />Yellow<br/>
                        <input type="radio" name="rButton" value="orange" onChange={handleColor} />Orange<br/>
                        <input type="radio" name="rButton" value="pink" onChange={handleColor} />Pink<br/>
                        <input type="radio" name="rButton" value="rainbow" onChange={handleColor} />Rainbow<br/>
                        <input type="radio" name="rButton" value="violet" onChange={handleColor} />Violet<br/>
                        <input type="radio" name="rButton" value="coral" onChange={handleColor} />Coral<br/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <button className="btn" onClick={handleUpdate}>Update AngryBird</button>
                    <button className="btn" onClick={handleDelete}>Delete AngryBird</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateContent;