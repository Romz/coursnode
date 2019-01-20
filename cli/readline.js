const readline = require("readline");

module.exports = {
  question: () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("La question ? :", (reponse) => {
      console.log(reponse);
      rl.close();
    });
  },

  questions: () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("Question 1 ? :", (reponse) => {
      rl.question("Question 2 ? :", (reponse2) => {
        console.log(`Reponse 1 : ${reponse}, Reponse 2; ${reponse2}`)
        rl.close();
      })
    });
  }
};