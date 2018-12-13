const { Pool } = require('pg')
const client = new Pool({
    user: 'ubuntu', 
    database:'postgres',
    host: '3.16.49.251',
    password: ''
})

client.connect()



module.exports= client; 
