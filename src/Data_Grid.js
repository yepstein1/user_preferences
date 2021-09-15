import React, {useEffect, useState} from 'react';


export default function DataGridDemo() {
    let Display = function () {
        return (
            <div>{data.map(x => x)}</div>
        );
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, []);

    async function getData() {
        let res = await fetch("/.netlify/functions/getData", {
            method: 'POST',
            headers:
                {
                    'Content-Type': 'application/json'
                },

        })
        let result = await res.json();
        //  the front end is not working correctly yet but this logs out data from the  underlying tables. I wass trying to implement a Material UI data table but I was unable to complete
        console.log({result})
        // I was getting react error and I was running out of time to fix it setData(result)
    }

    return (

        <div style={{height: 400, width: '100%'}}>
            <p> table will go here</p>
        </div>
    );

    l
}







