var todos = ["Buy New Turtle"];

window.setTimeout(function() {


  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "del"){
      delTodo();
    }
    input = prompt("What would you like to do?");
  }
  console.log("OK, You quit the app");

}, 500);

function listTodos(){
  //this foreach loop create new line for each loop
  console.log("**************");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("***************");
}

function addTodo(){
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added Todo");
}

function delTodo(){
  var index = prompt ("Enter index of to do to be deleted");
  //splice
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
