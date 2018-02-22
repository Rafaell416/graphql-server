## GrapQL server 

A simple graphql server to test the power of grapql

 [see it here](https://school-graphql-server.now.sh/graphiql).

### Stack Used

- GraphQL
- GraphQL Server (Apollo)
- Node 7.5
- Yarn
- Objection as ORM
- Knex for DB migrations
- SQLite as db monitor

### Installation

1. `git clone git@github.com:Rafaell416/graphql-server.git`
2. `cd graphql-server`
3. `yarn install`
4. `touch db/db.sqlite` to create the empty file SQLite will use.
5. `yarn run db:migrate` para crear las tablas en la DB
6. `yarn run db:seed` para llenar la DB con datos de relleno
7. `yarn start` para iniciar el servidor

Following these steps, now at http://localhost:3000/graphiql you should see GraphiQL, and  http://localhost:3000/graphql is the endpoint you will use with your clients.


### Usage

Example Query

```
query {
  cursos {
    id
    titulo
    descripcion
    profesor {
      id
      nombre
      nacionalidad
    }
  }
}

```