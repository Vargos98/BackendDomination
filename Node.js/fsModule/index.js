const { log } = require('console');
const fs  = require('fs');

// to create a new file
fs.writeFile("abcd.txt","Hello world", function(err){
  if(err)  console.log(err);
  console.log("The file was saved!");
}); 

// to read file content
fs.readFile("abcd.txt",'utf-8',function(err,data){
  if(err) console.log(err);
  console.log(data);
})

// to append data to the file
fs.appendFile("abcd.txt","appended data",function(err){
  if(err) console.log(err);
  console.log(`data appended`)
})

// to rename file
fs.rename("abcd.txt","newFile.txt",function(err){
  if(err) console.log(err);
  console.log(`File renamed`);
})

// To delete file
fs.unlink("newFile.txt",function(err){
  if(err) console.log(err);
  console.log(`File deleted`);
})


// To create a new folder

fs.mkdir("SubTree", function(err){
  if(err) console.log(err)
    console.log(`Folder created`);
})

// To read files in a folder 

fs.readdir("SubTree", function(err, files){
  if(err) console.log(err);
  console.log(`Files read ${files}`);
});


// To delete a folder and all its contents
// If he folder consists of multiple files then it wont let the function to delete the files so to prevent that we pass options of 
// Recursive method which is set to true
fs.rmdir("SubTree",{recursive:true} ,function(err){
  if(err) console.log(err);
  console.log(`Folder deleted`);
});


//Note:  fs.rmdir method is deprecated so in place of that we should use fs.rm() instead.