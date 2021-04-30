import {Sequelize} from "sequelize";

export const conexion = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL, {
      dialect: "mysql",
      timezone: "-05:00",
      logging: false,
      dialectOptions: {
        dateStrings: true,
      },
    })
  : new Sequelize(
      "almacen", // database name
      "root", // username
      "Pwsqladmin1", // password
      {
        dialect: "mysql", // tambien podemos usar dialectos para pgadmin, sqlserver, sqlite3, mariadb, mysql
        // /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */ para sqlite se usa connection URI
        host: "127.0.0.1",
        port: 3306,
        timezone: "-05:00", // no funciona en SQLITE
        dialectOptions: {
          // sirve para que al momento de mostrar las fechas, automaticamente las convierta en string y no tener que hacer una conversion manual
          dateStrings: true,
        },
        logging: false,
      }
    );
/*export const conexion = new Sequelize(
  "almacen",//nombre de base de datos
  "root",//nombre de usuario
  "Pwsqladmin1",//contraseña
  {
    dialect:"mysql",//tambien podemos usar para pgadmin, sqlserver, sqlite3, mariadb, mysql
    
    host:"127.0.0.1",
    port:3306,
    timezone:"-05:00",//no funciona en SQLite
    dialectOptions:{
      //sirve para que al momento de mostrar las fechas, automàticamente las convierta en string y no tener que hacer una conversion manual
      dateStrings:true
    },
    
    logging: false,
  }
)*/