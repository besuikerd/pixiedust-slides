var React = require('react');
var runtime = require('pixiedust/runtime');
var PixieDustProvider = require('pixiedust/components/PixieDustProvider');
var Class = require('jsface').Class;
var _ = require('lodash');

var redux = require('redux');
var createDevTools = require('redux-devtools').createDevTools;
var LogMonitor = require('redux-devtools-log-monitor').default;
var DockMonitor = require('redux-devtools-dock-monitor').default;
var Inspector = require('redux-devtools-inspector').default;

var inspectorTheme = {
  scheme: 'inspector',
  author: 'Alexander Kuznetsov (alexkuz@gmail.com)',
  "base00": "#FFFFFF",
  "base01": "#E0E0E0",
  "base02": "#D0D0D0",
  "base03": "#B0B0B0",
  "base04": "#000000",
  "base05": "#101010",
  "base06": "#151515",
  "base07": "#202020",
  "base08": "#FF0086",
  "base09": "#FD8900",
  "base0A": "#ABA800",
  "base0B": "#00C918",
  "base0C": "#1FAAAA",
  "base0D": "#3777E6",
  "base0E": "#AD00A1",
  "base0F": "#CC6633"

}

var DevTools = createDevTools(
  React.createElement(DockMonitor, {
      toggleVisibilityKey: 'ctrl-h'
    , changePositionKey: 'ctrl-q'
    , defaultPosition: 'bottom'
    , defaultIsVisible: false
  },
    React.createElement(Inspector, {
      invertTheme:  false,
      theme: inspectorTheme,
      supportImmutable: true,
      diffObjectHash: function(obj, index){
        return obj !== null && obj !== undefined ? obj.id : '';
      }
    })
  )
);

function createStore(program){
  var init = program.init(program.emptyState);
  var createStore = DevTools.instrument()(redux.createStore);
  var store = createStore(program.reducer, init.state);

  function reset(){
    store.dispatch({type: 'cacheUpdate[' + name + ']', updatedState: init.state});
  }
  reset();
  return {
    init: init,
    store : store,
    reset: reset
  };
}

var defaultOptions = {
  attachDebugger: true
, attachHeader: true
, duplicateStore: false
};

function ProgramFactory(program, name, options){
  var options = _.assign({}, defaultOptions, options === undefined ? {} : options);

  var store;
  if(options.store !== undefined){
    store = options.store;
  } else if(!options.duplicateStore){
    store = createStore(program)
  }
  var Program = Class(React.Component, {
    constructor: function Program() {
      this.store = store === undefined ? createStore(program) : store;
    },

    render: function() {
      var root;
      var execute = program.execute(this.store.store, this.store.init.ids);
      if(execute.length > 0){
        root = execute[0].value
      }

      return React.createElement(PixieDustProvider
      , {store: this.store.store }
      , React.createElement('div', {className: 'program-container'}
        , options.attachDebugger ? React.createElement(DevTools) : null
        , options.attachHeader ? React.createElement('div', {className: 'program-header'}
          , React.createElement('h2', {className: 'program-name'}, name)
          , React.createElement('button', {className: 'program-reset-button', onClick: this.store.reset}, 'Reset')
          ) : null
        , React.createElement('div', {className: name}, root)
        )
      );
    }
  });


  return Program;
}
module.exports = {
  ProgramFactory: ProgramFactory
, createStore: createStore
};