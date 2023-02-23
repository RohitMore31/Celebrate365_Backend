const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host: '0.0.0.0',
    user: 'root',
    password:'root',
    database: 'bday',
    port:3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 10
})

module.exports = pool;