const info = require("./information");

let cowsay = require("cowsay");
const { myName, myCamp } = require("./information");

console.log(cowsay.say({
    text: myName + myCamp,
    e: "oO",
    T: "U "
}));