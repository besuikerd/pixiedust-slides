var React = require('react');
var Class = require('jsface').Class;
var highlight = require('highlight.js');

var Rx = require('rx');

var CodeBlock = Class(React.Component, {
    constructor: function CodeBlock(){}

  , componentDidUpdate: function (){
    highlight.highlightBlock(this.refs.block)
  }

  , render: function(){
    return React.createElement('pre',
      {},
      React.createElement('code',
        {
          className: this.props.language
        , ref: 'block'
        },
        this.props.code
      )
    )
  }
});

var CodeBlockFetch = Class(React.Component, {
  constructor: function CodeBlockFetch(){
    this.state = {code: null}
    this.onNext = this.onNext.bind(this);
  }
  , onNext: function(e){
    this.setState({code: e.response});
  }


  , componentDidMount: function(props){
    Rx.DOM.ajax(this.props.url).subscribe(this.onNext)
  }
  , componentWillReceiveProps: function(nextProps){
    if(this.props.url !== nextProps.url){

      Rx.DOM.ajax(nextProps.url).subscribe(this.onNext)
    }
  }

  , render: function(){
    return React.createElement(CodeBlock, {
      language: this.props.language,
      code: this.state.code || null
    })
  }
});

module.exports = {
  CodeBlock: CodeBlock,
  CodeBlockFetch: CodeBlockFetch
};