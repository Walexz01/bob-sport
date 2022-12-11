const mysql2 = require('mysql2');
require('dotenv').config()
const dotenv = require('dotenv');
dotenv.config()


const pool = mysql2.createPool({
<<<<<<< HEAD
    "host": "localhost",
    "user": "root",
    "database": "bob's_sports_equipment",
    "password": "oluwaSeun@1937"

    // host: process.env.HOST ,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    // database: process.env.MYSQL_DATABASE
=======
    // "host": "localhost",
    // "user": "root",
    // "database": "bob's_sports_equipment",
    // "password": "oluwaSeun@1937"

    host: process.env.HOST ,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
>>>>>>> 7c0e5b2
}).promise()




module.exports = pool;