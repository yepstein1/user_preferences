require('dotenv').config()
const {Pool} = require('pg');
exports.handler =  async function(event,context)
{
   console.log(JSON.stringify(event,null,3))
   console.log(JSON.stringify(context,null,3))
    console.log(JSON.parse(event.body))
    let payload = JSON.parse(event.body);
//todo create better way to generate keys
let person_id = Math.floor((Math.random() * 100) + 1);
   let color_id =5

    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_USER ,
        password:process.env.DB_PASS ,
        port:5432,
    })
//todo make up a color id lookup table if neccessary
try{
    await pool.query(`call public."adddata"($1, $2,$3,$4,$5,$6)`,[payload.firstName,payload.lastName,person_id,payload.age,payload.color,color_id])
}
catch (e) {
        console.log(e)

}





    return  {
        statusCode : 200,
        body : "success"
    }
}
