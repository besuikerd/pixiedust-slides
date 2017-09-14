var program = require('./slides')
var runtime = require('pixiedust/runtime');
var PixieDustProvider = require('pixiedust/components/PixieDustProvider');

require('./stylesheets/main.scss');
require('purecss/build/pure.css');

//load rx modules
require('rx-dom');

var container = document.createElement('div');
container.setAttribute('class', 'slides-container');
document.body.appendChild(container);

var React = require('react');
var ReactDOM = require('react-dom');

var state = program.emptyState;
var init = program.init(state);
var store = runtime.makeStore(program.reducer, init.state);


var highlight = require('highlight.js');
require('highlight.js/styles/idea.css');

highlight.registerLanguage('pix', require('./pixiedust-language'));

var root = React.createElement(
  PixieDustProvider,
  {
    store: store
  },
  React.createElement(program.Component.Main, {slideshow: 'slideshow'})
);

ReactDOM.render(root, container);