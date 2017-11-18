const { makeExecutableSchema, addMockFunctionsToSchema, MockList } = require('graphql-tools')
const casual = require('casual')
const Curso = require('./models/Curso')
const Profesor = require('./models/Profesor')

const typeDefs = `
  type Curso {
    id: ID!
    titulo: String!
    descripcion: String!
    profesor: Profesor
    rating: Float
    comentarios: [Comentario]
  }

  type Profesor {
    id: ID!
    nombre: String!
    nacionalidad: String!
    genero: Genero
    cursos: [Curso]
  }

  enum Genero {
    MASCULINO
    FEMENINO
  }

  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }
`

const resolvers = {
  Query: {
    cursos: () => Curso.query(),
    profesores: () => Profesor.query(),
    curso: (rootValue, args) => Curso.query().findById(args.id),
    profesor: (rootValue, args) => Profesor.query().findById(args.id)
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema
