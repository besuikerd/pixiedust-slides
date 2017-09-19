function setTodo_task(state, id, value) {
  state = state.Todo.update('task', id, value);
  state = invalidateTodo_task(state, id);
  return state;
}