require('../connectiondb');
//se usa la clase de Users para registro de cuentas de usuarios

const User = require('../models/User');

const searchProducts = async () => {
    // search all products
    const student = await User.find({});
    
    console.log(student)
};

searchProducts();