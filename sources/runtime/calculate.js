function calculateFoo_der(state, id){
  var value = getFoo_der(state, id);
  if(value === undefined){
    //calculate value
  }
  return {
    state: state
  , value: value
  }
}