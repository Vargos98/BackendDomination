const fs  = require('fs');

fs.writeFile("abcd.txt","Hello world", function(err){
  if(err)  console.log(err);
  console.log("The file was saved!");
});