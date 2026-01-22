function markAsDone(todos) {
  const modifiedTodos = [];

  todos.forEach(todo => {
    const modifiedTodo = {
      ...todo, 
      description: 'done - ' + todo.description
    };
    modifiedTodos.push(modifiedTodo);
  });

  return modifiedTodos







