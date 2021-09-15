const {Pool} = require('pg');

require('dotenv').config()
exports.handler = async function () {

    const pool = new Pool({
        user: process.env.REACT_APP_DB_USER,
        host: process.env.REACT_APP_DB_HOST,
        database: process.env.REACT_APP_DB_USER,
        password: process.env.REACT_APP_DB_PASS,
        port: 5432,
    })

        try{
            let   res=await pool.query('select * from get_data')
            return  {
                statusCode : 200,
                body : JSON.stringify(res.rows)
            }
        }catch(error)
        {
            console.log(error)
        }

    }





