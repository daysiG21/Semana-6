"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conexion = void 0;

var _sequelize = require("sequelize");

const conexion = new _sequelize.Sequelize("almacen", //nombre de base de datos
"root", //nombre de usuario
"Pwsqladmin1", //contraseña
{
  dialect: "mysql",
  //tambien podemos usar para pgadmin, sqlserver, sqlite3, mariadb, mysql
  // /* one of 'mysql' | 'mariadb' |'postgres' | 'mssql' */ para sqlite se usa connection URI
  host: "127.0.0.1",
  port: 3306,
  timezone: "-05:00",
  //no funciona en SQLite
  dialectOptions: {
    //sirve para que al momento de mostrar las fechas, automàticamente las convierta en string y no tener que hacer una conversion manual
    dateStrings: true
  },
  logging: false
});
exports.conexion = conexion;