//get the postgres object
const { Pool } = require('pg');

//get the postgres database from the 
const pool = new Pool({
    database: 'KokiETech',
    user:     '',
    password: ''
})


module.exports = {
    pool
}