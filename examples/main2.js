var ProgramFactoryModule = require('./ProgramFactory')

var ProgramFactory = ProgramFactoryModule.ProgramFactory;
var createStore = ProgramFactoryModule.createStore;
var todoStore = createStore(require('./todo/todo-with-data'));


module.exports = {
  TodoExample: ProgramFactory(require('./todo/todo'), 'todo-example'),
  TodoWithData: ProgramFactory(require('./todo/todo-with-data'), 'todo-example', {attachHeader: false}),
  Todo2: ProgramFactory(require('./todo/todo2'), 'todo-example', {store: todoStore}),
  Todo3: ProgramFactory(require('./todo/todo3'), 'todo-example', {store: todoStore}),
  Todo4: ProgramFactory(require('./todo/todo4'), 'todo-example', {store: todoStore}),
  Todo5: ProgramFactory(require('./todo/todo5'), 'todo-example', {store: todoStore}),
  Todo6: ProgramFactory(require('./todo/todo6'), 'todo-example', {store: todoStore}),
  Todo7: ProgramFactory(require('./todo/todo7'), 'todo-example', {store: todoStore}),
  Todo8: ProgramFactory(require('./todo/todo8'), 'todo-example', {store: todoStore}),
  Todo9: ProgramFactory(require('./todo/todo9'), 'todo-example', {store: todoStore}),
  Todo10: ProgramFactory(require('./todo/todo10'), 'todo-example', {store: todoStore}),
  TodoExampleDup: ProgramFactory(require('./todo/todo'), 'todo-example', {duplicateStore: true}),
  CounterExample: ProgramFactory(require('./counter/counter'), 'counter-example'),
  IncomeTaxExample: ProgramFactory(require('./incometax/incometax'), 'incometax-program'),
  IncomeTaxNoSummaryExample: ProgramFactory(require('./incometax/incometax-no-summary'), 'incometax-program-no-summary'),
  AddExample: ProgramFactory(require('./add/add'), 'add-example'),
  SlidesExample: ProgramFactory(require('../slides2'), 'slides-program', {duplicateStore: true}),
  GradesExample: ProgramFactory(require('./grades/grades'), 'grades-example')
};
