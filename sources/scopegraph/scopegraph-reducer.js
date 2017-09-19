export function reducer(state, action){
  switch(action.type) {

    case SET_SCOPEGRAPH:
      return Object.assign({}, state,
        {scopegraphText: action.scopegraph}
      );

    case SET_OUTPUT_FORMAT:
      return Object.assign({}, state,
        {format: action.format}
      );

  }
}


export const initialState = {
  scopegraphText: 'scope graph { ... }',
  format: DOT_FORMAT
};