const inquirer = require("inquirer");

module.exports = {
  askQuestions: () => {

    const questions = [
      {
        name: "nom",
        type: "input",
        message :"Votre nom",
        validate :(value) => {
          return value.length > 0 ? true : "Vous devez renseigner un nom"
        }
      },
      {
        name: "prenom",
        type: "input",
        message: "Votre Prenom",
        validate :(value) => {
          return value.length > 0 ? true : "Vous devez renseigner un prenom"
        }
      },
      {
        name: "sure",
        type:"confirm",
        message: "Are you sure?",
      },
      {
        name: "skills",
        type:"checkbox",
        message: "Vos skills",
        choices: ["CSS", "HTML", "JS"]
      }
    ];

    inquirer.prompt(questions).then((response) => {
      console.log(response);
    });

  },

};