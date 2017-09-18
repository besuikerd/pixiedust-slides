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
  "Slide_nextVisible" : immutable.Map(),
  "Slide_prevVisible" : immutable.Map(),
  "Slide_slideNumber" : immutable.Map(),
  "Slide_slidesLeft" : immutable.Map(),
  "Slide_allNext" : immutable.Map(),
  "Slide_allNext0" : immutable.Map(),
  "Slide_allPrevious" : immutable.Map(),
  "Slide_allPrevious0" : immutable.Map(),
  "Slide_inverseAllNext" : immutable.Map(),
  "Slide_inverseAllNext0" : immutable.Map(),
  "Slide_inverseAllPrevious" : immutable.Map(),
  "Slide_inverseAllPrevious0" : immutable.Map(),
  "Slide_inverseCurrent" : immutable.Map(),
  "Slide_inverseSelectNext" : immutable.Map(),
  "Slide_inverseSelectPrevious" : immutable.Map(),
  "Slide_next" : immutable.Map(),
  "Slide_previous" : immutable.Map(),
  "Slide_selectNext" : immutable.Map(),
  "Slide_selectPrevious" : immutable.Map(),
  "Slide_slideshow" : immutable.Map(),
  "SlideShow_slideNumbersVisible" : immutable.Map(),
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
function getSlide_nextVisible(state,id) {
  return state.get("Slide_nextVisible").get(id);
}

module.exports.getSlide_nextVisible = getSlide_nextVisible;
function getSlide_nextVisible_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_nextVisible");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getSlide_nextVisible_Many = getSlide_nextVisible_Many;
function getSlide_prevVisible(state,id) {
  return state.get("Slide_prevVisible").get(id);
}

module.exports.getSlide_prevVisible = getSlide_prevVisible;
function getSlide_prevVisible_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_prevVisible");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getSlide_prevVisible_Many = getSlide_prevVisible_Many;
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
function getSlide_allNext0(state,id) {
  return state.get("Slide_allNext0").get(id);
}

module.exports.getSlide_allNext0 = getSlide_allNext0;
function getSlide_allNext0_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_allNext0");
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

module.exports.getSlide_allNext0_Many = getSlide_allNext0_Many;
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
function getSlide_allPrevious0(state,id) {
  return state.get("Slide_allPrevious0").get(id);
}

module.exports.getSlide_allPrevious0 = getSlide_allPrevious0;
function getSlide_allPrevious0_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_allPrevious0");
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

module.exports.getSlide_allPrevious0_Many = getSlide_allPrevious0_Many;
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
function getSlide_inverseAllNext0(state,id) {
  return state.get("Slide_inverseAllNext0").get(id);
}

module.exports.getSlide_inverseAllNext0 = getSlide_inverseAllNext0;
function getSlide_inverseAllNext0_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_inverseAllNext0");
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

module.exports.getSlide_inverseAllNext0_Many = getSlide_inverseAllNext0_Many;
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
function getSlide_inverseAllPrevious0(state,id) {
  return state.get("Slide_inverseAllPrevious0").get(id);
}

module.exports.getSlide_inverseAllPrevious0 = getSlide_inverseAllPrevious0;
function getSlide_inverseAllPrevious0_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_inverseAllPrevious0");
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

module.exports.getSlide_inverseAllPrevious0_Many = getSlide_inverseAllPrevious0_Many;
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
function getSlide_inverseSelectNext(state,id) {
  return state.get("Slide_inverseSelectNext").get(id);
}

module.exports.getSlide_inverseSelectNext = getSlide_inverseSelectNext;
function getSlide_inverseSelectNext_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_inverseSelectNext");
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

module.exports.getSlide_inverseSelectNext_Many = getSlide_inverseSelectNext_Many;
function getSlide_inverseSelectPrevious(state,id) {
  return state.get("Slide_inverseSelectPrevious").get(id);
}

module.exports.getSlide_inverseSelectPrevious = getSlide_inverseSelectPrevious;
function getSlide_inverseSelectPrevious_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_inverseSelectPrevious");
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

module.exports.getSlide_inverseSelectPrevious_Many = getSlide_inverseSelectPrevious_Many;
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
function getSlide_selectNext(state,id) {
  return state.get("Slide_selectNext").get(id);
}

module.exports.getSlide_selectNext = getSlide_selectNext;
function getSlide_selectNext_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_selectNext");
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

module.exports.getSlide_selectNext_Many = getSlide_selectNext_Many;
function getSlide_selectPrevious(state,id) {
  return state.get("Slide_selectPrevious").get(id);
}

module.exports.getSlide_selectPrevious = getSlide_selectPrevious;
function getSlide_selectPrevious_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Slide_selectPrevious");
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

module.exports.getSlide_selectPrevious_Many = getSlide_selectPrevious_Many;
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
function getSlideShow_slideNumbersVisible(state,id) {
  var _0 = state.get("SlideShow").get(id);
  if(_0 !== undefined) {
    _0 = _0.slideNumbersVisible;
    if(_0 === undefined || _0 === null) {
      _0 = state.get("SlideShow_slideNumbersVisible").get(id);
    }
  }
  return _0;
}

module.exports.getSlideShow_slideNumbersVisible = getSlideShow_slideNumbersVisible;
function getSlideShow_slideNumbersVisible_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("SlideShow");
  var _2 = state.get("SlideShow_slideNumbersVisible");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.slideNumbersVisible;
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

module.exports.getSlideShow_slideNumbersVisible_Many = getSlideShow_slideNumbersVisible_Many;
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
function setSlideShow_slideNumbersVisible(state,id,value) {
  state = invalidateSlideShow_slideNumbersVisible(state,id);
  var prop = {
    slideNumbersVisible : value
  };
  state = state.update("SlideShow",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setSlideShow_slideNumbersVisible = setSlideShow_slideNumbersVisible;
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
function invalidateSlide_nextVisible(state,id) {
  state = state.update("Slide_nextVisible",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateSlide_selectNext(state,id);
  }
  return state;
}

module.exports.invalidateSlide_nextVisible = invalidateSlide_nextVisible;
function invalidateSlide_prevVisible(state,id) {
  state = state.update("Slide_prevVisible",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateSlide_nextVisible(state,id);
  }
  if(id != null) {
    state = invalidateSlide_selectPrevious(state,id);
  }
  return state;
}

module.exports.invalidateSlide_prevVisible = invalidateSlide_prevVisible;
function invalidateSlide_slideNumber(state,id) {
  state = state.update("Slide_slideNumber",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_inverseAllNext(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateSlide_selectNext(state,_0[i]);
            }
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_inverseAllPrevious(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateSlide_selectPrevious(state,_0[i]);
            }
          }
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
  if(id != null) {
    state = invalidateSlide_prevVisible(state,id);
  }
  if(id != null) {
    state = invalidateSlide_selectNext(state,id);
  }
  return state;
}

module.exports.invalidateSlide_allNext = invalidateSlide_allNext;
function invalidateSlide_allNext0(state,id) {
  state = state.update("Slide_allNext0",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateSlide_allNext(state,id);
  }
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_previous(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateSlide_allNext0(state,_0);
          }
      });
  return state;
}

module.exports.invalidateSlide_allNext0 = invalidateSlide_allNext0;
function invalidateSlide_allPrevious(state,id) {
  state = state.update("Slide_allPrevious",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateSlide_prevVisible(state,id);
  }
  if(id != null) {
    state = invalidateSlide_selectPrevious(state,id);
  }
  return state;
}

module.exports.invalidateSlide_allPrevious = invalidateSlide_allPrevious;
function invalidateSlide_allPrevious0(state,id) {
  state = state.update("Slide_allPrevious0",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateSlide_allPrevious(state,id);
  }
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlide_next(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateSlide_allPrevious0(state,_0);
          }
      });
  return state;
}

module.exports.invalidateSlide_allPrevious0 = invalidateSlide_allPrevious0;
function invalidateSlide_inverseAllNext(state,id) {
  state = state.update("Slide_inverseAllNext",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_inverseAllNext = invalidateSlide_inverseAllNext;
function invalidateSlide_inverseAllNext0(state,id) {
  state = state.update("Slide_inverseAllNext0",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_inverseAllNext0 = invalidateSlide_inverseAllNext0;
function invalidateSlide_inverseAllPrevious(state,id) {
  state = state.update("Slide_inverseAllPrevious",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_inverseAllPrevious = invalidateSlide_inverseAllPrevious;
function invalidateSlide_inverseAllPrevious0(state,id) {
  state = state.update("Slide_inverseAllPrevious0",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_inverseAllPrevious0 = invalidateSlide_inverseAllPrevious0;
function invalidateSlide_inverseCurrent(state,id) {
  return state;
}

module.exports.invalidateSlide_inverseCurrent = invalidateSlide_inverseCurrent;
function invalidateSlide_inverseSelectNext(state,id) {
  state = state.update("Slide_inverseSelectNext",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_inverseSelectNext = invalidateSlide_inverseSelectNext;
function invalidateSlide_inverseSelectPrevious(state,id) {
  state = state.update("Slide_inverseSelectPrevious",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_inverseSelectPrevious = invalidateSlide_inverseSelectPrevious;
function invalidateSlide_next(state,id) {
  if(id != null) {
    state = invalidateSlide_allNext0(state,id);
  }
  if(id != null) {
    state = invalidateSlide_slidesLeft(state,id);
  }
  return state;
}

module.exports.invalidateSlide_next = invalidateSlide_next;
function invalidateSlide_previous(state,id) {
  if(id != null) {
    state = invalidateSlide_allPrevious0(state,id);
  }
  if(id != null) {
    state = invalidateSlide_slideNumber(state,id);
  }
  return state;
}

module.exports.invalidateSlide_previous = invalidateSlide_previous;
function invalidateSlide_selectNext(state,id) {
  state = state.update("Slide_selectNext",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_selectNext = invalidateSlide_selectNext;
function invalidateSlide_selectPrevious(state,id) {
  state = state.update("Slide_selectPrevious",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlide_selectPrevious = invalidateSlide_selectPrevious;
function invalidateSlide_slideshow(state,id) {
  if(id != null) {
    state = invalidateSlide_nextVisible(state,id);
  }
  if(id != null) {
    state = invalidateSlide_prevVisible(state,id);
  }
  return state;
}

module.exports.invalidateSlide_slideshow = invalidateSlide_slideshow;
function invalidateSlideShow_slideNumbersVisible(state,id) {
  state = state.update("SlideShow_slideNumbersVisible",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlideShow_slides(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateSlide_nextVisible(state,_0[i]);
            }
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSlideShow_slides(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateSlide_prevVisible(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateSlideShow_slideNumbersVisible = invalidateSlideShow_slideNumbersVisible;
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
function calculateSlide_nextVisible(state,id) {
  var result = getSlide_nextVisible(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getSlide_slideshow(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlideShow_slideNumbersVisible(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = null;
            }
            var _3 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_prevVisible(state,scope["$this"]);
              state = calc.state;
              _3 = calc.result;
            } else {
              _3 = null;
            }
            var _4 = _2 !== null && _3 !== null ? _2 - _3 : null;
            var _5 = _4 !== null ? _4 - 1 : null;
            result = _5;
            state = state.update("Slide_nextVisible",function (table) {
                    return table.set(id,_5);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_nextVisible = calculateSlide_nextVisible;
function calculateSlide_nextVisible_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_nextVisible(state,id);
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

module.exports.calculateSlide_nextVisible_Many = calculateSlide_nextVisible_Many;
function calculateSlide_prevVisible(state,id) {
  var result = getSlide_prevVisible(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getSlide_slideshow(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlideShow_slideNumbersVisible(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = null;
            }
            var _3 = _2 !== null ? parseInt(_2 / 2) : null;
            var _4 = getSlide_slideshow(state,scope["$this"]);
            var _5 ;
            if(_4 != null) {
              var calc = calculateSlideShow_slideNumbersVisible(state,_4);
              state = calc.state;
              _5 = calc.result;
            } else {
              _5 = null;
            }
            var _6 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_allNext(state,scope["$this"]);
              state = calc.state;
              _6 = calc.result;
            } else {
              _6 = constants.EMPTY_ARRAY;
            }
            var _7 = expression.count(_6);
            var _8 = _5 !== null && _7 !== null ? _5 - _7 : null;
            var _9 =  ( 0 == null ? constants.EMPTY_ARRAY : [0] ) .concat(_8 == null ? constants.EMPTY_ARRAY : [_8]);
            var _10 = expression.max(_9);
            var _11 =  ( _3 == null ? constants.EMPTY_ARRAY : [_3] ) .concat(_10 == null ? constants.EMPTY_ARRAY : [_10]);
            var _12 = expression.max(_11);
            var _13 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_allPrevious(state,scope["$this"]);
              state = calc.state;
              _13 = calc.result;
            } else {
              _13 = constants.EMPTY_ARRAY;
            }
            var _14 = expression.count(_13);
            var _15 =  ( _12 == null ? constants.EMPTY_ARRAY : [_12] ) .concat(_14 == null ? constants.EMPTY_ARRAY : [_14]);
            var _16 = expression.min(_15);
            result = _16;
            state = state.update("Slide_prevVisible",function (table) {
                    return table.set(id,_16);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_prevVisible = calculateSlide_prevVisible;
function calculateSlide_prevVisible_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_prevVisible(state,id);
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

module.exports.calculateSlide_prevVisible_Many = calculateSlide_prevVisible_Many;
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
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_allNext0(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = constants.EMPTY_ARRAY;
            }
            var _2 = scope["$this"] == null ? _1 : _.without(_1,scope["$this"]);
            result = _2;
            var previousValue = getSlide_allNext(state,id);
            var table = state.get("Slide_allNext").set(id,_2);
            state = state.set("Slide_allNext",table);
            var inverseTable = state.get("Slide_inverseAllNext");
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
function calculateSlide_allNext0(state,id) {
  var result = getSlide_allNext0(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _4 ;
            var _1 = getSlide_next(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlide_allNext0(state,_1);
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
            var previousValue = getSlide_allNext0(state,id);
            var table = state.get("Slide_allNext0").set(id,_4);
            state = state.set("Slide_allNext0",table);
            var inverseTable = state.get("Slide_inverseAllNext0");
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
            state = state.set("Slide_inverseAllNext0",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_allNext0 = calculateSlide_allNext0;
function calculateSlide_allNext0_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_allNext0(state,id);
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

module.exports.calculateSlide_allNext0_Many = calculateSlide_allNext0_Many;
function calculateSlide_allPrevious(state,id) {
  var result = getSlide_allPrevious(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_allPrevious0(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = constants.EMPTY_ARRAY;
            }
            var _2 = scope["$this"] == null ? _1 : _.without(_1,scope["$this"]);
            result = _2;
            var previousValue = getSlide_allPrevious(state,id);
            var table = state.get("Slide_allPrevious").set(id,_2);
            state = state.set("Slide_allPrevious",table);
            var inverseTable = state.get("Slide_inverseAllPrevious");
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
function calculateSlide_allPrevious0(state,id) {
  var result = getSlide_allPrevious0(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _4 ;
            var _1 = getSlide_previous(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateSlide_allPrevious0(state,_1);
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
            var previousValue = getSlide_allPrevious0(state,id);
            var table = state.get("Slide_allPrevious0").set(id,_4);
            state = state.set("Slide_allPrevious0",table);
            var inverseTable = state.get("Slide_inverseAllPrevious0");
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
            state = state.set("Slide_inverseAllPrevious0",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_allPrevious0 = calculateSlide_allPrevious0;
function calculateSlide_allPrevious0_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_allPrevious0(state,id);
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

module.exports.calculateSlide_allPrevious0_Many = calculateSlide_allPrevious0_Many;
function calculateSlide_selectNext(state,id) {
  var result = getSlide_selectNext(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_allNext(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = constants.EMPTY_ARRAY;
            }
            var oldScope = scope;
            var _2 = _1.slice().sort(function (_3,_4) {
                    var _5 ;
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _3
                            });
                            var _6 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _6 = calc.result;
                            } else {
                              _6 = null;
                            }
                            _5 = _6;
                        } ) ();
                    var _7 ;
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _4
                            });
                            var _8 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _8 = calc.result;
                            } else {
                              _8 = null;
                            }
                            _7 = _8;
                        } ) ();
                    return _5 > _7 ? 1 : _5 == _7 ? 0 : - 1;
                });
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_nextVisible(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = null;
            }
            var _10 = [];
            for (var i = 0 ; i < _1 && i < _2.length ; i++) {
              _10.push(_2[i]);
            }
            result = _10;
            var previousValue = getSlide_selectNext(state,id);
            var table = state.get("Slide_selectNext").set(id,_10);
            state = state.set("Slide_selectNext",table);
            var inverseTable = state.get("Slide_inverseSelectNext");
            var added = _.difference(_10,previousValue);
            var removed = _.difference(previousValue,_10);
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
            state = state.set("Slide_inverseSelectNext",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_selectNext = calculateSlide_selectNext;
function calculateSlide_selectNext_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_selectNext(state,id);
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

module.exports.calculateSlide_selectNext_Many = calculateSlide_selectNext_Many;
function calculateSlide_selectPrevious(state,id) {
  var result = getSlide_selectPrevious(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_allPrevious(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = constants.EMPTY_ARRAY;
            }
            var oldScope = scope;
            var _2 = _1.slice().sort(function (_3,_4) {
                    var _5 ;
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _3
                            });
                            var _6 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _6 = calc.result;
                            } else {
                              _6 = null;
                            }
                            var _7 = _6 !== null ? _6 * -1 : null;
                            _5 = _7;
                        } ) ();
                    var _8 ;
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _4
                            });
                            var _9 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _9 = calc.result;
                            } else {
                              _9 = null;
                            }
                            var _10 = _9 !== null ? _9 * -1 : null;
                            _8 = _10;
                        } ) ();
                    return _5 > _8 ? 1 : _5 == _8 ? 0 : - 1;
                });
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateSlide_prevVisible(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = null;
            }
            var _12 = [];
            for (var i = 0 ; i < _1 && i < _2.length ; i++) {
              _12.push(_2[i]);
            }
            var oldScope = scope;
            var _2 = _12.slice().sort(function (_3,_4) {
                    var _5 ;
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _3
                            });
                            var _6 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _6 = calc.result;
                            } else {
                              _6 = null;
                            }
                            _5 = _6;
                        } ) ();
                    var _7 ;
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _4
                            });
                            var _8 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _8 = calc.result;
                            } else {
                              _8 = null;
                            }
                            _7 = _8;
                        } ) ();
                    return _5 > _7 ? 1 : _5 == _7 ? 0 : - 1;
                });
            result = _2;
            var previousValue = getSlide_selectPrevious(state,id);
            var table = state.get("Slide_selectPrevious").set(id,_2);
            state = state.set("Slide_selectPrevious",table);
            var inverseTable = state.get("Slide_inverseSelectPrevious");
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
            state = state.set("Slide_inverseSelectPrevious",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlide_selectPrevious = calculateSlide_selectPrevious;
function calculateSlide_selectPrevious_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlide_selectPrevious(state,id);
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

module.exports.calculateSlide_selectPrevious_Many = calculateSlide_selectPrevious_Many;
function calculateSlideShow_slideNumbersVisible(state,id) {
  var result = getSlideShow_slideNumbersVisible(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            result = 30;
            state = state.update("SlideShow_slideNumbersVisible",function (table) {
                    return table.set(id,30);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlideShow_slideNumbersVisible = calculateSlideShow_slideNumbersVisible;
function calculateSlideShow_slideNumbersVisible_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlideShow_slideNumbersVisible(state,id);
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

module.exports.calculateSlideShow_slideNumbersVisible_Many = calculateSlideShow_slideNumbersVisible_Many;
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
  "addSlide_allNext0" : function (state,action) {
          return addSlide_allNext0(state,action.id,action.value);
      },
  "addSlide_allPrevious" : function (state,action) {
          return addSlide_allPrevious(state,action.id,action.value);
      },
  "addSlide_allPrevious0" : function (state,action) {
          return addSlide_allPrevious0(state,action.id,action.value);
      },
  "addSlide_inverseAllNext" : function (state,action) {
          return addSlide_inverseAllNext(state,action.id,action.value);
      },
  "addSlide_inverseAllNext0" : function (state,action) {
          return addSlide_inverseAllNext0(state,action.id,action.value);
      },
  "addSlide_inverseAllPrevious" : function (state,action) {
          return addSlide_inverseAllPrevious(state,action.id,action.value);
      },
  "addSlide_inverseAllPrevious0" : function (state,action) {
          return addSlide_inverseAllPrevious0(state,action.id,action.value);
      },
  "setSlide_inverseCurrent" : function (state,action) {
          return setSlide_inverseCurrent(state,action.id,action.value);
      },
  "addSlide_inverseCurrent" : function (state,action) {
          return addSlide_inverseCurrent(state,action.id,action.value);
      },
  "addSlide_inverseSelectNext" : function (state,action) {
          return addSlide_inverseSelectNext(state,action.id,action.value);
      },
  "addSlide_inverseSelectPrevious" : function (state,action) {
          return addSlide_inverseSelectPrevious(state,action.id,action.value);
      },
  "setSlide_next" : function (state,action) {
          return setSlide_next(state,action.id,action.value);
      },
  "setSlide_previous" : function (state,action) {
          return setSlide_previous(state,action.id,action.value);
      },
  "addSlide_selectNext" : function (state,action) {
          return addSlide_selectNext(state,action.id,action.value);
      },
  "addSlide_selectPrevious" : function (state,action) {
          return addSlide_selectPrevious(state,action.id,action.value);
      },
  "setSlide_slideshow" : function (state,action) {
          return setSlide_slideshow(state,action.id,action.value);
      },
  "setSlideShow_slideNumbersVisible" : function (state,action) {
          return setSlideShow_slideNumbersVisible(state,action.id,action.value);
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
  "calculateSlide_nextVisible" : function (state,action) {
          return calculateSlide_nextVisible(state,action.id).state;
      },
  "calculateSlide_nextVisible_Many" : function (state,action) {
          return calculateSlide_nextVisible_Many(state,action.ids).state;
      },
  "calculateSlide_prevVisible" : function (state,action) {
          return calculateSlide_prevVisible(state,action.id).state;
      },
  "calculateSlide_prevVisible_Many" : function (state,action) {
          return calculateSlide_prevVisible_Many(state,action.ids).state;
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
  "calculateSlide_allNext0" : function (state,action) {
          return calculateSlide_allNext0(state,action.id).state;
      },
  "calculateSlide_allNext0_Many" : function (state,action) {
          return calculateSlide_allNext0_Many(state,action.ids).state;
      },
  "calculateSlide_allPrevious" : function (state,action) {
          return calculateSlide_allPrevious(state,action.id).state;
      },
  "calculateSlide_allPrevious_Many" : function (state,action) {
          return calculateSlide_allPrevious_Many(state,action.ids).state;
      },
  "calculateSlide_allPrevious0" : function (state,action) {
          return calculateSlide_allPrevious0(state,action.id).state;
      },
  "calculateSlide_allPrevious0_Many" : function (state,action) {
          return calculateSlide_allPrevious0_Many(state,action.ids).state;
      },
  "calculateSlide_selectNext" : function (state,action) {
          return calculateSlide_selectNext(state,action.id).state;
      },
  "calculateSlide_selectNext_Many" : function (state,action) {
          return calculateSlide_selectNext_Many(state,action.ids).state;
      },
  "calculateSlide_selectPrevious" : function (state,action) {
          return calculateSlide_selectPrevious(state,action.id).state;
      },
  "calculateSlide_selectPrevious_Many" : function (state,action) {
          return calculateSlide_selectPrevious_Many(state,action.ids).state;
      },
  "calculateSlideShow_slideNumbersVisible" : function (state,action) {
          return calculateSlideShow_slideNumbersVisible(state,action.id).state;
      },
  "calculateSlideShow_slideNumbersVisible_Many" : function (state,action) {
          return calculateSlideShow_slideNumbersVisible_Many(state,action.ids).state;
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
  "addSlide_allNext0" : function (id,value) {
          return {
            type : "addSlide_allNext0",
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
  "addSlide_allPrevious0" : function (id,value) {
          return {
            type : "addSlide_allPrevious0",
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
  "addSlide_inverseAllNext0" : function (id,value) {
          return {
            type : "addSlide_inverseAllNext0",
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
  "addSlide_inverseAllPrevious0" : function (id,value) {
          return {
            type : "addSlide_inverseAllPrevious0",
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
  "addSlide_inverseSelectNext" : function (id,value) {
          return {
            type : "addSlide_inverseSelectNext",
            id : id,
            value : value
          };
      },
  "addSlide_inverseSelectPrevious" : function (id,value) {
          return {
            type : "addSlide_inverseSelectPrevious",
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
  "addSlide_selectNext" : function (id,value) {
          return {
            type : "addSlide_selectNext",
            id : id,
            value : value
          };
      },
  "addSlide_selectPrevious" : function (id,value) {
          return {
            type : "addSlide_selectPrevious",
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
  "setSlideShow_slideNumbersVisible" : function (id,value) {
          return {
            type : "setSlideShow_slideNumbersVisible",
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
  "calculateSlide_nextVisible" : function (id) {
          return {
            type : "calculateSlide_nextVisible",
            id : id
          };
      },
  "calculateSlide_nextVisible_Many" : function (ids) {
          return {
            type : "calculateSlide_nextVisible_Many",
            id : ids
          };
      },
  "calculateSlide_prevVisible" : function (id) {
          return {
            type : "calculateSlide_prevVisible",
            id : id
          };
      },
  "calculateSlide_prevVisible_Many" : function (ids) {
          return {
            type : "calculateSlide_prevVisible_Many",
            id : ids
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
  "calculateSlide_allNext0" : function (id) {
          return {
            type : "calculateSlide_allNext0",
            id : id
          };
      },
  "calculateSlide_allNext0_Many" : function (ids) {
          return {
            type : "calculateSlide_allNext0_Many",
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
  "calculateSlide_allPrevious0" : function (id) {
          return {
            type : "calculateSlide_allPrevious0",
            id : id
          };
      },
  "calculateSlide_allPrevious0_Many" : function (ids) {
          return {
            type : "calculateSlide_allPrevious0_Many",
            id : ids
          };
      },
  "calculateSlide_selectNext" : function (id) {
          return {
            type : "calculateSlide_selectNext",
            id : id
          };
      },
  "calculateSlide_selectNext_Many" : function (ids) {
          return {
            type : "calculateSlide_selectNext_Many",
            id : ids
          };
      },
  "calculateSlide_selectPrevious" : function (id) {
          return {
            type : "calculateSlide_selectPrevious",
            id : id
          };
      },
  "calculateSlide_selectPrevious_Many" : function (ids) {
          return {
            type : "calculateSlide_selectPrevious_Many",
            id : ids
          };
      },
  "calculateSlideShow_slideNumbersVisible" : function (id) {
          return {
            type : "calculateSlideShow_slideNumbersVisible",
            id : id
          };
      },
  "calculateSlideShow_slideNumbersVisible_Many" : function (ids) {
          return {
            type : "calculateSlideShow_slideNumbersVisible_Many",
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
          Block : Lifted(function Block(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _3 = React.createElement("div",{
                  },scope.children);
                  var _0 = React.createElement("div",{
                    style : {
                      padding : "30px 0 30px 0"
                    }
                  },_3);
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
                    var calc = calculateSlide_selectPrevious(state,scope.slide);
                    state = calc.state;
                    _25 = calc.result;
                  } else {
                    _25 = constants.EMPTY_ARRAY;
                  }
                  var oldScope = scope;
                  var _29 = [];
                  for (var _30 = 0 ; _30 < _25.length ; _30++) {
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _25[_30]
                            });
                            var _28 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _28 = calc.result;
                            } else {
                              _28 = null;
                            }
                            var _26 = React.createElement("button",{
                              className : "slide-selector-item pure-button",
                              onClick : scope["setCurrent"](scope.s)
                            },_28);
                            _29.push(_.assign({
                            },_26,{
                              key : scope.s
                            }));
                        } ) ();
                  }
                  var _33 ;
                  if(scope.slide != null) {
                    var calc = calculateSlide_slideNumber(state,scope.slide);
                    state = calc.state;
                    _33 = calc.result;
                  } else {
                    _33 = null;
                  }
                  var _31 = React.createElement("span",{
                    className : "slide-selector-item pure-button pure-button-primary"
                  },_33);
                  var _34 ;
                  if(scope.slide != null) {
                    var calc = calculateSlide_selectNext(state,scope.slide);
                    state = calc.state;
                    _34 = calc.result;
                  } else {
                    _34 = constants.EMPTY_ARRAY;
                  }
                  var oldScope = scope;
                  var _39 = [];
                  for (var _40 = 0 ; _40 < _34.length ; _40++) {
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              s : _34[_40]
                            });
                            var _37 = getSlide_title(state,scope.s);
                            var _38 ;
                            if(scope.s != null) {
                              var calc = calculateSlide_slideNumber(state,scope.s);
                              state = calc.state;
                              _38 = calc.result;
                            } else {
                              _38 = null;
                            }
                            var _35 = React.createElement("button",{
                              className : "slide-selector-item pure-button",
                              title : _37,
                              onClick : scope["setCurrent"](scope.s)
                            },_38);
                            _39.push(_.assign({
                            },_35,{
                              key : scope.s
                            }));
                        } ) ();
                  }
                  var _43 = getSlide_next(state,scope.slide);
                  var _44 = expression.count(_43 == null ? constants.EMPTY_ARRAY : [_43]);
                  var _45 = _44 !== null ? _44 === 0 : null;
                  var _46 = getSlide_next(state,scope.slide);
                  var _41 = React.createElement("button",{
                    className : "pure-button",
                    disabled : _45,
                    onClick : scope["setCurrent"](_46)
                  },">");
                  var _18 = React.createElement("div",{
                    className : "slide-selector"
                  },_20,_29,_31,_39,_41);
                  var _0 = React.createElement("footer",{
                    className : "slide-footer"
                  },_2,_11,_18);
                  return {
                    result : _0,
                    state : state
                  };
              },["setCurrent","nextSlide","previousSlide"]),
          Center : Lifted(function Center(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _3 = React.createElement("div",{
                    style : {
                      minWidth : "0"
                    }
                  },scope.children);
                  var _0 = React.createElement("div",{
                    style : {
                      display : "flex",
                      width : "100%",
                      height : "100%",
                      justifyContent : "space-around"
                    }
                  },_3);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          List : Lifted(function List(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("ul",{
                    className : "slide-list"
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Slide : Lifted(function Slide(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["./examples/main"].TodoDocked,{
                  });
                  var _3 = React.createElement(Component.SlideHeader,{
                    slide : scope.slide
                  });
                  var _6 = React.createElement(Component.VSpace,{
                  });
                  var _7 = getSlide_content(state,scope.slide);
                  var _4 = React.createElement("div",{
                    className : "slide-content"
                  },_6,_7);
                  var _8 = React.createElement(Component.SlideFooter,{
                    slide : scope.slide
                  });
                  var _1 = React.createElement("div",{
                    className : "slide"
                  },_3,_4,_8);
                  return {
                    result : React.createElement('group',{
                    },_0,_1),
                    state : state
                  };
              },[]),
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
                    }
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          WideTwoColumn : Lifted(function WideTwoColumn(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement("div",{
                    className : "pure-u-2-3"
                  },scope.left);
                  var _4 = React.createElement("div",{
                    className : "pure-u-1-3"
                  },scope.right);
                  var _0 = React.createElement("div",{
                    className : "pure-g"
                  },_2,_4);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          ThreeColumn : Lifted(function ThreeColumn(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement("div",{
                    className : "pure-u-1-3"
                  },scope.left);
                  var _4 = React.createElement("div",{
                    className : "pure-u-1-3"
                  },scope.middle);
                  var _6 = React.createElement("div",{
                    className : "pure-u-1-3"
                  },scope.right);
                  var _0 = React.createElement("div",{
                    className : "pure-g"
                  },_2,_4,_6);
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
              },[])
        };
    } ) ();
module.exports.Component = Component;
function Init_init(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _411 = {
            id : pixiedustRuntime.generateUniqueId()
          };
          newState = newState.update("Slide",function (table) {
                  return table.set(_411.id,_411);
              });
          scoped(scope,{
            $this : _411.id
          },function (scope) {
                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                  newState = setSlide_title(newState,scope["$this"],"PixieDust: Declarative incremental user interfaces for IceDust");
                  var _412 = React.createElement("div",{
                  });
                  newState = setSlide_content(newState,scope["$this"],_412);
              });
          scoped(scope,{
            intro : _411.id
          },function (scope) {
                  scoped(scope,{
                    $this : scope.slideshow
                  },function (scope) {
                          newState = setSlideShow_current(newState,scope["$this"],scope.intro);
                      });
                  var _402 = {
                    id : pixiedustRuntime.generateUniqueId()
                  };
                  newState = newState.update("Slide",function (table) {
                          return table.set(_402.id,_402);
                      });
                  scoped(scope,{
                    $this : _402.id
                  },function (scope) {
                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                          newState = setSlide_previous(newState,scope["$this"],scope.intro);
                          newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                          var _404 = React.createElement(Component.FixedWidthImage,{
                            src : "/images/ui.svg",
                            width : 1000
                          });
                          var _403 = React.createElement(Component.Center,{
                          },_404);
                          newState = setSlide_content(newState,scope["$this"],_403);
                      });
                  scoped(scope,{
                    ui : _402.id
                  },function (scope) {
                          var _395 = {
                            id : pixiedustRuntime.generateUniqueId()
                          };
                          newState = newState.update("Slide",function (table) {
                                  return table.set(_395.id,_395);
                              });
                          scoped(scope,{
                            $this : _395.id
                          },function (scope) {
                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                  newState = setSlide_previous(newState,scope["$this"],scope.ui);
                                  newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                                  var _397 = React.createElement(Component.FixedWidthImage,{
                                    src : "/images/ui-mvc.svg",
                                    width : 1000
                                  });
                                  var _396 = React.createElement(Component.Center,{
                                  },_397);
                                  newState = setSlide_content(newState,scope["$this"],_396);
                              });
                          scoped(scope,{
                            uiMVC : _395.id
                          },function (scope) {
                                  var _388 = {
                                    id : pixiedustRuntime.generateUniqueId()
                                  };
                                  newState = newState.update("Slide",function (table) {
                                          return table.set(_388.id,_388);
                                      });
                                  scoped(scope,{
                                    $this : _388.id
                                  },function (scope) {
                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                          newState = setSlide_previous(newState,scope["$this"],scope.uiMVC);
                                          newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                                          var _390 = React.createElement(Component.FixedWidthImage,{
                                            src : "/images/ui-mvvm.svg",
                                            width : 1000
                                          });
                                          var _389 = React.createElement(Component.Center,{
                                          },_390);
                                          newState = setSlide_content(newState,scope["$this"],_389);
                                      });
                                  scoped(scope,{
                                    uiMVVM : _388.id
                                  },function (scope) {
                                          var _381 = {
                                            id : pixiedustRuntime.generateUniqueId()
                                          };
                                          newState = newState.update("Slide",function (table) {
                                                  return table.set(_381.id,_381);
                                              });
                                          scoped(scope,{
                                            $this : _381.id
                                          },function (scope) {
                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                  newState = setSlide_previous(newState,scope["$this"],scope.uiMVVM);
                                                  newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                                                  var _383 = React.createElement(Component.FixedWidthImage,{
                                                    src : "/images/ui-flux.svg",
                                                    width : 1000
                                                  });
                                                  var _382 = React.createElement(Component.Center,{
                                                  },_383);
                                                  newState = setSlide_content(newState,scope["$this"],_382);
                                              });
                                          scoped(scope,{
                                            uiFlux : _381.id
                                          },function (scope) {
                                                  var _374 = {
                                                    id : pixiedustRuntime.generateUniqueId()
                                                  };
                                                  newState = newState.update("Slide",function (table) {
                                                          return table.set(_374.id,_374);
                                                      });
                                                  scoped(scope,{
                                                    $this : _374.id
                                                  },function (scope) {
                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                          newState = setSlide_previous(newState,scope["$this"],scope.uiMVVM);
                                                          newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                                                          var _376 = React.createElement(Component.FixedWidthImage,{
                                                            src : "/images/ui-elm.svg",
                                                            width : 1000
                                                          });
                                                          var _375 = React.createElement(Component.Center,{
                                                          },_376);
                                                          newState = setSlide_content(newState,scope["$this"],_375);
                                                      });
                                                  scoped(scope,{
                                                    uiElm : _374.id
                                                  },function (scope) {
                                                          var _356 = {
                                                            id : pixiedustRuntime.generateUniqueId()
                                                          };
                                                          newState = newState.update("Slide",function (table) {
                                                                  return table.set(_356.id,_356);
                                                              });
                                                          scoped(scope,{
                                                            $this : _356.id
                                                          },function (scope) {
                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                  newState = setSlide_previous(newState,scope["$this"],scope.uiElm);
                                                                  newState = setSlide_title(newState,scope["$this"],"UI Framework properties");
                                                                  var _358 = React.createElement("li",{
                                                                  },"Incremental Rendering");
                                                                  var _360 = React.createElement("li",{
                                                                  },"Composable views");
                                                                  var _362 = React.createElement("li",{
                                                                  },"User input handling");
                                                                  var _364 = React.createElement("li",{
                                                                  },"(Incremental) derived values");
                                                                  var _366 = React.createElement("li",{
                                                                  },"Bidirectional mapping between data and view");
                                                                  var _368 = React.createElement("li",{
                                                                  },"Undo/redo (time travelling)");
                                                                  var _357 = React.createElement(Component.List,{
                                                                  },_358,_360,_362,_364,_366,_368);
                                                                  newState = setSlide_content(newState,scope["$this"],_357);
                                                              });
                                                          scoped(scope,{
                                                            uiProperties : _356.id
                                                          },function (scope) {
                                                                  var _348 = {
                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                  };
                                                                  newState = newState.update("Slide",function (table) {
                                                                          return table.set(_348.id,_348);
                                                                      });
                                                                  scoped(scope,{
                                                                    $this : _348.id
                                                                  },function (scope) {
                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                          newState = setSlide_previous(newState,scope["$this"],scope.uiProperties);
                                                                          newState = setSlide_title(newState,scope["$this"],"Scopegraph Visualizer");
                                                                          var _349 = React.createElement("iframe",{
                                                                            src : "scopegraph-visualizer/index.html",
                                                                            style : {
                                                                              width : "100%",
                                                                              height : "100%"
                                                                            }
                                                                          });
                                                                          newState = setSlide_content(newState,scope["$this"],_349);
                                                                      });
                                                                  scoped(scope,{
                                                                    scopegraphVisualizer : _348.id
                                                                  },function (scope) {
                                                                          var _337 = {
                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                          };
                                                                          newState = newState.update("Slide",function (table) {
                                                                                  return table.set(_337.id,_337);
                                                                              });
                                                                          scoped(scope,{
                                                                            $this : _337.id
                                                                          },function (scope) {
                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.scopegraphVisualizer);
                                                                                  newState = setSlide_title(newState,scope["$this"],"Scopegraph Visualizer");
                                                                                  var _341 = React.createElement("h2",{
                                                                                  },"Actions");
                                                                                  var _343 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                    language : "js",
                                                                                    url : "sources/scopegraph/scopegraph-action.js"
                                                                                  });
                                                                                  var _339 = React.createElement("div",{
                                                                                  },_341,_343);
                                                                                  var _338 = React.createElement(Component.ThreeColumn,{
                                                                                    left : _339,
                                                                                    middle : null,
                                                                                    right : null
                                                                                  });
                                                                                  newState = setSlide_content(newState,scope["$this"],_338);
                                                                              });
                                                                          scoped(scope,{
                                                                            scopegraphVisualizer2 : _337.id
                                                                          },function (scope) {
                                                                                  var _321 = {
                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                  };
                                                                                  newState = newState.update("Slide",function (table) {
                                                                                          return table.set(_321.id,_321);
                                                                                      });
                                                                                  scoped(scope,{
                                                                                    $this : _321.id
                                                                                  },function (scope) {
                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.scopegraphVisualizer2);
                                                                                          newState = setSlide_title(newState,scope["$this"],"Scopegraph Visualizer");
                                                                                          var _325 = React.createElement("h2",{
                                                                                          },"Actions");
                                                                                          var _327 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                            language : "js",
                                                                                            url : "sources/scopegraph/scopegraph-action.js"
                                                                                          });
                                                                                          var _323 = React.createElement("div",{
                                                                                          },_325,_327);
                                                                                          var _330 = React.createElement("h2",{
                                                                                          },"Reducer");
                                                                                          var _332 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                            language : "js",
                                                                                            url : "sources/scopegraph/scopegraph-reducer.js"
                                                                                          });
                                                                                          var _328 = React.createElement("div",{
                                                                                          },_330,_332);
                                                                                          var _322 = React.createElement(Component.ThreeColumn,{
                                                                                            left : _323,
                                                                                            middle : _328,
                                                                                            right : null
                                                                                          });
                                                                                          newState = setSlide_content(newState,scope["$this"],_322);
                                                                                      });
                                                                                  scoped(scope,{
                                                                                    scopegraphVisualizer3 : _321.id
                                                                                  },function (scope) {
                                                                                          var _300 = {
                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                          };
                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                  return table.set(_300.id,_300);
                                                                                              });
                                                                                          scoped(scope,{
                                                                                            $this : _300.id
                                                                                          },function (scope) {
                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.scopegraphVisualizer3);
                                                                                                  newState = setSlide_title(newState,scope["$this"],"Scopegraph Visualizer");
                                                                                                  var _304 = React.createElement("h2",{
                                                                                                  },"Actions");
                                                                                                  var _306 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                    language : "js",
                                                                                                    url : "sources/scopegraph/scopegraph-action.js"
                                                                                                  });
                                                                                                  var _302 = React.createElement("div",{
                                                                                                  },_304,_306);
                                                                                                  var _309 = React.createElement("h2",{
                                                                                                  },"Reducer");
                                                                                                  var _311 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                    language : "js",
                                                                                                    url : "sources/scopegraph/scopegraph-reducer.js"
                                                                                                  });
                                                                                                  var _307 = React.createElement("div",{
                                                                                                  },_309,_311);
                                                                                                  var _314 = React.createElement("h2",{
                                                                                                  },"Derived Values");
                                                                                                  var _316 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                    language : "js",
                                                                                                    url : "sources/scopegraph/scopegraph-selectors.js"
                                                                                                  });
                                                                                                  var _312 = React.createElement("div",{
                                                                                                  },_314,_316);
                                                                                                  var _301 = React.createElement(Component.ThreeColumn,{
                                                                                                    left : _302,
                                                                                                    middle : _307,
                                                                                                    right : _312
                                                                                                  });
                                                                                                  newState = setSlide_content(newState,scope["$this"],_301);
                                                                                              });
                                                                                          scoped(scope,{
                                                                                            scopegraphVisualizer4 : _300.id
                                                                                          },function (scope) {
                                                                                                  var _282 = {
                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                  };
                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                          return table.set(_282.id,_282);
                                                                                                      });
                                                                                                  scoped(scope,{
                                                                                                    $this : _282.id
                                                                                                  },function (scope) {
                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.scopegraphVisualizer4);
                                                                                                          newState = setSlide_title(newState,scope["$this"],"Derived values");
                                                                                                          var _287 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                            language : "pix",
                                                                                                            url : "sources/derived-value.ice"
                                                                                                          });
                                                                                                          var _285 = React.createElement("div",{
                                                                                                            className : "pure-u-1-3"
                                                                                                          },_287);
                                                                                                          var _290 = React.createElement("h2",{
                                                                                                          },"Reselect");
                                                                                                          var _292 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                            language : "js",
                                                                                                            url : "sources/derived-value.js"
                                                                                                          });
                                                                                                          var _293 = React.createElement("h2",{
                                                                                                          },"MobX");
                                                                                                          var _295 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                            language : "js",
                                                                                                            url : "sources/derived-value-mobx.js"
                                                                                                          });
                                                                                                          var _288 = React.createElement("div",{
                                                                                                            className : "pure-u-2-3"
                                                                                                          },_290,_292,_293,_295);
                                                                                                          var _283 = React.createElement("div",{
                                                                                                            className : "pure-g"
                                                                                                          },_285,_288);
                                                                                                          newState = setSlide_content(newState,scope["$this"],_283);
                                                                                                      });
                                                                                                  scoped(scope,{
                                                                                                    derivedValues : _282.id
                                                                                                  },function (scope) {
                                                                                                          var _275 = {
                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                          };
                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                  return table.set(_275.id,_275);
                                                                                                              });
                                                                                                          scoped(scope,{
                                                                                                            $this : _275.id
                                                                                                          },function (scope) {
                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.derivedValues);
                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Counter Example");
                                                                                                                  var _277 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                    language : "pix",
                                                                                                                    url : "sources/counter_model.ice"
                                                                                                                  });
                                                                                                                  var _276 = React.createElement(Component.TwoColumn,{
                                                                                                                    left : _277,
                                                                                                                    right : null
                                                                                                                  });
                                                                                                                  newState = setSlide_content(newState,scope["$this"],_276);
                                                                                                              });
                                                                                                          scoped(scope,{
                                                                                                            counter1 : _275.id
                                                                                                          },function (scope) {
                                                                                                                  var _265 = {
                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                  };
                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                          return table.set(_265.id,_265);
                                                                                                                      });
                                                                                                                  scoped(scope,{
                                                                                                                    $this : _265.id
                                                                                                                  },function (scope) {
                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.counter1);
                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Counter Example");
                                                                                                                          var _267 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                            language : "pix",
                                                                                                                            url : "sources/counter_model.ice"
                                                                                                                          });
                                                                                                                          var _270 = React.createElement(imports["./examples/main"].CounterExample,{
                                                                                                                          });
                                                                                                                          var _268 = React.createElement("div",{
                                                                                                                          },_270);
                                                                                                                          var _266 = React.createElement(Component.TwoColumn,{
                                                                                                                            left : _267,
                                                                                                                            right : _268
                                                                                                                          });
                                                                                                                          newState = setSlide_content(newState,scope["$this"],_266);
                                                                                                                      });
                                                                                                                  scoped(scope,{
                                                                                                                    counter2 : _265.id
                                                                                                                  },function (scope) {
                                                                                                                          var _253 = {
                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                          };
                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                  return table.set(_253.id,_253);
                                                                                                                              });
                                                                                                                          scoped(scope,{
                                                                                                                            $this : _253.id
                                                                                                                          },function (scope) {
                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.counter2);
                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Counter Example");
                                                                                                                                  var _255 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                    language : "pix",
                                                                                                                                    url : "sources/counter_model.ice"
                                                                                                                                  });
                                                                                                                                  var _258 = React.createElement(imports["./examples/main"].CounterExample,{
                                                                                                                                  });
                                                                                                                                  var _260 = React.createElement(Component.Image,{
                                                                                                                                    src : "/images/ui-no-interaction.svg"
                                                                                                                                  });
                                                                                                                                  var _259 = React.createElement(Component.Block,{
                                                                                                                                  },_260);
                                                                                                                                  var _256 = React.createElement("div",{
                                                                                                                                  },_258,_259);
                                                                                                                                  var _254 = React.createElement(Component.TwoColumn,{
                                                                                                                                    left : _255,
                                                                                                                                    right : _256
                                                                                                                                  });
                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_254);
                                                                                                                              });
                                                                                                                          scoped(scope,{
                                                                                                                            counter3 : _253.id
                                                                                                                          },function (scope) {
                                                                                                                                  var _241 = {
                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                  };
                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                          return table.set(_241.id,_241);
                                                                                                                                      });
                                                                                                                                  scoped(scope,{
                                                                                                                                    $this : _241.id
                                                                                                                                  },function (scope) {
                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.counter3);
                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Counter Example");
                                                                                                                                          var _243 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                            language : "pix",
                                                                                                                                            url : "sources/counter_template.pix"
                                                                                                                                          });
                                                                                                                                          var _246 = React.createElement(imports["./examples/main"].CounterExample,{
                                                                                                                                          });
                                                                                                                                          var _248 = React.createElement(Component.Image,{
                                                                                                                                            src : "/images/ui-no-interaction.svg"
                                                                                                                                          });
                                                                                                                                          var _247 = React.createElement(Component.Block,{
                                                                                                                                          },_248);
                                                                                                                                          var _244 = React.createElement("div",{
                                                                                                                                          },_246,_247);
                                                                                                                                          var _242 = React.createElement(Component.TwoColumn,{
                                                                                                                                            left : _243,
                                                                                                                                            right : _244
                                                                                                                                          });
                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_242);
                                                                                                                                      });
                                                                                                                                  scoped(scope,{
                                                                                                                                    counter4 : _241.id
                                                                                                                                  },function (scope) {
                                                                                                                                          var _229 = {
                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                          };
                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                  return table.set(_229.id,_229);
                                                                                                                                              });
                                                                                                                                          scoped(scope,{
                                                                                                                                            $this : _229.id
                                                                                                                                          },function (scope) {
                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.counter4);
                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Counter Example");
                                                                                                                                                  var _231 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                    language : "pix",
                                                                                                                                                    url : "sources/counter_template_components.pix"
                                                                                                                                                  });
                                                                                                                                                  var _234 = React.createElement(imports["./examples/main"].CounterExample,{
                                                                                                                                                  });
                                                                                                                                                  var _236 = React.createElement(Component.Image,{
                                                                                                                                                    src : "/images/ui-no-interaction.svg"
                                                                                                                                                  });
                                                                                                                                                  var _235 = React.createElement(Component.Block,{
                                                                                                                                                  },_236);
                                                                                                                                                  var _232 = React.createElement("div",{
                                                                                                                                                  },_234,_235);
                                                                                                                                                  var _230 = React.createElement(Component.TwoColumn,{
                                                                                                                                                    left : _231,
                                                                                                                                                    right : _232
                                                                                                                                                  });
                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_230);
                                                                                                                                              });
                                                                                                                                          scoped(scope,{
                                                                                                                                            counter5 : _229.id
                                                                                                                                          },function (scope) {
                                                                                                                                                  var _217 = {
                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                  };
                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                          return table.set(_217.id,_217);
                                                                                                                                                      });
                                                                                                                                                  scoped(scope,{
                                                                                                                                                    $this : _217.id
                                                                                                                                                  },function (scope) {
                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.counter5);
                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Counter Example");
                                                                                                                                                          var _219 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                            language : "pix",
                                                                                                                                                            url : "sources/counter.pix"
                                                                                                                                                          });
                                                                                                                                                          var _222 = React.createElement(imports["./examples/main"].CounterExample,{
                                                                                                                                                          });
                                                                                                                                                          var _224 = React.createElement(Component.Image,{
                                                                                                                                                            src : "/images/ui-small.svg"
                                                                                                                                                          });
                                                                                                                                                          var _223 = React.createElement(Component.Block,{
                                                                                                                                                          },_224);
                                                                                                                                                          var _220 = React.createElement("div",{
                                                                                                                                                          },_222,_223);
                                                                                                                                                          var _218 = React.createElement(Component.TwoColumn,{
                                                                                                                                                            left : _219,
                                                                                                                                                            right : _220
                                                                                                                                                          });
                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_218);
                                                                                                                                                      });
                                                                                                                                                  scoped(scope,{
                                                                                                                                                    counter6 : _217.id
                                                                                                                                                  },function (scope) {
                                                                                                                                                          var _205 = {
                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                          };
                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                  return table.set(_205.id,_205);
                                                                                                                                                              });
                                                                                                                                                          scoped(scope,{
                                                                                                                                                            $this : _205.id
                                                                                                                                                          },function (scope) {
                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.counter6);
                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Counter Example");
                                                                                                                                                                  var _207 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                    language : "pix",
                                                                                                                                                                    url : "sources/counter.pix"
                                                                                                                                                                  });
                                                                                                                                                                  var _210 = React.createElement(imports["./examples/main"].CounterExample,{
                                                                                                                                                                  });
                                                                                                                                                                  var _212 = React.createElement(Component.Image,{
                                                                                                                                                                    src : "/images/counter_vdom.png"
                                                                                                                                                                  });
                                                                                                                                                                  var _211 = React.createElement(Component.Block,{
                                                                                                                                                                  },_212);
                                                                                                                                                                  var _208 = React.createElement("div",{
                                                                                                                                                                  },_210,_211);
                                                                                                                                                                  var _206 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                    left : _207,
                                                                                                                                                                    right : _208
                                                                                                                                                                  });
                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_206);
                                                                                                                                                              });
                                                                                                                                                          scoped(scope,{
                                                                                                                                                            counter7 : _205.id
                                                                                                                                                          },function (scope) {
                                                                                                                                                                  var _193 = {
                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                  };
                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                          return table.set(_193.id,_193);
                                                                                                                                                                      });
                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                    $this : _193.id
                                                                                                                                                                  },function (scope) {
                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.counter7);
                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Counter Example");
                                                                                                                                                                          var _195 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                            language : "pix",
                                                                                                                                                                            url : "sources/counter.pix"
                                                                                                                                                                          });
                                                                                                                                                                          var _198 = React.createElement(imports["./examples/main"].AddExample,{
                                                                                                                                                                          });
                                                                                                                                                                          var _199 = React.createElement(Component.VSpace,{
                                                                                                                                                                          });
                                                                                                                                                                          var _200 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                            language : "pix",
                                                                                                                                                                            url : "sources/add.pix"
                                                                                                                                                                          });
                                                                                                                                                                          var _196 = React.createElement("div",{
                                                                                                                                                                          },_198,_199,_200);
                                                                                                                                                                          var _194 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                            left : _195,
                                                                                                                                                                            right : _196
                                                                                                                                                                          });
                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_194);
                                                                                                                                                                      });
                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                    counter8 : _193.id
                                                                                                                                                                  },function (scope) {
                                                                                                                                                                          var _185 = {
                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                          };
                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                  return table.set(_185.id,_185);
                                                                                                                                                                              });
                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                            $this : _185.id
                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.counter8);
                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                  var _188 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                  });
                                                                                                                                                                                  var _186 = React.createElement("div",{
                                                                                                                                                                                  },_188);
                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_186);
                                                                                                                                                                              });
                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                            todo1 : _185.id
                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                  var _177 = {
                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                  };
                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                          return table.set(_177.id,_177);
                                                                                                                                                                                      });
                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                    $this : _177.id
                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo1);
                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                          var _179 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                            url : "sources/todo/todo1.pix"
                                                                                                                                                                                          });
                                                                                                                                                                                          var _180 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                          });
                                                                                                                                                                                          var _178 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                            left : _179,
                                                                                                                                                                                            right : _180
                                                                                                                                                                                          });
                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_178);
                                                                                                                                                                                      });
                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                    todo2 : _177.id
                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                          var _169 = {
                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                          };
                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                  return table.set(_169.id,_169);
                                                                                                                                                                                              });
                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                            $this : _169.id
                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo2);
                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                  var _171 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                    url : "sources/todo/todo2.pix"
                                                                                                                                                                                                  });
                                                                                                                                                                                                  var _172 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                  });
                                                                                                                                                                                                  var _170 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                    left : _171,
                                                                                                                                                                                                    right : _172
                                                                                                                                                                                                  });
                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_170);
                                                                                                                                                                                              });
                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                            todo3 : _169.id
                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                  var _161 = {
                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                  };
                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                          return table.set(_161.id,_161);
                                                                                                                                                                                                      });
                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                    $this : _161.id
                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo3);
                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                          var _163 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                            url : "sources/todo/todo3.pix"
                                                                                                                                                                                                          });
                                                                                                                                                                                                          var _164 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                          });
                                                                                                                                                                                                          var _162 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                            left : _163,
                                                                                                                                                                                                            right : _164
                                                                                                                                                                                                          });
                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_162);
                                                                                                                                                                                                      });
                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                    todo4 : _161.id
                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                          var _153 = {
                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                          };
                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                  return table.set(_153.id,_153);
                                                                                                                                                                                                              });
                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                            $this : _153.id
                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo4);
                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                  var _155 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                    url : "sources/todo/todo4.pix"
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                  var _156 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                  var _154 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                    left : _155,
                                                                                                                                                                                                                    right : _156
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_154);
                                                                                                                                                                                                              });
                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                            todo5 : _153.id
                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                  var _145 = {
                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                  };
                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                          return table.set(_145.id,_145);
                                                                                                                                                                                                                      });
                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                    $this : _145.id
                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo5);
                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                          var _147 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                            url : "sources/todo/todo5.pix"
                                                                                                                                                                                                                          });
                                                                                                                                                                                                                          var _148 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                          });
                                                                                                                                                                                                                          var _146 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                            left : _147,
                                                                                                                                                                                                                            right : _148
                                                                                                                                                                                                                          });
                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_146);
                                                                                                                                                                                                                      });
                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                    todo6 : _145.id
                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                          var _137 = {
                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                          };
                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                  return table.set(_137.id,_137);
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                            $this : _137.id
                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo6);
                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                                  var _139 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                    url : "sources/todo/todo6.pix"
                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                  var _140 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                  var _138 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                                    left : _139,
                                                                                                                                                                                                                                    right : _140
                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_138);
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                            todo7 : _137.id
                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                  var _129 = {
                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                          return table.set(_129.id,_129);
                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                    $this : _129.id
                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo7);
                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                                          var _131 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                            url : "sources/todo/todo7.pix"
                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                          var _132 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                          var _130 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                                            left : _131,
                                                                                                                                                                                                                                            right : _132
                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_130);
                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                    todo8 : _129.id
                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                          var _121 = {
                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                  return table.set(_121.id,_121);
                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                            $this : _121.id
                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo8);
                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                                                  var _123 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                    url : "sources/todo/todo8.pix"
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  var _124 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  var _122 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                                                    left : _123,
                                                                                                                                                                                                                                                    right : _124
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_122);
                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                            todo9 : _121.id
                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                  var _113 = {
                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                          return table.set(_113.id,_113);
                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                    $this : _113.id
                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo9);
                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                                                          var _115 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                            url : "sources/todo/todo9.pix"
                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                          var _116 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                          var _114 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                                                            left : _115,
                                                                                                                                                                                                                                                            right : _116
                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_114);
                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                    todo10 : _113.id
                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                          var _105 = {
                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                  return table.set(_105.id,_105);
                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                            $this : _105.id
                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo10);
                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                                                                  var _107 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                    url : "sources/todo/todo10.pix"
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _108 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _106 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                                                                    left : _107,
                                                                                                                                                                                                                                                                    right : _108
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_106);
                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                            todo11 : _105.id
                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                  var _97 = {
                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                          return table.set(_97.id,_97);
                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                    $this : _97.id
                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo11);
                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                                                                          var _99 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                            url : "sources/todo/todo11.pix"
                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                          var _100 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                          var _98 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                                                                            left : _99,
                                                                                                                                                                                                                                                                            right : _100
                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_98);
                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                    todo12 : _97.id
                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                          var _89 = {
                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                  return table.set(_89.id,_89);
                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                            $this : _89.id
                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo12);
                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                                                                                                                                                  var _91 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                                    url : "sources/todo/todo12.pix"
                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                  var _92 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                  var _90 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                                                                                                                                                    left : _91,
                                                                                                                                                                                                                                                                                    right : _92
                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_90);
                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                            todo13 : _89.id
                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                  var _80 = {
                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                          return table.set(_80.id,_80);
                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                    $this : _80.id
                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo13);
                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                                          var _83 = React.createElement(imports["./components/CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                                            language : "haskell",
                                                                                                                                                                                                                                                                                            code : "type Reducer state action = (state, action) -> state"
                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                          var _84 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                                                            language : "javascript",
                                                                                                                                                                                                                                                                                            url : "sources/store.js"
                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                          var _81 = React.createElement("div",{
                                                                                                                                                                                                                                                                                          },_83,_84);
                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_81);
                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                    store1 : _80.id
                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                          var _73 = {
                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                  return table.set(_73.id,_73);
                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                            $this : _73.id
                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store1);
                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                                                  var _75 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                                    src : "images/store0.svg",
                                                                                                                                                                                                                                                                                                    width : 800
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                  var _74 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                                                  },_75);
                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_74);
                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                            store2 : _73.id
                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                  var _66 = {
                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                          return table.set(_66.id,_66);
                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                    $this : _66.id
                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store2);
                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                                                          var _68 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                                            src : "images/store1.svg",
                                                                                                                                                                                                                                                                                                            width : 800
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _67 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                                                          },_68);
                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_67);
                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                    store3 : _66.id
                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                          var _59 = {
                                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                  return table.set(_59.id,_59);
                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                            $this : _59.id
                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store3);
                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                                                                  var _61 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                                                    src : "images/store2.svg",
                                                                                                                                                                                                                                                                                                                    width : 800
                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                  var _60 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                                                                  },_61);
                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_60);
                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                            store4 : _59.id
                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                  var _52 = {
                                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                          return table.set(_52.id,_52);
                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                    $this : _52.id
                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store4);
                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                                                                          var _54 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                                                            src : "images/store3.svg",
                                                                                                                                                                                                                                                                                                                            width : 800
                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                          var _53 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                                                                          },_54);
                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_53);
                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                    store5 : _52.id
                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                          var _45 = {
                                                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                                  return table.set(_45.id,_45);
                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                            $this : _45.id
                                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store5);
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                                                                                  var _47 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                                                                    src : "images/store4.svg",
                                                                                                                                                                                                                                                                                                                                    width : 800
                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                  var _46 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                                                                                  },_47);
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_46);
                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                            store6 : _45.id
                                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                                  var _22 = {
                                                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                                          return table.set(_22.id,_22);
                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                    $this : _22.id
                                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store6);
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Action types in PixieDust");
                                                                                                                                                                                                                                                                                                                                          var _26 = React.createElement("h3",{
                                                                                                                                                                                                                                                                                                                                          },"Update field (bidirectional mappings)");
                                                                                                                                                                                                                                                                                                                                          var _28 = React.createElement(imports["./components/CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                                                                                            language : "json",
                                                                                                                                                                                                                                                                                                                                            code : "{\"type\": \"setEntity_field\", \"id\": someId, \"value\": someValue}"
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _25 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                            left : _26,
                                                                                                                                                                                                                                                                                                                                            right : _28
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _30 = React.createElement("h3",{
                                                                                                                                                                                                                                                                                                                                          },"Component actions");
                                                                                                                                                                                                                                                                                                                                          var _32 = React.createElement(imports["./components/CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                                                                                            language : "json",
                                                                                                                                                                                                                                                                                                                                            code : "{\"type\": \"Component_action\", \"props\": [...], \"args\": [...]}"
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _29 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                            left : _30,
                                                                                                                                                                                                                                                                                                                                            right : _32
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _34 = React.createElement("h3",{
                                                                                                                                                                                                                                                                                                                                          },"Cache updates while rendering");
                                                                                                                                                                                                                                                                                                                                          var _36 = React.createElement(imports["./components/CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                                                                                            language : "json",
                                                                                                                                                                                                                                                                                                                                            code : "{\"type\": \"cacheUpdate[Component]\", \"updatedState\": state}"
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _33 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                            left : _34,
                                                                                                                                                                                                                                                                                                                                            right : _36
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _37 = React.createElement(Component.VSpace,{
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _39 = React.createElement(imports["./examples/main"].AddExample,{
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _40 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                                            url : "/sources/add.pix"
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _38 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                            left : _39,
                                                                                                                                                                                                                                                                                                                                            right : _40
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _23 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                                                          },_25,_29,_33,_37,_38);
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_23);
                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                    actions : _22.id
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
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.actions);
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Virtual DOM");
                                                                                                                                                                                                                                                                                                                                                  var _17 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                                                                                    src : "images/vdom.svg",
                                                                                                                                                                                                                                                                                                                                                    width : 1600
                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_17);
                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                            vdom : _16.id
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
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.vdom);
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Lazy rendering");
                                                                                                                                                                                                                                                                                                                                                          var _10 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                                                            url : "/sources/incometax.pix"
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          var _11 = React.createElement(imports["./examples/main"].IncomeTaxExample,{
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          var _9 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                                            left : _10,
                                                                                                                                                                                                                                                                                                                                                            right : _11
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_9);
                                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                    incometax1 : _8.id
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
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.incometax1);
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Lazy rendering");
                                                                                                                                                                                                                                                                                                                                                                  var _2 = React.createElement(imports["./components/CodeBlock"].CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                                                                                                                    url : "/sources/incometax.pix"
                                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                                  var _3 = React.createElement(imports["./examples/main"].IncomeTaxNoSummaryExample,{
                                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                                  var _1 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                                                    left : _2,
                                                                                                                                                                                                                                                                                                                                                                    right : _3
                                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_1);
                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                            incometax2 : _0.id
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
              });
      });
  return newState;
}

actions["Init_init"] = Init_init;
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