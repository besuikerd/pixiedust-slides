var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "CodeBlock" : require("./components/CodeBlock"),
  "./examples/main" : require("./examples/main2"),
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
              },[]),
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
                    },_22,_45,_32,_34,_43);
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
              },[])
        };
    } ) ();
module.exports.Component = Component;
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
function Init_init(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _401 = {
            id : pixiedustRuntime.generateUniqueId()
          };
          newState = newState.update("Slide",function (table) {
                  return table.set(_401.id,_401);
              });
          scoped(scope,{
            $this : _401.id
          },function (scope) {
                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                  newState = setSlide_title(newState,scope["$this"],"PixieDust: Declarative incremental user interfaces for IceDust");
                  var _402 = React.createElement("div",{
                  });
                  newState = setSlide_content(newState,scope["$this"],_402);
              });
          scoped(scope,{
            intro : _401.id
          },function (scope) {
                  scoped(scope,{
                    $this : scope.slideshow
                  },function (scope) {
                          newState = setSlideShow_current(newState,scope["$this"],scope.intro);
                      });
                  var _392 = {
                    id : pixiedustRuntime.generateUniqueId()
                  };
                  newState = newState.update("Slide",function (table) {
                          return table.set(_392.id,_392);
                      });
                  scoped(scope,{
                    $this : _392.id
                  },function (scope) {
                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                          newState = setSlide_previous(newState,scope["$this"],scope.intro);
                          newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                          var _394 = React.createElement(Component.FixedWidthImage,{
                            src : "/images/ui.svg",
                            width : 600
                          });
                          var _393 = React.createElement(Component.TwoColumn,{
                            left : null,
                            right : _394
                          });
                          newState = setSlide_content(newState,scope["$this"],_393);
                      });
                  scoped(scope,{
                    ui : _392.id
                  },function (scope) {
                          var _385 = {
                            id : pixiedustRuntime.generateUniqueId()
                          };
                          newState = newState.update("Slide",function (table) {
                                  return table.set(_385.id,_385);
                              });
                          scoped(scope,{
                            $this : _385.id
                          },function (scope) {
                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                  newState = setSlide_previous(newState,scope["$this"],scope.ui);
                                  newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                                  var _387 = React.createElement(Component.FixedWidthImage,{
                                    src : "/images/ui-extended.svg",
                                    width : 600
                                  });
                                  var _386 = React.createElement(Component.TwoColumn,{
                                    left : null,
                                    right : _387
                                  });
                                  newState = setSlide_content(newState,scope["$this"],_386);
                              });
                          scoped(scope,{
                            uiExtended : _385.id
                          },function (scope) {
                                  var _365 = {
                                    id : pixiedustRuntime.generateUniqueId()
                                  };
                                  newState = newState.update("Slide",function (table) {
                                          return table.set(_365.id,_365);
                                      });
                                  scoped(scope,{
                                    $this : _365.id
                                  },function (scope) {
                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                          newState = setSlide_previous(newState,scope["$this"],scope.uiExtended);
                                          newState = setSlide_title(newState,scope["$this"],"UI Pattern");
                                          var _368 = React.createElement("li",{
                                          },"Incremental Rendering");
                                          var _370 = React.createElement("li",{
                                          },"Composable views");
                                          var _372 = React.createElement("li",{
                                          },"User input handling");
                                          var _374 = React.createElement("li",{
                                          },"(Incremental) derived values");
                                          var _376 = React.createElement("li",{
                                          },"Bidirectional mapping between data and view");
                                          var _378 = React.createElement("li",{
                                          },"Undo/redo (time travelling)");
                                          var _367 = React.createElement(Component.List,{
                                          },_368,_370,_372,_374,_376,_378);
                                          var _380 = React.createElement(Component.FixedWidthImage,{
                                            src : "/images/ui-extended.svg",
                                            width : 600
                                          });
                                          var _366 = React.createElement(Component.TwoColumn,{
                                            left : _367,
                                            right : _380
                                          });
                                          newState = setSlide_content(newState,scope["$this"],_366);
                                      });
                                  scoped(scope,{
                                    uiExtended2 : _365.id
                                  },function (scope) {
                                          var _359 = {
                                            id : pixiedustRuntime.generateUniqueId()
                                          };
                                          newState = newState.update("Slide",function (table) {
                                                  return table.set(_359.id,_359);
                                              });
                                          scoped(scope,{
                                            $this : _359.id
                                          },function (scope) {
                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                  newState = setSlide_previous(newState,scope["$this"],scope.uiExtended2);
                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                  var _360 = React.createElement(imports["./examples/main"].TodoExample,{
                                                  });
                                                  newState = setSlide_content(newState,scope["$this"],_360);
                                              });
                                          scoped(scope,{
                                            todo : _359.id
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
                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo);
                                                          newState = setSlide_title(newState,scope["$this"],"Todo.js");
                                                          var _350 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/reducer.js"
                                                          });
                                                          var _351 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/view1.js"
                                                          });
                                                          var _352 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/view2.js"
                                                          });
                                                          var _353 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/view3.js"
                                                          });
                                                          var _354 = React.createElement(Component.CodeBlockFetchTiny,{
                                                            language : "js",
                                                            url : "sources/todo/redux/view4.js"
                                                          });
                                                          var _349 = React.createElement(Component.FiveColumn,{
                                                            v1 : _350,
                                                            v2 : _351,
                                                            v3 : _352,
                                                            v4 : _353,
                                                            v5 : _354
                                                          });
                                                          newState = setSlide_content(newState,scope["$this"],_349);
                                                      });
                                                  scoped(scope,{
                                                    todoRedux : _348.id
                                                  },function (scope) {
                                                          var _340 = {
                                                            id : pixiedustRuntime.generateUniqueId()
                                                          };
                                                          newState = newState.update("Slide",function (table) {
                                                                  return table.set(_340.id,_340);
                                                              });
                                                          scoped(scope,{
                                                            $this : _340.id
                                                          },function (scope) {
                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todoRedux);
                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                  var _342 = React.createElement(Component.CodeBlockFetch,{
                                                                    language : "pix",
                                                                    url : "sources/todo/todo1.pix"
                                                                  });
                                                                  var _343 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                  });
                                                                  var _341 = React.createElement(Component.WideTwoColumn,{
                                                                    left : _342,
                                                                    right : _343
                                                                  });
                                                                  newState = setSlide_content(newState,scope["$this"],_341);
                                                              });
                                                          scoped(scope,{
                                                            todo1 : _340.id
                                                          },function (scope) {
                                                                  var _332 = {
                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                  };
                                                                  newState = newState.update("Slide",function (table) {
                                                                          return table.set(_332.id,_332);
                                                                      });
                                                                  scoped(scope,{
                                                                    $this : _332.id
                                                                  },function (scope) {
                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo1);
                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                          var _334 = React.createElement(Component.CodeBlockFetch,{
                                                                            language : "pix",
                                                                            url : "sources/todo/todo2.pix"
                                                                          });
                                                                          var _335 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                          });
                                                                          var _333 = React.createElement(Component.WideTwoColumn,{
                                                                            left : _334,
                                                                            right : _335
                                                                          });
                                                                          newState = setSlide_content(newState,scope["$this"],_333);
                                                                      });
                                                                  scoped(scope,{
                                                                    todo2 : _332.id
                                                                  },function (scope) {
                                                                          var _324 = {
                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                          };
                                                                          newState = newState.update("Slide",function (table) {
                                                                                  return table.set(_324.id,_324);
                                                                              });
                                                                          scoped(scope,{
                                                                            $this : _324.id
                                                                          },function (scope) {
                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo2);
                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                  var _326 = React.createElement(Component.CodeBlockFetch,{
                                                                                    language : "pix",
                                                                                    url : "sources/todo/todo3.pix"
                                                                                  });
                                                                                  var _327 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                  });
                                                                                  var _325 = React.createElement(Component.WideTwoColumn,{
                                                                                    left : _326,
                                                                                    right : _327
                                                                                  });
                                                                                  newState = setSlide_content(newState,scope["$this"],_325);
                                                                              });
                                                                          scoped(scope,{
                                                                            todo3 : _324.id
                                                                          },function (scope) {
                                                                                  var _316 = {
                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                  };
                                                                                  newState = newState.update("Slide",function (table) {
                                                                                          return table.set(_316.id,_316);
                                                                                      });
                                                                                  scoped(scope,{
                                                                                    $this : _316.id
                                                                                  },function (scope) {
                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo3);
                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                          var _318 = React.createElement(Component.CodeBlockFetch,{
                                                                                            language : "pix",
                                                                                            url : "sources/todo/todo4.pix"
                                                                                          });
                                                                                          var _319 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                          });
                                                                                          var _317 = React.createElement(Component.WideTwoColumn,{
                                                                                            left : _318,
                                                                                            right : _319
                                                                                          });
                                                                                          newState = setSlide_content(newState,scope["$this"],_317);
                                                                                      });
                                                                                  scoped(scope,{
                                                                                    todo4 : _316.id
                                                                                  },function (scope) {
                                                                                          var _308 = {
                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                          };
                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                  return table.set(_308.id,_308);
                                                                                              });
                                                                                          scoped(scope,{
                                                                                            $this : _308.id
                                                                                          },function (scope) {
                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo4);
                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                  var _310 = React.createElement(Component.CodeBlockFetch,{
                                                                                                    language : "pix",
                                                                                                    url : "sources/todo/todo5.pix"
                                                                                                  });
                                                                                                  var _311 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                  });
                                                                                                  var _309 = React.createElement(Component.WideTwoColumn,{
                                                                                                    left : _310,
                                                                                                    right : _311
                                                                                                  });
                                                                                                  newState = setSlide_content(newState,scope["$this"],_309);
                                                                                              });
                                                                                          scoped(scope,{
                                                                                            todo5 : _308.id
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
                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo5);
                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                          var _302 = React.createElement(Component.CodeBlockFetch,{
                                                                                                            language : "pix",
                                                                                                            url : "sources/todo/todo6.pix"
                                                                                                          });
                                                                                                          var _303 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                          });
                                                                                                          var _301 = React.createElement(Component.WideTwoColumn,{
                                                                                                            left : _302,
                                                                                                            right : _303
                                                                                                          });
                                                                                                          newState = setSlide_content(newState,scope["$this"],_301);
                                                                                                      });
                                                                                                  scoped(scope,{
                                                                                                    todo6 : _300.id
                                                                                                  },function (scope) {
                                                                                                          var _292 = {
                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                          };
                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                  return table.set(_292.id,_292);
                                                                                                              });
                                                                                                          scoped(scope,{
                                                                                                            $this : _292.id
                                                                                                          },function (scope) {
                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo6);
                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                  var _294 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                    language : "pix",
                                                                                                                    url : "sources/todo/todo7.pix"
                                                                                                                  });
                                                                                                                  var _295 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                  });
                                                                                                                  var _293 = React.createElement(Component.WideTwoColumn,{
                                                                                                                    left : _294,
                                                                                                                    right : _295
                                                                                                                  });
                                                                                                                  newState = setSlide_content(newState,scope["$this"],_293);
                                                                                                              });
                                                                                                          scoped(scope,{
                                                                                                            todo7 : _292.id
                                                                                                          },function (scope) {
                                                                                                                  var _284 = {
                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                  };
                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                          return table.set(_284.id,_284);
                                                                                                                      });
                                                                                                                  scoped(scope,{
                                                                                                                    $this : _284.id
                                                                                                                  },function (scope) {
                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo7);
                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                          var _286 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                            language : "pix",
                                                                                                                            url : "sources/todo/todo8.pix"
                                                                                                                          });
                                                                                                                          var _287 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                          });
                                                                                                                          var _285 = React.createElement(Component.WideTwoColumn,{
                                                                                                                            left : _286,
                                                                                                                            right : _287
                                                                                                                          });
                                                                                                                          newState = setSlide_content(newState,scope["$this"],_285);
                                                                                                                      });
                                                                                                                  scoped(scope,{
                                                                                                                    todo8 : _284.id
                                                                                                                  },function (scope) {
                                                                                                                          var _276 = {
                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                          };
                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                  return table.set(_276.id,_276);
                                                                                                                              });
                                                                                                                          scoped(scope,{
                                                                                                                            $this : _276.id
                                                                                                                          },function (scope) {
                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo8);
                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                  var _278 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                    language : "pix",
                                                                                                                                    url : "sources/todo/todo9.pix"
                                                                                                                                  });
                                                                                                                                  var _279 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                  });
                                                                                                                                  var _277 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                    left : _278,
                                                                                                                                    right : _279
                                                                                                                                  });
                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_277);
                                                                                                                              });
                                                                                                                          scoped(scope,{
                                                                                                                            todo9 : _276.id
                                                                                                                          },function (scope) {
                                                                                                                                  var _268 = {
                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                  };
                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                          return table.set(_268.id,_268);
                                                                                                                                      });
                                                                                                                                  scoped(scope,{
                                                                                                                                    $this : _268.id
                                                                                                                                  },function (scope) {
                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo9);
                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                          var _270 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                            language : "pix",
                                                                                                                                            url : "sources/todo/todo10.pix"
                                                                                                                                          });
                                                                                                                                          var _271 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                          });
                                                                                                                                          var _269 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                            left : _270,
                                                                                                                                            right : _271
                                                                                                                                          });
                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_269);
                                                                                                                                      });
                                                                                                                                  scoped(scope,{
                                                                                                                                    todo10 : _268.id
                                                                                                                                  },function (scope) {
                                                                                                                                          var _260 = {
                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                          };
                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                  return table.set(_260.id,_260);
                                                                                                                                              });
                                                                                                                                          scoped(scope,{
                                                                                                                                            $this : _260.id
                                                                                                                                          },function (scope) {
                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo10);
                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                  var _262 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                    language : "pix",
                                                                                                                                                    url : "sources/todo/todo11.pix"
                                                                                                                                                  });
                                                                                                                                                  var _263 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                  });
                                                                                                                                                  var _261 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                    left : _262,
                                                                                                                                                    right : _263
                                                                                                                                                  });
                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_261);
                                                                                                                                              });
                                                                                                                                          scoped(scope,{
                                                                                                                                            todo11 : _260.id
                                                                                                                                          },function (scope) {
                                                                                                                                                  var _252 = {
                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                  };
                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                          return table.set(_252.id,_252);
                                                                                                                                                      });
                                                                                                                                                  scoped(scope,{
                                                                                                                                                    $this : _252.id
                                                                                                                                                  },function (scope) {
                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.todo11);
                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Todo");
                                                                                                                                                          var _254 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                            language : "pix",
                                                                                                                                                            url : "sources/todo/todo12.pix"
                                                                                                                                                          });
                                                                                                                                                          var _255 = React.createElement(imports["./examples/main"].TodoExample,{
                                                                                                                                                          });
                                                                                                                                                          var _253 = React.createElement(Component.WideTwoColumn,{
                                                                                                                                                            left : _254,
                                                                                                                                                            right : _255
                                                                                                                                                          });
                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_253);
                                                                                                                                                      });
                                                                                                                                                  scoped(scope,{
                                                                                                                                                    todo12 : _252.id
                                                                                                                                                  },function (scope) {
                                                                                                                                                          var _245 = {
                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                          };
                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                  return table.set(_245.id,_245);
                                                                                                                                                              });
                                                                                                                                                          scoped(scope,{
                                                                                                                                                            $this : _245.id
                                                                                                                                                          },function (scope) {
                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.todo9);
                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Model");
                                                                                                                                                                  var _247 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                    language : "pix",
                                                                                                                                                                    url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                  });
                                                                                                                                                                  var _246 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                    left : _247,
                                                                                                                                                                    right : null
                                                                                                                                                                  });
                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_246);
                                                                                                                                                              });
                                                                                                                                                          scoped(scope,{
                                                                                                                                                            immutable1 : _245.id
                                                                                                                                                          },function (scope) {
                                                                                                                                                                  var _235 = {
                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                  };
                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                          return table.set(_235.id,_235);
                                                                                                                                                                      });
                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                    $this : _235.id
                                                                                                                                                                  },function (scope) {
                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.immutable1);
                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Model");
                                                                                                                                                                          var _239 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                            language : "pix",
                                                                                                                                                                            url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                          });
                                                                                                                                                                          var _240 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                            src : "images/foo.svg",
                                                                                                                                                                            width : 700
                                                                                                                                                                          });
                                                                                                                                                                          var _237 = React.createElement("div",{
                                                                                                                                                                          },_239,_240);
                                                                                                                                                                          var _236 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                            left : _237,
                                                                                                                                                                            right : null
                                                                                                                                                                          });
                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_236);
                                                                                                                                                                      });
                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                    immutable2 : _235.id
                                                                                                                                                                  },function (scope) {
                                                                                                                                                                          var _224 = {
                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                          };
                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                  return table.set(_224.id,_224);
                                                                                                                                                                              });
                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                            $this : _224.id
                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.immutable2);
                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Model");
                                                                                                                                                                                  var _228 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                    url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                                  });
                                                                                                                                                                                  var _229 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                    src : "images/foo.svg",
                                                                                                                                                                                    width : 700
                                                                                                                                                                                  });
                                                                                                                                                                                  var _226 = React.createElement("div",{
                                                                                                                                                                                  },_228,_229);
                                                                                                                                                                                  var _230 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                    language : "js",
                                                                                                                                                                                    url : "sources/runtime/entitymapping.js"
                                                                                                                                                                                  });
                                                                                                                                                                                  var _225 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                    left : _226,
                                                                                                                                                                                    right : _230
                                                                                                                                                                                  });
                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_225);
                                                                                                                                                                              });
                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                            immutable3 : _224.id
                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                  var _213 = {
                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                  };
                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                          return table.set(_213.id,_213);
                                                                                                                                                                                      });
                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                    $this : _213.id
                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.immutable3);
                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Getter");
                                                                                                                                                                                          var _217 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                            url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                                          });
                                                                                                                                                                                          var _218 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                            src : "images/foo.svg",
                                                                                                                                                                                            width : 700
                                                                                                                                                                                          });
                                                                                                                                                                                          var _215 = React.createElement("div",{
                                                                                                                                                                                          },_217,_218);
                                                                                                                                                                                          var _219 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                            language : "js",
                                                                                                                                                                                            url : "sources/runtime/getter.js"
                                                                                                                                                                                          });
                                                                                                                                                                                          var _214 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                            left : _215,
                                                                                                                                                                                            right : _219
                                                                                                                                                                                          });
                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_214);
                                                                                                                                                                                      });
                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                    getter : _213.id
                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                          var _202 = {
                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                          };
                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                  return table.set(_202.id,_202);
                                                                                                                                                                                              });
                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                            $this : _202.id
                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.getter);
                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Calculate");
                                                                                                                                                                                                  var _206 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                    url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                                                  });
                                                                                                                                                                                                  var _207 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                    src : "images/foo.svg",
                                                                                                                                                                                                    width : 700
                                                                                                                                                                                                  });
                                                                                                                                                                                                  var _204 = React.createElement("div",{
                                                                                                                                                                                                  },_206,_207);
                                                                                                                                                                                                  var _208 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                    language : "js",
                                                                                                                                                                                                    url : "sources/runtime/calculate.js"
                                                                                                                                                                                                  });
                                                                                                                                                                                                  var _203 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                    left : _204,
                                                                                                                                                                                                    right : _208
                                                                                                                                                                                                  });
                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_203);
                                                                                                                                                                                              });
                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                            calculate : _202.id
                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                  var _191 = {
                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                  };
                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                          return table.set(_191.id,_191);
                                                                                                                                                                                                      });
                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                    $this : _191.id
                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.calculate);
                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Setter");
                                                                                                                                                                                                          var _195 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                            url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                                                          });
                                                                                                                                                                                                          var _196 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                            src : "images/foo.svg",
                                                                                                                                                                                                            width : 700
                                                                                                                                                                                                          });
                                                                                                                                                                                                          var _193 = React.createElement("div",{
                                                                                                                                                                                                          },_195,_196);
                                                                                                                                                                                                          var _197 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                            language : "js",
                                                                                                                                                                                                            url : "sources/runtime/setter.js"
                                                                                                                                                                                                          });
                                                                                                                                                                                                          var _192 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                            left : _193,
                                                                                                                                                                                                            right : _197
                                                                                                                                                                                                          });
                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_192);
                                                                                                                                                                                                      });
                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                    setter : _191.id
                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                          var _180 = {
                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                          };
                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                  return table.set(_180.id,_180);
                                                                                                                                                                                                              });
                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                            $this : _180.id
                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.setter);
                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Invalidate");
                                                                                                                                                                                                                  var _184 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                    url : "sources/runtime/entitymapping.pix"
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                  var _185 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                    src : "images/foo.svg",
                                                                                                                                                                                                                    width : 700
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                  var _182 = React.createElement("div",{
                                                                                                                                                                                                                  },_184,_185);
                                                                                                                                                                                                                  var _186 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                    language : "js",
                                                                                                                                                                                                                    url : "sources/runtime/invalidate.js"
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                  var _181 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                    left : _182,
                                                                                                                                                                                                                    right : _186
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_181);
                                                                                                                                                                                                              });
                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                            invalidate : _180.id
                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                  var _173 = {
                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                  };
                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                          return table.set(_173.id,_173);
                                                                                                                                                                                                                      });
                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                    $this : _173.id
                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.invalidate);
                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Actions");
                                                                                                                                                                                                                          var _175 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                            src : "images/reducer1.svg",
                                                                                                                                                                                                                            width : 600
                                                                                                                                                                                                                          });
                                                                                                                                                                                                                          var _174 = React.createElement(Component.Center,{
                                                                                                                                                                                                                          },_175);
                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_174);
                                                                                                                                                                                                                      });
                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                    reducer1 : _173.id
                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                          var _166 = {
                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                          };
                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                  return table.set(_166.id,_166);
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                            $this : _166.id
                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.reducer1);
                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Actions");
                                                                                                                                                                                                                                  var _168 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                    src : "images/reducer2.svg",
                                                                                                                                                                                                                                    width : 600
                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                  var _167 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                  },_168);
                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_167);
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                            reducer2 : _166.id
                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                  var _159 = {
                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                          return table.set(_159.id,_159);
                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                    $this : _159.id
                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.reducer2);
                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Actions");
                                                                                                                                                                                                                                          var _161 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                            src : "images/reducer3.svg",
                                                                                                                                                                                                                                            width : 600
                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                          var _160 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                          },_161);
                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_160);
                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                    reducer3 : _159.id
                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                          var _151 = {
                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                  return table.set(_151.id,_151);
                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                            $this : _151.id
                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.reducer3);
                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                  var _153 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                    src : "images/reducer3.svg",
                                                                                                                                                                                                                                                    width : 600
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  var _154 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                                    url : "sources/runtime/store.ts"
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  var _152 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                    left : _153,
                                                                                                                                                                                                                                                    right : _154
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_152);
                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                            store1 : _151.id
                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                  var _144 = {
                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                          return table.set(_144.id,_144);
                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                    $this : _144.id
                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store1);
                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                          var _146 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                            src : "images/store0.svg",
                                                                                                                                                                                                                                                            width : 800
                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                          var _145 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                          },_146);
                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_145);
                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                    store2 : _144.id
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
                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store2);
                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                  var _139 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                    src : "images/store1.svg",
                                                                                                                                                                                                                                                                    width : 800
                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                  var _138 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                  },_139);
                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_138);
                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                            store3 : _137.id
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
                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                          var _132 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                            src : "images/store2.svg",
                                                                                                                                                                                                                                                                            width : 800
                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                          var _131 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                          },_132);
                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_131);
                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                    store4 : _130.id
                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                          var _123 = {
                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                  return table.set(_123.id,_123);
                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                            $this : _123.id
                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store4);
                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                                  var _125 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                    src : "images/store3.svg",
                                                                                                                                                                                                                                                                                    width : 800
                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                  var _124 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                                  },_125);
                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_124);
                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                            store5 : _123.id
                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                  var _116 = {
                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                          return table.set(_116.id,_116);
                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                    $this : _116.id
                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.store5);
                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Store");
                                                                                                                                                                                                                                                                                          var _118 = React.createElement(Component.FixedWidthImage,{
                                                                                                                                                                                                                                                                                            src : "images/store4.svg",
                                                                                                                                                                                                                                                                                            width : 800
                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                          var _117 = React.createElement(Component.Center,{
                                                                                                                                                                                                                                                                                          },_118);
                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_117);
                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                    store6 : _116.id
                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                          var _106 = {
                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                  return table.set(_106.id,_106);
                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                            $this : _106.id
                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.store6);
                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Action types in PixieDust");
                                                                                                                                                                                                                                                                                                  var _108 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                                                    url : "sources/add.pix"
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                  var _111 = React.createElement(imports["./examples/main"].AddExample,{
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                  var _109 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                  },_111);
                                                                                                                                                                                                                                                                                                  var _107 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                    left : _108,
                                                                                                                                                                                                                                                                                                    right : _109
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_107);
                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                            actions : _106.id
                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                  var _86 = {
                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                          return table.set(_86.id,_86);
                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                    $this : _86.id
                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.actions);
                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Action types in PixieDust");
                                                                                                                                                                                                                                                                                                          var _88 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                            url : "sources/add.pix"
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _91 = React.createElement(imports["./examples/main"].AddExample,{
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _92 = React.createElement(Component.VSpace,{
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _93 = React.createElement("h3",{
                                                                                                                                                                                                                                                                                                          },"Update field (bidirectional mappings)");
                                                                                                                                                                                                                                                                                                          var _95 = React.createElement(imports["CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                                                            language : "js",
                                                                                                                                                                                                                                                                                                            code : "{\"type\": \"setEntity_field\", \"id\": someId, \"value\": someValue}"
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _96 = React.createElement("h3",{
                                                                                                                                                                                                                                                                                                          },"Component actions");
                                                                                                                                                                                                                                                                                                          var _98 = React.createElement(imports["CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                                                            language : "js",
                                                                                                                                                                                                                                                                                                            code : "{\"type\": \"Component_action\", \"props\": [...], \"args\": [...]}"
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _99 = React.createElement("h3",{
                                                                                                                                                                                                                                                                                                          },"Cache updates while rendering");
                                                                                                                                                                                                                                                                                                          var _101 = React.createElement(imports["CodeBlock"].CodeBlock,{
                                                                                                                                                                                                                                                                                                            language : "js",
                                                                                                                                                                                                                                                                                                            code : "{\"type\": \"cacheUpdate[Component]\", \"updatedState\": state}"
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          var _89 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                          },_91,_92,_93,_95,_96,_98,_99,_101);
                                                                                                                                                                                                                                                                                                          var _87 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                            left : _88,
                                                                                                                                                                                                                                                                                                            right : _89
                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_87);
                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                    actions2 : _86.id
                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                          var _78 = {
                                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                  return table.set(_78.id,_78);
                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                            $this : _78.id
                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.actions2);
                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Lazy rendering");
                                                                                                                                                                                                                                                                                                                  var _80 = React.createElement(Component.CodeBlockFetchSmall,{
                                                                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                                                                    url : "sources/incometax.pix"
                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                  var _81 = React.createElement(imports["./examples/main"].IncomeTaxExample,{
                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                  var _79 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                    left : _80,
                                                                                                                                                                                                                                                                                                                    right : _81
                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_79);
                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                            incometax1 : _78.id
                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                  var _70 = {
                                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                          return table.set(_70.id,_70);
                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                    $this : _70.id
                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.incometax1);
                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Lazy rendering");
                                                                                                                                                                                                                                                                                                                          var _72 = React.createElement(Component.CodeBlockFetchSmall,{
                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                            url : "sources/incometax.pix"
                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                          var _73 = React.createElement(imports["./examples/main"].IncomeTaxNoSummaryExample,{
                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                          var _71 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                            left : _72,
                                                                                                                                                                                                                                                                                                                            right : _73
                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_71);
                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                    incometax2 : _70.id
                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                          var _61 = {
                                                                                                                                                                                                                                                                                                                            id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                                                          newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                                  return table.set(_61.id,_61);
                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                            $this : _61.id
                                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.incometax2);
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Component");
                                                                                                                                                                                                                                                                                                                                  var _65 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                                                                                                                    url : "sources/runtime/component.ts"
                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                  var _63 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                                                  },_65);
                                                                                                                                                                                                                                                                                                                                  var _62 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                    left : _63,
                                                                                                                                                                                                                                                                                                                                    right : null
                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_62);
                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                            component1 : _61.id
                                                                                                                                                                                                                                                                                                                          },function (scope) {
                                                                                                                                                                                                                                                                                                                                  var _51 = {
                                                                                                                                                                                                                                                                                                                                    id : pixiedustRuntime.generateUniqueId()
                                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                                  newState = newState.update("Slide",function (table) {
                                                                                                                                                                                                                                                                                                                                          return table.set(_51.id,_51);
                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                    $this : _51.id
                                                                                                                                                                                                                                                                                                                                  },function (scope) {
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_slideshow(newState,scope["$this"],scope.slideshow);
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.component1);
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Component");
                                                                                                                                                                                                                                                                                                                                          var _55 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                                                                                                                            url : "sources/runtime/component.ts"
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _56 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                                            url : "sources/runtime/component.pix"
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          var _53 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                                                          },_55,_56);
                                                                                                                                                                                                                                                                                                                                          var _52 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                            left : _53,
                                                                                                                                                                                                                                                                                                                                            right : null
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_52);
                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                    component2 : _51.id
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
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.component2);
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"Component");
                                                                                                                                                                                                                                                                                                                                                  var _44 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                                                                                                                                    url : "sources/runtime/component.ts"
                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                  var _45 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                    language : "pix",
                                                                                                                                                                                                                                                                                                                                                    url : "sources/runtime/component.pix"
                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                  var _46 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                    language : "ts",
                                                                                                                                                                                                                                                                                                                                                    url : "sources/runtime/ReactComponent.ts"
                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                  var _42 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                                                                  },_44,_45,_46);
                                                                                                                                                                                                                                                                                                                                                  var _41 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                                    left : _42,
                                                                                                                                                                                                                                                                                                                                                    right : null
                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_41);
                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                            component3 : _40.id
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
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.component3);
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Component");
                                                                                                                                                                                                                                                                                                                                                          var _32 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                                                                                                                                            url : "sources/runtime/component.ts"
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          var _33 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                            language : "pix",
                                                                                                                                                                                                                                                                                                                                                            url : "sources/runtime/component.pix"
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          var _34 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                                                                                                                                            url : "sources/runtime/ReactComponent.ts"
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          var _30 = React.createElement("div",{
                                                                                                                                                                                                                                                                                                                                                          },_32,_33,_34);
                                                                                                                                                                                                                                                                                                                                                          var _35 = React.createElement(Component.CodeBlockFetch,{
                                                                                                                                                                                                                                                                                                                                                            language : "ts",
                                                                                                                                                                                                                                                                                                                                                            url : "sources/runtime/Lifted.ts"
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          var _29 = React.createElement(Component.TwoColumn,{
                                                                                                                                                                                                                                                                                                                                                            left : _30,
                                                                                                                                                                                                                                                                                                                                                            right : _35
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_content(newState,scope["$this"],_29);
                                                                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                                                                  scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                    component4 : _28.id
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
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.component4);
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_title(newState,scope["$this"],"PixieDust");
                                                                                                                                                                                                                                                                                                                                                                  var _23 = React.createElement(imports["./examples/main"].TodoWithData,{
                                                                                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_content(newState,scope["$this"],_23);
                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                          scoped(scope,{
                                                                                                                                                                                                                                                                                                                                                            conclusion : _22.id
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
                                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_previous(newState,scope["$this"],scope.conclusion);
                                                                                                                                                                                                                                                                                                                                                                          newState = setSlide_title(newState,scope["$this"],"Slides");
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
                                                                                                                                                                                                                                                                                                                                                                    slides : _14.id
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
                                                                                                                                                                                                                                                                                                                                                                                  newState = setSlide_previous(newState,scope["$this"],scope.slides);
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