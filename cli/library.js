const chalk = require("chalk");

module.exports = {
  sayHello: () => {
    console.log("Hello");
  },

  sayHelloColor: () => {
    console.log(chalk.green("Hello"));
  }

}