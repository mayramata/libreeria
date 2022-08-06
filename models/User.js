const {Schema, model} = require("mongoose");

//CREACION DEL ESQUEMA/SCHEMA
// aqui se definen los tipos de datos
const usersSchema = new Schema ({
    
    username: {
        type: String,
        unique: true, //clave unica
        required: true //requiere un nombre de usuario
    },

    password : String,

    date: { 
        type: Date,
        default: new Date() //devuelve por defecto la fecha
        
    
    },



})

//CREACION DEL MODELO/MODEL
module.exports = model("users_students", usersSchema)