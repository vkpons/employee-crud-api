/**responsavel pelas connection strings Cosmos DB & PostgreSQL*/

const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

//conexao c banco de dados

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pool.on('error', (err, client) => {
  console.log('unexpected error on idle')
  process.exit(-1)
})

pool.on('connect', () => {
  console.log('base de dados connected com sucesso!')
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
