function markAsDone(todos) {
  let modifiedTodos = [];

  todos.forEach((todos) => {
     modifiedTodos.push("done _ " + todos)
  })
return modifiedTodos;
}
