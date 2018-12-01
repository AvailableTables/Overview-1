const { Pool } = require('pg')
const client = new Pool({
    user: 'elizabethlang', 
    database: 'postgres',
    host: 'localhost',
    password: 'Annabelle'
})

client.connect()

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()

module.exports= client; 