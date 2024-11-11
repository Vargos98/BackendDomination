const fs  = require('fs');

fs.writeFile("abcd.txt","Hello world", function(err){
  if(err)  console.log(err);
  console.log("The file was saved!");
}); 

fs.readFile("abcd.txt",'utf-8',function(err,data){
  if(err) console.log(err);
  console.log(data);
})