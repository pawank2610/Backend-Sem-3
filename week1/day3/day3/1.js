const fs = require("fs");

// Asynchronous read
fs.readFile("./1.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Synchronous read
const ans = fs.readFileSync("./1.txt", "utf8");
console.log(ans);


// 2. write operation

fs.writeFile("./1.txt", "Hello World", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File written successfully");
    }
}); 

fs.writeFileSync("./1.txt", "Hello World 2");
console.log("File written successfully 2");

//3. Update OPeration

fs.appendFile("./1.txt", "Hello World", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File written successfully");
    }
}); 

fs.appendFileSync("./1.txt", "Hello World 2");
console.log("File written successfully 2");

// fs.appendFile("./1.txt", "\n Hello World 3", (err)=>{
//     if(err){
//         log(err);
//     }else{
//         console.log("File appended successfully");
//     }       
// }
// );


//4. rename operation

 fs.renameSync("./2.txt","./3.txt");
 console.log("file rename successfully");

//5. file delete

fs.unlinkSync("./3.txt");
console.log("file delete successfully");