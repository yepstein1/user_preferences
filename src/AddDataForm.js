import {TextField}  from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, {useState} from "react";
export function AddDataForm()

{

 const     onClick = async () =>{
     let payload ={
         firstName:firstName,
         lastName:lastName,
         color:color,
         age:age

     }
     console.log({payload})
     await fetch("/.netlify/functions/sendData", {
         method: 'POST',
         headers:
             {
                 'Content-Type': 'application/json',

             },
         body: JSON.stringify(payload)


     })
 }


    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [color, setColor]= useState("")
    const [age, setAge]= useState("")





    return <div>

        <TextField id="f_name" label="Enter first name" onChange= {e=> setFirstName(e.target.value)} />
        <br/>
        <TextField id="l_name" label="Enter last name" onChange= {e=> setLastName(e.target.value)} />
        <br/>
        <TextField id="age" type ="number"label="Enter Age" onChange= {e=> setAge(e.target.value)} />
        <br/>
        <TextField id="color" label="Enter Color" onChange= {e=> setColor(e.target.value)} />
        <br/>
        <Button variant="contained" onClick={onClick}>Default</Button>

    </div>
}
