let app = {};
// DO NOT REMOVE CODE //////////////////////////////////////////////////////




function test(){
  console.log('test');
}

let createNumberedList = function(array){
  return `1. ${array[0]}\n2. ${array[1]}\n3. ${array[2]}`;
};

// DO NOT REMOVE CODE //////////////////////////////////////////////////////
app.test = test;
app.createNumberedList = createNumberedList;
module.exports = app;
