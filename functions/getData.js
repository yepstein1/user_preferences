const {Pool} = require('pg');

require('dotenv').config()
//export
 async function getData()
    {


        const pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_USER ,
            password:process.env.DB_PASS ,
            port:5432,
        })
        console.log(process.env.DB_PASS)
        try{
            let   res=await pool.query('select * from get_data')
            return   res.rows
        }catch(error)
        {
            console.log(error)
        }






    }
    getData().then(r => console.log(r ) )




