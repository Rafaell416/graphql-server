const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Query {
    cursos: [Curso]
  }
  type Curso {
    id: ID!
    titulo: String!
  }
`

const schema = makeExecutableSchema({
    typeDefs
})

module.exports = schema
