const Curso = require('../models/Curso')
const Profesor = require('../models/Profesor')

module.exports = {
  Query: {
    cursos: () => Curso.query().eager('[profesor, comentarios]'),
    profesores: () => Profesor.query().eager('cursos'),
    curso: (rootValue, args) => Curso.query().eager('[profesor, comentarios]').findById(args.id),
    profesor: (rootValue, args) => Profesor.query().eager('cursos').findById(args.id),
    buscar: (_, args) => {
      return [
        Profesor.query().findById(3),
        Curso.query().findById(1)
      ]
    }
  },
  ResultadoBusqueda: {
    __resolveType: (obj) => {
     if (obj.nombre) return 'Profesor'
      return 'Curso'
    }
  },
  Mutation: {
    profesorAdd: (_, args) => Profesor.query().insert(args.profesor),
    profesorEdit: (_, args) => Profesor.query().patchAndFetchById(args.profesorId, args.profesor),
    profesorDelete: (_, args) => {
      return Profesor.query().findById(args.profesorId).then((profesor) => {
        return Profesor.query().deleteById(args.profesorId).then((filasBorradas)=> {
          if (filasBorradas > 0) return profesor
            throw new Error(`El profesor con id: ${args.profesorId} no se pudo eliminar :(`)
        })
      })
    },
    cursoAdd: (_, args) => Curso.query().insert(args.curso),
    cursoEdit: (_, args) => Curso.query().patchAndFetchById(args.cursoId, args.curso),
    cursoDelete: (_, args) => {
      return Curso.query().findById(args.cursoId).then((curso) => {
        return Curso.query().deleteById(args.cursoId).then(() => curso)
      })
    }
  }
}
