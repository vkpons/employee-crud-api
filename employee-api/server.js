/* configuração e execução do back-end */

const app = require('./src/app')

const port = process.env.PORT || 4200

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta', port)
})
