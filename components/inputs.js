var React = require('react');
var Class = require('jsface').Class;

var KeyboardListener = Class(React.Component, {

  constructor: function KeyboardListener(){
    this.callback = this.callback.bind(this);
  },

  callback: function(e){
    var action = this.props['on' + e.key];
    if(action !== undefined && action !== null){
      action()();
    }
  },

  componentDidMount: function(){
    document.addEventListener('keydown', this.callback);
  },

  componentWillUnmount: function(){
    document.removeEventListener('keydown', this.callback);
  },

  render: function(){return null;}
});

var Trigger = Class(React.Component, {
  constructor: function Trigger(){
    this.trigger = this.trigger.bind(this);
  },

  componentDidMount: function(){
    window.requestAnimationFrame(this.trigger);
  },

  trigger: function(){
    var action = this.props.action;
    if(action !== undefined && action !== null){
      action()();
    }
  },

  render: function(){
    return React.createElement('trigger');
  }
});

module.exports = {
  KeyboardListener: KeyboardListener,
  Trigger: Trigger
};