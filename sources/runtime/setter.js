function setFoo_attr(state, id, value) {
  state = state.Foo.update(id, value);
  state = invalidateFoo_attr(state, id);
  return state;
}