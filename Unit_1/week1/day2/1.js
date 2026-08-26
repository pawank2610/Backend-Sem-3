  const crypto = require("crypto");  // common js method of importing and exporting 

  //step 1 hash algo

  const algo = crypto.createHash("shake256");

  const data = algo.update("Pawan");

  const ans = data.digest("hex")

console.log(ans);

const fs = require ("fs")
//1.read file

fs.readFile("./1.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("something went wrong");
    } else {
        console.log(data);
    }
});