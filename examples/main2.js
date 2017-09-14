var TodoExample = require('./todo');
var ProgramFactory = require('./ProgramFactory')

module.exports = {
  TodoExample: TodoExample,
  CounterExample: ProgramFactory(require('./counter'), 'counter-program'),
  TaskListExample: ProgramFactory(require('./tasklist'), 'tasklist-program'),
  IncomeTaxExample: ProgramFactory(require('./incometax'), 'incometax-program'),
  IncomeTaxNoSummaryExample: ProgramFactory(require('./incometax-no-summary'), 'incometax-program-no-summary'),
  AddExample: ProgramFactory(require('./add'), 'add-program'),
  SlidesExample: ProgramFactory(require('../slides2'), 'slides-program', true)
};
