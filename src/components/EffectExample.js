import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectExample (){
    const [data,setData] = useState("");

    useEffect(()=>{
        
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            setData(response.data[0].email);
            console.log('API WAS CALLED');

        });
    }, []);

    return(
        <div>
            <h1>Effect Hooks {data}</h1>
        </div>
    )
}

export default EffectExample;