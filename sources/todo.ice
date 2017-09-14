model
  entity TodoList{
    allFinished: Boolean = conj(todos.finished)
    todosLeft: Int = (todos \ finishedTodos).count()
    pluralItem : String = "item" + if(todos.count() > 0) "s"

    view: String = "<h1>Todos</h1><div>${todos.view.concat}</div><span>${todosLeft} ${pluralItem} left"
  }

  entity Todo {
    task: String
    finished: Boolean

    view: String = "<input type='checkbox' value=${finished}/><span>${task}</span>"
  }

  relation TodoList.todos * <-> 1 Todo.list
  relation TodoList.finishedTodos =
    todos.filter(todo => todo.finished) <-> Todo.inverseFinishedTodos