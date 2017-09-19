function invalidateFoo_attr(state, id){
  state = invalidateFoo_der(state, id);
  return state;
}

function invalidateFoo_der(state, id) {
  state = state.Foo_der.remove(id);
  return state;
}