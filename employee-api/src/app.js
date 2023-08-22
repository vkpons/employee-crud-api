//@ts-check
/* conexao com o arquivo server.js */

const express = require('express')
const cors = require('cors')

const app = express()

//ROTAS API

const index = require('./route/index')

// app.use('./api/', employeeRoute)
app.get('/api/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem vindo a API NodeJs + PostgreSQL + Azure',
    version: '1.0.0'
  })
})

const port = process.env.PORT || 4002

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta', port)
})

module.exports = app
