const mongoose = require ("mongoose")

//direccion ip / base de datos {se creara sola la base}


const uri = "mongodb://127.0.0.1:27017/libreryaproyect";
const db = mongoose.connection;

//no puede usarse la constante db en la conexion principal
mongoose.connect(uri, {
    useNewUrlParser:true, //objeto que hace referencia, evita errores de conexion
    useUnifiedTopology:true,


    // useCreateIndex: true, //elimina error
    //useFindAndModify: true
   
})
    .catch(err => console.log(err));

//eventos/events of conexion son mensajes en consola para avisar la conexion
// el evento.once al ser ejecutada solo una vez, se escuchara una vez nadamas.
db.once("open", _=>{
 console.log("Database is connected to", uri);
})

 // el evento .on se ejecutara las veces que sea nacesarias 
db.on("error", err=>{
    console.log(err)
   })