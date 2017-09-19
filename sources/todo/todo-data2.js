var state = {
  Todo: {
    t1: {task: 'task1', finished: true}
  , t2: {task: 'task2'}
  },
  TodoApp: {
+   l1: {input: '', filter: 'Completed'}
  },

  //relations
  TodoApp_todos: {
    l1: ['t1', 't2']
  },
  Todo_app: {
    t1: 'l1',
    t2: 'l1'
  },
  TodoApp_editing: {
  },
  TodoApp_editing_inverse: {
  },

  //default values
  Todo_finished: {
    t2: false
  },
  TodoApp_filter: {
-   l1: 'All'
  },

  //derived relations
  TodoApp_finishedTodos: {
    l1: ['t1']
  },
  TodoApp_visibleTodos: {
-   l1: ['t1', 't2']
  },

  //derived values
  TodoApp_allFinished: {
    l1: false
  },
  TodoApp_todosLeft: {
    l1: 1
  }
};