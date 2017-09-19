export function setScopegraph(scopegraph){
  return {
    type: SET_SCOPEGRAPH,
    scopegraph: scopegraph
  };
}

export function setDotFormat(){
  return {
    type: SET_OUTPUT_FORMAT,
    format: DOT_FORMAT
  }
}

export function setJSONFormat(){
  return {
    type: SET_OUTPUT_FORMAT,
    format: JSON_FORMAT
  }
}

