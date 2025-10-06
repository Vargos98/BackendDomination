function sub(a,b){
  return a-b;
}
function add(a,b){
  return a+b;
}
module.exports = {
  sub,
  add,
}


// we could use anonymous functions as well like this

// exports.add = (a,b) => a+b;
// exports.sub = (a,b) => a-b;