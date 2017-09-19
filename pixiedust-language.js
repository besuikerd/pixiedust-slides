var hljs = require('highlight.js');

var param = {
  className: 'type'
, begin: '\\w+'
};

var ofType = {
  begin: ':\\s*'
, contains: [
    param
  ]
};

var componentName = {
  className: 'variable'
, begin: '\\w+'
};


var component = {
  beginKeywords: 'component'
, end: '\\)'
, excludeEnd: true
, contains: [
    ofType
  , componentName
  ]
};

module.exports =
  function pix (hljs) {
    return {
      case_insensitive: false, // language is case-insensitive
      keywords: 'entity model view action for in relation switch case default if else imports ref data config module',
      contains: [
        {
          className: 'string'
        , begin: '"', end: '"'
        }
      , {
          className: 'meta'
        , begin: '^\\+'
        }
      , {
          className: 'number'
        , begin: '\\b\\d+'
        }
      , {
          className: 'variable'
        , begin: '@'
        , excludeBegin: true
        , end: '.(?![\\w])'
        }
      , component
      , ofType
      ]
    }
  }