'use strict';

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_database',
    password: 'root',
    port: 3001,
});