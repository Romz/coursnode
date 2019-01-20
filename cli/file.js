const fs = require("fs");

module.exports = {
  getCurrentPath() {
    return process.cwd();
  },
  readFile() {
    fs.readFile("./plan.md", "utf8", (err, result) =>{
      if(result) {
        console.log(result);
        return;
      }
    });
  },

  readFileSync() {
    try {
      const data = fs.readFileSync("./plan.md", "utf8");
      console.log(data);
    }catch(e) {
      //console.log(e);
    }
  },
  writeFileSync() {
    fs.writeFileSync("./plan.test", "coucou", "UTF8");
  }
};