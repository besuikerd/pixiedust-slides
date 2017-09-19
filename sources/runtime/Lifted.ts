function lift(component){
  return class extends ReactComponent{
    var materialized: ReactElement;

    componentWillReceiveProps(props){
      this.materialize(props);
    }

    materialize(props) {
      var store = this.context.store;
      var state = store.getState();
      var result = component(props, state);
      this.materialized = result.view;
      if(result.state !== state)
        store.dispatch(
          {newState: result.state}
        );
    }

    render() {
      return this.materialized;
    }
  }
}