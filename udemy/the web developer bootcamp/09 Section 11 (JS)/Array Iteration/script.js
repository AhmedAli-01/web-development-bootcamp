
//using for loop

var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//using forEach loop
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(magac){

  console.log("***************");
  console.log(magac);
  console.log("***************");
});


// //using while loop
// note its rarely used in this situations
var count = 0;
while(count < colors.length){
  console.log(colors[count]);
  count++;
}
