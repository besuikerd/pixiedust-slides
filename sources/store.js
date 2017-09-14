function makeStore(Reducer reducer, State initialState){
  var subscribers = [];
  var currentState = initialState;

  function dispatch(action){
    currentState = reducer(currentState, action);
    subscribers.forEach(function(onNext) {
      onNext(currentState)
    });
  }

  function get() {
    return currentState;
  }

  function subscribe(subscriber){
    subscribers.push(subscriber);
  }

  return {
    dispatch: dispatch,
    get: get,
    subscribe: subscribe
  };
}