require("./connectiondb");

const User = require("./models/User");

async function createUsers (){
    const userOne = new User({
        username: "fazt",
        password: "12345"
    });

    await userOne.save();



    /*const userTwo = new User({
        username: "fazt",
        password: "12345"
    })
    await userTwo.save();*/
}
createUsers();