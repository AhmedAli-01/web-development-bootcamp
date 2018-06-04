// alert("Connected");

//This is how function is declared

function doSomething() {
  alert("I am Function!!");
}

//This is how you call Function
doSomething();

//Function with arguments
function square(num) {
  alert(num * num);
}
//This is will show square root of 10
square(10);

//another Function example
function sayHello(name){
  alert("Hello there " + name + "!")
}
sayHello("Ahmed");
sayHello("Ali");
sayHello("Adla");

function area (length, width) {
  alert(length * width);
}

area(5,3);

function greet(person1, person2, person3){
  alert("hi " + person1);
  alert("hi " + person2);
  alert("hi " + person3);
}
greet("Adnan", "Adla", "Aisha");
