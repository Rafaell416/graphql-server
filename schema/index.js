const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Comentario = require('./Comentario')
const Curso = require('./Curso')

const rootTypes = `
  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootTypes, Profesor, Comentario, Curso],
  resolvers
})

module.exports = schema
