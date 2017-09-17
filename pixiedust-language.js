var hljs = require('highlight.js');

module.exports =
  function pix (hljs) {
    return {
      case_insensitive: true, // language is case-insensitive
      keywords: 'component model entity view action for in relation switch case default if else imports ref',
      contains: [
        {
          className: 'string'
        , begin: '"', end: '"'
        },
        {
          className: 'number'
        , begin: '\\b\\d+'
        },
        {
          className: 'type'
        , begin: '(View|Int|Boolean|String|Float|Datetime|Action\\[.*\\])(?![\\w])'
        }
      ]
    }
  }