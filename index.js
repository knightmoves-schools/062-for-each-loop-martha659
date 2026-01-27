function markAsDone(todos) {
  let modifiedTodos = [];

  todos.forEach((todos) => {
     modifiedTodos.push("done - " + todos)
  })
return modifiedTodos;
}
