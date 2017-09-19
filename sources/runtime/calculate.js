function calculateTodo_pretty(state, id){
  var value = getTodo_pretty(state, id);
  if(value === undefined){
    //calculate value
  }
  return {
    state: state
  , value: value
  }
}