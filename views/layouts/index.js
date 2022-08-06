require("./connectiondb")

const Student = require("./models/schemaStudent")

//crea un nuevo alumno nuevo
const student = new Student({
    name: "javier",

    description : "alumnos de octavo grado",

    pago: 2399.00,
    
    
    

});

//metodo asincro de guardado este se mira en mongo db, no en la consola
student.save((err, document) => {
    if (err) console.log(err);
    console.log(document);
});
 
//muestra el alumnoo o alumnos creados por consola
console.log("create student",student)