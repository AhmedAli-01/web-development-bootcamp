var count = 1;

while(count <= 10) {
  alert("The number is " + count);
  count+= 2;
}

var num = 1;

while(num <= 20){
  if(num % 4 === 0){
    alert(num);
  }
  num++;
}

/** This is an infinit loop so do not run it. **/
// var num = 100;
//
// while(num <150) {
//   console.log(num + 1);
//   num--;
// }

/** This is the start of while loop problem set **/

//print all number between -10 and 19

var count = -10;
while (count <= 19){
  console.log("This is exerices "+ count);
  count++;
}

//print all even number between 10 and 40
var num = 10;

while(num <= 40){
  console.log(num);
  num+=2;
}

// print all odd numbers between 300 and 333

var num = 300;

while(num <= 333){
 if (num % 2 !== 0){
   console.log("Odd number only " +num);
 }
  num++;
}

var num = 5;
while (num <= 50) {
  if((num % 3 === 0) & (num % 5 === 0)){
    console.log("only 3 answers " + num);
  }
  num ++;
}
