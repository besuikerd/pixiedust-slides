Todo:
  todo1 => {id: todo1, task: "t1"}
  todo2 => {id: todo2, task: "t2",
                finished: true}

Todo.finished:
  todo1 => false

Todo.pretty:
  todo1 => "t1!"
  todo2 => "t2!"

TodoList:
  list1 => {id: list1}

Todo.list:
  foo1 => list1
  foo2 => list1

TodoList.todos:
  bar1 => [todo1, todo2]