const fs = require("fs");

// Writing a file
// This is Synchronous method 
      // fs.writeFileSync("./test.txt","this is the first input");

// This is Async method, which includes a callback function for any errors

        // fs.writeFile("./text.txt","this is the second file",(err)=>{
        //   console.log(err);
        // })

// Reading a file
// Now reading the file Sync way but the result is being stored in an variable named result and then it returns it

        // const result = fs.readFileSync("./contact.txt","utf-8")

        // console.log(result)



// But when we use async method it requires a callback function with 2 params 1st error 2nd result


      // fs.readFile("./contact.txt","utf-8",(err,result)=>{
      //   if(err) console.log(err);
      //   else console.log(result);
      // })


// Appending a file

let result = fs.appendFileSync("text.txt", "Hey there\n" );
console.log(result)