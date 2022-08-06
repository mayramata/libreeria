require('../connectiondb');
//se usa la lista d elos alumnos 
const Student = require('../models/schemaStudent');

const someFunction = async () => {

    const StudentOne = new Student({
        name: 'maria liz',
        description: 'alumna septimo '
    });
    await StudentOne.save();

    const StudentTwo = new Student({
        name: 'diego',
        description: 'alumno de quinto'
    });
    await StudentTwo.save();

    const StudentThree = new Student({
        name: 'mouse',
        description: 'noveno'
    })
    await StudentThree.save();


    const Students = await Student.find({name: 'diego'});
    console.log(Students)

};

someFunction();