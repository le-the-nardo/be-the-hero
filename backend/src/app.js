const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/** como ainda está em desenvolvimento, o cors() não precisa de parametro
 *  se o nosso front end estiver hospedado em 'http://meuapp.com', o cors() deverá ficar assim
 * 
 * app.use(cors({
 *      origin: 'http://meuapp.com'
 * }));
 * */
app.use(cors());
//app.use(express.json()); => para informar ao express que o body da request vai ser em formato json para o js entender
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * rota / recurso 
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */


  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * BANCO DE DADOS
    * 
    * SQL: MySQL, SQLite (vou usar esse), PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
    * Driver: SELECT * FROM users;
    * Query Builder: table('users').select('*').where() 
    */


module.exports = app;