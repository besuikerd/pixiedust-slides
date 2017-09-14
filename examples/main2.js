var TodoExample = require('./todo');
var ProgramFactory = require('./ProgramFactory')

module.exports = {
  TodoExample: TodoExample,
  TodoExampleDup: ProgramFactory(require('./todo/todo'), 'todo-example', true),
  IncomeTaxExample: ProgramFactory(require('./incometax/incometax'), 'incometax-program'),
  IncomeTaxNoSummaryExample: ProgramFactory(require('./incometax/incometax-no-summary'), 'incometax-program-no-summary'),
  AddExample: ProgramFactory(require('./add/add'), 'add-program'),
  SlidesExample: ProgramFactory(require('../slides2'), 'slides-program', true)
};
