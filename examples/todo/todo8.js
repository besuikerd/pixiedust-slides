var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "pixiedust/components/native/inputs" : require("pixiedust/components/native/inputs")
};
var expression = require('expression');
var constants = require('pixiedust-constants');
var _ = require('lodash');
var moment = require('moment');
var immutable = require('immutable');
var pixiedustRuntime = require('pixiedust/runtime');
var scoped = require('lib/scoped');
var scope = constants.EMPTY_OBJECT;
var emptyState = immutable.Map({
  "Todo" : immutable.Map(),
  "TodoApp" : immutable.Map(),
  "Todo_app" : immutable.Map(),
  "Todo_editing_inverse" : immutable.Map(),
  "Todo_inverseFinishedTodos" : immutable.Map(),
  "Todo_inverseVisibleTodos" : immutable.Map(),
  "TodoApp_allFinished" : immutable.Map(),
  "TodoApp_filter" : immutable.Map(),
  "TodoApp_input" : immutable.Map(),
  "TodoApp_todosLeft" : immutable.Map(),
  "TodoApp_editing" : immutable.Map(),
  "TodoApp_finishedTodos" : immutable.Map(),
  "TodoApp_todos" : immutable.Map(),
  "TodoApp_visibleTodos" : immutable.Map()
});
module.exports.emptyState = emptyState;
function getTodo_finished(state,id) {
  var _0 = state.get("Todo").get(id);
  if(_0 !== undefined) {
    _0 = _0.finished;
    if(_0 === undefined) {
      _0 = null;
    }
  }
  return _0;
}

module.exports.getTodo_finished = getTodo_finished;
function getTodo_finished_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Todo");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.finished;
      if(_4 !== undefined && _4 !== null) {
        if(_4 !== undefined) {
          _0.push(_4);
        }
      }
    }
  }
  return _0;
}

module.exports.getTodo_finished_Many = getTodo_finished_Many;
function getTodo_task(state,id) {
  var _0 = state.get("Todo").get(id);
  if(_0 !== undefined) {
    _0 = _0.task;
    if(_0 === undefined) {
      _0 = null;
    }
  }
  return _0;
}

module.exports.getTodo_task = getTodo_task;
function getTodo_task_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Todo");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.task;
      if(_4 !== undefined && _4 !== null) {
        if(_4 !== undefined) {
          _0.push(_4);
        }
      }
    }
  }
  return _0;
}

module.exports.getTodo_task_Many = getTodo_task_Many;
function getTodo_app(state,id) {
  var _0 = state.get("Todo_app").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTodo_app = getTodo_app;
function getTodo_app_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Todo_app");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      if(_4 !== undefined) {
        _0.push(_4);
      }
    }
  }
  return _0;
}

module.exports.getTodo_app_Many = getTodo_app_Many;
function getTodo_editing_inverse(state,id) {
  var _0 = state.get("Todo_editing_inverse").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTodo_editing_inverse = getTodo_editing_inverse;
function getTodo_editing_inverse_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Todo_editing_inverse");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      if(_4 !== undefined) {
        _0.push(_4);
      }
    }
  }
  return _0;
}

module.exports.getTodo_editing_inverse_Many = getTodo_editing_inverse_Many;
function getTodo_inverseFinishedTodos(state,id) {
  return state.get("Todo_inverseFinishedTodos").get(id);
}

module.exports.getTodo_inverseFinishedTodos = getTodo_inverseFinishedTodos;
function getTodo_inverseFinishedTodos_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Todo_inverseFinishedTodos");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTodo_inverseFinishedTodos_Many = getTodo_inverseFinishedTodos_Many;
function getTodo_inverseVisibleTodos(state,id) {
  return state.get("Todo_inverseVisibleTodos").get(id);
}

module.exports.getTodo_inverseVisibleTodos = getTodo_inverseVisibleTodos;
function getTodo_inverseVisibleTodos_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Todo_inverseVisibleTodos");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTodo_inverseVisibleTodos_Many = getTodo_inverseVisibleTodos_Many;
function getTodoApp_allFinished(state,id) {
  return state.get("TodoApp_allFinished").get(id);
}

module.exports.getTodoApp_allFinished = getTodoApp_allFinished;
function getTodoApp_allFinished_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TodoApp_allFinished");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getTodoApp_allFinished_Many = getTodoApp_allFinished_Many;
function getTodoApp_filter(state,id) {
  var _0 = state.get("TodoApp").get(id);
  if(_0 !== undefined) {
    _0 = _0.filter;
    if(_0 === undefined || _0 === null) {
      _0 = state.get("TodoApp_filter").get(id);
    }
  }
  return _0;
}

module.exports.getTodoApp_filter = getTodoApp_filter;
function getTodoApp_filter_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("TodoApp");
  var _2 = state.get("TodoApp_filter");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.filter;
      if(_4 === undefined) {
        _4 = _2.get(ids[_3]);
      }
      if(_4 !== undefined) {
        _0.push(_4);
      }
    }
  }
  return _0;
}

module.exports.getTodoApp_filter_Many = getTodoApp_filter_Many;
function getTodoApp_input(state,id) {
  var _0 = state.get("TodoApp").get(id);
  if(_0 !== undefined) {
    _0 = _0.input;
    if(_0 === undefined || _0 === null) {
      _0 = state.get("TodoApp_input").get(id);
    }
  }
  return _0;
}

module.exports.getTodoApp_input = getTodoApp_input;
function getTodoApp_input_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("TodoApp");
  var _2 = state.get("TodoApp_input");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.input;
      if(_4 === undefined) {
        _4 = _2.get(ids[_3]);
      }
      if(_4 !== undefined) {
        _0.push(_4);
      }
    }
  }
  return _0;
}

module.exports.getTodoApp_input_Many = getTodoApp_input_Many;
function getTodoApp_todosLeft(state,id) {
  return state.get("TodoApp_todosLeft").get(id);
}

module.exports.getTodoApp_todosLeft = getTodoApp_todosLeft;
function getTodoApp_todosLeft_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TodoApp_todosLeft");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getTodoApp_todosLeft_Many = getTodoApp_todosLeft_Many;
function getTodoApp_editing(state,id) {
  var _0 = state.get("TodoApp_editing").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTodoApp_editing = getTodoApp_editing;
function getTodoApp_editing_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TodoApp_editing");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      if(_4 !== undefined) {
        _0.push(_4);
      }
    }
  }
  return _0;
}

module.exports.getTodoApp_editing_Many = getTodoApp_editing_Many;
function getTodoApp_finishedTodos(state,id) {
  return state.get("TodoApp_finishedTodos").get(id);
}

module.exports.getTodoApp_finishedTodos = getTodoApp_finishedTodos;
function getTodoApp_finishedTodos_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TodoApp_finishedTodos");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTodoApp_finishedTodos_Many = getTodoApp_finishedTodos_Many;
function getTodoApp_todos(state,id) {
  var _0 = state.get("TodoApp_todos").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getTodoApp_todos = getTodoApp_todos;
function getTodoApp_todos_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TodoApp_todos");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      for (var _6 = 0 ; _6 < _4.length ; _6++) {
        var _5 = _4[_6];
        if(_5 !== null) {
          _0.push(_5);
        }
      }
    }
  }
  return _0;
}

module.exports.getTodoApp_todos_Many = getTodoApp_todos_Many;
function getTodoApp_visibleTodos(state,id) {
  return state.get("TodoApp_visibleTodos").get(id);
}

module.exports.getTodoApp_visibleTodos = getTodoApp_visibleTodos;
function getTodoApp_visibleTodos_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TodoApp_visibleTodos");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTodoApp_visibleTodos_Many = getTodoApp_visibleTodos_Many;
function setTodo_finished(state,id,value) {
  state = invalidateTodo_finished(state,id);
  var prop = {
    finished : value
  };
  state = state.update("Todo",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTodo_finished = setTodo_finished;
function setTodo_task(state,id,value) {
  state = invalidateTodo_task(state,id);
  var prop = {
    task : value
  };
  state = state.update("Todo",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTodo_task = setTodo_task;
function setTodo_app(state,id,value) {
  state = invalidateTodo_app(state,id);
  var previousValue = getTodo_app(state,id);
  var table = state.get("Todo_app").set(id,value);
  state = state.set("Todo_app",table);
  var inverseTable = state.get("TodoApp_todos");
  if(value != null) {
    var addedId = value;
    state = invalidateTodoApp_todos(state,addedId);
    var inverseIds = inverseTable.get(addedId);
    if(inverseIds === undefined) {
      inverseIds = [id];
    } else {
      inverseIds = inverseIds.concat(id);
    }
    inverseTable = inverseTable.set(addedId,inverseIds);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateTodoApp_todos(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("TodoApp_todos",inverseTable);
  return state;
}

module.exports.setTodo_app = setTodo_app;
function setTodo_editing_inverse(state,id,value) {
  state = invalidateTodo_editing_inverse(state,id);
  var previousValue = getTodo_editing_inverse(state,id);
  var table = state.get("Todo_editing_inverse").set(id,value);
  state = state.set("Todo_editing_inverse",table);
  var inverseTable = state.get("TodoApp_editing");
  if(value != null) {
    var addedId = value;
    state = invalidateTodoApp_editing(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateTodoApp_editing(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("TodoApp_editing",inverseTable);
  return state;
}

module.exports.setTodo_editing_inverse = setTodo_editing_inverse;
function setTodoApp_filter(state,id,value) {
  state = invalidateTodoApp_filter(state,id);
  var prop = {
    filter : value
  };
  state = state.update("TodoApp",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTodoApp_filter = setTodoApp_filter;
function setTodoApp_input(state,id,value) {
  state = invalidateTodoApp_input(state,id);
  var prop = {
    input : value
  };
  state = state.update("TodoApp",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTodoApp_input = setTodoApp_input;
function setTodoApp_editing(state,id,value) {
  state = invalidateTodoApp_editing(state,id);
  var previousValue = getTodoApp_editing(state,id);
  var table = state.get("TodoApp_editing").set(id,value);
  state = state.set("TodoApp_editing",table);
  var inverseTable = state.get("Todo_editing_inverse");
  if(value != null) {
    var addedId = value;
    state = invalidateTodo_editing_inverse(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateTodo_editing_inverse(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Todo_editing_inverse",inverseTable);
  return state;
}

module.exports.setTodoApp_editing = setTodoApp_editing;
function setTodoApp_todos(state,id,value) {
  state = invalidateTodoApp_todos(state,id);
  var previousValue = getTodoApp_todos(state,id);
  var table = state.get("TodoApp_todos").set(id,value);
  state = state.set("TodoApp_todos",table);
  var inverseTable = state.get("Todo_app");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateTodo_app(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateTodo_app(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Todo_app",inverseTable);
  return state;
}

module.exports.setTodoApp_todos = setTodoApp_todos;
function addTodoApp_todos(state,id,value) {
  var previousValue = getTodoApp_todos(state,id);
  var nextValue = previousValue.concat(value);
  return setTodoApp_todos(state,id,nextValue);
}

module.exports.addTodoApp_todos = addTodoApp_todos;
function invalidateTodo_finished(state,id) {
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTodo_app(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateTodoApp_finishedTodos(state,_0);
          }
      });
  return state;
}

module.exports.invalidateTodo_finished = invalidateTodo_finished;
function invalidateTodo_task(state,id) {
  return state;
}

module.exports.invalidateTodo_task = invalidateTodo_task;
function invalidateTodo_app(state,id) {
  return state;
}

module.exports.invalidateTodo_app = invalidateTodo_app;
function invalidateTodo_editing_inverse(state,id) {
  return state;
}

module.exports.invalidateTodo_editing_inverse = invalidateTodo_editing_inverse;
function invalidateTodo_inverseFinishedTodos(state,id) {
  state = state.update("Todo_inverseFinishedTodos",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTodo_inverseFinishedTodos = invalidateTodo_inverseFinishedTodos;
function invalidateTodo_inverseVisibleTodos(state,id) {
  state = state.update("Todo_inverseVisibleTodos",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTodo_inverseVisibleTodos = invalidateTodo_inverseVisibleTodos;
function invalidateTodoApp_allFinished(state,id) {
  state = state.update("TodoApp_allFinished",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTodoApp_allFinished = invalidateTodoApp_allFinished;
function invalidateTodoApp_filter(state,id) {
  state = state.update("TodoApp_filter",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateTodoApp_visibleTodos(state,id);
  }
  return state;
}

module.exports.invalidateTodoApp_filter = invalidateTodoApp_filter;
function invalidateTodoApp_input(state,id) {
  state = state.update("TodoApp_input",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTodoApp_input = invalidateTodoApp_input;
function invalidateTodoApp_todosLeft(state,id) {
  state = state.update("TodoApp_todosLeft",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateTodoApp_allFinished(state,id);
  }
  return state;
}

module.exports.invalidateTodoApp_todosLeft = invalidateTodoApp_todosLeft;
function invalidateTodoApp_editing(state,id) {
  return state;
}

module.exports.invalidateTodoApp_editing = invalidateTodoApp_editing;
function invalidateTodoApp_finishedTodos(state,id) {
  state = state.update("TodoApp_finishedTodos",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateTodoApp_todosLeft(state,id);
  }
  if(id != null) {
    state = invalidateTodoApp_visibleTodos(state,id);
  }
  return state;
}

module.exports.invalidateTodoApp_finishedTodos = invalidateTodoApp_finishedTodos;
function invalidateTodoApp_todos(state,id) {
  if(id != null) {
    state = invalidateTodoApp_finishedTodos(state,id);
  }
  if(id != null) {
    state = invalidateTodoApp_todosLeft(state,id);
  }
  if(id != null) {
    state = invalidateTodoApp_visibleTodos(state,id);
  }
  return state;
}

module.exports.invalidateTodoApp_todos = invalidateTodoApp_todos;
function invalidateTodoApp_visibleTodos(state,id) {
  state = state.update("TodoApp_visibleTodos",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTodoApp_visibleTodos = invalidateTodoApp_visibleTodos;
function calculateTodoApp_allFinished(state,id) {
  var result = getTodoApp_allFinished(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateTodoApp_todosLeft(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = null;
            }
            var _2 = _1 !== null ? _1 === 0 : null;
            result = _2;
            state = state.update("TodoApp_allFinished",function (table) {
                    return table.set(id,_2);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_allFinished = calculateTodoApp_allFinished;
function calculateTodoApp_allFinished_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoApp_allFinished(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_allFinished_Many = calculateTodoApp_allFinished_Many;
function calculateTodoApp_filter(state,id) {
  var result = getTodoApp_filter(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            result = "All";
            state = state.update("TodoApp_filter",function (table) {
                    return table.set(id,"All");
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_filter = calculateTodoApp_filter;
function calculateTodoApp_filter_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoApp_filter(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_filter_Many = calculateTodoApp_filter_Many;
function calculateTodoApp_input(state,id) {
  var result = getTodoApp_input(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            result = "";
            state = state.update("TodoApp_input",function (table) {
                    return table.set(id,"");
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_input = calculateTodoApp_input;
function calculateTodoApp_input_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoApp_input(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_input_Many = calculateTodoApp_input_Many;
function calculateTodoApp_todosLeft(state,id) {
  var result = getTodoApp_todosLeft(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getTodoApp_todos(state,scope["$this"]);
            var _2 ;
            if(scope["$this"] != null) {
              var calc = calculateTodoApp_finishedTodos(state,scope["$this"]);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = constants.EMPTY_ARRAY;
            }
            var _3 = _.difference(_1,_2);
            var _4 = expression.count(_3);
            result = _4;
            state = state.update("TodoApp_todosLeft",function (table) {
                    return table.set(id,_4);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_todosLeft = calculateTodoApp_todosLeft;
function calculateTodoApp_todosLeft_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoApp_todosLeft(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_todosLeft_Many = calculateTodoApp_todosLeft_Many;
function calculateTodoApp_finishedTodos(state,id) {
  var result = getTodoApp_finishedTodos(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getTodoApp_todos(state,scope["$this"]);
            var _2 = constants.EMPTY_ARRAY;
            for (var _3 = 0 ; _3 < _1.length ; _3++) {
              var oldScope = scope;
               ( function () {
                      var scope = _.assign({
                      },oldScope,{
                        todo : _1[_3]
                      });
                      var _4 = getTodo_finished(state,scope.todo);
                      if(_4) {
                        _2 = _2.concat([scope.todo]);
                      }
                  } ) ();
            }
            result = _2;
            var previousValue = getTodoApp_finishedTodos(state,id);
            var table = state.get("TodoApp_finishedTodos").set(id,_2);
            state = state.set("TodoApp_finishedTodos",table);
            var inverseTable = state.get("Todo_inverseFinishedTodos");
            var added = _.difference(_2,previousValue);
            var removed = _.difference(previousValue,_2);
            for (var i = 0 ; i < added.length ; i++) {
              var addedId = added[i];
              var inverseIds = inverseTable.get(addedId);
              if(inverseIds === undefined) {
                inverseIds = [id];
              } else {
                inverseIds = inverseIds.concat(id);
              }
              inverseTable = inverseTable.set(addedId,inverseIds);
            }
            for (var i = 0 ; i < removed.length ; i++) {
              var removedId = removed[i];
              var inverseIds = inverseTable.get(removedId);
              if(inverseIds === undefined) {
                inverseIds = [];
              } else {
                inverseIds = _.without(inverseIds,id);
              }
              inverseTable = inverseTable.set(removedId,inverseIds);
            }
            state = state.set("Todo_inverseFinishedTodos",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_finishedTodos = calculateTodoApp_finishedTodos;
function calculateTodoApp_finishedTodos_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoApp_finishedTodos(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result = result.concat(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_finishedTodos_Many = calculateTodoApp_finishedTodos_Many;
function calculateTodoApp_visibleTodos(state,id) {
  var result = getTodoApp_visibleTodos(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _15 ;
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateTodoApp_filter(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = null;
            }
            var _2 = _1 !== null ? _1 === "All" : null;
            if(_2) {
              var _3 = getTodoApp_todos(state,scope["$this"]);
              _15 = _3;
            } else {
              var _14 ;
              var _4 ;
              if(scope["$this"] != null) {
                var calc = calculateTodoApp_filter(state,scope["$this"]);
                state = calc.state;
                _4 = calc.result;
              } else {
                _4 = null;
              }
              var _5 = _4 !== null ? _4 === "Completed" : null;
              if(_5) {
                var _6 ;
                if(scope["$this"] != null) {
                  var calc = calculateTodoApp_finishedTodos(state,scope["$this"]);
                  state = calc.state;
                  _6 = calc.result;
                } else {
                  _6 = constants.EMPTY_ARRAY;
                }
                _14 = _6;
              } else {
                var _13 ;
                var _7 ;
                if(scope["$this"] != null) {
                  var calc = calculateTodoApp_filter(state,scope["$this"]);
                  state = calc.state;
                  _7 = calc.result;
                } else {
                  _7 = null;
                }
                var _8 = _7 !== null ? _7 === "Not Completed" : null;
                if(_8) {
                  var _9 = getTodoApp_todos(state,scope["$this"]);
                  var _10 ;
                  if(scope["$this"] != null) {
                    var calc = calculateTodoApp_finishedTodos(state,scope["$this"]);
                    state = calc.state;
                    _10 = calc.result;
                  } else {
                    _10 = constants.EMPTY_ARRAY;
                  }
                  var _11 = _.difference(_9,_10);
                  _13 = _11;
                } else {
                  var _12 = getTodoApp_todos(state,scope["$this"]);
                  _13 = _12;
                }
                _14 = _13;
              }
              _15 = _14;
            }
            result = _15;
            var previousValue = getTodoApp_visibleTodos(state,id);
            var table = state.get("TodoApp_visibleTodos").set(id,_15);
            state = state.set("TodoApp_visibleTodos",table);
            var inverseTable = state.get("Todo_inverseVisibleTodos");
            var added = _.difference(_15,previousValue);
            var removed = _.difference(previousValue,_15);
            for (var i = 0 ; i < added.length ; i++) {
              var addedId = added[i];
              var inverseIds = inverseTable.get(addedId);
              if(inverseIds === undefined) {
                inverseIds = [id];
              } else {
                inverseIds = inverseIds.concat(id);
              }
              inverseTable = inverseTable.set(addedId,inverseIds);
            }
            for (var i = 0 ; i < removed.length ; i++) {
              var removedId = removed[i];
              var inverseIds = inverseTable.get(removedId);
              if(inverseIds === undefined) {
                inverseIds = [];
              } else {
                inverseIds = _.without(inverseIds,id);
              }
              inverseTable = inverseTable.set(removedId,inverseIds);
            }
            state = state.set("Todo_inverseVisibleTodos",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_visibleTodos = calculateTodoApp_visibleTodos;
function calculateTodoApp_visibleTodos_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoApp_visibleTodos(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result = result.concat(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoApp_visibleTodos_Many = calculateTodoApp_visibleTodos_Many;
function init(state) {
  var app = {
    id : "app"
  };
  state = state.update("TodoApp",function (table) {
          return table.set(app.id,app);
      });
  var t1 = {
    id : "t1"
  };
  state = state.update("Todo",function (table) {
          return table.set(t1.id,t1);
      });
  var t2 = {
    id : "t2"
  };
  state = state.update("Todo",function (table) {
          return table.set(t2.id,t2);
      });
  var t3 = {
    id : "t3"
  };
  state = state.update("Todo",function (table) {
          return table.set(t3.id,t3);
      });
  var t4 = {
    id : "t4"
  };
  state = state.update("Todo",function (table) {
          return table.set(t4.id,t4);
      });
  var t5 = {
    id : "t5"
  };
  state = state.update("Todo",function (table) {
          return table.set(t5.id,t5);
      });
  var t6 = {
    id : "t6"
  };
  state = state.update("Todo",function (table) {
          return table.set(t6.id,t6);
      });
  state = addTodoApp_todos(state,app.id,t1.id);
  state = addTodoApp_todos(state,app.id,t2.id);
  state = addTodoApp_todos(state,app.id,t3.id);
  state = addTodoApp_todos(state,app.id,t4.id);
  state = addTodoApp_todos(state,app.id,t5.id);
  state = addTodoApp_todos(state,app.id,t6.id);
  state = setTodo_task(state,t1.id,"Incremental Rendering");
  state = setTodo_task(state,t2.id,"Composable views");
  state = setTodo_task(state,t3.id,"User input handling");
  state = setTodo_task(state,t4.id,"(Incremental) derived values");
  state = setTodo_task(state,t5.id,"Bidirectional mapping between data and view");
  state = setTodo_task(state,t6.id,"Undo/redo (time travelling)");
  return {
    state : state,
    ids : {
      app : app.id,
      t1 : t1.id,
      t2 : t2.id,
      t3 : t3.id,
      t4 : t4.id,
      t5 : t5.id,
      t6 : t6.id
    }
  };
}

module.exports.init = init;
function execute(store,ids) {
  var result = [];
  var oldScope = scope;
   ( function () {
          var scope = _.assign({
          },oldScope,ids);
           ( function () {
                  function calculation(state) {
                    var _0 = React.createElement(Component.Part,{
                      app : scope.app
                    });
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "View",
                    multiplicity : "1",
                    expression : "@Part(app) {\n}",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
      } ) ();
  return result;
}

module.exports.execute = execute;
var actions = {
  "init" : function (state) {
          state = state === undefined ? emptyState : state;
          return init(state).state;
      },
  "setTodo_finished" : function (state,action) {
          return setTodo_finished(state,action.id,action.value);
      },
  "setTodo_task" : function (state,action) {
          return setTodo_task(state,action.id,action.value);
      },
  "setTodo_app" : function (state,action) {
          return setTodo_app(state,action.id,action.value);
      },
  "setTodo_editing_inverse" : function (state,action) {
          return setTodo_editing_inverse(state,action.id,action.value);
      },
  "addTodo_inverseFinishedTodos" : function (state,action) {
          return addTodo_inverseFinishedTodos(state,action.id,action.value);
      },
  "addTodo_inverseVisibleTodos" : function (state,action) {
          return addTodo_inverseVisibleTodos(state,action.id,action.value);
      },
  "setTodoApp_filter" : function (state,action) {
          return setTodoApp_filter(state,action.id,action.value);
      },
  "setTodoApp_input" : function (state,action) {
          return setTodoApp_input(state,action.id,action.value);
      },
  "setTodoApp_editing" : function (state,action) {
          return setTodoApp_editing(state,action.id,action.value);
      },
  "addTodoApp_finishedTodos" : function (state,action) {
          return addTodoApp_finishedTodos(state,action.id,action.value);
      },
  "setTodoApp_todos" : function (state,action) {
          return setTodoApp_todos(state,action.id,action.value);
      },
  "addTodoApp_todos" : function (state,action) {
          return addTodoApp_todos(state,action.id,action.value);
      },
  "addTodoApp_visibleTodos" : function (state,action) {
          return addTodoApp_visibleTodos(state,action.id,action.value);
      },
  "calculateTodoApp_allFinished" : function (state,action) {
          return calculateTodoApp_allFinished(state,action.id).state;
      },
  "calculateTodoApp_allFinished_Many" : function (state,action) {
          return calculateTodoApp_allFinished_Many(state,action.ids).state;
      },
  "calculateTodoApp_filter" : function (state,action) {
          return calculateTodoApp_filter(state,action.id).state;
      },
  "calculateTodoApp_filter_Many" : function (state,action) {
          return calculateTodoApp_filter_Many(state,action.ids).state;
      },
  "calculateTodoApp_input" : function (state,action) {
          return calculateTodoApp_input(state,action.id).state;
      },
  "calculateTodoApp_input_Many" : function (state,action) {
          return calculateTodoApp_input_Many(state,action.ids).state;
      },
  "calculateTodoApp_todosLeft" : function (state,action) {
          return calculateTodoApp_todosLeft(state,action.id).state;
      },
  "calculateTodoApp_todosLeft_Many" : function (state,action) {
          return calculateTodoApp_todosLeft_Many(state,action.ids).state;
      },
  "calculateTodoApp_finishedTodos" : function (state,action) {
          return calculateTodoApp_finishedTodos(state,action.id).state;
      },
  "calculateTodoApp_finishedTodos_Many" : function (state,action) {
          return calculateTodoApp_finishedTodos_Many(state,action.ids).state;
      },
  "calculateTodoApp_visibleTodos" : function (state,action) {
          return calculateTodoApp_visibleTodos(state,action.id).state;
      },
  "calculateTodoApp_visibleTodos_Many" : function (state,action) {
          return calculateTodoApp_visibleTodos_Many(state,action.ids).state;
      }
};
module.exports.actions = actions;
var actionCreators = {
  "init" : function () {
          return {
            type : "init"
          };
      },
  "setTodo_finished" : function (id,value) {
          return {
            type : "setTodo_finished",
            id : id,
            value : value
          };
      },
  "setTodo_task" : function (id,value) {
          return {
            type : "setTodo_task",
            id : id,
            value : value
          };
      },
  "setTodo_app" : function (id,value) {
          return {
            type : "setTodo_app",
            id : id,
            value : value
          };
      },
  "setTodo_editing_inverse" : function (id,value) {
          return {
            type : "setTodo_editing_inverse",
            id : id,
            value : value
          };
      },
  "addTodo_inverseFinishedTodos" : function (id,value) {
          return {
            type : "addTodo_inverseFinishedTodos",
            id : id,
            value : value
          };
      },
  "addTodo_inverseVisibleTodos" : function (id,value) {
          return {
            type : "addTodo_inverseVisibleTodos",
            id : id,
            value : value
          };
      },
  "setTodoApp_filter" : function (id,value) {
          return {
            type : "setTodoApp_filter",
            id : id,
            value : value
          };
      },
  "setTodoApp_input" : function (id,value) {
          return {
            type : "setTodoApp_input",
            id : id,
            value : value
          };
      },
  "setTodoApp_editing" : function (id,value) {
          return {
            type : "setTodoApp_editing",
            id : id,
            value : value
          };
      },
  "addTodoApp_finishedTodos" : function (id,value) {
          return {
            type : "addTodoApp_finishedTodos",
            id : id,
            value : value
          };
      },
  "setTodoApp_todos" : function (id,value) {
          return {
            type : "setTodoApp_todos",
            id : id,
            value : value
          };
      },
  "addTodoApp_todos" : function (id,value) {
          return {
            type : "addTodoApp_todos",
            id : id,
            value : value
          };
      },
  "addTodoApp_visibleTodos" : function (id,value) {
          return {
            type : "addTodoApp_visibleTodos",
            id : id,
            value : value
          };
      },
  "calculateTodoApp_allFinished" : function (id) {
          return {
            type : "calculateTodoApp_allFinished",
            id : id
          };
      },
  "calculateTodoApp_allFinished_Many" : function (ids) {
          return {
            type : "calculateTodoApp_allFinished_Many",
            id : ids
          };
      },
  "calculateTodoApp_filter" : function (id) {
          return {
            type : "calculateTodoApp_filter",
            id : id
          };
      },
  "calculateTodoApp_filter_Many" : function (ids) {
          return {
            type : "calculateTodoApp_filter_Many",
            id : ids
          };
      },
  "calculateTodoApp_input" : function (id) {
          return {
            type : "calculateTodoApp_input",
            id : id
          };
      },
  "calculateTodoApp_input_Many" : function (ids) {
          return {
            type : "calculateTodoApp_input_Many",
            id : ids
          };
      },
  "calculateTodoApp_todosLeft" : function (id) {
          return {
            type : "calculateTodoApp_todosLeft",
            id : id
          };
      },
  "calculateTodoApp_todosLeft_Many" : function (ids) {
          return {
            type : "calculateTodoApp_todosLeft_Many",
            id : ids
          };
      },
  "calculateTodoApp_finishedTodos" : function (id) {
          return {
            type : "calculateTodoApp_finishedTodos",
            id : id
          };
      },
  "calculateTodoApp_finishedTodos_Many" : function (ids) {
          return {
            type : "calculateTodoApp_finishedTodos_Many",
            id : ids
          };
      },
  "calculateTodoApp_visibleTodos" : function (id) {
          return {
            type : "calculateTodoApp_visibleTodos",
            id : id
          };
      },
  "calculateTodoApp_visibleTodos_Many" : function (ids) {
          return {
            type : "calculateTodoApp_visibleTodos_Many",
            id : ids
          };
      },
  "createTodo" : function (entity) {
          return {
            type : "createTodo",
            entity : entity
          };
      },
  "createTodoApp" : function (entity) {
          return {
            type : "createTodoApp",
            entity : entity
          };
      }
};
module.exports.actionCreators = actionCreators;
var reducer = pixiedustRuntime.makeReducer(actions);
module.exports.reducer = reducer;
var Component =  ( function () {
        var oldScope = scope;
        return {
          TodoApp : Lifted(function TodoApp(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _4 = React.createElement("h1",{
                  },"todos");
                  var _7 ;
                  if(scope.app != null) {
                    var calc = calculateTodoApp_input(state,scope.app);
                    state = calc.state;
                    _7 = calc.result;
                  } else {
                    _7 = null;
                  }
                  var _10 ;
                  var _8 ;
                  if(scope.app != null) {
                    var calc = calculateTodoApp_input(state,scope.app);
                    state = calc.state;
                    _8 = calc.result;
                  } else {
                    _8 = null;
                  }
                  var _9 = _8 !== null ? _8 !== "" : null;
                  if(_9) {
                    _10 = scope.createTodo;
                  } else {
                    _10 = null;
                  }
                  var _6 = React.createElement(imports["pixiedust/components/native/inputs"].StringInput,{
                    value$identity :  ( function () {
                            return scope.app;
                        } ) (),
                    value$setter : actionCreators["setTodoApp_input"],
                    value : _7,
                    onSubmit : _10,
                    className : "new-todo",
                    autoFocus : false,
                    placeholder : "What needs to be done?"
                  });
                  var _2 = React.createElement("header",{
                    className : "header"
                  },_4,_6);
                  var _24 ;
                  var _11 = getTodoApp_todos(state,scope.app);
                  var _12 = expression.count(_11);
                  var _13 = _12 !== null ? _12 > 0 : null;
                  if(_13) {
                    var _17 ;
                    if(scope.app != null) {
                      var calc = calculateTodoApp_allFinished(state,scope.app);
                      state = calc.state;
                      _17 = calc.result;
                    } else {
                      _17 = null;
                    }
                    var _16 = React.createElement(Component.BooleanInput,{
                      checked : _17,
                      className : "toggle-all",
                      onChange : scope.toggleAll
                    });
                    var _20 ;
                    if(scope.app != null) {
                      var calc = calculateTodoApp_visibleTodos(state,scope.app);
                      state = calc.state;
                      _20 = calc.result;
                    } else {
                      _20 = constants.EMPTY_ARRAY;
                    }
                    var oldScope = scope;
                    var _22 = [];
                    for (var _23 = 0 ; _23 < _20.length ; _23++) {
                       ( function () {
                              var scope = _.assign({
                              },oldScope,{
                                todo : _20[_23]
                              });
                              var _21 = React.createElement(Component.TodoItem,{
                                todo : scope.todo
                              });
                              _22.push(_.assign({
                              },_21,{
                                key : scope.todo
                              }));
                          } ) ();
                    }
                    var _18 = React.createElement("ul",{
                      className : "todo-list"
                    },_22);
                    var _14 = React.createElement("section",{
                      className : "main"
                    },_16,_18);
                    _24 = _14;
                  } else {
                    _24 = null;
                  }
                  var _25 = React.createElement(Component.TodoFooter,{
                    app : scope.app
                  });
                  var _0 = React.createElement("section",{
                    className : "todoapp"
                  },_2,_24,_25);
                  return {
                    result : _0,
                    state : state
                  };
              },["toggleAll","createTodo"]),
          TodoItem : Lifted(function TodoItem(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = getTodo_app(state,scope.todo);
                  var _1 = getTodoApp_editing(state,_0);
                  var _2 = _1 !== null && scope.todo !== null ? _1 === scope.todo : null;
                  var _6 ;
                  var _5 = getTodo_finished(state,scope.todo);
                  if(_5) {
                    _6 = "completed";
                  } else {
                    _6 = "";
                  }
                  var _12 ;
                  var _10 ;
                  var _7 = getTodo_app(state,scope.todo);
                  var _8 = getTodoApp_editing(state,_7);
                  var _9 = _8 !== null && scope.todo !== null ? _8 === scope.todo : null;
                  if(_9 !== null) {
                    _10 = _9;
                  } else {
                    _10 = false;
                  }
                  if(_10) {
                    _12 = " editing";
                  } else {
                    _12 = "";
                  }
                  var _13 =  ( _6 == null ? constants.EMPTY_ARRAY : [_6] ) .concat(_12 == null ? constants.EMPTY_ARRAY : [_12]);
                  var _17 = getTodo_finished(state,scope.todo);
                  var _16 = React.createElement(Component.BooleanInput,{
                    checked : _17,
                    className : "toggle",
                    onChange : scope.toggleFinished
                  });
                  var _20 = getTodo_task(state,scope.todo);
                  var _18 = React.createElement("label",{
                    onDoubleClick : scope["editTodo"]()
                  },_20);
                  var _21 = React.createElement("button",{
                    className : "destroy",
                    onClick : scope["removeTodo"]()
                  });
                  var _14 = React.createElement("div",{
                    className : "view"
                  },_16,_18,_21);
                  var _24 = getTodo_task(state,scope.todo);
                  var _25 = getTodo_app(state,scope.todo);
                  var _26 = getTodoApp_editing(state,_25);
                  var _27 = _26 !== null && scope.todo !== null ? _26 === scope.todo : null;
                  var _23 = React.createElement(imports["pixiedust/components/native/inputs"].AutoFocusStringInput,{
                    value$identity :  ( function () {
                            return scope.todo;
                        } ) (),
                    value$setter : actionCreators["setTodo_task"],
                    value : _24,
                    className : "edit",
                    visible : _27,
                    onSubmit : scope.finishEditing
                  });
                  var _3 = React.createElement("li",{
                    className : _13
                  },_14,_23);
                  return {
                    result : React.createElement('group',{
                    },_2,_3),
                    state : state
                  };
              },["toggleFinished","removeTodo","editTodo","finishEditing"]),
          TodoFilters : Lifted(function TodoFilters(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement(Component.FilterType,{
                    name : "All",
                    app : scope.app
                  });
                  var _3 = React.createElement(Component.FilterType,{
                    name : "Completed",
                    app : scope.app
                  });
                  var _4 = React.createElement(Component.FilterType,{
                    name : "Not Completed",
                    app : scope.app
                  });
                  var _0 = React.createElement("ul",{
                    className : "filters"
                  },_2,_3,_4);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Part : Lifted(function Part(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(Component.TodoApp,{
                    app : scope.app
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          TodoFooter : Lifted(function TodoFooter(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement(Component.TodoFilters,{
                    app : scope.app
                  });
                  var _0 = React.createElement("footer",{
                    className : "footer"
                  },_2);
                  return {
                    result : _0,
                    state : state
                  };
              },["clearCompleted"]),
          FilterType : Lifted(function FilterType(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _6 ;
                  var _4 ;
                  if(scope.app != null) {
                    var calc = calculateTodoApp_filter(state,scope.app);
                    state = calc.state;
                    _4 = calc.result;
                  } else {
                    _4 = null;
                  }
                  var _5 = _4 !== null && scope.name !== null ? _4 === scope.name : null;
                  if(_5) {
                    _6 = "selected";
                  } else {
                    _6 = "";
                  }
                  var _2 = React.createElement("a",{
                    className : _6,
                    onClick : scope["setFilter"]()
                  },scope.name);
                  var _0 = React.createElement("li",{
                  },_2);
                  return {
                    result : _0,
                    state : state
                  };
              },["setFilter"]),
          BooleanInput : Lifted(function BooleanInput(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("input",{
                    type : "checkbox",
                    className : scope.className,
                    checked : scope.checked,
                    onChange : scope["onChange"]()
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[])
        };
    } ) ();
module.exports.Component = Component;
function TodoApp_toggleAll(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.app
          },function (scope) {
                  var _1 = getTodoApp_todos(state,scope["$this"]);
                  for (var _2 = 0 ; _2 < _1.length ; _2++) {
                    scoped(scope,{
                      $this : _1[_2]
                    },function (scope) {
                            var _4 ;
                            if(scope.app != null) {
                              var calc = calculateTodoApp_allFinished(state,scope.app);
                              state = calc.state;
                              _4 = calc.result;
                            } else {
                              _4 = null;
                            }
                            var _5 = !_4;
                            newState = setTodo_finished(newState,scope["$this"],_5);
                        });
                  }
              });
      });
  return newState;
}

actions["TodoApp_toggleAll"] = TodoApp_toggleAll;
function TodoApp_createTodo(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
    task : action.args[0]
  }),function (scope) {
          var _2 = {
            id : pixiedustRuntime.generateUniqueId()
          };
          newState = newState.update("Todo",function (table) {
                  return table.set(_2.id,_2);
              });
          scoped(scope,{
            $this : _2.id
          },function (scope) {
                  newState = setTodo_task(newState,scope["$this"],scope.task);
                  newState = setTodo_finished(newState,scope["$this"],false);
                  newState = setTodo_app(newState,scope["$this"],scope.app);
              });
          scoped(scope,{
            t : _2.id
          },function (scope) {
                  scoped(scope,{
                    $this : scope.app
                  },function (scope) {
                          newState = setTodoApp_input(newState,scope["$this"],"");
                      });
              });
      });
  return newState;
}

actions["TodoApp_createTodo"] = TodoApp_createTodo;
function TodoItem_toggleFinished(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.todo
          },function (scope) {
                  var _1 = getTodo_finished(state,scope["$this"]);
                  var _2 = !_1;
                  newState = setTodo_finished(newState,scope["$this"],_2);
              });
      });
  return newState;
}

actions["TodoItem_toggleFinished"] = TodoItem_toggleFinished;
function TodoItem_removeTodo(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.todo
          },function (scope) {
                  var _1 = getTodo_app(state,scope["$this"]);
                  scoped(scope,{
                    $this : _1
                  },function (scope) {
                          var _3 = getTodoApp_todos(state,scope["$this"]);
                          var _4 = scope.todo == null ? _3 : _.without(_3,scope.todo);
                          newState = setTodoApp_todos(newState,scope["$this"],_4);
                      });
              });
      });
  return newState;
}

actions["TodoItem_removeTodo"] = TodoItem_removeTodo;
function TodoItem_editTodo(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 = getTodo_app(state,scope.todo);
          scoped(scope,{
            $this : _0
          },function (scope) {
                  newState = setTodoApp_editing(newState,scope["$this"],scope.todo);
              });
      });
  return newState;
}

actions["TodoItem_editTodo"] = TodoItem_editTodo;
function TodoItem_finishEditing(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 = getTodo_app(state,scope.todo);
          scoped(scope,{
            $this : _0
          },function (scope) {
                  newState = setTodoApp_editing(newState,scope["$this"],null);
              });
      });
  return newState;
}

actions["TodoItem_finishEditing"] = TodoItem_finishEditing;
function TodoFooter_clearCompleted(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.app
          },function (scope) {
                  var _1 = getTodoApp_todos(state,scope["$this"]);
                  var _2 ;
                  if(scope["$this"] != null) {
                    var calc = calculateTodoApp_finishedTodos(state,scope["$this"]);
                    state = calc.state;
                    _2 = calc.result;
                  } else {
                    _2 = constants.EMPTY_ARRAY;
                  }
                  var _3 = _.difference(_1,_2);
                  newState = setTodoApp_todos(newState,scope["$this"],_3);
              });
      });
  return newState;
}

actions["TodoFooter_clearCompleted"] = TodoFooter_clearCompleted;
function FilterType_setFilter(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.app
          },function (scope) {
                  newState = setTodoApp_filter(newState,scope["$this"],scope.name);
              });
      });
  return newState;
}

actions["FilterType_setFilter"] = FilterType_setFilter;