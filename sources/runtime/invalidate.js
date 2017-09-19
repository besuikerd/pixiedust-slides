function invalidateTodo_task(state, id){
  state = invalidateTodo_pretty(state, id);
  return state;
}

function invalidateTodo_pretty(state, id) {
  state = state.Todo_pretty.remove(id);
  return state;
}