var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "CodeBlock" : require("./components/CodeBlock"),
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
  "SlideShow_showFooter" : immutable.Map(),
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
function getSlideShow_showFooter(state,id) {
  var _0 = state.get("SlideShow").get(id);
  if(_0 !== undefined) {
    _0 = _0.showFooter;
    if(_0 === undefined || _0 === null) {
      _0 = state.get("SlideShow_showFooter").get(id);
    }
  }
  return _0;
}

module.exports.getSlideShow_showFooter = getSlideShow_showFooter;
function getSlideShow_showFooter_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("SlideShow");
  var _2 = state.get("SlideShow_showFooter");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.showFooter;
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

module.exports.getSlideShow_showFooter_Many = getSlideShow_showFooter_Many;
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
function setSlideShow_showFooter(state,id,value) {
  state = invalidateSlideShow_showFooter(state,id);
  var prop = {
    showFooter : value
  };
  state = state.update("SlideShow",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setSlideShow_showFooter = setSlideShow_showFooter;
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
function invalidateSlideShow_showFooter(state,id) {
  state = state.update("SlideShow_showFooter",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateSlideShow_showFooter = invalidateSlideShow_showFooter;
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
function calculateSlideShow_showFooter(state,id) {
  var result = getSlideShow_showFooter(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            result = false;
            state = state.update("SlideShow_showFooter",function (table) {
                    return table.set(id,false);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSlideShow_showFooter = calculateSlideShow_showFooter;
function calculateSlideShow_showFooter_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSlideShow_showFooter(state,id);
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

module.exports.calculateSlideShow_showFooter_Many = calculateSlideShow_showFooter_Many;
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
  "setSlideShow_showFooter" : function (state,action) {
          return setSlideShow_showFooter(state,action.id,action.value);
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
  "calculateSlideShow_showFooter" : function (state,action) {
          return calculateSlideShow_showFooter(state,action.id).state;
      },
  "calculateSlideShow_showFooter_Many" : function (state,action) {
          return calculateSlideShow_showFooter_Many(state,action.ids).state;
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
  "setSlideShow_showFooter" : function (id,value) {
          return {
            type : "setSlideShow_showFooter",
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
  "calculateSlideShow_showFooter" : function (id) {
          return {
            type : "calculateSlideShow_showFooter",
            id : id
          };
      },
  "calculateSlideShow_showFooter_Many" : function (ids) {
          return {
            type : "calculateSlideShow_showFooter_Many",
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
          SlideFooter : Lifted(function SlideFooter(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _4 ;
                  var _1 = getSlide_previous(state,scope.slide);
                  var _2 = expression.count(_1 == null ? constants.EMPTY_ARRAY : [_1]);
                  var _3 = _2 !== null ? _2 !== 0 : null;
                  if(_3) {
                    _4 = scope.previousSlide;
                  } else {
                    _4 = null;
                  }
                  var _8 ;
                  var _5 = getSlide_next(state,scope.slide);
                  var _6 = expression.count(_5 == null ? constants.EMPTY_ARRAY : [_5]);
                  var _7 = _6 !== null ? _6 !== 0 : null;
                  if(_7) {
                    _8 = scope.nextSlide;
                  } else {
                    _8 = null;
                  }
                  var _0 = React.createElement(imports["./components/inputs"].KeyboardListener,{
                    onArrowLeft : _4,
                    onArrowRight : _8
                  });
                  var _50 ;
                  var _9 = getSlide_slideshow(state,scope.slide);
                  var _10 ;
                  if(_9 != null) {
                    var calc = calculateSlideShow_showFooter(state,_9);
                    state = calc.state;
                    _10 = calc.result;
                  } else {
                    _10 = null;
                  }
                  if(_10) {
                    var _17 ;
                    if(scope.slide != null) {
                      var calc = calculateSlide_slideNumber(state,scope.slide);
                      state = calc.state;
                      _17 = calc.result;
                    } else {
                      _17 = null;
                    }
                    var _18 = getSlide_slideshow(state,scope.slide);
                    var _19 ;
                    if(_18 != null) {
                      var calc = calculateSlideShow_totalSlides(state,_18);
                      state = calc.state;
                      _19 = calc.result;
                    } else {
                      _19 = null;
                    }
                    var _15 = React.createElement("span",{
                    },_17,"/",_19);
                    var _13 = React.createElement("div",{
                      className : "slide-count"
                    },_15);
                    var _24 = getSlide_previous(state,scope.slide);
                    var _25 = expression.count(_24 == null ? constants.EMPTY_ARRAY : [_24]);
                    var _26 = _25 !== null ? _25 === 0 : null;
                    var _27 = getSlide_previous(state,scope.slide);
                    var _22 = React.createElement("button",{
                      className : "pure-button",
                      disabled : _26,
                      onClick : scope["setCurrent"](_27)
                    },"<");
                    var _27 ;
                    if(scope.slide != null) {
                      var calc = calculateSlide_selectPrevious(state,scope.slide);
                      state = calc.state;
                      _27 = calc.result;
                    } else {
                      _27 = constants.EMPTY_ARRAY;
                    }
                    var oldScope = scope;
                    var _32 = [];
                    for (var _33 = 0 ; _33 < _27.length ; _33++) {
                       ( function () {
                              var scope = _.assign({
                              },oldScope,{
                                s : _27[_33]
                              });
                              var _30 = getSlide_title(state,scope.s);
                              var _31 ;
                              if(scope.s != null) {
                                var calc = calculateSlide_slideNumber(state,scope.s);
                                state = calc.state;
                                _31 = calc.result;
                              } else {
                                _31 = null;
                              }
                              var _28 = React.createElement("button",{
                                className : "slide-selector-item pure-button",
                                title : _30,
                                onClick : scope["setCurrent"](scope.s)
                              },_31);
                              _32.push(_.assign({
                              },_28,{
                                key : scope.s
                              }));
                          } ) ();
                    }
                    var _36 = getSlide_title(state,scope.slide);
                    var _37 ;
                    if(scope.slide != null) {
                      var calc = calculateSlide_slideNumber(state,scope.slide);
                      state = calc.state;
                      _37 = calc.result;
                    } else {
                      _37 = null;
                    }
                    var _34 = React.createElement("span",{
                      className : "slide-selector-item pure-button pure-button-primary",
                      title : _36
                    },_37);
                    var _38 ;
                    if(scope.slide != null) {
                      var calc = calculateSlide_selectNext(state,scope.slide);
                      state = calc.state;
                      _38 = calc.result;
                    } else {
                      _38 = constants.EMPTY_ARRAY;
                    }
                    var oldScope = scope;
                    var _43 = [];
                    for (var _44 = 0 ; _44 < _38.length ; _44++) {
                       ( function () {
                              var scope = _.assign({
                              },oldScope,{
                                s : _38[_44]
                              });
                              var _41 = getSlide_title(state,scope.s);
                              var _42 ;
                              if(scope.s != null) {
                                var calc = calculateSlide_slideNumber(state,scope.s);
                                state = calc.state;
                                _42 = calc.result;
                              } else {
                                _42 = null;
                              }
                              var _39 = React.createElement("button",{
                                className : "slide-selector-item pure-button",
                                title : _41,
                                onClick : scope["setCurrent"](scope.s)
                              },_42);
                              _43.push(_.assign({
                              },_39,{
                                key : scope.s
                              }));
                          } ) ();
                    }
                    var _47 = getSlide_next(state,scope.slide);
                    var _48 = expression.count(_47 == null ? constants.EMPTY_ARRAY : [_47]);
                    var _49 = _48 !== null ? _48 === 0 : null;
                    var _50 = getSlide_next(state,scope.slide);
                    var _45 = React.createElement("button",{
                      className : "pure-button",
                      disabled : _49,
                      onClick : scope["setCurrent"](_50)
                    },">");
                    var _20 = React.createElement("div",{
                      className : "slide-selector"
                    },_22,_32,_34,_43,_45);
                    var _11 = React.createElement("footer",{
                      className : "slide-footer"
                    },_13,_20);
                    _50 = _11;
                  } else {
                    _50 = null;
                  }
                  return {
                    result : React.createElement('group',{
                    },_0,_50),
                    state : state
                  };
              },["setCurrent","nextSlide","previousSlide"]),
          CodeBlockFetchSmall : Lifted(function CodeBlockFetchSmall(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["CodeBlock"].CodeBlockFetch,{
                    language : scope.language,
                    url : scope.url,
                    className : "font-small"
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          WideTwoColumn : Lifted(function WideTwoColumn(props,state) {
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
          Slide : Lifted(function Slide(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement(Component.SlideHeader,{
                    slide : scope.slide
                  });
                  var _5 = React.createElement(Component.VSpace,{
                  });
                  var _6 = getSlide_content(state,scope.slide);
                  var _3 = React.createElement("div",{
                    className : "slide-content"
                  },_5,_6);
                  var _7 = React.createElement(Component.SlideFooter,{
                    slide : scope.slide
                  });
                  var _0 = React.createElement("div",{
                    className : "slide"
                  },_2,_3,_7);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          TwoColumn : Lifted(function TwoColumn(props,state) {
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
          Init : Lifted(function Init(props,state) {
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
          CodeBlockFetchTiny : Lifted(function CodeBlockFetchTiny(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["CodeBlock"].CodeBlockFetch,{
                    language : scope.language,
                    url : scope.url,
                    className : "font-tiny"
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Center : Lifted(function Center(props,state) {
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
                      maxWidth : "90%",
                      maxHeight : "90%",
                      justifyContent : "space-around"
                    }
                  },_3);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Image : Lifted(function Image(props,state) {
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
          CodeBlockFetch : Lifted(function CodeBlockFetch(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["CodeBlock"].CodeBlockFetch,{
                    language : scope.language,
                    url : scope.url,
                    className : "font-normal"
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Block : Lifted(function Block(props,state) {
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
          VSpace : Lifted(function VSpace(props,state) {
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
          List : Lifted(function List(props,state) {
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
          SlideHeader : Lifted(function SlideHeader(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _4 = getSlide_title(state,scope.slide);
                  var _2 = React.createElement("h1",{
                  },_4);
                  var _5 = React.createElement("hr",{
                  });
                  var _0 = React.createElement("div",{
                    className : "slide-header",
                    onClick : scope["toggleFooter"]()
                  },_2,_5);
                  return {
                    result : _0,
                    state : state
                  };
              },["toggleFooter"]),
          FourColumn : Lifted(function FourColumn(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement("div",{
                    className : "pure-u-1-4"
                  },scope.v1);
                  var _4 = React.createElement("div",{
                    className : "pure-u-1-4"
                  },scope.v2);
                  var _6 = React.createElement("div",{
                    className : "pure-u-1-4"
                  },scope.v3);
                  var _8 = React.createElement("div",{
                    className : "pure-u-1-4"
                  },scope.v4);
                  var _0 = React.createElement("div",{
                    className : "pure-g"
                  },_2,_4,_6,_8);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Main : Lifted(function Main(props,state) {
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
          FiveColumn : Lifted(function FiveColumn(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement("div",{
                    className : "pure-u-1-5"
                  },scope.v1);
                  var _4 = React.createElement("div",{
                    className : "pure-u-1-5"
                  },scope.v2);
                  var _6 = React.createElement("div",{
                    className : "pure-u-1-5"
                  },scope.v3);
                  var _8 = React.createElement("div",{
                    className : "pure-u-1-5"
                  },scope.v4);
                  var _10 = React.createElement("div",{
                    className : "pure-u-1-5"
                  },scope.v5);
                  var _0 = React.createElement("div",{
                    className : "pure-g"
                  },_2,_4,_6,_8,_10);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          FixedWidth : Lifted(function FixedWidth(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("div",{
                    style : {
                      width : scope.width
                    }
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          FixedWidthImage : Lifted(function FixedWidthImage(props,state) {
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
          ThreeColumn : Lifted(function ThreeColumn(props,state) {
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
          var _391 = {
            id : pixiedustRuntime.generateUniqueId()
          };
          newState = newState.update("Slide",function (table) {
                  return table.set(_391.id,_391);
              });
          scoped(scope,{
            $this : _391.id
          },function (scope) {
                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                  newState = setSlide_title(newState,scope["$this"],"PixieDust: Declarative incremental user interfaces for IceDust");
                  var _394 = React.createElement(imports["./examples/main"].TodoWithData,{
                  });
                  var _393 = React.createElement(Component.FixedWidth,{
                    width : 800
                  },_394);
                  var _392 = React.createElement(Component.Center,{
                  },_393);
                  newState = setSlide_content(newState,scope["$this"],_392);
              });
          scoped(scope,{
            intro : _391.id
          },function (scope) {
                  scoped(scope,{
                    $this : scope.slideshow
                  },function (scope) {
                          newState = setSlideShow_current(newState,scope["$this"],scope.intro);
                      });
                  var _382 = {
                    id : pixiedustRuntime.generateUniqueId()
                  };
                  newState = newState.update("Slide",function (table) {
                          return table.set(_382.id,_382);
                      });
                  scoped(scope,{
                    $this : _382.id
                  },function (scope) {
                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                          newState = setSlide_previous(newState,scope["$this"],scope.intro);
                          newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                          var _384 = React.createElement(Component.FixedWidthImage,{
                            src : "images/ui.svg",
                            width : 600
                          });
                          var _383 = React.createElement(Component.TwoColumn,{
                            left : _384,
                            right : null
                          });
                          newState = setSlide_content(newState,scope["$this"],_383);
                      });
                  scoped(scope,{
                    ui : _382.id
                  },function (scope) {
                          var _375 = {
                            id : pixiedustRuntime.generateUniqueId()
                          };
                          newState = newState.update("Slide",function (table) {
                                  return table.set(_375.id,_375);
                              });
                          scoped(scope,{
                            $this : _375.id
                          },function (scope) {
                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                  newState = setSlide_previous(newState,scope["$this"],scope.ui);
                                  newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                                  var _377 = React.createElement(Component.FixedWidthImage,{
                                    src : "images/ui-extended.svg",
                                    width : 600
                                  });
                                  var _376 = React.createElement(Component.TwoColumn,{
                                    left : _377,
                                    right : null
                                  });
                                  newState = setSlide_content(newState,scope["$this"],_376);
                              });
                          scoped(scope,{
                            uiExtended : _375.id
                          },function (scope) {
                                  var _355 = {
                                    id : pixiedustRuntime.generateUniqueId()
                                  };
                                  newState = newState.update("Slide",function (table) {
                                          return table.set(_355.id,_355);
                                      });
                                  scoped(scope,{
                                    $this : _355.id
                                  },function (scope) {
                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                          newState = setSlide_previous(newState,scope["$this"],scope.uiExtended);
                                          newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                                          var _357 = React.createElement(Component.FixedWidthImage,{
                                            src : "images/ui-extended.svg",
                                            width : 600
                                          });
                                          var _359 = React.createElement("li",{
                                          },"Incremental Rendering");
                                          var _361 = React.createElement("li",{
                                          },"Composable views");
                                          var _363 = React.createElement("li",{
                                          },"User input handling");
                                          var _365 = React.createElement("li",{
                                          },"(Incremental) derived values");
                                          var _367 = React.createElement("li",{
                                          },"Bidirectional mapping between data and view");
                                          var _369 = React.createElement("li",{
                                          },"Undo/redo (time travelling)");
                                          var _358 = React.createElement(Component.List,{
                                          },_359,_361,_363,_365,_367,_369);
                                          var _356 = React.createElement(Component.TwoColumn,{
                                            left : _357,
                                            right : _358
                                          });
                                          newState = setSlide_content(newState,scope["$this"],_356);
                                      });
                                  scoped(scope,{
                                    uiExtended2 : _355.id
                                  },function (scope) {
                                          var _347 = {
                                            id : pixiedustRuntime.generateUniqueId()
                                          };
                                          newState = newState.update("Slide",function (table) {
                                                  return table.set(_347.id,_347);
                                              });
                                          scoped(scope,{
                                            $this : _347.id
                                          },function (scope) {
                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                  newState = setSlide_previous(newState,scope["$this"],scope.uiExtended2);
                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                  var _350 = React.createElement(imports["./examples/main"].TodoExample,{
                                                  });
                                                  var _349 = React.createElement(Component.FixedWidth,{
                                                    width : 800
                                                  },_350);
                                                  var _348 = React.createElement(Component.Center,{
                                                  },_349);
                                                  newState = setSlide_content(newState,scope["$this"],_348);
                                              });
                                          scoped(scope,{
                                            todo : _347.id
                                          },function (scope) {
                                                  var _336 = {
                                                    id : pixiedustRuntime.generateUniqueId()
                                                  };
                                                  newState = newState.update("Slide",function (table) {
                                                          return table.set(_336.id,_336);
                                                      });
                                                  scoped(scope,{
                                                    $this : _336.id
                                                  },function (scope) {
                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo);
                                                          newState = setSlide_title(newState,scope["$this"],"Todo.js");
                                                          var _338 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/reducer.js"
                                                          });
                                                          var _339 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/view1.js"
                                                          });
                                                          var _340 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/view2.js"
                                                          });
                                                          var _341 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/view3.js"
                                                          });
                                                          var _342 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/view4.js"
                                                          });
                                                          var _337 = React.createElement(Component.FiveColumn,{
                                                            v1 : _338,
                                                            v2 : _339,
                                                            v3 : _340,
                                                            v4 : _341,
                                                            v5 : _342
                                                          });
                                                          newState = setSlide_content(newState,scope["$this"],_337);
                                                      });
                                                  scoped(scope,{
                                                    todoRedux : _336.id
                                                  },function (scope) {
                                                          var _329 = {
                                                            id : pixiedustRuntime.generateUniqueId()
                                                          };
                                                          newState = newState.update("Slide",function (table) {
                                                                  return table.set(_329.id,_329);
                                                              });
                                                          scoped(scope,{
                                                            $this : _329.id
                                                          },function (scope) {
                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todoRedux);
                                                                  newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                  var _331 = React.createElement(Component.CodeBlockFetch,{
                                                                    language : "pix",
                                                                    url : "sources/todo/todo1.pix"
                                                                  });
                                                                  var _330 = React.createElement(Component.WideTwoColumn,{
                                                                    left : _331,
                                                                    right : null
                                                                  });
                                                                  newState = setSlide_content(newState,scope["$this"],_330);
                                                              });
                                                          scoped(scope,{
                                                            todo1 : _329.id
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
                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo1);
                                                                          newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                          var _323 = React.createElement(Component.CodeBlockFetch,{
                                                                            language : "pix",
                                                                            url : "sources/todo/todo2.pix"
                                                                          });
                                                                          var _324 = React.createElement(imports["./examples/main"].Todo2,{
                                                                          });
                                                                          var _322 = React.createElement(Component.WideTwoColumn,{
                                                                            left : _323,
                                                                            right : _324
                                                                          });
                                                                          newState = setSlide_content(newState,scope["$this"],_322);
                                                                      });
                                                                  scoped(scope,{
                                                                    todo2 : _321.id
                                                                  },function (scope) {
                                                                          var _313 = {
                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                          };
                                                                          newState = newState.update("Slide",function (table) {
                                                                                  return table.set(_313.id,_313);
                                                                              });
                                                                          scoped(scope,{
                                                                            $this : _313.id
                                                                          },function (scope) {
                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo2);
                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                                  var _315 = React.createElement(Component.CodeBlockFetch,{
                                                                                    language : "pix",
                                                                                    url : "sources/todo/todo3.pix"
                                                                                  });
                                                                                  var _316 = React.createElement(imports["./examples/main"].Todo3,{
                                                                                  });
                                                                                  var _314 = React.createElement(Component.WideTwoColumn,{
                                                                                    left : _315,
                                                                                    right : _316
                                                                                  });
                                                                                  newState = setSlide_content(newState,scope["$this"],_314);
                                                                              });
                                                                          scoped(scope,{
                                                                            todo3 : _313.id
                                                                          },function (scope) {
                                                                                  var _305 = {
                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                  };
                                                                                  newState = newState.update("Slide",function (table) {
                                                                                          return table.set(_305.id,_305);
                                                                                      });
                                                                                  scoped(scope,{
                                                                                    $this : _305.id
                                                                                  },function (scope) {
                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo3);
                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                                          var _307 = React.createElement(Component.CodeBlockFetch,{
                                                                                            language : "pix",
                                                                                            url : "sources/todo/todo4.pix"
                                                                                          });
                                                                                          var _308 = React.createElement(imports["./examples/main"].Todo4,{
                                                                                          });
                                                                                          var _306 = React.createElement(Component.WideTwoColumn,{
                                                                                            left : _307,
                                                                                            right : _308
                                                                                          });
                                                                                          newState = setSlide_content(newState,scope["$this"],_306);
                                                                                      });
                                                                                  scoped(scope,{
                                                                                    todo4 : _305.id
                                                                                  },function (scope) {
                                                                                          var _297 = {
                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                          };
                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                  return table.set(_297.id,_297);
                                                                                              });
                                                                                          scoped(scope,{
                                                                                            $this : _297.id
                                                                                          },function (scope) {
                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo4);
                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                                                  var _299 = React.createElement(Component.CodeBlockFetch,{
                                                                                                    language : "pix",
                                                                                                    url : "sources/todo/todo5.pix"
                                                                                                  });
                                                                                                  var _300 = React.createElement(imports["./examples/main"].Todo5,{
                                                                                                  });
                                                                                                  var _298 = React.createElement(Component.WideTwoColumn,{
                                                                                                    left : _299,
                                                                                                    right : _300
                                                                                                  });
                                                                                                  newState = setSlide_content(newState,scope["$this"],_298);
                                                                                              });
                                                                                          scoped(scope,{
                                                                                            todo5 : _297.id
                                                                                          },function (scope) {
                                                                                                  var _289 = {
                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                  };
                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                          return table.set(_289.id,_289);
                                                                                                      });
                                                                                                  scoped(scope,{
                                                                                                    $this : _289.id
                                                                                                  },function (scope) {
                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo5);
                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                                                          var _291 = React.createElement(Component.CodeBlockFetch,{
                                                                                                            language : "pix",
                                                                                                            url : "sources/todo/todo6.pix"
                                                                                                          });
                                                                                                          var _292 = React.createElement(imports["./examples/main"].Todo6,{
                                                                                                          });
                                                                                                          var _290 = React.createElement(Component.WideTwoColumn,{
                                                                                                            left : _291,
                                                                                                            right : _292
                                                                                                          });
                                                                                                          newState = setSlide_content(newState,scope["$this"],_290);
                                                                                                      });
                                                                                                  scoped(scope,{
                                                                                                    todo6 : _289.id
                                                                                                  },function (scope) {
                                                                                                          var _281 = {
                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                          };
                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                  return table.set(_281.id,_281);
                                                                                                              });
                                                                                                          scoped(scope,{
                                                                                                            $this : _281.id
                                                                                                          },function (scope) {
                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo6);
                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                                                                  var _283 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                    language : "pix",
                                                                                                                    url : "sources/todo/todo7.pix"
                                                                                                                  });
                                                                                                                  var _284 = React.createElement(imports["./examples/main"].Todo7,{
                                                                                                                  });
                                                                                                                  var _282 = React.createElement(Component.WideTwoColumn,{
                                                                                                                    left : _283,
                                                                                                                    right : _284
                                                                                                                  });
                                                                                                                  newState = setSlide_content(newState,scope["$this"],_282);
                                                                                                              });
                                                                                                          scoped(scope,{
                                                                                                            todo7 : _281.id
                                                                                                          },function (scope) {
                                                                                                                  var _273 = {
                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                  };
                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                          return table.set(_273.id,_273);
                                                                                                                      });
                                                                                                                  scoped(scope,{
                                                                                                                    $this : _273.id
                                                                                                                  },function (scope) {
                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo7);
                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                                                                          var _275 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                            language : "pix",
                                                                                                                            url : "sources/todo/todo8.pix"
                                                                                                                          });
                                                                                                                          var _276 = React.createElement(imports["./examples/main"].Todo8,{
                                                                                                                          });
                                                                                                                          var _274 = React.createElement(Component.WideTwoColumn,{
                                                                                                                            left : _275,
                                                                                                                            right : _276
                                                                                                                          });
                                                                                                                          newState = setSlide_content(newState,scope["$this"],_274);
                                                                                                                      });
                                                                                                                  scoped(scope,{
                                                                                                                    todo8 : _273.id
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
                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo8);
                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                                                                                  var _267 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                    language : "pix",
                                                                                                                                    url : "sources/todo/todo9.pix"
                                                                                                                                  });
                                                                                                                                  var _268 = React.createElement(imports["./examples/main"].Todo9,{
                                                                                                                                  });
                                                                                                                                  var _266 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                    left : _267,
                                                                                                                                    right : _268
                                                                                                                                  });
                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_266);
                                                                                                                              });
                                                                                                                          scoped(scope,{
                                                                                                                            todo9 : _265.id
                                                                                                                          },function (scope) {
                                                                                                                                  var _257 = {
                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                  };
                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                          return table.set(_257.id,_257);
                                                                                                                                      });
                                                                                                                                  scoped(scope,{
                                                                                                                                    $this : _257.id
                                                                                                                                  },function (scope) {
                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo9);
                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo.pix");
                                                                                                                                          var _259 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                            language : "pix",
                                                                                                                                            url : "sources/todo/todo10.pix"
                                                                                                                                          });
                                                                                                                                          var _260 = React.createElement(imports["./examples/main"].Todo10,{
                                                                                                                                          });
                                                                                                                                          var _258 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                            left : _259,
                                                                                                                                            right : _260
                                                                                                                                          });
                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_258);
                                                                                                                                      });
                                                                                                                                  scoped(scope,{
                                                                                                                                    todo10 : _257.id
                                                                                                                                  },function (scope) {
                                                                                                                                          var _250 = {
                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                          };
                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                  return table.set(_250.id,_250);
                                                                                                                                              });
                                                                                                                                          scoped(scope,{
                                                                                                                                            $this : _250.id
                                                                                                                                          },function (scope) {
                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo10);
                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Model");
                                                                                                                                                  var _252 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                    language : "pix",
                                                                                                                                                    url : "sources/runtime/entitymapping.pix"
                                                                                                                                                  });
                                                                                                                                                  var _251 = React.createElement(Component.TwoColumn,{
                                                                                                                                                    left : _252,
                                                                                                                                                    right : null
                                                                                                                                                  });
                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_251);
                                                                                                                                              });
                                                                                                                                          scoped(scope,{
                                                                                                                                            immutable1 : _250.id
                                                                                                                                          },function (scope) {
                                                                                                                                                  var _240 = {
                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                  };
                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                          return table.set(_240.id,_240);
                                                                                                                                                      });
                                                                                                                                                  scoped(scope,{
                                                                                                                                                    $this : _240.id
                                                                                                                                                  },function (scope) {
                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.immutable1);
                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Model");
                                                                                                                                                          var _244 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                            language : "pix",
                                                                                                                                                            url : "sources/runtime/entitymapping.pix"
                                                                                                                                                          });
                                                                                                                                                          var _245 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                            src : "images/foo.svg",
                                                                                                                                                            width : 700
                                                                                                                                                          });
                                                                                                                                                          var _242 = React.createElement("div",{
                                                                                                                                                          },_244,_245);
                                                                                                                                                          var _241 = React.createElement(Component.TwoColumn,{
                                                                                                                                                            left : _242,
                                                                                                                                                            right : null
                                                                                                                                                          });
                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_241);
                                                                                                                                                      });
                                                                                                                                                  scoped(scope,{
                                                                                                                                                    immutable2 : _240.id
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
                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.immutable2);
                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Model");
                                                                                                                                                                  var _233 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                    language : "pix",
                                                                                                                                                                    url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                  });
                                                                                                                                                                  var _234 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                    src : "images/foo.svg",
                                                                                                                                                                    width : 700
                                                                                                                                                                  });
                                                                                                                                                                  var _231 = React.createElement("div",{
                                                                                                                                                                  },_233,_234);
                                                                                                                                                                  var _235 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                    language : "js",
                                                                                                                                                                    url : "sources/runtime/entitymapping.js"
                                                                                                                                                                  });
                                                                                                                                                                  var _230 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                    left : _231,
                                                                                                                                                                    right : _235
                                                                                                                                                                  });
                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_230);
                                                                                                                                                              });
                                                                                                                                                          scoped(scope,{
                                                                                                                                                            immutable3 : _229.id
                                                                                                                                                          },function (scope) {
                                                                                                                                                                  var _218 = {
                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                  };
                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                          return table.set(_218.id,_218);
                                                                                                                                                                      });
                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                    $this : _218.id
                                                                                                                                                                  },function (scope) {
                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.immutable3);
                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Getter");
                                                                                                                                                                          var _222 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                            language : "pix",
                                                                                                                                                                            url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                          });
                                                                                                                                                                          var _223 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                            src : "images/foo.svg",
                                                                                                                                                                            width : 700
                                                                                                                                                                          });
                                                                                                                                                                          var _220 = React.createElement("div",{
                                                                                                                                                                          },_222,_223);
                                                                                                                                                                          var _224 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                            language : "js",
                                                                                                                                                                            url : "sources/runtime/getter.js"
                                                                                                                                                                          });
                                                                                                                                                                          var _219 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                            left : _220,
                                                                                                                                                                            right : _224
                                                                                                                                                                          });
                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_219);
                                                                                                                                                                      });
                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                    getter : _218.id
                                                                                                                                                                  },function (scope) {
                                                                                                                                                                          var _207 = {
                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                          };
                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                  return table.set(_207.id,_207);
                                                                                                                                                                              });
                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                            $this : _207.id
                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.getter);
                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Calculate");
                                                                                                                                                                                  var _211 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                    url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                                  });
                                                                                                                                                                                  var _212 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                    src : "images/foo.svg",
                                                                                                                                                                                    width : 700
                                                                                                                                                                                  });
                                                                                                                                                                                  var _209 = React.createElement("div",{
                                                                                                                                                                                  },_211,_212);
                                                                                                                                                                                  var _213 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                    language : "js",
                                                                                                                                                                                    url : "sources/runtime/calculate.js"
                                                                                                                                                                                  });
                                                                                                                                                                                  var _208 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                    left : _209,
                                                                                                                                                                                    right : _213
                                                                                                                                                                                  });
                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_208);
                                                                                                                                                                              });
                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                            calculate : _207.id
                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                  var _196 = {
                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                  };
                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                          return table.set(_196.id,_196);
                                                                                                                                                                                      });
                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                    $this : _196.id
                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.calculate);
                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Setter");
                                                                                                                                                                                          var _200 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                            url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                                          });
                                                                                                                                                                                          var _201 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                            src : "images/foo.svg",
                                                                                                                                                                                            width : 700
                                                                                                                                                                                          });
                                                                                                                                                                                          var _198 = React.createElement("div",{
                                                                                                                                                                                          },_200,_201);
                                                                                                                                                                                          var _202 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                            language : "js",
                                                                                                                                                                                            url : "sources/runtime/setter.js"
                                                                                                                                                                                          });
                                                                                                                                                                                          var _197 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                            left : _198,
                                                                                                                                                                                            right : _202
                                                                                                                                                                                          });
                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_197);
                                                                                                                                                                                      });
                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                    setter : _196.id
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
                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.setter);
                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Invalidate");
                                                                                                                                                                                                  var _189 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                    url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                                                  });
                                                                                                                                                                                                  var _190 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                    src : "images/foo.svg",
                                                                                                                                                                                                    width : 700
                                                                                                                                                                                                  });
                                                                                                                                                                                                  var _187 = React.createElement("div",{
                                                                                                                                                                                                  },_189,_190);
                                                                                                                                                                                                  var _191 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                    language : "js",
                                                                                                                                                                                                    url : "sources/runtime/invalidate.js"
                                                                                                                                                                                                  });
                                                                                                                                                                                                  var _186 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                    left : _187,
                                                                                                                                                                                                    right : _191
                                                                                                                                                                                                  });
                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_186);
                                                                                                                                                                                              });
                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                            invalidate : _185.id
                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                  var _178 = {
                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                  };
                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                          return table.set(_178.id,_178);
                                                                                                                                                                                                      });
                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                    $this : _178.id
                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.invalidate);
                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Actions");
                                                                                                                                                                                                          var _180 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                            src : "images/reducer1.svg",
                                                                                                                                                                                                            width : 600
                                                                                                                                                                                                          });
                                                                                                                                                                                                          var _179 = React.createElement(Component.Center,{
                                                                                                                                                                                                          },_180);
                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_179);
                                                                                                                                                                                                      });
                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                    reducer1 : _178.id
                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                          var _171 = {
                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                          };
                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                  return table.set(_171.id,_171);
                                                                                                                                                                                                              });
                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                            $this : _171.id
                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.reducer1);
                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Actions");
                                                                                                                                                                                                                  var _173 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                    src : "images/reducer2.svg",
                                                                                                                                                                                                                    width : 600
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                  var _172 = React.createElement(Component.Center,{
                                                                                                                                                                                                                  },_173);
                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_172);
                                                                                                                                                                                                              });
                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                            reducer2 : _171.id
                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                  var _164 = {
                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                  };
                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                          return table.set(_164.id,_164);
                                                                                                                                                                                                                      });
                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                    $this : _164.id
                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.reducer2);
                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Actions");
                                                                                                                                                                                                                          var _166 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                            src : "images/reducer3.svg",
                                                                                                                                                                                                                            width : 600
                                                                                                                                                                                                                          });
                                                                                                                                                                                                                          var _165 = React.createElement(Component.Center,{
                                                                                                                                                                                                                          },_166);
                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_165);
                                                                                                                                                                                                                      });
                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                    reducer3 : _164.id
                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                          var _156 = {
                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                          };
                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                  return table.set(_156.id,_156);
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                            $this : _156.id
                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.reducer3);
                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                  var _158 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                    src : "images/store1.svg",
                                                                                                                                                                                                                                    width : 600
                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                  var _159 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                    url : "sources/runtime/store.ts"
                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                  var _157 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                    left : _158,
                                                                                                                                                                                                                                    right : _159
                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_157);
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                            store1 : _156.id
                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                  var _148 = {
                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                          return table.set(_148.id,_148);
                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                    $this : _148.id
                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store1);
                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                          var _150 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                            src : "images/store2.svg",
                                                                                                                                                                                                                                            width : 600
                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                          var _151 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                            url : "sources/runtime/store.ts"
                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                          var _149 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                            left : _150,
                                                                                                                                                                                                                                            right : _151
                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_149);
                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                    store2 : _148.id
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
                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store2);
                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                  var _142 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                    src : "images/store3.svg",
                                                                                                                                                                                                                                                    width : 600
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  var _143 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                                    url : "sources/runtime/store.ts"
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  var _141 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                    left : _142,
                                                                                                                                                                                                                                                    right : _143
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_141);
                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                            store3 : _140.id
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
                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store3);
                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Action types in PixieDust");
                                                                                                                                                                                                                                                          var _132 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                            url : "sources/add.pix"
                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                          var _135 = React.createElement(imports["./examples/main"].AddExample,{
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
                                                                                                                                                                                                                                                    actions : _130.id
                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                          var _110 = {
                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                  return table.set(_110.id,_110);
                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                            $this : _110.id
                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.actions);
                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Action types in PixieDust");
                                                                                                                                                                                                                                                                  var _112 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                    url : "sources/add.pix"
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _115 = React.createElement(imports["./examples/main"].AddExample,{
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _116 = React.createElement(Component.VSpace,{
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _117 = React.createElement("h3",{
                                                                                                                                                                                                                                                                  },"Update field (bidirectional mappings)");
                                                                                                                                                                                                                                                                  var _119 = React.createElement(imports["CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                    language : "js",
                                                                                                                                                                                                                                                                    code : "{\"type\": \"setEntity_field\", \"id\": someId, \"value\": someValue}"
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _120 = React.createElement("h3",{
                                                                                                                                                                                                                                                                  },"Component actions");
                                                                                                                                                                                                                                                                  var _122 = React.createElement(imports["CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                    language : "js",
                                                                                                                                                                                                                                                                    code : "{\"type\": \"Component_action\", \"props\": [...], \"args\": [...]}"
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _123 = React.createElement("h3",{
                                                                                                                                                                                                                                                                  },"Cache updates while rendering");
                                                                                                                                                                                                                                                                  var _125 = React.createElement(imports["CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                    language : "js",
                                                                                                                                                                                                                                                                    code : "{\"type\": \"cacheUpdate[Component]\", \"updatedState\": state}"
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _113 = React.createElement("div",{
                                                                                                                                                                                                                                                                  },_115,_116,_117,_119,_120,_122,_123,_125);
                                                                                                                                                                                                                                                                  var _111 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                    left : _112,
                                                                                                                                                                                                                                                                    right : _113
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_111);
                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                            actions2 : _110.id
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
                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.actions2);
                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Lazy rendering");
                                                                                                                                                                                                                                                                          var _104 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                            url : "sources/grades.pix"
                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                          var _105 = React.createElement(imports["./examples/main"].GradesExample,{
                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                          var _103 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                            left : _104,
                                                                                                                                                                                                                                                                            right : _105
                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_103);
                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                    lazy : _102.id
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
                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.lazy);
                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Component");
                                                                                                                                                                                                                                                                                  var _97 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                                                                    url : "sources/runtime/component.ts"
                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                  var _95 = React.createElement("div",{
                                                                                                                                                                                                                                                                                  },_97);
                                                                                                                                                                                                                                                                                  var _94 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                    left : _95,
                                                                                                                                                                                                                                                                                    right : null
                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_94);
                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                            component1 : _93.id
                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                  var _83 = {
                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                          return table.set(_83.id,_83);
                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                    $this : _83.id
                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.component1);
                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Component");
                                                                                                                                                                                                                                                                                          var _87 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                                                                            url : "sources/runtime/component.ts"
                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                          var _88 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                            url : "sources/runtime/component.pix"
                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                          var _85 = React.createElement("div",{
                                                                                                                                                                                                                                                                                          },_87,_88);
                                                                                                                                                                                                                                                                                          var _84 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                            left : _85,
                                                                                                                                                                                                                                                                                            right : null
                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_84);
                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                    component2 : _83.id
                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                          var _72 = {
                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                  return table.set(_72.id,_72);
                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                            $this : _72.id
                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.component2);
                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Component");
                                                                                                                                                                                                                                                                                                  var _76 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                                                                                    url : "sources/runtime/component.ts"
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                  var _77 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                                                    url : "sources/runtime/component.pix"
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                  var _78 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                                                                                    url : "sources/runtime/ReactComponent.ts"
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                  var _74 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                  },_76,_77,_78);
                                                                                                                                                                                                                                                                                                  var _73 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                    left : _74,
                                                                                                                                                                                                                                                                                                    right : null
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_73);
                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                            component3 : _72.id
                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                  var _60 = {
                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                          return table.set(_60.id,_60);
                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                    $this : _60.id
                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.component3);
                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Component");
                                                                                                                                                                                                                                                                                                          var _64 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                                                                                            url : "sources/runtime/component.ts"
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _65 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                            url : "sources/runtime/component.pix"
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _66 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                                                                                            url : "sources/runtime/ReactComponent.ts"
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _62 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                          },_64,_65,_66);
                                                                                                                                                                                                                                                                                                          var _67 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                                                                                            url : "sources/runtime/Lifted.ts"
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _61 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                            left : _62,
                                                                                                                                                                                                                                                                                                            right : _67
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_61);
                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                    component4 : _60.id
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
                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.component4);
                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"PixieDust");
                                                                                                                                                                                                                                                                                                                  var _55 = React.createElement(imports["./examples/main"].TodoWithData,{
                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                  var _54 = React.createElement(Component.FixedWidth,{
                                                                                                                                                                                                                                                                                                                    width : 800
                                                                                                                                                                                                                                                                                                                  },_55);
                                                                                                                                                                                                                                                                                                                  var _53 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                                                                  },_54);
                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_53);
                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                            conclusion : _52.id
                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                  var _46 = {
                                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                          return table.set(_46.id,_46);
                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                    $this : _46.id
                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.conclusion);
                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Slideshow");
                                                                                                                                                                                                                                                                                                                          var _47 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                            url : "sources/slideshow/slideshow_model.pix"
                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_47);
                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                    slideshow1 : _46.id
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
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.slideshow1);
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Slideshow");
                                                                                                                                                                                                                                                                                                                                  var _41 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                                                                                    url : "sources/slideshow/slideshow_model2.pix"
                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_41);
                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                            slideshow2 : _40.id
                                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                                  var _34 = {
                                                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                                          return table.set(_34.id,_34);
                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                    $this : _34.id
                                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.slideshow2);
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Slideshow");
                                                                                                                                                                                                                                                                                                                                          var _35 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                                            url : "sources/slideshow/slideshow_slide.pix"
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_35);
                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                    slideshow3 : _34.id
                                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                                          var _28 = {
                                                                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                                                  return table.set(_28.id,_28);
                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                            $this : _28.id
                                                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.slideshow3);
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Slideshow");
                                                                                                                                                                                                                                                                                                                                                  var _29 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                                                                                                    url : "sources/slideshow/slideshow_footer.pix"
                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_29);
                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                            slideshow4 : _28.id
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
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.slideshow4);
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Slideshow");
                                                                                                                                                                                                                                                                                                                                                          var _23 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                                                            url : "sources/slideshow/slideshow_examples.pix"
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_23);
                                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                    slidesExamples : _22.id
                                                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                                                          var _14 = {
                                                                                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                                                                  return table.set(_14.id,_14);
                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                            $this : _14.id
                                                                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.slidesExamples);
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Slideshow");
                                                                                                                                                                                                                                                                                                                                                                  var _16 = React.createElement(imports["./examples/main"].SlidesExample,{
                                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                                  var _17 = React.createElement(imports["./examples/main"].SlidesExample,{
                                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                                  var _15 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                                                    left : _16,
                                                                                                                                                                                                                                                                                                                                                                    right : _17
                                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_15);
                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                            slidesInSlides : _14.id
                                                                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                                                                  var _6 = {
                                                                                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                                                                          return table.set(_6.id,_6);
                                                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                                    $this : _6.id
                                                                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.slidesInSlides);
                                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Grades");
                                                                                                                                                                                                                                                                                                                                                                          var _8 = React.createElement(Component.CodeBlockFetchSmall,{
                                                                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                                                                            url : "examples/grades/grades.ice"
                                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                                          var _9 = React.createElement(imports["./examples/main"].GradesExample,{
                                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                                          var _7 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                                                            left : _8,
                                                                                                                                                                                                                                                                                                                                                                            right : _9
                                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_7);
                                                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                                    grades : _6.id
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
                                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.grades);
                                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Virtual DOM");
                                                                                                                                                                                                                                                                                                                                                                                  var _1 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                                                                                                                    src : "images/vdom.svg",
                                                                                                                                                                                                                                                                                                                                                                                    width : 1600
                                                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_1);
                                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                                            vdom : _0.id
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
              });
      });
  return newState;
}

actions["Init_init"] = Init_init;
function SlideHeader_toggleFooter(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 = getSlide_slideshow(state,scope.slide);
          scoped(scope,{
            $this : _0
          },function (scope) {
                  var _2 ;
                  if(scope["$this"] != null) {
                    var calc = calculateSlideShow_showFooter(state,scope["$this"]);
                    state = calc.state;
                    _2 = calc.result;
                  } else {
                    _2 = null;
                  }
                  var _3 = !_2;
                  newState = setSlideShow_showFooter(newState,scope["$this"],_3);
              });
      });
  return newState;
}

actions["SlideHeader_toggleFooter"] = SlideHeader_toggleFooter;