require('../connectiondb');
//se usa la clase de Users para registro de cuentas de usuarios
const User = require('../models/User');

const someFunction = async () => {
    const user = await User.findOne({username: 'fazt'});
    user.name = 'joe';
    await user.save();
    console.log(user);
};

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'fazt'}, {
        name: 'Ryan Ray'
    }, {new: true});
    console.log(user);
};

// someFunction();
otherFunction();