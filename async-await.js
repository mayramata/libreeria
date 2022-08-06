
require('./connectiondb');

const Student = require('./models/schemaStudent')

async function main() {
    const student  = new Student({
        name: 'Keny',
        description: 'decimo',
        pago: '150'
    });

    const studentSaved = await student.save();
    return studentSaved;
}

main()
    .then(studentSaved => console.log(studentSaved))
    .catch(err => console.log(err));