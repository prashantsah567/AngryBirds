import React,{useState, useEffect} from "react";
import { createClient } from "@supabase/supabase-js";
import './ViewContent.css';
import ViewGalleryCard from "./ViewGalleryCard";

const ViewContent = () =>{

    const [dbData, setdbData] = useState([]);

    const supabase = createClient('https://cezjsgqokmecvarhwgvq.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlempzZ3Fva21lY3Zhcmh3Z3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5OTE3NzAsImV4cCI6MTk5NjU2Nzc3MH0.m8LlH7ZnmGzBvRwynpHtcphE0U9Nsifki2yqE1h_hv8');
    
    useEffect(() => {
        async function getData(){
            const {data: tableData} = await supabase.from('AngryBirdTable').select('*');
            setdbData(tableData);
        }
        getData();
    },[]);
    
    return(
        <div className="mainContent">
            <div className="contents">
                <h1>Angry Birds Gallery!</h1>
            </div>
            <br/><br/>
            <div className='card-container'>
                {dbData.map(item => (
                    <div key={item.id}>
                        <ViewGalleryCard id={item.id} name={item.name} power={item.power} color={item.color} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewContent;