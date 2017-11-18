const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `

  type Curso {
    id: ID!
    titulo: String!
    descripcion: String!
    profesor: String!
    rating: Float!
    comentarios: [Comentario]
  }

  type Profesor {
    id: ID!
    nombre: String!
    nacionalidad: String!
    genero: Genero #@deprecated(reason: "No matter the genero")
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
    curso (id: Int): Curso
    profesor (id: Int): Profesor
  }
`

const resolvers = {
  Query: {
    cursos: () => {
      return [
          {
              id: 1,
              titulo: 'Curso de GraphQL',
              descripcion: 'Aprendiendo GraphQL'
          },
          {
              id: 2,
              titulo: 'Curso de Python',
              descripcion: 'Aprendiendo Python'
          }
      ]
    }
  }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

module.exports = schema
