import {Categoria} from "../config/relaciones";

export const crearCategoria=async (req,res)=>{
  try{    
    const {categoriaNombre} = req.body;
  
    const coincidencia = await Categoria.findOne({
      where:{
        categoriaNombre,
      },
    });

    if(coincidencia){
      return res.status(400).json({
        success:false,
        content:null,
        message:"Categoria ya existe"
      });
    }
    
    const nuevo =  await Categoria.create(req.body);

    return res.status(201).json({
      success:true,
      content:nuevo,
      message:"Categoria creada correctamente",
    });
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:error,
      message:"Error al registrar la categoria",
    });
  };
  
};
