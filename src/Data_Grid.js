import React, {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';

//console.log(getData())
const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'FIRST_NAME',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'LAST_NAME',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'AGE',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'COLOR',
        headerName: 'Color',

        width: 110,
        editable: true,
    },

];
//todo remove

let bob=[
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }];



export default function DataGridDemo() {
    let arr = []

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
        console.log({result})
        console.log("result" + Array.isArray(result))
        // result= JSON.stringify(result)
        //result = JSON.parse(result)

        setData(result)
        console.log("data" + Array.isArray(data))

        data.forEach(x => arr.push(x))
    }


    return (


        <div style={{height: 400, width: '100%'}}>

            <DataGrid
                rows={bob}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick/>


        </div>

    );
}


/*
*/





