"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchmen = void 0;

var _jsonwebtoken = require("jsonwebtoken");

require("dotenv").config();

const verificarToken = token => {
  try {
    // el metodo usa la contraseña para ver si la token es la correcta,
    //si tiene tiempo de vida y si es un token valido (tiene un buen formato)
    // caso contrario saltará el catch
    const payload = (0, _jsonwebtoken.verify)(token, process.env.JWT_SECRET); //si la token esta buena no retornara el payload de dicha token

    return payload;
  } catch (error) {
    /* si la token no es válida (la password no concuerda
      o si ya expiro) entrará al catch y nos devolvera un
      json con la llave message en la cual indicara la
      razob del porque */
    return error.message;
  }
};

const watchmen = (req, res, next) => {
  if (!req.headers.authorization) {
    //si no esta correctamente autorizado
    return res.status(401).json({
      success: false,
      content: null,
      message: "Se necesita una token para esta ruta"
    });
  } //Bearer 12345.4587.44445 ->autorization


  const token = req.headers.authorization.split(" ")[1];
  const resultado = verificarToken(token);

  if (typeof resultado === "object") {
    next();
  } else {
    return res.status(401).json({
      success: false,
      content: resultado,
      message: "No estas autorizado para realizar esta solicitud"
    });
  }
};

exports.watchmen = watchmen;