module.exports = `
  type Curso {
    id: ID!
    titulo: String!
    descripcion: String!
    profesor: Profesor
    rating: Float
    comentarios: [Comentario]
  }

  input NuevoCurso {
    titulo: String!
    descripcion: String!
    profesor: String!
  }
`
