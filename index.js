const userInfo = require("./information");

let cowsay = require("cowsay");
const { myName, myCamp } = require("./information");

console.log(cowsay.say({
    text: `Hello I'm ${userInfo.myName} from ${userInfo.myCamp}`,
    e: "oO",
    T: "U "
}));