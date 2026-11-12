const express = require("express");
const cors = require("cors");

//const { bdmysql } = require('../database/MariaDbConnection');
const { bdmysqlNube } = require("../database/mySqlConnection");

const { dbConnectionMongo } = require("../database/mongoConnection");

const { dbConnectionNeo4j } = require("../database/neo4jConnection");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.pathsMySql = {
      auth: "/api/auth",
      prueba: "/api/prueba",

      //Aqui defino el path de la Ruta de Heroes
      heroes: "/api/heroes",

      //defino la ruta de usuarios
      usuarios: "/api/usuarios",
    };

    this.pathsMyMongo = {
      //PATH heroes
      heroes: "/api/heroesm",
    };

    this.pathsNeo = {
      //Ajusto la url para la outorizacion por login
      personas: "/api/personas",
    };

    this.app.get("/", function (req, res) {
      res.send("Hola Mundo a todos...DESDE LA CLASE");
    });

    //Aqui me conecto a la BD
    //this.dbConnection();

    //Aqui me conecto a la BD de Mongo
    //this.conectarBDMongo();

    //Aqui me conecto a la Neo4j
    this.conectarBDNeo4j();

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  async conectarBDMongo() {
    await dbConnectionMongo();
  }

  async dbConnection() {
    try {
      await bdmysqlNube.authenticate();
      console.log("Connection OK a MySQL en la NUBE.");
    } catch (error) {
      console.error("No se pudo Conectar a la BD MySQL", error);
    }
  }

  async conectarBDNeo4j() {
    await dbConnectionNeo4j();
  }

  routes() {
    //this.app.use(this.pathsMySql.auth, require('../routes/MySqlAuth'));
    //this.app.use(this.pathsMySql.prueba, require('../routes/prueba'));

    //Aqui activo el enrutamiento de los Heroes tomando en cuenta el path y el Router
    //this.app.use(this.pathsMySql.heroes, require('../routes/heroes.route'));

    //Aqui activo el enrutamiento de los Usuarios tomando en cuenta el path y el Router
    //this.app.use(this.pathsMySql.usuarios, require('../routes/usuarios.route'));

    //MONGO
    //Aqui activo el enrutamiento de los Heroes de Mongo tomando en cuenta el path y el Router
    //this.app.use(this.pathsMyMongo.heroes, require('../routes/heroes.mongo.route'));

    //NEO
    this.app.use(this.pathsNeo.personas, require("../routes/personaNeo.route"));
  }

  middlewares() {
    //CORS
    //Evitar errores por Cors Domain Access
    //Usado para evitar errores.
    this.app.use(cors());

    //Lectura y Parseo del body
    //JSON

    //JSON (JavaScript Object Notation)
    //es un formato ligero de intercambio de datos.
    //JSON es de fácil lectura y escritura para los usuarios.
    //JSON es fácil de analizar y generar por parte de las máquinas.
    //JSON se basa en un subconjunto del lenguaje de programación JavaScript,
    //Estándar ECMA-262 3a Edición - Diciembre de 1999.

    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;