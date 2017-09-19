var ProgramFactory = require('./ProgramFactory')


module.exports = {
  TodoExample: ProgramFactory(require('./todo/todo'), 'todo-example'),
  TodoWithData: ProgramFactory(require('./todo/todo-with-data'), 'todo-example'),
  TodoExampleDup: ProgramFactory(require('./todo/todo'), 'todo-example', true),
  CounterExample: ProgramFactory(require('./counter/counter'), 'counter-example'),
  IncomeTaxExample: ProgramFactory(require('./incometax/incometax'), 'incometax-program'),
  IncomeTaxNoSummaryExample: ProgramFactory(require('./incometax/incometax-no-summary'), 'incometax-program-no-summary'),
  AddExample: ProgramFactory(require('./add/add'), 'add-program'),
  SlidesExample: ProgramFactory(require('../slides2'), 'slides-program', true),
  GradesExample: ProgramFactory(require('./grades/grades'), 'grades-program')
};
