var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "./components/CodeBlock" : require("./components/CodeBlock"),
  "./examples/main" : require("./examples/main"),
  "./components/inputs" : require("./components/inputs")
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
  "Slide" : immutable.Map(),
  "SlideShow" : immutable.Map(),
  "Slide_slideNumber" : immutable.Map(),
  "Slide_slidesLeft" : immutable.Map(),
  "Slide_allNext" : immutable.Map(),
  "Slide_allPrevious" : immutable.Map(),
  "Slide_inverseAllNext" : immutable.Map(),
  "Slide_inverseAllPrevious" : immutable.Map(),
  "Slide_inverseCurrent" : immutable.Map(),
  "Slide_next" : immutable.Map(),
  "Slide_previous" : immutable.Map(),
  "Slide_slideshow" : immutable.Map(),
  "SlideShow_totalSlides" : immutable.Map(),
  "SlideShow_current" : immutable.Map(),
  "SlideShow_slides" : immutable.Map()
});
module.exports.emptyState = emptyState;
function getSlide_content(state,id) {
  var _0 = state.get("Slide").get(id);
  if(_0 !== undefined) {
    _0 = _0.content;
    if(_0 === undefined) {
      _0 = null;
    }
  }
  return _0;
}

module.exports.getSlide_content = getSlide_content;
function getSlide_content_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Slide");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.content;
      if(_4 !== undefined && _4 !== null) {
        if(_4 !== undefined) {
          _0.push(_4);
        }
      }
    }
  }
  return _0;
}

module.exports.getSlide_content_Many = getSlide_content_Many;
function getSlide_slideNumber(state,id) {
  return state.get("Slide_slideNumber").get(id);
}

module.exports.getSlide_slideNumber = getSlide_slideNumber;
function getSlide_slideNumber_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_slideNumber");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getSlide_slideNumber_Many = getSlide_slideNumber_Many;
function getSlide_slidesLeft(state,id) {
  return state.get("Slide_slidesLeft").get(id);
}

module.exports.getSlide_slidesLeft = getSlide_slidesLeft;
function getSlide_slidesLeft_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_slidesLeft");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getSlide_slidesLeft_Many = getSlide_slidesLeft_Many;
function getSlide_title(state,id) {
  var _0 = state.get("Slide").get(id);
  if(_0 !== undefined) {
    _0 = _0.title;
    if(_0 === undefined) {
      _0 = null;
    }
  }
  return _0;
}

module.exports.getSlide_title = getSlide_title;
function getSlide_title_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Slide");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.title;
      if(_4 !== undefined && _4 !== null) {
        if(_4 !== undefined) {
          _0.push(_4);
        }
      }
    }
  }
  return _0;
}

module.exports.getSlide_title_Many = getSlide_title_Many;
function getSlide_allNext(state,id) {
  return state.get("Slide_allNext").get(id);
}

module.exports.getSlide_allNext = getSlide_allNext;
function getSlide_allNext_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_allNext");
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

module.exports.getSlide_allNext_Many = getSlide_allNext_Many;
function getSlide_allPrevious(state,id) {
  return state.get("Slide_allPrevious").get(id);
}

module.exports.getSlide_allPrevious = getSlide_allPrevious;
function getSlide_allPrevious_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_allPrevious");
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

module.exports.getSlide_allPrevious_Many = getSlide_allPrevious_Many;
function getSlide_inverseAllNext(state,id) {
  return state.get("Slide_inverseAllNext").get(id);
}

module.exports.getSlide_inverseAllNext = getSlide_inverseAllNext;
function getSlide_inverseAllNext_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_inverseAllNext");
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

module.exports.getSlide_inverseAllNext_Many = getSlide_inverseAllNext_Many;
function getSlide_inverseAllPrevious(state,id) {
  return state.get("Slide_inverseAllPrevious").get(id);
}

module.exports.getSlide_inverseAllPrevious = getSlide_inverseAllPrevious;
function getSlide_inverseAllPrevious_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_inverseAllPrevious");
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

module.exports.getSlide_inverseAllPrevious_Many = getSlide_inverseAllPrevious_Many;
function getSlide_inverseCurrent(state,id) {
  var _0 = state.get("Slide_inverseCurrent").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getSlide_inverseCurrent = getSlide_inverseCurrent;
function getSlide_inverseCurrent_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_inverseCurrent");
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

module.exports.getSlide_inverseCurrent_Many = getSlide_inverseCurrent_Many;
function getSlide_next(state,id) {
  var _0 = state.get("Slide_next").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getSlide_next = getSlide_next;
function getSlide_next_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_next");
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

module.exports.getSlide_next_Many = getSlide_next_Many;
function getSlide_previous(state,id) {
  var _0 = state.get("Slide_previous").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getSlide_previous = getSlide_previous;
function getSlide_previous_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_previous");
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

module.exports.getSlide_previous_Many = getSlide_previous_Many;
function getSlide_slideshow(state,id) {
  var _0 = state.get("Slide_slideshow").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getSlide_slideshow = getSlide_slideshow;
function getSlide_slideshow_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_slideshow");
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

module.exports.getSlide_slideshow_Many = getSlide_slideshow_Many;
function getSlideShow_totalSlides(state,id) {
  return state.get("SlideShow_totalSlides").get(id);
}

module.exports.getSlideShow_totalSlides = getSlideShow_totalSlides;
function getSlideShow_totalSlides_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("SlideShow_totalSlides");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getSlideShow_totalSlides_Many = getSlideShow_totalSlides_Many;
function getSlideShow_current(state,id) {
  var _0 = state.get("SlideShow_current").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getSlideShow_current = getSlideShow_current;
function getSlideShow_current_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("SlideShow_current");
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

module.exports.getSlideShow_current_Many = getSlideShow_current_Many;
function getSlideShow_slides(state,id) {
  var _0 = state.get("SlideShow_slides").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getSlideShow_slides = getSlideShow_slides;
function getSlideShow_slides_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("SlideShow_slides");
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

module.exports.getSlideShow_slides_Many = getSlideShow_slides_Many;
function setSlide_content(state,id,value) {
  state = invalidateSlide_content(state,id);
  var prop = {
    content : value
  };
  state = state.update("Slide",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setSlide_content = setSlide_content;
function setSlide_title(state,id,value) {
  state = invalidateSlide_title(state,id);
  var prop = {
    title : value
  };
  state = state.update("Slide",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setSlide_title = setSlide_title;
function setSlide_inverseCurrent(state,id,value) {
  state = invalidateSlide_inverseCurrent(state,id);
  var previousValue = getSlide_inverseCurrent(state,id);
  var table = state.get("Slide_inverseCurrent").set(id,value);
  state = state.set("Slide_inverseCurrent",table);
  var inverseTable = state.get("SlideShow_current");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateSlideShow_current(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateSlideShow_current(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("SlideShow_current",inverseTable);
  return state;
}

module.exports.setSlide_inverseCurrent = setSlide_inverseCurrent;
function setSlide_next(state,id,value) {
  state = invalidateSlide_next(state,id);
  var previousValue = getSlide_next(state,id);
  var table = state.get("Slide_next").set(id,value);
  state = state.set("Slide_next",table);
  var inverseTable = state.get("Slide_previous");
  if(value != null) {
    var addedId = value;
    state = invalidateSlide_previous(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateSlide_previous(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Slide_previous",inverseTable);
  return state;
}

module.exports.setSlide_next = setSlide_next;
function setSlide_previous(state,id,value) {
  state = invalidateSlide_previous(state,id);
  var previousValue = getSlide_previous(state,id);
  var table = state.get("Slide_previous").set(id,value);
  state = state.set("Slide_previous",table);
  var inverseTable = state.get("Slide_next");
  if(value != null) {
    var addedId = value;
    state = invalidateSlide_next(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateSlide_next(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Slide_next",inverseTable);
  return state;
}

module.exports.setSlide_previous = setSlide_previous;
function setSlide_slideshow(state,id,value) {
  state = invalidateSlide_slideshow(state,id);
  var previousValue = getSlide_slideshow(state,id);
  var table = state.get("Slide_slideshow").set(id,value);
  state = state.set("Slide_slideshow",table);
  var inverseTable = state.get("SlideShow_slides");
  if(value != null) {
    var addedId = value;
    state = invalidateSlideShow_slides(state,addedId);
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
    state = invalidateSlideShow_slides(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("SlideShow_slides",inverseTable);
  return state;
}

module.exports.setSlide_slideshow = setSlide_slideshow;
function setSlideShow_current(state,id,value) {
  state = invalidateSlideShow_current(state,id);
  var previousValue = getSlideShow_current(state,id);
  var table = state.get("SlideShow_current").set(id,value);
  state = state.set("SlideShow_current",table);
  var inverseTable = state.get("Slide_inverseCurrent");
  if(value != null) {
    var addedId = value;
    state = invalidateSlide_inverseCurrent(state,addedId);
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
    state = invalidateSlide_inverseCurrent(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("Slide_inverseCurrent",inverseTable);
  return state;
}

module.exports.setSlideShow_current = setSlideShow_current;
function setSlideShow_slides(state,id,value) {
  state = invalidateSlideShow_slides(state,id);
  var previousValue = getSlideShow_slides(state,id);
  var table = state.get("SlideShow_slides").set(id,value);
  state = state.set("SlideShow_slides",table);
  var inverseTable = state.get("Slide_slideshow");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateSlide_slideshow(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateSlide_slideshow(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Slide_slideshow",inverseTable);
  return state;
}

module.exports.setSlideShow_slides = setSlideShow_slides;
function addSlide_inverseCurrent(state,id,value) {
  var previousValue = getSlide_inverseCurrent(state,id);
  var nextValue = previousValue.concat(value);
  return setSlide_inverseCurrent(state,id,nextValue);
}

module.exports.addSlide_inverseCurrent = addSlide_inverseCurrent;
function addSlideShow_slides(state,id,value) {
  var previousValue = getSlideShow_slides(state,id);
  var nextValue = previousValue.concat(value);
  return setSlideShow_slides(state,id,nextValue);
}

module.exports.addSlideShow_slides = addSlideShow_slides;
function invalidateSlide_content(state,id) {
  return state;
}

module.exports.invalidateSlide_content = invalidateSlide_content;
function invalidateSlide_slideNumber(state,id) {
  state = state.update("Slide_slideNumber",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_next(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateSlide_slideNumber(state,_0);
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_inverseCurrent(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateSlideShow_totalSlides(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateSlide_slideNumber = invalidateSlide_slideNumber;
function invalidateSlide_slidesLeft(state,id) {
  state = state.update("Slide_slidesLeft",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_previous(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateSlide_slidesLeft(state,_0);
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_inverseCurrent(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateSlideShow_totalSlides(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateSlide_slidesLeft = invalidateSlide_slidesLeft;
function invalidateSlide_title(state,id) {
  return state;
}

module.exports.invalidateSlide_title = invalidateSlide_title;
function invalidateSlide_allNext(state,id) {
  state = state.update("Slide_allNext",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_previous(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateSlide_allNext(state,_0);
          }
      });
  return state;
}

module.exports.invalidateSlide_allNext = invalidateSlide_allNext;
function invalidateSlide_allPrevious(state,id) {
  state = state.update("Slide_allPrevious",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_next(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateSlide_allPrevious(state,_0);
          }
      });
  return state;
}

module.exports.invalidateSlide_allPrevious = invalidateSlide_allPrevious;
function invalidateSlide_inverseAllNext(state,id) {
  state = state.update("Slide_inverseAllNext",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_inverseAllNext = invalidateSlide_inverseAllNext;
function invalidateSlide_inverseAllPrevious(state,id) {
  state = state.update("Slide_inverseAllPrevious",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_inverseAllPrevious = invalidateSlide_inverseAllPrevious;
function invalidateSlide_inverseCurrent(state,id) {
  return state;
}

module.exports.invalidateSlide_inverseCurrent = invalidateSlide_inverseCurrent;
function invalidateSlide_next(state,id) {
  if(id != null) {
    state = invalidateSlide_allNext(state,id);
  }
  if(id != null) {
    state = invalidateSlide_slidesLeft(state,id);
  }
  return state;
}

module.exports.invalidateSlide_next = invalidateSlide_next;
function invalidateSlide_previous(state,id) {
  if(id != null) {
    state = invalidateSlide_allPrevious(state,id);
  }
  if(id != null) {
    state = invalidateSlide_slideNumber(state,id);
  }
  return state;
}

module.exports.invalidateSlide_previous = invalidateSlide_previous;
function invalidateSlide_slideshow(state,id) {
  return state;
}

module.exports.invalidateSlide_slideshow = invalidateSlide_slideshow;
function invalidateSlideShow_totalSlides(state,id) {
  state = state.update("SlideShow_totalSlides",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlideShow_totalSlides = invalidateSlideShow_totalSlides;
function invalidateSlideShow_current(state,id) {
  if(id != null) {
    state = invalidateSlideShow_totalSlides(state,id);
  }
  return state;
}

module.exports.invalidateSlideShow_current = invalidateSlideShow_current;
function invalidateSlideShow_slides(state,id) {
  return state;
}

module.exports.invalidateSlideShow_slides = invalidateSlideShow_slides;
function calculateSlide_slideNumber(state,id) {
  var result = getSlide_slideNumber(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _4 ;
            var _1 = getSlide_previous(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlide_slideNumber(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = null;
            }
            var _3 = _2 !== null ? _2 + 1 : null;
            if(_3 !== null) {
              _4 = _3;
            } else {
              _4 = 1;
            }
            result = _4;
            state = state.update("Slide_slideNumber",function (table) {
                    return table.set(id,_4);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_slideNumber = calculateSlide_slideNumber;
function calculateSlide_slideNumber_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_slideNumber(state,id);
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

module.exports.calculateSlide_slideNumber_Many = calculateSlide_slideNumber_Many;
function calculateSlide_slidesLeft(state,id) {
  var result = getSlide_slidesLeft(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _4 ;
            var _1 = getSlide_next(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlide_slidesLeft(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = null;
            }
            var _3 = _2 !== null ? 1 + _2 : null;
            if(_3 !== null) {
              _4 = _3;
            } else {
              _4 = 0;
            }
            result = _4;
            state = state.update("Slide_slidesLeft",function (table) {
                    return table.set(id,_4);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_slidesLeft = calculateSlide_slidesLeft;
function calculateSlide_slidesLeft_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_slidesLeft(state,id);
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

module.exports.calculateSlide_slidesLeft_Many = calculateSlide_slidesLeft_Many;
function calculateSlide_allNext(state,id) {
  var result = getSlide_allNext(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _4 ;
            var _1 = getSlide_next(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlide_allNext(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = constants.EMPTY_ARRAY;
            }
            var _3 =  ( scope["$this"] == null ? constants.EMPTY_ARRAY : [scope["$this"]] ) .concat(_2);
            if(_3 !== constants.EMPTY_ARRAY) {
              _4 = _3;
            } else {
              _4 = scope["$this"];
            }
            result = _4;
            var previousValue = getSlide_allNext(state,id);
            var table = state.get("Slide_allNext").set(id,_4);
            state = state.set("Slide_allNext",table);
            var inverseTable = state.get("Slide_inverseAllNext");
            var added = _.difference(_4,previousValue);
            var removed = _.difference(previousValue,_4);
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
            state = state.set("Slide_inverseAllNext",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_allNext = calculateSlide_allNext;
function calculateSlide_allNext_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_allNext(state,id);
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

module.exports.calculateSlide_allNext_Many = calculateSlide_allNext_Many;
function calculateSlide_allPrevious(state,id) {
  var result = getSlide_allPrevious(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _4 ;
            var _1 = getSlide_previous(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlide_allPrevious(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = constants.EMPTY_ARRAY;
            }
            var _3 = _2.concat(scope["$this"] == null ? constants.EMPTY_ARRAY : [scope["$this"]]);
            if(_3 !== constants.EMPTY_ARRAY) {
              _4 = _3;
            } else {
              _4 = scope["$this"];
            }
            result = _4;
            var previousValue = getSlide_allPrevious(state,id);
            var table = state.get("Slide_allPrevious").set(id,_4);
            state = state.set("Slide_allPrevious",table);
            var inverseTable = state.get("Slide_inverseAllPrevious");
            var added = _.difference(_4,previousValue);
            var removed = _.difference(previousValue,_4);
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
            state = state.set("Slide_inverseAllPrevious",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_allPrevious = calculateSlide_allPrevious;
function calculateSlide_allPrevious_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_allPrevious(state,id);
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

module.exports.calculateSlide_allPrevious_Many = calculateSlide_allPrevious_Many;
function calculateSlideShow_totalSlides(state,id) {
  var result = getSlideShow_totalSlides(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _6 ;
            var _1 = getSlideShow_current(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlide_slideNumber(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = null;
            }
            var _3 = getSlideShow_current(state,scope["$this"]);
            var _4 ;
            if(_3 != null) {
              var calc = calculateSlide_slidesLeft(state,_3);
              state = calc.state;
              _4 = calc.result;
            } else {
              _4 = null;
            }
            var _5 = _2 !== null && _4 !== null ? _2 + _4 : null;
            if(_5 !== null) {
              _6 = _5;
            } else {
              _6 = 0;
            }
            result = _6;
            state = state.update("SlideShow_totalSlides",function (table) {
                    return table.set(id,_6);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlideShow_totalSlides = calculateSlideShow_totalSlides;
function calculateSlideShow_totalSlides_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlideShow_totalSlides(state,id);
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

module.exports.calculateSlideShow_totalSlides_Many = calculateSlideShow_totalSlides_Many;
function init(state) {
  var slideshow = {
    id : "slideshow"
  };
  state = state.update("SlideShow",function (table) {
          return table.set(slideshow.id,slideshow);
      });
  return {
    state : state,
    ids : {
      slideshow : slideshow.id
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
                    var _0 = React.createElement(Component.Main,{
                      slideshow : scope.slideshow
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
                    expression : "@Main(slideshow) {\n}",
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
  "setSlide_content" : function (state,action) {
          return setSlide_content(state,action.id,action.value);
      },
  "setSlide_title" : function (state,action) {
          return setSlide_title(state,action.id,action.value);
      },
  "addSlide_allNext" : function (state,action) {
          return addSlide_allNext(state,action.id,action.value);
      },
  "addSlide_allPrevious" : function (state,action) {
          return addSlide_allPrevious(state,action.id,action.value);
      },
  "addSlide_inverseAllNext" : function (state,action) {
          return addSlide_inverseAllNext(state,action.id,action.value);
      },
  "addSlide_inverseAllPrevious" : function (state,action) {
          return addSlide_inverseAllPrevious(state,action.id,action.value);
      },
  "setSlide_inverseCurrent" : function (state,action) {
          return setSlide_inverseCurrent(state,action.id,action.value);
      },
  "addSlide_inverseCurrent" : function (state,action) {
          return addSlide_inverseCurrent(state,action.id,action.value);
      },
  "setSlide_next" : function (state,action) {
          return setSlide_next(state,action.id,action.value);
      },
  "setSlide_previous" : function (state,action) {
          return setSlide_previous(state,action.id,action.value);
      },
  "setSlide_slideshow" : function (state,action) {
          return setSlide_slideshow(state,action.id,action.value);
      },
  "setSlideShow_current" : function (state,action) {
          return setSlideShow_current(state,action.id,action.value);
      },
  "setSlideShow_slides" : function (state,action) {
          return setSlideShow_slides(state,action.id,action.value);
      },
  "addSlideShow_slides" : function (state,action) {
          return addSlideShow_slides(state,action.id,action.value);
      },
  "calculateSlide_slideNumber" : function (state,action) {
          return calculateSlide_slideNumber(state,action.id).state;
      },
  "calculateSlide_slideNumber_Many" : function (state,action) {
          return calculateSlide_slideNumber_Many(state,action.ids).state;
      },
  "calculateSlide_slidesLeft" : function (state,action) {
          return calculateSlide_slidesLeft(state,action.id).state;
      },
  "calculateSlide_slidesLeft_Many" : function (state,action) {
          return calculateSlide_slidesLeft_Many(state,action.ids).state;
      },
  "calculateSlide_allNext" : function (state,action) {
          return calculateSlide_allNext(state,action.id).state;
      },
  "calculateSlide_allNext_Many" : function (state,action) {
          return calculateSlide_allNext_Many(state,action.ids).state;
      },
  "calculateSlide_allPrevious" : function (state,action) {
          return calculateSlide_allPrevious(state,action.id).state;
      },
  "calculateSlide_allPrevious_Many" : function (state,action) {
          return calculateSlide_allPrevious_Many(state,action.ids).state;
      },
  "calculateSlideShow_totalSlides" : function (state,action) {
          return calculateSlideShow_totalSlides(state,action.id).state;
      },
  "calculateSlideShow_totalSlides_Many" : function (state,action) {
          return calculateSlideShow_totalSlides_Many(state,action.ids).state;
      }
};
module.exports.actions = actions;
var actionCreators = {
  "init" : function () {
          return {
            type : "init"
          };
      },
  "setSlide_content" : function (id,value) {
          return {
            type : "setSlide_content",
            id : id,
            value : value
          };
      },
  "setSlide_title" : function (id,value) {
          return {
            type : "setSlide_title",
            id : id,
            value : value
          };
      },
  "addSlide_allNext" : function (id,value) {
          return {
            type : "addSlide_allNext",
            id : id,
            value : value
          };
      },
  "addSlide_allPrevious" : function (id,value) {
          return {
            type : "addSlide_allPrevious",
            id : id,
            value : value
          };
      },
  "addSlide_inverseAllNext" : function (id,value) {
          return {
            type : "addSlide_inverseAllNext",
            id : id,
            value : value
          };
      },
  "addSlide_inverseAllPrevious" : function (id,value) {
          return {
            type : "addSlide_inverseAllPrevious",
            id : id,
            value : value
          };
      },
  "setSlide_inverseCurrent" : function (id,value) {
          return {
            type : "setSlide_inverseCurrent",
            id : id,
            value : value
          };
      },
  "addSlide_inverseCurrent" : function (id,value) {
          return {
            type : "addSlide_inverseCurrent",
            id : id,
            value : value
          };
      },
  "setSlide_next" : function (id,value) {
          return {
            type : "setSlide_next",
            id : id,
            value : value
          };
      },
  "setSlide_previous" : function (id,value) {
          return {
            type : "setSlide_previous",
            id : id,
            value : value
          };
      },
  "setSlide_slideshow" : function (id,value) {
          return {
            type : "setSlide_slideshow",
            id : id,
            value : value
          };
      },
  "setSlideShow_current" : function (id,value) {
          return {
            type : "setSlideShow_current",
            id : id,
            value : value
          };
      },
  "setSlideShow_slides" : function (id,value) {
          return {
            type : "setSlideShow_slides",
            id : id,
            value : value
          };
      },
  "addSlideShow_slides" : function (id,value) {
          return {
            type : "addSlideShow_slides",
            id : id,
            value : value
          };
      },
  "calculateSlide_slideNumber" : function (id) {
          return {
            type : "calculateSlide_slideNumber",
            id : id
          };
      },
  "calculateSlide_slideNumber_Many" : function (ids) {
          return {
            type : "calculateSlide_slideNumber_Many",
            id : ids
          };
      },
  "calculateSlide_slidesLeft" : function (id) {
          return {
            type : "calculateSlide_slidesLeft",
            id : id
          };
      },
  "calculateSlide_slidesLeft_Many" : function (ids) {
          return {
            type : "calculateSlide_slidesLeft_Many",
            id : ids
          };
      },
  "calculateSlide_allNext" : function (id) {
          return {
            type : "calculateSlide_allNext",
            id : id
          };
      },
  "calculateSlide_allNext_Many" : function (ids) {
          return {
            type : "calculateSlide_allNext_Many",
            id : ids
          };
      },
  "calculateSlide_allPrevious" : function (id) {
          return {
            type : "calculateSlide_allPrevious",
            id : id
          };
      },
  "calculateSlide_allPrevious_Many" : function (ids) {
          return {
            type : "calculateSlide_allPrevious_Many",
            id : ids
          };
      },
  "calculateSlideShow_totalSlides" : function (id) {
          return {
            type : "calculateSlideShow_totalSlides",
            id : id
          };
      },
  "calculateSlideShow_totalSlides_Many" : function (ids) {
          return {
            type : "calculateSlideShow_totalSlides_Many",
            id : ids
          };
      },
  "createSlide" : function (entity) {
          return {
            type : "createSlide",
            entity : entity
          };
      },
  "createSlideShow" : function (entity) {
          return {
            type : "createSlideShow",
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
          Image : Lifted(function Image(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("img",{
                    src : scope.src,
                    style : {
                      maxWidth : "100%",
                      height : "auto"
                    }
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Slide : Lifted(function Slide(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement(Component.SlideHeader,{
                    slide : scope.slide
                  });
                  var _5 = getSlide_content(state,scope.slide);
                  var _3 = React.createElement("div",{
                    className : "slide-content"
                  },_5);
                  var _6 = React.createElement(Component.SlideFooter,{
                    slide : scope.slide
                  });
                  var _0 = React.createElement("div",{
                    className : "slide"
                  },_2,_3,_6);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          FixedWidthImage : Lifted(function FixedWidthImage(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _3 =  ( scope.width == null ? constants.EMPTY_ARRAY : [scope.width] ) .concat("px" == null ? constants.EMPTY_ARRAY : ["px"]);
                  var _4 = _3.join('');
                  var _5 = _4 !== null ? "" + _4 : null;
                  var _0 = React.createElement("img",{
                    src : scope.src,
                    style : {
                      width : _5
                    },
                    marginLeft : "auto",
                    marginRight : "auto"
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          SlideFooter : Lifted(function SlideFooter(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _6 ;
                  var _3 = getSlide_previous(state,scope.slide);
                  var _4 = expression.count(_3 == null ? constants.EMPTY_ARRAY : [_3]);
                  var _5 = _4 !== null ? _4 !== 0 : null;
                  if(_5) {
                    _6 = scope.previousSlide;
                  } else {
                    _6 = null;
                  }
                  var _10 ;
                  var _7 = getSlide_next(state,scope.slide);
                  var _8 = expression.count(_7 == null ? constants.EMPTY_ARRAY : [_7]);
                  var _9 = _8 !== null ? _8 !== 0 : null;
                  if(_9) {
                    _10 = scope.nextSlide;
                  } else {
                    _10 = null;
                  }
                  var _2 = React.createElement(imports["./components/inputs"].KeyboardListener,{
                    onArrowLeft : _6,
                    onArrowRight : _10
                  });
                  var _15 ;
                  if(scope.slide != null) {
                    var calc = calculateSlide_slideNumber(state,scope.slide);
                    state = calc.state;
                    _15 = calc.result;
                  } else {
                    _15 = null;
                  }
                  var _16 = getSlide_slideshow(state,scope.slide);
                  var _17 ;
                  if(_16 != null) {
                    var calc = calculateSlideShow_totalSlides(state,_16);
                    state = calc.state;
                    _17 = calc.result;
                  } else {
                    _17 = null;
                  }
                  var _13 = React.createElement("span",{
                  },_15,"/",_17);
                  var _11 = React.createElement("div",{
                    className : "slide-count"
                  },_13);
                  var _22 = getSlide_previous(state,scope.slide);
                  var _23 = expression.count(_22 == null ? constants.EMPTY_ARRAY : [_22]);
                  var _24 = _23 !== null ? _23 === 0 : null;
                  var _25 = getSlide_previous(state,scope.slide);
                  var _20 = React.createElement("button",{
                    className : "pure-button",
                    disabled : _24,
                    onClick : scope["setCurrent"](_25)
                  },"<");
                  var _25 ;
                  if(scope.slide != null) {
                    var calc = calculateSlide_allPrevious(state,scope.slide);
                    state = calc.state;
                    _25 = calc.result;
                  } else {
                    _25 = constants.EMPTY_ARRAY;
                  }
                  var _26 = scope.slide == null ? _25 : _.without(_25,scope.slide);
                  var oldScope = scope;
                  var _30 = [];
                  for (var _31 = 0 ; _31 < _26.length ; _31++) {
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _26[_31]
                            });
                            var _29 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _29 = calc.result;
                            } else {
                              _29 = null;
                            }
                            var _27 = React.createElement("button",{
                              className : "slide-selector-item pure-button",
                              onClick : scope["setCurrent"](scope.s)
                            },_29);
                            _30.push(_.assign({
                            },_27,{
                              key : scope.s
                            }));
                        } ) ();
                  }
                  var _34 ;
                  if(scope.slide != null) {
                    var calc = calculateSlide_slideNumber(state,scope.slide);
                    state = calc.state;
                    _34 = calc.result;
                  } else {
                    _34 = null;
                  }
                  var _32 = React.createElement("span",{
                    className : "slide-selector-item pure-button pure-button-primary"
                  },_34);
                  var _35 ;
                  if(scope.slide != null) {
                    var calc = calculateSlide_allNext(state,scope.slide);
                    state = calc.state;
                    _35 = calc.result;
                  } else {
                    _35 = constants.EMPTY_ARRAY;
                  }
                  var _36 = scope.slide == null ? _35 : _.without(_35,scope.slide);
                  var oldScope = scope;
                  var _41 = [];
                  for (var _42 = 0 ; _42 < _36.length ; _42++) {
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _36[_42]
                            });
                            var _39 = getSlide_title(state,scope.s);
                            var _40 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _40 = calc.result;
                            } else {
                              _40 = null;
                            }
                            var _37 = React.createElement("button",{
                              className : "slide-selector-item pure-button",
                              title : _39,
                              onClick : scope["setCurrent"](scope.s)
                            },_40);
                            _41.push(_.assign({
                            },_37,{
                              key : scope.s
                            }));
                        } ) ();
                  }
                  var _45 = getSlide_next(state,scope.slide);
                  var _46 = expression.count(_45 == null ? constants.EMPTY_ARRAY : [_45]);
                  var _47 = _46 !== null ? _46 === 0 : null;
                  var _48 = getSlide_next(state,scope.slide);
                  var _43 = React.createElement("button",{
                    className : "pure-button",
                    disabled : _47,
                    onClick : scope["setCurrent"](_48)
                  },">");
                  var _18 = React.createElement("div",{
                    className : "slide-selector"
                  },_20,_30,_32,_41,_43);
                  var _0 = React.createElement("footer",{
                    className : "slide-footer"
                  },_2,_11,_18);
                  return {
                    result : _0,
                    state : state
                  };
              },["setCurrent","nextSlide","previousSlide"]),
          Block : Lifted(function Block(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("div",{
                    style : {
                      padding : "30px 0 30px 0"
                    }
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Main : Lifted(function Main(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _7 ;
                  var _0 = getSlideShow_current(state,scope.slideshow);
                  var _1 = expression.count(_0 == null ? constants.EMPTY_ARRAY : [_0]);
                  var _2 = _1 !== null ? _1 === 0 : null;
                  if(_2) {
                    var _3 = React.createElement(Component.Init,{
                      slideshow : scope.slideshow
                    });
                    _7 = _3;
                  } else {
                    var _4 = getSlideShow_current(state,scope.slideshow);
                    var oldScope = scope;
                    var _6 ;
                    if(_4 !== null) {
                       ( function () {
                              var scope = _.assign({
                              },oldScope,{
                                current : _4
                              });
                              var _5 = React.createElement(Component.Slide,{
                                slide : scope.current
                              });
                              _6 = _5;
                          } ) ();
                    } else {
                      _6 = null;
                    }
                    _7 = _6;
                  }
                  return {
                    result : _7,
                    state : state
                  };
              },[]),
          SlideHeader : Lifted(function SlideHeader(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _4 = getSlide_title(state,scope.slide);
                  var _2 = React.createElement("h1",{
                  },_4);
                  var _5 = React.createElement("hr",{
                  });
                  var _0 = React.createElement("div",{
                    className : "slide-header"
                  },_2,_5);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Init : Lifted(function Init(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["./components/inputs"].Trigger,{
                    action : scope.init
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },["init"]),
          TwoColumn : Lifted(function TwoColumn(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement("div",{
                    className : "pure-u-1-2"
                  },scope.left);
                  var _4 = React.createElement("div",{
                    className : "pure-u-1-2"
                  },scope.right);
                  var _0 = React.createElement("div",{
                    className : "pure-g"
                  },_2,_4);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          VSpace : Lifted(function VSpace(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("br",{
                    style : {
                      height : "50x=px"
                    }
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[])
        };
    } ) ();
module.exports.Component = Component;
function SlideFooter_setCurrent(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
    c : action.args[0]
  }),function (scope) {
          var _0 = getSlide_slideshow(state,scope.slide);
          scoped(scope,{
            $this : _0
          },function (scope) {
                  newState = setSlideShow_current(newState,scope["$this"],scope.c);
              });
      });
  return newState;
}

actions["SlideFooter_setCurrent"] = SlideFooter_setCurrent;
function SlideFooter_nextSlide(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 = getSlide_slideshow(state,scope.slide);
          scoped(scope,{
            $this : _0
          },function (scope) {
                  var _2 = getSlideShow_current(state,scope["$this"]);
                  var _3 = getSlide_next(state,_2);
                  newState = setSlideShow_current(newState,scope["$this"],_3);
              });
      });
  return newState;
}

actions["SlideFooter_nextSlide"] = SlideFooter_nextSlide;
function SlideFooter_previousSlide(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 = getSlide_slideshow(state,scope.slide);
          scoped(scope,{
            $this : _0
          },function (scope) {
                  var _2 = getSlideShow_current(state,scope["$this"]);
                  var _3 = getSlide_previous(state,_2);
                  newState = setSlideShow_current(newState,scope["$this"],_3);
              });
      });
  return newState;
}

actions["SlideFooter_previousSlide"] = SlideFooter_previousSlide;
function Init_init(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _174 = {
            id : pixiedustRuntime.generateUniqueId()
          };
          newState = newState.update("Slide",function (table) {
                  return table.set(_174.id,_174);
              });
          scoped(scope,{
            $this : _174.id
          },function (scope) {
                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                  newState = setSlide_title(newState,scope["$this"],"Slide 1");
                  var _179 = React.createElement("li",{
                  },"Content");
                  var _181 = React.createElement("li",{
                  },"Content");
                  var _183 = React.createElement("li",{
                  },"Content");
                  var _185 = React.createElement("li",{
                  },"Content");
                  var _177 = React.createElement("ul",{
                  },_179,_181,_183,_185);
                  var _175 = React.createElement("div",{
                  },_177);
                  newState = setSlide_content(newState,scope["$this"],_175);
              });
          scoped(scope,{
            intro : _174.id
          },function (scope) {
                  scoped(scope,{
                    $this : scope.slideshow
                  },function (scope) {
                          newState = setSlideShow_current(newState,scope["$this"],scope.intro);
                      });
                  var _163 = {
                    id : pixiedustRuntime.generateUniqueId()
                  };
                  newState = newState.update("Slide",function (table) {
                          return table.set(_163.id,_163);
                      });
                  scoped(scope,{
                    $this : _163.id
                  },function (scope) {
                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                          newState = setSlide_title(newState,scope["$this"],"Counter Example (not a counterexample)");
                          var _166 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                            language : "pix",
                            url : "/sources/counter_model.pix"
                          });
                          var _167 = React.createElement("div",{
                          });
                          var _165 = React.createElement(Component.TwoColumn,{
                            left : _166,
                            right : _167
                          });
                          newState = setSlide_content(newState,scope["$this"],_165);
                          newState = setSlide_previous(newState,scope["$this"],scope.intro);
                      });
                  scoped(scope,{
                    counter1 : _163.id
                  },function (scope) {
                          var _155 = {
                            id : pixiedustRuntime.generateUniqueId()
                          };
                          newState = newState.update("Slide",function (table) {
                                  return table.set(_155.id,_155);
                              });
                          scoped(scope,{
                            $this : _155.id
                          },function (scope) {
                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                  newState = setSlide_previous(newState,scope["$this"],scope.intro);
                                  newState = setSlide_title(newState,scope["$this"],"Slides");
                                  var _157 = React.createElement(imports["./examples/main"].SlidesExample,{
                                  });
                                  var _158 = React.createElement(imports["./examples/main"].SlidesExample,{
                                  });
                                  var _156 = React.createElement(Component.TwoColumn,{
                                    left : _157,
                                    right : _158
                                  });
                                  newState = setSlide_content(newState,scope["$this"],_156);
                              });
                          scoped(scope,{
                            slides : _155.id
                          },function (scope) {
                                  var _140 = {
                                    id : pixiedustRuntime.generateUniqueId()
                                  };
                                  newState = newState.update("Slide",function (table) {
                                          return table.set(_140.id,_140);
                                      });
                                  scoped(scope,{
                                    $this : _140.id
                                  },function (scope) {
                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                          newState = setSlide_previous(newState,scope["$this"],scope.slides);
                                          newState = setSlide_title(newState,scope["$this"],"Encapsulation of data");
                                          var _146 = React.createElement(imports["./examples/main"].TodoExample,{
                                          });
                                          var _147 = React.createElement(imports["./examples/main"].TodoExample,{
                                          });
                                          var _145 = React.createElement(Component.TwoColumn,{
                                            left : _146,
                                            right : _147
                                          });
                                          var _143 = React.createElement("div",{
                                            className : "pure-u-2-3"
                                          },_145);
                                          var _150 = React.createElement(imports["./examples/main"].TodoExampleDup,{
                                          });
                                          var _148 = React.createElement("div",{
                                            className : "pure-u-1-3"
                                          },_150);
                                          var _141 = React.createElement("div",{
                                            className : "pure-g"
                                          },_143,_148);
                                          newState = setSlide_content(newState,scope["$this"],_141);
                                      });
                                  scoped(scope,{
                                    dataEncapsulation : _140.id
                                  },function (scope) {
                                          var _130 = {
                                            id : pixiedustRuntime.generateUniqueId()
                                          };
                                          newState = newState.update("Slide",function (table) {
                                                  return table.set(_130.id,_130);
                                              });
                                          scoped(scope,{
                                            $this : _130.id
                                          },function (scope) {
                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                  newState = setSlide_previous(newState,scope["$this"],scope.dataEncapsulation);
                                                  newState = setSlide_title(newState,scope["$this"],"Counter Example (not a counterexample)");
                                                  var _132 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                    language : "pix",
                                                    url : "/sources/counter_model.pix"
                                                  });
                                                  var _135 = React.createElement(imports["./examples/main"].CounterExample,{
                                                  });
                                                  var _133 = React.createElement("div",{
                                                  },_135);
                                                  var _131 = React.createElement(Component.TwoColumn,{
                                                    left : _132,
                                                    right : _133
                                                  });
                                                  newState = setSlide_content(newState,scope["$this"],_131);
                                              });
                                          scoped(scope,{
                                            counter2 : _130.id
                                          },function (scope) {
                                                  var _120 = {
                                                    id : pixiedustRuntime.generateUniqueId()
                                                  };
                                                  newState = newState.update("Slide",function (table) {
                                                          return table.set(_120.id,_120);
                                                      });
                                                  scoped(scope,{
                                                    $this : _120.id
                                                  },function (scope) {
                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                          newState = setSlide_title(newState,scope["$this"],"Counter Example (not a counterexample)");
                                                          var _123 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                            language : "pix",
                                                            url : "/sources/counter.pix"
                                                          });
                                                          var _126 = React.createElement(imports["./examples/main"].CounterExample,{
                                                          });
                                                          var _124 = React.createElement("div",{
                                                          },_126);
                                                          var _122 = React.createElement(Component.TwoColumn,{
                                                            left : _123,
                                                            right : _124
                                                          });
                                                          newState = setSlide_content(newState,scope["$this"],_122);
                                                          newState = setSlide_previous(newState,scope["$this"],scope.counter2);
                                                      });
                                                  scoped(scope,{
                                                    counter3 : _120.id
                                                  },function (scope) {
                                                          var _108 = {
                                                            id : pixiedustRuntime.generateUniqueId()
                                                          };
                                                          newState = newState.update("Slide",function (table) {
                                                                  return table.set(_108.id,_108);
                                                              });
                                                          scoped(scope,{
                                                            $this : _108.id
                                                          },function (scope) {
                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                  newState = setSlide_title(newState,scope["$this"],"Counter Example (not a counterexample)");
                                                                  var _111 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                    language : "pix",
                                                                    url : "/sources/counter.pix"
                                                                  });
                                                                  var _114 = React.createElement(imports["./examples/main"].CounterExample,{
                                                                  });
                                                                  var _116 = React.createElement(Component.Image,{
                                                                    src : "/images/counter_vdom.png"
                                                                  });
                                                                  var _115 = React.createElement(Component.Block,{
                                                                  },_116);
                                                                  var _112 = React.createElement("div",{
                                                                  },_114,_115);
                                                                  var _110 = React.createElement(Component.TwoColumn,{
                                                                    left : _111,
                                                                    right : _112
                                                                  });
                                                                  newState = setSlide_content(newState,scope["$this"],_110);
                                                                  newState = setSlide_previous(newState,scope["$this"],scope.counter3);
                                                              });
                                                          scoped(scope,{
                                                            counter4 : _108.id
                                                          },function (scope) {
                                                                  var _102 = {
                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                  };
                                                                  newState = newState.update("Slide",function (table) {
                                                                          return table.set(_102.id,_102);
                                                                      });
                                                                  scoped(scope,{
                                                                    $this : _102.id
                                                                  },function (scope) {
                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                          newState = setSlide_previous(newState,scope["$this"],scope.counter4);
                                                                          newState = setSlide_title(newState,scope["$this"],"Virtual DOM");
                                                                          var _103 = React.createElement(Component.FixedWidthImage,{
                                                                            src : "/images/vdom.svg",
                                                                            width : 1600
                                                                          });
                                                                          newState = setSlide_content(newState,scope["$this"],_103);
                                                                      });
                                                                  scoped(scope,{
                                                                    vdom : _102.id
                                                                  },function (scope) {
                                                                          var _93 = {
                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                          };
                                                                          newState = newState.update("Slide",function (table) {
                                                                                  return table.set(_93.id,_93);
                                                                              });
                                                                          scoped(scope,{
                                                                            $this : _93.id
                                                                          },function (scope) {
                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.vdom);
                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                  var _96 = React.createElement(imports["./components/CodeBlock"].CodeBlock,{
                                                                                    language : "haskell",
                                                                                    code : "type Reducer state action = (state, action) -> state"
                                                                                  });
                                                                                  var _97 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                    language : "javascript",
                                                                                    url : "/sources/store.js"
                                                                                  });
                                                                                  var _94 = React.createElement("div",{
                                                                                  },_96,_97);
                                                                                  newState = setSlide_content(newState,scope["$this"],_94);
                                                                              });
                                                                          scoped(scope,{
                                                                            store1 : _93.id
                                                                          },function (scope) {
                                                                                  var _87 = {
                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                  };
                                                                                  newState = newState.update("Slide",function (table) {
                                                                                          return table.set(_87.id,_87);
                                                                                      });
                                                                                  scoped(scope,{
                                                                                    $this : _87.id
                                                                                  },function (scope) {
                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store1);
                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                          var _88 = React.createElement(Component.FixedWidthImage,{
                                                                                            src : "/images/store0.svg",
                                                                                            width : 800
                                                                                          });
                                                                                          newState = setSlide_content(newState,scope["$this"],_88);
                                                                                      });
                                                                                  scoped(scope,{
                                                                                    store2 : _87.id
                                                                                  },function (scope) {
                                                                                          var _81 = {
                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                          };
                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                  return table.set(_81.id,_81);
                                                                                              });
                                                                                          scoped(scope,{
                                                                                            $this : _81.id
                                                                                          },function (scope) {
                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store2);
                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                  var _82 = React.createElement(Component.FixedWidthImage,{
                                                                                                    src : "/images/store1.svg",
                                                                                                    width : 800
                                                                                                  });
                                                                                                  newState = setSlide_content(newState,scope["$this"],_82);
                                                                                              });
                                                                                          scoped(scope,{
                                                                                            store3 : _81.id
                                                                                          },function (scope) {
                                                                                                  var _75 = {
                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                  };
                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                          return table.set(_75.id,_75);
                                                                                                      });
                                                                                                  scoped(scope,{
                                                                                                    $this : _75.id
                                                                                                  },function (scope) {
                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store3);
                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                          var _76 = React.createElement(Component.FixedWidthImage,{
                                                                                                            src : "/images/store2.svg",
                                                                                                            width : 800
                                                                                                          });
                                                                                                          newState = setSlide_content(newState,scope["$this"],_76);
                                                                                                      });
                                                                                                  scoped(scope,{
                                                                                                    store4 : _75.id
                                                                                                  },function (scope) {
                                                                                                          var _69 = {
                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                          };
                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                  return table.set(_69.id,_69);
                                                                                                              });
                                                                                                          scoped(scope,{
                                                                                                            $this : _69.id
                                                                                                          },function (scope) {
                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store4);
                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                  var _70 = React.createElement(Component.FixedWidthImage,{
                                                                                                                    src : "/images/store3.svg",
                                                                                                                    width : 800
                                                                                                                  });
                                                                                                                  newState = setSlide_content(newState,scope["$this"],_70);
                                                                                                              });
                                                                                                          scoped(scope,{
                                                                                                            store5 : _69.id
                                                                                                          },function (scope) {
                                                                                                                  var _63 = {
                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                  };
                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                          return table.set(_63.id,_63);
                                                                                                                      });
                                                                                                                  scoped(scope,{
                                                                                                                    $this : _63.id
                                                                                                                  },function (scope) {
                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store5);
                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                          var _64 = React.createElement(Component.FixedWidthImage,{
                                                                                                                            src : "/images/store4.svg",
                                                                                                                            width : 800
                                                                                                                          });
                                                                                                                          newState = setSlide_content(newState,scope["$this"],_64);
                                                                                                                      });
                                                                                                                  scoped(scope,{
                                                                                                                    store6 : _63.id
                                                                                                                  },function (scope) {
                                                                                                                          var _40 = {
                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                          };
                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                  return table.set(_40.id,_40);
                                                                                                                              });
                                                                                                                          scoped(scope,{
                                                                                                                            $this : _40.id
                                                                                                                          },function (scope) {
                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store6);
                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Action types in PixieDust");
                                                                                                                                  var _44 = React.createElement("h3",{
                                                                                                                                  },"Update field (bidirectional mappings)");
                                                                                                                                  var _46 = React.createElement(imports["./components/CodeBlock"].CodeBlock,{
                                                                                                                                    language : "json",
                                                                                                                                    code : "{\"type\": \"setEntity_field\", \"id\": someId, \"value\": someValue}"
                                                                                                                                  });
                                                                                                                                  var _43 = React.createElement(Component.TwoColumn,{
                                                                                                                                    left : _44,
                                                                                                                                    right : _46
                                                                                                                                  });
                                                                                                                                  var _48 = React.createElement("h3",{
                                                                                                                                  },"Component actions");
                                                                                                                                  var _50 = React.createElement(imports["./components/CodeBlock"].CodeBlock,{
                                                                                                                                    language : "json",
                                                                                                                                    code : "{\"type\": \"Component_action\", \"props\": [...], \"args\": [...]}"
                                                                                                                                  });
                                                                                                                                  var _47 = React.createElement(Component.TwoColumn,{
                                                                                                                                    left : _48,
                                                                                                                                    right : _50
                                                                                                                                  });
                                                                                                                                  var _52 = React.createElement("h3",{
                                                                                                                                  },"Cache updates while rendering");
                                                                                                                                  var _54 = React.createElement(imports["./components/CodeBlock"].CodeBlock,{
                                                                                                                                    language : "json",
                                                                                                                                    code : "{\"type\": \"cacheUpdate[Component]\", \"updatedState\": state}"
                                                                                                                                  });
                                                                                                                                  var _51 = React.createElement(Component.TwoColumn,{
                                                                                                                                    left : _52,
                                                                                                                                    right : _54
                                                                                                                                  });
                                                                                                                                  var _55 = React.createElement(Component.VSpace,{
                                                                                                                                  });
                                                                                                                                  var _57 = React.createElement(imports["./examples/main"].AddExample,{
                                                                                                                                  });
                                                                                                                                  var _58 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                    language : "pix",
                                                                                                                                    url : "/sources/add.pix"
                                                                                                                                  });
                                                                                                                                  var _56 = React.createElement(Component.TwoColumn,{
                                                                                                                                    left : _57,
                                                                                                                                    right : _58
                                                                                                                                  });
                                                                                                                                  var _41 = React.createElement("div",{
                                                                                                                                  },_43,_47,_51,_55,_56);
                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_41);
                                                                                                                              });
                                                                                                                          scoped(scope,{
                                                                                                                            actions : _40.id
                                                                                                                          },function (scope) {
                                                                                                                                  var _32 = {
                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                  };
                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                          return table.set(_32.id,_32);
                                                                                                                                      });
                                                                                                                                  scoped(scope,{
                                                                                                                                    $this : _32.id
                                                                                                                                  },function (scope) {
                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.actions);
                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Income Tax");
                                                                                                                                          var _34 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                            language : "pix",
                                                                                                                                            url : "/sources/incometax.pix"
                                                                                                                                          });
                                                                                                                                          var _35 = React.createElement(imports["./examples/main"].IncomeTaxExample,{
                                                                                                                                          });
                                                                                                                                          var _33 = React.createElement(Component.TwoColumn,{
                                                                                                                                            left : _34,
                                                                                                                                            right : _35
                                                                                                                                          });
                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_33);
                                                                                                                                      });
                                                                                                                                  scoped(scope,{
                                                                                                                                    incometax1 : _32.id
                                                                                                                                  },function (scope) {
                                                                                                                                          var _24 = {
                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                          };
                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                  return table.set(_24.id,_24);
                                                                                                                                              });
                                                                                                                                          scoped(scope,{
                                                                                                                                            $this : _24.id
                                                                                                                                          },function (scope) {
                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.incometax1);
                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Income Tax");
                                                                                                                                                  var _26 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                    language : "pix",
                                                                                                                                                    url : "/sources/incometax.pix"
                                                                                                                                                  });
                                                                                                                                                  var _27 = React.createElement(imports["./examples/main"].IncomeTaxNoSummaryExample,{
                                                                                                                                                  });
                                                                                                                                                  var _25 = React.createElement(Component.TwoColumn,{
                                                                                                                                                    left : _26,
                                                                                                                                                    right : _27
                                                                                                                                                  });
                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_25);
                                                                                                                                              });
                                                                                                                                          scoped(scope,{
                                                                                                                                            incometax2 : _24.id
                                                                                                                                          },function (scope) {
                                                                                                                                                  var _16 = {
                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                  };
                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                          return table.set(_16.id,_16);
                                                                                                                                                      });
                                                                                                                                                  scoped(scope,{
                                                                                                                                                    $this : _16.id
                                                                                                                                                  },function (scope) {
                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                          var _20 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                          });
                                                                                                                                                          var _18 = React.createElement("div",{
                                                                                                                                                          },_20);
                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_18);
                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.incometax2);
                                                                                                                                                      });
                                                                                                                                                  scoped(scope,{
                                                                                                                                                    todo1 : _16.id
                                                                                                                                                  },function (scope) {
                                                                                                                                                          var _8 = {
                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                          };
                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                  return table.set(_8.id,_8);
                                                                                                                                                              });
                                                                                                                                                          scoped(scope,{
                                                                                                                                                            $this : _8.id
                                                                                                                                                          },function (scope) {
                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo1);
                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo Model");
                                                                                                                                                                  var _10 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                    language : "pix",
                                                                                                                                                                    url : "/sources/todo_model.pix"
                                                                                                                                                                  });
                                                                                                                                                                  var _11 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                  });
                                                                                                                                                                  var _9 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                    left : _10,
                                                                                                                                                                    right : _11
                                                                                                                                                                  });
                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_9);
                                                                                                                                                              });
                                                                                                                                                          scoped(scope,{
                                                                                                                                                            todo_model : _8.id
                                                                                                                                                          },function (scope) {
                                                                                                                                                                  var _0 = {
                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                  };
                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                          return table.set(_0.id,_0);
                                                                                                                                                                      });
                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                    $this : _0.id
                                                                                                                                                                  },function (scope) {
                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo_model);
                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo View");
                                                                                                                                                                          var _2 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                            language : "pix",
                                                                                                                                                                            url : "/sources/todo_view.pix"
                                                                                                                                                                          });
                                                                                                                                                                          var _3 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                          });
                                                                                                                                                                          var _1 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                            left : _2,
                                                                                                                                                                            right : _3
                                                                                                                                                                          });
                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_1);
                                                                                                                                                                      });
                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                    todo_view : _0.id
                                                                                                                                                                  },function (scope) {
                                                                                                                                                                      });
                                                                                                                                                              });
                                                                                                                                                      });
                                                                                                                                              });
                                                                                                                                      });
                                                                                                                              });
                                                                                                                      });
                                                                                                              });
                                                                                                      });
                                                                                              });
                                                                                      });
                                                                              });
                                                                      });
                                                              });
                                                      });
                                              });
                                      });
                              });
                      });
              });
      });
  return newState;
}

actions["Init_init"] = Init_init;