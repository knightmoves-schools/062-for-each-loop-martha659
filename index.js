function markAsDone(todos) {
  const modifiedTodos = [];

  todos.forEach(todo => {
     modifiedTodos.push("done _ " + todos)
  )}
return modifiedTodos;
}
