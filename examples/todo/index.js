require('./stylesheets/main.scss');

var Class = require('jsface').Class;
var React = require('react');

var ProgramFactory = require('../ProgramFactory');

var program = require('./todo');

var DockedTodoInstance = ProgramFactory(require('./todo-docked'), 'todo-example', false, false);


var TodoDocked = Class(React.Component, {
  constructor: function TodoDocked(){
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visible: false
    }
  }

, componentDidMount: function(){
    window.addEventListener('keydown', this.toggleVisibility)
  }

, componentWillUnmount: function(){
    window.removeEventListener('keydown', this.toggleVisibility);
  }

, toggleVisibility: function(e){
    if(e.ctrlKey && e.code == 'KeyB'){
      this.setState({visible: !this.state.visible})
    }
  }

, render: function(){
    var content = this.state.visible ?
      React.createElement('div',
        {
          style: {
            backgroundColor: 'white'
          , padding: '2px'
          , border: '1px solid #ddd'
          }
        }
      , React.createElement(DockedTodoInstance)
      ) : null;

    return React.createElement('div',
      {
        style: {
          position: 'fixed'
        , top: '100px'
        , left: '30px'
        , width: '800px'
        , transition: '5s ease-in-out'
        }
      }
    , content
    );
  }
});

module.exports = {
  Todo: ProgramFactory(program, 'todo-example')
, TodoDocked: TodoDocked
};
