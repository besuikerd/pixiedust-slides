require('./stylesheets/main.scss');

var program = require('./todo');
var ProgramFactory = require('../ProgramFactory');

module.exports = ProgramFactory(program, 'todo-example')
