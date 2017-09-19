var ProgramFactoryModule = require('./ProgramFactory')

var ProgramFactory = ProgramFactoryModule.ProgramFactory;
var createStore = ProgramFactoryModule.createStore;

var todoStore = createStore(require('./todo/todo-with-data'));
require('./todo/stylesheets/main.scss')


module.exports = {
  TodoExample: ProgramFactory(require('./todo/todo'), 'todo-example'),
  TodoWithData: ProgramFactory(require('./todo/todo-with-data'), 'todo-example', {attachHeader: false}),
  TodoExampleDup: ProgramFactory(require('./todo/todo'), 'todo-example', {duplicateStore: true}),
  CounterExample: ProgramFactory(require('./counter/counter'), 'counter-example'),
  IncomeTaxExample: ProgramFactory(require('./incometax/incometax'), 'incometax-program'),
  IncomeTaxNoSummaryExample: ProgramFactory(require('./incometax/incometax-no-summary'), 'incometax-program-no-summary'),
  AddExample: ProgramFactory(require('./add/add'), 'add-program'),
  SlidesExample: ProgramFactory(require('../slides2'), 'slides-program', {duplicateStore: true}),
  GradesExample: ProgramFactory(require('./grades/grades'), 'grades-program')
};
