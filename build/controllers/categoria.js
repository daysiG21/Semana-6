"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearCategoria = void 0;

var _relaciones = require("../config/relaciones");

const crearCategoria = async (req, res) => {
  try {
    const {
      categoriaNombre
    } = req.body;
    const coincidencia = await _relaciones.Categoria.findOne({
      where: {
        categoriaNombre
      }
    });

    if (coincidencia) {
      return res.status(400).json({
        success: false,
        content: null,
        message: "Categoria ya existe"
      });
    }

    const nuevo = await _relaciones.Categoria.create(req.body);
    return res.status(201).json({
      success: true,
      content: nuevo,
      message: "Categoria creada correctamente"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al registrar la categoria"
    });
  }

  ;
};

exports.crearCategoria = crearCategoria;