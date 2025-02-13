const fs = require('fs');


const os = require('os');

console.log(os.cpus().length);

// fs.writeFile("contacts.txt","Umesh: 9828206117",(err,result)=>{
//   if(err) console.log(err);
//   console.log("File saved!");
  
// });

fs.readFile("contacts.txt","utf-8",(err,result)=>{
  if(err) console.log(err);
  console.log(result);
})