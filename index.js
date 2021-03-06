const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema')
const app = express()
const PORT = 3000

require('./db/setup')

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    formatError: (error) => {
      return {
        codigo: error.code,
        nombre: error.name,
        mensaje: error.message
      }
    }
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.listen(PORT, (err) => {
    if (err) throw new Error('Whoops!')
        console.log('server corriendo OK')
})
