var Class = require('jsface').Class;
var PixieDustComponent = require('./PixieDustComponent');
var Functions = require('lib/functions'); 


function Lifted(render, actions){
	var componentName = render.name
	if(actions === undefined){ actions = []; }
	
	function constructor(props, context){
		this.actions = {};
		for(var i = 0 ; i < actions.length ; i++){
			(function(){
				var actionName = actions[i];
				var actionCreator = function(){
					var args = Array.prototype.slice.call(arguments);
					var dispatch = this.dispatch.bind(this);
					var action = function (e){
						var bla = actionName;
						var message = {
								type: componentName + '_' + bla,
								props: this.props,
								args: args
							};
						dispatch(message);
					}
					action = action.bind(this);
					return action;
				}
				actionCreator = actionCreator.bind(this);
				this.actions[actionName] = actionCreator;
			}).bind(this)();
		}
	}
	
	var LiftedComponent = Class(PixieDustComponent, {
		constructor: constructor,
		
		componentWillMount: function(){
			this.materialize(this.props, this.context);
		},
		
		componentWillReceiveProps: function(props, context){
      this.materialize(props, context);
    },

    materialize: function(props, context){
    	var state = context.store.getState();
    	var scope = _.assign({}, props, this.actions);
    	var rendered = render(scope, state, context.store);
      this.materialized = rendered.result;
      if(rendered.state !== state){
        this.stateUpdate(context, rendered.state);
      }
    },

    stateUpdate: function(context, newState){
      context.store.dispatch({type: 'cacheUpdate[' + componentName + ']', updatedState: newState})
    },

    render: function(){
      return this.materialized;
    }
  });
	Functions.tryRenameFunctionName(LiftedComponent, 'Lifted[' + componentName + ']');
  return LiftedComponent;
}

module.exports = Lifted;