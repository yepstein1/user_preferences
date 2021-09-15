require('dotenv').config()
const {Pool} = require('pg');
exports.handler = async function (event) {
    let payload = JSON.parse(event.body);
//todo create better way to generate keys
    let person_id = Math.floor((Math.random() * 100) + 1);
    let color_id = 5

    const pool = new Pool({
        user: process.env.REACT_APP_DB_USER,
        host: process.env.REACT_APP_DB_HOST,
        database: process.env.REACT_APP_DB_USER,
        password: process.env.REACT_APP_DB_PASS,
        port: 5432,
    })
//todo make up a color id lookup table if neccessary. When I first created db I thought it may be a good idea but did not have time to implement
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
