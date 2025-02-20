let todo = [];

let req = prompt("please enter your request");

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("----------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("----------------");
  } else if (req == "add") {
    let task = prompt("please enter your task");
    todo.push(task);
  } else if (req == "delete") {
    let idx = prompt("please enter the task index");
    todo.splice(idx, 1);
    console.log("task deleted, enter list to see all tasks");
  }else{
    console.log("wrong request");
    
  }

  req = prompt("please enter your request");
}
