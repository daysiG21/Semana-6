import express from "express";
import {json} from "body-parser";

export default class server{
  constructor(){
    this.app=express();
    this.port = process.env.PORT || 8000;
    this.bodyParser();
  }

  bodyParser(){
    this.app.use(json());
  }

  iniciarServidor(){
    this.app.listen(this.port,async()=>{
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
      try{
        //await conexion.sync();
        console.log("Base de datos sincronizada correctamente")
      }
      catch(error){
        console.log(error);
      }
    });
  }
}