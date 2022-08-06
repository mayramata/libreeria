require('../connectiondb');
//se usa la clase de Users para registro de cuentas de usuarios

const User = require('../models/User');

const someFunction = async () => {
    const newUser = await User.findOne({username: 'fazt'});
    const otherUser = await User.findOne({username: 'ryan'});
    
    console.log(newUser)
    console.log(otherUser)
};

someFunction();