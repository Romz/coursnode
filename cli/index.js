const librairie = require("./library.js");
const argv      = require('minimist')(process.argv.slice(2));
const readline  = require("./readline");
const inquirer  = require("./inquirer");
const file      = require("./file");
const proc      = require("./proc");

//librairie.sayHelloColor();

//console.log(argv);

/*Ask user input */

//readline.question();
//readline.questions();
//inquirer.askQuestions();

//const path = file.writeFileSync();

proc.ls();
//console.log(path);