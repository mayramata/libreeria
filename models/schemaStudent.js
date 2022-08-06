//esquema:estructura en comun que amacena datos
//estructuring {}
//model: el model permite ek guardado de daos en la base de datos,eliminarlos y actualizarlos.
const {Schema, model} = require("mongoose");

//CREACION DEL ESQUEMA/SCHEMA
// aqui se definen los tipos de datos
const studentsSchema = new Schema ({
    
    name: {
        type: String
    },

    description : String,

    pago: { 
        type: Number,
        default: 0 //precio por defecto cero
    
    },

    impuesto: {
        type:Number,
        default: 0 //iva por defecto 0
    }



});

//CREACION DEL MODELO/MODEL
module.exports = model("students", studentsSchema)