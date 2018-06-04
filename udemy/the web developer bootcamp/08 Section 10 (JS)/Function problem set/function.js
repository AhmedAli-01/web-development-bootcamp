// function isEven(num){
//   if(num % 2 === 0) {
//     return true;
//   } else {
//     return false
//   }
// }

//-----Q1----------------------------------------
function isEven(num){
    return num % 2 === 0;
  }

//-------Q2-----------------------------------------------

function factorial(num){
  //define a result variable
  var result = 1;
  //calculate facorial and store value in result
  for (var i = 2; i <= num; i++){
  result *= i;
}
//return the result variable
  return result;
}

//---------Q3-----------------------------------------
function kebabToSnake(str){
  //replace all "-" with "_"'s'
  var newStr = str.replace(/-/g , "_");
  //return str
  return newStr;
}
