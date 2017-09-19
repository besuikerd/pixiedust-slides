type ModelFold<S,A> = (S, A) => S

interface Store<S, A> {
  getState    : S
  subscribe   : (S => ()) => ()
  dispatch    : A => ()
}