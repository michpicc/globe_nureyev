// Version 2.7.0 three-globe - https://github.com/vasturiano/three-globe
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('three')) :
  typeof define === 'function' && define.amd ? define(['three'], factory) :
  (global = global || self, global.ThreeGlobe = factory(global.THREE));
}(this, (function (three) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear' 
   * that is a function which will clear the timer to prevent previously scheduled executions. 
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */
  function debounce(func, wait, immediate){
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function(){
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    
    debounced.flush = function() {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        
        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
  }
  // Adds compatibility for ES modules
  debounce.debounce = debounce;

  var debounce_1 = debounce;

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$1(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var Prop = function Prop(name, _ref) {
    var _ref$default = _ref["default"],
        defaultVal = _ref$default === void 0 ? null : _ref$default,
        _ref$triggerUpdate = _ref.triggerUpdate,
        triggerUpdate = _ref$triggerUpdate === void 0 ? true : _ref$triggerUpdate,
        _ref$onChange = _ref.onChange,
        onChange = _ref$onChange === void 0 ? function (newVal, state) {} : _ref$onChange;

    _classCallCheck$1(this, Prop);

    this.name = name;
    this.defaultVal = defaultVal;
    this.triggerUpdate = triggerUpdate;
    this.onChange = onChange;
  };

  function index (_ref2) {
    var _ref2$stateInit = _ref2.stateInit,
        stateInit = _ref2$stateInit === void 0 ? function () {
      return {};
    } : _ref2$stateInit,
        _ref2$props = _ref2.props,
        rawProps = _ref2$props === void 0 ? {} : _ref2$props,
        _ref2$methods = _ref2.methods,
        methods = _ref2$methods === void 0 ? {} : _ref2$methods,
        _ref2$aliases = _ref2.aliases,
        aliases = _ref2$aliases === void 0 ? {} : _ref2$aliases,
        _ref2$init = _ref2.init,
        initFn = _ref2$init === void 0 ? function () {} : _ref2$init,
        _ref2$update = _ref2.update,
        updateFn = _ref2$update === void 0 ? function () {} : _ref2$update;
    // Parse props into Prop instances
    var props = Object.keys(rawProps).map(function (propName) {
      return new Prop(propName, rawProps[propName]);
    });
    return function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Holds component state
      var state = Object.assign({}, stateInit instanceof Function ? stateInit(options) : stateInit, // Support plain objects for backwards compatibility
      {
        initialised: false
      }); // keeps track of which props triggered an update

      var changedProps = {}; // Component constructor

      function comp(nodeElement) {
        initStatic(nodeElement, options);
        digest();
        return comp;
      }

      var initStatic = function initStatic(nodeElement, options) {
        initFn.call(comp, nodeElement, state, options);
        state.initialised = true;
      };

      var digest = debounce_1(function () {
        if (!state.initialised) {
          return;
        }

        updateFn.call(comp, state, changedProps);
        changedProps = {};
      }, 1); // Getter/setter methods

      props.forEach(function (prop) {
        comp[prop.name] = getSetProp(prop);

        function getSetProp(_ref3) {
          var prop = _ref3.name,
              _ref3$triggerUpdate = _ref3.triggerUpdate,
              redigest = _ref3$triggerUpdate === void 0 ? false : _ref3$triggerUpdate,
              _ref3$onChange = _ref3.onChange,
              onChange = _ref3$onChange === void 0 ? function (newVal, state) {} : _ref3$onChange,
              _ref3$defaultVal = _ref3.defaultVal,
              defaultVal = _ref3$defaultVal === void 0 ? null : _ref3$defaultVal;
          return function (_) {
            var curVal = state[prop];

            if (!arguments.length) {
              return curVal;
            } // Getter mode


            var val = _ === undefined ? defaultVal : _; // pick default if value passed is undefined

            state[prop] = val;
            onChange.call(comp, val, state, curVal); // track changed props

            !changedProps.hasOwnProperty(prop) && (changedProps[prop] = curVal);

            if (redigest) {
              digest();
            }

            return comp;
          };
        }
      }); // Other methods

      Object.keys(methods).forEach(function (methodName) {
        comp[methodName] = function () {
          var _methods$methodName;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (_methods$methodName = methods[methodName]).call.apply(_methods$methodName, [comp, state].concat(args));
        };
      }); // Link aliases

      Object.entries(aliases).forEach(function (_ref4) {
        var _ref5 = _slicedToArray$1(_ref4, 2),
            alias = _ref5[0],
            target = _ref5[1];

        return comp[alias] = comp[target];
      }); // Reset all component props to their default value

      comp.resetProps = function () {
        props.forEach(function (prop) {
          comp[prop.name](prop.defaultVal);
        });
        return comp;
      }; //


      comp.resetProps(); // Apply all prop defaults

      state._rerender = digest; // Expose digest method

      return comp;
    };
  }

  var version = '18.5.0';

  /**
   * Tween.js - Licensed under the MIT license
   * https://github.com/tweenjs/tween.js
   * ----------------------------------------------
   *
   * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
   * Thank you all, you're awesome!
   */


  var _Group = function () {
  	this._tweens = {};
  	this._tweensAddedDuringUpdate = {};
  };

  _Group.prototype = {
  	getAll: function () {

  		return Object.keys(this._tweens).map(function (tweenId) {
  			return this._tweens[tweenId];
  		}.bind(this));

  	},

  	removeAll: function () {

  		this._tweens = {};

  	},

  	add: function (tween) {

  		this._tweens[tween.getId()] = tween;
  		this._tweensAddedDuringUpdate[tween.getId()] = tween;

  	},

  	remove: function (tween) {

  		delete this._tweens[tween.getId()];
  		delete this._tweensAddedDuringUpdate[tween.getId()];

  	},

  	update: function (time, preserve) {

  		var tweenIds = Object.keys(this._tweens);

  		if (tweenIds.length === 0) {
  			return false;
  		}

  		time = time !== undefined ? time : TWEEN.now();

  		// Tweens are updated in "batches". If you add a new tween during an
  		// update, then the new tween will be updated in the next batch.
  		// If you remove a tween during an update, it may or may not be updated.
  		// However, if the removed tween was added during the current batch,
  		// then it will not be updated.
  		while (tweenIds.length > 0) {
  			this._tweensAddedDuringUpdate = {};

  			for (var i = 0; i < tweenIds.length; i++) {

  				var tween = this._tweens[tweenIds[i]];

  				if (tween && tween.update(time) === false) {
  					tween._isPlaying = false;

  					if (!preserve) {
  						delete this._tweens[tweenIds[i]];
  					}
  				}
  			}

  			tweenIds = Object.keys(this._tweensAddedDuringUpdate);
  		}

  		return true;

  	}
  };

  var TWEEN = new _Group();

  TWEEN.Group = _Group;
  TWEEN._nextId = 0;
  TWEEN.nextId = function () {
  	return TWEEN._nextId++;
  };


  // Include a performance.now polyfill.
  // In node.js, use process.hrtime.
  if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
  	TWEEN.now = function () {
  		var time = process.hrtime();

  		// Convert [seconds, nanoseconds] to milliseconds.
  		return time[0] * 1000 + time[1] / 1000000;
  	};
  }
  // In a browser, use self.performance.now if it is available.
  else if (typeof (self) !== 'undefined' &&
           self.performance !== undefined &&
  		 self.performance.now !== undefined) {
  	// This must be bound, because directly assigning this function
  	// leads to an invocation exception in Chrome.
  	TWEEN.now = self.performance.now.bind(self.performance);
  }
  // Use Date.now if it is available.
  else if (Date.now !== undefined) {
  	TWEEN.now = Date.now;
  }
  // Otherwise, use 'new Date().getTime()'.
  else {
  	TWEEN.now = function () {
  		return new Date().getTime();
  	};
  }


  TWEEN.Tween = function (object, group) {
  	this._isPaused = false;
  	this._pauseStart = null;
  	this._object = object;
  	this._valuesStart = {};
  	this._valuesEnd = {};
  	this._valuesStartRepeat = {};
  	this._duration = 1000;
  	this._repeat = 0;
  	this._repeatDelayTime = undefined;
  	this._yoyo = false;
  	this._isPlaying = false;
  	this._reversed = false;
  	this._delayTime = 0;
  	this._startTime = null;
  	this._easingFunction = TWEEN.Easing.Linear.None;
  	this._interpolationFunction = TWEEN.Interpolation.Linear;
  	this._chainedTweens = [];
  	this._onStartCallback = null;
  	this._onStartCallbackFired = false;
  	this._onUpdateCallback = null;
  	this._onRepeatCallback = null;
  	this._onCompleteCallback = null;
  	this._onStopCallback = null;
  	this._group = group || TWEEN;
  	this._id = TWEEN.nextId();

  };

  TWEEN.Tween.prototype = {
  	getId: function () {
  		return this._id;
  	},

  	isPlaying: function () {
  		return this._isPlaying;
  	},

  	isPaused: function () {
  		return this._isPaused;
  	},

  	to: function (properties, duration) {

  		this._valuesEnd = Object.create(properties);

  		if (duration !== undefined) {
  			this._duration = duration;
  		}

  		return this;

  	},

  	duration: function duration(d) {
  		this._duration = d;
  		return this;
  	},

  	start: function (time) {

  		this._group.add(this);

  		this._isPlaying = true;

  		this._isPaused = false;

  		this._onStartCallbackFired = false;

  		this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
  		this._startTime += this._delayTime;

  		for (var property in this._valuesEnd) {

  			// Check if an Array was provided as property value
  			if (this._valuesEnd[property] instanceof Array) {

  				if (this._valuesEnd[property].length === 0) {
  					continue;
  				}

  				// Create a local copy of the Array with the start value at the front
  				this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

  			}

  			// If `to()` specifies a property that doesn't exist in the source object,
  			// we should not set that property in the object
  			if (this._object[property] === undefined) {
  				continue;
  			}

  			// Save the starting value, but only once.
  			if (typeof(this._valuesStart[property]) === 'undefined') {
  				this._valuesStart[property] = this._object[property];
  			}

  			if ((this._valuesStart[property] instanceof Array) === false) {
  				this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
  			}

  			this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

  		}

  		return this;

  	},

  	stop: function () {

  		if (!this._isPlaying) {
  			return this;
  		}

  		this._group.remove(this);

  		this._isPlaying = false;

  		this._isPaused = false;

  		if (this._onStopCallback !== null) {
  			this._onStopCallback(this._object);
  		}

  		this.stopChainedTweens();
  		return this;

  	},

  	end: function () {

  		this.update(Infinity);
  		return this;

  	},

  	pause: function(time) {

  		if (this._isPaused || !this._isPlaying) {
  			return this;
  		}

  		this._isPaused = true;

  		this._pauseStart = time === undefined ? TWEEN.now() : time;

  		this._group.remove(this);

  		return this;

  	},

  	resume: function(time) {

  		if (!this._isPaused || !this._isPlaying) {
  			return this;
  		}

  		this._isPaused = false;

  		this._startTime += (time === undefined ? TWEEN.now() : time)
  			- this._pauseStart;

  		this._pauseStart = 0;

  		this._group.add(this);

  		return this;

  	},

  	stopChainedTweens: function () {

  		for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
  			this._chainedTweens[i].stop();
  		}

  	},

  	group: function (group) {
  		this._group = group;
  		return this;
  	},

  	delay: function (amount) {

  		this._delayTime = amount;
  		return this;

  	},

  	repeat: function (times) {

  		this._repeat = times;
  		return this;

  	},

  	repeatDelay: function (amount) {

  		this._repeatDelayTime = amount;
  		return this;

  	},

  	yoyo: function (yoyo) {

  		this._yoyo = yoyo;
  		return this;

  	},

  	easing: function (easingFunction) {

  		this._easingFunction = easingFunction;
  		return this;

  	},

  	interpolation: function (interpolationFunction) {

  		this._interpolationFunction = interpolationFunction;
  		return this;

  	},

  	chain: function () {

  		this._chainedTweens = arguments;
  		return this;

  	},

  	onStart: function (callback) {

  		this._onStartCallback = callback;
  		return this;

  	},

  	onUpdate: function (callback) {

  		this._onUpdateCallback = callback;
  		return this;

  	},

  	onRepeat: function onRepeat(callback) {

  		this._onRepeatCallback = callback;
  		return this;

  	},

  	onComplete: function (callback) {

  		this._onCompleteCallback = callback;
  		return this;

  	},

  	onStop: function (callback) {

  		this._onStopCallback = callback;
  		return this;

  	},

  	update: function (time) {

  		var property;
  		var elapsed;
  		var value;

  		if (time < this._startTime) {
  			return true;
  		}

  		if (this._onStartCallbackFired === false) {

  			if (this._onStartCallback !== null) {
  				this._onStartCallback(this._object);
  			}

  			this._onStartCallbackFired = true;
  		}

  		elapsed = (time - this._startTime) / this._duration;
  		elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

  		value = this._easingFunction(elapsed);

  		for (property in this._valuesEnd) {

  			// Don't update properties that do not exist in the source object
  			if (this._valuesStart[property] === undefined) {
  				continue;
  			}

  			var start = this._valuesStart[property] || 0;
  			var end = this._valuesEnd[property];

  			if (end instanceof Array) {

  				this._object[property] = this._interpolationFunction(end, value);

  			} else {

  				// Parses relative end values with start as base (e.g.: +10, -3)
  				if (typeof (end) === 'string') {

  					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
  						end = start + parseFloat(end);
  					} else {
  						end = parseFloat(end);
  					}
  				}

  				// Protect against non numeric properties.
  				if (typeof (end) === 'number') {
  					this._object[property] = start + (end - start) * value;
  				}

  			}

  		}

  		if (this._onUpdateCallback !== null) {
  			this._onUpdateCallback(this._object, elapsed);
  		}

  		if (elapsed === 1) {

  			if (this._repeat > 0) {

  				if (isFinite(this._repeat)) {
  					this._repeat--;
  				}

  				// Reassign starting values, restart by making startTime = now
  				for (property in this._valuesStartRepeat) {

  					if (typeof (this._valuesEnd[property]) === 'string') {
  						this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
  					}

  					if (this._yoyo) {
  						var tmp = this._valuesStartRepeat[property];

  						this._valuesStartRepeat[property] = this._valuesEnd[property];
  						this._valuesEnd[property] = tmp;
  					}

  					this._valuesStart[property] = this._valuesStartRepeat[property];

  				}

  				if (this._yoyo) {
  					this._reversed = !this._reversed;
  				}

  				if (this._repeatDelayTime !== undefined) {
  					this._startTime = time + this._repeatDelayTime;
  				} else {
  					this._startTime = time + this._delayTime;
  				}

  				if (this._onRepeatCallback !== null) {
  					this._onRepeatCallback(this._object);
  				}

  				return true;

  			} else {

  				if (this._onCompleteCallback !== null) {

  					this._onCompleteCallback(this._object);
  				}

  				for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
  					// Make the chained tweens start exactly at the time they should,
  					// even if the `update()` method was called way past the duration of the tween
  					this._chainedTweens[i].start(this._startTime + this._duration);
  				}

  				return false;

  			}

  		}

  		return true;

  	}
  };


  TWEEN.Easing = {

  	Linear: {

  		None: function (k) {

  			return k;

  		}

  	},

  	Quadratic: {

  		In: function (k) {

  			return k * k;

  		},

  		Out: function (k) {

  			return k * (2 - k);

  		},

  		InOut: function (k) {

  			if ((k *= 2) < 1) {
  				return 0.5 * k * k;
  			}

  			return - 0.5 * (--k * (k - 2) - 1);

  		}

  	},

  	Cubic: {

  		In: function (k) {

  			return k * k * k;

  		},

  		Out: function (k) {

  			return --k * k * k + 1;

  		},

  		InOut: function (k) {

  			if ((k *= 2) < 1) {
  				return 0.5 * k * k * k;
  			}

  			return 0.5 * ((k -= 2) * k * k + 2);

  		}

  	},

  	Quartic: {

  		In: function (k) {

  			return k * k * k * k;

  		},

  		Out: function (k) {

  			return 1 - (--k * k * k * k);

  		},

  		InOut: function (k) {

  			if ((k *= 2) < 1) {
  				return 0.5 * k * k * k * k;
  			}

  			return - 0.5 * ((k -= 2) * k * k * k - 2);

  		}

  	},

  	Quintic: {

  		In: function (k) {

  			return k * k * k * k * k;

  		},

  		Out: function (k) {

  			return --k * k * k * k * k + 1;

  		},

  		InOut: function (k) {

  			if ((k *= 2) < 1) {
  				return 0.5 * k * k * k * k * k;
  			}

  			return 0.5 * ((k -= 2) * k * k * k * k + 2);

  		}

  	},

  	Sinusoidal: {

  		In: function (k) {

  			return 1 - Math.cos(k * Math.PI / 2);

  		},

  		Out: function (k) {

  			return Math.sin(k * Math.PI / 2);

  		},

  		InOut: function (k) {

  			return 0.5 * (1 - Math.cos(Math.PI * k));

  		}

  	},

  	Exponential: {

  		In: function (k) {

  			return k === 0 ? 0 : Math.pow(1024, k - 1);

  		},

  		Out: function (k) {

  			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

  		},

  		InOut: function (k) {

  			if (k === 0) {
  				return 0;
  			}

  			if (k === 1) {
  				return 1;
  			}

  			if ((k *= 2) < 1) {
  				return 0.5 * Math.pow(1024, k - 1);
  			}

  			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

  		}

  	},

  	Circular: {

  		In: function (k) {

  			return 1 - Math.sqrt(1 - k * k);

  		},

  		Out: function (k) {

  			return Math.sqrt(1 - (--k * k));

  		},

  		InOut: function (k) {

  			if ((k *= 2) < 1) {
  				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
  			}

  			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

  		}

  	},

  	Elastic: {

  		In: function (k) {

  			if (k === 0) {
  				return 0;
  			}

  			if (k === 1) {
  				return 1;
  			}

  			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

  		},

  		Out: function (k) {

  			if (k === 0) {
  				return 0;
  			}

  			if (k === 1) {
  				return 1;
  			}

  			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

  		},

  		InOut: function (k) {

  			if (k === 0) {
  				return 0;
  			}

  			if (k === 1) {
  				return 1;
  			}

  			k *= 2;

  			if (k < 1) {
  				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
  			}

  			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

  		}

  	},

  	Back: {

  		In: function (k) {

  			var s = 1.70158;

  			return k * k * ((s + 1) * k - s);

  		},

  		Out: function (k) {

  			var s = 1.70158;

  			return --k * k * ((s + 1) * k + s) + 1;

  		},

  		InOut: function (k) {

  			var s = 1.70158 * 1.525;

  			if ((k *= 2) < 1) {
  				return 0.5 * (k * k * ((s + 1) * k - s));
  			}

  			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

  		}

  	},

  	Bounce: {

  		In: function (k) {

  			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

  		},

  		Out: function (k) {

  			if (k < (1 / 2.75)) {
  				return 7.5625 * k * k;
  			} else if (k < (2 / 2.75)) {
  				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
  			} else if (k < (2.5 / 2.75)) {
  				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
  			} else {
  				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
  			}

  		},

  		InOut: function (k) {

  			if (k < 0.5) {
  				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
  			}

  			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

  		}

  	}

  };

  TWEEN.Interpolation = {

  	Linear: function (v, k) {

  		var m = v.length - 1;
  		var f = m * k;
  		var i = Math.floor(f);
  		var fn = TWEEN.Interpolation.Utils.Linear;

  		if (k < 0) {
  			return fn(v[0], v[1], f);
  		}

  		if (k > 1) {
  			return fn(v[m], v[m - 1], m - f);
  		}

  		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

  	},

  	Bezier: function (v, k) {

  		var b = 0;
  		var n = v.length - 1;
  		var pw = Math.pow;
  		var bn = TWEEN.Interpolation.Utils.Bernstein;

  		for (var i = 0; i <= n; i++) {
  			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
  		}

  		return b;

  	},

  	CatmullRom: function (v, k) {

  		var m = v.length - 1;
  		var f = m * k;
  		var i = Math.floor(f);
  		var fn = TWEEN.Interpolation.Utils.CatmullRom;

  		if (v[0] === v[m]) {

  			if (k < 0) {
  				i = Math.floor(f = m * (1 + k));
  			}

  			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

  		} else {

  			if (k < 0) {
  				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
  			}

  			if (k > 1) {
  				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
  			}

  			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

  		}

  	},

  	Utils: {

  		Linear: function (p0, p1, t) {

  			return (p1 - p0) * t + p0;

  		},

  		Bernstein: function (n, i) {

  			var fc = TWEEN.Interpolation.Utils.Factorial;

  			return fc(n) / fc(i) / fc(n - i);

  		},

  		Factorial: (function () {

  			var a = [1];

  			return function (n) {

  				var s = 1;

  				if (a[n]) {
  					return a[n];
  				}

  				for (var i = n; i > 1; i--) {
  					s *= i;
  				}

  				a[n] = s;
  				return s;

  			};

  		})(),

  		CatmullRom: function (p0, p1, p2, p3, t) {

  			var v0 = (p2 - p0) * 0.5;
  			var v1 = (p3 - p1) * 0.5;
  			var t2 = t * t;
  			var t3 = t * t2;

  			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

  		}

  	}

  };
  TWEEN.version = version;

  var materialDispose = function materialDispose(material) {
    if (material instanceof Array) {
      material.forEach(materialDispose);
    } else {
      if (material.map) {
        material.map.dispose();
      }

      material.dispose();
    }
  };

  var deallocate = function deallocate(obj) {
    if (obj.geometry) {
      obj.geometry.dispose();
    }

    if (obj.material) {
      materialDispose(obj.material);
    }

    if (obj.texture) {
      obj.texture.dispose();
    }

    if (obj.children) {
      obj.children.forEach(deallocate);
    }
  };

  var emptyObject = function emptyObject(obj) {
    while (obj.children.length) {
      var childObj = obj.children[0];
      obj.remove(childObj);
      deallocate(childObj);
    }
  };

  function linkKapsule (kapsulePropName, kapsuleType) {
    var dummyK = new kapsuleType(); // To extract defaults

    return {
      linkProp: function linkProp(prop) {
        // link property config
        return {
          "default": dummyK[prop](),
          onChange: function onChange(v, state) {
            state[kapsulePropName][prop](v);
          },
          triggerUpdate: false
        };
      },
      linkMethod: function linkMethod(method) {
        // link method pass-through
        return function (state) {
          var kapsuleInstance = state[kapsulePropName];

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var returnVal = kapsuleInstance[method].apply(kapsuleInstance, args);
          return returnVal === kapsuleInstance ? this // chain based on the parent object, not the inner kapsule
          : returnVal;
        };
      }
    };
  }

  var GLOBE_RADIUS = 100;

  function polar2Cartesian(lat, lng) {
    var relAltitude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (90 - lng) * Math.PI / 180;
    var r = GLOBE_RADIUS * (1 + relAltitude);
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.cos(phi),
      z: r * Math.sin(phi) * Math.sin(theta)
    };
  }

  function cartesian2Polar(_ref) {
    var x = _ref.x,
        y = _ref.y,
        z = _ref.z;
    var r = Math.sqrt(x * x + y * y + z * z);
    var phi = Math.acos(y / r);
    var theta = Math.atan2(z, x);
    return {
      lat: 90 - phi * 180 / Math.PI,
      lng: 90 - theta * 180 / Math.PI,
      altitude: r / GLOBE_RADIUS - 1
    };
  }

  var earcut_1 = earcut;
  var default_1 = earcut;

  function earcut(data, holeIndices, dim) {

      dim = dim || 2;

      var hasHoles = holeIndices && holeIndices.length,
          outerLen = hasHoles ? holeIndices[0] * dim : data.length,
          outerNode = linkedList(data, 0, outerLen, dim, true),
          triangles = [];

      if (!outerNode || outerNode.next === outerNode.prev) return triangles;

      var minX, minY, maxX, maxY, x, y, invSize;

      if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

      // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
      if (data.length > 80 * dim) {
          minX = maxX = data[0];
          minY = maxY = data[1];

          for (var i = dim; i < outerLen; i += dim) {
              x = data[i];
              y = data[i + 1];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
          }

          // minX, minY and invSize are later used to transform coords into integers for z-order calculation
          invSize = Math.max(maxX - minX, maxY - minY);
          invSize = invSize !== 0 ? 1 / invSize : 0;
      }

      earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

      return triangles;
  }

  // create a circular doubly linked list from polygon points in the specified winding order
  function linkedList(data, start, end, dim, clockwise) {
      var i, last;

      if (clockwise === (signedArea(data, start, end, dim) > 0)) {
          for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
      } else {
          for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
      }

      if (last && equals(last, last.next)) {
          removeNode(last);
          last = last.next;
      }

      return last;
  }

  // eliminate colinear or duplicate points
  function filterPoints(start, end) {
      if (!start) return start;
      if (!end) end = start;

      var p = start,
          again;
      do {
          again = false;

          if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
              removeNode(p);
              p = end = p.prev;
              if (p === p.next) break;
              again = true;

          } else {
              p = p.next;
          }
      } while (again || p !== end);

      return end;
  }

  // main ear slicing loop which triangulates a polygon (given as a linked list)
  function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear) return;

      // interlink polygon nodes in z-order
      if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

      var stop = ear,
          prev, next;

      // iterate through ears, slicing them one by one
      while (ear.prev !== ear.next) {
          prev = ear.prev;
          next = ear.next;

          if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
              // cut off the triangle
              triangles.push(prev.i / dim);
              triangles.push(ear.i / dim);
              triangles.push(next.i / dim);

              removeNode(ear);

              // skipping the next vertex leads to less sliver triangles
              ear = next.next;
              stop = next.next;

              continue;
          }

          ear = next;

          // if we looped through the whole remaining polygon and can't find any more ears
          if (ear === stop) {
              // try filtering points and slicing again
              if (!pass) {
                  earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

              // if this didn't work, try curing all small self-intersections locally
              } else if (pass === 1) {
                  ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                  earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

              // as a last resort, try splitting the remaining polygon into two
              } else if (pass === 2) {
                  splitEarcut(ear, triangles, dim, minX, minY, invSize);
              }

              break;
          }
      }
  }

  // check whether a polygon node forms a valid ear with adjacent nodes
  function isEar(ear) {
      var a = ear.prev,
          b = ear,
          c = ear.next;

      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

      // now make sure we don't have other points inside the potential ear
      var p = ear.next.next;

      while (p !== ear.prev) {
          if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
              area(p.prev, p, p.next) >= 0) return false;
          p = p.next;
      }

      return true;
  }

  function isEarHashed(ear, minX, minY, invSize) {
      var a = ear.prev,
          b = ear,
          c = ear.next;

      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

      // triangle bbox; min & max are calculated like this for speed
      var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
          minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
          maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
          maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

      // z-order range for the current triangle bbox;
      var minZ = zOrder(minTX, minTY, minX, minY, invSize),
          maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

      var p = ear.prevZ,
          n = ear.nextZ;

      // look for points inside the triangle in both directions
      while (p && p.z >= minZ && n && n.z <= maxZ) {
          if (p !== ear.prev && p !== ear.next &&
              pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
              area(p.prev, p, p.next) >= 0) return false;
          p = p.prevZ;

          if (n !== ear.prev && n !== ear.next &&
              pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
              area(n.prev, n, n.next) >= 0) return false;
          n = n.nextZ;
      }

      // look for remaining points in decreasing z-order
      while (p && p.z >= minZ) {
          if (p !== ear.prev && p !== ear.next &&
              pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
              area(p.prev, p, p.next) >= 0) return false;
          p = p.prevZ;
      }

      // look for remaining points in increasing z-order
      while (n && n.z <= maxZ) {
          if (n !== ear.prev && n !== ear.next &&
              pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
              area(n.prev, n, n.next) >= 0) return false;
          n = n.nextZ;
      }

      return true;
  }

  // go through all polygon nodes and cure small local self-intersections
  function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
          var a = p.prev,
              b = p.next.next;

          if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

              triangles.push(a.i / dim);
              triangles.push(p.i / dim);
              triangles.push(b.i / dim);

              // remove two nodes involved
              removeNode(p);
              removeNode(p.next);

              p = start = b;
          }
          p = p.next;
      } while (p !== start);

      return filterPoints(p);
  }

  // try splitting polygon into two and triangulate them independently
  function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      // look for a valid diagonal that divides the polygon into two
      var a = start;
      do {
          var b = a.next.next;
          while (b !== a.prev) {
              if (a.i !== b.i && isValidDiagonal(a, b)) {
                  // split the polygon in two by the diagonal
                  var c = splitPolygon(a, b);

                  // filter colinear points around the cuts
                  a = filterPoints(a, a.next);
                  c = filterPoints(c, c.next);

                  // run earcut on each half
                  earcutLinked(a, triangles, dim, minX, minY, invSize);
                  earcutLinked(c, triangles, dim, minX, minY, invSize);
                  return;
              }
              b = b.next;
          }
          a = a.next;
      } while (a !== start);
  }

  // link every hole into the outer loop, producing a single-ring polygon without holes
  function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [],
          i, len, start, end, list;

      for (i = 0, len = holeIndices.length; i < len; i++) {
          start = holeIndices[i] * dim;
          end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          list = linkedList(data, start, end, dim, false);
          if (list === list.next) list.steiner = true;
          queue.push(getLeftmost(list));
      }

      queue.sort(compareX);

      // process holes from left to right
      for (i = 0; i < queue.length; i++) {
          eliminateHole(queue[i], outerNode);
          outerNode = filterPoints(outerNode, outerNode.next);
      }

      return outerNode;
  }

  function compareX(a, b) {
      return a.x - b.x;
  }

  // find a bridge between vertices that connects hole with an outer ring and and link it
  function eliminateHole(hole, outerNode) {
      outerNode = findHoleBridge(hole, outerNode);
      if (outerNode) {
          var b = splitPolygon(outerNode, hole);

          // filter collinear points around the cuts
          filterPoints(outerNode, outerNode.next);
          filterPoints(b, b.next);
      }
  }

  // David Eberly's algorithm for finding a bridge between hole and outer polygon
  function findHoleBridge(hole, outerNode) {
      var p = outerNode,
          hx = hole.x,
          hy = hole.y,
          qx = -Infinity,
          m;

      // find a segment intersected by a ray from the hole's leftmost point to the left;
      // segment's endpoint with lesser x will be potential connection point
      do {
          if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
              var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
              if (x <= hx && x > qx) {
                  qx = x;
                  if (x === hx) {
                      if (hy === p.y) return p;
                      if (hy === p.next.y) return p.next;
                  }
                  m = p.x < p.next.x ? p : p.next;
              }
          }
          p = p.next;
      } while (p !== outerNode);

      if (!m) return null;

      if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

      // look for points inside the triangle of hole point, segment intersection and endpoint;
      // if there are no points found, we have a valid connection;
      // otherwise choose the point of the minimum angle with the ray as connection point

      var stop = m,
          mx = m.x,
          my = m.y,
          tanMin = Infinity,
          tan;

      p = m;

      do {
          if (hx >= p.x && p.x >= mx && hx !== p.x &&
                  pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

              tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

              if (locallyInside(p, hole) &&
                  (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                  m = p;
                  tanMin = tan;
              }
          }

          p = p.next;
      } while (p !== stop);

      return m;
  }

  // whether sector in vertex m contains sector in vertex p in the same coordinates
  function sectorContainsSector(m, p) {
      return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
  }

  // interlink polygon nodes in z-order
  function indexCurve(start, minX, minY, invSize) {
      var p = start;
      do {
          if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
          p.prevZ = p.prev;
          p.nextZ = p.next;
          p = p.next;
      } while (p !== start);

      p.prevZ.nextZ = null;
      p.prevZ = null;

      sortLinked(p);
  }

  // Simon Tatham's linked list merge sort algorithm
  // http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
  function sortLinked(list) {
      var i, p, q, e, tail, numMerges, pSize, qSize,
          inSize = 1;

      do {
          p = list;
          list = null;
          tail = null;
          numMerges = 0;

          while (p) {
              numMerges++;
              q = p;
              pSize = 0;
              for (i = 0; i < inSize; i++) {
                  pSize++;
                  q = q.nextZ;
                  if (!q) break;
              }
              qSize = inSize;

              while (pSize > 0 || (qSize > 0 && q)) {

                  if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                      e = p;
                      p = p.nextZ;
                      pSize--;
                  } else {
                      e = q;
                      q = q.nextZ;
                      qSize--;
                  }

                  if (tail) tail.nextZ = e;
                  else list = e;

                  e.prevZ = tail;
                  tail = e;
              }

              p = q;
          }

          tail.nextZ = null;
          inSize *= 2;

      } while (numMerges > 1);

      return list;
  }

  // z-order of a point given coords and inverse of the longer side of data bbox
  function zOrder(x, y, minX, minY, invSize) {
      // coords are transformed into non-negative 15-bit integer range
      x = 32767 * (x - minX) * invSize;
      y = 32767 * (y - minY) * invSize;

      x = (x | (x << 8)) & 0x00FF00FF;
      x = (x | (x << 4)) & 0x0F0F0F0F;
      x = (x | (x << 2)) & 0x33333333;
      x = (x | (x << 1)) & 0x55555555;

      y = (y | (y << 8)) & 0x00FF00FF;
      y = (y | (y << 4)) & 0x0F0F0F0F;
      y = (y | (y << 2)) & 0x33333333;
      y = (y | (y << 1)) & 0x55555555;

      return x | (y << 1);
  }

  // find the leftmost node of a polygon ring
  function getLeftmost(start) {
      var p = start,
          leftmost = start;
      do {
          if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
          p = p.next;
      } while (p !== start);

      return leftmost;
  }

  // check if a point lies within a convex triangle
  function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
             (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
             (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
  }

  // check if a diagonal between two polygon nodes is valid (lies in polygon interior)
  function isValidDiagonal(a, b) {
      return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
             (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
              (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
              equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
  }

  // signed area of a triangle
  function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  }

  // check if two points are equal
  function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
  }

  // check if two segments intersect
  function intersects(p1, q1, p2, q2) {
      var o1 = sign(area(p1, q1, p2));
      var o2 = sign(area(p1, q1, q2));
      var o3 = sign(area(p2, q2, p1));
      var o4 = sign(area(p2, q2, q1));

      if (o1 !== o2 && o3 !== o4) return true; // general case

      if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
      if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
      if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
      if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

      return false;
  }

  // for collinear points p, q, r, check if point q lies on segment pr
  function onSegment(p, q, r) {
      return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
  }

  function sign(num) {
      return num > 0 ? 1 : num < 0 ? -1 : 0;
  }

  // check if a polygon diagonal intersects any polygon segments
  function intersectsPolygon(a, b) {
      var p = a;
      do {
          if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                  intersects(p, p.next, a, b)) return true;
          p = p.next;
      } while (p !== a);

      return false;
  }

  // check if a polygon diagonal is locally inside the polygon
  function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0 ?
          area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
          area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
  }

  // check if the middle point of a polygon diagonal is inside the polygon
  function middleInside(a, b) {
      var p = a,
          inside = false,
          px = (a.x + b.x) / 2,
          py = (a.y + b.y) / 2;
      do {
          if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                  (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
              inside = !inside;
          p = p.next;
      } while (p !== a);

      return inside;
  }

  // link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
  // if one belongs to the outer ring and another to a hole, it merges it into a single ring
  function splitPolygon(a, b) {
      var a2 = new Node(a.i, a.x, a.y),
          b2 = new Node(b.i, b.x, b.y),
          an = a.next,
          bp = b.prev;

      a.next = b;
      b.prev = a;

      a2.next = an;
      an.prev = a2;

      b2.next = a2;
      a2.prev = b2;

      bp.next = b2;
      b2.prev = bp;

      return b2;
  }

  // create a node and optionally link it with previous one (in a circular doubly linked list)
  function insertNode(i, x, y, last) {
      var p = new Node(i, x, y);

      if (!last) {
          p.prev = p;
          p.next = p;

      } else {
          p.next = last.next;
          p.prev = last;
          last.next.prev = p;
          last.next = p;
      }
      return p;
  }

  function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;

      if (p.prevZ) p.prevZ.nextZ = p.nextZ;
      if (p.nextZ) p.nextZ.prevZ = p.prevZ;
  }

  function Node(i, x, y) {
      // vertex index in coordinates array
      this.i = i;

      // vertex coordinates
      this.x = x;
      this.y = y;

      // previous and next vertex nodes in a polygon ring
      this.prev = null;
      this.next = null;

      // z-order curve value
      this.z = null;

      // previous and next nodes in z-order
      this.prevZ = null;
      this.nextZ = null;

      // indicates whether this is a steiner point
      this.steiner = false;
  }

  // return a percentage difference between the polygon area and its triangulation area;
  // used to verify correctness of triangulation
  earcut.deviation = function (data, holeIndices, dim, triangles) {
      var hasHoles = holeIndices && holeIndices.length;
      var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

      var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      if (hasHoles) {
          for (var i = 0, len = holeIndices.length; i < len; i++) {
              var start = holeIndices[i] * dim;
              var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
              polygonArea -= Math.abs(signedArea(data, start, end, dim));
          }
      }

      var trianglesArea = 0;
      for (i = 0; i < triangles.length; i += 3) {
          var a = triangles[i] * dim;
          var b = triangles[i + 1] * dim;
          var c = triangles[i + 2] * dim;
          trianglesArea += Math.abs(
              (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
              (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
      }

      return polygonArea === 0 && trianglesArea === 0 ? 0 :
          Math.abs((trianglesArea - polygonArea) / polygonArea);
  };

  function signedArea(data, start, end, dim) {
      var sum = 0;
      for (var i = start, j = end - dim; i < end; i += dim) {
          sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
          j = i;
      }
      return sum;
  }

  // turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
  earcut.flatten = function (data) {
      var dim = data[0][0].length,
          result = {vertices: [], holes: [], dimensions: dim},
          holeIndex = 0;

      for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < data[i].length; j++) {
              for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
          }
          if (i > 0) {
              holeIndex += data[i - 1].length;
              result.holes.push(holeIndex);
          }
      }
      return result;
  };
  earcut_1.default = default_1;

  function _slicedToArray$2(arr, i) {
    return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _nonIterableRest$2();
  }

  function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$2(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var getInterpolatedVals = function getInterpolatedVals(start, end, numPnts) {
    var result = [];

    for (var i = 1; i <= numPnts; i++) {
      result.push(start + (end - start) * i / (numPnts + 1));
    }

    return result;
  };

  var interpolateLine = function interpolateLine() {
    var lineCoords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var maxDegDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var result = [];
    var prevPnt = null;
    lineCoords.forEach(function (pnt) {
      if (prevPnt) {
        var dist = Math.sqrt(Math.pow(pnt[0] - prevPnt[0], 2) + Math.pow(pnt[1] - prevPnt[1], 2));

        if (dist > maxDegDistance) {
          var numAdditionalPnts = Math.floor(dist / maxDegDistance);
          var lngs = getInterpolatedVals(prevPnt[0], pnt[0], numAdditionalPnts);
          var lats = getInterpolatedVals(prevPnt[1], pnt[1], numAdditionalPnts);

          for (var i = 0, len = lngs.length; i < len; i++) {
            result.push([lngs[i], lats[i]]);
          }
        }
      }

      result.push(prevPnt = pnt);
    });
    return result;
  };

  var THREE = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three.BufferGeometry,
    Float32BufferAttribute: three.Float32BufferAttribute,
    Geometry: three.Geometry
  };

  var setAttributeFn = new THREE.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';

  function GeoJsonGeometry(geoJson) {
    var _this = this;

    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var resolution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
    THREE.BufferGeometry.call(this);
    this.type = 'GeoJsonGeometry';
    this.parameters = {
      geoJson: geoJson,
      radius: radius,
      resolution: resolution
    }; // process various geometry types

    var groups = ({
      Point: genPoint,
      MultiPoint: genMultiPoint,
      LineString: genLineString,
      MultiLineString: genMultiLineString,
      Polygon: genPolygon,
      MultiPolygon: genMultiPolygon
    }[geoJson.type] || function () {
      return [];
    })(geoJson.coordinates, radius); // concat groups


    var indices = [],
        vertices = [];
    var groupCnt = 0;
    groups.forEach(function (newG) {
      var prevIndCnt = indices.length;
      concatGroup({
        indices: indices,
        vertices: vertices
      }, newG);

      _this.addGroup(prevIndCnt, indices.length - prevIndCnt, groupCnt++);
    }); // build geometry

    indices.length && this.setIndex(indices);
    vertices.length && this[setAttributeFn]('position', new THREE.Float32BufferAttribute(vertices, 3)); //

    function genPoint(coords, r) {
      var vertices = polar2Cartesian$1(coords[1], coords[0], r);
      var indices = [];
      return [{
        vertices: vertices,
        indices: indices
      }];
    }

    function genMultiPoint(coords, r) {
      var result = {
        vertices: [],
        indices: []
      };
      coords.map(function (c) {
        return genPoint(c, r);
      }).forEach(function (_ref) {
        var _ref2 = _slicedToArray$2(_ref, 1),
            newPnt = _ref2[0];

        concatGroup(result, newPnt);
      });
      return [result];
    }

    function genLineString(coords, r) {
      var coords3d = interpolateLine(coords, resolution).map(function (_ref3) {
        var _ref4 = _slicedToArray$2(_ref3, 2),
            lng = _ref4[0],
            lat = _ref4[1];

        return polar2Cartesian$1(lat, lng, r);
      });

      var _earcut$flatten = earcut_1.flatten([coords3d]),
          vertices = _earcut$flatten.vertices;

      var numPoints = Math.round(vertices.length / 3);
      var indices = [];

      for (var vIdx = 1; vIdx < numPoints; vIdx++) {
        indices.push(vIdx - 1, vIdx);
      }

      return [{
        vertices: vertices,
        indices: indices
      }];
    }

    function genMultiLineString(coords, r) {
      var result = {
        vertices: [],
        indices: []
      };
      coords.map(function (c) {
        return genLineString(c, r);
      }).forEach(function (_ref5) {
        var _ref6 = _slicedToArray$2(_ref5, 1),
            newLine = _ref6[0];

        concatGroup(result, newLine);
      });
      return [result];
    }

    function genPolygon(coords, r) {
      var coords3d = coords.map(function (coordsSegment) {
        return interpolateLine(coordsSegment, resolution).map(function (_ref7) {
          var _ref8 = _slicedToArray$2(_ref7, 2),
              lng = _ref8[0],
              lat = _ref8[1];

          return polar2Cartesian$1(lat, lng, r);
        });
      }); // Each point generates 3 vertice items (x,y,z).

      var _earcut$flatten2 = earcut_1.flatten(coords3d),
          vertices = _earcut$flatten2.vertices,
          holes = _earcut$flatten2.holes;

      var firstHoleIdx = holes[0] || Infinity;
      var outerVertices = vertices.slice(0, firstHoleIdx);
      var holeVertices = vertices.slice(firstHoleIdx);
      var holesIdx = new Set(holes);
      var numPoints = Math.round(vertices.length / 3);
      var outerIndices = [],
          holeIndices = [];

      for (var vIdx = 1; vIdx < numPoints; vIdx++) {
        if (!holesIdx.has(vIdx)) {
          if (vIdx < firstHoleIdx) {
            outerIndices.push(vIdx - 1, vIdx);
          } else {
            holeIndices.push(vIdx - 1 - firstHoleIdx, vIdx - firstHoleIdx);
          }
        }
      }

      var groups = [{
        indices: outerIndices,
        vertices: outerVertices
      }];

      if (holes.length) {
        groups.push({
          indices: holeIndices,
          vertices: holeVertices
        });
      }

      return groups;
    }

    function genMultiPolygon(coords, r) {
      var outer = {
        vertices: [],
        indices: []
      };
      var holes = {
        vertices: [],
        indices: []
      };
      coords.map(function (c) {
        return genPolygon(c, r);
      }).forEach(function (_ref9) {
        var _ref10 = _slicedToArray$2(_ref9, 2),
            newOuter = _ref10[0],
            newHoles = _ref10[1];

        concatGroup(outer, newOuter);
        newHoles && concatGroup(holes, newHoles);
      });
      var groups = [outer];
      holes.vertices.length && groups.push(holes);
      return groups;
    }
  }

  GeoJsonGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
  GeoJsonGeometry.prototype.constructor = GeoJsonGeometry; //

  function concatGroup(main, extra) {
    var prevVertCnt = Math.round(main.vertices.length / 3);
    concatArr(main.vertices, extra.vertices);
    concatArr(main.indices, extra.indices.map(function (ind) {
      return ind + prevVertCnt;
    }));
  }

  function concatArr(target, src) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = src[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var e = _step.value;
        target.push(e);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function polar2Cartesian$1(lat, lng) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (90 - lng) * Math.PI / 180;
    return [r * Math.sin(phi) * Math.cos(theta), // x
    r * Math.cos(phi), // y
    r * Math.sin(phi) * Math.sin(theta) // z
    ];
  }

  var fragmentShader = "\nuniform vec3 color;\nuniform float coefficient;\nuniform float power;\nvarying vec3 vVertexNormal;\nvarying vec3 vVertexWorldPosition;\nvoid main() {\n  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;\n  vec3 viewCameraToVertex\t= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;\n  viewCameraToVertex = normalize(viewCameraToVertex);\n  float intensity\t= pow(\n    coefficient + dot(vVertexNormal, viewCameraToVertex),\n    power\n  );\n  gl_FragColor = vec4(color, intensity);\n}";
  var vertexShader = "\nvarying vec3 vVertexWorldPosition;\nvarying vec3 vVertexNormal;\nvoid main() {\n  vVertexNormal\t= normalize(normalMatrix * normal);\n  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  gl_Position\t= projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
  // Based off: http://stemkoski.blogspot.fr/2013/07/shaders-in-threejs-glow-and-halo.html
  function createGlowMaterial(coefficient, color, power) {
      return new three.ShaderMaterial({
          depthWrite: false,
          fragmentShader: fragmentShader,
          transparent: true,
          uniforms: {
              coefficient: {
                  type: 'f',
                  value: coefficient,
              },
              color: {
                  type: 'c',
                  value: new three.Color(color),
              },
              power: {
                  type: 'f',
                  value: power,
              },
          },
          vertexShader: vertexShader,
      });
  }
  function createGlowGeometry(geometry, size) {
      // gather vertexNormals from geometry.faces
      var glowGeometry = geometry.clone();
      var vertexNormals = new Array(glowGeometry.vertices.length);
      glowGeometry.faces.forEach(function (face) {
          if (face instanceof three.Face3) {
              vertexNormals[face.a] = face.vertexNormals[0];
              vertexNormals[face.b] = face.vertexNormals[1];
              vertexNormals[face.c] = face.vertexNormals[2];
          }
          else {
              console.error('Face needs to be an instance of THREE.Face3.');
          }
      });
      // modify the vertices according to vertexNormal
      glowGeometry.vertices.forEach(function (vertex, i) {
          var _a = vertexNormals[i], x = _a.x, y = _a.y, z = _a.z;
          vertex.x += x * size;
          vertex.y += y * size;
          vertex.z += z * size;
      });
      return glowGeometry;
  }
  var defaultOptions = {
      backside: true,
      coefficient: 0.5,
      color: 'gold',
      size: 2,
      power: 1,
  };
  function createGlowMesh(geometry, options) {
      if (options === void 0) { options = defaultOptions; }
      var backside = options.backside, coefficient = options.coefficient, color = options.color, size = options.size, power = options.power;
      var glowGeometry = createGlowGeometry(geometry, size);
      var glowMaterial = createGlowMaterial(coefficient, color, power);
      if (backside) {
          glowMaterial.side = three.BackSide;
      }
      return new three.Mesh(glowGeometry, glowMaterial);
  }

  // Adds floating point numbers with twice the normal precision.
  // Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
  // Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
  // 305–363 (1997).
  // Code adapted from GeographicLib by Charles F. F. Karney,
  // http://geographiclib.sourceforge.net/

  function adder() {
    return new Adder;
  }

  function Adder() {
    this.reset();
  }

  Adder.prototype = {
    constructor: Adder,
    reset: function() {
      this.s = // rounded value
      this.t = 0; // exact error
    },
    add: function(y) {
      add(temp, y, this.t);
      add(this, temp.s, this.s);
      if (this.s) this.t += temp.t;
      else this.s = temp.t;
    },
    valueOf: function() {
      return this.s;
    }
  };

  var temp = new Adder;

  function add(adder, a, b) {
    var x = adder.s = a + b,
        bv = x - a,
        av = x - bv;
    adder.t = (a - av) + (b - bv);
  }

  var epsilon = 1e-6;
  var pi = Math.PI;
  var halfPi = pi / 2;

  var degrees = 180 / pi;
  var radians = pi / 180;

  var abs = Math.abs;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var ceil = Math.ceil;
  var sin = Math.sin;
  var sqrt = Math.sqrt;

  function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
  }

  function haversin(x) {
    return (x = sin(x / 2)) * x;
  }

  function noop() {}

  function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
      streamGeometryType[geometry.type](geometry, stream);
    }
  }

  var streamObjectType = {
    Feature: function(object, stream) {
      streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) streamGeometry(features[i].geometry, stream);
    }
  };

  var streamGeometryType = {
    Sphere: function(object, stream) {
      stream.sphere();
    },
    Point: function(object, stream) {
      object = object.coordinates;
      stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
      streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
      streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) streamGeometry(geometries[i], stream);
    }
  };

  function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
  }

  function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while (++i < n) streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
  }

  function geoStream(object, stream) {
    if (object && streamObjectType.hasOwnProperty(object.type)) {
      streamObjectType[object.type](object, stream);
    } else {
      streamGeometry(object, stream);
    }
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function bisector(compare) {
    if (compare.length === 1) compare = ascendingComparator(compare);
    return {
      left: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1;
          else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid;
          else lo = mid + 1;
        }
        return lo;
      }
    };
  }

  function ascendingComparator(f) {
    return function(d, x) {
      return ascending(f(d), x);
    };
  }

  var ascendingBisect = bisector(ascending);

  function range(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

    var i = -1,
        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
        range = new Array(n);

    while (++i < n) {
      range[i] = start + i * step;
    }

    return range;
  }

  var lengthSum = adder(),
      lambda0,
      sinPhi0,
      cosPhi0;

  var lengthStream = {
    sphere: noop,
    point: noop,
    lineStart: lengthLineStart,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop
  };

  function lengthLineStart() {
    lengthStream.point = lengthPointFirst;
    lengthStream.lineEnd = lengthLineEnd;
  }

  function lengthLineEnd() {
    lengthStream.point = lengthStream.lineEnd = noop;
  }

  function lengthPointFirst(lambda, phi) {
    lambda *= radians, phi *= radians;
    lambda0 = lambda, sinPhi0 = sin(phi), cosPhi0 = cos(phi);
    lengthStream.point = lengthPoint;
  }

  function lengthPoint(lambda, phi) {
    lambda *= radians, phi *= radians;
    var sinPhi = sin(phi),
        cosPhi = cos(phi),
        delta = abs(lambda - lambda0),
        cosDelta = cos(delta),
        sinDelta = sin(delta),
        x = cosPhi * sinDelta,
        y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
        z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
    lengthSum.add(atan2(sqrt(x * x + y * y), z));
    lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
  }

  function length(object) {
    lengthSum.reset();
    geoStream(object, lengthStream);
    return +lengthSum;
  }

  var coordinates = [null, null],
      object = {type: "LineString", coordinates: coordinates};

  function geoDistance(a, b) {
    coordinates[0] = a;
    coordinates[1] = b;
    return length(object);
  }

  function graticuleX(y0, y1, dy) {
    var y = range(y0, y1 - epsilon, dy).concat(y1);
    return function(x) { return y.map(function(y) { return [x, y]; }); };
  }

  function graticuleY(x0, x1, dx) {
    var x = range(x0, x1 - epsilon, dx).concat(x1);
    return function(y) { return x.map(function(x) { return [x, y]; }); };
  }

  function graticule() {
    var x1, x0, X1, X0,
        y1, y0, Y1, Y0,
        dx = 10, dy = dx, DX = 90, DY = 360,
        x, y, X, Y,
        precision = 2.5;

    function graticule() {
      return {type: "MultiLineString", coordinates: lines()};
    }

    function lines() {
      return range(ceil(X0 / DX) * DX, X1, DX).map(X)
          .concat(range(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
          .concat(range(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs(x % DX) > epsilon; }).map(x))
          .concat(range(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs(y % DY) > epsilon; }).map(y));
    }

    graticule.lines = function() {
      return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
    };

    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [
          X(X0).concat(
          Y(Y1).slice(1),
          X(X1).reverse().slice(1),
          Y(Y0).reverse().slice(1))
        ]
      };
    };

    graticule.extent = function(_) {
      if (!arguments.length) return graticule.extentMinor();
      return graticule.extentMajor(_).extentMinor(_);
    };

    graticule.extentMajor = function(_) {
      if (!arguments.length) return [[X0, Y0], [X1, Y1]];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };

    graticule.extentMinor = function(_) {
      if (!arguments.length) return [[x0, y0], [x1, y1]];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };

    graticule.step = function(_) {
      if (!arguments.length) return graticule.stepMinor();
      return graticule.stepMajor(_).stepMinor(_);
    };

    graticule.stepMajor = function(_) {
      if (!arguments.length) return [DX, DY];
      DX = +_[0], DY = +_[1];
      return graticule;
    };

    graticule.stepMinor = function(_) {
      if (!arguments.length) return [dx, dy];
      dx = +_[0], dy = +_[1];
      return graticule;
    };

    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = graticuleX(y0, y1, 90);
      y = graticuleY(x0, x1, precision);
      X = graticuleX(Y0, Y1, 90);
      Y = graticuleY(X0, X1, precision);
      return graticule;
    };

    return graticule
        .extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]])
        .extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
  }

  function graticule10() {
    return graticule()();
  }

  function geoInterpolate(a, b) {
    var x0 = a[0] * radians,
        y0 = a[1] * radians,
        x1 = b[0] * radians,
        y1 = b[1] * radians,
        cy0 = cos(y0),
        sy0 = sin(y0),
        cy1 = cos(y1),
        sy1 = sin(y1),
        kx0 = cy0 * cos(x0),
        ky0 = cy0 * sin(x0),
        kx1 = cy1 * cos(x1),
        ky1 = cy1 * sin(x1),
        d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
        k = sin(d);

    var interpolate = d ? function(t) {
      var B = sin(t *= d) / k,
          A = sin(d - t) / k,
          x = A * kx0 + B * kx1,
          y = A * ky0 + B * ky1,
          z = A * sy0 + B * sy1;
      return [
        atan2(y, x) * degrees,
        atan2(z, sqrt(x * x + y * y)) * degrees
      ];
    } : function() {
      return [x0 * degrees, y0 * degrees];
    };

    interpolate.distance = d;

    return interpolate;
  }

  var THREE$1 = window.THREE ? _objectSpread2({}, window.THREE, {
    SphereGeometry: three.SphereGeometry // keep SphereGeometry from module for instance matching with three-glow-mesh

  }) : {
    Color: three.Color,
    LineBasicMaterial: three.LineBasicMaterial,
    LineSegments: three.LineSegments,
    Mesh: three.Mesh,
    MeshPhongMaterial: three.MeshPhongMaterial,
    SphereGeometry: three.SphereGeometry,
    TextureLoader: three.TextureLoader
  };

  var GlobeLayerKapsule = index({
    props: {
      globeImageUrl: {},
      bumpImageUrl: {},
      showAtmosphere: {
        "default": true,
        onChange: function onChange(showAtmosphere, state) {
          state.atmosphereObj.visible = !!showAtmosphere;
        },
        triggerUpdate: false
      },
      showGraticules: {
        "default": false,
        onChange: function onChange(showGraticules, state) {
          state.graticulesObj.visible = !!showGraticules;
        },
        triggerUpdate: false
      },
      onReady: {
        "default": function _default() {},
        triggerUpdate: false
      }
    },
    methods: {
      globeMaterial: function globeMaterial(state) {
        return state.globeObj.material;
      }
    },
    stateInit: function stateInit() {
      // create globe
      var globeGeometry = new THREE$1.SphereGeometry(GLOBE_RADIUS, 75, 75);
      var globeObj = new THREE$1.Mesh(globeGeometry, new THREE$1.MeshPhongMaterial({
        color: 0x000000,
        transparent: true
      }));
      globeObj.rotation.y = -Math.PI / 2; // face prime meridian along Z axis

      globeObj.__globeObjType = 'globe'; // Add object type
      // create atmosphere

      var atmosphereObj = createGlowMesh(globeObj.geometry, {
        backside: true,
        color: 'lightskyblue',
        size: GLOBE_RADIUS * 0.15,
        power: 3.5,
        // dispersion
        coefficient: 0.1
      });
      atmosphereObj.__globeObjType = 'atmosphere'; // Add object type
      // create graticules

      var graticulesObj = new THREE$1.LineSegments(new GeoJsonGeometry(graticule10(), GLOBE_RADIUS, 2), new THREE$1.LineBasicMaterial({
        color: 'lightgrey',
        transparent: true,
        opacity: 0.1
      }));
      return {
        globeObj: globeObj,
        atmosphereObj: atmosphereObj,
        graticulesObj: graticulesObj
      };
    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
      state.scene.add(state.globeObj); // add globe

      state.scene.add(state.atmosphereObj); // add atmosphere

      state.scene.add(state.graticulesObj); // add graticules

      state.ready = false;
    },
    update: function update(state, changedProps) {
      var globeMaterial = state.globeObj.material;

      if (changedProps.hasOwnProperty('globeImageUrl')) {
        if (!state.globeImageUrl) {
          // Black globe if no image
          globeMaterial.color = new THREE$1.Color(0x000000);
        } else {
          new THREE$1.TextureLoader().load(state.globeImageUrl, function (texture) {
            globeMaterial.map = texture;
            globeMaterial.color = null;
            globeMaterial.needsUpdate = true; // ready when first globe image finishes loading (asynchronously to allow 1 frame to load texture)

            !state.ready && (state.ready = true) && setTimeout(state.onReady);
          });
        }
      }

      if (changedProps.hasOwnProperty('bumpImageUrl')) {
        if (!state.bumpImageUrl) {
          globeMaterial.bumpMap = null;
          globeMaterial.needsUpdate = true;
        } else {
          state.bumpImageUrl && new THREE$1.TextureLoader().load(state.bumpImageUrl, function (texture) {
            globeMaterial.bumpMap = texture;
            globeMaterial.needsUpdate = true;
          });
        }
      }

      if (!state.ready && !state.globeImageUrl) {
        // ready immediately if there's no globe image
        state.ready = true;
        state.onReady();
      }
    }
  });

  var index$1 = (function (p) {
    return p instanceof Function ? p // fn
    : typeof p === 'string' ? function (obj) {
      return obj[p];
    } // property name
    : function (obj) {
      return p;
    };
  }); // constant

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var tinycolor = createCommonjsModule(function (module) {
  // TinyColor v1.4.1
  // https://github.com/bgrins/TinyColor
  // Brian Grinstead, MIT License

  (function(Math) {

  var trimLeft = /^\s+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      mathRound = Math.round,
      mathMin = Math.min,
      mathMax = Math.max,
      mathRandom = Math.random;

  function tinycolor (color, opts) {

      color = (color) ? color : '';
      opts = opts || { };

      // If input is already a tinycolor, return itself
      if (color instanceof tinycolor) {
         return color;
      }
      // If we are called as a function, call using new instead
      if (!(this instanceof tinycolor)) {
          return new tinycolor(color, opts);
      }

      var rgb = inputToRGB(color);
      this._originalInput = color,
      this._r = rgb.r,
      this._g = rgb.g,
      this._b = rgb.b,
      this._a = rgb.a,
      this._roundA = mathRound(100*this._a) / 100,
      this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;

      // Don't let the range of [0,255] come back in [0,1].
      // Potentially lose a little bit of precision here, but will fix issues where
      // .5 gets interpreted as half of the total, instead of half of 1
      // If it was supposed to be 128, this was already taken care of by `inputToRgb`
      if (this._r < 1) { this._r = mathRound(this._r); }
      if (this._g < 1) { this._g = mathRound(this._g); }
      if (this._b < 1) { this._b = mathRound(this._b); }

      this._ok = rgb.ok;
      this._tc_id = tinyCounter++;
  }

  tinycolor.prototype = {
      isDark: function() {
          return this.getBrightness() < 128;
      },
      isLight: function() {
          return !this.isDark();
      },
      isValid: function() {
          return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
          return this._format;
      },
      getAlpha: function() {
          return this._a;
      },
      getBrightness: function() {
          //http://www.w3.org/TR/AERT#color-contrast
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
      },
      getLuminance: function() {
          //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
          var rgb = this.toRgb();
          var RsRGB, GsRGB, BsRGB, R, G, B;
          RsRGB = rgb.r/255;
          GsRGB = rgb.g/255;
          BsRGB = rgb.b/255;

          if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
          if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
          if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
          return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
      },
      setAlpha: function(value) {
          this._a = boundAlpha(value);
          this._roundA = mathRound(100*this._a) / 100;
          return this;
      },
      toHsv: function() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
      },
      toHsvString: function() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
          return (this._a == 1) ?
            "hsv("  + h + ", " + s + "%, " + v + "%)" :
            "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
      },
      toHsl: function() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
      },
      toHslString: function() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
          return (this._a == 1) ?
            "hsl("  + h + ", " + s + "%, " + l + "%)" :
            "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
      },
      toHex: function(allow3Char) {
          return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function(allow3Char) {
          return '#' + this.toHex(allow3Char);
      },
      toHex8: function(allow4Char) {
          return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
      },
      toHex8String: function(allow4Char) {
          return '#' + this.toHex8(allow4Char);
      },
      toRgb: function() {
          return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
      },
      toRgbString: function() {
          return (this._a == 1) ?
            "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
            "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
          return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
          return (this._a == 1) ?
            "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
            "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
          if (this._a === 0) {
              return "transparent";
          }

          if (this._a < 1) {
              return false;
          }

          return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function(secondColor) {
          var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
          var secondHex8String = hex8String;
          var gradientType = this._gradientType ? "GradientType = 1, " : "";

          if (secondColor) {
              var s = tinycolor(secondColor);
              secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
          }

          return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
      },
      toString: function(format) {
          var formatSet = !!format;
          format = format || this._format;

          var formattedString = false;
          var hasAlpha = this._a < 1 && this._a >= 0;
          var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

          if (needsAlphaFormat) {
              // Special case for "transparent", all other non-alpha formats
              // will return rgba when there is transparency.
              if (format === "name" && this._a === 0) {
                  return this.toName();
              }
              return this.toRgbString();
          }
          if (format === "rgb") {
              formattedString = this.toRgbString();
          }
          if (format === "prgb") {
              formattedString = this.toPercentageRgbString();
          }
          if (format === "hex" || format === "hex6") {
              formattedString = this.toHexString();
          }
          if (format === "hex3") {
              formattedString = this.toHexString(true);
          }
          if (format === "hex4") {
              formattedString = this.toHex8String(true);
          }
          if (format === "hex8") {
              formattedString = this.toHex8String();
          }
          if (format === "name") {
              formattedString = this.toName();
          }
          if (format === "hsl") {
              formattedString = this.toHslString();
          }
          if (format === "hsv") {
              formattedString = this.toHsvString();
          }

          return formattedString || this.toHexString();
      },
      clone: function() {
          return tinycolor(this.toString());
      },

      _applyModification: function(fn, args) {
          var color = fn.apply(null, [this].concat([].slice.call(args)));
          this._r = color._r;
          this._g = color._g;
          this._b = color._b;
          this.setAlpha(color._a);
          return this;
      },
      lighten: function() {
          return this._applyModification(lighten, arguments);
      },
      brighten: function() {
          return this._applyModification(brighten, arguments);
      },
      darken: function() {
          return this._applyModification(darken, arguments);
      },
      desaturate: function() {
          return this._applyModification(desaturate, arguments);
      },
      saturate: function() {
          return this._applyModification(saturate, arguments);
      },
      greyscale: function() {
          return this._applyModification(greyscale, arguments);
      },
      spin: function() {
          return this._applyModification(spin, arguments);
      },

      _applyCombination: function(fn, args) {
          return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function() {
          return this._applyCombination(analogous, arguments);
      },
      complement: function() {
          return this._applyCombination(complement, arguments);
      },
      monochromatic: function() {
          return this._applyCombination(monochromatic, arguments);
      },
      splitcomplement: function() {
          return this._applyCombination(splitcomplement, arguments);
      },
      triad: function() {
          return this._applyCombination(triad, arguments);
      },
      tetrad: function() {
          return this._applyCombination(tetrad, arguments);
      }
  };

  // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1
  tinycolor.fromRatio = function(color, opts) {
      if (typeof color == "object") {
          var newColor = {};
          for (var i in color) {
              if (color.hasOwnProperty(i)) {
                  if (i === "a") {
                      newColor[i] = color[i];
                  }
                  else {
                      newColor[i] = convertToPercentage(color[i]);
                  }
              }
          }
          color = newColor;
      }

      return tinycolor(color, opts);
  };

  // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //
  function inputToRGB(color) {

      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var s = null;
      var v = null;
      var l = null;
      var ok = false;
      var format = false;

      if (typeof color == "string") {
          color = stringInputToObject(color);
      }

      if (typeof color == "object") {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = rgbToRgb(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
          }
          else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = convertToPercentage(color.s);
              v = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, s, v);
              ok = true;
              format = "hsv";
          }
          else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = convertToPercentage(color.s);
              l = convertToPercentage(color.l);
              rgb = hslToRgb(color.h, s, l);
              ok = true;
              format = "hsl";
          }

          if (color.hasOwnProperty("a")) {
              a = color.a;
          }
      }

      a = boundAlpha(a);

      return {
          ok: ok,
          format: color.format || format,
          r: mathMin(255, mathMax(rgb.r, 0)),
          g: mathMin(255, mathMax(rgb.g, 0)),
          b: mathMin(255, mathMax(rgb.b, 0)),
          a: a
      };
  }


  // Conversion Functions
  // --------------------

  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]
  function rgbToRgb(r, g, b){
      return {
          r: bound01(r, 255) * 255,
          g: bound01(g, 255) * 255,
          b: bound01(b, 255) * 255
      };
  }

  // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]
  function rgbToHsl(r, g, b) {

      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);

      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min) {
          h = s = 0; // achromatic
      }
      else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }

          h /= 6;
      }

      return { h: h, s: s, l: l };
  }

  // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hslToRgb(h, s, l) {
      var r, g, b;

      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);

      function hue2rgb(p, q, t) {
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      if(s === 0) {
          r = g = b = l; // achromatic
      }
      else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
      }

      return { r: r * 255, g: g * 255, b: b * 255 };
  }

  // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]
  function rgbToHsv(r, g, b) {

      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);

      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, v = max;

      var d = max - min;
      s = max === 0 ? 0 : d / max;

      if(max == min) {
          h = 0; // achromatic
      }
      else {
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
      return { h: h, s: s, v: v };
  }

  // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
   function hsvToRgb(h, s, v) {

      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);

      var i = Math.floor(h),
          f = h - i,
          p = v * (1 - s),
          q = v * (1 - f * s),
          t = v * (1 - (1 - f) * s),
          mod = i % 6,
          r = [v, q, p, p, t, v][mod],
          g = [t, v, v, q, p, p][mod],
          b = [p, p, t, v, v, q][mod];

      return { r: r * 255, g: g * 255, b: b * 255 };
  }

  // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex
  function rgbToHex(r, g, b, allow3Char) {

      var hex = [
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16))
      ];

      // Return a 3 character hex if possible
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }

      return hex.join("");
  }

  // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex
  function rgbaToHex(r, g, b, a, allow4Char) {

      var hex = [
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16)),
          pad2(convertDecimalToHex(a))
      ];

      // Return a 4 character hex if possible
      if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }

      return hex.join("");
  }

  // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"
  function rgbaToArgbHex(r, g, b, a) {

      var hex = [
          pad2(convertDecimalToHex(a)),
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16))
      ];

      return hex.join("");
  }

  // `equals`
  // Can be called with any tinycolor input
  tinycolor.equals = function (color1, color2) {
      if (!color1 || !color2) { return false; }
      return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };

  tinycolor.random = function() {
      return tinycolor.fromRatio({
          r: mathRandom(),
          g: mathRandom(),
          b: mathRandom()
      });
  };


  // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

  function desaturate(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
  }

  function saturate(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
  }

  function greyscale(color) {
      return tinycolor(color).desaturate(100);
  }

  function lighten (color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
  }

  function brighten(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var rgb = tinycolor(color).toRgb();
      rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
      rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
      rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
      return tinycolor(rgb);
  }

  function darken (color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
  }

  // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.
  function spin(color, amount) {
      var hsl = tinycolor(color).toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor(hsl);
  }

  // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

  function complement(color) {
      var hsl = tinycolor(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor(hsl);
  }

  function triad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
      ];
  }

  function tetrad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
      ];
  }

  function splitcomplement(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
          tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
      ];
  }

  function analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;

      var hsl = tinycolor(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor(color)];

      for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(tinycolor(hsl));
      }
      return ret;
  }

  function monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor(color).toHsv();
      var h = hsv.h, s = hsv.s, v = hsv.v;
      var ret = [];
      var modification = 1 / results;

      while (results--) {
          ret.push(tinycolor({ h: h, s: s, v: v}));
          v = (v + modification) % 1;
      }

      return ret;
  }

  // Utility Functions
  // ---------------------

  tinycolor.mix = function(color1, color2, amount) {
      amount = (amount === 0) ? 0 : (amount || 50);

      var rgb1 = tinycolor(color1).toRgb();
      var rgb2 = tinycolor(color2).toRgb();

      var p = amount / 100;

      var rgba = {
          r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
          g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
          b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
          a: ((rgb2.a - rgb1.a) * p) + rgb1.a
      };

      return tinycolor(rgba);
  };


  // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
  tinycolor.readability = function(color1, color2) {
      var c1 = tinycolor(color1);
      var c2 = tinycolor(color2);
      return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
  };

  // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
  tinycolor.isReadable = function(color1, color2, wcag2) {
      var readability = tinycolor.readability(color1, color2);
      var wcag2Parms, out;

      out = false;

      wcag2Parms = validateWCAG2Parms(wcag2);
      switch (wcag2Parms.level + wcag2Parms.size) {
          case "AAsmall":
          case "AAAlarge":
              out = readability >= 4.5;
              break;
          case "AAlarge":
              out = readability >= 3;
              break;
          case "AAAsmall":
              out = readability >= 7;
              break;
      }
      return out;

  };

  // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
  tinycolor.mostReadable = function(baseColor, colorList, args) {
      var bestColor = null;
      var bestScore = 0;
      var readability;
      var includeFallbackColors, level, size ;
      args = args || {};
      includeFallbackColors = args.includeFallbackColors ;
      level = args.level;
      size = args.size;

      for (var i= 0; i < colorList.length ; i++) {
          readability = tinycolor.readability(baseColor, colorList[i]);
          if (readability > bestScore) {
              bestScore = readability;
              bestColor = tinycolor(colorList[i]);
          }
      }

      if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
          return bestColor;
      }
      else {
          args.includeFallbackColors=false;
          return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
      }
  };


  // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>
  var names = tinycolor.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
  };

  // Make it easy to access colors via `hexNames[hex]`
  var hexNames = tinycolor.hexNames = flip(names);


  // Utilities
  // ---------

  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
  function flip(o) {
      var flipped = { };
      for (var i in o) {
          if (o.hasOwnProperty(i)) {
              flipped[o[i]] = i;
          }
      }
      return flipped;
  }

  // Return a valid alpha value [0,1] with all invalid values being set to 1
  function boundAlpha(a) {
      a = parseFloat(a);

      if (isNaN(a) || a < 0 || a > 1) {
          a = 1;
      }

      return a;
  }

  // Take input from [0, n] and return it as [0, 1]
  function bound01(n, max) {
      if (isOnePointZero(n)) { n = "100%"; }

      var processPercent = isPercentage(n);
      n = mathMin(max, mathMax(0, parseFloat(n)));

      // Automatically convert percentage into number
      if (processPercent) {
          n = parseInt(n * max, 10) / 100;
      }

      // Handle floating point rounding errors
      if ((Math.abs(n - max) < 0.000001)) {
          return 1;
      }

      // Convert into [0, 1] range if it isn't already
      return (n % max) / parseFloat(max);
  }

  // Force a number between 0 and 1
  function clamp01(val) {
      return mathMin(1, mathMax(0, val));
  }

  // Parse a base-16 hex value into a base-10 integer
  function parseIntFromHex(val) {
      return parseInt(val, 16);
  }

  // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
  function isOnePointZero(n) {
      return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  }

  // Check to see if string passed in is a percentage
  function isPercentage(n) {
      return typeof n === "string" && n.indexOf('%') != -1;
  }

  // Force a hex value to have 2 characters
  function pad2(c) {
      return c.length == 1 ? '0' + c : '' + c;
  }

  // Replace a decimal with it's percentage value
  function convertToPercentage(n) {
      if (n <= 1) {
          n = (n * 100) + "%";
      }

      return n;
  }

  // Converts a decimal to a hex value
  function convertDecimalToHex(d) {
      return Math.round(parseFloat(d) * 255).toString(16);
  }
  // Converts a hex value to a decimal
  function convertHexToDecimal(h) {
      return (parseIntFromHex(h) / 255);
  }

  var matchers = (function() {

      // <http://www.w3.org/TR/css3-values/#integers>
      var CSS_INTEGER = "[-\\+]?\\d+%?";

      // <http://www.w3.org/TR/css3-values/#number-value>
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

      // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

      // Actual matching.
      // Parentheses and commas are optional, but not required.
      // Whitespace can take the place of commas or opening paren
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

      return {
          CSS_UNIT: new RegExp(CSS_UNIT),
          rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
          rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
          hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
          hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
          hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
          hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
  })();

  // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).
  function isValidCSSUnit(color) {
      return !!matchers.CSS_UNIT.exec(color);
  }

  // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
  function stringInputToObject(color) {

      color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
      var named = false;
      if (names[color]) {
          color = names[color];
          named = true;
      }
      else if (color == 'transparent') {
          return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      }

      // Try to match string input using regular expressions.
      // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
      // Just return an object and let the conversion functions handle that.
      // This way the result will be the same whether the tinycolor is initialized with string or object.
      var match;
      if ((match = matchers.rgb.exec(color))) {
          return { r: match[1], g: match[2], b: match[3] };
      }
      if ((match = matchers.rgba.exec(color))) {
          return { r: match[1], g: match[2], b: match[3], a: match[4] };
      }
      if ((match = matchers.hsl.exec(color))) {
          return { h: match[1], s: match[2], l: match[3] };
      }
      if ((match = matchers.hsla.exec(color))) {
          return { h: match[1], s: match[2], l: match[3], a: match[4] };
      }
      if ((match = matchers.hsv.exec(color))) {
          return { h: match[1], s: match[2], v: match[3] };
      }
      if ((match = matchers.hsva.exec(color))) {
          return { h: match[1], s: match[2], v: match[3], a: match[4] };
      }
      if ((match = matchers.hex8.exec(color))) {
          return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named ? "name" : "hex8"
          };
      }
      if ((match = matchers.hex6.exec(color))) {
          return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named ? "name" : "hex"
          };
      }
      if ((match = matchers.hex4.exec(color))) {
          return {
              r: parseIntFromHex(match[1] + '' + match[1]),
              g: parseIntFromHex(match[2] + '' + match[2]),
              b: parseIntFromHex(match[3] + '' + match[3]),
              a: convertHexToDecimal(match[4] + '' + match[4]),
              format: named ? "name" : "hex8"
          };
      }
      if ((match = matchers.hex3.exec(color))) {
          return {
              r: parseIntFromHex(match[1] + '' + match[1]),
              g: parseIntFromHex(match[2] + '' + match[2]),
              b: parseIntFromHex(match[3] + '' + match[3]),
              format: named ? "name" : "hex"
          };
      }

      return false;
  }

  function validateWCAG2Parms(parms) {
      // return valid WCAG2 parms for isReadable.
      // If input parms are invalid, return {"level":"AA", "size":"small"}
      var level, size;
      parms = parms || {"level":"AA", "size":"small"};
      level = (parms.level || "AA").toUpperCase();
      size = (parms.size || "small").toLowerCase();
      if (level !== "AA" && level !== "AAA") {
          level = "AA";
      }
      if (size !== "small" && size !== "large") {
          size = "small";
      }
      return {"level":level, "size":size};
  }

  // Node: Export function
  if ( module.exports) {
      module.exports = tinycolor;
  }
  // AMD/requirejs: Define the module
  else {
      window.tinycolor = tinycolor;
  }

  })(Math);
  });

  var colorStr2Hex = function colorStr2Hex(str) {
    return isNaN(str) ? parseInt(tinycolor(str).toHex(), 16) : str;
  };

  var colorAlpha = function colorAlpha(str) {
    return isNaN(str) ? tinycolor(str).getAlpha() : 1;
  };

  var color2ShaderArr = function color2ShaderArr(str) {
    var includeAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var rgba = tinycolor(str).toRgb();
    var rgbArr = ['r', 'g', 'b'].map(function (d) {
      return rgba[d] / 255;
    });
    return includeAlpha ? [].concat(_toConsumableArray(rgbArr), [rgba.a]) : rgbArr;
  };

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose$1(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray$3(arr, i) {
    return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _nonIterableRest$3();
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles$3(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$1(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit$3(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest$3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var index$2 = (function () {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var keyAccessors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var multiItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var flattenKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var keys = (keyAccessors instanceof Array ? keyAccessors.length ? keyAccessors : [undefined] : [keyAccessors]).map(function (key) {
      return {
        keyAccessor: key,
        isProp: !(key instanceof Function)
      };
    });
    var indexedResult = list.reduce(function (res, item) {
      var iterObj = res;
      var itemVal = item;
      keys.forEach(function (_ref, idx) {
        var keyAccessor = _ref.keyAccessor,
            isProp = _ref.isProp;
        var key;

        if (isProp) {
          var _itemVal = itemVal,
              propVal = _itemVal[keyAccessor],
              rest = _objectWithoutProperties$1(_itemVal, [keyAccessor].map(_toPropertyKey));

          key = propVal;
          itemVal = rest;
        } else {
          key = keyAccessor(itemVal, idx);
        }

        if (idx + 1 < keys.length) {
          if (!iterObj.hasOwnProperty(key)) {
            iterObj[key] = {};
          }

          iterObj = iterObj[key];
        } else {
          // Leaf key
          if (multiItem) {
            if (!iterObj.hasOwnProperty(key)) {
              iterObj[key] = [];
            }

            iterObj[key].push(itemVal);
          } else {
            iterObj[key] = itemVal;
          }
        }
      });
      return res;
    }, {});

    if (multiItem instanceof Function) {
      // Reduce leaf multiple values
      (function reduce(node) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (level === keys.length) {
          Object.keys(node).forEach(function (k) {
            return node[k] = multiItem(node[k]);
          });
        } else {
          Object.values(node).forEach(function (child) {
            return reduce(child, level + 1);
          });
        }
      })(indexedResult); // IIFE

    }

    var result = indexedResult;

    if (flattenKeys) {
      // flatten into array
      result = [];

      (function flatten(node) {
        var accKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (accKeys.length === keys.length) {
          result.push({
            keys: accKeys,
            vals: node
          });
        } else {
          Object.entries(node).forEach(function (_ref2) {
            var _ref3 = _slicedToArray$3(_ref2, 2),
                key = _ref3[0],
                val = _ref3[1];

            return flatten(val, [].concat(_toConsumableArray$1(accKeys), [key]));
          });
        }
      })(indexedResult); //IIFE


      if (keyAccessors instanceof Array && keyAccessors.length === 0 && result.length === 1) {
        // clear keys if there's no key accessors (single result)
        result[0].keys = [];
      }
    }

    return result;
  });

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$2(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose$2(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray$4(arr, i) {
    return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _nonIterableRest$4();
  }

  function _toConsumableArray$2(arr) {
    return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _nonIterableSpread$2();
  }

  function _arrayWithoutHoles$2(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles$4(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$2(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit$4(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest$4() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function diffArrays(prev, next, idAccessor) {
    var result = {
      enter: [],
      update: [],
      exit: []
    };

    if (!idAccessor) {
      // use object references for comparison
      var prevSet = new Set(prev);
      var nextSet = new Set(next);
      new Set([].concat(_toConsumableArray$2(prevSet), _toConsumableArray$2(nextSet))).forEach(function (item) {
        var type = !prevSet.has(item) ? 'enter' : !nextSet.has(item) ? 'exit' : 'update';
        result[type].push(type === 'update' ? [item, item] : item);
      });
    } else {
      // compare by id (duplicate keys are ignored)
      var prevById = index$2(prev, idAccessor, false);
      var nextById = index$2(next, idAccessor, false);
      var byId = Object.assign({}, prevById, nextById);
      Object.entries(byId).forEach(function (_ref) {
        var _ref2 = _slicedToArray$4(_ref, 2),
            id = _ref2[0],
            item = _ref2[1];

        var type = !prevById.hasOwnProperty(id) ? 'enter' : !nextById.hasOwnProperty(id) ? 'exit' : 'update';
        result[type].push(type === 'update' ? [prevById[id], nextById[id]] : item);
      });
    }

    return result;
  }

  function dataBindDiff(data, existingObjs, _ref3) {
    var _ref3$objBindAttr = _ref3.objBindAttr,
        objBindAttr = _ref3$objBindAttr === void 0 ? '__obj' : _ref3$objBindAttr,
        _ref3$dataBindAttr = _ref3.dataBindAttr,
        dataBindAttr = _ref3$dataBindAttr === void 0 ? '__data' : _ref3$dataBindAttr,
        idAccessor = _ref3.idAccessor,
        _ref3$purge = _ref3.purge,
        purge = _ref3$purge === void 0 ? false : _ref3$purge;

    var isObjValid = function isObjValid(obj) {
      return obj.hasOwnProperty(dataBindAttr);
    };

    var removeObjs = existingObjs.filter(function (obj) {
      return !isObjValid(obj);
    });
    var prevD = existingObjs.filter(isObjValid).map(function (obj) {
      return obj[dataBindAttr];
    });
    var nextD = data;
    var diff = purge ? {
      enter: nextD,
      exit: prevD,
      update: []
    } // don't diff data in purge mode
    : diffArrays(prevD, nextD, idAccessor);
    diff.update = diff.update.map(function (_ref4) {
      var _ref5 = _slicedToArray$4(_ref4, 2),
          prevD = _ref5[0],
          nextD = _ref5[1];

      if (prevD !== nextD) {
        // transfer obj to new data point (if different)
        nextD[objBindAttr] = prevD[objBindAttr];
        nextD[objBindAttr][dataBindAttr] = nextD;
      }

      return nextD;
    });
    diff.exit = diff.exit.concat(removeObjs.map(function (obj) {
      return _defineProperty$1({}, objBindAttr, obj);
    }));
    return diff;
  }

  function viewDigest(data, existingObjs, // list
  appendObj, // item => {...} function
  removeObj, // item => {...} function
  _ref7) {
    var _ref7$createObj = _ref7.createObj,
        createObj = _ref7$createObj === void 0 ? function (d) {
      return {};
    } : _ref7$createObj,
        _ref7$updateObj = _ref7.updateObj,
        updateObj = _ref7$updateObj === void 0 ? function (obj, d) {} : _ref7$updateObj,
        _ref7$exitObj = _ref7.exitObj,
        exitObj = _ref7$exitObj === void 0 ? function (obj) {} : _ref7$exitObj,
        _ref7$objBindAttr = _ref7.objBindAttr,
        objBindAttr = _ref7$objBindAttr === void 0 ? '__obj' : _ref7$objBindAttr,
        _ref7$dataBindAttr = _ref7.dataBindAttr,
        dataBindAttr = _ref7$dataBindAttr === void 0 ? '__data' : _ref7$dataBindAttr,
        dataDiffOptions = _objectWithoutProperties$2(_ref7, ["createObj", "updateObj", "exitObj", "objBindAttr", "dataBindAttr"]);

    var _dataBindDiff = dataBindDiff(data, existingObjs, _objectSpread2$1({
      objBindAttr: objBindAttr,
      dataBindAttr: dataBindAttr
    }, dataDiffOptions)),
        enter = _dataBindDiff.enter,
        update = _dataBindDiff.update,
        exit = _dataBindDiff.exit; // Remove exiting points


    exit.forEach(function (d) {
      var obj = d[objBindAttr];
      delete d[objBindAttr]; // unbind obj

      exitObj(obj);
      removeObj(obj);
    });
    var newObjs = createObjs(enter);
    var pointsData = [].concat(_toConsumableArray$2(enter), _toConsumableArray$2(update));
    updateObjs(pointsData); // Add new points

    newObjs.forEach(appendObj); //

    function createObjs(data) {
      var newObjs = [];
      data.forEach(function (d) {
        var obj = createObj(d);

        if (obj) {
          obj[dataBindAttr] = d;
          d[objBindAttr] = obj;
          newObjs.push(obj);
        }
      });
      return newObjs;
    }

    function updateObjs(data) {
      data.forEach(function (d) {
        var obj = d[objBindAttr];

        if (obj) {
          obj[dataBindAttr] = d;
          updateObj(obj, d);
        }
      });
    }
  }

  function threeDigest(data, scene) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return viewDigest(data, scene.children, function (obj) {
      return scene.add(obj);
    }, function (obj) {
      scene.remove(obj);
      emptyObject(obj);
    }, _objectSpread2({
      objBindAttr: '__threeObj'
    }, options));
  }

  var THREE$2 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three.BufferGeometry,
    Color: three.Color,
    CylinderGeometry: three.CylinderGeometry,
    CylinderBufferGeometry: three.CylinderBufferGeometry,
    FaceColors: three.FaceColors,
    Geometry: three.Geometry,
    Matrix4: three.Matrix4,
    Mesh: three.Mesh,
    MeshBasicMaterial: three.MeshBasicMaterial,
    MeshLambertMaterial: three.MeshLambertMaterial,
    Object3D: three.Object3D,
    Vector3: three.Vector3
  };
  // support multiple method names for backwards threejs compatibility

  var applyMatrix4Fn = new THREE$2.BufferGeometry().applyMatrix4 ? 'applyMatrix4' : 'applyMatrix';
  var PointsLayerKapsule = index({
    props: {
      pointsData: {
        "default": []
      },
      pointLat: {
        "default": 'lat'
      },
      pointLng: {
        "default": 'lng'
      },
      pointColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      pointAltitude: {
        "default": 0.1
      },
      // in units of globe radius
      pointRadius: {
        "default": 0.25
      },
      // in deg
      pointResolution: {
        "default": 12,
        triggerUpdate: false
      },
      // how many slice segments in the cylinder's circumference
      pointsMerge: {
        "default": false
      },
      // boolean. Whether to merge all points into a single mesh for rendering performance
      pointsTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Data accessors
      var latAccessor = index$1(state.pointLat);
      var lngAccessor = index$1(state.pointLng);
      var altitudeAccessor = index$1(state.pointAltitude);
      var radiusAccessor = index$1(state.pointRadius);
      var colorAccessor = index$1(state.pointColor); // shared geometry

      var pointGeometry = new THREE$2[state.pointsMerge ? 'CylinderGeometry' : 'CylinderBufferGeometry'](1, 1, 1, state.pointResolution);
      pointGeometry[applyMatrix4Fn](new THREE$2.Matrix4().makeRotationX(Math.PI / 2));
      pointGeometry[applyMatrix4Fn](new THREE$2.Matrix4().makeTranslation(0, 0, -0.5));
      var pxPerDeg = 2 * Math.PI * GLOBE_RADIUS / 360;
      var pointMaterials = {}; // indexed by color

      var scene = state.pointsMerge ? new THREE$2.Object3D() : state.scene; // use fake scene if merging points

      threeDigest(state.pointsData, scene, {
        createObj: createObj,
        updateObj: updateObj
      });

      if (state.pointsMerge) {
        // merge points into a single mesh
        var pointsGeometry = new THREE$2.Geometry();
        state.pointsData.forEach(function (d) {
          var obj = d.__threeObj;
          d.__threeObj = undefined; // unbind merged points
          // color faces

          var color = new THREE$2.Color(colorAccessor(d));
          obj.geometry.faces.forEach(function (face) {
            return face.color = color;
          });
          obj.updateMatrix();
          pointsGeometry.merge(obj.geometry, obj.matrix);
        });
        var points = new THREE$2.Mesh(pointsGeometry, new THREE$2.MeshBasicMaterial({
          color: 0xffffff,
          vertexColors: THREE$2.FaceColors,
          morphTargets: false
        }));
        points.__globeObjType = 'points'; // Add object type

        points.__data = state.pointsData; // Attach obj data

        state.scene.add(points);
      } //


      function createObj() {
        var obj = new THREE$2.Mesh(pointGeometry);
        obj.__globeObjType = 'point'; // Add object type

        return obj;
      }

      function updateObj(obj, d) {
        var applyUpdate = function applyUpdate(td) {
          var _obj$__currentTargetD = obj.__currentTargetD = td,
              r = _obj$__currentTargetD.r,
              alt = _obj$__currentTargetD.alt,
              lat = _obj$__currentTargetD.lat,
              lng = _obj$__currentTargetD.lng; // position cylinder ground


          Object.assign(obj.position, polar2Cartesian(lat, lng)); // orientate outwards

          var globeCenter = state.pointsMerge ? new THREE$2.Vector3(0, 0, 0) : state.scene.localToWorld(new THREE$2.Vector3(0, 0, 0)); // translate from local to world coords

          obj.lookAt(globeCenter); // scale radius and altitude

          obj.scale.x = obj.scale.y = Math.min(30, r) * pxPerDeg;
          obj.scale.z = Math.max(alt * GLOBE_RADIUS, 0.1); // avoid non-invertible matrix
        };

        var targetD = {
          alt: +altitudeAccessor(d),
          r: +radiusAccessor(d),
          lat: +latAccessor(d),
          lng: +lngAccessor(d)
        };
        var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
          alt: -1e-3
        });

        if (Object.keys(targetD).some(function (k) {
          return currentTargetD[k] !== targetD[k];
        })) {
          if (state.pointsMerge || !state.pointsTransitionDuration || state.pointsTransitionDuration < 0) {
            // set final position
            applyUpdate(targetD);
          } else {
            // animate
            new TWEEN.Tween(currentTargetD).to(targetD, state.pointsTransitionDuration).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
          }
        }

        if (!state.pointsMerge) {
          // Update materials on individual points
          var color = colorAccessor(d);
          var opacity = colorAlpha(color);

          if (!pointMaterials.hasOwnProperty(color)) {
            pointMaterials[color] = new THREE$2.MeshLambertMaterial({
              color: colorStr2Hex(color),
              transparent: opacity < 1,
              opacity: opacity
            });
          }

          obj.material = pointMaterials[color];
        }
      }
    }
  });

  var FrameTicker = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){var n=i(1),r=function(){function e(e,t,i){void 0===e&&(e=NaN),void 0===t&&(t=NaN),void 0===i&&(i=!1),this._minFPS=t,this._maxFPS=e,this._timeScale=1,this._currentTick=0,this._currentTime=0,this._tickDeltaTime=0,this._isRunning=!1,this._maxInterval=isNaN(this._minFPS)?NaN:1e3/this._minFPS,this._minInterval=isNaN(this._maxFPS)?NaN:1e3/this._maxFPS,this._onResume=new n.default,this._onPause=new n.default,this._onTick=new n.default,this._onTickOncePerFrame=new n.default,i||this.resume();}return e.prototype.updateOnce=function(e){e(this.currentTimeSeconds,this.tickDeltaTimeSeconds,this.currentTick);},e.prototype.resume=function(){this._isRunning||(this._isRunning=!0,this._lastTimeUpdated=this.getTimer(),this._onResume.dispatch(),this.animateOnce());},e.prototype.pause=function(){this._isRunning&&(this._isRunning=!1,this._onPause.dispatch(),window.cancelAnimationFrame(this._animationFrameHandle));},e.prototype.dispose=function(){this.pause(),this._onResume.removeAll(),this._onPause.removeAll(),this._onTick.removeAll();},Object.defineProperty(e.prototype,"currentTick",{get:function(){return this._currentTick},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentTimeSeconds",{get:function(){return this._currentTime/1e3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tickDeltaTimeSeconds",{get:function(){return this._tickDeltaTime/1e3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"timeScale",{get:function(){return this._timeScale},set:function(e){this._timeScale!==e&&(this._timeScale=e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onResume",{get:function(){return this._onResume},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onPause",{get:function(){return this._onPause},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTick",{get:function(){return this._onTick},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTickOncePerFrame",{get:function(){return this._onTickOncePerFrame},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRunning",{get:function(){return this._isRunning},enumerable:!0,configurable:!0}),e.prototype.animateOnce=function(){var e=this;this._animationFrameHandle=window.requestAnimationFrame(function(){return e.onFrame()});},e.prototype.onFrame=function(){if(this._now=this.getTimer(),this._frameDeltaTime=this._now-this._lastTimeUpdated,isNaN(this._minInterval)||this._frameDeltaTime>=this._minInterval)if(isNaN(this._maxInterval))this.update(this._frameDeltaTime*this._timeScale,!0),this._lastTimeUpdated=this._now;else for(this._interval=Math.min(this._frameDeltaTime,this._maxInterval);this._now>=this._lastTimeUpdated+this._interval;)this.update(this._interval*this._timeScale,this._now<=this._lastTimeUpdated+2*this._maxInterval),this._lastTimeUpdated+=this._interval;this._isRunning&&this.animateOnce();},e.prototype.update=function(e,t){void 0===t&&(t=!0),this._currentTick++,this._currentTime+=e,this._tickDeltaTime=e,this._onTick.dispatch(this.currentTimeSeconds,this.tickDeltaTimeSeconds,this.currentTick),t&&this._onTickOncePerFrame.dispatch(this.currentTimeSeconds,this.tickDeltaTimeSeconds,this.currentTick);},e.prototype.getTimer=function(){return Date.now()},e}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;},function(e,t,i){!function(t,i){e.exports=i();}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){var i=function(){function e(){this.functions=[];}return e.prototype.add=function(e){return this.functions.indexOf(e)===-1&&(this.functions.push(e),!0)},e.prototype.remove=function(e){var t=this.functions.indexOf(e);return t>-1&&(this.functions.splice(t,1),!0)},e.prototype.removeAll=function(){return this.functions.length>0&&(this.functions.length=0,!0)},e.prototype.dispatch=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=this.functions.concat();i.forEach(function(t){t.apply(void 0,e);});},Object.defineProperty(e.prototype,"numItems",{get:function(){return this.functions.length},enumerable:!0,configurable:!0}),e}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;}])});}])});
  });

  var FrameTicker$1 = unwrapExports(FrameTicker);
  var FrameTicker_1 = FrameTicker.FrameTicker;

  function ascending$1(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function bisector$1(compare) {
    if (compare.length === 1) compare = ascendingComparator$1(compare);
    return {
      left: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1;
          else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid;
          else lo = mid + 1;
        }
        return lo;
      }
    };
  }

  function ascendingComparator$1(f) {
    return function(d, x) {
      return ascending$1(f(d), x);
    };
  }

  var ascendingBisect$1 = bisector$1(ascending$1);
  var bisectRight = ascendingBisect$1.right;

  var e10 = Math.sqrt(50),
      e5 = Math.sqrt(10),
      e2 = Math.sqrt(2);

  function ticks(start, stop, count) {
    var reverse,
        i = -1,
        n,
        ticks,
        step;

    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [start];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

    if (step > 0) {
      start = Math.ceil(start / step);
      stop = Math.floor(stop / step);
      ticks = new Array(n = Math.ceil(stop - start + 1));
      while (++i < n) ticks[i] = (start + i) * step;
    } else {
      start = Math.floor(start * step);
      stop = Math.ceil(stop * step);
      ticks = new Array(n = Math.ceil(start - stop + 1));
      while (++i < n) ticks[i] = (start - i) / step;
    }

    if (reverse) ticks.reverse();

    return ticks;
  }

  function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count),
        power = Math.floor(Math.log(step) / Math.LN10),
        error = step / Math.pow(10, power);
    return power >= 0
        ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
        : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
  }

  function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count),
        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
        error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
  }

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0: break;
      case 1: this.range(domain); break;
      default: this.range(range).domain(domain); break;
    }
    return this;
  }

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  function constant(x) {
    return function() {
      return x;
    };
  }

  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
  }

  var rgb$1 = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$1.gamma = rgbGamma;

    return rgb$1;
  })(1);

  function numberArray(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0,
        c = b.slice(),
        i;
    return function(t) {
      for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }

  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  function interpolateArray(a, b) {
    return (isNumberArray(b) ? numberArray : genericArray)(a, b);
  }

  function genericArray(a, b) {
    var nb = b ? b.length : 0,
        na = a ? Math.min(nb, a.length) : 0,
        x = new Array(na),
        c = new Array(nb),
        i;

    for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
    for (; i < nb; ++i) c[i] = b[i];

    return function(t) {
      for (i = 0; i < na; ++i) c[i] = x[i](t);
      return c;
    };
  }

  function date(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  function object$1(a, b) {
    var i = {},
        c = {},
        k;

    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};

    for (k in b) {
      if (k in a) {
        i[k] = interpolate(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }

    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function string(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  function interpolate(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant(b)
        : (t === "number" ? interpolateNumber
        : t === "string" ? ((c = color(b)) ? (b = c, rgb$1) : string)
        : b instanceof color ? rgb$1
        : b instanceof Date ? date
        : isNumberArray(b) ? numberArray
        : Array.isArray(b) ? genericArray
        : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object$1
        : interpolateNumber)(a, b);
  }

  function interpolateRound(a, b) {
    return a = +a, b = +b, function(t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  function constant$1(x) {
    return function() {
      return x;
    };
  }

  function number(x) {
    return +x;
  }

  var unit = [0, 1];

  function identity(x) {
    return x;
  }

  function normalize(a, b) {
    return (b -= (a = +a))
        ? function(x) { return (x - a) / b; }
        : constant$1(isNaN(b) ? NaN : 0.5);
  }

  function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) { return Math.max(a, Math.min(b, x)); };
  }

  // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
  // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) { return r0(d0(x)); };
  }

  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1,
        d = new Array(j),
        r = new Array(j),
        i = -1;

    // Reverse descending domains.
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }

    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }

    return function(x) {
      var i = bisectRight(domain, x, 1, j) - 1;
      return r[i](d[i](x));
    };
  }

  function copy(source, target) {
    return target
        .domain(source.domain())
        .range(source.range())
        .interpolate(source.interpolate())
        .clamp(source.clamp())
        .unknown(source.unknown());
  }

  function transformer() {
    var domain = unit,
        range = unit,
        interpolate$1 = interpolate,
        transform,
        untransform,
        unknown,
        clamp = identity,
        piecewise,
        output,
        input;

    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }

    function scale(x) {
      return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
    }

    scale.invert = function(y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
    };

    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
    };

    scale.range = function(_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };

    scale.rangeRound = function(_) {
      return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
    };

    scale.clamp = function(_) {
      return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };

    scale.interpolate = function(_) {
      return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
    };

    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };

    return function(t, u) {
      transform = t, untransform = u;
      return rescale();
    };
  }

  function continuous() {
    return transformer()(identity, identity);
  }

  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimal(1.23) returns ["123", 0].
  function formatDecimal(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);

    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x.slice(i + 1)
    ];
  }

  function exponent(x) {
    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
  }

  function formatGroup(grouping, thousands) {
    return function(value, width) {
      var i = value.length,
          t = [],
          j = 0,
          g = grouping[0],
          length = 0;

      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }

      return t.reverse().join(thousands);
    };
  }

  function formatNumerals(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }

  formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
  }

  FormatSpecifier.prototype.toString = function() {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width === undefined ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
        + (this.trim ? "~" : "")
        + this.type;
  };

  // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
  function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".": i0 = i1 = i; break;
        case "0": if (i0 === 0) i0 = i; i1 = i; break;
        default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  var prefixExponent;

  function formatPrefixAuto(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
  }

  function formatRounded(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  var formatTypes = {
    "%": function(x, p) { return (x * 100).toFixed(p); },
    "b": function(x) { return Math.round(x).toString(2); },
    "c": function(x) { return x + ""; },
    "d": function(x) { return Math.round(x).toString(10); },
    "e": function(x, p) { return x.toExponential(p); },
    "f": function(x, p) { return x.toFixed(p); },
    "g": function(x, p) { return x.toPrecision(p); },
    "o": function(x) { return Math.round(x).toString(8); },
    "p": function(x, p) { return formatRounded(x * 100, p); },
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
    "x": function(x) { return Math.round(x).toString(16); }
  };

  function identity$1(x) {
    return x;
  }

  var map = Array.prototype.map,
      prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

  function formatLocale(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity$1 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
        currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
        currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
        decimal = locale.decimal === undefined ? "." : locale.decimal + "",
        numerals = locale.numerals === undefined ? identity$1 : formatNumerals(map.call(locale.numerals, String)),
        percent = locale.percent === undefined ? "%" : locale.percent + "",
        minus = locale.minus === undefined ? "-" : locale.minus + "",
        nan = locale.nan === undefined ? "NaN" : locale.nan + "";

    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);

      var fill = specifier.fill,
          align = specifier.align,
          sign = specifier.sign,
          symbol = specifier.symbol,
          zero = specifier.zero,
          width = specifier.width,
          comma = specifier.comma,
          precision = specifier.precision,
          trim = specifier.trim,
          type = specifier.type;

      // The "n" type is an alias for ",g".
      if (type === "n") comma = true, type = "g";

      // The "" type, and any invalid type, is an alias for ".12~g".
      else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

      // If zero fill is specified, padding goes after sign and before digits.
      if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
          suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type],
          maybeSuffix = /[defgprs%]/.test(type);

      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision === undefined ? 6
          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
          : Math.max(0, Math.min(20, precision));

      function format(value) {
        var valuePrefix = prefix,
            valueSuffix = suffix,
            i, n, c;

        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;

          // Determine the sign. -0 is not less than 0, but 1 / -0 is!
          var valueNegative = value < 0 || 1 / value < 0;

          // Perform the initial formatting.
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

          // Trim insignificant zeros.
          if (trim) value = formatTrim(value);

          // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
          if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }

        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);

        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length,
            padding = length < width ? new Array(width - length + 1).join(fill) : "";

        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<": value = valuePrefix + value + valueSuffix + padding; break;
          case "=": value = valuePrefix + padding + value + valueSuffix; break;
          case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
          default: value = padding + valuePrefix + value + valueSuffix; break;
        }

        return numerals(value);
      }

      format.toString = function() {
        return specifier + "";
      };

      return format;
    }

    function formatPrefix(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
          k = Math.pow(10, -e),
          prefix = prefixes[8 + e / 3];
      return function(value) {
        return f(k * value) + prefix;
      };
    }

    return {
      format: newFormat,
      formatPrefix: formatPrefix
    };
  }

  var locale;
  var format;
  var formatPrefix;

  defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    minus: "-"
  });

  function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
  }

  function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  }

  function precisionRound(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, exponent(max) - exponent(step)) + 1;
  }

  function tickFormat(start, stop, count, specifier) {
    var step = tickStep(start, stop, count),
        precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  function linearish(scale) {
    var domain = scale.domain;

    scale.ticks = function(count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };

    scale.tickFormat = function(count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };

    scale.nice = function(count) {
      if (count == null) count = 10;

      var d = domain(),
          i0 = 0,
          i1 = d.length - 1,
          start = d[i0],
          stop = d[i1],
          step;

      if (stop < start) {
        step = start, start = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }

      step = tickIncrement(start, stop, count);

      if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
        step = tickIncrement(start, stop, count);
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
        step = tickIncrement(start, stop, count);
      }

      if (step > 0) {
        d[i0] = Math.floor(start / step) * step;
        d[i1] = Math.ceil(stop / step) * step;
        domain(d);
      } else if (step < 0) {
        d[i0] = Math.ceil(start * step) / step;
        d[i1] = Math.floor(stop * step) / step;
        domain(d);
      }

      return scale;
    };

    return scale;
  }

  function linear$1() {
    var scale = continuous();

    scale.copy = function() {
      return copy(scale, linear$1());
    };

    initRange.apply(scale, arguments);

    return linearish(scale);
  }

  var THREE$3 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    AdditiveBlending: three.AdditiveBlending,
    BufferGeometry: three.BufferGeometry,
    CubicBezierCurve3: three.CubicBezierCurve3,
    Curve: three.Curve,
    Float32BufferAttribute: three.Float32BufferAttribute,
    Line: three.Line,
    Mesh: three.Mesh,
    QuadraticBezierCurve3: three.QuadraticBezierCurve3,
    ShaderMaterial: three.ShaderMaterial,
    TubeBufferGeometry: three.TubeBufferGeometry,
    Vector3: three.Vector3
  };
  // support both modes for backwards threejs compatibility

  var setAttributeFn$1 = new THREE$3.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';
  var gradientShaders = {
    uniforms: {
      // dash param defaults, all relative to full length
      dashOffset: {
        value: 0
      },
      dashSize: {
        value: 1
      },
      gapSize: {
        value: 0
      },
      dashTranslate: {
        value: 0
      } // used for animating the dash

    },
    vertexShader: "\n    uniform float dashTranslate; \n\n    attribute vec4 vertexColor;\n    varying vec4 vColor;\n    \n    attribute float vertexRelDistance;\n    varying float vRelDistance;\n\n    void main() {\n      // pass through colors and distances\n      vColor = vertexColor;\n      vRelDistance = vertexRelDistance + dashTranslate;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ",
    fragmentShader: "\n    uniform float dashOffset; \n    uniform float dashSize;\n    uniform float gapSize; \n    \n    varying vec4 vColor;\n    varying float vRelDistance;\n    \n    void main() {\n      // ignore pixels in the gap\n      if (vRelDistance < dashOffset) discard;\n      if (mod(vRelDistance - dashOffset, dashSize + gapSize) > dashSize) discard;\n    \n      // set px color: [r, g, b, a], interpolated between vertices \n      gl_FragColor = vColor; \n    }\n  "
  };
  var ArcsLayerKapsule = index({
    props: {
      arcsData: {
        "default": []
      },
      arcStartLat: {
        "default": 'startLat'
      },
      arcStartLng: {
        "default": 'startLng'
      },
      arcEndLat: {
        "default": 'endLat'
      },
      arcEndLng: {
        "default": 'endLng'
      },
      arcColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      arcAltitude: {},
      // in units of globe radius
      arcAltitudeAutoScale: {
        "default": 0.5
      },
      // scale altitude proportional to great-arc distance between the two points
      arcStroke: {},
      // in deg
      arcCurveResolution: {
        "default": 64,
        triggerUpdate: false
      },
      // how many straight segments in the curve
      arcCircularResolution: {
        "default": 6,
        triggerUpdate: false
      },
      // how many slice segments in the tube's circumference
      arcDashLength: {
        "default": 1
      },
      // in units of line length
      arcDashGap: {
        "default": 0
      },
      arcDashInitialGap: {
        "default": 0
      },
      arcDashAnimateTime: {
        "default": 0
      },
      // ms
      arcsTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj; // Kick-off dash animations

      new FrameTicker$1().onTick.add(function (_, timeDelta) {
        state.arcsData.filter(function (d) {
          return d.__threeObj && d.__threeObj.material && d.__threeObj.__dashAnimateStep;
        }).forEach(function (d) {
          var obj = d.__threeObj;
          var step = obj.__dashAnimateStep * timeDelta;
          var curTranslate = obj.material.uniforms.dashTranslate.value % 1e9; // reset after 1B loops

          obj.material.uniforms.dashTranslate.value = curTranslate + step;
        });
      });
    },
    update: function update(state) {
      // Data accessors
      var startLatAccessor = index$1(state.arcStartLat);
      var startLngAccessor = index$1(state.arcStartLng);
      var endLatAccessor = index$1(state.arcEndLat);
      var endLngAccessor = index$1(state.arcEndLng);
      var altitudeAccessor = index$1(state.arcAltitude);
      var altitudeAutoScaleAccessor = index$1(state.arcAltitudeAutoScale);
      var strokeAccessor = index$1(state.arcStroke);
      var colorAccessor = index$1(state.arcColor);
      var dashLengthAccessor = index$1(state.arcDashLength);
      var dashGapAccessor = index$1(state.arcDashGap);
      var dashInitialGapAccessor = index$1(state.arcDashInitialGap);
      var dashAnimateTimeAccessor = index$1(state.arcDashAnimateTime);
      var sharedMaterial = new THREE$3.ShaderMaterial(_objectSpread2({}, gradientShaders, {
        transparent: true,
        blending: THREE$3.AdditiveBlending
      }));
      threeDigest(state.arcsData, state.scene, {
        createObj: function createObj(arc) {
          var stroke = strokeAccessor(arc);
          var useTube = stroke !== null && stroke !== undefined;
          var obj = useTube ? new THREE$3.Mesh() : new THREE$3.Line(new THREE$3.BufferGeometry());
          obj.material = sharedMaterial.clone(); // Separate material instance per object to have dedicated uniforms (but shared shaders)

          obj.__globeObjType = 'arc'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, arc) {
          var stroke = strokeAccessor(arc);
          var useTube = stroke !== null && stroke !== undefined; // set dash uniforms

          Object.assign(obj.material.uniforms, {
            dashSize: {
              value: dashLengthAccessor(arc)
            },
            gapSize: {
              value: dashGapAccessor(arc)
            },
            dashOffset: {
              value: dashInitialGapAccessor(arc)
            }
          }); // set dash animation step

          var dashAnimateTime = dashAnimateTimeAccessor(arc);
          obj.__dashAnimateStep = dashAnimateTime > 0 ? 1000 / dashAnimateTime : 0; // per second
          // calculate vertex colors (to create gradient)

          var vertexColorArray = calcColorVertexArray(colorAccessor(arc), // single or array of colors
          state.arcCurveResolution, // numSegments
          useTube ? state.arcCircularResolution + 1 : 1 // num vertices per segment
          ); // calculate vertex relative distances (for dashed lines)

          var vertexRelDistanceArray = calcVertexRelDistances(state.arcCurveResolution, // numSegments
          useTube ? state.arcCircularResolution + 1 : 1, // num vertices per segment
          true // run from end to start, to animate in the correct direction
          );
          obj.geometry[setAttributeFn$1]('vertexColor', vertexColorArray);
          obj.geometry[setAttributeFn$1]('vertexRelDistance', vertexRelDistanceArray);

          var applyUpdate = function applyUpdate(td) {
            var _arc$__currentTargetD = arc.__currentTargetD = td,
                stroke = _arc$__currentTargetD.stroke,
                curveD = _objectWithoutProperties(_arc$__currentTargetD, ["stroke"]);

            var curve = calcCurve(curveD);

            if (useTube) {
              obj.geometry && obj.geometry.dispose();
              obj.geometry = new THREE$3.TubeBufferGeometry(curve, state.arcCurveResolution, stroke / 2, state.arcCircularResolution);
              obj.geometry[setAttributeFn$1]('vertexColor', vertexColorArray);
              obj.geometry[setAttributeFn$1]('vertexRelDistance', vertexRelDistanceArray);
            } else {
              obj.geometry.setFromPoints(curve.getPoints(state.arcCurveResolution));
            }
          };

          var targetD = {
            stroke: stroke,
            alt: altitudeAccessor(arc),
            altAutoScale: +altitudeAutoScaleAccessor(arc),
            startLat: +startLatAccessor(arc),
            startLng: +startLngAccessor(arc),
            endLat: +endLatAccessor(arc),
            endLng: +endLngAccessor(arc)
          };
          var currentTargetD = arc.__currentTargetD || Object.assign({}, targetD, {
            altAutoScale: -1e-3
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.arcsTransitionDuration || state.arcsTransitionDuration < 0) {
              // set final position
              applyUpdate(targetD);
            } else {
              // animate
              new TWEEN.Tween(currentTargetD).to(targetD, state.arcsTransitionDuration).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
            }
          }
        }
      }); //

      function calcCurve(_ref) {
        var alt = _ref.alt,
            altAutoScale = _ref.altAutoScale,
            startLat = _ref.startLat,
            startLng = _ref.startLng,
            endLat = _ref.endLat,
            endLng = _ref.endLng;

        var getVec = function getVec(_ref2) {
          var _ref3 = _slicedToArray(_ref2, 3),
              lng = _ref3[0],
              lat = _ref3[1],
              alt = _ref3[2];

          var _polar2Cartesian = polar2Cartesian(lat, lng, alt),
              x = _polar2Cartesian.x,
              y = _polar2Cartesian.y,
              z = _polar2Cartesian.z;

          return new THREE$3.Vector3(x, y, z);
        }; //calculate curve


        var startPnt = [startLng, startLat];
        var endPnt = [endLng, endLat];
        var altitude = alt;
        (altitude === null || altitude === undefined) && ( // by default set altitude proportional to the great-arc distance
        altitude = geoDistance(startPnt, endPnt) / 2 * altAutoScale);

        if (altitude) {
          var interpolate = geoInterpolate(startPnt, endPnt);

          var _map = [0.25, 0.75].map(function (t) {
            return [].concat(_toConsumableArray(interpolate(t)), [altitude * 1.5]);
          }),
              _map2 = _slicedToArray(_map, 2),
              m1Pnt = _map2[0],
              m2Pnt = _map2[1];

          var curve = _construct(THREE$3.CubicBezierCurve3, _toConsumableArray([startPnt, m1Pnt, m2Pnt, endPnt].map(getVec))); //const mPnt = [...interpolate(0.5), altitude * 2];
          //curve = new THREE.QuadraticBezierCurve3(...[startPnt, mPnt, endPnt].map(getVec));


          return curve;
        } else {
          // ground line
          var _alt = 0.001; // slightly above the ground to prevent occlusion

          return calcSphereArc.apply(void 0, _toConsumableArray([[].concat(startPnt, [_alt]), [].concat(endPnt, [_alt])].map(getVec)));
        } //


        function calcSphereArc(startVec, endVec) {
          var angle = startVec.angleTo(endVec);

          var getGreatCirclePoint = function getGreatCirclePoint(t) {
            return new THREE$3.Vector3().addVectors(startVec.clone().multiplyScalar(Math.sin((1 - t) * angle)), endVec.clone().multiplyScalar(Math.sin(t * angle))).divideScalar(Math.sin(angle));
          };

          var sphereArc = new THREE$3.Curve();
          sphereArc.getPoint = getGreatCirclePoint;
          return sphereArc;
        }
      }

      function calcColorVertexArray(colors, numSegments) {
        var numVerticesPerSegment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

        var getVertexColor;

        if (colors instanceof Array) {
          // array of colors, interpolate at each step
          var colorScale = linear$1().domain(colors.map(function (_, idx) {
            return idx / (colors.length - 1);
          })) // same number of stops as colors
          .range(colors);

          getVertexColor = function getVertexColor(t) {
            return color2ShaderArr(colorScale(t));
          };
        } else {
          // single color, use constant
          var vertexColor = color2ShaderArr(colors);

          getVertexColor = function getVertexColor() {
            return vertexColor;
          };
        }

        var vertexColorArray = new THREE$3.Float32BufferAttribute(numVerticesGroup * 4 * numVerticesPerSegment, 4);

        for (var v = 0, l = numVerticesGroup; v < l; v++) {
          var _vertexColor = getVertexColor(v / (l - 1));

          for (var s = 0; s < numVerticesPerSegment; s++) {
            vertexColorArray.set(_vertexColor, (v * numVerticesPerSegment + s) * 4);
          }
        }

        return vertexColorArray;
      }

      function calcVertexRelDistances(numSegments) {
        var numVerticesPerSegment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

        var arrLen = numVerticesGroup * numVerticesPerSegment;
        var vertexDistanceArray = new THREE$3.Float32BufferAttribute(arrLen, 1);

        for (var v = 0, l = numVerticesGroup; v < l; v++) {
          var relDistance = v / (l - 1);

          for (var s = 0; s < numVerticesPerSegment; s++) {
            var idx = v * numVerticesPerSegment + s;
            var pos = invert ? arrLen - 1 - idx : idx;
            vertexDistanceArray.setX(pos, relDistance);
          }
        }

        return vertexDistanceArray;
      }
    }
  });

  function _slicedToArray$5(arr, i) {
    return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _nonIterableRest$5();
  }

  function _toConsumableArray$3(arr) {
    return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _nonIterableSpread$3();
  }

  function _arrayWithoutHoles$3(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles$5(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$3(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit$5(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread$3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest$5() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var THREE$4 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three.BufferGeometry,
    Float32BufferAttribute: three.Float32BufferAttribute,
    Geometry: three.Geometry
  };

  var setAttributeFn$2 = new THREE$4.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';

  function ConicPolygonGeometry(polygonGeoJson, startHeight, endHeight, closedBottom, closedTop, includeSides) {
    THREE$4.Geometry.call(this);
    this.type = 'ConicPolygonGeometry';
    this.parameters = {
      polygonGeoJson: polygonGeoJson,
      startHeight: startHeight,
      endHeight: endHeight,
      closedBottom: closedBottom,
      closedTop: closedTop,
      includeSides: includeSides
    };
    this.fromBufferGeometry(new ConicPolygonBufferGeometry(polygonGeoJson, startHeight, endHeight, closedBottom, closedTop, includeSides));
    this.mergeVertices();
  }

  ConicPolygonGeometry.prototype = Object.create(THREE$4.Geometry.prototype);
  ConicPolygonGeometry.prototype.constructor = ConicPolygonGeometry;

  function ConicPolygonBufferGeometry(polygonGeoJson, startHeight, endHeight, closedBottom, closedTop, includeSides) {
    THREE$4.BufferGeometry.call(this);
    this.type = 'ConicPolygonBufferGeometry';
    this.parameters = {
      polygonGeoJson: polygonGeoJson,
      startHeight: startHeight,
      endHeight: endHeight,
      closedBottom: closedBottom,
      closedTop: closedTop,
      includeSides: includeSides
    }; // defaults

    startHeight = startHeight || 0;
    endHeight = endHeight || 1;
    closedBottom = closedBottom !== undefined ? closedBottom : true;
    closedTop = closedTop !== undefined ? closedTop : true;
    includeSides = includeSides !== undefined ? includeSides : true; // calc vertices & indices

    var _generateVertices = generateVertices(startHeight),
        bottomVerts = _generateVertices.vertices,
        holes = _generateVertices.holes;

    var _generateVertices2 = generateVertices(endHeight),
        topVerts = _generateVertices2.vertices;

    var numPoints = Math.round(topVerts.length / 3);
    var vertices = [].concat(_toConsumableArray$3(topVerts), _toConsumableArray$3(bottomVerts));
    var indices = [];
    var groupCnt = 0; // add groups to apply different materials to torso / caps

    if (includeSides) {
      var prevIndCnt = indices.length;
      indices = indices.concat(generateTorso());
      this.addGroup(prevIndCnt, indices.length - prevIndCnt, groupCnt++);
    }

    if (closedBottom) {
      var _prevIndCnt = indices.length;
      indices = indices.concat(generateCap(false));
      this.addGroup(_prevIndCnt, indices.length - _prevIndCnt, groupCnt++);
    }

    if (closedTop) {
      var _prevIndCnt2 = indices.length;
      indices = indices.concat(generateCap(true));
      this.addGroup(_prevIndCnt2, indices.length - _prevIndCnt2, groupCnt++);
    } // build geometry


    this.setIndex(indices);
    this[setAttributeFn$2]('position', new THREE$4.Float32BufferAttribute(vertices, 3)); //

    function generateVertices(altitude) {
      var coords3d = polygonGeoJson.map(function (coords) {
        return coords.map(function (_ref) {
          var _ref2 = _slicedToArray$5(_ref, 2),
              lng = _ref2[0],
              lat = _ref2[1];

          return polar2Cartesian$2(lat, lng, altitude);
        });
      }); // returns { vertices, holes, coordinates }. Each point generates 3 vertice items (x,y,z).

      return earcut_1.flatten(coords3d);
    }

    function generateTorso() {
      var holesIdx = new Set(holes);
      var lastHoleIdx = 0;
      var indices = [];

      for (var v0Idx = 0; v0Idx < numPoints; v0Idx++) {
        var v1Idx = v0Idx + 1; // next point

        if (v1Idx === numPoints) {
          v1Idx = lastHoleIdx; // close final loop
        } else if (holesIdx.has(v1Idx)) {
          var holeIdx = v1Idx;
          v1Idx = lastHoleIdx; // close hole loop

          lastHoleIdx = holeIdx;
        } // Each pair of coords generates two triangles (faces)


        indices.push(v0Idx, v0Idx + numPoints, v1Idx + numPoints);
        indices.push(v1Idx + numPoints, v1Idx, v0Idx);
      }

      return indices;
    }

    function generateCap() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // !! using the 3d coords generates shapes with the wrong winding, connecting the outsides of the contour
      // so we derive the indexes from the lat,lng coordinates directly
      // let capIndices = earcut(top ? topVerts : bottomVerts, holes, 3);
      var capIndices = earcut_1(earcut_1.flatten(polygonGeoJson).vertices, holes, 2);
      !top && (capIndices = capIndices.map(function (v) {
        return v + numPoints;
      })); // translate bottom indices

      return capIndices;
    }
  }

  ConicPolygonBufferGeometry.prototype = Object.create(THREE$4.BufferGeometry.prototype);
  ConicPolygonBufferGeometry.prototype.constructor = ConicPolygonBufferGeometry; //

  function polar2Cartesian$2(lat, lng) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (90 - lng) * Math.PI / 180;
    return [r * Math.sin(phi) * Math.cos(theta), // x
    r * Math.cos(phi), // y
    r * Math.sin(phi) * Math.sin(theta) // z
    ];
  }

  var libh3 = function (libh3) {
    libh3 = libh3 || {};
    var Module = typeof libh3 !== "undefined" ? libh3 : {};
    var moduleOverrides = {};
    var key;

    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }

    var arguments_ = [];
    var thisProgram = "./this.program";

    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_HAS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_HAS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var scriptDirectory = "";

    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }

      return scriptDirectory + path;
    }

    var read_, readAsync, readBinary;

    if (ENVIRONMENT_IS_NODE) {
      scriptDirectory = __dirname + "/";
      var nodeFS;
      var nodePath;

      read_ = function shell_read(filename, binary) {
        var ret;
        ret = tryParseAsDataURI(filename);

        if (!ret) {
          if (!nodeFS) { nodeFS = require("fs"); }
          if (!nodePath) { nodePath = require("path"); }
          filename = nodePath["normalize"](filename);
          ret = nodeFS["readFileSync"](filename);
        }

        return binary ? ret : ret.toString();
      };

      readBinary = function readBinary(filename) {
        var ret = read_(filename, true);

        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }

        assert(ret.buffer);
        return ret;
      };

      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/");
      }

      arguments_ = process["argv"].slice(2);

      Module["inspect"] = function () {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          var data = tryParseAsDataURI(f);

          if (data) {
            return intArrayToString(data);
          }

          return read(f);
        };
      }

      readBinary = function readBinary(f) {
        var data;
        data = tryParseAsDataURI(f);

        if (data) {
          return data;
        }

        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }

        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };

      if (typeof scriptArgs != "undefined") {
        arguments_ = scriptArgs;
      } else if (typeof arguments != "undefined") {
        arguments_ = arguments;
      }

      if (typeof print !== "undefined") {
        if (typeof console === "undefined") { console = {}; }
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }

      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }

      read_ = function shell_read(url) {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        } catch (err) {
          var data = tryParseAsDataURI(url);

          if (data) {
            return intArrayToString(data);
          }

          throw err;
        }
      };

      if (ENVIRONMENT_IS_WORKER) {
        readBinary = function readBinary(url) {
          try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          } catch (err) {
            var data = tryParseAsDataURI(url);

            if (data) {
              return data;
            }

            throw err;
          }
        };
      }

      readAsync = function readAsync(url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";

        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
            onload(xhr.response);
            return;
          }

          var data = tryParseAsDataURI(url);

          if (data) {
            onload(data.buffer);
            return;
          }

          onerror();
        };

        xhr.onerror = onerror;
        xhr.send(null);
      };
    }

    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);

    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }

    moduleOverrides = null;
    if (Module["arguments"]) { arguments_ = Module["arguments"]; }
    if (Module["thisProgram"]) { thisProgram = Module["thisProgram"]; }

    var tempRet0 = 0;

    var setTempRet0 = function (value) {
      tempRet0 = value;
    };

    var getTempRet0 = function () {
      return tempRet0;
    };

    var GLOBAL_BASE = 8;

    function setValue(ptr, value, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*") { type = "i32"; }

      switch (type) {
        case "i1":
          HEAP8[ptr >> 0] = value;
          break;

        case "i8":
          HEAP8[ptr >> 0] = value;
          break;

        case "i16":
          HEAP16[ptr >> 1] = value;
          break;

        case "i32":
          HEAP32[ptr >> 2] = value;
          break;

        case "i64":
          tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
          break;

        case "float":
          HEAPF32[ptr >> 2] = value;
          break;

        case "double":
          HEAPF64[ptr >> 3] = value;
          break;

        default:
          abort("invalid type for setValue: " + type);
      }
    }

    function getValue(ptr, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*") { type = "i32"; }

      switch (type) {
        case "i1":
          return HEAP8[ptr >> 0];

        case "i8":
          return HEAP8[ptr >> 0];

        case "i16":
          return HEAP16[ptr >> 1];

        case "i32":
          return HEAP32[ptr >> 2];

        case "i64":
          return HEAP32[ptr >> 2];

        case "float":
          return HEAPF32[ptr >> 2];

        case "double":
          return HEAPF64[ptr >> 3];

        default:
          abort("invalid type for getValue: " + type);
      }

      return null;
    }

    var ABORT = false;

    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }

    function getCFunc(ident) {
      var func = Module["_" + ident];
      assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
      return func;
    }

    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        "string": function (str) {
          var ret = 0;

          if (str !== null && str !== undefined && str !== 0) {
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len);
          }

          return ret;
        },
        "array": function (arr) {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };

      function convertReturnValue(ret) {
        if (returnType === "string") { return UTF8ToString(ret); }
        if (returnType === "boolean") { return Boolean(ret); }
        return ret;
      }

      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;

      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];

          if (converter) {
            if (stack === 0) { stack = stackSave(); }
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }

      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0) { stackRestore(stack); }
      return ret;
    }

    function cwrap(ident, returnType, argTypes, opts) {
      argTypes = argTypes || [];
      var numericArgs = argTypes.every(function (type) {
        return type === "number";
      });
      var numericRet = returnType !== "string";

      if (numericRet && numericArgs && !opts) {
        return getCFunc(ident);
      }

      return function () {
        return ccall(ident, returnType, argTypes, arguments);
      };
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

    function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;

      while (u8Array[endPtr] && !(endPtr >= endIdx)) { ++endPtr; }

      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      } else {
        var str = "";

        while (idx < endPtr) {
          var u0 = u8Array[idx++];

          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }

          var u1 = u8Array[idx++] & 63;

          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }

          var u2 = u8Array[idx++] & 63;

          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
          }

          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }

      return str;
    }

    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }

    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0)) { return 0; }
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;

      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);

        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }

        if (u <= 127) {
          if (outIdx >= endIdx) { break; }
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) { break; }
          outU8Array[outIdx++] = 192 | u >> 6;
          outU8Array[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) { break; }
          outU8Array[outIdx++] = 224 | u >> 12;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) { break; }
          outU8Array[outIdx++] = 240 | u >> 18;
          outU8Array[outIdx++] = 128 | u >> 12 & 63;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        }
      }

      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }

    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }

    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

    function writeArrayToMemory(array, buffer) {
      HEAP8.set(array, buffer);
    }

    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }

      return x;
    }

    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }

    var DYNAMIC_BASE = 5266576,
        DYNAMICTOP_PTR = 23664;
    var INITIAL_TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 33554432;

    if (Module["buffer"]) {
      buffer = Module["buffer"];
    } else {
      buffer = new ArrayBuffer(INITIAL_TOTAL_MEMORY);
    }

    INITIAL_TOTAL_MEMORY = buffer.byteLength;
    updateGlobalBufferAndViews(buffer);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;

    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();

        if (typeof callback == "function") {
          callback();
          continue;
        }

        var func = callback.func;

        if (typeof func === "number") {
          if (callback.arg === undefined) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];

    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") { Module["preRun"] = [Module["preRun"]]; }

        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }

      callRuntimeCallbacks(__ATPRERUN__);
    }

    function initRuntime() {
      callRuntimeCallbacks(__ATINIT__);
    }

    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }

    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") { Module["postRun"] = [Module["postRun"]]; }

        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }

      callRuntimeCallbacks(__ATPOSTRUN__);
    }

    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }

    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }

    var Math_abs = Math.abs;
    var Math_ceil = Math.ceil;
    var Math_floor = Math.floor;
    var Math_min = Math.min;
    var runDependencies = 0;
    var dependenciesFulfilled = null;

    function addRunDependency(id) {
      runDependencies++;

      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }

    function removeRunDependency(id) {
      runDependencies--;

      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }

      if (runDependencies == 0) {

        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }

    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    var memoryInitializer = null;
    var dataURIPrefix = "data:application/octet-stream;base64,";

    function isDataURI(filename) {
      return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
    }

    var tempDouble;
    var tempI64;
    memoryInitializer = "data:application/octet-stream;base64,AAAAAAAAAAACAAAAAwAAAAEAAAAFAAAABAAAAAYAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAABAAAABAAAAAMAAAAGAAAABQAAAAIAAAAAAAAAAgAAAAMAAAABAAAABAAAAAYAAAAAAAAABQAAAAMAAAAGAAAABAAAAAUAAAAAAAAAAQAAAAIAAAAEAAAABQAAAAYAAAAAAAAAAgAAAAMAAAABAAAABQAAAAIAAAAAAAAAAQAAAAMAAAAGAAAABAAAAAYAAAAAAAAABQAAAAIAAAABAAAABAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAAAAAAAAAAAAAIAAAAAAAAAAQAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABgAAAAAAAAAFAAAAAAAAAAAAAAAEAAAABQAAAAAAAAAAAAAAAAAAAAIAAAAAAAAABgAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAAAAAACAAAAAwAAAAQAAAAFAAAABgAAAAAAAAABAAAAAwAAAAQAAAAFAAAABgAAAAAAAAABAAAAAgAAAAQAAAAFAAAABgAAAAAAAAABAAAAAgAAAAMAAAAFAAAABgAAAAAAAAABAAAAAgAAAAMAAAAEAAAABgAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAgAAAAAAAAAAAAAABgAAAAAAAAADAAAAAgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAUAAAAEAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAEAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAUAAAACAAAABAAAAAMAAAAIAAAAAQAAAAcAAAAGAAAACQAAAAAAAAADAAAAAgAAAAIAAAAGAAAACgAAAAsAAAAAAAAAAQAAAAUAAAADAAAADQAAAAEAAAAHAAAABAAAAAwAAAAAAAAABAAAAH8AAAAPAAAACAAAAAMAAAAAAAAADAAAAAUAAAACAAAAEgAAAAoAAAAIAAAAAAAAABAAAAAGAAAADgAAAAsAAAARAAAAAQAAAAkAAAACAAAABwAAABUAAAAJAAAAEwAAAAMAAAANAAAAAQAAAAgAAAAFAAAAFgAAABAAAAAEAAAAAAAAAA8AAAAJAAAAEwAAAA4AAAAUAAAAAQAAAAcAAAAGAAAACgAAAAsAAAAYAAAAFwAAAAUAAAACAAAAEgAAAAsAAAARAAAAFwAAABkAAAACAAAABgAAAAoAAAAMAAAAHAAAAA0AAAAaAAAABAAAAA8AAAADAAAADQAAABoAAAAVAAAAHQAAAAMAAAAMAAAABwAAAA4AAAB/AAAAEQAAABsAAAAJAAAAFAAAAAYAAAAPAAAAFgAAABwAAAAfAAAABAAAAAgAAAAMAAAAEAAAABIAAAAhAAAAHgAAAAgAAAAFAAAAFgAAABEAAAALAAAADgAAAAYAAAAjAAAAGQAAABsAAAASAAAAGAAAAB4AAAAgAAAABQAAAAoAAAAQAAAAEwAAACIAAAAUAAAAJAAAAAcAAAAVAAAACQAAABQAAAAOAAAAEwAAAAkAAAAoAAAAGwAAACQAAAAVAAAAJgAAABMAAAAiAAAADQAAAB0AAAAHAAAAFgAAABAAAAApAAAAIQAAAA8AAAAIAAAAHwAAABcAAAAYAAAACwAAAAoAAAAnAAAAJQAAABkAAAAYAAAAfwAAACAAAAAlAAAACgAAABcAAAASAAAAGQAAABcAAAARAAAACwAAAC0AAAAnAAAAIwAAABoAAAAqAAAAHQAAACsAAAAMAAAAHAAAAA0AAAAbAAAAKAAAACMAAAAuAAAADgAAABQAAAARAAAAHAAAAB8AAAAqAAAALAAAAAwAAAAPAAAAGgAAAB0AAAArAAAAJgAAAC8AAAANAAAAGgAAABUAAAAeAAAAIAAAADAAAAAyAAAAEAAAABIAAAAhAAAAHwAAACkAAAAsAAAANQAAAA8AAAAWAAAAHAAAACAAAAAeAAAAGAAAABIAAAA0AAAAMgAAACUAAAAhAAAAHgAAADEAAAAwAAAAFgAAABAAAAApAAAAIgAAABMAAAAmAAAAFQAAADYAAAAkAAAAMwAAACMAAAAuAAAALQAAADgAAAARAAAAGwAAABkAAAAkAAAAFAAAACIAAAATAAAANwAAACgAAAA2AAAAJQAAACcAAAA0AAAAOQAAABgAAAAXAAAAIAAAACYAAAB/AAAAIgAAADMAAAAdAAAALwAAABUAAAAnAAAAJQAAABkAAAAXAAAAOwAAADkAAAAtAAAAKAAAABsAAAAkAAAAFAAAADwAAAAuAAAANwAAACkAAAAxAAAANQAAAD0AAAAWAAAAIQAAAB8AAAAqAAAAOgAAACsAAAA+AAAAHAAAACwAAAAaAAAAKwAAAD4AAAAvAAAAQAAAABoAAAAqAAAAHQAAACwAAAA1AAAAOgAAAEEAAAAcAAAAHwAAACoAAAAtAAAAJwAAACMAAAAZAAAAPwAAADsAAAA4AAAALgAAADwAAAA4AAAARAAAABsAAAAoAAAAIwAAAC8AAAAmAAAAKwAAAB0AAABFAAAAMwAAAEAAAAAwAAAAMQAAAB4AAAAhAAAAQwAAAEIAAAAyAAAAMQAAAH8AAAA9AAAAQgAAACEAAAAwAAAAKQAAADIAAAAwAAAAIAAAAB4AAABGAAAAQwAAADQAAAAzAAAARQAAADYAAABHAAAAJgAAAC8AAAAiAAAANAAAADkAAABGAAAASgAAACAAAAAlAAAAMgAAADUAAAA9AAAAQQAAAEsAAAAfAAAAKQAAACwAAAA2AAAARwAAADcAAABJAAAAIgAAADMAAAAkAAAANwAAACgAAAA2AAAAJAAAAEgAAAA8AAAASQAAADgAAABEAAAAPwAAAE0AAAAjAAAALgAAAC0AAAA5AAAAOwAAAEoAAABOAAAAJQAAACcAAAA0AAAAOgAAAH8AAAA+AAAATAAAACwAAABBAAAAKgAAADsAAAA/AAAATgAAAE8AAAAnAAAALQAAADkAAAA8AAAASAAAAEQAAABQAAAAKAAAADcAAAAuAAAAPQAAADUAAAAxAAAAKQAAAFEAAABLAAAAQgAAAD4AAAArAAAAOgAAACoAAABSAAAAQAAAAEwAAAA/AAAAfwAAADgAAAAtAAAATwAAADsAAABNAAAAQAAAAC8AAAA+AAAAKwAAAFQAAABFAAAAUgAAAEEAAAA6AAAANQAAACwAAABWAAAATAAAAEsAAABCAAAAQwAAAFEAAABVAAAAMQAAADAAAAA9AAAAQwAAAEIAAAAyAAAAMAAAAFcAAABVAAAARgAAAEQAAAA4AAAAPAAAAC4AAABaAAAATQAAAFAAAABFAAAAMwAAAEAAAAAvAAAAWQAAAEcAAABUAAAARgAAAEMAAAA0AAAAMgAAAFMAAABXAAAASgAAAEcAAABZAAAASQAAAFsAAAAzAAAARQAAADYAAABIAAAAfwAAAEkAAAA3AAAAUAAAADwAAABYAAAASQAAAFsAAABIAAAAWAAAADYAAABHAAAANwAAAEoAAABOAAAAUwAAAFwAAAA0AAAAOQAAAEYAAABLAAAAQQAAAD0AAAA1AAAAXgAAAFYAAABRAAAATAAAAFYAAABSAAAAYAAAADoAAABBAAAAPgAAAE0AAAA/AAAARAAAADgAAABdAAAATwAAAFoAAABOAAAASgAAADsAAAA5AAAAXwAAAFwAAABPAAAATwAAAE4AAAA/AAAAOwAAAF0AAABfAAAATQAAAFAAAABEAAAASAAAADwAAABjAAAAWgAAAFgAAABRAAAAVQAAAF4AAABlAAAAPQAAAEIAAABLAAAAUgAAAGAAAABUAAAAYgAAAD4AAABMAAAAQAAAAFMAAAB/AAAASgAAAEYAAABkAAAAVwAAAFwAAABUAAAARQAAAFIAAABAAAAAYQAAAFkAAABiAAAAVQAAAFcAAABlAAAAZgAAAEIAAABDAAAAUQAAAFYAAABMAAAASwAAAEEAAABoAAAAYAAAAF4AAABXAAAAUwAAAGYAAABkAAAAQwAAAEYAAABVAAAAWAAAAEgAAABbAAAASQAAAGMAAABQAAAAaQAAAFkAAABhAAAAWwAAAGcAAABFAAAAVAAAAEcAAABaAAAATQAAAFAAAABEAAAAagAAAF0AAABjAAAAWwAAAEkAAABZAAAARwAAAGkAAABYAAAAZwAAAFwAAABTAAAATgAAAEoAAABsAAAAZAAAAF8AAABdAAAATwAAAFoAAABNAAAAbQAAAF8AAABqAAAAXgAAAFYAAABRAAAASwAAAGsAAABoAAAAZQAAAF8AAABcAAAATwAAAE4AAABtAAAAbAAAAF0AAABgAAAAaAAAAGIAAABuAAAATAAAAFYAAABSAAAAYQAAAH8AAABiAAAAVAAAAGcAAABZAAAAbwAAAGIAAABuAAAAYQAAAG8AAABSAAAAYAAAAFQAAABjAAAAUAAAAGkAAABYAAAAagAAAFoAAABxAAAAZAAAAGYAAABTAAAAVwAAAGwAAAByAAAAXAAAAGUAAABmAAAAawAAAHAAAABRAAAAVQAAAF4AAABmAAAAZQAAAFcAAABVAAAAcgAAAHAAAABkAAAAZwAAAFsAAABhAAAAWQAAAHQAAABpAAAAbwAAAGgAAABrAAAAbgAAAHMAAABWAAAAXgAAAGAAAABpAAAAWAAAAGcAAABbAAAAcQAAAGMAAAB0AAAAagAAAF0AAABjAAAAWgAAAHUAAABtAAAAcQAAAGsAAAB/AAAAZQAAAF4AAABzAAAAaAAAAHAAAABsAAAAZAAAAF8AAABcAAAAdgAAAHIAAABtAAAAbQAAAGwAAABdAAAAXwAAAHUAAAB2AAAAagAAAG4AAABiAAAAaAAAAGAAAAB3AAAAbwAAAHMAAABvAAAAYQAAAG4AAABiAAAAdAAAAGcAAAB3AAAAcAAAAGsAAABmAAAAZQAAAHgAAABzAAAAcgAAAHEAAABjAAAAdAAAAGkAAAB1AAAAagAAAHkAAAByAAAAcAAAAGQAAABmAAAAdgAAAHgAAABsAAAAcwAAAG4AAABrAAAAaAAAAHgAAAB3AAAAcAAAAHQAAABnAAAAdwAAAG8AAABxAAAAaQAAAHkAAAB1AAAAfwAAAG0AAAB2AAAAcQAAAHkAAABqAAAAdgAAAHgAAABsAAAAcgAAAHUAAAB5AAAAbQAAAHcAAABvAAAAcwAAAG4AAAB5AAAAdAAAAHgAAAB4AAAAcwAAAHIAAABwAAAAeQAAAHcAAAB2AAAAeQAAAHQAAAB4AAAAdwAAAHUAAABxAAAAdgAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAEAAAAFAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAIAAAAFAAAAAQAAAAAAAAD/////AQAAAAAAAAADAAAABAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAUAAAABAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAAFAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAQAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAABAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAABAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAADAAAABQAAAAEAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAEAAAABQAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAMAAAABAAAAAAAAAAEAAAAAAAAABQAAAAAAAAAAAAAABQAAAAUAAAAAAAAAAAAAAP////8BAAAAAAAAAAMAAAAEAAAAAgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAABQAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAP//////////AQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAIAAAAAAAAAAAAAAAEAAAACAAAABgAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAoAAAACAAAAAAAAAAAAAAABAAAAAQAAAAUAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAIAAAAAAAAAAAAAAAEAAAADAAAABwAAAAYAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAHAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAgAAAAAAAAAAAAAAAQAAAAAAAAAJAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAwAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAgAAAAAAAAAAAAAAAQAAAAQAAAAIAAAACgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAJAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAACAAAAAAAAAAAAAAABAAAACwAAAA8AAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA4AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAgAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAACAAAAAAAAAAAAAAABAAAADAAAABAAAAAMAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAEAAAAKAAAAEwAAAAgAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAJAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAgAAAAAAAAAAAAAAAQAAAA0AAAARAAAADQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABMAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAIAAAAAAAAAAAAAAAEAAAAOAAAAEgAAAA8AAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABMAAAACAAAAAAAAAAAAAAABAAAA//////////8TAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAASAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABIAAAAAAAAAGAAAAAAAAAAhAAAAAAAAAB4AAAAAAAAAIAAAAAMAAAAxAAAAAQAAADAAAAADAAAAMgAAAAMAAAAIAAAAAAAAAAUAAAAFAAAACgAAAAUAAAAWAAAAAAAAABAAAAAAAAAAEgAAAAAAAAApAAAAAQAAACEAAAAAAAAAHgAAAAAAAAAEAAAAAAAAAAAAAAAFAAAAAgAAAAUAAAAPAAAAAQAAAAgAAAAAAAAABQAAAAUAAAAfAAAAAQAAABYAAAAAAAAAEAAAAAAAAAACAAAAAAAAAAYAAAAAAAAADgAAAAAAAAAKAAAAAAAAAAsAAAAAAAAAEQAAAAMAAAAYAAAAAQAAABcAAAADAAAAGQAAAAMAAAAAAAAAAAAAAAEAAAAFAAAACQAAAAUAAAAFAAAAAAAAAAIAAAAAAAAABgAAAAAAAAASAAAAAQAAAAoAAAAAAAAACwAAAAAAAAAEAAAAAQAAAAMAAAAFAAAABwAAAAUAAAAIAAAAAQAAAAAAAAAAAAAAAQAAAAUAAAAQAAAAAQAAAAUAAAAAAAAAAgAAAAAAAAAHAAAAAAAAABUAAAAAAAAAJgAAAAAAAAAJAAAAAAAAABMAAAAAAAAAIgAAAAMAAAAOAAAAAQAAABQAAAADAAAAJAAAAAMAAAADAAAAAAAAAA0AAAAFAAAAHQAAAAUAAAABAAAAAAAAAAcAAAAAAAAAFQAAAAAAAAAGAAAAAQAAAAkAAAAAAAAAEwAAAAAAAAAEAAAAAgAAAAwAAAAFAAAAGgAAAAUAAAAAAAAAAQAAAAMAAAAAAAAADQAAAAUAAAACAAAAAQAAAAEAAAAAAAAABwAAAAAAAAAaAAAAAAAAACoAAAAAAAAAOgAAAAAAAAAdAAAAAAAAACsAAAAAAAAAPgAAAAMAAAAmAAAAAQAAAC8AAAADAAAAQAAAAAMAAAAMAAAAAAAAABwAAAAFAAAALAAAAAUAAAANAAAAAAAAABoAAAAAAAAAKgAAAAAAAAAVAAAAAQAAAB0AAAAAAAAAKwAAAAAAAAAEAAAAAwAAAA8AAAAFAAAAHwAAAAUAAAADAAAAAQAAAAwAAAAAAAAAHAAAAAUAAAAHAAAAAQAAAA0AAAAAAAAAGgAAAAAAAAAfAAAAAAAAACkAAAAAAAAAMQAAAAAAAAAsAAAAAAAAADUAAAAAAAAAPQAAAAMAAAA6AAAAAQAAAEEAAAADAAAASwAAAAMAAAAPAAAAAAAAABYAAAAFAAAAIQAAAAUAAAAcAAAAAAAAAB8AAAAAAAAAKQAAAAAAAAAqAAAAAQAAACwAAAAAAAAANQAAAAAAAAAEAAAABAAAAAgAAAAFAAAAEAAAAAUAAAAMAAAAAQAAAA8AAAAAAAAAFgAAAAUAAAAaAAAAAQAAABwAAAAAAAAAHwAAAAAAAAAyAAAAAAAAADAAAAAAAAAAMQAAAAMAAAAgAAAAAAAAAB4AAAADAAAAIQAAAAMAAAAYAAAAAwAAABIAAAADAAAAEAAAAAMAAABGAAAAAAAAAEMAAAAAAAAAQgAAAAMAAAA0AAAAAwAAADIAAAAAAAAAMAAAAAAAAAAlAAAAAwAAACAAAAAAAAAAHgAAAAMAAABTAAAAAAAAAFcAAAADAAAAVQAAAAMAAABKAAAAAwAAAEYAAAAAAAAAQwAAAAAAAAA5AAAAAQAAADQAAAADAAAAMgAAAAAAAAAZAAAAAAAAABcAAAAAAAAAGAAAAAMAAAARAAAAAAAAAAsAAAADAAAACgAAAAMAAAAOAAAAAwAAAAYAAAADAAAAAgAAAAMAAAAtAAAAAAAAACcAAAAAAAAAJQAAAAMAAAAjAAAAAwAAABkAAAAAAAAAFwAAAAAAAAAbAAAAAwAAABEAAAAAAAAACwAAAAMAAAA/AAAAAAAAADsAAAADAAAAOQAAAAMAAAA4AAAAAwAAAC0AAAAAAAAAJwAAAAAAAAAuAAAAAwAAACMAAAADAAAAGQAAAAAAAAAkAAAAAAAAABQAAAAAAAAADgAAAAMAAAAiAAAAAAAAABMAAAADAAAACQAAAAMAAAAmAAAAAwAAABUAAAADAAAABwAAAAMAAAA3AAAAAAAAACgAAAAAAAAAGwAAAAMAAAA2AAAAAwAAACQAAAAAAAAAFAAAAAAAAAAzAAAAAwAAACIAAAAAAAAAEwAAAAMAAABIAAAAAAAAADwAAAADAAAALgAAAAMAAABJAAAAAwAAADcAAAAAAAAAKAAAAAAAAABHAAAAAwAAADYAAAADAAAAJAAAAAAAAABAAAAAAAAAAC8AAAAAAAAAJgAAAAMAAAA+AAAAAAAAACsAAAADAAAAHQAAAAMAAAA6AAAAAwAAACoAAAADAAAAGgAAAAMAAABUAAAAAAAAAEUAAAAAAAAAMwAAAAMAAABSAAAAAwAAAEAAAAAAAAAALwAAAAAAAABMAAAAAwAAAD4AAAAAAAAAKwAAAAMAAABhAAAAAAAAAFkAAAADAAAARwAAAAMAAABiAAAAAwAAAFQAAAAAAAAARQAAAAAAAABgAAAAAwAAAFIAAAADAAAAQAAAAAAAAABLAAAAAAAAAEEAAAAAAAAAOgAAAAMAAAA9AAAAAAAAADUAAAADAAAALAAAAAMAAAAxAAAAAwAAACkAAAADAAAAHwAAAAMAAABeAAAAAAAAAFYAAAAAAAAATAAAAAMAAABRAAAAAwAAAEsAAAAAAAAAQQAAAAAAAABCAAAAAwAAAD0AAAAAAAAANQAAAAMAAABrAAAAAAAAAGgAAAADAAAAYAAAAAMAAABlAAAAAwAAAF4AAAAAAAAAVgAAAAAAAABVAAAAAwAAAFEAAAADAAAASwAAAAAAAAA5AAAAAAAAADsAAAAAAAAAPwAAAAMAAABKAAAAAAAAAE4AAAADAAAATwAAAAMAAABTAAAAAwAAAFwAAAADAAAAXwAAAAMAAAAlAAAAAAAAACcAAAADAAAALQAAAAMAAAA0AAAAAAAAADkAAAAAAAAAOwAAAAAAAABGAAAAAwAAAEoAAAAAAAAATgAAAAMAAAAYAAAAAAAAABcAAAADAAAAGQAAAAMAAAAgAAAAAwAAACUAAAAAAAAAJwAAAAMAAAAyAAAAAwAAADQAAAAAAAAAOQAAAAAAAAAuAAAAAAAAADwAAAAAAAAASAAAAAMAAAA4AAAAAAAAAEQAAAADAAAAUAAAAAMAAAA/AAAAAwAAAE0AAAADAAAAWgAAAAMAAAAbAAAAAAAAACgAAAADAAAANwAAAAMAAAAjAAAAAAAAAC4AAAAAAAAAPAAAAAAAAAAtAAAAAwAAADgAAAAAAAAARAAAAAMAAAAOAAAAAAAAABQAAAADAAAAJAAAAAMAAAARAAAAAwAAABsAAAAAAAAAKAAAAAMAAAAZAAAAAwAAACMAAAAAAAAALgAAAAAAAABHAAAAAAAAAFkAAAAAAAAAYQAAAAMAAABJAAAAAAAAAFsAAAADAAAAZwAAAAMAAABIAAAAAwAAAFgAAAADAAAAaQAAAAMAAAAzAAAAAAAAAEUAAAADAAAAVAAAAAMAAAA2AAAAAAAAAEcAAAAAAAAAWQAAAAAAAAA3AAAAAwAAAEkAAAAAAAAAWwAAAAMAAAAmAAAAAAAAAC8AAAADAAAAQAAAAAMAAAAiAAAAAwAAADMAAAAAAAAARQAAAAMAAAAkAAAAAwAAADYAAAAAAAAARwAAAAAAAABgAAAAAAAAAGgAAAAAAAAAawAAAAMAAABiAAAAAAAAAG4AAAADAAAAcwAAAAMAAABhAAAAAwAAAG8AAAADAAAAdwAAAAMAAABMAAAAAAAAAFYAAAADAAAAXgAAAAMAAABSAAAAAAAAAGAAAAAAAAAAaAAAAAAAAABUAAAAAwAAAGIAAAAAAAAAbgAAAAMAAAA6AAAAAAAAAEEAAAADAAAASwAAAAMAAAA+AAAAAwAAAEwAAAAAAAAAVgAAAAMAAABAAAAAAwAAAFIAAAAAAAAAYAAAAAAAAABVAAAAAAAAAFcAAAAAAAAAUwAAAAMAAABlAAAAAAAAAGYAAAADAAAAZAAAAAMAAABrAAAAAwAAAHAAAAADAAAAcgAAAAMAAABCAAAAAAAAAEMAAAADAAAARgAAAAMAAABRAAAAAAAAAFUAAAAAAAAAVwAAAAAAAABeAAAAAwAAAGUAAAAAAAAAZgAAAAMAAAAxAAAAAAAAADAAAAADAAAAMgAAAAMAAAA9AAAAAwAAAEIAAAAAAAAAQwAAAAMAAABLAAAAAwAAAFEAAAAAAAAAVQAAAAAAAABfAAAAAAAAAFwAAAAAAAAAUwAAAAAAAABPAAAAAAAAAE4AAAAAAAAASgAAAAMAAAA/AAAAAQAAADsAAAADAAAAOQAAAAMAAABtAAAAAAAAAGwAAAAAAAAAZAAAAAUAAABdAAAAAQAAAF8AAAAAAAAAXAAAAAAAAABNAAAAAQAAAE8AAAAAAAAATgAAAAAAAAB1AAAABAAAAHYAAAAFAAAAcgAAAAUAAABqAAAAAQAAAG0AAAAAAAAAbAAAAAAAAABaAAAAAQAAAF0AAAABAAAAXwAAAAAAAABaAAAAAAAAAE0AAAAAAAAAPwAAAAAAAABQAAAAAAAAAEQAAAAAAAAAOAAAAAMAAABIAAAAAQAAADwAAAADAAAALgAAAAMAAABqAAAAAAAAAF0AAAAAAAAATwAAAAUAAABjAAAAAQAAAFoAAAAAAAAATQAAAAAAAABYAAAAAQAAAFAAAAAAAAAARAAAAAAAAAB1AAAAAwAAAG0AAAAFAAAAXwAAAAUAAABxAAAAAQAAAGoAAAAAAAAAXQAAAAAAAABpAAAAAQAAAGMAAAABAAAAWgAAAAAAAABpAAAAAAAAAFgAAAAAAAAASAAAAAAAAABnAAAAAAAAAFsAAAAAAAAASQAAAAMAAABhAAAAAQAAAFkAAAADAAAARwAAAAMAAABxAAAAAAAAAGMAAAAAAAAAUAAAAAUAAAB0AAAAAQAAAGkAAAAAAAAAWAAAAAAAAABvAAAAAQAAAGcAAAAAAAAAWwAAAAAAAAB1AAAAAgAAAGoAAAAFAAAAWgAAAAUAAAB5AAAAAQAAAHEAAAAAAAAAYwAAAAAAAAB3AAAAAQAAAHQAAAABAAAAaQAAAAAAAAB3AAAAAAAAAG8AAAAAAAAAYQAAAAAAAABzAAAAAAAAAG4AAAAAAAAAYgAAAAMAAABrAAAAAQAAAGgAAAADAAAAYAAAAAMAAAB5AAAAAAAAAHQAAAAAAAAAZwAAAAUAAAB4AAAAAQAAAHcAAAAAAAAAbwAAAAAAAABwAAAAAQAAAHMAAAAAAAAAbgAAAAAAAAB1AAAAAQAAAHEAAAAFAAAAaQAAAAUAAAB2AAAAAQAAAHkAAAAAAAAAdAAAAAAAAAByAAAAAQAAAHgAAAABAAAAdwAAAAAAAAByAAAAAAAAAHAAAAAAAAAAawAAAAAAAABkAAAAAAAAAGYAAAAAAAAAZQAAAAMAAABTAAAAAQAAAFcAAAADAAAAVQAAAAMAAAB2AAAAAAAAAHgAAAAAAAAAcwAAAAUAAABsAAAAAQAAAHIAAAAAAAAAcAAAAAAAAABcAAAAAQAAAGQAAAAAAAAAZgAAAAAAAAB1AAAAAAAAAHkAAAAFAAAAdwAAAAUAAABtAAAAAQAAAHYAAAAAAAAAeAAAAAAAAABfAAAAAQAAAGwAAAABAAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAABAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAB+ogX28rbpPxqumpJv+fM/165tC4ns9D+XaEnTqUsEQFrOtNlC4PA/3U+0XG6P9b9TdUUBxTTjP4PUp8ex1ty/B1rD/EN43z+lcDi6LLrZP/a45NWEHMY/oJ5ijLDZ+j/xw3rjxWPjP2B8A46ioQdAotff3wla2z+FMSpA1jj+v6b5Y1mtPbS/cIu8K0F457/2esiyJpDNv98k5Ts2NeA/pvljWa09tD88ClUJ60MDQPZ6yLImkM0/4ONKxa0UBcD2uOTVhBzGv5G7JRxGave/8cN648Vj47+HCwtkjAXIv6LX398JWtu/qyheaCAL9D9TdUUBxTTjv4gyTxslhwVAB1rD/EN4378EH/28teoFwH6iBfbytum/F6ztFYdK/r/Xrm0Liez0vwcS6wNGWeO/Ws602ULg8L9TCtRLiLT8P8pi5RexJsw/BlIKPVwR5T95Wyu0/QjnP5PjoT7YYcu/mBhKZ6zrwj8wRYS7NebuP3qW6geh+Ls/SLrixebL3r+pcyymN9XrPwmkNHp7xec/GWNMZVAA17+82s+x2BLiPwn2ytbJ9ek/LgEH1sMS1j8yp/2LhTfeP+SnWwtQBbu/d38gkp5X7z8ytsuHaADGPzUYObdf1+m/7IauECWhwz+cjSACjzniP76Z+wUhN9K/1+GEKzup67+/GYr/04baPw6idWOvsuc/ZedTWsRa5b/EJQOuRzi0v/OncYhHPes/h49PixY53j+i8wWfC03Nvw2idWOvsue/ZedTWsRa5T/EJQOuRzi0P/KncYhHPeu/iY9PixY53r+i8wWfC03NP9anWwtQBbs/d38gkp5X778ytsuHaADGvzUYObdf1+k/74auECWhw7+cjSACjzniv8CZ+wUhN9I/1uGEKzup6z+/GYr/04bavwmkNHp7xee/F2NMZVAA1z+82s+x2BLivwr2ytbJ9em/KwEH1sMS1r8yp/2LhTfev81i5RexJsy/BlIKPVwR5b95Wyu0/Qjnv5DjoT7YYcs/nBhKZ6zrwr8wRYS7Nebuv3OW6geh+Lu/SLrixebL3j+pcyymN9Xrv8rHIFfWehZAMBwUdlo0DECTUc17EOb2PxpVB1SWChdAzjbhb9pTDUDQhmdvECX5P9FlMKCC9+g/IIAzjELgE0DajDngMv8GQFhWDmDPjNs/y1guLh96EkAxPi8k7DIEQJCc4URlhRhA3eLKKLwkEECqpNAyTBD/P6xpjXcDiwVAFtl//cQm4z+Ibt3XKiYTQM7mCLUb3QdAoM1t8yVv7D8aLZv2Nk8UQEAJPV5nQwxAtSsfTCoE9z9TPjXLXIIWQBVanC5W9AtAYM3d7Adm9j++5mQz1FoWQBUThyaVBghAwH5muQsV7T89Q1qv82MUQJoWGOfNuBdAzrkClkmwDkDQjKq77t37Py+g0dtitsE/ZwAMTwVPEUBojepluNwBQGYbtuW+t9w/HNWIJs6MEkDTNuQUSlgEQKxktPP5TcQ/ixbLB8JjEUCwuWjXMQYCQAS/R09FkRdAowpiZjhhDkB7LmlczD/7P01iQmhhsAVAnrtTwDy84z/Z6jfQ2TgTQChOCXMnWwpAhrW3daoz8z/HYJvVPI4VQLT3ik5FcA5Angi7LOZd+z+NNVzDy5gXQBXdvVTFUA1AYNMgOeYe+T8+qHXGCwkXQKQTOKwa5AJA8gFVoEMW0T+FwzJyttIRQAEAAAD/////BwAAAP////8xAAAA/////1cBAAD/////YQkAAP////+nQQAA/////5HLAQD/////95AMAP/////B9lcAAAAAAAAAAAAAAAAAAgAAAP////8OAAAA/////2IAAAD/////rgIAAP/////CEgAA/////06DAAD/////IpcDAP/////uIRkA/////4LtrwAAAAAAAAAAAAAAAAAAAAAAAgAAAP//////////AQAAAAMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////wIAAAD//////////wEAAAAAAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA/////////////////////wEAAAD///////////////8CAAAA////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD///////////////////////////////8CAAAA////////////////AQAAAP////////////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAAAQAAAP//////////AgAAAP//////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAAEAAAD//////////wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAgAAAAAAAAACAAAAAQAAAAEAAAACAAAAAgAAAAAAAAAFAAAABQAAAAAAAAACAAAAAgAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAABAAAAAgAAAAIAAAACAAAAAAAAAAUAAAAGAAAAAAAAAAIAAAACAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAAAAAAAAgAAAAEAAAADAAAAAgAAAAIAAAAAAAAABQAAAAcAAAAAAAAAAgAAAAIAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAAAAAAAACAAAAAQAAAAQAAAACAAAAAgAAAAAAAAAFAAAACAAAAAAAAAACAAAAAgAAAAMAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAACAAAAAAAAAAIAAAABAAAAAAAAAAIAAAACAAAAAAAAAAUAAAAJAAAAAAAAAAIAAAACAAAAAwAAAAUAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAIAAAACAAAAAAAAAAMAAAAOAAAAAgAAAAAAAAACAAAAAwAAAAAAAAAAAAAAAgAAAAIAAAADAAAABgAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAgAAAAIAAAAAAAAAAwAAAAoAAAACAAAAAAAAAAIAAAADAAAAAQAAAAAAAAACAAAAAgAAAAMAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAACAAAAAgAAAAAAAAADAAAACwAAAAIAAAAAAAAAAgAAAAMAAAACAAAAAAAAAAIAAAACAAAAAwAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAIAAAACAAAAAAAAAAMAAAAMAAAAAgAAAAAAAAACAAAAAwAAAAMAAAAAAAAAAgAAAAIAAAADAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAgAAAAIAAAAAAAAAAwAAAA0AAAACAAAAAAAAAAIAAAADAAAABAAAAAAAAAACAAAAAgAAAAMAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAACAAAAAgAAAAAAAAADAAAABgAAAAIAAAAAAAAAAgAAAAMAAAAPAAAAAAAAAAIAAAACAAAAAwAAAAsAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAIAAAACAAAAAAAAAAMAAAAHAAAAAgAAAAAAAAACAAAAAwAAABAAAAAAAAAAAgAAAAIAAAADAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAgAAAAIAAAAAAAAAAwAAAAgAAAACAAAAAAAAAAIAAAADAAAAEQAAAAAAAAACAAAAAgAAAAMAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAACAAAAAgAAAAAAAAADAAAACQAAAAIAAAAAAAAAAgAAAAMAAAASAAAAAAAAAAIAAAACAAAAAwAAAA4AAAAAAAAAAAAAAAAAAAAAAAAACQAAAAIAAAACAAAAAAAAAAMAAAAFAAAAAgAAAAAAAAACAAAAAwAAABMAAAAAAAAAAgAAAAIAAAADAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAgAAAAAAAAACAAAAAQAAABMAAAACAAAAAgAAAAAAAAAFAAAACgAAAAAAAAACAAAAAgAAAAMAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABEAAAACAAAAAAAAAAIAAAABAAAADwAAAAIAAAACAAAAAAAAAAUAAAALAAAAAAAAAAIAAAACAAAAAwAAABEAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAIAAAAAAAAAAgAAAAEAAAAQAAAAAgAAAAIAAAAAAAAABQAAAAwAAAAAAAAAAgAAAAIAAAADAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAgAAAAAAAAACAAAAAQAAABEAAAACAAAAAgAAAAAAAAAFAAAADQAAAAAAAAACAAAAAgAAAAMAAAATAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAACAAAAAAAAAAIAAAABAAAAEgAAAAIAAAACAAAAAAAAAAUAAAAOAAAAAAAAAAIAAAACAAAAAwAAAAIAAAABAAAAAAAAAAEAAAACAAAAAAAAAAAAAAACAAAAAQAAAAAAAAABAAAAAgAAAAEAAAAAAAAAAgAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAAAAAAAAAAABQAAAAQAAAAAAAAAAQAAAAUAAAAEAAAAAAAAAAUAAAAAAAAAAgAAAAEAAAAAAAAAAQAAAAIAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAEAAAACAAAAAQAAAAAAAAACAAAAAgAAAAAAAAABAAAAAAAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAAAAAAAAAAABQAAAAQAAAAAAAAAAQAAAAUAAAAEAAAAAAAAAAUAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAMuhRbbsNlBBYqHW9OmHIkF9XBuqnS31QAK37uYhNMhAOSo3UUupm0DC+6pc6JxvQHV9eseEEEJAzURsCyqlFEB8BQ4NMJjnPyy3tBoS97o/xawXQznRjj89J2K2CZxhP6vX43RIIDQ/S8isgygEBz+LvFHQkmzaPjFFFO7wMq4+AADMLkTtjkIAAOgkJqxhQgAAU7B0MjRCAADwpBcVB0IAAACYP2HaQQAAAIn/Ja5BzczM4Eg6gUHNzMxMU7BTQTMzMzNfgCZBAAAAAEi3+UAAAAAAwGPNQDMzMzMzy6BAmpmZmZkxc0AzMzMzM/NFQDMzMzMzMxlAzczMzMzM7D+ygXSx2U6RQKimJOvQKnpA23hmONTHY0A/AGcxyudNQNb3K647mzZA+S56rrwWIUAm4kUQ+9UJQKre9hGzh/M/BLvoy9WG3T+LmqMf8VHGP2m3nYNV37A/gbFHcyeCmT+cBPWBckiDP61tZACjKW0/q2RbYVUYVj8uDypVyLNAP6jGS5cA5zBBwcqhBdCNGUEGEhQ/JVEDQT6WPnRbNO1AB/AWSJgT1kDfUWNCNLDAQNk+5C33OqlAchWL34QSk0DKvtDIrNV8QNF0G3kFzGVASSeWhBl6UED+/0mNGuk4QGjA/dm/1CJALPLPMql6DEDSHoDrwpP1P2jouzWST+A/egAAAAAAAABKAwAAAAAAAPoWAAAAAAAAyqAAAAAAAAB6ZQQAAAAAAErGHgAAAAAA+mvXAAAAAADK8+MFAAAAAHqqOykAAAAASqmhIAEAAAD6oGvkBwAAAMpm8T43AAAAes+ZuIIBAABKrDQMkwoAAPq1cFUFSgAAyvkUViUGAgAAAAAAAwAAAAYAAAACAAAABQAAAAEAAAAEAAAAAAAAAAAAAAAFAAAAAwAAAAEAAAAGAAAABAAAAAIAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////8AAAAA/////wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAP////8AAAAAAAAAAAEAAAABAAAAAAAAAAAAAAD/////AAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAA/////wUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////AAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////wAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAUAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////8AAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAAAAAAFAAAAAQAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAABAAEAAAEBAAAAAAABAAAAAQAAAAEAAQAAAAAAAAAAAAAAAAAAAABhbGdvcy5jAHBvbHlmaWxsAGFkamFjZW50RmFjZURpclt0bXBGaWprLmZhY2VdW2ZpamsuZmFjZV0gPT0gS0kAZmFjZWlqay5jAF9mYWNlSWprUGVudFRvR2VvQm91bmRhcnkAYWRqYWNlbnRGYWNlRGlyW2NlbnRlcklKSy5mYWNlXVtmYWNlMl0gPT0gS0kAX2ZhY2VJamtUb0dlb0JvdW5kYXJ5AHBvbHlnb24tPm5leHQgPT0gTlVMTABsaW5rZWRHZW8uYwBhZGROZXdMaW5rZWRQb2x5Z29uAG5leHQgIT0gTlVMTABsb29wICE9IE5VTEwAYWRkTmV3TGlua2VkTG9vcABwb2x5Z29uLT5maXJzdCA9PSBOVUxMAGFkZExpbmtlZExvb3AAY29vcmQgIT0gTlVMTABhZGRMaW5rZWRDb29yZABsb29wLT5maXJzdCA9PSBOVUxMAGlubmVyTG9vcHMgIT0gTlVMTABub3JtYWxpemVNdWx0aVBvbHlnb24AYmJveGVzICE9IE5VTEwAY2FuZGlkYXRlcyAhPSBOVUxMAGZpbmRQb2x5Z29uRm9ySG9sZQBjYW5kaWRhdGVCQm94ZXMgIT0gTlVMTAByZXZEaXIgIT0gSU5WQUxJRF9ESUdJVABsb2NhbGlqLmMAaDNUb0xvY2FsSWprAGJhc2VDZWxsICE9IG9yaWdpbkJhc2VDZWxsACEob3JpZ2luT25QZW50ICYmIGluZGV4T25QZW50KQBwZW50YWdvblJvdGF0aW9ucyA+PSAwAGRpcmVjdGlvblJvdGF0aW9ucyA+PSAwAGJhc2VDZWxsID09IG9yaWdpbkJhc2VDZWxsAGJhc2VDZWxsICE9IElOVkFMSURfQkFTRV9DRUxMAGxvY2FsSWprVG9IMwAhX2lzQmFzZUNlbGxQZW50YWdvbihiYXNlQ2VsbCkAYmFzZUNlbGxSb3RhdGlvbnMgPj0gMAB3aXRoaW5QZW50YWdvblJvdGF0aW9ucyA+PSAwAGdyYXBoLT5idWNrZXRzICE9IE5VTEwAdmVydGV4R3JhcGguYwBpbml0VmVydGV4R3JhcGgAbm9kZSAhPSBOVUxMAGFkZFZlcnRleE5vZGU=";
    var tempDoublePtr = 23680;

    function demangle(func) {
      return func;
    }

    function demangleAll(text) {
      var regex = /\b__Z[\w\d_]+/g;
      return text.replace(regex, function (x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]";
      });
    }

    function jsStackTrace() {
      var err = new Error();

      if (!err.stack) {
        try {
          throw new Error(0);
        } catch (e) {
          err = e;
        }

        if (!err.stack) {
          return "(no stack trace available)";
        }
      }

      return err.stack.toString();
    }

    function stackTrace() {
      var js = jsStackTrace();
      if (Module["extraStackTrace"]) { js += "\n" + Module["extraStackTrace"](); }
      return demangleAll(js);
    }

    function ___assert_fail(condition, filename, line, func) {
      abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
    }

    function _emscripten_get_heap_size() {
      return HEAP8.length;
    }

    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
    }

    function ___setErrNo(value) {
      if (Module["___errno_location"]) { HEAP32[Module["___errno_location"]() >> 2] = value; }
      return value;
    }

    function abortOnCannotGrowMemory(requestedSize) {
      abort("OOM");
    }

    function emscripten_realloc_buffer(size) {
      try {
        var newBuffer = new ArrayBuffer(size);
        if (newBuffer.byteLength != size) { return; }
        new Int8Array(newBuffer).set(HEAP8);

        _emscripten_replace_memory(newBuffer);

        updateGlobalBufferAndViews(newBuffer);
        return 1;
      } catch (e) {}
    }

    function _emscripten_resize_heap(requestedSize) {
      var oldSize = _emscripten_get_heap_size();

      var PAGE_MULTIPLE = 16777216;
      var LIMIT = 2147483648 - PAGE_MULTIPLE;

      if (requestedSize > LIMIT) {
        return false;
      }

      var MIN_TOTAL_MEMORY = 16777216;
      var newSize = Math.max(oldSize, MIN_TOTAL_MEMORY);

      while (newSize < requestedSize) {
        if (newSize <= 536870912) {
          newSize = alignUp(2 * newSize, PAGE_MULTIPLE);
        } else {
          newSize = Math.min(alignUp((3 * newSize + 2147483648) / 4, PAGE_MULTIPLE), LIMIT);
        }
      }

      var replacement = emscripten_realloc_buffer(newSize);

      if (!replacement) {
        return false;
      }

      return true;
    }

    function intArrayToString(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        var chr = array[i];

        if (chr > 255) {

          chr &= 255;
        }

        ret.push(String.fromCharCode(chr));
      }

      return ret.join("");
    }

    var decodeBase64 = typeof atob === "function" ? atob : function (input) {
      var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);

        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }

        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      } while (i < input.length);

      return output;
    };

    function intArrayFromBase64(s) {
      if (typeof ENVIRONMENT_IS_NODE === "boolean" && ENVIRONMENT_IS_NODE) {
        var buf;

        try {
          buf = Buffer.from(s, "base64");
        } catch (_) {
          buf = new Buffer(s, "base64");
        }

        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      }

      try {
        var decoded = decodeBase64(s);
        var bytes = new Uint8Array(decoded.length);

        for (var i = 0; i < decoded.length; ++i) {
          bytes[i] = decoded.charCodeAt(i);
        }

        return bytes;
      } catch (_) {
        throw new Error("Converting base64 string to bytes failed.");
      }
    }

    function tryParseAsDataURI(filename) {
      if (!isDataURI(filename)) {
        return;
      }

      return intArrayFromBase64(filename.slice(dataURIPrefix.length));
    }

    var asmGlobalArg = {
      "Math": Math,
      "Int8Array": Int8Array,
      "Int32Array": Int32Array,
      "Uint8Array": Uint8Array,
      "Float32Array": Float32Array,
      "Float64Array": Float64Array
    };
    var asmLibraryArg = {
      "a": abort,
      "b": setTempRet0,
      "c": getTempRet0,
      "d": ___assert_fail,
      "e": ___setErrNo,
      "f": _emscripten_get_heap_size,
      "g": _emscripten_memcpy_big,
      "h": _emscripten_resize_heap,
      "i": abortOnCannotGrowMemory,
      "j": demangle,
      "k": demangleAll,
      "l": emscripten_realloc_buffer,
      "m": jsStackTrace,
      "n": stackTrace,
      "o": tempDoublePtr,
      "p": DYNAMICTOP_PTR
    }; // EMSCRIPTEN_START_ASM

    var asm =
    /** @suppress {uselessCode} */
    function (global, env, buffer) {
      "almost asm";

      var a = new global.Int8Array(buffer),
          b = new global.Int32Array(buffer),
          c = new global.Uint8Array(buffer),
          d = new global.Float32Array(buffer),
          e = new global.Float64Array(buffer),
          g = env.p | 0,
          p = global.Math.floor,
          q = global.Math.abs,
          r = global.Math.sqrt,
          s = global.Math.pow,
          t = global.Math.cos,
          u = global.Math.sin,
          v = global.Math.tan,
          w = global.Math.acos,
          x = global.Math.asin,
          y = global.Math.atan,
          z = global.Math.atan2,
          A = global.Math.ceil,
          B = global.Math.imul,
          C = global.Math.clz32,
          E = env.b,
          F = env.c,
          G = env.d,
          H = env.e,
          I = env.f,
          J = env.g,
          K = env.h,
          L = env.i,
          R = 23696;

      function U(newBuffer) {
        a = new Int8Array(newBuffer);
        c = new Uint8Array(newBuffer);
        b = new Int32Array(newBuffer);
        d = new Float32Array(newBuffer);
        e = new Float64Array(newBuffer);
        buffer = newBuffer;
        return true;
      } // EMSCRIPTEN_START_FUNCS


      function V(a) {
        a = a | 0;
        var b = 0;
        b = R;
        R = R + a | 0;
        R = R + 15 & -16;
        return b | 0;
      }

      function W() {
        return R | 0;
      }

      function X(a) {
        a = a | 0;
        R = a;
      }

      function Y(a, b) {
        a = a | 0;
        R = a;
      }

      function Z(a) {
        a = a | 0;
        return (B(a * 3 | 0, a + 1 | 0) | 0) + 1 | 0;
      }

      function _(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0;
        e = (B(c * 3 | 0, c + 1 | 0) | 0) + 1 | 0;
        f = e << 2;
        g = Ic(f) | 0;

        if (!(aa(a, b, c, d, g) | 0)) {
          Jc(g);
          return;
        }

        Uc(d | 0, 0, e << 3 | 0) | 0;
        Uc(g | 0, 0, f | 0) | 0;
        ba(a, b, c, d, g, e, 0);
        Jc(g);
        return;
      }

      function $(a, b, c, d, e) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0;
        f = (B(c * 3 | 0, c + 1 | 0) | 0) + 1 | 0;
        if (!(aa(a, b, c, d, e) | 0)) { return; }
        Uc(d | 0, 0, f << 3 | 0) | 0;
        Uc(e | 0, 0, f << 2 | 0) | 0;
        ba(a, b, c, d, e, f, 0);
        return;
      }

      function aa(a, c, d, e, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;
        o = R;
        R = R + 16 | 0;
        n = o;
        g = e;
        b[g >> 2] = a;
        b[g + 4 >> 2] = c;
        g = (f | 0) != 0;
        if (g) { b[f >> 2] = 0; }

        if (tb(a, c) | 0) {
          n = 1;
          R = o;
          return n | 0;
        }

        b[n >> 2] = 0;

        a: do { if ((d | 0) >= 1) {
          if (g) {
            k = 0;
            l = 1;
            m = 1;
            h = 0;
            g = a;

            while (1) {
              if (!(h | k)) {
                g = ca(g, c, 4, n) | 0;
                c = F() | 0;

                if ((g | 0) == 0 & (c | 0) == 0) {
                  g = 2;
                  break a;
                }

                if (tb(g, c) | 0) {
                  g = 1;
                  break a;
                }
              }

              g = ca(g, c, b[16 + (k << 2) >> 2] | 0, n) | 0;
              c = F() | 0;

              if ((g | 0) == 0 & (c | 0) == 0) {
                g = 2;
                break a;
              }

              a = e + (m << 3) | 0;
              b[a >> 2] = g;
              b[a + 4 >> 2] = c;
              b[f + (m << 2) >> 2] = l;
              h = h + 1 | 0;
              a = (h | 0) == (l | 0);
              i = k + 1 | 0;
              j = (i | 0) == 6;

              if (tb(g, c) | 0) {
                g = 1;
                break a;
              }

              l = l + (j & a & 1) | 0;

              if ((l | 0) > (d | 0)) {
                g = 0;
                break;
              } else {
                k = a ? j ? 0 : i : k;
                m = m + 1 | 0;
                h = a ? 0 : h;
              }
            }
          } else {
            k = 0;
            l = 1;
            m = 1;
            h = 0;
            g = a;

            while (1) {
              if (!(h | k)) {
                g = ca(g, c, 4, n) | 0;
                c = F() | 0;

                if ((g | 0) == 0 & (c | 0) == 0) {
                  g = 2;
                  break a;
                }

                if (tb(g, c) | 0) {
                  g = 1;
                  break a;
                }
              }

              g = ca(g, c, b[16 + (k << 2) >> 2] | 0, n) | 0;
              c = F() | 0;

              if ((g | 0) == 0 & (c | 0) == 0) {
                g = 2;
                break a;
              }

              a = e + (m << 3) | 0;
              b[a >> 2] = g;
              b[a + 4 >> 2] = c;
              h = h + 1 | 0;
              a = (h | 0) == (l | 0);
              i = k + 1 | 0;
              j = (i | 0) == 6;

              if (tb(g, c) | 0) {
                g = 1;
                break a;
              }

              l = l + (j & a & 1) | 0;

              if ((l | 0) > (d | 0)) {
                g = 0;
                break;
              } else {
                k = a ? j ? 0 : i : k;
                m = m + 1 | 0;
                h = a ? 0 : h;
              }
            }
          }
        } else { g = 0; } } while (0);

        n = g;
        R = o;
        return n | 0;
      }

      function ba(a, c, d, e, f, g, h) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        g = g | 0;
        h = h | 0;
        var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;
        m = R;
        R = R + 16 | 0;
        l = m;

        if ((a | 0) == 0 & (c | 0) == 0) {
          R = m;
          return;
        }

        i = Pc(a | 0, c | 0, g | 0, ((g | 0) < 0) << 31 >> 31 | 0) | 0;
        F() | 0;
        j = e + (i << 3) | 0;
        n = j;
        o = b[n >> 2] | 0;
        n = b[n + 4 >> 2] | 0;
        k = (o | 0) == (a | 0) & (n | 0) == (c | 0);
        if (!((o | 0) == 0 & (n | 0) == 0 | k)) { do {
          i = (i + 1 | 0) % (g | 0) | 0;
          j = e + (i << 3) | 0;
          o = j;
          n = b[o >> 2] | 0;
          o = b[o + 4 >> 2] | 0;
          k = (n | 0) == (a | 0) & (o | 0) == (c | 0);
        } while (!((n | 0) == 0 & (o | 0) == 0 | k)); }
        i = f + (i << 2) | 0;

        if (k ? (b[i >> 2] | 0) <= (h | 0) : 0) {
          R = m;
          return;
        }

        o = j;
        b[o >> 2] = a;
        b[o + 4 >> 2] = c;
        b[i >> 2] = h;

        if ((h | 0) >= (d | 0)) {
          R = m;
          return;
        }

        o = h + 1 | 0;
        b[l >> 2] = 0;
        n = ca(a, c, 2, l) | 0;
        ba(n, F() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = ca(a, c, 3, l) | 0;
        ba(n, F() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = ca(a, c, 1, l) | 0;
        ba(n, F() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = ca(a, c, 5, l) | 0;
        ba(n, F() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = ca(a, c, 4, l) | 0;
        ba(n, F() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = ca(a, c, 6, l) | 0;
        ba(n, F() | 0, d, e, f, g, o);
        R = m;
        return;
      }

      function ca(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;

        if ((b[e >> 2] | 0) > 0) {
          f = 0;

          do {
            d = Ka(d) | 0;
            f = f + 1 | 0;
          } while ((f | 0) < (b[e >> 2] | 0));
        }

        i = Qc(a | 0, c | 0, 45) | 0;
        F() | 0;
        j = i & 127;
        g = zb(a, c) | 0;
        f = Qc(a | 0, c | 0, 52) | 0;
        F() | 0;
        f = f & 15;

        a: do { if (!f) { h = 6; }else { while (1) {
          m = (15 - f | 0) * 3 | 0;
          n = Qc(a | 0, c | 0, m | 0) | 0;
          F() | 0;
          n = n & 7;
          o = (Fb(f) | 0) == 0;
          f = f + -1 | 0;
          l = Rc(7, 0, m | 0) | 0;
          c = c & ~(F() | 0);
          m = Rc(b[(o ? 464 : 48) + (n * 28 | 0) + (d << 2) >> 2] | 0, 0, m | 0) | 0;
          k = F() | 0;
          d = b[(o ? 672 : 256) + (n * 28 | 0) + (d << 2) >> 2] | 0;
          a = m | a & ~l;
          c = k | c;

          if (!d) {
            d = 0;
            break a;
          }

          if (!f) {
            h = 6;
            break;
          }
        } } } while (0);

        if ((h | 0) == 6) {
          o = b[880 + (j * 28 | 0) + (d << 2) >> 2] | 0;
          n = Rc(o | 0, 0, 45) | 0;
          a = n | a;
          c = F() | 0 | c & -1040385;
          d = b[4304 + (j * 28 | 0) + (d << 2) >> 2] | 0;

          if ((o & 127 | 0) == 127) {
            o = Rc(b[880 + (j * 28 | 0) + 20 >> 2] | 0, 0, 45) | 0;
            c = F() | 0 | c & -1040385;
            d = b[4304 + (j * 28 | 0) + 20 >> 2] | 0;
            a = Bb(o | a, c) | 0;
            c = F() | 0;
            b[e >> 2] = (b[e >> 2] | 0) + 1;
          }
        }

        h = Qc(a | 0, c | 0, 45) | 0;
        F() | 0;
        h = h & 127;

        b: do { if (!(ia(h) | 0)) {
          if ((d | 0) > 0) {
            f = 0;

            do {
              a = Bb(a, c) | 0;
              c = F() | 0;
              f = f + 1 | 0;
            } while ((f | 0) != (d | 0));
          }
        } else {
          c: do { if ((zb(a, c) | 0) == 1) {
            if ((j | 0) != (h | 0)) { if (ma(h, b[7728 + (j * 28 | 0) >> 2] | 0) | 0) {
              a = Db(a, c) | 0;
              g = 1;
              c = F() | 0;
              break;
            } else {
              a = Bb(a, c) | 0;
              g = 1;
              c = F() | 0;
              break;
            } }

            switch (g | 0) {
              case 5:
                {
                  a = Db(a, c) | 0;
                  c = F() | 0;
                  b[e >> 2] = (b[e >> 2] | 0) + 5;
                  g = 0;
                  break c;
                }

              case 3:
                {
                  a = Bb(a, c) | 0;
                  c = F() | 0;
                  b[e >> 2] = (b[e >> 2] | 0) + 1;
                  g = 0;
                  break c;
                }

              default:
                {
                  n = 0;
                  o = 0;
                  E(n | 0);
                  return o | 0;
                }
            }
          } else { g = 0; } } while (0);

          if ((d | 0) > 0) {
            f = 0;

            do {
              a = Ab(a, c) | 0;
              c = F() | 0;
              f = f + 1 | 0;
            } while ((f | 0) != (d | 0));
          }

          if ((j | 0) != (h | 0)) {
            if (!(ja(h) | 0)) {
              if ((g | 0) != 0 | (zb(a, c) | 0) != 5) { break; }
              b[e >> 2] = (b[e >> 2] | 0) + 1;
              break;
            }

            switch (i & 127) {
              case 8:
              case 118:
                break b;

            }

            if ((zb(a, c) | 0) != 3) { b[e >> 2] = (b[e >> 2] | 0) + 1; }
          }
        } } while (0);

        b[e >> 2] = ((b[e >> 2] | 0) + d | 0) % 6 | 0;
        n = c;
        o = a;
        E(n | 0);
        return o | 0;
      }

      function da(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
        m = R;
        R = R + 16 | 0;
        l = m;

        if (!d) {
          l = e;
          b[l >> 2] = a;
          b[l + 4 >> 2] = c;
          l = 0;
          R = m;
          return l | 0;
        }

        b[l >> 2] = 0;

        a: do { if (!(tb(a, c) | 0)) {
          g = (d | 0) > 0;

          if (g) {
            f = 0;
            k = a;

            do {
              k = ca(k, c, 4, l) | 0;
              c = F() | 0;

              if ((k | 0) == 0 & (c | 0) == 0) {
                a = 2;
                break a;
              }

              f = f + 1 | 0;

              if (tb(k, c) | 0) {
                a = 1;
                break a;
              }
            } while ((f | 0) < (d | 0));

            j = e;
            b[j >> 2] = k;
            b[j + 4 >> 2] = c;
            j = d + -1 | 0;

            if (g) {
              g = 0;
              h = 1;
              f = k;
              a = c;

              do {
                f = ca(f, a, 2, l) | 0;
                a = F() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                i = e + (h << 3) | 0;
                b[i >> 2] = f;
                b[i + 4 >> 2] = a;
                h = h + 1 | 0;

                if (tb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                g = g + 1 | 0;
              } while ((g | 0) < (d | 0));

              i = 0;
              g = h;

              do {
                f = ca(f, a, 3, l) | 0;
                a = F() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                h = e + (g << 3) | 0;
                b[h >> 2] = f;
                b[h + 4 >> 2] = a;
                g = g + 1 | 0;

                if (tb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                i = i + 1 | 0;
              } while ((i | 0) < (d | 0));

              h = 0;

              do {
                f = ca(f, a, 1, l) | 0;
                a = F() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                i = e + (g << 3) | 0;
                b[i >> 2] = f;
                b[i + 4 >> 2] = a;
                g = g + 1 | 0;

                if (tb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                h = h + 1 | 0;
              } while ((h | 0) < (d | 0));

              h = 0;

              do {
                f = ca(f, a, 5, l) | 0;
                a = F() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                i = e + (g << 3) | 0;
                b[i >> 2] = f;
                b[i + 4 >> 2] = a;
                g = g + 1 | 0;

                if (tb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                h = h + 1 | 0;
              } while ((h | 0) < (d | 0));

              h = 0;

              do {
                f = ca(f, a, 4, l) | 0;
                a = F() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                i = e + (g << 3) | 0;
                b[i >> 2] = f;
                b[i + 4 >> 2] = a;
                g = g + 1 | 0;

                if (tb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                h = h + 1 | 0;
              } while ((h | 0) < (d | 0));

              h = 0;

              while (1) {
                f = ca(f, a, 6, l) | 0;
                a = F() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                if ((h | 0) != (j | 0)) {
                  i = e + (g << 3) | 0;
                  b[i >> 2] = f;
                  b[i + 4 >> 2] = a;
                  if (!(tb(f, a) | 0)) { g = g + 1 | 0; }else {
                    a = 1;
                    break a;
                  }
                }

                h = h + 1 | 0;

                if ((h | 0) >= (d | 0)) {
                  h = k;
                  g = c;
                  break;
                }
              }
            } else {
              h = k;
              f = k;
              g = c;
              a = c;
            }
          } else {
            h = e;
            b[h >> 2] = a;
            b[h + 4 >> 2] = c;
            h = a;
            f = a;
            g = c;
            a = c;
          }

          a = ((h | 0) != (f | 0) | (g | 0) != (a | 0)) & 1;
        } else { a = 1; } } while (0);

        l = a;
        R = m;
        return l | 0;
      }

      function ea(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0;
        c = R;
        R = R + 32 | 0;
        d = c;
        jc(a, d);
        b = ua(d, b) | 0;
        b = (B(b * 3 | 0, b + 1 | 0) | 0) + 1 | 0;
        R = c;
        return b | 0;
      }

      function fa(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0.0;
        n = R;
        R = R + 32 | 0;
        f = n + 16 | 0;
        l = n;
        m = Ic((b[a + 8 >> 2] << 5) + 32 | 0) | 0;
        if (!m) { G(22487, 22096, 678, 22104); }
        kc(a, m);
        i = ua(m, c) | 0;
        j = B(i * 3 | 0, i + 1 | 0) | 0;
        k = j + 1 | 0;
        sa(m, f);
        c = Gb(f, c) | 0;
        f = F() | 0;
        g = k << 2;
        h = Ic(g) | 0;

        if (aa(c, f, i, d, h) | 0) {
          Uc(d | 0, 0, k << 3 | 0) | 0;
          Uc(h | 0, 0, g | 0) | 0;
          ba(c, f, i, d, h, k, 0);
        }

        Jc(h);

        if ((j | 0) < 0) {
          Jc(m);
          R = n;
          return;
        }

        f = l + 8 | 0;
        c = 0;

        do {
          g = d + (c << 3) | 0;
          i = g;
          h = b[i >> 2] | 0;
          i = b[i + 4 >> 2] | 0;

          if (!((h | 0) == 0 & (i | 0) == 0) ? (Jb(h, i, l), o = +eb(+e[l >> 3]), e[l >> 3] = o, o = +fb(+e[f >> 3]), e[f >> 3] = o, !(lc(a, m, l) | 0)) : 0) {
            j = g;
            b[j >> 2] = 0;
            b[j + 4 >> 2] = 0;
          }

          c = c + 1 | 0;
        } while ((c | 0) != (k | 0));

        Jc(m);
        R = n;
        return;
      }

      function ga(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;
        k = R;
        R = R + 176 | 0;
        j = k;

        if ((c | 0) < 1) {
          yc(d, 0, 0);
          R = k;
          return;
        }

        h = a;
        h = Qc(b[h >> 2] | 0, b[h + 4 >> 2] | 0, 52) | 0;
        F() | 0;
        yc(d, (c | 0) > 6 ? c : 6, h & 15);
        h = 0;

        do {
          e = a + (h << 3) | 0;
          Kb(b[e >> 2] | 0, b[e + 4 >> 2] | 0, j);
          e = b[j >> 2] | 0;

          if ((e | 0) > 0) {
            i = 0;

            do {
              g = j + 8 + (i << 4) | 0;
              i = i + 1 | 0;
              e = j + 8 + (((i | 0) % (e | 0) | 0) << 4) | 0;
              f = Dc(d, e, g) | 0;
              if (!f) { Cc(d, g, e) | 0; }else { Bc(d, f) | 0; }
              e = b[j >> 2] | 0;
            } while ((i | 0) < (e | 0));
          }

          h = h + 1 | 0;
        } while ((h | 0) != (c | 0));

        R = k;
        return;
      }

      function ha(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0;
        g = R;
        R = R + 32 | 0;
        e = g;
        f = g + 16 | 0;
        ga(a, c, f);
        b[d >> 2] = 0;
        b[d + 4 >> 2] = 0;
        b[d + 8 >> 2] = 0;
        a = Ac(f) | 0;

        if (!a) {
          _b(d) | 0;
          zc(f);
          R = g;
          return;
        }

        do {
          c = Xb(d) | 0;

          do {
            Yb(c, a) | 0;
            h = a + 16 | 0;
            b[e >> 2] = b[h >> 2];
            b[e + 4 >> 2] = b[h + 4 >> 2];
            b[e + 8 >> 2] = b[h + 8 >> 2];
            b[e + 12 >> 2] = b[h + 12 >> 2];
            Bc(f, a) | 0;
            a = Ec(f, e) | 0;
          } while ((a | 0) != 0);

          a = Ac(f) | 0;
        } while ((a | 0) != 0);

        _b(d) | 0;
        zc(f);
        R = g;
        return;
      }

      function ia(a) {
        a = a | 0;
        return b[7728 + (a * 28 | 0) + 16 >> 2] | 0;
      }

      function ja(a) {
        a = a | 0;
        return (a | 0) == 4 | (a | 0) == 117 | 0;
      }

      function ka(a) {
        a = a | 0;
        return b[11152 + ((b[a >> 2] | 0) * 216 | 0) + ((b[a + 4 >> 2] | 0) * 72 | 0) + ((b[a + 8 >> 2] | 0) * 24 | 0) + (b[a + 12 >> 2] << 3) >> 2] | 0;
      }

      function la(a) {
        a = a | 0;
        return b[11152 + ((b[a >> 2] | 0) * 216 | 0) + ((b[a + 4 >> 2] | 0) * 72 | 0) + ((b[a + 8 >> 2] | 0) * 24 | 0) + (b[a + 12 >> 2] << 3) + 4 >> 2] | 0;
      }

      function ma(a, c) {
        a = a | 0;
        c = c | 0;

        if ((b[7728 + (a * 28 | 0) + 20 >> 2] | 0) == (c | 0)) {
          c = 1;
          return c | 0;
        }

        c = (b[7728 + (a * 28 | 0) + 24 >> 2] | 0) == (c | 0);
        return c | 0;
      }

      function na(a, c) {
        a = a | 0;
        c = c | 0;
        return b[880 + (a * 28 | 0) + (c << 2) >> 2] | 0;
      }

      function oa(a, c) {
        a = a | 0;
        c = c | 0;

        if ((b[880 + (a * 28 | 0) >> 2] | 0) == (c | 0)) {
          c = 0;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 4 >> 2] | 0) == (c | 0)) {
          c = 1;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 8 >> 2] | 0) == (c | 0)) {
          c = 2;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 12 >> 2] | 0) == (c | 0)) {
          c = 3;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 16 >> 2] | 0) == (c | 0)) {
          c = 4;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 20 >> 2] | 0) == (c | 0)) {
          c = 5;
          return c | 0;
        } else { return ((b[880 + (a * 28 | 0) + 24 >> 2] | 0) == (c | 0) ? 6 : 7) | 0; }
      }

      function pa() {
        return 122;
      }

      function qa(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0;
        c = 0;

        do {
          Rc(c | 0, 0, 45) | 0;
          e = F() | 0 | 134225919;
          d = a + (c << 3) | 0;
          b[d >> 2] = -1;
          b[d + 4 >> 2] = e;
          c = c + 1 | 0;
        } while ((c | 0) != 122);

        return;
      }

      function ra(a) {
        a = a | 0;
        return +e[a + 16 >> 3] < +e[a + 24 >> 3] | 0;
      }

      function sa(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0;
        e[b >> 3] = (+e[a >> 3] + +e[a + 8 >> 3]) * .5;
        c = +e[a + 16 >> 3];
        d = +e[a + 24 >> 3];
        c = +fb((d + (c < d ? c + 6.283185307179586 : c)) * .5);
        e[b + 8 >> 3] = c;
        return;
      }

      function ta(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0;
        c = +e[b >> 3];

        if (!(c >= +e[a + 8 >> 3])) {
          b = 0;
          return b | 0;
        }

        if (!(c <= +e[a >> 3])) {
          b = 0;
          return b | 0;
        }

        d = +e[a + 16 >> 3];
        c = +e[a + 24 >> 3];
        f = +e[b + 8 >> 3];
        b = f >= c;
        a = f <= d & 1;

        if (d < c) {
          if (b) { a = 1; }
        } else if (!b) { a = 0; }

        b = (a | 0) != 0;
        return b | 0;
      }

      function ua(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            f = 0,
            g = 0.0,
            h = 0,
            i = 0,
            j = 0,
            k = 0.0,
            l = 0.0,
            m = 0;
        c = R;
        R = R + 224 | 0;
        f = c + 200 | 0;
        d = c + 32 | 0;
        h = c + 16 | 0;
        i = c;
        m = a + 8 | 0;
        e[h >> 3] = (+e[a >> 3] + +e[m >> 3]) * .5;
        j = a + 16 | 0;
        g = +e[j >> 3];
        l = +e[a + 24 >> 3];
        g = +fb((l + (g < l ? g + 6.283185307179586 : g)) * .5);
        e[h + 8 >> 3] = g;
        g = +e[a >> 3];
        l = +q(+g);
        k = +e[m >> 3];
        a = l > +q(+k);
        e[i >> 3] = a ? k : g;
        e[i + 8 >> 3] = +e[j >> 3];
        g = +gb(h, i);
        a = Gb(h, b) | 0;
        b = F() | 0;
        Jb(a, b, f);
        Kb(a, b, d);
        b = ~~+A(+(g / +gb(f, d + 8 | 0)));
        R = c;
        return b | 0;
      }

      function va(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        b[a >> 2] = c;
        b[a + 4 >> 2] = d;
        b[a + 8 >> 2] = e;
        return;
      }

      function wa(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0,
            n = 0,
            o = 0.0;
        n = c + 8 | 0;
        b[n >> 2] = 0;
        k = +e[a >> 3];
        i = +q(+k);
        l = +e[a + 8 >> 3];
        j = +q(+l) / .8660254037844386;
        i = i + j * .5;
        d = ~~i;
        a = ~~j;
        i = i - +(d | 0);
        j = j - +(a | 0);

        do { if (i < .5) {
          if (i < .3333333333333333) {
            b[c >> 2] = d;

            if (j < (i + 1.0) * .5) {
              b[c + 4 >> 2] = a;
              break;
            } else {
              a = a + 1 | 0;
              b[c + 4 >> 2] = a;
              break;
            }
          } else {
            o = 1.0 - i;
            a = (!(j < o) & 1) + a | 0;
            b[c + 4 >> 2] = a;

            if (o <= j & j < i * 2.0) {
              d = d + 1 | 0;
              b[c >> 2] = d;
              break;
            } else {
              b[c >> 2] = d;
              break;
            }
          }
        } else {
          if (!(i < .6666666666666666)) {
            d = d + 1 | 0;
            b[c >> 2] = d;

            if (j < i * .5) {
              b[c + 4 >> 2] = a;
              break;
            } else {
              a = a + 1 | 0;
              b[c + 4 >> 2] = a;
              break;
            }
          }

          if (j < 1.0 - i) {
            b[c + 4 >> 2] = a;

            if (i * 2.0 + -1.0 < j) {
              b[c >> 2] = d;
              break;
            }
          } else {
            a = a + 1 | 0;
            b[c + 4 >> 2] = a;
          }

          d = d + 1 | 0;
          b[c >> 2] = d;
        } } while (0);

        do { if (k < 0.0) { if (!(a & 1)) {
          m = (a | 0) / 2 | 0;
          m = Mc(d | 0, ((d | 0) < 0) << 31 >> 31 | 0, m | 0, ((m | 0) < 0) << 31 >> 31 | 0) | 0;
          d = ~~(+(d | 0) - (+(m >>> 0) + 4294967296.0 * +(F() | 0)) * 2.0);
          b[c >> 2] = d;
          break;
        } else {
          m = (a + 1 | 0) / 2 | 0;
          m = Mc(d | 0, ((d | 0) < 0) << 31 >> 31 | 0, m | 0, ((m | 0) < 0) << 31 >> 31 | 0) | 0;
          d = ~~(+(d | 0) - ((+(m >>> 0) + 4294967296.0 * +(F() | 0)) * 2.0 + 1.0));
          b[c >> 2] = d;
          break;
        } } } while (0);

        m = c + 4 | 0;

        if (l < 0.0) {
          d = d - ((a << 1 | 1 | 0) / 2 | 0) | 0;
          b[c >> 2] = d;
          a = 0 - a | 0;
          b[m >> 2] = a;
        }

        f = a - d | 0;

        if ((d | 0) < 0) {
          g = 0 - d | 0;
          b[m >> 2] = f;
          b[n >> 2] = g;
          b[c >> 2] = 0;
          a = f;
          d = 0;
        } else { g = 0; }

        if ((a | 0) < 0) {
          d = d - a | 0;
          b[c >> 2] = d;
          g = g - a | 0;
          b[n >> 2] = g;
          b[m >> 2] = 0;
          a = 0;
        }

        h = d - g | 0;
        f = a - g | 0;

        if ((g | 0) < 0) {
          b[c >> 2] = h;
          b[m >> 2] = f;
          b[n >> 2] = 0;
          a = f;
          d = h;
          g = 0;
        }

        f = (a | 0) < (d | 0) ? a : d;
        f = (g | 0) < (f | 0) ? g : f;
        if ((f | 0) <= 0) { return; }
        b[c >> 2] = d - f;
        b[m >> 2] = a - f;
        b[n >> 2] = g - f;
        return;
      }

      function xa(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;
        c = b[a >> 2] | 0;
        h = a + 4 | 0;
        d = b[h >> 2] | 0;

        if ((c | 0) < 0) {
          d = d - c | 0;
          b[h >> 2] = d;
          g = a + 8 | 0;
          b[g >> 2] = (b[g >> 2] | 0) - c;
          b[a >> 2] = 0;
          c = 0;
        }

        if ((d | 0) < 0) {
          c = c - d | 0;
          b[a >> 2] = c;
          g = a + 8 | 0;
          f = (b[g >> 2] | 0) - d | 0;
          b[g >> 2] = f;
          b[h >> 2] = 0;
          d = 0;
        } else {
          f = a + 8 | 0;
          g = f;
          f = b[f >> 2] | 0;
        }

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[a >> 2] = c;
          d = d - f | 0;
          b[h >> 2] = d;
          b[g >> 2] = 0;
          f = 0;
        }

        e = (d | 0) < (c | 0) ? d : c;
        e = (f | 0) < (e | 0) ? f : e;
        if ((e | 0) <= 0) { return; }
        b[a >> 2] = c - e;
        b[h >> 2] = d - e;
        b[g >> 2] = f - e;
        return;
      }

      function ya(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            f = 0;
        f = b[a + 8 >> 2] | 0;
        d = +((b[a + 4 >> 2] | 0) - f | 0);
        e[c >> 3] = +((b[a >> 2] | 0) - f | 0) - d * .5;
        e[c + 8 >> 3] = d * .8660254037844386;
        return;
      }

      function za(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        b[d >> 2] = (b[c >> 2] | 0) + (b[a >> 2] | 0);
        b[d + 4 >> 2] = (b[c + 4 >> 2] | 0) + (b[a + 4 >> 2] | 0);
        b[d + 8 >> 2] = (b[c + 8 >> 2] | 0) + (b[a + 8 >> 2] | 0);
        return;
      }

      function Aa(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        b[d >> 2] = (b[a >> 2] | 0) - (b[c >> 2] | 0);
        b[d + 4 >> 2] = (b[a + 4 >> 2] | 0) - (b[c + 4 >> 2] | 0);
        b[d + 8 >> 2] = (b[a + 8 >> 2] | 0) - (b[c + 8 >> 2] | 0);
        return;
      }

      function Ba(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = B(b[a >> 2] | 0, c) | 0;
        b[a >> 2] = d;
        d = a + 4 | 0;
        e = B(b[d >> 2] | 0, c) | 0;
        b[d >> 2] = e;
        a = a + 8 | 0;
        c = B(b[a >> 2] | 0, c) | 0;
        b[a >> 2] = c;
        return;
      }

      function Ca(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = b[a >> 2] | 0;
        i = (h | 0) < 0;
        e = (b[a + 4 >> 2] | 0) - (i ? h : 0) | 0;
        g = (e | 0) < 0;
        f = (g ? 0 - e | 0 : 0) + ((b[a + 8 >> 2] | 0) - (i ? h : 0)) | 0;
        d = (f | 0) < 0;
        a = d ? 0 : f;
        c = (g ? 0 : e) - (d ? f : 0) | 0;
        f = (i ? 0 : h) - (g ? e : 0) - (d ? f : 0) | 0;
        d = (c | 0) < (f | 0) ? c : f;
        d = (a | 0) < (d | 0) ? a : d;
        e = (d | 0) > 0;
        a = a - (e ? d : 0) | 0;
        c = c - (e ? d : 0) | 0;

        a: do { switch (f - (e ? d : 0) | 0) {
          case 0:
            switch (c | 0) {
              case 0:
                {
                  i = (a | 0) == 0 ? 0 : (a | 0) == 1 ? 1 : 7;
                  return i | 0;
                }

              case 1:
                {
                  i = (a | 0) == 0 ? 2 : (a | 0) == 1 ? 3 : 7;
                  return i | 0;
                }

              default:
                break a;
            }

          case 1:
            switch (c | 0) {
              case 0:
                {
                  i = (a | 0) == 0 ? 4 : (a | 0) == 1 ? 5 : 7;
                  return i | 0;
                }

              case 1:
                {
                  if (!a) { a = 6; }else { break a; }
                  return a | 0;
                }

              default:
                break a;
            }

        } } while (0);

        i = 7;
        return i | 0;
      }

      function Da(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = a + 8 | 0;
        d = b[h >> 2] | 0;
        c = (b[a >> 2] | 0) - d | 0;
        i = a + 4 | 0;
        d = (b[i >> 2] | 0) - d | 0;
        e = Hc(+((c * 3 | 0) - d | 0) / 7.0) | 0;
        b[a >> 2] = e;
        c = Hc(+((d << 1) + c | 0) / 7.0) | 0;
        b[i >> 2] = c;
        b[h >> 2] = 0;
        d = c - e | 0;

        if ((e | 0) < 0) {
          g = 0 - e | 0;
          b[i >> 2] = d;
          b[h >> 2] = g;
          b[a >> 2] = 0;
          c = d;
          e = 0;
          d = g;
        } else { d = 0; }

        if ((c | 0) < 0) {
          e = e - c | 0;
          b[a >> 2] = e;
          d = d - c | 0;
          b[h >> 2] = d;
          b[i >> 2] = 0;
          c = 0;
        }

        g = e - d | 0;
        f = c - d | 0;

        if ((d | 0) < 0) {
          b[a >> 2] = g;
          b[i >> 2] = f;
          b[h >> 2] = 0;
          c = f;
          f = g;
          d = 0;
        } else { f = e; }

        e = (c | 0) < (f | 0) ? c : f;
        e = (d | 0) < (e | 0) ? d : e;
        if ((e | 0) <= 0) { return; }
        b[a >> 2] = f - e;
        b[i >> 2] = c - e;
        b[h >> 2] = d - e;
        return;
      }

      function Ea(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = a + 8 | 0;
        d = b[h >> 2] | 0;
        c = (b[a >> 2] | 0) - d | 0;
        i = a + 4 | 0;
        d = (b[i >> 2] | 0) - d | 0;
        e = Hc(+((c << 1) + d | 0) / 7.0) | 0;
        b[a >> 2] = e;
        c = Hc(+((d * 3 | 0) - c | 0) / 7.0) | 0;
        b[i >> 2] = c;
        b[h >> 2] = 0;
        d = c - e | 0;

        if ((e | 0) < 0) {
          g = 0 - e | 0;
          b[i >> 2] = d;
          b[h >> 2] = g;
          b[a >> 2] = 0;
          c = d;
          e = 0;
          d = g;
        } else { d = 0; }

        if ((c | 0) < 0) {
          e = e - c | 0;
          b[a >> 2] = e;
          d = d - c | 0;
          b[h >> 2] = d;
          b[i >> 2] = 0;
          c = 0;
        }

        g = e - d | 0;
        f = c - d | 0;

        if ((d | 0) < 0) {
          b[a >> 2] = g;
          b[i >> 2] = f;
          b[h >> 2] = 0;
          c = f;
          f = g;
          d = 0;
        } else { f = e; }

        e = (c | 0) < (f | 0) ? c : f;
        e = (d | 0) < (e | 0) ? d : e;
        if ((e | 0) <= 0) { return; }
        b[a >> 2] = f - e;
        b[i >> 2] = c - e;
        b[h >> 2] = d - e;
        return;
      }

      function Fa(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        c = b[a >> 2] | 0;
        h = a + 4 | 0;
        d = b[h >> 2] | 0;
        i = a + 8 | 0;
        e = b[i >> 2] | 0;
        f = d + (c * 3 | 0) | 0;
        b[a >> 2] = f;
        d = e + (d * 3 | 0) | 0;
        b[h >> 2] = d;
        c = (e * 3 | 0) + c | 0;
        b[i >> 2] = c;
        e = d - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = e;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          d = e;
          e = 0;
        } else { e = f; }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[h >> 2] = f - d;
        b[i >> 2] = c - d;
        return;
      }

      function Ga(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        f = b[a >> 2] | 0;
        h = a + 4 | 0;
        c = b[h >> 2] | 0;
        i = a + 8 | 0;
        d = b[i >> 2] | 0;
        e = (c * 3 | 0) + f | 0;
        f = d + (f * 3 | 0) | 0;
        b[a >> 2] = f;
        b[h >> 2] = e;
        c = (d * 3 | 0) + c | 0;
        b[i >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = d;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          f = 0;
        } else { d = e; }

        if ((d | 0) < 0) {
          f = f - d | 0;
          b[a >> 2] = f;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = f - c | 0;
        e = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = e;
          b[i >> 2] = 0;
          f = g;
          c = 0;
        } else { e = d; }

        d = (e | 0) < (f | 0) ? e : f;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = f - d;
        b[h >> 2] = e - d;
        b[i >> 2] = c - d;
        return;
      }

      function Ha(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        if ((c + -1 | 0) >>> 0 >= 6) { return; }
        f = (b[15472 + (c * 12 | 0) >> 2] | 0) + (b[a >> 2] | 0) | 0;
        b[a >> 2] = f;
        i = a + 4 | 0;
        e = (b[15472 + (c * 12 | 0) + 4 >> 2] | 0) + (b[i >> 2] | 0) | 0;
        b[i >> 2] = e;
        h = a + 8 | 0;
        c = (b[15472 + (c * 12 | 0) + 8 >> 2] | 0) + (b[h >> 2] | 0) | 0;
        b[h >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[i >> 2] = d;
          b[h >> 2] = c;
          b[a >> 2] = 0;
          e = 0;
        } else {
          d = e;
          e = f;
        }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[h >> 2] = c;
          b[i >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[i >> 2] = f;
          b[h >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[i >> 2] = f - d;
        b[h >> 2] = c - d;
        return;
      }

      function Ia(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        f = b[a >> 2] | 0;
        h = a + 4 | 0;
        c = b[h >> 2] | 0;
        i = a + 8 | 0;
        d = b[i >> 2] | 0;
        e = c + f | 0;
        f = d + f | 0;
        b[a >> 2] = f;
        b[h >> 2] = e;
        c = d + c | 0;
        b[i >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = d;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          e = 0;
        } else {
          d = e;
          e = f;
        }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[h >> 2] = f - d;
        b[i >> 2] = c - d;
        return;
      }

      function Ja(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        c = b[a >> 2] | 0;
        h = a + 4 | 0;
        e = b[h >> 2] | 0;
        i = a + 8 | 0;
        d = b[i >> 2] | 0;
        f = e + c | 0;
        b[a >> 2] = f;
        e = d + e | 0;
        b[h >> 2] = e;
        c = d + c | 0;
        b[i >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = d;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          e = 0;
        } else {
          d = e;
          e = f;
        }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[h >> 2] = f - d;
        b[i >> 2] = c - d;
        return;
      }

      function Ka(a) {
        a = a | 0;

        switch (a | 0) {
          case 1:
            {
              a = 5;
              break;
            }

          case 5:
            {
              a = 4;
              break;
            }

          case 4:
            {
              a = 6;
              break;
            }

          case 6:
            {
              a = 2;
              break;
            }

          case 2:
            {
              a = 3;
              break;
            }

          case 3:
            {
              a = 1;
              break;
            }

        }

        return a | 0;
      }

      function La(a) {
        a = a | 0;

        switch (a | 0) {
          case 1:
            {
              a = 3;
              break;
            }

          case 3:
            {
              a = 2;
              break;
            }

          case 2:
            {
              a = 6;
              break;
            }

          case 6:
            {
              a = 4;
              break;
            }

          case 4:
            {
              a = 5;
              break;
            }

          case 5:
            {
              a = 1;
              break;
            }

        }

        return a | 0;
      }

      function Ma(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        c = b[a >> 2] | 0;
        h = a + 4 | 0;
        d = b[h >> 2] | 0;
        i = a + 8 | 0;
        e = b[i >> 2] | 0;
        f = d + (c << 1) | 0;
        b[a >> 2] = f;
        d = e + (d << 1) | 0;
        b[h >> 2] = d;
        c = (e << 1) + c | 0;
        b[i >> 2] = c;
        e = d - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = e;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          d = e;
          e = 0;
        } else { e = f; }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[h >> 2] = f - d;
        b[i >> 2] = c - d;
        return;
      }

      function Na(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        f = b[a >> 2] | 0;
        h = a + 4 | 0;
        c = b[h >> 2] | 0;
        i = a + 8 | 0;
        d = b[i >> 2] | 0;
        e = (c << 1) + f | 0;
        f = d + (f << 1) | 0;
        b[a >> 2] = f;
        b[h >> 2] = e;
        c = (d << 1) + c | 0;
        b[i >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = d;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          f = 0;
        } else { d = e; }

        if ((d | 0) < 0) {
          f = f - d | 0;
          b[a >> 2] = f;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = f - c | 0;
        e = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = e;
          b[i >> 2] = 0;
          f = g;
          c = 0;
        } else { e = d; }

        d = (e | 0) < (f | 0) ? e : f;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = f - d;
        b[h >> 2] = e - d;
        b[i >> 2] = c - d;
        return;
      }

      function Oa(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = (b[a >> 2] | 0) - (b[c >> 2] | 0) | 0;
        i = (h | 0) < 0;
        e = (b[a + 4 >> 2] | 0) - (b[c + 4 >> 2] | 0) - (i ? h : 0) | 0;
        g = (e | 0) < 0;
        f = (i ? 0 - h | 0 : 0) + (b[a + 8 >> 2] | 0) - (b[c + 8 >> 2] | 0) + (g ? 0 - e | 0 : 0) | 0;
        a = (f | 0) < 0;
        c = a ? 0 : f;
        d = (g ? 0 : e) - (a ? f : 0) | 0;
        f = (i ? 0 : h) - (g ? e : 0) - (a ? f : 0) | 0;
        a = (d | 0) < (f | 0) ? d : f;
        a = (c | 0) < (a | 0) ? c : a;
        e = (a | 0) > 0;
        c = c - (e ? a : 0) | 0;
        d = d - (e ? a : 0) | 0;
        a = f - (e ? a : 0) | 0;
        a = (a | 0) > -1 ? a : 0 - a | 0;
        d = (d | 0) > -1 ? d : 0 - d | 0;
        c = (c | 0) > -1 ? c : 0 - c | 0;
        c = (d | 0) > (c | 0) ? d : c;
        return ((a | 0) > (c | 0) ? a : c) | 0;
      }

      function Pa(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0;
        d = b[a + 8 >> 2] | 0;
        b[c >> 2] = (b[a >> 2] | 0) - d;
        b[c + 4 >> 2] = (b[a + 4 >> 2] | 0) - d;
        return;
      }

      function Qa(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        e = b[a >> 2] | 0;
        b[c >> 2] = e;
        a = b[a + 4 >> 2] | 0;
        h = c + 4 | 0;
        b[h >> 2] = a;
        i = c + 8 | 0;
        b[i >> 2] = 0;
        d = a - e | 0;

        if ((e | 0) < 0) {
          a = 0 - e | 0;
          b[h >> 2] = d;
          b[i >> 2] = a;
          b[c >> 2] = 0;
          e = 0;
        } else {
          d = a;
          a = 0;
        }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[c >> 2] = e;
          a = a - d | 0;
          b[i >> 2] = a;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - a | 0;
        f = d - a | 0;

        if ((a | 0) < 0) {
          b[c >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          d = f;
          f = g;
          a = 0;
        } else { f = e; }

        e = (d | 0) < (f | 0) ? d : f;
        e = (a | 0) < (e | 0) ? a : e;
        if ((e | 0) <= 0) { return; }
        b[c >> 2] = f - e;
        b[h >> 2] = d - e;
        b[i >> 2] = a - e;
        return;
      }

      function Ra(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0;
        c = a + 8 | 0;
        f = b[c >> 2] | 0;
        d = f - (b[a >> 2] | 0) | 0;
        b[a >> 2] = d;
        e = a + 4 | 0;
        a = (b[e >> 2] | 0) - f | 0;
        b[e >> 2] = a;
        b[c >> 2] = 0 - (a + d);
        return;
      }

      function Sa(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        d = b[a >> 2] | 0;
        c = 0 - d | 0;
        b[a >> 2] = c;
        h = a + 8 | 0;
        b[h >> 2] = 0;
        i = a + 4 | 0;
        e = b[i >> 2] | 0;
        f = e + d | 0;

        if ((d | 0) > 0) {
          b[i >> 2] = f;
          b[h >> 2] = d;
          b[a >> 2] = 0;
          c = 0;
          e = f;
        } else { d = 0; }

        if ((e | 0) < 0) {
          g = c - e | 0;
          b[a >> 2] = g;
          d = d - e | 0;
          b[h >> 2] = d;
          b[i >> 2] = 0;
          f = g - d | 0;
          c = 0 - d | 0;

          if ((d | 0) < 0) {
            b[a >> 2] = f;
            b[i >> 2] = c;
            b[h >> 2] = 0;
            e = c;
            d = 0;
          } else {
            e = 0;
            f = g;
          }
        } else { f = c; }

        c = (e | 0) < (f | 0) ? e : f;
        c = (d | 0) < (c | 0) ? d : c;
        if ((c | 0) <= 0) { return; }
        b[a >> 2] = f - c;
        b[i >> 2] = e - c;
        b[h >> 2] = d - c;
        return;
      }

      function Ta(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = R;
        R = R + 16 | 0;
        e = d;
        Ua(a, b, c, e);
        wa(e, c + 4 | 0);
        R = d;
        return;
      }

      function Ua(a, c, d, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        var g = 0.0,
            h = 0,
            i = 0.0,
            j = 0.0,
            k = 0;
        k = R;
        R = R + 32 | 0;
        h = k;
        xc(a, h);
        b[d >> 2] = 0;
        g = +wc(15888, h);
        i = +wc(15912, h);

        if (i < g) {
          b[d >> 2] = 1;
          g = i;
        }

        i = +wc(15936, h);

        if (i < g) {
          b[d >> 2] = 2;
          g = i;
        }

        i = +wc(15960, h);

        if (i < g) {
          b[d >> 2] = 3;
          g = i;
        }

        i = +wc(15984, h);

        if (i < g) {
          b[d >> 2] = 4;
          g = i;
        }

        i = +wc(16008, h);

        if (i < g) {
          b[d >> 2] = 5;
          g = i;
        }

        i = +wc(16032, h);

        if (i < g) {
          b[d >> 2] = 6;
          g = i;
        }

        i = +wc(16056, h);

        if (i < g) {
          b[d >> 2] = 7;
          g = i;
        }

        i = +wc(16080, h);

        if (i < g) {
          b[d >> 2] = 8;
          g = i;
        }

        i = +wc(16104, h);

        if (i < g) {
          b[d >> 2] = 9;
          g = i;
        }

        i = +wc(16128, h);

        if (i < g) {
          b[d >> 2] = 10;
          g = i;
        }

        i = +wc(16152, h);

        if (i < g) {
          b[d >> 2] = 11;
          g = i;
        }

        i = +wc(16176, h);

        if (i < g) {
          b[d >> 2] = 12;
          g = i;
        }

        i = +wc(16200, h);

        if (i < g) {
          b[d >> 2] = 13;
          g = i;
        }

        i = +wc(16224, h);

        if (i < g) {
          b[d >> 2] = 14;
          g = i;
        }

        i = +wc(16248, h);

        if (i < g) {
          b[d >> 2] = 15;
          g = i;
        }

        i = +wc(16272, h);

        if (i < g) {
          b[d >> 2] = 16;
          g = i;
        }

        i = +wc(16296, h);

        if (i < g) {
          b[d >> 2] = 17;
          g = i;
        }

        i = +wc(16320, h);

        if (i < g) {
          b[d >> 2] = 18;
          g = i;
        }

        i = +wc(16344, h);

        if (i < g) {
          b[d >> 2] = 19;
          g = i;
        }

        i = +w(+(1.0 - g * .5));

        if (i < 1.0e-16) {
          b[f >> 2] = 0;
          b[f + 4 >> 2] = 0;
          b[f + 8 >> 2] = 0;
          b[f + 12 >> 2] = 0;
          R = k;
          return;
        }

        d = b[d >> 2] | 0;
        g = +e[16368 + (d * 24 | 0) >> 3];
        g = +bb(g - +bb(+hb(15568 + (d << 4) | 0, a)));
        if (!(Fb(c) | 0)) { j = g; }else { j = +bb(g + -.3334731722518321); }
        g = +v(+i) / .381966011250105;

        if ((c | 0) > 0) {
          h = 0;

          do {
            g = g * 2.6457513110645907;
            h = h + 1 | 0;
          } while ((h | 0) != (c | 0));
        }

        i = +t(+j) * g;
        e[f >> 3] = i;
        j = +u(+j) * g;
        e[f + 8 >> 3] = j;
        R = k;
        return;
      }

      function Va(a, c, d, f, g) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        g = g | 0;
        var h = 0.0,
            i = 0.0;
        h = +tc(a);

        if (h < 1.0e-16) {
          c = 15568 + (c << 4) | 0;
          b[g >> 2] = b[c >> 2];
          b[g + 4 >> 2] = b[c + 4 >> 2];
          b[g + 8 >> 2] = b[c + 8 >> 2];
          b[g + 12 >> 2] = b[c + 12 >> 2];
          return;
        }

        i = +z(+ +e[a + 8 >> 3], + +e[a >> 3]);

        if ((d | 0) > 0) {
          a = 0;

          do {
            h = h / 2.6457513110645907;
            a = a + 1 | 0;
          } while ((a | 0) != (d | 0));
        }

        if (!f) {
          h = +y(+(h * .381966011250105));
          if (Fb(d) | 0) { i = +bb(i + .3334731722518321); }
        } else {
          h = h / 3.0;
          d = (Fb(d) | 0) == 0;
          h = +y(+((d ? h : h / 2.6457513110645907) * .381966011250105));
        }

        ib(15568 + (c << 4) | 0, +bb(+e[16368 + (c * 24 | 0) >> 3] - i), h, g);
        return;
      }

      function Wa(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0;
        e = R;
        R = R + 16 | 0;
        f = e;
        ya(a + 4 | 0, f);
        Va(f, b[a >> 2] | 0, c, 0, d);
        R = e;
        return;
      }

      function Xa(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0.0,
            F = 0.0;
        D = R;
        R = R + 272 | 0;
        j = D + 256 | 0;
        k = D + 240 | 0;
        y = D;
        z = D + 224 | 0;
        A = D + 208 | 0;
        B = D + 176 | 0;
        C = D + 160 | 0;
        s = D + 192 | 0;
        t = D + 144 | 0;
        u = D + 128 | 0;
        v = D + 112 | 0;
        w = D + 96 | 0;
        x = D + 80 | 0;
        b[j >> 2] = c;
        b[k >> 2] = b[a >> 2];
        b[k + 4 >> 2] = b[a + 4 >> 2];
        b[k + 8 >> 2] = b[a + 8 >> 2];
        b[k + 12 >> 2] = b[a + 12 >> 2];
        Ya(k, j, y);
        b[d >> 2] = 0;
        j = b[j >> 2] | 0;
        k = z + 4 | 0;
        l = B + 4 | 0;
        m = 16848 + (j << 2) | 0;
        n = 16928 + (j << 2) | 0;
        o = u + 8 | 0;
        p = v + 8 | 0;
        q = w + 8 | 0;
        r = A + 4 | 0;
        i = 0;

        a: while (1) {
          h = y + (((i >>> 0) % 5 | 0) << 4) | 0;
          b[A >> 2] = b[h >> 2];
          b[A + 4 >> 2] = b[h + 4 >> 2];
          b[A + 8 >> 2] = b[h + 8 >> 2];
          b[A + 12 >> 2] = b[h + 12 >> 2];

          do {} while ((Za(A, j, 0, 1) | 0) == 2);

          if ((i | 0) != 0 & (Fb(c) | 0) != 0) {
            b[B >> 2] = b[A >> 2];
            b[B + 4 >> 2] = b[A + 4 >> 2];
            b[B + 8 >> 2] = b[A + 8 >> 2];
            b[B + 12 >> 2] = b[A + 12 >> 2];
            ya(k, C);
            f = b[B >> 2] | 0;
            g = b[17008 + (f * 80 | 0) + (b[z >> 2] << 2) >> 2] | 0;
            b[B >> 2] = b[18608 + (f * 80 | 0) + (g * 20 | 0) >> 2];
            h = b[18608 + (f * 80 | 0) + (g * 20 | 0) + 16 >> 2] | 0;

            if ((h | 0) > 0) {
              a = 0;

              do {
                Ia(l);
                a = a + 1 | 0;
              } while ((a | 0) < (h | 0));
            }

            h = 18608 + (f * 80 | 0) + (g * 20 | 0) + 4 | 0;
            b[s >> 2] = b[h >> 2];
            b[s + 4 >> 2] = b[h + 4 >> 2];
            b[s + 8 >> 2] = b[h + 8 >> 2];
            Ba(s, (b[m >> 2] | 0) * 3 | 0);
            za(l, s, l);
            xa(l);
            ya(l, t);
            E = +(b[n >> 2] | 0);
            e[u >> 3] = E * 3.0;
            e[o >> 3] = 0.0;
            F = E * -1.5;
            e[v >> 3] = F;
            e[p >> 3] = E * 2.598076211353316;
            e[w >> 3] = F;
            e[q >> 3] = E * -2.598076211353316;

            switch (b[17008 + ((b[B >> 2] | 0) * 80 | 0) + (b[A >> 2] << 2) >> 2] | 0) {
              case 1:
                {
                  a = v;
                  f = u;
                  break;
                }

              case 3:
                {
                  a = w;
                  f = v;
                  break;
                }

              case 2:
                {
                  a = u;
                  f = w;
                  break;
                }

              default:
                {
                  a = 11;
                  break a;
                }
            }

            uc(C, t, f, a, x);
            Va(x, b[B >> 2] | 0, j, 1, d + 8 + (b[d >> 2] << 4) | 0);
            b[d >> 2] = (b[d >> 2] | 0) + 1;
          }

          if (i >>> 0 < 5) {
            ya(r, B);
            Va(B, b[A >> 2] | 0, j, 1, d + 8 + (b[d >> 2] << 4) | 0);
            b[d >> 2] = (b[d >> 2] | 0) + 1;
          }
          b[z >> 2] = b[A >> 2];
          b[z + 4 >> 2] = b[A + 4 >> 2];
          b[z + 8 >> 2] = b[A + 8 >> 2];
          b[z + 12 >> 2] = b[A + 12 >> 2];
          i = i + 1 | 0;

          if (i >>> 0 >= 6) {
            a = 2;
            break;
          }
        }

        if ((a | 0) == 2) {
          R = D;
          return;
        } else if ((a | 0) == 11) { G(22113, 22160, 571, 22170); }
      }

      function Ya(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        j = R;
        R = R + 128 | 0;
        e = j + 64 | 0;
        f = j;
        g = e;
        h = 20208;
        i = g + 60 | 0;

        do {
          b[g >> 2] = b[h >> 2];
          g = g + 4 | 0;
          h = h + 4 | 0;
        } while ((g | 0) < (i | 0));

        g = f;
        h = 20272;
        i = g + 60 | 0;

        do {
          b[g >> 2] = b[h >> 2];
          g = g + 4 | 0;
          h = h + 4 | 0;
        } while ((g | 0) < (i | 0));

        i = (Fb(b[c >> 2] | 0) | 0) == 0;
        e = i ? e : f;
        f = a + 4 | 0;
        Ma(f);
        Na(f);

        if (Fb(b[c >> 2] | 0) | 0) {
          Ga(f);
          b[c >> 2] = (b[c >> 2] | 0) + 1;
        }

        b[d >> 2] = b[a >> 2];
        c = d + 4 | 0;
        za(f, e, c);
        xa(c);
        b[d + 16 >> 2] = b[a >> 2];
        c = d + 20 | 0;
        za(f, e + 12 | 0, c);
        xa(c);
        b[d + 32 >> 2] = b[a >> 2];
        c = d + 36 | 0;
        za(f, e + 24 | 0, c);
        xa(c);
        b[d + 48 >> 2] = b[a >> 2];
        c = d + 52 | 0;
        za(f, e + 36 | 0, c);
        xa(c);
        b[d + 64 >> 2] = b[a >> 2];
        d = d + 68 | 0;
        za(f, e + 48 | 0, d);
        xa(d);
        R = j;
        return;
      }

      function Za(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        p = R;
        R = R + 32 | 0;
        n = p + 12 | 0;
        i = p;
        o = a + 4 | 0;
        m = b[16928 + (c << 2) >> 2] | 0;
        l = (e | 0) != 0;
        m = l ? m * 3 | 0 : m;
        f = b[o >> 2] | 0;
        k = a + 8 | 0;
        h = b[k >> 2] | 0;

        if (l) {
          g = a + 12 | 0;
          e = b[g >> 2] | 0;
          f = h + f + e | 0;

          if ((f | 0) == (m | 0)) {
            o = 1;
            R = p;
            return o | 0;
          } else { j = g; }
        } else {
          j = a + 12 | 0;
          e = b[j >> 2] | 0;
          f = h + f + e | 0;
        }

        if ((f | 0) <= (m | 0)) {
          o = 0;
          R = p;
          return o | 0;
        }

        do { if ((e | 0) > 0) {
          e = b[a >> 2] | 0;

          if ((h | 0) > 0) {
            g = 18608 + (e * 80 | 0) + 60 | 0;
            e = a;
            break;
          }

          e = 18608 + (e * 80 | 0) + 40 | 0;

          if (!d) {
            g = e;
            e = a;
          } else {
            va(n, m, 0, 0);
            Aa(o, n, i);
            Ja(i);
            za(i, n, o);
            g = e;
            e = a;
          }
        } else {
          g = 18608 + ((b[a >> 2] | 0) * 80 | 0) + 20 | 0;
          e = a;
        } } while (0);

        b[e >> 2] = b[g >> 2];
        f = g + 16 | 0;

        if ((b[f >> 2] | 0) > 0) {
          e = 0;

          do {
            Ia(o);
            e = e + 1 | 0;
          } while ((e | 0) < (b[f >> 2] | 0));
        }

        a = g + 4 | 0;
        b[n >> 2] = b[a >> 2];
        b[n + 4 >> 2] = b[a + 4 >> 2];
        b[n + 8 >> 2] = b[a + 8 >> 2];
        c = b[16848 + (c << 2) >> 2] | 0;
        Ba(n, l ? c * 3 | 0 : c);
        za(o, n, o);
        xa(o);
        if (l) { e = ((b[k >> 2] | 0) + (b[o >> 2] | 0) + (b[j >> 2] | 0) | 0) == (m | 0) ? 1 : 2; }else { e = 2; }
        o = e;
        R = p;
        return o | 0;
      }

      function _a(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0;

        do { c = Za(a, b, 0, 1) | 0; } while ((c | 0) == 2);

        return c | 0;
      }

      function $a(a, c, d, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0.0,
            B = 0.0;
        z = R;
        R = R + 240 | 0;
        g = z + 224 | 0;
        t = z + 208 | 0;
        u = z;
        v = z + 192 | 0;
        w = z + 176 | 0;
        x = z + 160 | 0;
        p = z + 144 | 0;
        q = z + 128 | 0;
        r = z + 112 | 0;
        s = z + 96 | 0;

        if (d | 0) {
          Xa(a, c, f);
          R = z;
          return;
        }

        b[g >> 2] = c;
        b[t >> 2] = b[a >> 2];
        b[t + 4 >> 2] = b[a + 4 >> 2];
        b[t + 8 >> 2] = b[a + 8 >> 2];
        b[t + 12 >> 2] = b[a + 12 >> 2];
        ab(t, g, u);
        b[f >> 2] = 0;
        j = b[g >> 2] | 0;
        k = 16928 + (j << 2) | 0;
        l = p + 8 | 0;
        m = q + 8 | 0;
        n = r + 8 | 0;
        o = v + 4 | 0;
        h = 0;
        i = 0;
        d = -1;

        a: while (1) {
          g = (i >>> 0) % 6 | 0;
          a = u + (g << 4) | 0;
          b[v >> 2] = b[a >> 2];
          b[v + 4 >> 2] = b[a + 4 >> 2];
          b[v + 8 >> 2] = b[a + 8 >> 2];
          b[v + 12 >> 2] = b[a + 12 >> 2];
          a = h;
          h = Za(v, j, 0, 1) | 0;

          if ((i | 0) != 0 & (Fb(c) | 0) != 0 ? (a | 0) != 1 ? (b[v >> 2] | 0) != (d | 0) : 0 : 0) {
            ya(u + ((((g + 5 | 0) >>> 0) % 6 | 0) << 4) + 4 | 0, w);
            ya(u + (g << 4) + 4 | 0, x);
            A = +(b[k >> 2] | 0);
            e[p >> 3] = A * 3.0;
            e[l >> 3] = 0.0;
            B = A * -1.5;
            e[q >> 3] = B;
            e[m >> 3] = A * 2.598076211353316;
            e[r >> 3] = B;
            e[n >> 3] = A * -2.598076211353316;
            g = b[t >> 2] | 0;

            switch (b[17008 + (g * 80 | 0) + (((d | 0) == (g | 0) ? b[v >> 2] | 0 : d) << 2) >> 2] | 0) {
              case 1:
                {
                  a = q;
                  d = p;
                  break;
                }

              case 3:
                {
                  a = r;
                  d = q;
                  break;
                }

              case 2:
                {
                  a = p;
                  d = r;
                  break;
                }

              default:
                {
                  y = 9;
                  break a;
                }
            }

            uc(w, x, d, a, s);

            if (!(vc(w, s) | 0) ? !(vc(x, s) | 0) : 0) {
              Va(s, b[t >> 2] | 0, j, 1, f + 8 + (b[f >> 2] << 4) | 0);
              b[f >> 2] = (b[f >> 2] | 0) + 1;
            }
          }

          if (i >>> 0 < 6) {
            ya(o, w);
            Va(w, b[v >> 2] | 0, j, 1, f + 8 + (b[f >> 2] << 4) | 0);
            b[f >> 2] = (b[f >> 2] | 0) + 1;
          }

          i = i + 1 | 0;
          if (i >>> 0 >= 7) { break; }else { d = b[v >> 2] | 0; }
        }

        if ((y | 0) == 9) { G(22196, 22160, 735, 22241); }
        R = z;
        return;
      }

      function ab(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        j = R;
        R = R + 160 | 0;
        e = j + 80 | 0;
        f = j;
        g = e;
        h = 20336;
        i = g + 72 | 0;

        do {
          b[g >> 2] = b[h >> 2];
          g = g + 4 | 0;
          h = h + 4 | 0;
        } while ((g | 0) < (i | 0));

        g = f;
        h = 20416;
        i = g + 72 | 0;

        do {
          b[g >> 2] = b[h >> 2];
          g = g + 4 | 0;
          h = h + 4 | 0;
        } while ((g | 0) < (i | 0));

        i = (Fb(b[c >> 2] | 0) | 0) == 0;
        e = i ? e : f;
        f = a + 4 | 0;
        Ma(f);
        Na(f);

        if (Fb(b[c >> 2] | 0) | 0) {
          Ga(f);
          b[c >> 2] = (b[c >> 2] | 0) + 1;
        }

        b[d >> 2] = b[a >> 2];
        c = d + 4 | 0;
        za(f, e, c);
        xa(c);
        b[d + 16 >> 2] = b[a >> 2];
        c = d + 20 | 0;
        za(f, e + 12 | 0, c);
        xa(c);
        b[d + 32 >> 2] = b[a >> 2];
        c = d + 36 | 0;
        za(f, e + 24 | 0, c);
        xa(c);
        b[d + 48 >> 2] = b[a >> 2];
        c = d + 52 | 0;
        za(f, e + 36 | 0, c);
        xa(c);
        b[d + 64 >> 2] = b[a >> 2];
        c = d + 68 | 0;
        za(f, e + 48 | 0, c);
        xa(c);
        b[d + 80 >> 2] = b[a >> 2];
        d = d + 84 | 0;
        za(f, e + 60 | 0, d);
        xa(d);
        R = j;
        return;
      }

      function bb(a) {
        a = +a;
        var b = 0.0;
        b = a < 0.0 ? a + 6.283185307179586 : a;
        return +(!(a >= 6.283185307179586) ? b : b + -6.283185307179586);
      }

      function cb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = +c;

        if (!(+q(+(+e[a >> 3] - +e[b >> 3])) < c)) {
          b = 0;
          return b | 0;
        }

        b = +q(+(+e[a + 8 >> 3] - +e[b + 8 >> 3])) < c;
        return b | 0;
      }

      function db(a, b) {
        a = a | 0;
        b = b | 0;

        if (!(+q(+(+e[a >> 3] - +e[b >> 3])) < 1.7453292519943298e-11)) {
          b = 0;
          return b | 0;
        }

        b = +q(+(+e[a + 8 >> 3] - +e[b + 8 >> 3])) < 1.7453292519943298e-11;
        return b | 0;
      }

      function eb(a) {
        a = +a;
        if (!(a > 1.5707963267948966)) { return +a; }

        do { a = a + -3.141592653589793; } while (a > 1.5707963267948966);

        return +a;
      }

      function fb(a) {
        a = +a;
        if (a > 3.141592653589793) { do { a = a + -6.283185307179586; } while (a > 3.141592653589793); }
        if (!(a < -3.141592653589793)) { return +a; }

        do { a = a + 6.283185307179586; } while (a < -3.141592653589793);

        return +a;
      }

      function gb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0;
        d = +e[b + 8 >> 3];
        f = +e[a + 8 >> 3];
        c = +q(+(d - f));
        if (c > 3.141592653589793) { c = +q(+((d < 0.0 ? d + 6.283185307179586 : d) - (f < 0.0 ? f + 6.283185307179586 : f))); }
        d = 1.5707963267948966 - +e[a >> 3];
        f = 1.5707963267948966 - +e[b >> 3];
        f = +t(+d) * +t(+f) + +t(+c) * (+u(+d) * +u(+f));
        f = f > 1.0 ? 1.0 : f;
        return +(+w(+(f < -1.0 ? -1.0 : f)) * 6371.007180918475);
      }

      function hb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0,
            g = 0.0,
            h = 0.0;
        g = +e[b >> 3];
        d = +t(+g);
        f = +e[b + 8 >> 3] - +e[a + 8 >> 3];
        h = d * +u(+f);
        c = +e[a >> 3];
        return + +z(+h, +(+u(+g) * +t(+c) - +t(+f) * (d * +u(+c))));
      }

      function ib(a, c, d, f) {
        a = a | 0;
        c = +c;
        d = +d;
        f = f | 0;
        var g = 0,
            h = 0.0,
            i = 0.0,
            j = 0.0;

        if (d < 1.0e-16) {
          b[f >> 2] = b[a >> 2];
          b[f + 4 >> 2] = b[a + 4 >> 2];
          b[f + 8 >> 2] = b[a + 8 >> 2];
          b[f + 12 >> 2] = b[a + 12 >> 2];
          return;
        }

        h = c < 0.0 ? c + 6.283185307179586 : c;
        h = !(c >= 6.283185307179586) ? h : h + -6.283185307179586;

        do { if (h < 1.0e-16) {
          c = +e[a >> 3] + d;
          e[f >> 3] = c;
          g = f;
        } else {
          g = +q(+(h + -3.141592653589793)) < 1.0e-16;
          c = +e[a >> 3];

          if (g) {
            c = c - d;
            e[f >> 3] = c;
            g = f;
            break;
          }

          i = +t(+d);
          d = +u(+d);
          c = i * +u(+c) + +t(+h) * (d * +t(+c));
          c = c > 1.0 ? 1.0 : c;
          c = +x(+(c < -1.0 ? -1.0 : c));
          e[f >> 3] = c;

          if (+q(+(c + -1.5707963267948966)) < 1.0e-16) {
            e[f >> 3] = 1.5707963267948966;
            e[f + 8 >> 3] = 0.0;
            return;
          }

          if (+q(+(c + 1.5707963267948966)) < 1.0e-16) {
            e[f >> 3] = -1.5707963267948966;
            e[f + 8 >> 3] = 0.0;
            return;
          }

          j = +t(+c);
          h = d * +u(+h) / j;
          d = +e[a >> 3];
          c = (i - +u(+c) * +u(+d)) / +t(+d) / j;
          i = h > 1.0 ? 1.0 : h;
          c = c > 1.0 ? 1.0 : c;
          c = +e[a + 8 >> 3] + +z(+(i < -1.0 ? -1.0 : i), +(c < -1.0 ? -1.0 : c));
          if (c > 3.141592653589793) { do { c = c + -6.283185307179586; } while (c > 3.141592653589793); }
          if (c < -3.141592653589793) { do { c = c + 6.283185307179586; } while (c < -3.141592653589793); }
          e[f + 8 >> 3] = c;
          return;
        } } while (0);

        if (+q(+(c + -1.5707963267948966)) < 1.0e-16) {
          e[g >> 3] = 1.5707963267948966;
          e[f + 8 >> 3] = 0.0;
          return;
        }

        if (+q(+(c + 1.5707963267948966)) < 1.0e-16) {
          e[g >> 3] = -1.5707963267948966;
          e[f + 8 >> 3] = 0.0;
          return;
        }

        c = +e[a + 8 >> 3];
        if (c > 3.141592653589793) { do { c = c + -6.283185307179586; } while (c > 3.141592653589793); }
        if (c < -3.141592653589793) { do { c = c + 6.283185307179586; } while (c < -3.141592653589793); }
        e[f + 8 >> 3] = c;
        return;
      }

      function jb(a) {
        a = a | 0;
        return + +e[20496 + (a << 3) >> 3];
      }

      function kb(a) {
        a = a | 0;
        return + +e[20624 + (a << 3) >> 3];
      }

      function lb(a) {
        a = a | 0;
        return + +e[20752 + (a << 3) >> 3];
      }

      function mb(a) {
        a = a | 0;
        return + +e[20880 + (a << 3) >> 3];
      }

      function nb(a) {
        a = a | 0;
        var c = 0;
        c = 21008 + (a << 3) | 0;
        a = b[c >> 2] | 0;
        E(b[c + 4 >> 2] | 0);
        return a | 0;
      }

      function ob(a, b) {
        a = a | 0;
        b = b | 0;
        b = Qc(a | 0, b | 0, 45) | 0;
        F() | 0;
        return b & 127 | 0;
      }

      function pb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;

        if (!(0 == 0 & (b & 2013265920 | 0) == 134217728)) {
          b = 0;
          return b | 0;
        }

        g = Qc(a | 0, b | 0, 45) | 0;
        F() | 0;
        g = g & 127;

        if (g >>> 0 > 121) {
          b = 0;
          return b | 0;
        }

        c = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        c = c & 15;

        do { if (c | 0) {
          e = 1;
          d = 0;

          while (1) {
            f = Qc(a | 0, b | 0, (15 - e | 0) * 3 | 0) | 0;
            F() | 0;
            f = f & 7;
            if ((f | 0) != 0 & (d ^ 1)) { if ((f | 0) == 1 & (ia(g) | 0) != 0) {
              h = 0;
              d = 13;
              break;
            } else { d = 1; } }

            if ((f | 0) == 7) {
              h = 0;
              d = 13;
              break;
            }

            if (e >>> 0 < c >>> 0) { e = e + 1 | 0; }else {
              d = 9;
              break;
            }
          }

          if ((d | 0) == 9) {
            if ((c | 0) == 15) { h = 1; }else { break; }
            return h | 0;
          } else if ((d | 0) == 13) { return h | 0; }
        } } while (0);

        while (1) {
          h = Qc(a | 0, b | 0, (14 - c | 0) * 3 | 0) | 0;
          F() | 0;

          if (!((h & 7 | 0) == 7 & 0 == 0)) {
            h = 0;
            d = 13;
            break;
          }

          if (c >>> 0 < 14) { c = c + 1 | 0; }else {
            h = 1;
            d = 13;
            break;
          }
        }

        if ((d | 0) == 13) { return h | 0; }
        return 0;
      }

      function qb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        d = d & 15;

        if ((d | 0) >= (c | 0)) {
          if ((d | 0) != (c | 0)) { if (c >>> 0 <= 15) {
            e = Rc(c | 0, 0, 52) | 0;
            a = e | a;
            b = F() | 0 | b & -15728641;
            if ((d | 0) > (c | 0)) { do {
              e = Rc(7, 0, (14 - c | 0) * 3 | 0) | 0;
              c = c + 1 | 0;
              a = e | a;
              b = F() | 0 | b;
            } while ((c | 0) < (d | 0)); }
          } else {
            b = 0;
            a = 0;
          } }
        } else {
          b = 0;
          a = 0;
        }

        E(b | 0);
        return a | 0;
      }

      function rb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        a = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        a = a & 15;

        if (!((c | 0) < 16 & (a | 0) <= (c | 0))) {
          c = 0;
          return c | 0;
        }

        c = hc(7, c - a | 0) | 0;
        return c | 0;
      }

      function sb(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        h = Qc(a | 0, c | 0, 52) | 0;
        F() | 0;
        h = h & 15;
        if (!((d | 0) < 16 & (h | 0) <= (d | 0))) { return; }

        if ((h | 0) == (d | 0)) {
          d = e;
          b[d >> 2] = a;
          b[d + 4 >> 2] = c;
          return;
        }

        j = hc(7, d - h | 0) | 0;
        k = (j | 0) / 7 | 0;
        i = Qc(a | 0, c | 0, 45) | 0;
        F() | 0;
        if (!(ia(i & 127) | 0)) { g = 0; }else {
          a: do { if (!h) { f = 0; }else {
            g = 1;

            while (1) {
              f = Qc(a | 0, c | 0, (15 - g | 0) * 3 | 0) | 0;
              F() | 0;
              f = f & 7;
              if (f | 0) { break a; }
              if (g >>> 0 < h >>> 0) { g = g + 1 | 0; }else {
                f = 0;
                break;
              }
            }
          } } while (0);

          g = (f | 0) == 0;
        }
        l = Rc(h + 1 | 0, 0, 52) | 0;
        f = F() | 0 | c & -15728641;
        i = (14 - h | 0) * 3 | 0;
        c = Rc(7, 0, i | 0) | 0;
        c = (l | a) & ~c;
        h = f & ~(F() | 0);
        sb(c, h, d, e);
        f = e + (k << 3) | 0;

        if (!g) {
          l = Rc(1, 0, i | 0) | 0;
          sb(l | c, F() | 0 | h, d, f);
          l = f + (k << 3) | 0;
          j = Rc(2, 0, i | 0) | 0;
          sb(j | c, F() | 0 | h, d, l);
          l = l + (k << 3) | 0;
          j = Rc(3, 0, i | 0) | 0;
          sb(j | c, F() | 0 | h, d, l);
          l = l + (k << 3) | 0;
          j = Rc(4, 0, i | 0) | 0;
          sb(j | c, F() | 0 | h, d, l);
          l = l + (k << 3) | 0;
          j = Rc(5, 0, i | 0) | 0;
          sb(j | c, F() | 0 | h, d, l);
          j = Rc(6, 0, i | 0) | 0;
          sb(j | c, F() | 0 | h, d, l + (k << 3) | 0);
          return;
        }

        g = f + (k << 3) | 0;

        if ((j | 0) > 6) {
          j = f + 8 | 0;
          l = (g >>> 0 > j >>> 0 ? g : j) + -1 + (0 - f) | 0;
          Uc(f | 0, 0, l + 8 & -8 | 0) | 0;
          f = j + (l >>> 3 << 3) | 0;
        }

        l = Rc(2, 0, i | 0) | 0;
        sb(l | c, F() | 0 | h, d, f);
        l = f + (k << 3) | 0;
        j = Rc(3, 0, i | 0) | 0;
        sb(j | c, F() | 0 | h, d, l);
        l = l + (k << 3) | 0;
        j = Rc(4, 0, i | 0) | 0;
        sb(j | c, F() | 0 | h, d, l);
        l = l + (k << 3) | 0;
        j = Rc(5, 0, i | 0) | 0;
        sb(j | c, F() | 0 | h, d, l);
        j = Rc(6, 0, i | 0) | 0;
        sb(j | c, F() | 0 | h, d, l + (k << 3) | 0);
        return;
      }

      function tb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0;
        e = Qc(a | 0, b | 0, 45) | 0;
        F() | 0;

        if (!(ia(e & 127) | 0)) {
          e = 0;
          return e | 0;
        }

        e = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        e = e & 15;

        a: do { if (!e) { c = 0; }else {
          d = 1;

          while (1) {
            c = Qc(a | 0, b | 0, (15 - d | 0) * 3 | 0) | 0;
            F() | 0;
            c = c & 7;
            if (c | 0) { break a; }
            if (d >>> 0 < e >>> 0) { d = d + 1 | 0; }else {
              c = 0;
              break;
            }
          }
        } } while (0);

        e = (c | 0) == 0 & 1;
        return e | 0;
      }

      function ub(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        d = d & 15;

        if ((c | 0) < 16 & (d | 0) <= (c | 0)) {
          if ((d | 0) != (c | 0)) {
            e = Rc(c | 0, 0, 52) | 0;
            a = e | a;
            b = F() | 0 | b & -15728641;
            if ((d | 0) < (c | 0)) { do {
              e = Rc(7, 0, (14 - d | 0) * 3 | 0) | 0;
              d = d + 1 | 0;
              a = a & ~e;
              b = b & ~(F() | 0);
            } while ((d | 0) < (c | 0)); }
          }
        } else {
          b = 0;
          a = 0;
        }

        E(b | 0);
        return a | 0;
      }

      function vb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0;

        if (!d) {
          x = 0;
          return x | 0;
        }

        f = a;
        e = b[f >> 2] | 0;
        f = b[f + 4 >> 2] | 0;

        if (0 == 0 & (f & 15728640 | 0) == 0) {
          if ((d | 0) <= 0) {
            x = 0;
            return x | 0;
          }

          x = c;
          b[x >> 2] = e;
          b[x + 4 >> 2] = f;

          if ((d | 0) == 1) {
            x = 0;
            return x | 0;
          }

          e = 1;

          do {
            v = a + (e << 3) | 0;
            w = b[v + 4 >> 2] | 0;
            x = c + (e << 3) | 0;
            b[x >> 2] = b[v >> 2];
            b[x + 4 >> 2] = w;
            e = e + 1 | 0;
          } while ((e | 0) != (d | 0));

          e = 0;
          return e | 0;
        }

        v = d << 3;
        w = Ic(v) | 0;
        Tc(w | 0, a | 0, v | 0) | 0;
        u = Kc(d, 8) | 0;
        e = d;

        a: while (1) {
          h = w;
          l = b[h >> 2] | 0;
          h = b[h + 4 >> 2] | 0;
          s = Qc(l | 0, h | 0, 52) | 0;
          F() | 0;
          s = s & 15;
          t = s + -1 | 0;
          r = (e | 0) > 0;

          b: do { if (r) {
            q = ((e | 0) < 0) << 31 >> 31;
            o = Rc(t | 0, 0, 52) | 0;
            p = F() | 0;

            if (t >>> 0 > 15) {
              f = 0;
              a = l;
              d = h;

              while (1) {
                if (!((a | 0) == 0 & (d | 0) == 0)) {
                  g = Qc(a | 0, d | 0, 52) | 0;
                  F() | 0;
                  g = g & 15;
                  i = (g | 0) < (t | 0);
                  g = (g | 0) == (t | 0);
                  k = i ? 0 : g ? a : 0;
                  a = i ? 0 : g ? d : 0;
                  d = Pc(k | 0, a | 0, e | 0, q | 0) | 0;
                  F() | 0;
                  g = u + (d << 3) | 0;
                  i = g;
                  j = b[i >> 2] | 0;
                  i = b[i + 4 >> 2] | 0;
                  if ((j | 0) == 0 & (i | 0) == 0) { d = k; }else {
                    o = 0;
                    n = d;
                    m = j;
                    d = k;
                    j = g;

                    while (1) {
                      if ((o | 0) > (e | 0)) {
                        x = 33;
                        break a;
                      }

                      if ((m | 0) == (d | 0) & (i & -117440513 | 0) == (a | 0)) {
                        g = Qc(m | 0, i | 0, 56) | 0;
                        F() | 0;
                        g = g & 7;

                        if ((g | 0) == 7) {
                          x = 38;
                          break a;
                        }

                        p = Rc(g + 1 | 0, 0, 56) | 0;
                        a = F() | 0 | a & -117440513;
                        b[j >> 2] = 0;
                        b[j + 4 >> 2] = 0;
                        j = n;
                        d = p | d;
                      } else { j = (n + 1 | 0) % (e | 0) | 0; }

                      g = u + (j << 3) | 0;
                      i = g;
                      m = b[i >> 2] | 0;
                      i = b[i + 4 >> 2] | 0;
                      if ((m | 0) == 0 & (i | 0) == 0) { break; }else {
                        o = o + 1 | 0;
                        n = j;
                        j = g;
                      }
                    }
                  }
                  p = g;
                  b[p >> 2] = d;
                  b[p + 4 >> 2] = a;
                }

                f = f + 1 | 0;
                if ((f | 0) >= (e | 0)) { break b; }
                d = w + (f << 3) | 0;
                a = b[d >> 2] | 0;
                d = b[d + 4 >> 2] | 0;
              }
            }

            f = 0;
            a = l;
            d = h;

            while (1) {
              if (!((a | 0) == 0 & (d | 0) == 0)) {
                i = Qc(a | 0, d | 0, 52) | 0;
                F() | 0;
                i = i & 15;

                if ((i | 0) >= (t | 0)) {
                  if ((i | 0) != (t | 0)) {
                    a = a | o;
                    d = d & -15728641 | p;

                    if (i >>> 0 >= s >>> 0) {
                      g = t;

                      do {
                        n = Rc(7, 0, (14 - g | 0) * 3 | 0) | 0;
                        g = g + 1 | 0;
                        a = n | a;
                        d = F() | 0 | d;
                      } while (g >>> 0 < i >>> 0);
                    }
                  }
                } else {
                  a = 0;
                  d = 0;
                }

                i = Pc(a | 0, d | 0, e | 0, q | 0) | 0;
                F() | 0;
                g = u + (i << 3) | 0;
                j = g;
                k = b[j >> 2] | 0;
                j = b[j + 4 >> 2] | 0;

                if (!((k | 0) == 0 & (j | 0) == 0)) {
                  n = 0;
                  m = k;
                  k = g;

                  while (1) {
                    if ((n | 0) > (e | 0)) {
                      x = 33;
                      break a;
                    }

                    if ((m | 0) == (a | 0) & (j & -117440513 | 0) == (d | 0)) {
                      g = Qc(m | 0, j | 0, 56) | 0;
                      F() | 0;
                      g = g & 7;

                      if ((g | 0) == 7) {
                        x = 38;
                        break a;
                      }

                      m = Rc(g + 1 | 0, 0, 56) | 0;
                      d = F() | 0 | d & -117440513;
                      b[k >> 2] = 0;
                      b[k + 4 >> 2] = 0;
                      a = m | a;
                    } else { i = (i + 1 | 0) % (e | 0) | 0; }

                    g = u + (i << 3) | 0;
                    j = g;
                    m = b[j >> 2] | 0;
                    j = b[j + 4 >> 2] | 0;
                    if ((m | 0) == 0 & (j | 0) == 0) { break; }else {
                      n = n + 1 | 0;
                      k = g;
                    }
                  }
                }

                n = g;
                b[n >> 2] = a;
                b[n + 4 >> 2] = d;
              }

              f = f + 1 | 0;
              if ((f | 0) >= (e | 0)) { break b; }
              d = w + (f << 3) | 0;
              a = b[d >> 2] | 0;
              d = b[d + 4 >> 2] | 0;
            }
          } } while (0);

          if ((e + 5 | 0) >>> 0 < 11) {
            x = 84;
            break;
          }

          q = Ic(((e | 0) / 6 | 0) << 3) | 0;

          c: do { if (r) {
            o = 0;
            n = 0;

            do {
              i = u + (o << 3) | 0;
              a = i;
              f = b[a >> 2] | 0;
              a = b[a + 4 >> 2] | 0;

              if (!((f | 0) == 0 & (a | 0) == 0)) {
                j = Qc(f | 0, a | 0, 56) | 0;
                F() | 0;
                j = j & 7;
                d = j + 1 | 0;
                k = a & -117440513;
                p = Qc(f | 0, a | 0, 45) | 0;
                F() | 0;

                d: do { if (ia(p & 127) | 0) {
                  m = Qc(f | 0, a | 0, 52) | 0;
                  F() | 0;
                  m = m & 15;

                  if (m | 0) {
                    g = 1;

                    while (1) {
                      p = Rc(7, 0, (15 - g | 0) * 3 | 0) | 0;
                      if (!((f & p | 0) == 0 & (k & (F() | 0) | 0) == 0)) { break d; }
                      if (g >>> 0 < m >>> 0) { g = g + 1 | 0; }else { break; }
                    }
                  }

                  a = Rc(d | 0, 0, 56) | 0;
                  f = a | f;
                  a = F() | 0 | k;
                  d = i;
                  b[d >> 2] = f;
                  b[d + 4 >> 2] = a;
                  d = j + 2 | 0;
                } } while (0);

                if ((d | 0) == 7) {
                  p = q + (n << 3) | 0;
                  b[p >> 2] = f;
                  b[p + 4 >> 2] = a & -117440513;
                  n = n + 1 | 0;
                }
              }

              o = o + 1 | 0;
            } while ((o | 0) != (e | 0));

            if (r) {
              p = ((e | 0) < 0) << 31 >> 31;
              m = Rc(t | 0, 0, 52) | 0;
              o = F() | 0;

              if (t >>> 0 > 15) {
                a = 0;
                f = 0;

                while (1) {
                  do { if (!((l | 0) == 0 & (h | 0) == 0)) {
                    j = Qc(l | 0, h | 0, 52) | 0;
                    F() | 0;
                    j = j & 15;
                    g = (j | 0) < (t | 0);
                    j = (j | 0) == (t | 0);
                    i = g ? 0 : j ? l : 0;
                    j = g ? 0 : j ? h : 0;
                    g = Pc(i | 0, j | 0, e | 0, p | 0) | 0;
                    F() | 0;
                    d = 0;

                    while (1) {
                      if ((d | 0) > (e | 0)) {
                        x = 83;
                        break a;
                      }

                      s = u + (g << 3) | 0;
                      k = b[s + 4 >> 2] | 0;

                      if ((k & -117440513 | 0) == (j | 0) ? (b[s >> 2] | 0) == (i | 0) : 0) {
                        x = 55;
                        break;
                      }

                      g = (g + 1 | 0) % (e | 0) | 0;
                      s = u + (g << 3) | 0;
                      if ((b[s >> 2] | 0) == (i | 0) ? (b[s + 4 >> 2] | 0) == (j | 0) : 0) { break; }else { d = d + 1 | 0; }
                    }

                    if ((x | 0) == 55 ? (x = 0, 0 == 0 & (k & 117440512 | 0) == 100663296) : 0) { break; }
                    s = c + (f << 3) | 0;
                    b[s >> 2] = l;
                    b[s + 4 >> 2] = h;
                    f = f + 1 | 0;
                  } } while (0);

                  a = a + 1 | 0;

                  if ((a | 0) >= (e | 0)) {
                    e = n;
                    break c;
                  }

                  h = w + (a << 3) | 0;
                  l = b[h >> 2] | 0;
                  h = b[h + 4 >> 2] | 0;
                }
              }

              a = 0;
              f = 0;

              while (1) {
                do { if (!((l | 0) == 0 & (h | 0) == 0)) {
                  j = Qc(l | 0, h | 0, 52) | 0;
                  F() | 0;
                  j = j & 15;
                  if ((j | 0) >= (t | 0)) {
                    if ((j | 0) != (t | 0)) {
                      d = l | m;
                      g = h & -15728641 | o;
                      if (j >>> 0 < s >>> 0) { j = g; }else {
                        i = t;

                        do {
                          r = Rc(7, 0, (14 - i | 0) * 3 | 0) | 0;
                          i = i + 1 | 0;
                          d = r | d;
                          g = F() | 0 | g;
                        } while (i >>> 0 < j >>> 0);

                        j = g;
                      }
                    } else {
                      d = l;
                      j = h;
                    }
                  } else {
                    d = 0;
                    j = 0;
                  }
                  i = Pc(d | 0, j | 0, e | 0, p | 0) | 0;
                  F() | 0;
                  g = 0;

                  while (1) {
                    if ((g | 0) > (e | 0)) {
                      x = 83;
                      break a;
                    }

                    r = u + (i << 3) | 0;
                    k = b[r + 4 >> 2] | 0;

                    if ((k & -117440513 | 0) == (j | 0) ? (b[r >> 2] | 0) == (d | 0) : 0) {
                      x = 78;
                      break;
                    }

                    i = (i + 1 | 0) % (e | 0) | 0;
                    r = u + (i << 3) | 0;
                    if ((b[r >> 2] | 0) == (d | 0) ? (b[r + 4 >> 2] | 0) == (j | 0) : 0) { break; }else { g = g + 1 | 0; }
                  }

                  if ((x | 0) == 78 ? (x = 0, 0 == 0 & (k & 117440512 | 0) == 100663296) : 0) { break; }
                  r = c + (f << 3) | 0;
                  b[r >> 2] = l;
                  b[r + 4 >> 2] = h;
                  f = f + 1 | 0;
                } } while (0);

                a = a + 1 | 0;

                if ((a | 0) >= (e | 0)) {
                  e = n;
                  break c;
                }

                h = w + (a << 3) | 0;
                l = b[h >> 2] | 0;
                h = b[h + 4 >> 2] | 0;
              }
            } else {
              f = 0;
              e = n;
            }
          } else {
            f = 0;
            e = 0;
          } } while (0);

          Uc(u | 0, 0, v | 0) | 0;
          Tc(w | 0, q | 0, e << 3 | 0) | 0;
          Jc(q);
          if (!e) { break; }else { c = c + (f << 3) | 0; }
        }

        if ((x | 0) == 33) {
          Jc(w);
          Jc(u);
          x = -1;
          return x | 0;
        } else if ((x | 0) == 38) {
          Jc(w);
          Jc(u);
          x = -2;
          return x | 0;
        } else if ((x | 0) == 83) {
          Jc(q);
          Jc(w);
          Jc(u);
          x = -1;
          return x | 0;
        } else if ((x | 0) == 84) { Tc(c | 0, w | 0, e << 3 | 0) | 0; }

        Jc(w);
        Jc(u);
        x = 0;
        return x | 0;
      }

      function wb(a, c, d, e, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;

        if ((c | 0) <= 0) {
          f = 0;
          return f | 0;
        }

        if ((f | 0) >= 16) {
          g = 0;

          while (1) {
            l = a + (g << 3) | 0;

            if (!((b[l >> 2] | 0) == 0 & (b[l + 4 >> 2] | 0) == 0)) {
              g = 14;
              break;
            }

            g = g + 1 | 0;

            if ((g | 0) >= (c | 0)) {
              h = 0;
              g = 16;
              break;
            }
          }

          if ((g | 0) == 14) { return ((e | 0) > 0 ? -2 : -1) | 0; }else if ((g | 0) == 16) { return h | 0; }
        }

        g = 0;
        l = 0;

        a: while (1) {
          k = a + (l << 3) | 0;
          i = k;
          h = b[i >> 2] | 0;
          i = b[i + 4 >> 2] | 0;

          do { if (!((h | 0) == 0 & (i | 0) == 0)) {
            if ((g | 0) >= (e | 0)) {
              h = -1;
              g = 16;
              break a;
            }

            j = Qc(h | 0, i | 0, 52) | 0;
            F() | 0;
            j = j & 15;

            if ((j | 0) > (f | 0)) {
              h = -2;
              g = 16;
              break a;
            }

            if ((j | 0) == (f | 0)) {
              k = d + (g << 3) | 0;
              b[k >> 2] = h;
              b[k + 4 >> 2] = i;
              g = g + 1 | 0;
              break;
            }

            h = (hc(7, f - j | 0) | 0) + g | 0;

            if ((h | 0) > (e | 0)) {
              h = -1;
              g = 16;
              break a;
            }

            sb(b[k >> 2] | 0, b[k + 4 >> 2] | 0, f, d + (g << 3) | 0);
            g = h;
          } } while (0);

          l = l + 1 | 0;

          if ((l | 0) >= (c | 0)) {
            h = 0;
            g = 16;
            break;
          }
        }

        if ((g | 0) == 16) { return h | 0; }
        return 0;
      }

      function xb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0;

        if ((c | 0) <= 0) {
          d = 0;
          return d | 0;
        }

        if ((d | 0) >= 16) {
          e = 0;

          while (1) {
            h = a + (e << 3) | 0;

            if (!((b[h >> 2] | 0) == 0 & (b[h + 4 >> 2] | 0) == 0)) {
              e = -1;
              f = 13;
              break;
            }

            e = e + 1 | 0;

            if ((e | 0) >= (c | 0)) {
              e = 0;
              f = 13;
              break;
            }
          }

          if ((f | 0) == 13) { return e | 0; }
        }

        e = 0;
        h = 0;

        a: while (1) {
          f = a + (h << 3) | 0;
          g = b[f >> 2] | 0;
          f = b[f + 4 >> 2] | 0;

          do { if (!((g | 0) == 0 & (f | 0) == 0)) {
            f = Qc(g | 0, f | 0, 52) | 0;
            F() | 0;
            f = f & 15;

            if ((f | 0) > (d | 0)) {
              e = -1;
              f = 13;
              break a;
            }

            if ((f | 0) == (d | 0)) {
              e = e + 1 | 0;
              break;
            } else {
              e = (hc(7, d - f | 0) | 0) + e | 0;
              break;
            }
          } } while (0);

          h = h + 1 | 0;

          if ((h | 0) >= (c | 0)) {
            f = 13;
            break;
          }
        }

        if ((f | 0) == 13) { return e | 0; }
        return 0;
      }

      function yb(a, b) {
        a = a | 0;
        b = b | 0;
        b = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        return b & 1 | 0;
      }

      function zb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0;
        e = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        e = e & 15;

        if (!e) {
          e = 0;
          return e | 0;
        }

        d = 1;

        while (1) {
          c = Qc(a | 0, b | 0, (15 - d | 0) * 3 | 0) | 0;
          F() | 0;
          c = c & 7;

          if (c | 0) {
            d = 5;
            break;
          }

          if (d >>> 0 < e >>> 0) { d = d + 1 | 0; }else {
            c = 0;
            d = 5;
            break;
          }
        }

        if ((d | 0) == 5) { return c | 0; }
        return 0;
      }

      function Ab(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        i = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        i = i & 15;

        if (!i) {
          h = b;
          i = a;
          E(h | 0);
          return i | 0;
        }

        h = 1;
        c = 0;

        while (1) {
          f = (15 - h | 0) * 3 | 0;
          d = Rc(7, 0, f | 0) | 0;
          e = F() | 0;
          g = Qc(a | 0, b | 0, f | 0) | 0;
          F() | 0;
          f = Rc(Ka(g & 7) | 0, 0, f | 0) | 0;
          g = F() | 0;
          a = f | a & ~d;
          b = g | b & ~e;

          a: do { if (!c) { if (!((f & d | 0) == 0 & (g & e | 0) == 0)) {
            d = Qc(a | 0, b | 0, 52) | 0;
            F() | 0;
            d = d & 15;
            if (!d) { c = 1; }else {
              c = 1;

              b: while (1) {
                g = Qc(a | 0, b | 0, (15 - c | 0) * 3 | 0) | 0;
                F() | 0;

                switch (g & 7) {
                  case 1:
                    break b;

                  case 0:
                    break;

                  default:
                    {
                      c = 1;
                      break a;
                    }
                }

                if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
                  c = 1;
                  break a;
                }
              }

              c = 1;

              while (1) {
                g = (15 - c | 0) * 3 | 0;
                e = Qc(a | 0, b | 0, g | 0) | 0;
                F() | 0;
                f = Rc(7, 0, g | 0) | 0;
                b = b & ~(F() | 0);
                g = Rc(Ka(e & 7) | 0, 0, g | 0) | 0;
                a = a & ~f | g;
                b = b | (F() | 0);
                if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
                  c = 1;
                  break;
                }
              }
            }
          } else { c = 0; } } } while (0);

          if (h >>> 0 < i >>> 0) { h = h + 1 | 0; }else { break; }
        }

        E(b | 0);
        return a | 0;
      }

      function Bb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;
        d = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        d = d & 15;

        if (!d) {
          c = b;
          d = a;
          E(c | 0);
          return d | 0;
        }

        c = 1;

        while (1) {
          f = (15 - c | 0) * 3 | 0;
          g = Qc(a | 0, b | 0, f | 0) | 0;
          F() | 0;
          e = Rc(7, 0, f | 0) | 0;
          b = b & ~(F() | 0);
          f = Rc(Ka(g & 7) | 0, 0, f | 0) | 0;
          a = f | a & ~e;
          b = F() | 0 | b;
          if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else { break; }
        }

        E(b | 0);
        return a | 0;
      }

      function Cb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        i = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        i = i & 15;

        if (!i) {
          h = b;
          i = a;
          E(h | 0);
          return i | 0;
        }

        h = 1;
        c = 0;

        while (1) {
          f = (15 - h | 0) * 3 | 0;
          d = Rc(7, 0, f | 0) | 0;
          e = F() | 0;
          g = Qc(a | 0, b | 0, f | 0) | 0;
          F() | 0;
          f = Rc(La(g & 7) | 0, 0, f | 0) | 0;
          g = F() | 0;
          a = f | a & ~d;
          b = g | b & ~e;

          a: do { if (!c) { if (!((f & d | 0) == 0 & (g & e | 0) == 0)) {
            d = Qc(a | 0, b | 0, 52) | 0;
            F() | 0;
            d = d & 15;
            if (!d) { c = 1; }else {
              c = 1;

              b: while (1) {
                g = Qc(a | 0, b | 0, (15 - c | 0) * 3 | 0) | 0;
                F() | 0;

                switch (g & 7) {
                  case 1:
                    break b;

                  case 0:
                    break;

                  default:
                    {
                      c = 1;
                      break a;
                    }
                }

                if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
                  c = 1;
                  break a;
                }
              }

              c = 1;

              while (1) {
                e = (15 - c | 0) * 3 | 0;
                f = Rc(7, 0, e | 0) | 0;
                g = b & ~(F() | 0);
                b = Qc(a | 0, b | 0, e | 0) | 0;
                F() | 0;
                b = Rc(La(b & 7) | 0, 0, e | 0) | 0;
                a = a & ~f | b;
                b = g | (F() | 0);
                if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
                  c = 1;
                  break;
                }
              }
            }
          } else { c = 0; } } } while (0);

          if (h >>> 0 < i >>> 0) { h = h + 1 | 0; }else { break; }
        }

        E(b | 0);
        return a | 0;
      }

      function Db(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;
        d = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        d = d & 15;

        if (!d) {
          c = b;
          d = a;
          E(c | 0);
          return d | 0;
        }

        c = 1;

        while (1) {
          g = (15 - c | 0) * 3 | 0;
          f = Rc(7, 0, g | 0) | 0;
          e = b & ~(F() | 0);
          b = Qc(a | 0, b | 0, g | 0) | 0;
          F() | 0;
          b = Rc(La(b & 7) | 0, 0, g | 0) | 0;
          a = b | a & ~f;
          b = F() | 0 | e;
          if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else { break; }
        }

        E(b | 0);
        return a | 0;
      }

      function Eb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        j = R;
        R = R + 64 | 0;
        i = j + 40 | 0;
        e = j + 24 | 0;
        f = j + 12 | 0;
        g = j;
        Rc(c | 0, 0, 52) | 0;
        d = F() | 0 | 134225919;

        if (!c) {
          if ((b[a + 4 >> 2] | 0) > 2) {
            h = 0;
            i = 0;
            E(h | 0);
            R = j;
            return i | 0;
          }

          if ((b[a + 8 >> 2] | 0) > 2) {
            h = 0;
            i = 0;
            E(h | 0);
            R = j;
            return i | 0;
          }

          if ((b[a + 12 >> 2] | 0) > 2) {
            h = 0;
            i = 0;
            E(h | 0);
            R = j;
            return i | 0;
          }

          Rc(ka(a) | 0, 0, 45) | 0;
          h = F() | 0 | d;
          i = -1;
          E(h | 0);
          R = j;
          return i | 0;
        }
        b[i >> 2] = b[a >> 2];
        b[i + 4 >> 2] = b[a + 4 >> 2];
        b[i + 8 >> 2] = b[a + 8 >> 2];
        b[i + 12 >> 2] = b[a + 12 >> 2];
        h = i + 4 | 0;

        if ((c | 0) > 0) {
          a = -1;

          while (1) {
            b[e >> 2] = b[h >> 2];
            b[e + 4 >> 2] = b[h + 4 >> 2];
            b[e + 8 >> 2] = b[h + 8 >> 2];

            if (!(c & 1)) {
              Ea(h);
              b[f >> 2] = b[h >> 2];
              b[f + 4 >> 2] = b[h + 4 >> 2];
              b[f + 8 >> 2] = b[h + 8 >> 2];
              Ga(f);
            } else {
              Da(h);
              b[f >> 2] = b[h >> 2];
              b[f + 4 >> 2] = b[h + 4 >> 2];
              b[f + 8 >> 2] = b[h + 8 >> 2];
              Fa(f);
            }

            Aa(e, f, g);
            xa(g);
            l = (15 - c | 0) * 3 | 0;
            k = Rc(7, 0, l | 0) | 0;
            d = d & ~(F() | 0);
            l = Rc(Ca(g) | 0, 0, l | 0) | 0;
            a = l | a & ~k;
            d = F() | 0 | d;
            if ((c | 0) > 1) { c = c + -1 | 0; }else { break; }
          }
        } else { a = -1; }

        a: do { if (((b[h >> 2] | 0) <= 2 ? (b[i + 8 >> 2] | 0) <= 2 : 0) ? (b[i + 12 >> 2] | 0) <= 2 : 0) {
          e = ka(i) | 0;
          c = Rc(e | 0, 0, 45) | 0;
          c = c | a;
          a = F() | 0 | d & -1040385;
          g = la(i) | 0;

          if (!(ia(e) | 0)) {
            if ((g | 0) <= 0) { break; }
            f = 0;

            while (1) {
              e = Qc(c | 0, a | 0, 52) | 0;
              F() | 0;
              e = e & 15;

              if (e) {
                d = 1;

                while (1) {
                  l = (15 - d | 0) * 3 | 0;
                  i = Qc(c | 0, a | 0, l | 0) | 0;
                  F() | 0;
                  k = Rc(7, 0, l | 0) | 0;
                  a = a & ~(F() | 0);
                  l = Rc(Ka(i & 7) | 0, 0, l | 0) | 0;
                  c = c & ~k | l;
                  a = a | (F() | 0);
                  if (d >>> 0 < e >>> 0) { d = d + 1 | 0; }else { break; }
                }
              }

              f = f + 1 | 0;
              if ((f | 0) == (g | 0)) { break a; }
            }
          }

          f = Qc(c | 0, a | 0, 52) | 0;
          F() | 0;
          f = f & 15;

          b: do { if (f) {
            d = 1;

            c: while (1) {
              l = Qc(c | 0, a | 0, (15 - d | 0) * 3 | 0) | 0;
              F() | 0;

              switch (l & 7) {
                case 1:
                  break c;

                case 0:
                  break;

                default:
                  break b;
              }

              if (d >>> 0 < f >>> 0) { d = d + 1 | 0; }else { break b; }
            }

            if (ma(e, b[i >> 2] | 0) | 0) {
              d = 1;

              while (1) {
                i = (15 - d | 0) * 3 | 0;
                k = Rc(7, 0, i | 0) | 0;
                l = a & ~(F() | 0);
                a = Qc(c | 0, a | 0, i | 0) | 0;
                F() | 0;
                a = Rc(La(a & 7) | 0, 0, i | 0) | 0;
                c = c & ~k | a;
                a = l | (F() | 0);
                if (d >>> 0 < f >>> 0) { d = d + 1 | 0; }else { break; }
              }
            } else {
              d = 1;

              while (1) {
                l = (15 - d | 0) * 3 | 0;
                i = Qc(c | 0, a | 0, l | 0) | 0;
                F() | 0;
                k = Rc(7, 0, l | 0) | 0;
                a = a & ~(F() | 0);
                l = Rc(Ka(i & 7) | 0, 0, l | 0) | 0;
                c = c & ~k | l;
                a = a | (F() | 0);
                if (d >>> 0 < f >>> 0) { d = d + 1 | 0; }else { break; }
              }
            }
          } } while (0);

          if ((g | 0) > 0) {
            d = 0;

            do {
              c = Ab(c, a) | 0;
              a = F() | 0;
              d = d + 1 | 0;
            } while ((d | 0) != (g | 0));
          }
        } else {
          c = 0;
          a = 0;
        } } while (0);

        k = a;
        l = c;
        E(k | 0);
        R = j;
        return l | 0;
      }

      function Fb(a) {
        a = a | 0;
        return (a | 0) % 2 | 0 | 0;
      }

      function Gb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        e = R;
        R = R + 16 | 0;
        d = e;

        if ((c >>> 0 <= 15 ? !((b[a + 4 >> 2] & 2146435072 | 0) == 2146435072) : 0) ? !((b[a + 8 + 4 >> 2] & 2146435072 | 0) == 2146435072) : 0) {
          Ta(a, c, d);
          c = Eb(d, c) | 0;
          a = F() | 0;
        } else {
          a = 0;
          c = 0;
        }

        E(a | 0);
        R = e;
        return c | 0;
      }

      function Hb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0;
        f = d + 4 | 0;
        g = Qc(a | 0, c | 0, 52) | 0;
        F() | 0;
        g = g & 15;
        h = Qc(a | 0, c | 0, 45) | 0;
        F() | 0;
        e = (g | 0) == 0;

        if (!(ia(h & 127) | 0)) {
          if (e) {
            h = 0;
            return h | 0;
          }

          if ((b[f >> 2] | 0) == 0 ? (b[d + 8 >> 2] | 0) == 0 : 0) { e = (b[d + 12 >> 2] | 0) != 0 & 1; }else { e = 1; }
        } else if (e) {
          h = 1;
          return h | 0;
        } else { e = 1; }

        d = 1;

        while (1) {
          if (!(d & 1)) { Ga(f); }else { Fa(f); }
          h = Qc(a | 0, c | 0, (15 - d | 0) * 3 | 0) | 0;
          F() | 0;
          Ha(f, h & 7);
          if (d >>> 0 < g >>> 0) { d = d + 1 | 0; }else { break; }
        }

        return e | 0;
      }

      function Ib(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        l = R;
        R = R + 16 | 0;
        j = l;
        k = Qc(a | 0, c | 0, 45) | 0;
        F() | 0;
        k = k & 127;

        a: do { if ((ia(k) | 0) != 0 ? (g = Qc(a | 0, c | 0, 52) | 0, F() | 0, g = g & 15, (g | 0) != 0) : 0) {
          e = 1;

          b: while (1) {
            i = Qc(a | 0, c | 0, (15 - e | 0) * 3 | 0) | 0;
            F() | 0;

            switch (i & 7) {
              case 5:
                break b;

              case 0:
                break;

              default:
                {
                  e = c;
                  break a;
                }
            }

            if (e >>> 0 < g >>> 0) { e = e + 1 | 0; }else {
              e = c;
              break a;
            }
          }

          f = 1;
          e = c;

          while (1) {
            c = (15 - f | 0) * 3 | 0;
            h = Rc(7, 0, c | 0) | 0;
            i = e & ~(F() | 0);
            e = Qc(a | 0, e | 0, c | 0) | 0;
            F() | 0;
            e = Rc(La(e & 7) | 0, 0, c | 0) | 0;
            a = a & ~h | e;
            e = i | (F() | 0);
            if (f >>> 0 < g >>> 0) { f = f + 1 | 0; }else { break; }
          }
        } else { e = c; } } while (0);

        i = 7728 + (k * 28 | 0) | 0;
        b[d >> 2] = b[i >> 2];
        b[d + 4 >> 2] = b[i + 4 >> 2];
        b[d + 8 >> 2] = b[i + 8 >> 2];
        b[d + 12 >> 2] = b[i + 12 >> 2];

        if (!(Hb(a, e, d) | 0)) {
          R = l;
          return;
        }

        h = d + 4 | 0;
        b[j >> 2] = b[h >> 2];
        b[j + 4 >> 2] = b[h + 4 >> 2];
        b[j + 8 >> 2] = b[h + 8 >> 2];
        g = Qc(a | 0, e | 0, 52) | 0;
        F() | 0;
        i = g & 15;
        if (!(g & 1)) { g = i; }else {
          Ga(h);
          g = i + 1 | 0;
        }
        if (!(ia(k) | 0)) { e = 0; }else {
          c: do { if (!i) { e = 0; }else {
            c = 1;

            while (1) {
              f = Qc(a | 0, e | 0, (15 - c | 0) * 3 | 0) | 0;
              F() | 0;
              f = f & 7;

              if (f | 0) {
                e = f;
                break c;
              }

              if (c >>> 0 < i >>> 0) { c = c + 1 | 0; }else {
                e = 0;
                break;
              }
            }
          } } while (0);

          e = (e | 0) == 4 & 1;
        }

        if (!(Za(d, g, e, 0) | 0)) {
          if ((g | 0) != (i | 0)) {
            b[h >> 2] = b[j >> 2];
            b[h + 4 >> 2] = b[j + 4 >> 2];
            b[h + 8 >> 2] = b[j + 8 >> 2];
          }
        } else {
          if (ia(k) | 0) { do {} while ((Za(d, g, 0, 0) | 0) != 0); }
          if ((g | 0) != (i | 0)) { Ea(h); }
        }

        R = l;
        return;
      }

      function Jb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = R;
        R = R + 16 | 0;
        e = d;
        Ib(a, b, e);
        b = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        Wa(e, b & 15, c);
        R = d;
        return;
      }

      function Kb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;
        h = R;
        R = R + 16 | 0;
        f = h;
        Ib(a, b, f);
        g = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        g = g & 15;
        e = Qc(a | 0, b | 0, 45) | 0;
        F() | 0;

        if (!(ia(e & 127) | 0)) {
          b = 0;
          $a(f, g, b, c);
          R = h;
          return;
        }

        a: do { if (!g) { d = 0; }else {
          e = 1;

          while (1) {
            d = Qc(a | 0, b | 0, (15 - e | 0) * 3 | 0) | 0;
            F() | 0;
            d = d & 7;
            if (d | 0) { break a; }
            if (e >>> 0 < g >>> 0) { e = e + 1 | 0; }else {
              d = 0;
              break;
            }
          }
        } } while (0);

        b = (d | 0) == 0 & 1;
        $a(f, g, b, c);
        R = h;
        return;
      }

      function Lb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0;
        d = Qc(a | 0, b | 0, 45) | 0;
        F() | 0;

        if (!(ia(d & 127) | 0)) {
          d = 2;
          return d | 0;
        }

        d = Qc(a | 0, b | 0, 52) | 0;
        F() | 0;
        d = d & 15;

        if (!d) {
          d = 5;
          return d | 0;
        }

        c = 1;

        while (1) {
          e = Rc(7, 0, (15 - c | 0) * 3 | 0) | 0;

          if (!((e & a | 0) == 0 & ((F() | 0) & b | 0) == 0)) {
            c = 2;
            a = 6;
            break;
          }

          if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
            c = 5;
            a = 6;
            break;
          }
        }

        if ((a | 0) == 6) { return c | 0; }
        return 0;
      }

      function Mb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
        m = R;
        R = R + 128 | 0;
        k = m + 112 | 0;
        g = m + 96 | 0;
        l = m;
        f = Qc(a | 0, c | 0, 52) | 0;
        F() | 0;
        i = f & 15;
        b[k >> 2] = i;
        h = Qc(a | 0, c | 0, 45) | 0;
        F() | 0;
        h = h & 127;

        a: do { if (ia(h) | 0) {
          if (i | 0) {
            e = 1;

            while (1) {
              j = Rc(7, 0, (15 - e | 0) * 3 | 0) | 0;

              if (!((j & a | 0) == 0 & ((F() | 0) & c | 0) == 0)) {
                f = 0;
                break a;
              }

              if (e >>> 0 < i >>> 0) { e = e + 1 | 0; }else { break; }
            }
          }

          if (!(f & 1)) {
            j = Rc(i + 1 | 0, 0, 52) | 0;
            l = F() | 0 | c & -15728641;
            k = Rc(7, 0, (14 - i | 0) * 3 | 0) | 0;
            Mb((j | a) & ~k, l & ~(F() | 0), d);
            R = m;
            return;
          } else { f = 1; }
        } else { f = 0; } } while (0);

        Ib(a, c, g);

        if (f) {
          Ya(g, k, l);
          j = 5;
        } else {
          ab(g, k, l);
          j = 6;
        }

        b: do { if (ia(h) | 0) {
          if (!i) { e = 20; }else {
            e = 1;

            while (1) {
              h = Rc(7, 0, (15 - e | 0) * 3 | 0) | 0;

              if (!((h & a | 0) == 0 & ((F() | 0) & c | 0) == 0)) {
                e = 8;
                break b;
              }

              if (e >>> 0 < i >>> 0) { e = e + 1 | 0; }else {
                e = 20;
                break;
              }
            }
          }
        } else { e = 8; } } while (0);

        Uc(d | 0, -1, e | 0) | 0;

        if (f) {
          f = 0;

          do {
            g = l + (f << 4) | 0;
            _a(g, b[k >> 2] | 0) | 0;
            g = b[g >> 2] | 0;
            e = 0;

            while (1) {
              h = d + (e << 2) | 0;
              i = b[h >> 2] | 0;
              if ((i | 0) == -1 | (i | 0) == (g | 0)) { break; }else { e = e + 1 | 0; }
            }

            b[h >> 2] = g;
            f = f + 1 | 0;
          } while ((f | 0) != (j | 0));
        } else {
          f = 0;

          do {
            g = l + (f << 4) | 0;
            Za(g, b[k >> 2] | 0, 0, 1) | 0;
            g = b[g >> 2] | 0;
            e = 0;

            while (1) {
              h = d + (e << 2) | 0;
              i = b[h >> 2] | 0;
              if ((i | 0) == -1 | (i | 0) == (g | 0)) { break; }else { e = e + 1 | 0; }
            }

            b[h >> 2] = g;
            f = f + 1 | 0;
          } while ((f | 0) != (j | 0));
        }

        R = m;
        return;
      }

      function Nb() {
        return 12;
      }

      function Ob(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        Rc(a | 0, 0, 52) | 0;
        i = F() | 0 | 134225919;

        if ((a | 0) < 1) {
          e = 0;
          d = 0;

          do {
            if (ia(e) | 0) {
              Rc(e | 0, 0, 45) | 0;
              h = i | (F() | 0);
              a = c + (d << 3) | 0;
              b[a >> 2] = -1;
              b[a + 4 >> 2] = h;
              d = d + 1 | 0;
            }

            e = e + 1 | 0;
          } while ((e | 0) != 122);

          return;
        }

        h = 0;
        d = 0;

        do {
          if (ia(h) | 0) {
            Rc(h | 0, 0, 45) | 0;
            e = 1;
            f = -1;
            g = i | (F() | 0);

            while (1) {
              j = Rc(7, 0, (15 - e | 0) * 3 | 0) | 0;
              f = f & ~j;
              g = g & ~(F() | 0);
              if ((e | 0) == (a | 0)) { break; }else { e = e + 1 | 0; }
            }

            j = c + (d << 3) | 0;
            b[j >> 2] = f;
            b[j + 4 >> 2] = g;
            d = d + 1 | 0;
          }

          h = h + 1 | 0;
        } while ((h | 0) != 122);

        return;
      }

      function Pb(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;
        i = R;
        R = R + 64 | 0;
        h = i;

        if ((a | 0) == (d | 0) & (c | 0) == (e | 0) | (0 != 0 | (c & 2013265920 | 0) != 134217728 | (0 != 0 | (e & 2013265920 | 0) != 134217728))) {
          h = 0;
          R = i;
          return h | 0;
        }

        f = Qc(a | 0, c | 0, 52) | 0;
        F() | 0;
        f = f & 15;
        g = Qc(d | 0, e | 0, 52) | 0;
        F() | 0;

        if ((f | 0) != (g & 15 | 0)) {
          h = 0;
          R = i;
          return h | 0;
        }

        g = f + -1 | 0;

        if (f >>> 0 > 1 ? (k = qb(a, c, g) | 0, j = F() | 0, g = qb(d, e, g) | 0, (k | 0) == (g | 0) & (j | 0) == (F() | 0)) : 0) {
          g = (f ^ 15) * 3 | 0;
          f = Qc(a | 0, c | 0, g | 0) | 0;
          F() | 0;
          f = f & 7;
          g = Qc(d | 0, e | 0, g | 0) | 0;
          F() | 0;
          g = g & 7;

          if ((f | 0) == 0 | (g | 0) == 0) {
            k = 1;
            R = i;
            return k | 0;
          }

          if ((b[21136 + (f << 2) >> 2] | 0) == (g | 0)) {
            k = 1;
            R = i;
            return k | 0;
          }

          if ((b[21168 + (f << 2) >> 2] | 0) == (g | 0)) {
            k = 1;
            R = i;
            return k | 0;
          }
        }

        f = h;
        g = f + 56 | 0;

        do {
          b[f >> 2] = 0;
          f = f + 4 | 0;
        } while ((f | 0) < (g | 0));

        _(a, c, 1, h);

        k = h;

        if (((((!((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0) ? (k = h + 8 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) ? (k = h + 16 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) ? (k = h + 24 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) ? (k = h + 32 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) ? (k = h + 40 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) {
          f = h + 48 | 0;
          f = ((b[f >> 2] | 0) == (d | 0) ? (b[f + 4 >> 2] | 0) == (e | 0) : 0) & 1;
        } else { f = 1; }

        k = f;
        R = i;
        return k | 0;
      }

      function Qb(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = R;
        R = R + 16 | 0;
        f = h;

        if (!(Pb(a, c, d, e) | 0)) {
          a = 0;
          g = 0;
          E(a | 0);
          R = h;
          return g | 0;
        }

        g = c & -2130706433;
        b[f >> 2] = 0;
        i = ca(a, c, 1, f) | 0;

        if (!((i | 0) == (d | 0) & (F() | 0) == (e | 0))) {
          b[f >> 2] = 0;
          i = ca(a, c, 2, f) | 0;

          if (!((i | 0) == (d | 0) & (F() | 0) == (e | 0))) {
            b[f >> 2] = 0;
            i = ca(a, c, 3, f) | 0;

            if (!((i | 0) == (d | 0) & (F() | 0) == (e | 0))) {
              b[f >> 2] = 0;
              i = ca(a, c, 4, f) | 0;

              if (!((i | 0) == (d | 0) & (F() | 0) == (e | 0))) {
                b[f >> 2] = 0;
                i = ca(a, c, 5, f) | 0;

                if (!((i | 0) == (d | 0) & (F() | 0) == (e | 0))) {
                  b[f >> 2] = 0;
                  i = ca(a, c, 6, f) | 0;

                  if ((i | 0) == (d | 0) & (F() | 0) == (e | 0)) {
                    c = 0;
                    d = 100663296;
                  } else {
                    g = 0;
                    i = 0;
                    E(g | 0);
                    R = h;
                    return i | 0;
                  }
                } else {
                  c = 0;
                  d = 83886080;
                }
              } else {
                c = 0;
                d = 67108864;
              }
            } else {
              c = 0;
              d = 50331648;
            }
          } else {
            c = 0;
            d = 33554432;
          }
        } else {
          c = 0;
          d = 16777216;
        }

        g = g | d | 268435456;
        i = a | c;
        E(g | 0);
        R = h;
        return i | 0;
      }

      function Rb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0;
        c = 0 == 0 & (b & 2013265920 | 0) == 268435456;
        E((c ? b & -2130706433 | 134217728 : 0) | 0);
        return (c ? a : 0) | 0;
      }

      function Sb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0;
        e = R;
        R = R + 16 | 0;
        d = e;

        if (!(0 == 0 & (c & 2013265920 | 0) == 268435456)) {
          c = 0;
          d = 0;
          E(c | 0);
          R = e;
          return d | 0;
        }

        f = Qc(a | 0, c | 0, 56) | 0;
        F() | 0;
        b[d >> 2] = 0;
        d = ca(a, c & -2130706433 | 134217728, f & 7, d) | 0;
        c = F() | 0;
        E(c | 0);
        R = e;
        return d | 0;
      }

      function Tb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0;

        if (!(0 == 0 & (b & 2013265920 | 0) == 268435456)) {
          c = 0;
          return c | 0;
        }

        c = Qc(a | 0, b | 0, 56) | 0;
        F() | 0;

        switch (c & 7) {
          case 0:
          case 7:
            {
              c = 0;
              return c | 0;
            }

        }

        c = b & -2130706433 | 134217728;

        if (0 == 0 & (b & 117440512 | 0) == 16777216 & (tb(a, c) | 0) != 0) {
          c = 0;
          return c | 0;
        }

        c = pb(a, c) | 0;
        return c | 0;
      }

      function Ub(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        g = R;
        R = R + 16 | 0;
        e = g;
        h = 0 == 0 & (c & 2013265920 | 0) == 268435456;
        f = c & -2130706433 | 134217728;
        i = d;
        b[i >> 2] = h ? a : 0;
        b[i + 4 >> 2] = h ? f : 0;

        if (h) {
          c = Qc(a | 0, c | 0, 56) | 0;
          F() | 0;
          b[e >> 2] = 0;
          a = ca(a, f, c & 7, e) | 0;
          c = F() | 0;
        } else {
          a = 0;
          c = 0;
        }

        i = d + 8 | 0;
        b[i >> 2] = a;
        b[i + 4 >> 2] = c;
        R = g;
        return;
      }

      function Vb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0;
        f = (tb(a, c) | 0) == 0;
        c = c & -2130706433;
        e = d;
        b[e >> 2] = f ? a : 0;
        b[e + 4 >> 2] = f ? c | 285212672 : 0;
        e = d + 8 | 0;
        b[e >> 2] = a;
        b[e + 4 >> 2] = c | 301989888;
        e = d + 16 | 0;
        b[e >> 2] = a;
        b[e + 4 >> 2] = c | 318767104;
        e = d + 24 | 0;
        b[e >> 2] = a;
        b[e + 4 >> 2] = c | 335544320;
        e = d + 32 | 0;
        b[e >> 2] = a;
        b[e + 4 >> 2] = c | 352321536;
        d = d + 40 | 0;
        b[d >> 2] = a;
        b[d + 4 >> 2] = c | 369098752;
        return;
      }

      function Wb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        l = R;
        R = R + 368 | 0;
        f = l + 352 | 0;
        i = l + 184 | 0;
        j = l + 16 | 0;
        k = l;
        Uc(i | 0, 0, 168) | 0;
        Uc(j | 0, 0, 168) | 0;
        b[k >> 2] = 0;
        b[k + 4 >> 2] = 0;
        b[k + 8 >> 2] = 0;
        b[k + 12 >> 2] = 0;
        h = 0 == 0 & (c & 2013265920 | 0) == 268435456;
        e = c & -2130706433 | 134217728;
        Kb(h ? a : 0, h ? e : 0, i);

        if (h) {
          c = Qc(a | 0, c | 0, 56) | 0;
          F() | 0;
          b[f >> 2] = 0;
          a = ca(a, e, c & 7, f) | 0;
          c = F() | 0;
        } else {
          a = 0;
          c = 0;
        }

        Kb(a, c, j);

        if ((b[i >> 2] | 0) <= 0) {
          k = 0;
          b[d >> 2] = k;
          R = l;
          return;
        }

        h = i + 24 | 0;
        a = 0;
        c = 0;
        g = 0;

        do {
          f = i + 8 + (g << 4) | 0;

          a: do { if ((b[j >> 2] | 0) > 0) {
            e = 0;

            while (1) {
              if (cb(f, j + 8 + (e << 4) | 0, 1.0e-06) | 0) { break; }
              e = e + 1 | 0;
              if ((e | 0) >= (b[j >> 2] | 0)) { break a; }
            }

            b: do { if (!g) {
              if ((b[j >> 2] | 0) > 0) {
                e = 0;

                do {
                  if (cb(h, j + 8 + (e << 4) | 0, 1.0e-06) | 0) { break b; }
                  e = e + 1 | 0;
                } while ((e | 0) < (b[j >> 2] | 0));
              }
              b[k >> 2] = b[f >> 2];
              b[k + 4 >> 2] = b[f + 4 >> 2];
              b[k + 8 >> 2] = b[f + 8 >> 2];
              b[k + 12 >> 2] = b[f + 12 >> 2];
              c = 1;
              break a;
            } } while (0);

            e = d + 8 + (a << 4) | 0;
            b[e >> 2] = b[f >> 2];
            b[e + 4 >> 2] = b[f + 4 >> 2];
            b[e + 8 >> 2] = b[f + 8 >> 2];
            b[e + 12 >> 2] = b[f + 12 >> 2];
            a = a + 1 | 0;
          } } while (0);

          g = g + 1 | 0;
        } while ((g | 0) < (b[i >> 2] | 0));

        if (!c) {
          k = a;
          b[d >> 2] = k;
          R = l;
          return;
        }

        j = d + 8 + (a << 4) | 0;
        b[j >> 2] = b[k >> 2];
        b[j + 4 >> 2] = b[k + 4 >> 2];
        b[j + 8 >> 2] = b[k + 8 >> 2];
        b[j + 12 >> 2] = b[k + 12 >> 2];
        k = a + 1 | 0;
        b[d >> 2] = k;
        R = l;
        return;
      }

      function Xb(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0;
        c = Kc(1, 12) | 0;
        if (!c) { G(22330, 22285, 46, 22343); }
        d = a + 4 | 0;
        e = b[d >> 2] | 0;

        if (e | 0) {
          e = e + 8 | 0;
          b[e >> 2] = c;
          b[d >> 2] = c;
          return c | 0;
        }

        if (b[a >> 2] | 0) { G(22360, 22285, 58, 22383); }
        e = a;
        b[e >> 2] = c;
        b[d >> 2] = c;
        return c | 0;
      }

      function Yb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        e = Ic(24) | 0;
        if (!e) { G(22397, 22285, 75, 22411); }
        b[e >> 2] = b[c >> 2];
        b[e + 4 >> 2] = b[c + 4 >> 2];
        b[e + 8 >> 2] = b[c + 8 >> 2];
        b[e + 12 >> 2] = b[c + 12 >> 2];
        b[e + 16 >> 2] = 0;
        c = a + 4 | 0;
        d = b[c >> 2] | 0;

        if (d | 0) {
          b[d + 16 >> 2] = e;
          b[c >> 2] = e;
          return e | 0;
        }

        if (b[a >> 2] | 0) { G(22426, 22285, 79, 22411); }
        b[a >> 2] = e;
        b[c >> 2] = e;
        return e | 0;
      }

      function Zb(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0;
        if (!a) { return; }
        e = 1;

        while (1) {
          c = b[a >> 2] | 0;
          if (c | 0) { do {
            d = b[c >> 2] | 0;
            if (d | 0) { do {
              f = d;
              d = b[d + 16 >> 2] | 0;
              Jc(f);
            } while ((d | 0) != 0); }
            f = c;
            c = b[c + 8 >> 2] | 0;
            Jc(f);
          } while ((c | 0) != 0); }
          c = a;
          a = b[a + 8 >> 2] | 0;
          if (!e) { Jc(c); }
          if (!a) { break; }else { e = 0; }
        }

        return;
      }

      function _b(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            f = 0,
            g = 0,
            h = 0.0,
            i = 0,
            j = 0.0,
            k = 0.0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            r = 0,
            s = 0.0,
            t = 0.0,
            u = 0.0,
            v = 0.0,
            w = 0.0,
            x = 0.0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0;
        g = a + 8 | 0;

        if (b[g >> 2] | 0) {
          K = 1;
          return K | 0;
        }

        f = b[a >> 2] | 0;

        if (!f) {
          K = 0;
          return K | 0;
        }

        c = f;
        d = 0;

        do {
          d = d + 1 | 0;
          c = b[c + 8 >> 2] | 0;
        } while ((c | 0) != 0);

        if (d >>> 0 < 2) {
          K = 0;
          return K | 0;
        }

        I = Ic(d << 2) | 0;
        if (!I) { G(22446, 22285, 312, 22465); }
        H = Ic(d << 5) | 0;
        if (!H) { G(22487, 22285, 316, 22465); }
        b[a >> 2] = 0;
        z = a + 4 | 0;
        b[z >> 2] = 0;
        b[g >> 2] = 0;
        d = 0;
        F = 0;
        y = 0;
        n = 0;

        a: while (1) {
          m = b[f >> 2] | 0;

          if (m) {
            h = 0.0;
            i = m;

            do {
              k = +e[i + 8 >> 3];
              c = i;
              i = b[i + 16 >> 2] | 0;
              l = (i | 0) == 0;
              g = l ? m : i;
              j = +e[g + 8 >> 3];

              if (+q(+(k - j)) > 3.141592653589793) {
                K = 14;
                break;
              }

              h = h + (j - k) * (+e[c >> 3] + +e[g >> 3]);
            } while (!l);

            if ((K | 0) == 14) {
              K = 0;
              h = 0.0;
              c = m;

              do {
                x = +e[c + 8 >> 3];
                E = c + 16 | 0;
                D = b[E >> 2] | 0;
                D = (D | 0) == 0 ? m : D;
                w = +e[D + 8 >> 3];
                h = h + (+e[c >> 3] + +e[D >> 3]) * ((w < 0.0 ? w + 6.283185307179586 : w) - (x < 0.0 ? x + 6.283185307179586 : x));
                c = b[((c | 0) == 0 ? f : E) >> 2] | 0;
              } while ((c | 0) != 0);
            }

            if (h > 0.0) {
              b[I + (F << 2) >> 2] = f;
              F = F + 1 | 0;
              g = y;
              c = n;
            } else { K = 19; }
          } else { K = 19; }

          if ((K | 0) == 19) {
            K = 0;

            do { if (!d) {
              if (!n) {
                if (!(b[a >> 2] | 0)) {
                  g = z;
                  i = a;
                  c = f;
                  d = a;
                  break;
                } else {
                  K = 27;
                  break a;
                }
              } else {
                g = z;
                i = n + 8 | 0;
                c = f;
                d = a;
                break;
              }
            } else {
              c = d + 8 | 0;

              if (b[c >> 2] | 0) {
                K = 21;
                break a;
              }

              d = Kc(1, 12) | 0;

              if (!d) {
                K = 23;
                break a;
              }

              b[c >> 2] = d;
              g = d + 4 | 0;
              i = d;
              c = n;
            } } while (0);

            b[i >> 2] = f;
            b[g >> 2] = f;
            i = H + (y << 5) | 0;
            l = b[f >> 2] | 0;

            if (l) {
              m = H + (y << 5) + 8 | 0;
              e[m >> 3] = 1797693134862315708145274.0e284;
              n = H + (y << 5) + 24 | 0;
              e[n >> 3] = 1797693134862315708145274.0e284;
              e[i >> 3] = -1797693134862315708145274.0e284;
              o = H + (y << 5) + 16 | 0;
              e[o >> 3] = -1797693134862315708145274.0e284;
              u = 1797693134862315708145274.0e284;
              v = -1797693134862315708145274.0e284;
              g = 0;
              p = l;
              k = 1797693134862315708145274.0e284;
              s = 1797693134862315708145274.0e284;
              t = -1797693134862315708145274.0e284;
              j = -1797693134862315708145274.0e284;

              while (1) {
                h = +e[p >> 3];
                x = +e[p + 8 >> 3];
                p = b[p + 16 >> 2] | 0;
                r = (p | 0) == 0;
                w = +e[(r ? l : p) + 8 >> 3];

                if (h < k) {
                  e[m >> 3] = h;
                  k = h;
                }

                if (x < s) {
                  e[n >> 3] = x;
                  s = x;
                }

                if (h > t) { e[i >> 3] = h; }else { h = t; }

                if (x > j) {
                  e[o >> 3] = x;
                  j = x;
                }

                u = x > 0.0 & x < u ? x : u;
                v = x < 0.0 & x > v ? x : v;
                g = g | +q(+(x - w)) > 3.141592653589793;
                if (r) { break; }else { t = h; }
              }

              if (g) {
                e[o >> 3] = v;
                e[n >> 3] = u;
              }
            } else {
              b[i >> 2] = 0;
              b[i + 4 >> 2] = 0;
              b[i + 8 >> 2] = 0;
              b[i + 12 >> 2] = 0;
              b[i + 16 >> 2] = 0;
              b[i + 20 >> 2] = 0;
              b[i + 24 >> 2] = 0;
              b[i + 28 >> 2] = 0;
            }

            g = y + 1 | 0;
          }

          E = f + 8 | 0;
          f = b[E >> 2] | 0;
          b[E >> 2] = 0;

          if (!f) {
            K = 45;
            break;
          } else {
            y = g;
            n = c;
          }
        }

        if ((K | 0) == 21) { G(22263, 22285, 32, 22297); }else if ((K | 0) == 23) { G(22317, 22285, 34, 22297); }else if ((K | 0) == 27) { G(22360, 22285, 58, 22383); }else if ((K | 0) == 45) {
          b: do { if ((F | 0) > 0) {
            E = (g | 0) == 0;
            C = g << 2;
            D = (a | 0) == 0;
            B = 0;
            c = 0;

            while (1) {
              A = b[I + (B << 2) >> 2] | 0;

              if (!E) {
                y = Ic(C) | 0;

                if (!y) {
                  K = 50;
                  break;
                }

                z = Ic(C) | 0;

                if (!z) {
                  K = 52;
                  break;
                }

                c: do { if (!D) {
                  g = 0;
                  d = 0;
                  i = a;

                  while (1) {
                    f = H + (g << 5) | 0;

                    if ($b(b[i >> 2] | 0, f, b[A >> 2] | 0) | 0) {
                      b[y + (d << 2) >> 2] = i;
                      b[z + (d << 2) >> 2] = f;
                      r = d + 1 | 0;
                    } else { r = d; }

                    i = b[i + 8 >> 2] | 0;
                    if (!i) { break; }else {
                      g = g + 1 | 0;
                      d = r;
                    }
                  }

                  if ((r | 0) > 0) {
                    f = b[y >> 2] | 0;
                    if ((r | 0) == 1) { d = f; }else {
                      o = 0;
                      p = -1;
                      d = f;
                      n = f;

                      while (1) {
                        l = b[n >> 2] | 0;
                        f = 0;
                        i = 0;

                        while (1) {
                          g = b[b[y + (i << 2) >> 2] >> 2] | 0;
                          if ((g | 0) == (l | 0)) { m = f; }else { m = f + (($b(g, b[z + (i << 2) >> 2] | 0, b[l >> 2] | 0) | 0) & 1) | 0; }
                          i = i + 1 | 0;
                          if ((i | 0) == (r | 0)) { break; }else { f = m; }
                        }

                        g = (m | 0) > (p | 0);
                        d = g ? n : d;
                        f = o + 1 | 0;
                        if ((f | 0) == (r | 0)) { break c; }
                        o = f;
                        p = g ? m : p;
                        n = b[y + (f << 2) >> 2] | 0;
                      }
                    }
                  } else { d = 0; }
                } else { d = 0; } } while (0);

                Jc(y);
                Jc(z);

                if (d) {
                  g = d + 4 | 0;
                  f = b[g >> 2] | 0;

                  if (!f) {
                    if (b[d >> 2] | 0) {
                      K = 70;
                      break;
                    }
                  } else { d = f + 8 | 0; }

                  b[d >> 2] = A;
                  b[g >> 2] = A;
                } else { K = 73; }
              } else { K = 73; }

              if ((K | 0) == 73) {
                K = 0;
                c = b[A >> 2] | 0;
                if (c | 0) { do {
                  z = c;
                  c = b[c + 16 >> 2] | 0;
                  Jc(z);
                } while ((c | 0) != 0); }
                Jc(A);
                c = 2;
              }

              B = B + 1 | 0;

              if ((B | 0) >= (F | 0)) {
                J = c;
                break b;
              }
            }

            if ((K | 0) == 50) { G(22502, 22285, 246, 22521); }else if ((K | 0) == 52) { G(22540, 22285, 248, 22521); }else if ((K | 0) == 70) { G(22360, 22285, 58, 22383); }
          } else { J = 0; } } while (0);

          Jc(I);
          Jc(H);
          K = J;
          return K | 0;
        }
        return 0;
      }

      function $b(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0.0,
            g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0;

        if (!(ta(c, d) | 0)) {
          a = 0;
          return a | 0;
        }

        c = ra(c) | 0;
        l = +e[d >> 3];
        f = +e[d + 8 >> 3];
        f = c & f < 0.0 ? f + 6.283185307179586 : f;
        a = b[a >> 2] | 0;

        if (!a) {
          a = 0;
          return a | 0;
        }

        if (c) {
          c = 0;
          d = a;

          a: while (1) {
            while (1) {
              i = +e[d >> 3];
              k = +e[d + 8 >> 3];
              d = d + 16 | 0;
              m = b[d >> 2] | 0;
              m = (m | 0) == 0 ? a : m;
              h = +e[m >> 3];
              g = +e[m + 8 >> 3];

              if (i > h) {
                j = i;
                i = k;
              } else {
                j = h;
                h = i;
                i = g;
                g = k;
              }

              if (!(l < h | l > j)) { break; }
              d = b[d >> 2] | 0;

              if (!d) {
                d = 22;
                break a;
              }
            }

            k = g < 0.0 ? g + 6.283185307179586 : g;
            i = i < 0.0 ? i + 6.283185307179586 : i;
            f = i == f | k == f ? f + -2.220446049250313e-16 : f;
            k = k + (l - h) / (j - h) * (i - k);
            if ((k < 0.0 ? k + 6.283185307179586 : k) > f) { c = c ^ 1; }
            d = b[d >> 2] | 0;

            if (!d) {
              d = 22;
              break;
            }
          }

          if ((d | 0) == 22) { return c | 0; }
        } else {
          c = 0;
          d = a;

          b: while (1) {
            while (1) {
              i = +e[d >> 3];
              k = +e[d + 8 >> 3];
              d = d + 16 | 0;
              m = b[d >> 2] | 0;
              m = (m | 0) == 0 ? a : m;
              h = +e[m >> 3];
              g = +e[m + 8 >> 3];

              if (i > h) {
                j = i;
                i = k;
              } else {
                j = h;
                h = i;
                i = g;
                g = k;
              }

              if (!(l < h | l > j)) { break; }
              d = b[d >> 2] | 0;

              if (!d) {
                d = 22;
                break b;
              }
            }

            f = i == f | g == f ? f + -2.220446049250313e-16 : f;
            if (g + (l - h) / (j - h) * (i - g) > f) { c = c ^ 1; }
            d = b[d >> 2] | 0;

            if (!d) {
              d = 22;
              break;
            }
          }

          if ((d | 0) == 22) { return c | 0; }
        }

        return 0;
      }

      function ac(c, d, e, f, g) {
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        g = g | 0;
        var h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0;
        u = R;
        R = R + 32 | 0;
        t = u + 16 | 0;
        s = u;
        h = Qc(c | 0, d | 0, 52) | 0;
        F() | 0;
        h = h & 15;
        p = Qc(e | 0, f | 0, 52) | 0;
        F() | 0;

        if ((h | 0) != (p & 15 | 0)) {
          t = 1;
          R = u;
          return t | 0;
        }

        l = Qc(c | 0, d | 0, 45) | 0;
        F() | 0;
        l = l & 127;
        m = Qc(e | 0, f | 0, 45) | 0;
        F() | 0;
        m = m & 127;
        p = (l | 0) != (m | 0);

        if (p) {
          j = oa(l, m) | 0;

          if ((j | 0) == 7) {
            t = 2;
            R = u;
            return t | 0;
          }

          k = oa(m, l) | 0;
          if ((k | 0) == 7) { G(22564, 22588, 151, 22598); }else {
            q = j;
            i = k;
          }
        } else {
          q = 0;
          i = 0;
        }

        n = ia(l) | 0;
        o = ia(m) | 0;
        b[t >> 2] = 0;
        b[t + 4 >> 2] = 0;
        b[t + 8 >> 2] = 0;
        b[t + 12 >> 2] = 0;

        do { if (!q) {
          Hb(e, f, t) | 0;

          if ((n | 0) != 0 & (o | 0) != 0) {
            if ((m | 0) != (l | 0)) { G(22716, 22588, 243, 22598); }
            i = zb(c, d) | 0;
            h = zb(e, f) | 0;

            if (!(a[22032 + (i * 7 | 0) + h >> 0] | 0)) {
              i = b[21200 + (i * 28 | 0) + (h << 2) >> 2] | 0;

              if ((i | 0) > 0) {
                j = t + 4 | 0;
                h = 0;

                do {
                  Ja(j);
                  h = h + 1 | 0;
                } while ((h | 0) != (i | 0));

                r = 50;
              } else { r = 50; }
            } else { h = 5; }
          } else { r = 50; }
        } else {
          m = b[4304 + (l * 28 | 0) + (q << 2) >> 2] | 0;
          j = (m | 0) > 0;
          if (!o) {
            if (j) {
              l = 0;
              k = e;
              j = f;

              do {
                k = Db(k, j) | 0;
                j = F() | 0;
                i = La(i) | 0;
                l = l + 1 | 0;
              } while ((l | 0) != (m | 0));

              m = i;
              l = k;
              k = j;
            } else {
              m = i;
              l = e;
              k = f;
            }
          } else if (j) {
            l = 0;
            k = e;
            j = f;

            do {
              k = Cb(k, j) | 0;
              j = F() | 0;
              i = La(i) | 0;
              if ((i | 0) == 1) { i = La(1) | 0; }
              l = l + 1 | 0;
            } while ((l | 0) != (m | 0));

            m = i;
            l = k;
            k = j;
          } else {
            m = i;
            l = e;
            k = f;
          }
          Hb(l, k, t) | 0;
          if (!p) { G(22611, 22588, 181, 22598); }
          j = (n | 0) != 0;
          i = (o | 0) != 0;
          if (j & i) { G(22638, 22588, 182, 22598); }
          if (!j) {
            if (i) {
              i = zb(l, k) | 0;

              if (a[22032 + (i * 7 | 0) + m >> 0] | 0) {
                h = 4;
                break;
              }

              l = 0;
              k = b[21200 + (m * 28 | 0) + (i << 2) >> 2] | 0;
              r = 26;
            } else { i = 0; }
          } else {
            i = zb(c, d) | 0;

            if (a[22032 + (i * 7 | 0) + q >> 0] | 0) {
              h = 3;
              break;
            }

            k = b[21200 + (i * 28 | 0) + (q << 2) >> 2] | 0;
            l = k;
            r = 26;
          }

          if ((r | 0) == 26) {
            if ((k | 0) <= -1) { G(22669, 22588, 212, 22598); }
            if ((l | 0) <= -1) { G(22692, 22588, 213, 22598); }

            if ((k | 0) > 0) {
              j = t + 4 | 0;
              i = 0;

              do {
                Ja(j);
                i = i + 1 | 0;
              } while ((i | 0) != (k | 0));

              i = l;
            } else { i = l; }
          }
          b[s >> 2] = 0;
          b[s + 4 >> 2] = 0;
          b[s + 8 >> 2] = 0;
          Ha(s, q);
          if (h | 0) { while (1) {
            if (!(Fb(h) | 0)) { Ga(s); }else { Fa(s); }
            if ((h | 0) > 1) { h = h + -1 | 0; }else { break; }
          } }

          if ((i | 0) > 0) {
            h = 0;

            do {
              Ja(s);
              h = h + 1 | 0;
            } while ((h | 0) != (i | 0));
          }

          r = t + 4 | 0;
          za(r, s, r);
          xa(r);
          r = 50;
        } } while (0);

        if ((r | 0) == 50) {
          h = t + 4 | 0;
          b[g >> 2] = b[h >> 2];
          b[g + 4 >> 2] = b[h + 4 >> 2];
          b[g + 8 >> 2] = b[h + 8 >> 2];
          h = 0;
        }

        t = h;
        R = u;
        return t | 0;
      }

      function bc(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0;
        p = R;
        R = R + 48 | 0;
        h = p + 36 | 0;
        i = p + 24 | 0;
        j = p + 12 | 0;
        k = p;
        g = Qc(a | 0, c | 0, 52) | 0;
        F() | 0;
        g = g & 15;
        n = Qc(a | 0, c | 0, 45) | 0;
        F() | 0;
        n = n & 127;
        l = ia(n) | 0;
        Rc(g | 0, 0, 52) | 0;
        r = F() | 0 | 134225919;
        q = e;
        b[q >> 2] = -1;
        b[q + 4 >> 2] = r;

        if (!g) {
          if ((b[d >> 2] | 0) > 1) {
            r = 1;
            R = p;
            return r | 0;
          }

          if ((b[d + 4 >> 2] | 0) > 1) {
            r = 1;
            R = p;
            return r | 0;
          }

          if ((b[d + 8 >> 2] | 0) > 1) {
            r = 1;
            R = p;
            return r | 0;
          }

          f = na(n, Ca(d) | 0) | 0;

          if ((f | 0) == 127) {
            r = 1;
            R = p;
            return r | 0;
          }

          o = Rc(f | 0, 0, 45) | 0;
          q = F() | 0;
          n = e;
          q = b[n + 4 >> 2] & -1040385 | q;
          r = e;
          b[r >> 2] = b[n >> 2] | o;
          b[r + 4 >> 2] = q;
          r = 0;
          R = p;
          return r | 0;
        }
        b[h >> 2] = b[d >> 2];
        b[h + 4 >> 2] = b[d + 4 >> 2];
        b[h + 8 >> 2] = b[d + 8 >> 2];

        while (1) {
          b[i >> 2] = b[h >> 2];
          b[i + 4 >> 2] = b[h + 4 >> 2];
          b[i + 8 >> 2] = b[h + 8 >> 2];

          if (!(Fb(g) | 0)) {
            Ea(h);
            b[j >> 2] = b[h >> 2];
            b[j + 4 >> 2] = b[h + 4 >> 2];
            b[j + 8 >> 2] = b[h + 8 >> 2];
            Ga(j);
          } else {
            Da(h);
            b[j >> 2] = b[h >> 2];
            b[j + 4 >> 2] = b[h + 4 >> 2];
            b[j + 8 >> 2] = b[h + 8 >> 2];
            Fa(j);
          }

          Aa(i, j, k);
          xa(k);
          q = e;
          s = b[q >> 2] | 0;
          q = b[q + 4 >> 2] | 0;
          t = (15 - g | 0) * 3 | 0;
          d = Rc(7, 0, t | 0) | 0;
          q = q & ~(F() | 0);
          t = Rc(Ca(k) | 0, 0, t | 0) | 0;
          q = F() | 0 | q;
          r = e;
          b[r >> 2] = t | s & ~d;
          b[r + 4 >> 2] = q;
          if ((g | 0) > 1) { g = g + -1 | 0; }else { break; }
        }

        a: do { if (((b[h >> 2] | 0) <= 1 ? (b[h + 4 >> 2] | 0) <= 1 : 0) ? (b[h + 8 >> 2] | 0) <= 1 : 0) {
          g = Ca(h) | 0;
          i = na(n, g) | 0;
          if ((i | 0) == 127) { k = 0; }else { k = ia(i) | 0; }

          b: do { if (!g) {
            if ((l | 0) != 0 & (k | 0) != 0) {
              t = zb(a, c) | 0;
              g = e;
              g = 21408 + (t * 28 | 0) + ((zb(b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0) << 2) | 0;
              g = b[g >> 2] | 0;
              if ((g | 0) <= -1) { G(22840, 22588, 433, 22773); }

              if (!g) {
                f = i;
                g = 55;
              } else {
                h = e;
                f = 0;
                d = b[h >> 2] | 0;
                h = b[h + 4 >> 2] | 0;

                do {
                  d = Bb(d, h) | 0;
                  h = F() | 0;
                  t = e;
                  b[t >> 2] = d;
                  b[t + 4 >> 2] = h;
                  f = f + 1 | 0;
                } while ((f | 0) < (g | 0));

                f = i;
                g = 54;
              }
            } else {
              f = i;
              g = 54;
            }
          } else {
            if (l) {
              h = 21408 + ((zb(a, c) | 0) * 28 | 0) + (g << 2) | 0;
              h = b[h >> 2] | 0;

              if ((h | 0) > 0) {
                d = 0;

                do {
                  g = Ka(g) | 0;
                  d = d + 1 | 0;
                } while ((d | 0) != (h | 0));
              }

              if ((g | 0) == 1) {
                f = 3;
                break a;
              }

              d = na(n, g) | 0;
              if ((d | 0) == 127) { G(22743, 22588, 376, 22773); }

              if (!(ia(d) | 0)) {
                o = h;
                m = g;
                f = d;
              } else { G(22786, 22588, 377, 22773); }
            } else {
              o = 0;
              m = g;
              f = i;
            }

            j = b[4304 + (n * 28 | 0) + (m << 2) >> 2] | 0;
            if ((j | 0) <= -1) { G(22817, 22588, 384, 22773); }

            if (!k) {
              if ((o | 0) <= -1) { G(22669, 22588, 417, 22773); }

              if (o | 0) {
                h = e;
                g = 0;
                d = b[h >> 2] | 0;
                h = b[h + 4 >> 2] | 0;

                do {
                  d = Bb(d, h) | 0;
                  h = F() | 0;
                  t = e;
                  b[t >> 2] = d;
                  b[t + 4 >> 2] = h;
                  g = g + 1 | 0;
                } while ((g | 0) < (o | 0));
              }

              if ((j | 0) <= 0) {
                g = 54;
                break;
              }

              h = e;
              g = 0;
              d = b[h >> 2] | 0;
              h = b[h + 4 >> 2] | 0;

              while (1) {
                d = Bb(d, h) | 0;
                h = F() | 0;
                t = e;
                b[t >> 2] = d;
                b[t + 4 >> 2] = h;
                g = g + 1 | 0;

                if ((g | 0) == (j | 0)) {
                  g = 54;
                  break b;
                }
              }
            }

            i = oa(f, n) | 0;
            if ((i | 0) == 7) { G(22564, 22588, 393, 22773); }
            g = e;
            d = b[g >> 2] | 0;
            g = b[g + 4 >> 2] | 0;

            if ((j | 0) > 0) {
              h = 0;

              do {
                d = Bb(d, g) | 0;
                g = F() | 0;
                t = e;
                b[t >> 2] = d;
                b[t + 4 >> 2] = g;
                h = h + 1 | 0;
              } while ((h | 0) != (j | 0));
            }

            d = zb(d, g) | 0;
            t = ja(f) | 0;
            d = b[(t ? 21824 : 21616) + (i * 28 | 0) + (d << 2) >> 2] | 0;
            if ((d | 0) <= -1) { G(22669, 22588, 412, 22773); }
            if (!d) { g = 54; }else {
              i = e;
              g = 0;
              h = b[i >> 2] | 0;
              i = b[i + 4 >> 2] | 0;

              do {
                h = Ab(h, i) | 0;
                i = F() | 0;
                t = e;
                b[t >> 2] = h;
                b[t + 4 >> 2] = i;
                g = g + 1 | 0;
              } while ((g | 0) < (d | 0));

              g = 54;
            }
          } } while (0);

          if ((g | 0) == 54) { if (k) { g = 55; } }

          if ((g | 0) == 55) {
            t = e;

            if ((zb(b[t >> 2] | 0, b[t + 4 >> 2] | 0) | 0) == 1) {
              f = 4;
              break;
            }
          }

          t = e;
          r = b[t >> 2] | 0;
          t = b[t + 4 >> 2] & -1040385;
          s = Rc(f | 0, 0, 45) | 0;
          t = t | (F() | 0);
          f = e;
          b[f >> 2] = r | s;
          b[f + 4 >> 2] = t;
          f = 0;
        } else { f = 2; } } while (0);

        t = f;
        R = p;
        return t | 0;
      }

      function cc(a, b, c, d, e) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0;
        g = R;
        R = R + 16 | 0;
        f = g;
        a = ac(a, b, c, d, f) | 0;

        if (!a) {
          Pa(f, e);
          a = 0;
        }

        R = g;
        return a | 0;
      }

      function dc(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0;
        e = R;
        R = R + 16 | 0;
        f = e;
        Qa(c, f);
        d = bc(a, b, f, d) | 0;
        R = e;
        return d | 0;
      }

      function ec(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0;
        g = R;
        R = R + 32 | 0;
        e = g + 12 | 0;
        f = g;
        if ((ac(a, b, a, b, e) | 0) == 0 ? (ac(a, b, c, d, f) | 0) == 0 : 0) { a = Oa(e, f) | 0; }else { a = -1; }
        R = g;
        return a | 0;
      }

      function fc(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0;
        g = R;
        R = R + 32 | 0;
        e = g + 12 | 0;
        f = g;
        if ((ac(a, b, a, b, e) | 0) == 0 ? (ac(a, b, c, d, f) | 0) == 0 : 0) { a = Oa(e, f) | 0; }else { a = -1; }
        R = g;
        return (a >>> 31 ^ 1) + a | 0;
      }

      function gc(a, c, d, e, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0.0,
            j = 0.0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0.0,
            p = 0.0,
            r = 0.0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0.0;
        x = R;
        R = R + 48 | 0;
        g = x + 24 | 0;
        h = x + 12 | 0;
        w = x;

        if ((ac(a, c, a, c, g) | 0) == 0 ? (ac(a, c, d, e, h) | 0) == 0 : 0) {
          v = Oa(g, h) | 0;

          if ((v | 0) < 0) {
            w = v;
            R = x;
            return w | 0;
          }
          b[g >> 2] = 0;
          b[g + 4 >> 2] = 0;
          b[g + 8 >> 2] = 0;
          b[h >> 2] = 0;
          b[h + 4 >> 2] = 0;
          b[h + 8 >> 2] = 0;
          ac(a, c, a, c, g) | 0;
          ac(a, c, d, e, h) | 0;
          Ra(g);
          Ra(h);

          if (!v) {
            e = g + 4 | 0;
            n = g + 8 | 0;
            s = e;
            t = n;
            u = g;
            d = b[g >> 2] | 0;
            e = b[e >> 2] | 0;
            g = b[n >> 2] | 0;
            p = 0.0;
            r = 0.0;
            o = 0.0;
          } else {
            l = b[g >> 2] | 0;
            o = +(v | 0);
            s = g + 4 | 0;
            m = b[s >> 2] | 0;
            t = g + 8 | 0;
            n = b[t >> 2] | 0;
            u = g;
            d = l;
            e = m;
            g = n;
            p = +((b[h >> 2] | 0) - l | 0) / o;
            r = +((b[h + 4 >> 2] | 0) - m | 0) / o;
            o = +((b[h + 8 >> 2] | 0) - n | 0) / o;
          }

          b[w >> 2] = d;
          n = w + 4 | 0;
          b[n >> 2] = e;
          m = w + 8 | 0;
          b[m >> 2] = g;
          l = 0;

          while (1) {
            j = +(l | 0);
            y = p * j + +(d | 0);
            i = r * j + +(b[s >> 2] | 0);
            j = o * j + +(b[t >> 2] | 0);
            e = ~~+Sc(+y);
            h = ~~+Sc(+i);
            d = ~~+Sc(+j);
            y = +q(+(+(e | 0) - y));
            i = +q(+(+(h | 0) - i));
            j = +q(+(+(d | 0) - j));

            do { if (!(y > i & y > j)) {
              k = 0 - e | 0;

              if (i > j) {
                g = k - d | 0;
                break;
              } else {
                g = h;
                d = k - h | 0;
                break;
              }
            } else {
              e = 0 - (h + d) | 0;
              g = h;
            } } while (0);

            b[w >> 2] = e;
            b[n >> 2] = g;
            b[m >> 2] = d;
            Sa(w);
            bc(a, c, w, f + (l << 3) | 0) | 0;
            if ((l | 0) == (v | 0)) { break; }
            l = l + 1 | 0;
            d = b[u >> 2] | 0;
          }

          w = 0;
          R = x;
          return w | 0;
        }

        w = -1;
        R = x;
        return w | 0;
      }

      function hc(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0;

        if (!b) {
          c = 1;
          return c | 0;
        }

        c = a;
        a = 1;

        do {
          a = B((b & 1 | 0) == 0 ? 1 : c, a) | 0;
          b = b >> 1;
          c = B(c, c) | 0;
        } while ((b | 0) != 0);

        return a | 0;
      }

      function ic(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0.0,
            g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0,
            m = 0,
            n = 0,
            o = 0.0;

        if (!(ta(c, d) | 0)) {
          n = 0;
          return n | 0;
        }

        c = ra(c) | 0;
        o = +e[d >> 3];
        f = +e[d + 8 >> 3];
        f = c & f < 0.0 ? f + 6.283185307179586 : f;
        n = b[a >> 2] | 0;

        if ((n | 0) <= 0) {
          n = 0;
          return n | 0;
        }

        m = b[a + 4 >> 2] | 0;

        if (c) {
          c = 0;
          d = -1;
          a = 0;

          a: while (1) {
            l = a;

            while (1) {
              i = +e[m + (l << 4) >> 3];
              k = +e[m + (l << 4) + 8 >> 3];
              a = (d + 2 | 0) % (n | 0) | 0;
              h = +e[m + (a << 4) >> 3];
              g = +e[m + (a << 4) + 8 >> 3];

              if (i > h) {
                j = i;
                i = k;
              } else {
                j = h;
                h = i;
                i = g;
                g = k;
              }

              if (!(o < h | o > j)) { break; }
              d = l + 1 | 0;

              if ((d | 0) < (n | 0)) {
                a = l;
                l = d;
                d = a;
              } else {
                d = 22;
                break a;
              }
            }

            k = g < 0.0 ? g + 6.283185307179586 : g;
            i = i < 0.0 ? i + 6.283185307179586 : i;
            f = i == f | k == f ? f + -2.220446049250313e-16 : f;
            k = k + (o - h) / (j - h) * (i - k);
            if ((k < 0.0 ? k + 6.283185307179586 : k) > f) { c = c ^ 1; }
            a = l + 1 | 0;

            if ((a | 0) >= (n | 0)) {
              d = 22;
              break;
            } else { d = l; }
          }

          if ((d | 0) == 22) { return c | 0; }
        } else {
          c = 0;
          d = -1;
          a = 0;

          b: while (1) {
            l = a;

            while (1) {
              i = +e[m + (l << 4) >> 3];
              k = +e[m + (l << 4) + 8 >> 3];
              a = (d + 2 | 0) % (n | 0) | 0;
              h = +e[m + (a << 4) >> 3];
              g = +e[m + (a << 4) + 8 >> 3];

              if (i > h) {
                j = i;
                i = k;
              } else {
                j = h;
                h = i;
                i = g;
                g = k;
              }

              if (!(o < h | o > j)) { break; }
              d = l + 1 | 0;

              if ((d | 0) < (n | 0)) {
                a = l;
                l = d;
                d = a;
              } else {
                d = 22;
                break b;
              }
            }

            f = i == f | g == f ? f + -2.220446049250313e-16 : f;
            if (g + (o - h) / (j - h) * (i - g) > f) { c = c ^ 1; }
            a = l + 1 | 0;

            if ((a | 0) >= (n | 0)) {
              d = 22;
              break;
            } else { d = l; }
          }

          if ((d | 0) == 22) { return c | 0; }
        }

        return 0;
      }

      function jc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            f = 0.0,
            g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0.0,
            n = 0,
            o = 0,
            p = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0;
        r = b[a >> 2] | 0;

        if (!r) {
          b[c >> 2] = 0;
          b[c + 4 >> 2] = 0;
          b[c + 8 >> 2] = 0;
          b[c + 12 >> 2] = 0;
          b[c + 16 >> 2] = 0;
          b[c + 20 >> 2] = 0;
          b[c + 24 >> 2] = 0;
          b[c + 28 >> 2] = 0;
          return;
        }

        s = c + 8 | 0;
        e[s >> 3] = 1797693134862315708145274.0e284;
        t = c + 24 | 0;
        e[t >> 3] = 1797693134862315708145274.0e284;
        e[c >> 3] = -1797693134862315708145274.0e284;
        u = c + 16 | 0;
        e[u >> 3] = -1797693134862315708145274.0e284;
        if ((r | 0) <= 0) { return; }
        o = b[a + 4 >> 2] | 0;
        l = 1797693134862315708145274.0e284;
        m = -1797693134862315708145274.0e284;
        n = 0;
        a = -1;
        h = 1797693134862315708145274.0e284;
        i = 1797693134862315708145274.0e284;
        k = -1797693134862315708145274.0e284;
        f = -1797693134862315708145274.0e284;
        p = 0;

        while (1) {
          d = +e[o + (p << 4) >> 3];
          j = +e[o + (p << 4) + 8 >> 3];
          a = a + 2 | 0;
          g = +e[o + (((a | 0) == (r | 0) ? 0 : a) << 4) + 8 >> 3];

          if (d < h) {
            e[s >> 3] = d;
            h = d;
          }

          if (j < i) {
            e[t >> 3] = j;
            i = j;
          }

          if (d > k) { e[c >> 3] = d; }else { d = k; }

          if (j > f) {
            e[u >> 3] = j;
            f = j;
          }

          l = j > 0.0 & j < l ? j : l;
          m = j < 0.0 & j > m ? j : m;
          n = n | +q(+(j - g)) > 3.141592653589793;
          a = p + 1 | 0;
          if ((a | 0) == (r | 0)) { break; }else {
            v = p;
            k = d;
            p = a;
            a = v;
          }
        }

        if (!n) { return; }
        e[u >> 3] = m;
        e[t >> 3] = l;
        return;
      }

      function kc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            f = 0,
            g = 0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0.0,
            n = 0.0,
            o = 0.0,
            p = 0.0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0;
        r = b[a >> 2] | 0;

        if (r) {
          s = c + 8 | 0;
          e[s >> 3] = 1797693134862315708145274.0e284;
          t = c + 24 | 0;
          e[t >> 3] = 1797693134862315708145274.0e284;
          e[c >> 3] = -1797693134862315708145274.0e284;
          u = c + 16 | 0;
          e[u >> 3] = -1797693134862315708145274.0e284;

          if ((r | 0) > 0) {
            g = b[a + 4 >> 2] | 0;
            o = 1797693134862315708145274.0e284;
            p = -1797693134862315708145274.0e284;
            f = 0;
            d = -1;
            k = 1797693134862315708145274.0e284;
            l = 1797693134862315708145274.0e284;
            n = -1797693134862315708145274.0e284;
            i = -1797693134862315708145274.0e284;
            v = 0;

            while (1) {
              h = +e[g + (v << 4) >> 3];
              m = +e[g + (v << 4) + 8 >> 3];
              z = d + 2 | 0;
              j = +e[g + (((z | 0) == (r | 0) ? 0 : z) << 4) + 8 >> 3];

              if (h < k) {
                e[s >> 3] = h;
                k = h;
              }

              if (m < l) {
                e[t >> 3] = m;
                l = m;
              }

              if (h > n) { e[c >> 3] = h; }else { h = n; }

              if (m > i) {
                e[u >> 3] = m;
                i = m;
              }

              o = m > 0.0 & m < o ? m : o;
              p = m < 0.0 & m > p ? m : p;
              f = f | +q(+(m - j)) > 3.141592653589793;
              d = v + 1 | 0;
              if ((d | 0) == (r | 0)) { break; }else {
                z = v;
                n = h;
                v = d;
                d = z;
              }
            }

            if (f) {
              e[u >> 3] = p;
              e[t >> 3] = o;
            }
          }
        } else {
          b[c >> 2] = 0;
          b[c + 4 >> 2] = 0;
          b[c + 8 >> 2] = 0;
          b[c + 12 >> 2] = 0;
          b[c + 16 >> 2] = 0;
          b[c + 20 >> 2] = 0;
          b[c + 24 >> 2] = 0;
          b[c + 28 >> 2] = 0;
        }

        z = a + 8 | 0;
        d = b[z >> 2] | 0;
        if ((d | 0) <= 0) { return; }
        y = a + 12 | 0;
        x = 0;

        do {
          g = b[y >> 2] | 0;
          f = x;
          x = x + 1 | 0;
          t = c + (x << 5) | 0;
          u = b[g + (f << 3) >> 2] | 0;

          if (u) {
            v = c + (x << 5) + 8 | 0;
            e[v >> 3] = 1797693134862315708145274.0e284;
            a = c + (x << 5) + 24 | 0;
            e[a >> 3] = 1797693134862315708145274.0e284;
            e[t >> 3] = -1797693134862315708145274.0e284;
            w = c + (x << 5) + 16 | 0;
            e[w >> 3] = -1797693134862315708145274.0e284;

            if ((u | 0) > 0) {
              r = b[g + (f << 3) + 4 >> 2] | 0;
              o = 1797693134862315708145274.0e284;
              p = -1797693134862315708145274.0e284;
              g = 0;
              f = -1;
              s = 0;
              k = 1797693134862315708145274.0e284;
              l = 1797693134862315708145274.0e284;
              m = -1797693134862315708145274.0e284;
              i = -1797693134862315708145274.0e284;

              while (1) {
                h = +e[r + (s << 4) >> 3];
                n = +e[r + (s << 4) + 8 >> 3];
                f = f + 2 | 0;
                j = +e[r + (((f | 0) == (u | 0) ? 0 : f) << 4) + 8 >> 3];

                if (h < k) {
                  e[v >> 3] = h;
                  k = h;
                }

                if (n < l) {
                  e[a >> 3] = n;
                  l = n;
                }

                if (h > m) { e[t >> 3] = h; }else { h = m; }

                if (n > i) {
                  e[w >> 3] = n;
                  i = n;
                }

                o = n > 0.0 & n < o ? n : o;
                p = n < 0.0 & n > p ? n : p;
                g = g | +q(+(n - j)) > 3.141592653589793;
                f = s + 1 | 0;
                if ((f | 0) == (u | 0)) { break; }else {
                  A = s;
                  s = f;
                  m = h;
                  f = A;
                }
              }

              if (g) {
                e[w >> 3] = p;
                e[a >> 3] = o;
              }
            }
          } else {
            b[t >> 2] = 0;
            b[t + 4 >> 2] = 0;
            b[t + 8 >> 2] = 0;
            b[t + 12 >> 2] = 0;
            b[t + 16 >> 2] = 0;
            b[t + 20 >> 2] = 0;
            b[t + 24 >> 2] = 0;
            b[t + 28 >> 2] = 0;
            d = b[z >> 2] | 0;
          }
        } while ((x | 0) < (d | 0));

        return;
      }

      function lc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0;

        if (!(ic(a, c, d) | 0)) {
          f = 0;
          return f | 0;
        }

        f = a + 8 | 0;

        if ((b[f >> 2] | 0) <= 0) {
          f = 1;
          return f | 0;
        }

        e = a + 12 | 0;
        a = 0;

        while (1) {
          g = a;
          a = a + 1 | 0;

          if (ic((b[e >> 2] | 0) + (g << 3) | 0, c + (a << 5) | 0, d) | 0) {
            a = 0;
            e = 6;
            break;
          }

          if ((a | 0) >= (b[f >> 2] | 0)) {
            a = 1;
            e = 6;
            break;
          }
        }

        if ((e | 0) == 6) { return a | 0; }
        return 0;
      }

      function mc() {
        return 8;
      }

      function nc() {
        return 16;
      }

      function oc() {
        return 168;
      }

      function pc() {
        return 8;
      }

      function qc() {
        return 16;
      }

      function rc() {
        return 12;
      }

      function sc() {
        return 8;
      }

      function tc(a) {
        a = a | 0;
        var b = 0.0,
            c = 0.0;
        c = +e[a >> 3];
        b = +e[a + 8 >> 3];
        return + +r(+(c * c + b * b));
      }

      function uc(a, b, c, d, f) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        var g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0.0,
            n = 0.0;
        k = +e[a >> 3];
        j = +e[b >> 3] - k;
        i = +e[a + 8 >> 3];
        h = +e[b + 8 >> 3] - i;
        m = +e[c >> 3];
        g = +e[d >> 3] - m;
        n = +e[c + 8 >> 3];
        l = +e[d + 8 >> 3] - n;
        g = (g * (i - n) - (k - m) * l) / (j * l - h * g);
        e[f >> 3] = k + j * g;
        e[f + 8 >> 3] = i + h * g;
        return;
      }

      function vc(a, b) {
        a = a | 0;
        b = b | 0;

        if (!(+e[a >> 3] == +e[b >> 3])) {
          b = 0;
          return b | 0;
        }

        b = +e[a + 8 >> 3] == +e[b + 8 >> 3];
        return b | 0;
      }

      function wc(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0;
        f = +e[a >> 3] - +e[b >> 3];
        d = +e[a + 8 >> 3] - +e[b + 8 >> 3];
        c = +e[a + 16 >> 3] - +e[b + 16 >> 3];
        return +(f * f + d * d + c * c);
      }

      function xc(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0;
        c = +e[a >> 3];
        d = +t(+c);
        c = +u(+c);
        e[b + 16 >> 3] = c;
        c = +e[a + 8 >> 3];
        f = d * +t(+c);
        e[b >> 3] = f;
        c = d * +u(+c);
        e[b + 8 >> 3] = c;
        return;
      }

      function yc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0;

        if ((c | 0) > 0) {
          e = Kc(c, 4) | 0;
          b[a >> 2] = e;
          if (!e) { G(22869, 22892, 37, 22906); }
        } else { b[a >> 2] = 0; }

        b[a + 4 >> 2] = c;
        b[a + 8 >> 2] = 0;
        b[a + 12 >> 2] = d;
        return;
      }

      function zc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        g = a + 4 | 0;
        h = a + 12 | 0;
        i = a + 8 | 0;

        a: while (1) {
          d = b[g >> 2] | 0;
          c = 0;

          while (1) {
            if ((c | 0) >= (d | 0)) { break a; }
            f = b[a >> 2] | 0;
            j = b[f + (c << 2) >> 2] | 0;
            if (!j) { c = c + 1 | 0; }else { break; }
          }

          c = f + (~~(+q(+(+s(10.0, + +(15 - (b[h >> 2] | 0) | 0)) * (+e[j >> 3] + +e[j + 8 >> 3]))) % +(d | 0)) >>> 0 << 2) | 0;
          d = b[c >> 2] | 0;

          b: do { if (d | 0) {
            f = j + 32 | 0;
            if ((d | 0) == (j | 0)) { b[c >> 2] = b[f >> 2]; }else {
              d = d + 32 | 0;
              c = b[d >> 2] | 0;
              if (!c) { break; }

              while (1) {
                if ((c | 0) == (j | 0)) { break; }
                d = c + 32 | 0;
                c = b[d >> 2] | 0;
                if (!c) { break b; }
              }

              b[d >> 2] = b[f >> 2];
            }
            Jc(j);
            b[i >> 2] = (b[i >> 2] | 0) + -1;
          } } while (0);
        }

        Jc(b[a >> 2] | 0);
        return;
      }

      function Ac(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0;
        e = b[a + 4 >> 2] | 0;
        d = 0;

        while (1) {
          if ((d | 0) >= (e | 0)) {
            c = 0;
            d = 4;
            break;
          }

          c = b[(b[a >> 2] | 0) + (d << 2) >> 2] | 0;
          if (!c) { d = d + 1 | 0; }else {
            d = 4;
            break;
          }
        }

        if ((d | 0) == 4) { return c | 0; }
        return 0;
      }

      function Bc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            f = 0,
            g = 0,
            h = 0;
        d = ~~(+q(+(+s(10.0, + +(15 - (b[a + 12 >> 2] | 0) | 0)) * (+e[c >> 3] + +e[c + 8 >> 3]))) % +(b[a + 4 >> 2] | 0)) >>> 0;
        d = (b[a >> 2] | 0) + (d << 2) | 0;
        f = b[d >> 2] | 0;

        if (!f) {
          h = 1;
          return h | 0;
        }

        h = c + 32 | 0;

        do { if ((f | 0) != (c | 0)) {
          d = b[f + 32 >> 2] | 0;

          if (!d) {
            h = 1;
            return h | 0;
          }

          g = d;

          while (1) {
            if ((g | 0) == (c | 0)) {
              g = 8;
              break;
            }

            d = b[g + 32 >> 2] | 0;

            if (!d) {
              d = 1;
              g = 10;
              break;
            } else {
              f = g;
              g = d;
            }
          }

          if ((g | 0) == 8) {
            b[f + 32 >> 2] = b[h >> 2];
            break;
          } else if ((g | 0) == 10) { return d | 0; }
        } else { b[d >> 2] = b[h >> 2]; } } while (0);

        Jc(c);
        h = a + 8 | 0;
        b[h >> 2] = (b[h >> 2] | 0) + -1;
        h = 0;
        return h | 0;
      }

      function Cc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = Ic(40) | 0;
        if (!h) { G(22922, 22892, 95, 22935); }
        b[h >> 2] = b[c >> 2];
        b[h + 4 >> 2] = b[c + 4 >> 2];
        b[h + 8 >> 2] = b[c + 8 >> 2];
        b[h + 12 >> 2] = b[c + 12 >> 2];
        g = h + 16 | 0;
        b[g >> 2] = b[d >> 2];
        b[g + 4 >> 2] = b[d + 4 >> 2];
        b[g + 8 >> 2] = b[d + 8 >> 2];
        b[g + 12 >> 2] = b[d + 12 >> 2];
        b[h + 32 >> 2] = 0;
        g = ~~(+q(+(+s(10.0, + +(15 - (b[a + 12 >> 2] | 0) | 0)) * (+e[c >> 3] + +e[c + 8 >> 3]))) % +(b[a + 4 >> 2] | 0)) >>> 0;
        g = (b[a >> 2] | 0) + (g << 2) | 0;
        f = b[g >> 2] | 0;

        do { if (!f) { b[g >> 2] = h; }else {
          while (1) {
            if (db(f, c) | 0 ? db(f + 16 | 0, d) | 0 : 0) { break; }
            g = b[f + 32 >> 2] | 0;
            f = (g | 0) == 0 ? f : g;

            if (!(b[f + 32 >> 2] | 0)) {
              i = 10;
              break;
            }
          }

          if ((i | 0) == 10) {
            b[f + 32 >> 2] = h;
            break;
          }

          Jc(h);
          i = f;
          return i | 0;
        } } while (0);

        i = a + 8 | 0;
        b[i >> 2] = (b[i >> 2] | 0) + 1;
        i = h;
        return i | 0;
      }

      function Dc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0,
            g = 0;
        g = ~~(+q(+(+s(10.0, + +(15 - (b[a + 12 >> 2] | 0) | 0)) * (+e[c >> 3] + +e[c + 8 >> 3]))) % +(b[a + 4 >> 2] | 0)) >>> 0;
        g = b[(b[a >> 2] | 0) + (g << 2) >> 2] | 0;

        if (!g) {
          d = 0;
          return d | 0;
        }

        if (!d) {
          a = g;

          while (1) {
            if (db(a, c) | 0) {
              f = 10;
              break;
            }

            a = b[a + 32 >> 2] | 0;

            if (!a) {
              a = 0;
              f = 10;
              break;
            }
          }

          if ((f | 0) == 10) { return a | 0; }
        }

        a = g;

        while (1) {
          if (db(a, c) | 0 ? db(a + 16 | 0, d) | 0 : 0) {
            f = 10;
            break;
          }

          a = b[a + 32 >> 2] | 0;

          if (!a) {
            a = 0;
            f = 10;
            break;
          }
        }

        if ((f | 0) == 10) { return a | 0; }
        return 0;
      }

      function Ec(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0;
        d = ~~(+q(+(+s(10.0, + +(15 - (b[a + 12 >> 2] | 0) | 0)) * (+e[c >> 3] + +e[c + 8 >> 3]))) % +(b[a + 4 >> 2] | 0)) >>> 0;
        a = b[(b[a >> 2] | 0) + (d << 2) >> 2] | 0;

        if (!a) {
          d = 0;
          return d | 0;
        }

        while (1) {
          if (db(a, c) | 0) {
            c = 5;
            break;
          }

          a = b[a + 32 >> 2] | 0;

          if (!a) {
            a = 0;
            c = 5;
            break;
          }
        }

        if ((c | 0) == 5) { return a | 0; }
        return 0;
      }

      function Fc() {
        return 22960;
      }

      function Gc(a) {
        a = +a;
        return + +Vc(+a);
      }

      function Hc(a) {
        a = +a;
        return ~~+Gc(a) | 0;
      }

      function Ic(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0;
        w = R;
        R = R + 16 | 0;
        n = w;

        do { if (a >>> 0 < 245) {
          k = a >>> 0 < 11 ? 16 : a + 11 & -8;
          a = k >>> 3;
          m = b[5741] | 0;
          d = m >>> a;

          if (d & 3 | 0) {
            c = (d & 1 ^ 1) + a | 0;
            a = 23004 + (c << 1 << 2) | 0;
            d = a + 8 | 0;
            e = b[d >> 2] | 0;
            f = e + 8 | 0;
            g = b[f >> 2] | 0;
            if ((g | 0) == (a | 0)) { b[5741] = m & ~(1 << c); }else {
              b[g + 12 >> 2] = a;
              b[d >> 2] = g;
            }
            v = c << 3;
            b[e + 4 >> 2] = v | 3;
            v = e + v + 4 | 0;
            b[v >> 2] = b[v >> 2] | 1;
            v = f;
            R = w;
            return v | 0;
          }

          l = b[5743] | 0;

          if (k >>> 0 > l >>> 0) {
            if (d | 0) {
              c = 2 << a;
              c = d << a & (c | 0 - c);
              c = (c & 0 - c) + -1 | 0;
              i = c >>> 12 & 16;
              c = c >>> i;
              d = c >>> 5 & 8;
              c = c >>> d;
              g = c >>> 2 & 4;
              c = c >>> g;
              a = c >>> 1 & 2;
              c = c >>> a;
              e = c >>> 1 & 1;
              e = (d | i | g | a | e) + (c >>> e) | 0;
              c = 23004 + (e << 1 << 2) | 0;
              a = c + 8 | 0;
              g = b[a >> 2] | 0;
              i = g + 8 | 0;
              d = b[i >> 2] | 0;

              if ((d | 0) == (c | 0)) {
                a = m & ~(1 << e);
                b[5741] = a;
              } else {
                b[d + 12 >> 2] = c;
                b[a >> 2] = d;
                a = m;
              }

              v = e << 3;
              h = v - k | 0;
              b[g + 4 >> 2] = k | 3;
              f = g + k | 0;
              b[f + 4 >> 2] = h | 1;
              b[g + v >> 2] = h;

              if (l | 0) {
                e = b[5746] | 0;
                c = l >>> 3;
                d = 23004 + (c << 1 << 2) | 0;
                c = 1 << c;

                if (!(a & c)) {
                  b[5741] = a | c;
                  c = d;
                  a = d + 8 | 0;
                } else {
                  a = d + 8 | 0;
                  c = b[a >> 2] | 0;
                }

                b[a >> 2] = e;
                b[c + 12 >> 2] = e;
                b[e + 8 >> 2] = c;
                b[e + 12 >> 2] = d;
              }

              b[5743] = h;
              b[5746] = f;
              v = i;
              R = w;
              return v | 0;
            }

            g = b[5742] | 0;

            if (g) {
              d = (g & 0 - g) + -1 | 0;
              f = d >>> 12 & 16;
              d = d >>> f;
              e = d >>> 5 & 8;
              d = d >>> e;
              h = d >>> 2 & 4;
              d = d >>> h;
              i = d >>> 1 & 2;
              d = d >>> i;
              j = d >>> 1 & 1;
              j = b[23268 + ((e | f | h | i | j) + (d >>> j) << 2) >> 2] | 0;
              d = j;
              i = j;
              j = (b[j + 4 >> 2] & -8) - k | 0;

              while (1) {
                a = b[d + 16 >> 2] | 0;

                if (!a) {
                  a = b[d + 20 >> 2] | 0;
                  if (!a) { break; }
                }

                h = (b[a + 4 >> 2] & -8) - k | 0;
                f = h >>> 0 < j >>> 0;
                d = a;
                i = f ? a : i;
                j = f ? h : j;
              }

              h = i + k | 0;

              if (h >>> 0 > i >>> 0) {
                f = b[i + 24 >> 2] | 0;
                c = b[i + 12 >> 2] | 0;

                do { if ((c | 0) == (i | 0)) {
                  a = i + 20 | 0;
                  c = b[a >> 2] | 0;

                  if (!c) {
                    a = i + 16 | 0;
                    c = b[a >> 2] | 0;

                    if (!c) {
                      d = 0;
                      break;
                    }
                  }

                  while (1) {
                    e = c + 20 | 0;
                    d = b[e >> 2] | 0;

                    if (!d) {
                      e = c + 16 | 0;
                      d = b[e >> 2] | 0;
                      if (!d) { break; }else {
                        c = d;
                        a = e;
                      }
                    } else {
                      c = d;
                      a = e;
                    }
                  }

                  b[a >> 2] = 0;
                  d = c;
                } else {
                  d = b[i + 8 >> 2] | 0;
                  b[d + 12 >> 2] = c;
                  b[c + 8 >> 2] = d;
                  d = c;
                } } while (0);

                do { if (f | 0) {
                  c = b[i + 28 >> 2] | 0;
                  a = 23268 + (c << 2) | 0;

                  if ((i | 0) == (b[a >> 2] | 0)) {
                    b[a >> 2] = d;

                    if (!d) {
                      b[5742] = g & ~(1 << c);
                      break;
                    }
                  } else {
                    v = f + 16 | 0;
                    b[((b[v >> 2] | 0) == (i | 0) ? v : f + 20 | 0) >> 2] = d;
                    if (!d) { break; }
                  }

                  b[d + 24 >> 2] = f;
                  c = b[i + 16 >> 2] | 0;

                  if (c | 0) {
                    b[d + 16 >> 2] = c;
                    b[c + 24 >> 2] = d;
                  }

                  c = b[i + 20 >> 2] | 0;

                  if (c | 0) {
                    b[d + 20 >> 2] = c;
                    b[c + 24 >> 2] = d;
                  }
                } } while (0);

                if (j >>> 0 < 16) {
                  v = j + k | 0;
                  b[i + 4 >> 2] = v | 3;
                  v = i + v + 4 | 0;
                  b[v >> 2] = b[v >> 2] | 1;
                } else {
                  b[i + 4 >> 2] = k | 3;
                  b[h + 4 >> 2] = j | 1;
                  b[h + j >> 2] = j;

                  if (l | 0) {
                    e = b[5746] | 0;
                    c = l >>> 3;
                    d = 23004 + (c << 1 << 2) | 0;
                    c = 1 << c;

                    if (!(c & m)) {
                      b[5741] = c | m;
                      c = d;
                      a = d + 8 | 0;
                    } else {
                      a = d + 8 | 0;
                      c = b[a >> 2] | 0;
                    }

                    b[a >> 2] = e;
                    b[c + 12 >> 2] = e;
                    b[e + 8 >> 2] = c;
                    b[e + 12 >> 2] = d;
                  }

                  b[5743] = j;
                  b[5746] = h;
                }

                v = i + 8 | 0;
                R = w;
                return v | 0;
              } else { m = k; }
            } else { m = k; }
          } else { m = k; }
        } else if (a >>> 0 <= 4294967231) {
          a = a + 11 | 0;
          k = a & -8;
          e = b[5742] | 0;

          if (e) {
            f = 0 - k | 0;
            a = a >>> 8;
            if (a) {
              if (k >>> 0 > 16777215) { j = 31; }else {
                m = (a + 1048320 | 0) >>> 16 & 8;
                q = a << m;
                i = (q + 520192 | 0) >>> 16 & 4;
                q = q << i;
                j = (q + 245760 | 0) >>> 16 & 2;
                j = 14 - (i | m | j) + (q << j >>> 15) | 0;
                j = k >>> (j + 7 | 0) & 1 | j << 1;
              }
            } else { j = 0; }
            d = b[23268 + (j << 2) >> 2] | 0;

            a: do { if (!d) {
              d = 0;
              a = 0;
              q = 61;
            } else {
              a = 0;
              i = k << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);
              g = 0;

              while (1) {
                h = (b[d + 4 >> 2] & -8) - k | 0;
                if (h >>> 0 < f >>> 0) { if (!h) {
                  a = d;
                  f = 0;
                  q = 65;
                  break a;
                } else {
                  a = d;
                  f = h;
                } }
                q = b[d + 20 >> 2] | 0;
                d = b[d + 16 + (i >>> 31 << 2) >> 2] | 0;
                g = (q | 0) == 0 | (q | 0) == (d | 0) ? g : q;

                if (!d) {
                  d = g;
                  q = 61;
                  break;
                } else { i = i << 1; }
              }
            } } while (0);

            if ((q | 0) == 61) {
              if ((d | 0) == 0 & (a | 0) == 0) {
                a = 2 << j;
                a = (a | 0 - a) & e;

                if (!a) {
                  m = k;
                  break;
                }

                m = (a & 0 - a) + -1 | 0;
                h = m >>> 12 & 16;
                m = m >>> h;
                g = m >>> 5 & 8;
                m = m >>> g;
                i = m >>> 2 & 4;
                m = m >>> i;
                j = m >>> 1 & 2;
                m = m >>> j;
                d = m >>> 1 & 1;
                a = 0;
                d = b[23268 + ((g | h | i | j | d) + (m >>> d) << 2) >> 2] | 0;
              }

              if (!d) {
                i = a;
                h = f;
              } else { q = 65; }
            }

            if ((q | 0) == 65) {
              g = d;

              while (1) {
                m = (b[g + 4 >> 2] & -8) - k | 0;
                d = m >>> 0 < f >>> 0;
                f = d ? m : f;
                a = d ? g : a;
                d = b[g + 16 >> 2] | 0;
                if (!d) { d = b[g + 20 >> 2] | 0; }

                if (!d) {
                  i = a;
                  h = f;
                  break;
                } else { g = d; }
              }
            }

            if (((i | 0) != 0 ? h >>> 0 < ((b[5743] | 0) - k | 0) >>> 0 : 0) ? (l = i + k | 0, l >>> 0 > i >>> 0) : 0) {
              g = b[i + 24 >> 2] | 0;
              c = b[i + 12 >> 2] | 0;

              do { if ((c | 0) == (i | 0)) {
                a = i + 20 | 0;
                c = b[a >> 2] | 0;

                if (!c) {
                  a = i + 16 | 0;
                  c = b[a >> 2] | 0;

                  if (!c) {
                    c = 0;
                    break;
                  }
                }

                while (1) {
                  f = c + 20 | 0;
                  d = b[f >> 2] | 0;

                  if (!d) {
                    f = c + 16 | 0;
                    d = b[f >> 2] | 0;
                    if (!d) { break; }else {
                      c = d;
                      a = f;
                    }
                  } else {
                    c = d;
                    a = f;
                  }
                }

                b[a >> 2] = 0;
              } else {
                v = b[i + 8 >> 2] | 0;
                b[v + 12 >> 2] = c;
                b[c + 8 >> 2] = v;
              } } while (0);

              do { if (g) {
                a = b[i + 28 >> 2] | 0;
                d = 23268 + (a << 2) | 0;

                if ((i | 0) == (b[d >> 2] | 0)) {
                  b[d >> 2] = c;

                  if (!c) {
                    e = e & ~(1 << a);
                    b[5742] = e;
                    break;
                  }
                } else {
                  v = g + 16 | 0;
                  b[((b[v >> 2] | 0) == (i | 0) ? v : g + 20 | 0) >> 2] = c;
                  if (!c) { break; }
                }

                b[c + 24 >> 2] = g;
                a = b[i + 16 >> 2] | 0;

                if (a | 0) {
                  b[c + 16 >> 2] = a;
                  b[a + 24 >> 2] = c;
                }

                a = b[i + 20 >> 2] | 0;

                if (a) {
                  b[c + 20 >> 2] = a;
                  b[a + 24 >> 2] = c;
                }
              } } while (0);

              b: do { if (h >>> 0 < 16) {
                v = h + k | 0;
                b[i + 4 >> 2] = v | 3;
                v = i + v + 4 | 0;
                b[v >> 2] = b[v >> 2] | 1;
              } else {
                b[i + 4 >> 2] = k | 3;
                b[l + 4 >> 2] = h | 1;
                b[l + h >> 2] = h;
                c = h >>> 3;

                if (h >>> 0 < 256) {
                  d = 23004 + (c << 1 << 2) | 0;
                  a = b[5741] | 0;
                  c = 1 << c;

                  if (!(a & c)) {
                    b[5741] = a | c;
                    c = d;
                    a = d + 8 | 0;
                  } else {
                    a = d + 8 | 0;
                    c = b[a >> 2] | 0;
                  }

                  b[a >> 2] = l;
                  b[c + 12 >> 2] = l;
                  b[l + 8 >> 2] = c;
                  b[l + 12 >> 2] = d;
                  break;
                }

                c = h >>> 8;
                if (c) {
                  if (h >>> 0 > 16777215) { d = 31; }else {
                    u = (c + 1048320 | 0) >>> 16 & 8;
                    v = c << u;
                    t = (v + 520192 | 0) >>> 16 & 4;
                    v = v << t;
                    d = (v + 245760 | 0) >>> 16 & 2;
                    d = 14 - (t | u | d) + (v << d >>> 15) | 0;
                    d = h >>> (d + 7 | 0) & 1 | d << 1;
                  }
                } else { d = 0; }
                c = 23268 + (d << 2) | 0;
                b[l + 28 >> 2] = d;
                a = l + 16 | 0;
                b[a + 4 >> 2] = 0;
                b[a >> 2] = 0;
                a = 1 << d;

                if (!(e & a)) {
                  b[5742] = e | a;
                  b[c >> 2] = l;
                  b[l + 24 >> 2] = c;
                  b[l + 12 >> 2] = l;
                  b[l + 8 >> 2] = l;
                  break;
                }

                c = b[c >> 2] | 0;

                c: do { if ((b[c + 4 >> 2] & -8 | 0) != (h | 0)) {
                  e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);

                  while (1) {
                    d = c + 16 + (e >>> 31 << 2) | 0;
                    a = b[d >> 2] | 0;
                    if (!a) { break; }

                    if ((b[a + 4 >> 2] & -8 | 0) == (h | 0)) {
                      c = a;
                      break c;
                    } else {
                      e = e << 1;
                      c = a;
                    }
                  }

                  b[d >> 2] = l;
                  b[l + 24 >> 2] = c;
                  b[l + 12 >> 2] = l;
                  b[l + 8 >> 2] = l;
                  break b;
                } } while (0);

                u = c + 8 | 0;
                v = b[u >> 2] | 0;
                b[v + 12 >> 2] = l;
                b[u >> 2] = l;
                b[l + 8 >> 2] = v;
                b[l + 12 >> 2] = c;
                b[l + 24 >> 2] = 0;
              } } while (0);

              v = i + 8 | 0;
              R = w;
              return v | 0;
            } else { m = k; }
          } else { m = k; }
        } else { m = -1; } } while (0);

        d = b[5743] | 0;

        if (d >>> 0 >= m >>> 0) {
          c = d - m | 0;
          a = b[5746] | 0;

          if (c >>> 0 > 15) {
            v = a + m | 0;
            b[5746] = v;
            b[5743] = c;
            b[v + 4 >> 2] = c | 1;
            b[a + d >> 2] = c;
            b[a + 4 >> 2] = m | 3;
          } else {
            b[5743] = 0;
            b[5746] = 0;
            b[a + 4 >> 2] = d | 3;
            v = a + d + 4 | 0;
            b[v >> 2] = b[v >> 2] | 1;
          }

          v = a + 8 | 0;
          R = w;
          return v | 0;
        }

        h = b[5744] | 0;

        if (h >>> 0 > m >>> 0) {
          t = h - m | 0;
          b[5744] = t;
          v = b[5747] | 0;
          u = v + m | 0;
          b[5747] = u;
          b[u + 4 >> 2] = t | 1;
          b[v + 4 >> 2] = m | 3;
          v = v + 8 | 0;
          R = w;
          return v | 0;
        }

        if (!(b[5859] | 0)) {
          b[5861] = 4096;
          b[5860] = 4096;
          b[5862] = -1;
          b[5863] = -1;
          b[5864] = 0;
          b[5852] = 0;
          b[5859] = n & -16 ^ 1431655768;
          a = 4096;
        } else { a = b[5861] | 0; }

        i = m + 48 | 0;
        j = m + 47 | 0;
        g = a + j | 0;
        f = 0 - a | 0;
        k = g & f;

        if (k >>> 0 <= m >>> 0) {
          v = 0;
          R = w;
          return v | 0;
        }

        a = b[5851] | 0;

        if (a | 0 ? (l = b[5849] | 0, n = l + k | 0, n >>> 0 <= l >>> 0 | n >>> 0 > a >>> 0) : 0) {
          v = 0;
          R = w;
          return v | 0;
        }

        d: do { if (!(b[5852] & 4)) {
          d = b[5747] | 0;

          e: do { if (d) {
            e = 23412;

            while (1) {
              n = b[e >> 2] | 0;
              if (n >>> 0 <= d >>> 0 ? (n + (b[e + 4 >> 2] | 0) | 0) >>> 0 > d >>> 0 : 0) { break; }
              a = b[e + 8 >> 2] | 0;

              if (!a) {
                q = 128;
                break e;
              } else { e = a; }
            }

            c = g - h & f;

            if (c >>> 0 < 2147483647) {
              a = Wc(c | 0) | 0;

              if ((a | 0) == ((b[e >> 2] | 0) + (b[e + 4 >> 2] | 0) | 0)) {
                if ((a | 0) != (-1 | 0)) {
                  h = c;
                  g = a;
                  q = 145;
                  break d;
                }
              } else {
                e = a;
                q = 136;
              }
            } else { c = 0; }
          } else { q = 128; } } while (0);

          do { if ((q | 0) == 128) {
            d = Wc(0) | 0;

            if ((d | 0) != (-1 | 0) ? (c = d, o = b[5860] | 0, p = o + -1 | 0, c = ((p & c | 0) == 0 ? 0 : (p + c & 0 - o) - c | 0) + k | 0, o = b[5849] | 0, p = c + o | 0, c >>> 0 > m >>> 0 & c >>> 0 < 2147483647) : 0) {
              n = b[5851] | 0;

              if (n | 0 ? p >>> 0 <= o >>> 0 | p >>> 0 > n >>> 0 : 0) {
                c = 0;
                break;
              }

              a = Wc(c | 0) | 0;

              if ((a | 0) == (d | 0)) {
                h = c;
                g = d;
                q = 145;
                break d;
              } else {
                e = a;
                q = 136;
              }
            } else { c = 0; }
          } } while (0);

          do { if ((q | 0) == 136) {
            d = 0 - c | 0;
            if (!(i >>> 0 > c >>> 0 & (c >>> 0 < 2147483647 & (e | 0) != (-1 | 0)))) { if ((e | 0) == (-1 | 0)) {
              c = 0;
              break;
            } else {
              h = c;
              g = e;
              q = 145;
              break d;
            } }
            a = b[5861] | 0;
            a = j - c + a & 0 - a;

            if (a >>> 0 >= 2147483647) {
              h = c;
              g = e;
              q = 145;
              break d;
            }

            if ((Wc(a | 0) | 0) == (-1 | 0)) {
              Wc(d | 0) | 0;
              c = 0;
              break;
            } else {
              h = a + c | 0;
              g = e;
              q = 145;
              break d;
            }
          } } while (0);

          b[5852] = b[5852] | 4;
          q = 143;
        } else {
          c = 0;
          q = 143;
        } } while (0);

        if (((q | 0) == 143 ? k >>> 0 < 2147483647 : 0) ? (t = Wc(k | 0) | 0, p = Wc(0) | 0, r = p - t | 0, s = r >>> 0 > (m + 40 | 0) >>> 0, !((t | 0) == (-1 | 0) | s ^ 1 | t >>> 0 < p >>> 0 & ((t | 0) != (-1 | 0) & (p | 0) != (-1 | 0)) ^ 1)) : 0) {
          h = s ? r : c;
          g = t;
          q = 145;
        }

        if ((q | 0) == 145) {
          c = (b[5849] | 0) + h | 0;
          b[5849] = c;
          if (c >>> 0 > (b[5850] | 0) >>> 0) { b[5850] = c; }
          j = b[5747] | 0;

          f: do { if (j) {
            c = 23412;

            while (1) {
              a = b[c >> 2] | 0;
              d = b[c + 4 >> 2] | 0;

              if ((g | 0) == (a + d | 0)) {
                q = 154;
                break;
              }

              e = b[c + 8 >> 2] | 0;
              if (!e) { break; }else { c = e; }
            }

            if (((q | 0) == 154 ? (u = c + 4 | 0, (b[c + 12 >> 2] & 8 | 0) == 0) : 0) ? g >>> 0 > j >>> 0 & a >>> 0 <= j >>> 0 : 0) {
              b[u >> 2] = d + h;
              v = (b[5744] | 0) + h | 0;
              t = j + 8 | 0;
              t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;
              u = j + t | 0;
              t = v - t | 0;
              b[5747] = u;
              b[5744] = t;
              b[u + 4 >> 2] = t | 1;
              b[j + v + 4 >> 2] = 40;
              b[5748] = b[5863];
              break;
            }

            if (g >>> 0 < (b[5745] | 0) >>> 0) { b[5745] = g; }
            d = g + h | 0;
            c = 23412;

            while (1) {
              if ((b[c >> 2] | 0) == (d | 0)) {
                q = 162;
                break;
              }

              a = b[c + 8 >> 2] | 0;
              if (!a) { break; }else { c = a; }
            }

            if ((q | 0) == 162 ? (b[c + 12 >> 2] & 8 | 0) == 0 : 0) {
              b[c >> 2] = g;
              l = c + 4 | 0;
              b[l >> 2] = (b[l >> 2] | 0) + h;
              l = g + 8 | 0;
              l = g + ((l & 7 | 0) == 0 ? 0 : 0 - l & 7) | 0;
              c = d + 8 | 0;
              c = d + ((c & 7 | 0) == 0 ? 0 : 0 - c & 7) | 0;
              k = l + m | 0;
              i = c - l - m | 0;
              b[l + 4 >> 2] = m | 3;

              g: do { if ((j | 0) == (c | 0)) {
                v = (b[5744] | 0) + i | 0;
                b[5744] = v;
                b[5747] = k;
                b[k + 4 >> 2] = v | 1;
              } else {
                if ((b[5746] | 0) == (c | 0)) {
                  v = (b[5743] | 0) + i | 0;
                  b[5743] = v;
                  b[5746] = k;
                  b[k + 4 >> 2] = v | 1;
                  b[k + v >> 2] = v;
                  break;
                }

                a = b[c + 4 >> 2] | 0;

                if ((a & 3 | 0) == 1) {
                  h = a & -8;
                  e = a >>> 3;

                  h: do { if (a >>> 0 < 256) {
                    a = b[c + 8 >> 2] | 0;
                    d = b[c + 12 >> 2] | 0;

                    if ((d | 0) == (a | 0)) {
                      b[5741] = b[5741] & ~(1 << e);
                      break;
                    } else {
                      b[a + 12 >> 2] = d;
                      b[d + 8 >> 2] = a;
                      break;
                    }
                  } else {
                    g = b[c + 24 >> 2] | 0;
                    a = b[c + 12 >> 2] | 0;

                    do { if ((a | 0) == (c | 0)) {
                      d = c + 16 | 0;
                      e = d + 4 | 0;
                      a = b[e >> 2] | 0;

                      if (!a) {
                        a = b[d >> 2] | 0;

                        if (!a) {
                          a = 0;
                          break;
                        }
                      } else { d = e; }

                      while (1) {
                        f = a + 20 | 0;
                        e = b[f >> 2] | 0;

                        if (!e) {
                          f = a + 16 | 0;
                          e = b[f >> 2] | 0;
                          if (!e) { break; }else {
                            a = e;
                            d = f;
                          }
                        } else {
                          a = e;
                          d = f;
                        }
                      }

                      b[d >> 2] = 0;
                    } else {
                      v = b[c + 8 >> 2] | 0;
                      b[v + 12 >> 2] = a;
                      b[a + 8 >> 2] = v;
                    } } while (0);

                    if (!g) { break; }
                    d = b[c + 28 >> 2] | 0;
                    e = 23268 + (d << 2) | 0;

                    do { if ((b[e >> 2] | 0) != (c | 0)) {
                      v = g + 16 | 0;
                      b[((b[v >> 2] | 0) == (c | 0) ? v : g + 20 | 0) >> 2] = a;
                      if (!a) { break h; }
                    } else {
                      b[e >> 2] = a;
                      if (a | 0) { break; }
                      b[5742] = b[5742] & ~(1 << d);
                      break h;
                    } } while (0);

                    b[a + 24 >> 2] = g;
                    d = c + 16 | 0;
                    e = b[d >> 2] | 0;

                    if (e | 0) {
                      b[a + 16 >> 2] = e;
                      b[e + 24 >> 2] = a;
                    }

                    d = b[d + 4 >> 2] | 0;
                    if (!d) { break; }
                    b[a + 20 >> 2] = d;
                    b[d + 24 >> 2] = a;
                  } } while (0);

                  c = c + h | 0;
                  f = h + i | 0;
                } else { f = i; }

                c = c + 4 | 0;
                b[c >> 2] = b[c >> 2] & -2;
                b[k + 4 >> 2] = f | 1;
                b[k + f >> 2] = f;
                c = f >>> 3;

                if (f >>> 0 < 256) {
                  d = 23004 + (c << 1 << 2) | 0;
                  a = b[5741] | 0;
                  c = 1 << c;

                  if (!(a & c)) {
                    b[5741] = a | c;
                    c = d;
                    a = d + 8 | 0;
                  } else {
                    a = d + 8 | 0;
                    c = b[a >> 2] | 0;
                  }

                  b[a >> 2] = k;
                  b[c + 12 >> 2] = k;
                  b[k + 8 >> 2] = c;
                  b[k + 12 >> 2] = d;
                  break;
                }

                c = f >>> 8;

                do { if (!c) { e = 0; }else {
                  if (f >>> 0 > 16777215) {
                    e = 31;
                    break;
                  }

                  u = (c + 1048320 | 0) >>> 16 & 8;
                  v = c << u;
                  t = (v + 520192 | 0) >>> 16 & 4;
                  v = v << t;
                  e = (v + 245760 | 0) >>> 16 & 2;
                  e = 14 - (t | u | e) + (v << e >>> 15) | 0;
                  e = f >>> (e + 7 | 0) & 1 | e << 1;
                } } while (0);

                c = 23268 + (e << 2) | 0;
                b[k + 28 >> 2] = e;
                a = k + 16 | 0;
                b[a + 4 >> 2] = 0;
                b[a >> 2] = 0;
                a = b[5742] | 0;
                d = 1 << e;

                if (!(a & d)) {
                  b[5742] = a | d;
                  b[c >> 2] = k;
                  b[k + 24 >> 2] = c;
                  b[k + 12 >> 2] = k;
                  b[k + 8 >> 2] = k;
                  break;
                }

                c = b[c >> 2] | 0;

                i: do { if ((b[c + 4 >> 2] & -8 | 0) != (f | 0)) {
                  e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);

                  while (1) {
                    d = c + 16 + (e >>> 31 << 2) | 0;
                    a = b[d >> 2] | 0;
                    if (!a) { break; }

                    if ((b[a + 4 >> 2] & -8 | 0) == (f | 0)) {
                      c = a;
                      break i;
                    } else {
                      e = e << 1;
                      c = a;
                    }
                  }

                  b[d >> 2] = k;
                  b[k + 24 >> 2] = c;
                  b[k + 12 >> 2] = k;
                  b[k + 8 >> 2] = k;
                  break g;
                } } while (0);

                u = c + 8 | 0;
                v = b[u >> 2] | 0;
                b[v + 12 >> 2] = k;
                b[u >> 2] = k;
                b[k + 8 >> 2] = v;
                b[k + 12 >> 2] = c;
                b[k + 24 >> 2] = 0;
              } } while (0);

              v = l + 8 | 0;
              R = w;
              return v | 0;
            }

            c = 23412;

            while (1) {
              a = b[c >> 2] | 0;
              if (a >>> 0 <= j >>> 0 ? (v = a + (b[c + 4 >> 2] | 0) | 0, v >>> 0 > j >>> 0) : 0) { break; }
              c = b[c + 8 >> 2] | 0;
            }

            f = v + -47 | 0;
            a = f + 8 | 0;
            a = f + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
            f = j + 16 | 0;
            a = a >>> 0 < f >>> 0 ? j : a;
            c = a + 8 | 0;
            d = h + -40 | 0;
            t = g + 8 | 0;
            t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;
            u = g + t | 0;
            t = d - t | 0;
            b[5747] = u;
            b[5744] = t;
            b[u + 4 >> 2] = t | 1;
            b[g + d + 4 >> 2] = 40;
            b[5748] = b[5863];
            d = a + 4 | 0;
            b[d >> 2] = 27;
            b[c >> 2] = b[5853];
            b[c + 4 >> 2] = b[5854];
            b[c + 8 >> 2] = b[5855];
            b[c + 12 >> 2] = b[5856];
            b[5853] = g;
            b[5854] = h;
            b[5856] = 0;
            b[5855] = c;
            c = a + 24 | 0;

            do {
              u = c;
              c = c + 4 | 0;
              b[c >> 2] = 7;
            } while ((u + 8 | 0) >>> 0 < v >>> 0);

            if ((a | 0) != (j | 0)) {
              g = a - j | 0;
              b[d >> 2] = b[d >> 2] & -2;
              b[j + 4 >> 2] = g | 1;
              b[a >> 2] = g;
              c = g >>> 3;

              if (g >>> 0 < 256) {
                d = 23004 + (c << 1 << 2) | 0;
                a = b[5741] | 0;
                c = 1 << c;

                if (!(a & c)) {
                  b[5741] = a | c;
                  c = d;
                  a = d + 8 | 0;
                } else {
                  a = d + 8 | 0;
                  c = b[a >> 2] | 0;
                }

                b[a >> 2] = j;
                b[c + 12 >> 2] = j;
                b[j + 8 >> 2] = c;
                b[j + 12 >> 2] = d;
                break;
              }

              c = g >>> 8;
              if (c) {
                if (g >>> 0 > 16777215) { e = 31; }else {
                  u = (c + 1048320 | 0) >>> 16 & 8;
                  v = c << u;
                  t = (v + 520192 | 0) >>> 16 & 4;
                  v = v << t;
                  e = (v + 245760 | 0) >>> 16 & 2;
                  e = 14 - (t | u | e) + (v << e >>> 15) | 0;
                  e = g >>> (e + 7 | 0) & 1 | e << 1;
                }
              } else { e = 0; }
              d = 23268 + (e << 2) | 0;
              b[j + 28 >> 2] = e;
              b[j + 20 >> 2] = 0;
              b[f >> 2] = 0;
              c = b[5742] | 0;
              a = 1 << e;

              if (!(c & a)) {
                b[5742] = c | a;
                b[d >> 2] = j;
                b[j + 24 >> 2] = d;
                b[j + 12 >> 2] = j;
                b[j + 8 >> 2] = j;
                break;
              }

              c = b[d >> 2] | 0;

              j: do { if ((b[c + 4 >> 2] & -8 | 0) != (g | 0)) {
                e = g << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);

                while (1) {
                  d = c + 16 + (e >>> 31 << 2) | 0;
                  a = b[d >> 2] | 0;
                  if (!a) { break; }

                  if ((b[a + 4 >> 2] & -8 | 0) == (g | 0)) {
                    c = a;
                    break j;
                  } else {
                    e = e << 1;
                    c = a;
                  }
                }

                b[d >> 2] = j;
                b[j + 24 >> 2] = c;
                b[j + 12 >> 2] = j;
                b[j + 8 >> 2] = j;
                break f;
              } } while (0);

              u = c + 8 | 0;
              v = b[u >> 2] | 0;
              b[v + 12 >> 2] = j;
              b[u >> 2] = j;
              b[j + 8 >> 2] = v;
              b[j + 12 >> 2] = c;
              b[j + 24 >> 2] = 0;
            }
          } else {
            v = b[5745] | 0;
            if ((v | 0) == 0 | g >>> 0 < v >>> 0) { b[5745] = g; }
            b[5853] = g;
            b[5854] = h;
            b[5856] = 0;
            b[5750] = b[5859];
            b[5749] = -1;
            b[5754] = 23004;
            b[5753] = 23004;
            b[5756] = 23012;
            b[5755] = 23012;
            b[5758] = 23020;
            b[5757] = 23020;
            b[5760] = 23028;
            b[5759] = 23028;
            b[5762] = 23036;
            b[5761] = 23036;
            b[5764] = 23044;
            b[5763] = 23044;
            b[5766] = 23052;
            b[5765] = 23052;
            b[5768] = 23060;
            b[5767] = 23060;
            b[5770] = 23068;
            b[5769] = 23068;
            b[5772] = 23076;
            b[5771] = 23076;
            b[5774] = 23084;
            b[5773] = 23084;
            b[5776] = 23092;
            b[5775] = 23092;
            b[5778] = 23100;
            b[5777] = 23100;
            b[5780] = 23108;
            b[5779] = 23108;
            b[5782] = 23116;
            b[5781] = 23116;
            b[5784] = 23124;
            b[5783] = 23124;
            b[5786] = 23132;
            b[5785] = 23132;
            b[5788] = 23140;
            b[5787] = 23140;
            b[5790] = 23148;
            b[5789] = 23148;
            b[5792] = 23156;
            b[5791] = 23156;
            b[5794] = 23164;
            b[5793] = 23164;
            b[5796] = 23172;
            b[5795] = 23172;
            b[5798] = 23180;
            b[5797] = 23180;
            b[5800] = 23188;
            b[5799] = 23188;
            b[5802] = 23196;
            b[5801] = 23196;
            b[5804] = 23204;
            b[5803] = 23204;
            b[5806] = 23212;
            b[5805] = 23212;
            b[5808] = 23220;
            b[5807] = 23220;
            b[5810] = 23228;
            b[5809] = 23228;
            b[5812] = 23236;
            b[5811] = 23236;
            b[5814] = 23244;
            b[5813] = 23244;
            b[5816] = 23252;
            b[5815] = 23252;
            v = h + -40 | 0;
            t = g + 8 | 0;
            t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;
            u = g + t | 0;
            t = v - t | 0;
            b[5747] = u;
            b[5744] = t;
            b[u + 4 >> 2] = t | 1;
            b[g + v + 4 >> 2] = 40;
            b[5748] = b[5863];
          } } while (0);

          c = b[5744] | 0;

          if (c >>> 0 > m >>> 0) {
            t = c - m | 0;
            b[5744] = t;
            v = b[5747] | 0;
            u = v + m | 0;
            b[5747] = u;
            b[u + 4 >> 2] = t | 1;
            b[v + 4 >> 2] = m | 3;
            v = v + 8 | 0;
            R = w;
            return v | 0;
          }
        }

        v = Fc() | 0;
        b[v >> 2] = 12;
        v = 0;
        R = w;
        return v | 0;
      }

      function Jc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        if (!a) { return; }
        d = a + -8 | 0;
        f = b[5745] | 0;
        a = b[a + -4 >> 2] | 0;
        c = a & -8;
        j = d + c | 0;

        do { if (!(a & 1)) {
          e = b[d >> 2] | 0;
          if (!(a & 3)) { return; }
          h = d + (0 - e) | 0;
          g = e + c | 0;
          if (h >>> 0 < f >>> 0) { return; }

          if ((b[5746] | 0) == (h | 0)) {
            a = j + 4 | 0;
            c = b[a >> 2] | 0;

            if ((c & 3 | 0) != 3) {
              i = h;
              c = g;
              break;
            }

            b[5743] = g;
            b[a >> 2] = c & -2;
            b[h + 4 >> 2] = g | 1;
            b[h + g >> 2] = g;
            return;
          }

          d = e >>> 3;

          if (e >>> 0 < 256) {
            a = b[h + 8 >> 2] | 0;
            c = b[h + 12 >> 2] | 0;

            if ((c | 0) == (a | 0)) {
              b[5741] = b[5741] & ~(1 << d);
              i = h;
              c = g;
              break;
            } else {
              b[a + 12 >> 2] = c;
              b[c + 8 >> 2] = a;
              i = h;
              c = g;
              break;
            }
          }

          f = b[h + 24 >> 2] | 0;
          a = b[h + 12 >> 2] | 0;

          do { if ((a | 0) == (h | 0)) {
            c = h + 16 | 0;
            d = c + 4 | 0;
            a = b[d >> 2] | 0;

            if (!a) {
              a = b[c >> 2] | 0;

              if (!a) {
                a = 0;
                break;
              }
            } else { c = d; }

            while (1) {
              e = a + 20 | 0;
              d = b[e >> 2] | 0;

              if (!d) {
                e = a + 16 | 0;
                d = b[e >> 2] | 0;
                if (!d) { break; }else {
                  a = d;
                  c = e;
                }
              } else {
                a = d;
                c = e;
              }
            }

            b[c >> 2] = 0;
          } else {
            i = b[h + 8 >> 2] | 0;
            b[i + 12 >> 2] = a;
            b[a + 8 >> 2] = i;
          } } while (0);

          if (f) {
            c = b[h + 28 >> 2] | 0;
            d = 23268 + (c << 2) | 0;

            if ((b[d >> 2] | 0) == (h | 0)) {
              b[d >> 2] = a;

              if (!a) {
                b[5742] = b[5742] & ~(1 << c);
                i = h;
                c = g;
                break;
              }
            } else {
              i = f + 16 | 0;
              b[((b[i >> 2] | 0) == (h | 0) ? i : f + 20 | 0) >> 2] = a;

              if (!a) {
                i = h;
                c = g;
                break;
              }
            }

            b[a + 24 >> 2] = f;
            c = h + 16 | 0;
            d = b[c >> 2] | 0;

            if (d | 0) {
              b[a + 16 >> 2] = d;
              b[d + 24 >> 2] = a;
            }

            c = b[c + 4 >> 2] | 0;

            if (c) {
              b[a + 20 >> 2] = c;
              b[c + 24 >> 2] = a;
              i = h;
              c = g;
            } else {
              i = h;
              c = g;
            }
          } else {
            i = h;
            c = g;
          }
        } else {
          i = d;
          h = d;
        } } while (0);

        if (h >>> 0 >= j >>> 0) { return; }
        a = j + 4 | 0;
        e = b[a >> 2] | 0;
        if (!(e & 1)) { return; }

        if (!(e & 2)) {
          if ((b[5747] | 0) == (j | 0)) {
            j = (b[5744] | 0) + c | 0;
            b[5744] = j;
            b[5747] = i;
            b[i + 4 >> 2] = j | 1;
            if ((i | 0) != (b[5746] | 0)) { return; }
            b[5746] = 0;
            b[5743] = 0;
            return;
          }

          if ((b[5746] | 0) == (j | 0)) {
            j = (b[5743] | 0) + c | 0;
            b[5743] = j;
            b[5746] = h;
            b[i + 4 >> 2] = j | 1;
            b[h + j >> 2] = j;
            return;
          }

          f = (e & -8) + c | 0;
          d = e >>> 3;

          do { if (e >>> 0 < 256) {
            c = b[j + 8 >> 2] | 0;
            a = b[j + 12 >> 2] | 0;

            if ((a | 0) == (c | 0)) {
              b[5741] = b[5741] & ~(1 << d);
              break;
            } else {
              b[c + 12 >> 2] = a;
              b[a + 8 >> 2] = c;
              break;
            }
          } else {
            g = b[j + 24 >> 2] | 0;
            a = b[j + 12 >> 2] | 0;

            do { if ((a | 0) == (j | 0)) {
              c = j + 16 | 0;
              d = c + 4 | 0;
              a = b[d >> 2] | 0;

              if (!a) {
                a = b[c >> 2] | 0;

                if (!a) {
                  d = 0;
                  break;
                }
              } else { c = d; }

              while (1) {
                e = a + 20 | 0;
                d = b[e >> 2] | 0;

                if (!d) {
                  e = a + 16 | 0;
                  d = b[e >> 2] | 0;
                  if (!d) { break; }else {
                    a = d;
                    c = e;
                  }
                } else {
                  a = d;
                  c = e;
                }
              }

              b[c >> 2] = 0;
              d = a;
            } else {
              d = b[j + 8 >> 2] | 0;
              b[d + 12 >> 2] = a;
              b[a + 8 >> 2] = d;
              d = a;
            } } while (0);

            if (g | 0) {
              a = b[j + 28 >> 2] | 0;
              c = 23268 + (a << 2) | 0;

              if ((b[c >> 2] | 0) == (j | 0)) {
                b[c >> 2] = d;

                if (!d) {
                  b[5742] = b[5742] & ~(1 << a);
                  break;
                }
              } else {
                e = g + 16 | 0;
                b[((b[e >> 2] | 0) == (j | 0) ? e : g + 20 | 0) >> 2] = d;
                if (!d) { break; }
              }

              b[d + 24 >> 2] = g;
              a = j + 16 | 0;
              c = b[a >> 2] | 0;

              if (c | 0) {
                b[d + 16 >> 2] = c;
                b[c + 24 >> 2] = d;
              }

              a = b[a + 4 >> 2] | 0;

              if (a | 0) {
                b[d + 20 >> 2] = a;
                b[a + 24 >> 2] = d;
              }
            }
          } } while (0);

          b[i + 4 >> 2] = f | 1;
          b[h + f >> 2] = f;

          if ((i | 0) == (b[5746] | 0)) {
            b[5743] = f;
            return;
          }
        } else {
          b[a >> 2] = e & -2;
          b[i + 4 >> 2] = c | 1;
          b[h + c >> 2] = c;
          f = c;
        }

        a = f >>> 3;

        if (f >>> 0 < 256) {
          d = 23004 + (a << 1 << 2) | 0;
          c = b[5741] | 0;
          a = 1 << a;

          if (!(c & a)) {
            b[5741] = c | a;
            a = d;
            c = d + 8 | 0;
          } else {
            c = d + 8 | 0;
            a = b[c >> 2] | 0;
          }

          b[c >> 2] = i;
          b[a + 12 >> 2] = i;
          b[i + 8 >> 2] = a;
          b[i + 12 >> 2] = d;
          return;
        }

        a = f >>> 8;
        if (a) {
          if (f >>> 0 > 16777215) { e = 31; }else {
            h = (a + 1048320 | 0) >>> 16 & 8;
            j = a << h;
            g = (j + 520192 | 0) >>> 16 & 4;
            j = j << g;
            e = (j + 245760 | 0) >>> 16 & 2;
            e = 14 - (g | h | e) + (j << e >>> 15) | 0;
            e = f >>> (e + 7 | 0) & 1 | e << 1;
          }
        } else { e = 0; }
        a = 23268 + (e << 2) | 0;
        b[i + 28 >> 2] = e;
        b[i + 20 >> 2] = 0;
        b[i + 16 >> 2] = 0;
        c = b[5742] | 0;
        d = 1 << e;

        a: do { if (!(c & d)) {
          b[5742] = c | d;
          b[a >> 2] = i;
          b[i + 24 >> 2] = a;
          b[i + 12 >> 2] = i;
          b[i + 8 >> 2] = i;
        } else {
          a = b[a >> 2] | 0;

          b: do { if ((b[a + 4 >> 2] & -8 | 0) != (f | 0)) {
            e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);

            while (1) {
              d = a + 16 + (e >>> 31 << 2) | 0;
              c = b[d >> 2] | 0;
              if (!c) { break; }

              if ((b[c + 4 >> 2] & -8 | 0) == (f | 0)) {
                a = c;
                break b;
              } else {
                e = e << 1;
                a = c;
              }
            }

            b[d >> 2] = i;
            b[i + 24 >> 2] = a;
            b[i + 12 >> 2] = i;
            b[i + 8 >> 2] = i;
            break a;
          } } while (0);

          h = a + 8 | 0;
          j = b[h >> 2] | 0;
          b[j + 12 >> 2] = i;
          b[h >> 2] = i;
          b[i + 8 >> 2] = j;
          b[i + 12 >> 2] = a;
          b[i + 24 >> 2] = 0;
        } } while (0);

        j = (b[5749] | 0) + -1 | 0;
        b[5749] = j;
        if (j | 0) { return; }
        a = 23420;

        while (1) {
          a = b[a >> 2] | 0;
          if (!a) { break; }else { a = a + 8 | 0; }
        }

        b[5749] = -1;
        return;
      }

      function Kc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0;

        if (a) {
          d = B(c, a) | 0;
          if ((c | a) >>> 0 > 65535) { d = ((d >>> 0) / (a >>> 0) | 0 | 0) == (c | 0) ? d : -1; }
        } else { d = 0; }

        a = Ic(d) | 0;
        if (!a) { return a | 0; }
        if (!(b[a + -4 >> 2] & 3)) { return a | 0; }
        Uc(a | 0, 0, d | 0) | 0;
        return a | 0;
      }

      function Lc(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        c = a + c >>> 0;
        return (E(b + d + (c >>> 0 < a >>> 0 | 0) >>> 0 | 0), c | 0) | 0;
      }

      function Mc(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
        return (E(d | 0), a - c >>> 0 | 0) | 0;
      }

      function Nc(a) {
        a = a | 0;
        return (a ? 31 - (C(a ^ a - 1) | 0) | 0 : 32) | 0;
      }

      function Oc(a, c, d, e, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        l = a;
        j = c;
        k = j;
        h = d;
        n = e;
        i = n;

        if (!k) {
          g = (f | 0) != 0;

          if (!i) {
            if (g) {
              b[f >> 2] = (l >>> 0) % (h >>> 0);
              b[f + 4 >> 2] = 0;
            }

            n = 0;
            f = (l >>> 0) / (h >>> 0) >>> 0;
            return (E(n | 0), f) | 0;
          } else {
            if (!g) {
              n = 0;
              f = 0;
              return (E(n | 0), f) | 0;
            }

            b[f >> 2] = a | 0;
            b[f + 4 >> 2] = c & 0;
            n = 0;
            f = 0;
            return (E(n | 0), f) | 0;
          }
        }

        g = (i | 0) == 0;

        do { if (h) {
          if (!g) {
            g = (C(i | 0) | 0) - (C(k | 0) | 0) | 0;

            if (g >>> 0 <= 31) {
              m = g + 1 | 0;
              i = 31 - g | 0;
              c = g - 31 >> 31;
              h = m;
              a = l >>> (m >>> 0) & c | k << i;
              c = k >>> (m >>> 0) & c;
              g = 0;
              i = l << i;
              break;
            }

            if (!f) {
              n = 0;
              f = 0;
              return (E(n | 0), f) | 0;
            }

            b[f >> 2] = a | 0;
            b[f + 4 >> 2] = j | c & 0;
            n = 0;
            f = 0;
            return (E(n | 0), f) | 0;
          }

          g = h - 1 | 0;

          if (g & h | 0) {
            i = (C(h | 0) | 0) + 33 - (C(k | 0) | 0) | 0;
            p = 64 - i | 0;
            m = 32 - i | 0;
            j = m >> 31;
            o = i - 32 | 0;
            c = o >> 31;
            h = i;
            a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & c;
            c = c & k >>> (i >>> 0);
            g = l << p & j;
            i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
            break;
          }

          if (f | 0) {
            b[f >> 2] = g & l;
            b[f + 4 >> 2] = 0;
          }

          if ((h | 0) == 1) {
            o = j | c & 0;
            p = a | 0 | 0;
            return (E(o | 0), p) | 0;
          } else {
            p = Nc(h | 0) | 0;
            o = k >>> (p >>> 0) | 0;
            p = k << 32 - p | l >>> (p >>> 0) | 0;
            return (E(o | 0), p) | 0;
          }
        } else {
          if (g) {
            if (f | 0) {
              b[f >> 2] = (k >>> 0) % (h >>> 0);
              b[f + 4 >> 2] = 0;
            }

            o = 0;
            p = (k >>> 0) / (h >>> 0) >>> 0;
            return (E(o | 0), p) | 0;
          }

          if (!l) {
            if (f | 0) {
              b[f >> 2] = 0;
              b[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
            }

            o = 0;
            p = (k >>> 0) / (i >>> 0) >>> 0;
            return (E(o | 0), p) | 0;
          }

          g = i - 1 | 0;

          if (!(g & i)) {
            if (f | 0) {
              b[f >> 2] = a | 0;
              b[f + 4 >> 2] = g & k | c & 0;
            }

            o = 0;
            p = k >>> ((Nc(i | 0) | 0) >>> 0);
            return (E(o | 0), p) | 0;
          }

          g = (C(i | 0) | 0) - (C(k | 0) | 0) | 0;

          if (g >>> 0 <= 30) {
            c = g + 1 | 0;
            i = 31 - g | 0;
            h = c;
            a = k << i | l >>> (c >>> 0);
            c = k >>> (c >>> 0);
            g = 0;
            i = l << i;
            break;
          }

          if (!f) {
            o = 0;
            p = 0;
            return (E(o | 0), p) | 0;
          }

          b[f >> 2] = a | 0;
          b[f + 4 >> 2] = j | c & 0;
          o = 0;
          p = 0;
          return (E(o | 0), p) | 0;
        } } while (0);

        if (!h) {
          k = i;
          j = 0;
          i = 0;
        } else {
          m = d | 0 | 0;
          l = n | e & 0;
          k = Lc(m | 0, l | 0, -1, -1) | 0;
          d = F() | 0;
          j = i;
          i = 0;

          do {
            e = j;
            j = g >>> 31 | j << 1;
            g = i | g << 1;
            e = a << 1 | e >>> 31 | 0;
            n = a >>> 31 | c << 1 | 0;
            Mc(k | 0, d | 0, e | 0, n | 0) | 0;
            p = F() | 0;
            o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
            i = o & 1;
            a = Mc(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
            c = F() | 0;
            h = h - 1 | 0;
          } while ((h | 0) != 0);

          k = j;
          j = 0;
        }

        h = 0;

        if (f | 0) {
          b[f >> 2] = a;
          b[f + 4 >> 2] = c;
        }

        o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
        p = (g << 1 | 0 >>> 31) & -2 | i;
        return (E(o | 0), p) | 0;
      }

      function Pc(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0;
        g = R;
        R = R + 16 | 0;
        f = g | 0;
        Oc(a, c, d, e, f) | 0;
        R = g;
        return (E(b[f + 4 >> 2] | 0), b[f >> 2] | 0) | 0;
      }

      function Qc(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;

        if ((c | 0) < 32) {
          E(b >>> c | 0);
          return a >>> c | (b & (1 << c) - 1) << 32 - c;
        }

        E(0);
        return b >>> c - 32 | 0;
      }

      function Rc(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;

        if ((c | 0) < 32) {
          E(b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c | 0);
          return a << c;
        }

        E(a << c - 32 | 0);
        return 0;
      }

      function Sc(a) {
        a = +a;
        return a >= 0.0 ? +p(a + .5) : +A(a - .5);
      }

      function Tc(c, d, e) {
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0;

        if ((e | 0) >= 8192) {
          J(c | 0, d | 0, e | 0) | 0;
          return c | 0;
        }

        h = c | 0;
        g = c + e | 0;

        if ((c & 3) == (d & 3)) {
          while (c & 3) {
            if (!e) { return h | 0; }
            a[c >> 0] = a[d >> 0] | 0;
            c = c + 1 | 0;
            d = d + 1 | 0;
            e = e - 1 | 0;
          }

          e = g & -4 | 0;
          f = e - 64 | 0;

          while ((c | 0) <= (f | 0)) {
            b[c >> 2] = b[d >> 2];
            b[c + 4 >> 2] = b[d + 4 >> 2];
            b[c + 8 >> 2] = b[d + 8 >> 2];
            b[c + 12 >> 2] = b[d + 12 >> 2];
            b[c + 16 >> 2] = b[d + 16 >> 2];
            b[c + 20 >> 2] = b[d + 20 >> 2];
            b[c + 24 >> 2] = b[d + 24 >> 2];
            b[c + 28 >> 2] = b[d + 28 >> 2];
            b[c + 32 >> 2] = b[d + 32 >> 2];
            b[c + 36 >> 2] = b[d + 36 >> 2];
            b[c + 40 >> 2] = b[d + 40 >> 2];
            b[c + 44 >> 2] = b[d + 44 >> 2];
            b[c + 48 >> 2] = b[d + 48 >> 2];
            b[c + 52 >> 2] = b[d + 52 >> 2];
            b[c + 56 >> 2] = b[d + 56 >> 2];
            b[c + 60 >> 2] = b[d + 60 >> 2];
            c = c + 64 | 0;
            d = d + 64 | 0;
          }

          while ((c | 0) < (e | 0)) {
            b[c >> 2] = b[d >> 2];
            c = c + 4 | 0;
            d = d + 4 | 0;
          }
        } else {
          e = g - 4 | 0;

          while ((c | 0) < (e | 0)) {
            a[c >> 0] = a[d >> 0] | 0;
            a[c + 1 >> 0] = a[d + 1 >> 0] | 0;
            a[c + 2 >> 0] = a[d + 2 >> 0] | 0;
            a[c + 3 >> 0] = a[d + 3 >> 0] | 0;
            c = c + 4 | 0;
            d = d + 4 | 0;
          }
        }

        while ((c | 0) < (g | 0)) {
          a[c >> 0] = a[d >> 0] | 0;
          c = c + 1 | 0;
          d = d + 1 | 0;
        }

        return h | 0;
      }

      function Uc(c, d, e) {
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = c + e | 0;
        d = d & 255;

        if ((e | 0) >= 67) {
          while (c & 3) {
            a[c >> 0] = d;
            c = c + 1 | 0;
          }

          f = h & -4 | 0;
          i = d | d << 8 | d << 16 | d << 24;
          g = f - 64 | 0;

          while ((c | 0) <= (g | 0)) {
            b[c >> 2] = i;
            b[c + 4 >> 2] = i;
            b[c + 8 >> 2] = i;
            b[c + 12 >> 2] = i;
            b[c + 16 >> 2] = i;
            b[c + 20 >> 2] = i;
            b[c + 24 >> 2] = i;
            b[c + 28 >> 2] = i;
            b[c + 32 >> 2] = i;
            b[c + 36 >> 2] = i;
            b[c + 40 >> 2] = i;
            b[c + 44 >> 2] = i;
            b[c + 48 >> 2] = i;
            b[c + 52 >> 2] = i;
            b[c + 56 >> 2] = i;
            b[c + 60 >> 2] = i;
            c = c + 64 | 0;
          }

          while ((c | 0) < (f | 0)) {
            b[c >> 2] = i;
            c = c + 4 | 0;
          }
        }

        while ((c | 0) < (h | 0)) {
          a[c >> 0] = d;
          c = c + 1 | 0;
        }

        return h - e | 0;
      }

      function Vc(a) {
        a = +a;
        return a >= 0.0 ? +p(a + .5) : +A(a - .5);
      }

      function Wc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0;
        e = I() | 0;
        d = b[g >> 2] | 0;
        c = d + a | 0;

        if ((a | 0) > 0 & (c | 0) < (d | 0) | (c | 0) < 0) {
          L(c | 0) | 0;
          H(12);
          return -1;
        }

        if ((c | 0) > (e | 0)) { if (!(K(c | 0) | 0)) {
          H(12);
          return -1;
        } }
        b[g >> 2] = c;
        return d | 0;
      } // EMSCRIPTEN_END_FUNCS


      return {
        ___uremdi3: Pc,
        _bitshift64Lshr: Qc,
        _bitshift64Shl: Rc,
        _calloc: Kc,
        _compact: vb,
        _destroyLinkedPolygon: Zb,
        _edgeLengthKm: lb,
        _edgeLengthM: mb,
        _emscripten_replace_memory: U,
        _experimentalH3ToLocalIj: cc,
        _experimentalLocalIjToH3: dc,
        _free: Jc,
        _geoToH3: Gb,
        _getDestinationH3IndexFromUnidirectionalEdge: Sb,
        _getH3IndexesFromUnidirectionalEdge: Ub,
        _getH3UnidirectionalEdge: Qb,
        _getH3UnidirectionalEdgeBoundary: Wb,
        _getH3UnidirectionalEdgesFromHexagon: Vb,
        _getOriginH3IndexFromUnidirectionalEdge: Rb,
        _getPentagonIndexes: Ob,
        _getRes0Indexes: qa,
        _h3Distance: ec,
        _h3GetBaseCell: ob,
        _h3GetFaces: Mb,
        _h3IndexesAreNeighbors: Pb,
        _h3IsPentagon: tb,
        _h3IsResClassIII: yb,
        _h3IsValid: pb,
        _h3Line: gc,
        _h3LineSize: fc,
        _h3SetToLinkedGeo: ha,
        _h3ToCenterChild: ub,
        _h3ToChildren: sb,
        _h3ToGeo: Jb,
        _h3ToGeoBoundary: Kb,
        _h3ToParent: qb,
        _h3UnidirectionalEdgeIsValid: Tb,
        _hexAreaKm2: jb,
        _hexAreaM2: kb,
        _hexRing: da,
        _i64Subtract: Mc,
        _kRing: _,
        _kRingDistances: $,
        _llvm_round_f64: Sc,
        _malloc: Ic,
        _maxFaceCount: Lb,
        _maxH3ToChildrenSize: rb,
        _maxKringSize: Z,
        _maxPolyfillSize: ea,
        _maxUncompactSize: xb,
        _memcpy: Tc,
        _memset: Uc,
        _numHexagons: nb,
        _pentagonIndexCount: Nb,
        _polyfill: fa,
        _res0IndexCount: pa,
        _round: Vc,
        _sbrk: Wc,
        _sizeOfCoordIJ: sc,
        _sizeOfGeoBoundary: oc,
        _sizeOfGeoCoord: nc,
        _sizeOfGeoPolygon: qc,
        _sizeOfGeofence: pc,
        _sizeOfH3Index: mc,
        _sizeOfLinkedGeoPolygon: rc,
        _uncompact: wb,
        establishStackSpace: Y,
        stackAlloc: V,
        stackRestore: X,
        stackSave: W
      };
    }( // EMSCRIPTEN_END_ASM
    asmGlobalArg, asmLibraryArg, buffer);

    var ___uremdi3 = Module["___uremdi3"] = asm["___uremdi3"];

    var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];

    var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];

    var _calloc = Module["_calloc"] = asm["_calloc"];

    var _compact = Module["_compact"] = asm["_compact"];

    var _destroyLinkedPolygon = Module["_destroyLinkedPolygon"] = asm["_destroyLinkedPolygon"];

    var _edgeLengthKm = Module["_edgeLengthKm"] = asm["_edgeLengthKm"];

    var _edgeLengthM = Module["_edgeLengthM"] = asm["_edgeLengthM"];

    var _emscripten_replace_memory = Module["_emscripten_replace_memory"] = asm["_emscripten_replace_memory"];

    var _experimentalH3ToLocalIj = Module["_experimentalH3ToLocalIj"] = asm["_experimentalH3ToLocalIj"];

    var _experimentalLocalIjToH3 = Module["_experimentalLocalIjToH3"] = asm["_experimentalLocalIjToH3"];

    var _free = Module["_free"] = asm["_free"];

    var _geoToH3 = Module["_geoToH3"] = asm["_geoToH3"];

    var _getDestinationH3IndexFromUnidirectionalEdge = Module["_getDestinationH3IndexFromUnidirectionalEdge"] = asm["_getDestinationH3IndexFromUnidirectionalEdge"];

    var _getH3IndexesFromUnidirectionalEdge = Module["_getH3IndexesFromUnidirectionalEdge"] = asm["_getH3IndexesFromUnidirectionalEdge"];

    var _getH3UnidirectionalEdge = Module["_getH3UnidirectionalEdge"] = asm["_getH3UnidirectionalEdge"];

    var _getH3UnidirectionalEdgeBoundary = Module["_getH3UnidirectionalEdgeBoundary"] = asm["_getH3UnidirectionalEdgeBoundary"];

    var _getH3UnidirectionalEdgesFromHexagon = Module["_getH3UnidirectionalEdgesFromHexagon"] = asm["_getH3UnidirectionalEdgesFromHexagon"];

    var _getOriginH3IndexFromUnidirectionalEdge = Module["_getOriginH3IndexFromUnidirectionalEdge"] = asm["_getOriginH3IndexFromUnidirectionalEdge"];

    var _getPentagonIndexes = Module["_getPentagonIndexes"] = asm["_getPentagonIndexes"];

    var _getRes0Indexes = Module["_getRes0Indexes"] = asm["_getRes0Indexes"];

    var _h3Distance = Module["_h3Distance"] = asm["_h3Distance"];

    var _h3GetBaseCell = Module["_h3GetBaseCell"] = asm["_h3GetBaseCell"];

    var _h3GetFaces = Module["_h3GetFaces"] = asm["_h3GetFaces"];

    var _h3IndexesAreNeighbors = Module["_h3IndexesAreNeighbors"] = asm["_h3IndexesAreNeighbors"];

    var _h3IsPentagon = Module["_h3IsPentagon"] = asm["_h3IsPentagon"];

    var _h3IsResClassIII = Module["_h3IsResClassIII"] = asm["_h3IsResClassIII"];

    var _h3IsValid = Module["_h3IsValid"] = asm["_h3IsValid"];

    var _h3Line = Module["_h3Line"] = asm["_h3Line"];

    var _h3LineSize = Module["_h3LineSize"] = asm["_h3LineSize"];

    var _h3SetToLinkedGeo = Module["_h3SetToLinkedGeo"] = asm["_h3SetToLinkedGeo"];

    var _h3ToCenterChild = Module["_h3ToCenterChild"] = asm["_h3ToCenterChild"];

    var _h3ToChildren = Module["_h3ToChildren"] = asm["_h3ToChildren"];

    var _h3ToGeo = Module["_h3ToGeo"] = asm["_h3ToGeo"];

    var _h3ToGeoBoundary = Module["_h3ToGeoBoundary"] = asm["_h3ToGeoBoundary"];

    var _h3ToParent = Module["_h3ToParent"] = asm["_h3ToParent"];

    var _h3UnidirectionalEdgeIsValid = Module["_h3UnidirectionalEdgeIsValid"] = asm["_h3UnidirectionalEdgeIsValid"];

    var _hexAreaKm2 = Module["_hexAreaKm2"] = asm["_hexAreaKm2"];

    var _hexAreaM2 = Module["_hexAreaM2"] = asm["_hexAreaM2"];

    var _hexRing = Module["_hexRing"] = asm["_hexRing"];

    var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];

    var _kRing = Module["_kRing"] = asm["_kRing"];

    var _kRingDistances = Module["_kRingDistances"] = asm["_kRingDistances"];

    var _llvm_round_f64 = Module["_llvm_round_f64"] = asm["_llvm_round_f64"];

    var _malloc = Module["_malloc"] = asm["_malloc"];

    var _maxFaceCount = Module["_maxFaceCount"] = asm["_maxFaceCount"];

    var _maxH3ToChildrenSize = Module["_maxH3ToChildrenSize"] = asm["_maxH3ToChildrenSize"];

    var _maxKringSize = Module["_maxKringSize"] = asm["_maxKringSize"];

    var _maxPolyfillSize = Module["_maxPolyfillSize"] = asm["_maxPolyfillSize"];

    var _maxUncompactSize = Module["_maxUncompactSize"] = asm["_maxUncompactSize"];

    var _memcpy = Module["_memcpy"] = asm["_memcpy"];

    var _memset = Module["_memset"] = asm["_memset"];

    var _numHexagons = Module["_numHexagons"] = asm["_numHexagons"];

    var _pentagonIndexCount = Module["_pentagonIndexCount"] = asm["_pentagonIndexCount"];

    var _polyfill = Module["_polyfill"] = asm["_polyfill"];

    var _res0IndexCount = Module["_res0IndexCount"] = asm["_res0IndexCount"];

    var _round = Module["_round"] = asm["_round"];

    var _sbrk = Module["_sbrk"] = asm["_sbrk"];

    var _sizeOfCoordIJ = Module["_sizeOfCoordIJ"] = asm["_sizeOfCoordIJ"];

    var _sizeOfGeoBoundary = Module["_sizeOfGeoBoundary"] = asm["_sizeOfGeoBoundary"];

    var _sizeOfGeoCoord = Module["_sizeOfGeoCoord"] = asm["_sizeOfGeoCoord"];

    var _sizeOfGeoPolygon = Module["_sizeOfGeoPolygon"] = asm["_sizeOfGeoPolygon"];

    var _sizeOfGeofence = Module["_sizeOfGeofence"] = asm["_sizeOfGeofence"];

    var _sizeOfH3Index = Module["_sizeOfH3Index"] = asm["_sizeOfH3Index"];

    var _sizeOfLinkedGeoPolygon = Module["_sizeOfLinkedGeoPolygon"] = asm["_sizeOfLinkedGeoPolygon"];

    var _uncompact = Module["_uncompact"] = asm["_uncompact"];

    var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];
    var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];
    var stackRestore = Module["stackRestore"] = asm["stackRestore"];
    var stackSave = Module["stackSave"] = asm["stackSave"];
    Module["asm"] = asm;
    Module["cwrap"] = cwrap;
    Module["setValue"] = setValue;
    Module["getValue"] = getValue;
    Module["getTempRet0"] = getTempRet0;

    if (memoryInitializer) {
      if (!isDataURI(memoryInitializer)) {
        memoryInitializer = locateFile(memoryInitializer);
      }

      if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
        var data = readBinary(memoryInitializer);
        HEAPU8.set(data, GLOBAL_BASE);
      } else {
        addRunDependency();

        var applyMemoryInitializer = function (data) {
          if (data.byteLength) { data = new Uint8Array(data); }
          HEAPU8.set(data, GLOBAL_BASE);
          if (Module["memoryInitializerRequest"]) { delete Module["memoryInitializerRequest"].response; }
          removeRunDependency();
        };

        var doBrowserLoad = function () {
          readAsync(memoryInitializer, applyMemoryInitializer, function () {
            throw "could not load memory initializer " + memoryInitializer;
          });
        };

        var memoryInitializerBytes = tryParseAsDataURI(memoryInitializer);

        if (memoryInitializerBytes) {
          applyMemoryInitializer(memoryInitializerBytes.buffer);
        } else if (Module["memoryInitializerRequest"]) {
          var useRequest = function () {
            var request = Module["memoryInitializerRequest"];
            var response = request.response;

            if (request.status !== 200 && request.status !== 0) {
              var data = tryParseAsDataURI(Module["memoryInitializerRequestURL"]);

              if (data) {
                response = data.buffer;
              } else {
                console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + request.status + ", retrying " + memoryInitializer);
                doBrowserLoad();
                return;
              }
            }

            applyMemoryInitializer(response);
          };

          if (Module["memoryInitializerRequest"].response) {
            setTimeout(useRequest, 0);
          } else {
            Module["memoryInitializerRequest"].addEventListener("load", useRequest);
          }
        } else {
          doBrowserLoad();
        }
      }
    }

    var calledRun;

    dependenciesFulfilled = function runCaller() {
      if (!calledRun) { run(); }
      if (!calledRun) { dependenciesFulfilled = runCaller; }
    };

    function run(args) {

      if (runDependencies > 0) {
        return;
      }

      preRun();
      if (runDependencies > 0) { return; }

      function doRun() {
        if (calledRun) { return; }
        calledRun = true;
        if (ABORT) { return; }
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"]) { Module["onRuntimeInitialized"](); }
        postRun();
      }

      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }

    Module["run"] = run;

    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }

      what += "";
      out(what);
      err(what);
      ABORT = true;
      throw "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
    }

    Module["abort"] = abort;

    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") { Module["preInit"] = [Module["preInit"]]; }

      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    return libh3;
  }(typeof libh3 === 'object' ? libh3 : {});

  /*
   * Copyright 2018-2019 Uber Technologies, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *         http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // Define the C bindings for the h3 library
  // Add some aliases to make the function definitions more intelligible
  var NUMBER = 'number';
  var BOOLEAN = NUMBER;
  var H3_LOWER = NUMBER;
  var H3_UPPER = NUMBER;
  var RESOLUTION = NUMBER;
  var POINTER = NUMBER; // Define the bindings to functions in the C lib. Functions are defined as
  // [name, return type, [arg types]]. You must run `npm run build-emscripten`
  // before new functions added here will be available.

  var BINDINGS = [// The size functions are inserted via build/sizes.h
  ['sizeOfH3Index', NUMBER], ['sizeOfGeoCoord', NUMBER], ['sizeOfGeoBoundary', NUMBER], ['sizeOfGeoPolygon', NUMBER], ['sizeOfGeofence', NUMBER], ['sizeOfLinkedGeoPolygon', NUMBER], ['sizeOfCoordIJ', NUMBER], // The remaining functions are defined in the core lib in h3Api.h
  ['h3IsValid', BOOLEAN, [H3_LOWER, H3_UPPER]], ['geoToH3', H3_LOWER, [NUMBER, NUMBER, RESOLUTION]], ['h3ToGeo', null, [H3_LOWER, H3_UPPER, POINTER]], ['h3ToGeoBoundary', null, [H3_LOWER, H3_UPPER, POINTER]], ['maxKringSize', NUMBER, [NUMBER]], ['kRing', null, [H3_LOWER, H3_UPPER, NUMBER, POINTER]], ['kRingDistances', null, [H3_LOWER, H3_UPPER, NUMBER, POINTER, POINTER]], ['hexRing', null, [H3_LOWER, H3_UPPER, NUMBER, POINTER]], ['maxPolyfillSize', NUMBER, [POINTER, RESOLUTION]], ['polyfill', null, [POINTER, RESOLUTION, POINTER]], ['h3SetToLinkedGeo', null, [POINTER, NUMBER, POINTER]], ['destroyLinkedPolygon', null, [POINTER]], ['compact', NUMBER, [POINTER, POINTER, NUMBER]], ['uncompact', NUMBER, [POINTER, NUMBER, POINTER, NUMBER, RESOLUTION]], ['maxUncompactSize', NUMBER, [POINTER, NUMBER, RESOLUTION]], ['h3IsPentagon', BOOLEAN, [H3_LOWER, H3_UPPER]], ['h3IsResClassIII', BOOLEAN, [H3_LOWER, H3_UPPER]], ['h3GetBaseCell', NUMBER, [H3_LOWER, H3_UPPER]], ['maxFaceCount', NUMBER, [H3_LOWER, H3_UPPER]], ['h3GetFaces', null, [H3_LOWER, H3_UPPER, POINTER]], ['h3ToParent', H3_LOWER, [H3_LOWER, H3_UPPER, RESOLUTION]], ['h3ToChildren', null, [H3_LOWER, H3_UPPER, RESOLUTION, POINTER]], ['h3ToCenterChild', H3_LOWER, [H3_LOWER, H3_UPPER, RESOLUTION]], ['maxH3ToChildrenSize', NUMBER, [H3_LOWER, H3_UPPER, RESOLUTION]], ['h3IndexesAreNeighbors', BOOLEAN, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER]], ['getH3UnidirectionalEdge', H3_LOWER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER]], ['getOriginH3IndexFromUnidirectionalEdge', H3_LOWER, [H3_LOWER, H3_UPPER]], ['getDestinationH3IndexFromUnidirectionalEdge', H3_LOWER, [H3_LOWER, H3_UPPER]], ['h3UnidirectionalEdgeIsValid', BOOLEAN, [H3_LOWER, H3_UPPER]], ['getH3IndexesFromUnidirectionalEdge', null, [H3_LOWER, H3_UPPER, POINTER]], ['getH3UnidirectionalEdgesFromHexagon', null, [H3_LOWER, H3_UPPER, POINTER]], ['getH3UnidirectionalEdgeBoundary', null, [H3_LOWER, H3_UPPER, POINTER]], ['h3Distance', NUMBER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER]], ['h3Line', NUMBER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER, POINTER]], ['h3LineSize', NUMBER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER]], ['experimentalH3ToLocalIj', NUMBER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER, POINTER]], ['experimentalLocalIjToH3', NUMBER, [H3_LOWER, H3_UPPER, POINTER, POINTER]], ['hexAreaM2', NUMBER, [RESOLUTION]], ['hexAreaKm2', NUMBER, [RESOLUTION]], ['edgeLengthM', NUMBER, [RESOLUTION]], ['edgeLengthKm', NUMBER, [RESOLUTION]], ['numHexagons', NUMBER, [RESOLUTION]], ['getRes0Indexes', null, [POINTER]], ['res0IndexCount', NUMBER], ['getPentagonIndexes', null, [NUMBER, POINTER]], ['pentagonIndexCount', NUMBER]];

  /*
   * Copyright 2018-2019 Uber Technologies, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *         http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var H3 = {}; // Create the bound functions themselves

  BINDINGS.forEach(function bind(def) {
    H3[def[0]] = libh3.cwrap.apply(libh3, def);
  }); // Alias the hexidecimal base for legibility

  var BASE_16 = 16; // ----------------------------------------------------------------------------
  // Byte size imports

  var SZ_INT = 4;
  var SZ_DBL = 8;
  var SZ_H3INDEX = H3.sizeOfH3Index();
  var SZ_GEOCOORD = H3.sizeOfGeoCoord();
  var SZ_GEOBOUNDARY = H3.sizeOfGeoBoundary();
  var SZ_GEOPOLYGON = H3.sizeOfGeoPolygon();
  var SZ_GEOFENCE = H3.sizeOfGeofence();
  var SZ_LINKED_GEOPOLYGON = H3.sizeOfLinkedGeoPolygon();
  var SZ_COORDIJ = H3.sizeOfCoordIJ(); // ----------------------------------------------------------------------------
  // Utilities and helpers

  /**
   * Validate a resolution, throwing an error if invalid
   * @private
   * @param  {mixed} res Value to validate
   * @throws {Error}     Error if invalid
   */

  function validateRes(res) {
    if (typeof res !== 'number' || res < 0 || res > 15 || Math.floor(res) !== res) {
      throw new Error(("Invalid resolution: " + res));
    }
  }
  /**
   * Convert an H3 index (64-bit hexidecimal string) into a "split long" - a pair of 32-bit ints
   * @private
   * @param  {H3Index} h3Index  H3 index to check
   * @return {number[]}         A two-element array with 32 lower bits and 32 upper bits
   */


  function h3IndexToSplitLong(h3Index) {
    if (typeof h3Index !== 'string') {
      return [0, 0];
    }

    var upper = parseInt(h3Index.substring(0, h3Index.length - 8), BASE_16);
    var lower = parseInt(h3Index.substring(h3Index.length - 8), BASE_16);
    return [lower, upper];
  }
  /**
   * Convert a 32-bit int to a hexdecimal string
   * @private
   * @param  {number} num  Integer to convert
   * @return {H3Index}     Hexidecimal string
   */


  function hexFrom32Bit(num) {
    if (num >= 0) {
      return num.toString(BASE_16);
    } // Handle negative numbers


    num = num & 0x7fffffff;
    var tempStr = zeroPad(8, num.toString(BASE_16));
    var topNum = (parseInt(tempStr[0], BASE_16) + 8).toString(BASE_16);
    tempStr = topNum + tempStr.substring(1);
    return tempStr;
  }
  /**
   * Get a H3 index from a split long (pair of 32-bit ints)
   * @private
   * @param  {number} lower Lower 32 bits
   * @param  {number} upper Upper 32 bits
   * @return {H3Index}       H3 index
   */


  function splitLongToh3Index(lower, upper) {
    return hexFrom32Bit(upper) + zeroPad(8, hexFrom32Bit(lower));
  }
  /**
   * Zero-pad a string to a given length
   * @private
   * @param  {number} fullLen Target length
   * @param  {string} numStr  String to zero-pad
   * @return {string}         Zero-padded string
   */


  function zeroPad(fullLen, numStr) {
    var numZeroes = fullLen - numStr.length;
    var outStr = '';

    for (var i = 0; i < numZeroes; i++) {
      outStr += '0';
    }

    outStr = outStr + numStr;
    return outStr;
  }
  /**
   * Populate a C-appropriate Geofence struct from a polygon array
   * @private
   * @param  {Array[]} polygonArray Polygon, as an array of coordinate pairs
   * @param  {number}  geofence     C pointer to a Geofence struct
   * @param  {boolean} isGeoJson    Whether coordinates are in [lng, lat] order per GeoJSON spec
   * @return {number}               C pointer to populated Geofence struct
   */


  function polygonArrayToGeofence(polygonArray, geofence, isGeoJson) {
    var numVerts = polygonArray.length;

    var geoCoordArray = libh3._calloc(numVerts, SZ_GEOCOORD); // Support [lng, lat] pairs if GeoJSON is specified


    var latIndex = isGeoJson ? 1 : 0;
    var lngIndex = isGeoJson ? 0 : 1;

    for (var i = 0; i < numVerts * 2; i += 2) {
      libh3.HEAPF64.set([polygonArray[i / 2][latIndex], polygonArray[i / 2][lngIndex]].map(degsToRads), geoCoordArray / SZ_DBL + i);
    }

    libh3.HEAPU32.set([numVerts, geoCoordArray], geofence / SZ_INT);
    return geofence;
  }
  /**
   * Create a C-appropriate GeoPolygon struct from an array of polygons
   * @private
   * @param  {Array[]} coordinates  Array of polygons, each an array of coordinate pairs
   * @param  {boolean} isGeoJson    Whether coordinates are in [lng, lat] order per GeoJSON spec
   * @return {number}               C pointer to populated GeoPolygon struct
   */


  function coordinatesToGeoPolygon(coordinates, isGeoJson) {
    // Any loops beyond the first loop are holes
    var numHoles = coordinates.length - 1;

    var geoPolygon = libh3._calloc(SZ_GEOPOLYGON); // Byte positions within the struct


    var geofenceOffset = 0;
    var numHolesOffset = geofenceOffset + SZ_GEOFENCE;
    var holesOffset = numHolesOffset + SZ_INT; // geofence is first part of struct

    polygonArrayToGeofence(coordinates[0], geoPolygon + geofenceOffset, isGeoJson);
    var holes;

    if (numHoles > 0) {
      holes = libh3._calloc(numHoles, SZ_GEOFENCE);

      for (var i = 0; i < numHoles; i++) {
        polygonArrayToGeofence(coordinates[i + 1], holes + SZ_GEOFENCE * i, isGeoJson);
      }
    }

    libh3.setValue(geoPolygon + numHolesOffset, numHoles, 'i32');
    libh3.setValue(geoPolygon + holesOffset, holes, 'i32');
    return geoPolygon;
  }
  /**
   * Free memory allocated for a GeoPolygon struct. It is an error to access the struct
   * after passing it to this method.
   * @private
   * @return {number} geoPolygon C pointer to populated GeoPolygon struct
   */


  function destroyGeoPolygon(geoPolygon) {
    // Byte positions within the struct
    var geofenceOffset = 0;
    var numHolesOffset = geofenceOffset + SZ_GEOFENCE;
    var holesOffset = numHolesOffset + SZ_INT; // Free the outer loop

    libh3._free(libh3.getValue(geoPolygon + geofenceOffset, 'i8*')); // Free the holes, if any


    var numHoles = libh3.getValue(geoPolygon + numHolesOffset, 'i32');

    for (var i = 0; i < numHoles; i++) {
      libh3._free(libh3.getValue(geoPolygon + holesOffset + SZ_GEOFENCE * i, 'i8*'));
    }

    libh3._free(geoPolygon);
  }
  /**
   * Read a long value, returning the lower and upper portions as separate 32-bit integers.
   * Because the upper bits are returned via side effect, the argument to this function is
   * intended to be the invocation that caused the side effect, e.g. readLong(H3.getSomeLong())
   * @private
   * @param  {number} invocation Invoked function returning a long value. The actual return
   *                             value of these functions is a 32-bit integer.
   * @return {number}            Long value as a [lower, upper] pair
   */


  function readLong(invocation) {
    // Upper 32-bits of the long set via side-effect
    var upper = libh3.getTempRet0();
    return [invocation, upper];
  }
  /**
   * Read an H3 index from a C return value. As with readLong, the argument to this function
   * is intended to be an invocation, e.g. readH3Index(H3.getSomeAddress()), to help ensure that
   * the temp value storing the upper bits of the long is still set.
   * @private
   * @param  {number} invocation  Invoked function returning a single H3 index
   * @return {H3Index}            H3 index, or null if index was invalid
   */


  function readH3Index(invocation) {
    var ref = readLong(invocation);
    var lower = ref[0];
    var upper = ref[1]; // The lower bits are allowed to be 0s, but if the upper bits are 0
    // this represents an invalid H3 index

    return upper ? splitLongToh3Index(lower, upper) : null;
  }
  /**
   * Read an H3 index from a pointer to C memory.
   * @private
   * @param  {number} cAddress  Pointer to allocated C memory
   * @param {number} offset     Offset, in number of H3 indexes, in case we're
   *                            reading an array
   * @return {H3Index}          H3 index, or null if index was invalid
   */


  function readH3IndexFromPointer(cAddress, offset) {
    if ( offset === void 0 ) offset = 0;

    var lower = libh3.getValue(cAddress + SZ_INT * offset * 2, 'i32');
    var upper = libh3.getValue(cAddress + SZ_INT * (offset * 2 + 1), 'i32'); // The lower bits are allowed to be 0s, but if the upper bits are 0
    // this represents an invalid H3 index

    return upper ? splitLongToh3Index(lower, upper) : null;
  }
  /**
   * Read an array of 64-bit H3 indexes from C and convert to a JS array of
   * H3 index strings
   * @private
   * @param  {number} cAddress    Pointer to C ouput array
   * @param  {number} maxCount    Max number of hexagons in array. Hexagons with
   *                              the value 0 will be skipped, so this isn't
   *                              necessarily the length of the output array.
   * @return {H3Index[]}          Array of H3 indexes
   */


  function readArrayOfHexagons(cAddress, maxCount) {
    var out = [];

    for (var i = 0; i < maxCount; i++) {
      var h3Index = readH3IndexFromPointer(cAddress, i);

      if (h3Index !== null) {
        out.push(h3Index);
      }
    }

    return out;
  }

  function readSingleCoord(cAddress) {
    return radsToDegs(libh3.getValue(cAddress, 'double'));
  }
  /**
   * Read a GeoCoord from C and return a [lat, lng] pair.
   * @private
   * @param  {number} cAddress    Pointer to C struct
   * @return {number[]}           [lat, lng] pair
   */


  function readGeoCoord(cAddress) {
    return [readSingleCoord(cAddress), readSingleCoord(cAddress + SZ_DBL)];
  }
  /**
   * Read a GeoCoord from C and return a GeoJSON-style [lng, lat] pair.
   * @private
   * @param  {number} cAddress    Pointer to C struct
   * @return {number[]}           [lng, lat] pair
   */


  function readGeoCoordGeoJson(cAddress) {
    return [readSingleCoord(cAddress + SZ_DBL), readSingleCoord(cAddress)];
  }
  /**
   * Read the GeoBoundary structure into a list of geo coordinate pairs
   * @private
   * @param {number}  geoBoundary     C pointer to GeoBoundary struct
   * @param {boolean} geoJsonCoords   Whether to provide GeoJSON coordinate order: [lng, lat]
   * @param {boolean} closedLoop      Whether to close the loop
   * @return {Array[]}                Array of geo coordinate pairs
   */


  function readGeoBoundary(geoBoundary, geoJsonCoords, closedLoop) {
    var numVerts = libh3.getValue(geoBoundary, 'i32'); // Note that though numVerts is an int, the coordinate doubles have to be
    // aligned to 8 bytes, hence the 8-byte offset here

    var vertsPos = geoBoundary + SZ_DBL;
    var out = []; // Support [lng, lat] pairs if GeoJSON is specified

    var readCoord = geoJsonCoords ? readGeoCoordGeoJson : readGeoCoord;

    for (var i = 0; i < numVerts * 2; i += 2) {
      out.push(readCoord(vertsPos + SZ_DBL * i));
    }

    if (closedLoop) {
      // Close loop if GeoJSON is specified
      out.push(out[0]);
    }

    return out;
  }
  /**
   * Get the hexagon containing a lat,lon point
   * @static
   * @param  {number} lat Latitude of point
   * @param  {number} lng Longtitude of point
   * @param  {number} res Resolution of hexagons to return
   * @return {H3Index}    H3 index
   */

  function geoToH3(lat, lng, res) {
    var latlng = libh3._malloc(SZ_GEOCOORD); // Slightly more efficient way to set the memory


    libh3.HEAPF64.set([lat, lng].map(degsToRads), latlng / SZ_DBL); // Read value as a split long

    var h3Index = readH3Index(H3.geoToH3(latlng, res));

    libh3._free(latlng);

    return h3Index;
  }
  /**
   * Get the lat,lon center of a given hexagon
   * @static
   * @param  {H3Index} h3Index  H3 index
   * @return {number[]}         Point as a [lat, lng] pair
   */

  function h3ToGeo(h3Index) {
    var latlng = libh3._malloc(SZ_GEOCOORD);

    var ref = h3IndexToSplitLong(h3Index);
    var lower = ref[0];
    var upper = ref[1];
    H3.h3ToGeo(lower, upper, latlng);
    var out = readGeoCoord(latlng);

    libh3._free(latlng);

    return out;
  }
  /**
   * Get the vertices of a given hexagon (or pentagon), as an array of [lat, lng]
   * points. For pentagons and hexagons on the edge of an icosahedron face, this
   * function may return up to 10 vertices.
   * @static
   * @param  {H3Index} h3Index          H3 index
   * @param {boolean} [formatAsGeoJson] Whether to provide GeoJSON output: [lng, lat], closed loops
   * @return {number[][]}               Array of [lat, lng] pairs
   */

  function h3ToGeoBoundary(h3Index, formatAsGeoJson) {
    var geoBoundary = libh3._malloc(SZ_GEOBOUNDARY);

    var ref = h3IndexToSplitLong(h3Index);
    var lower = ref[0];
    var upper = ref[1];
    H3.h3ToGeoBoundary(lower, upper, geoBoundary);
    var out = readGeoBoundary(geoBoundary, formatAsGeoJson, formatAsGeoJson);

    libh3._free(geoBoundary);

    return out;
  } // ----------------------------------------------------------------------------
  /**
   * Get all hexagons with centers contained in a given polygon. The polygon
   * is specified with GeoJson semantics as an array of loops. Each loop is
   * an array of [lat, lng] pairs (or [lng, lat] if isGeoJson is specified).
   * The first loop is the perimeter of the polygon, and subsequent loops are
   * expected to be holes.
   * @static
   * @param  {number[][] | number[][][]} coordinates
   *                                  Array of loops, or a single loop
   * @param  {number} res             Resolution of hexagons to return
   * @param  {boolean} [isGeoJson]    Whether to expect GeoJson-style [lng, lat]
   *                                  pairs instead of [lat, lng]
   * @return {H3Index[]}              H3 indexes for all hexagons in polygon
   */

  function polyfill(coordinates, res, isGeoJson) {
    validateRes(res);
    isGeoJson = Boolean(isGeoJson); // Guard against empty input

    if (coordinates.length === 0 || coordinates[0].length === 0) {
      return [];
    } // Wrap to expected format if a single loop is provided


    if (typeof coordinates[0][0] === 'number') {
      coordinates = [coordinates];
    }

    var geoPolygon = coordinatesToGeoPolygon(coordinates, isGeoJson);
    var arrayLen = H3.maxPolyfillSize(geoPolygon, res);

    var hexagons = libh3._calloc(arrayLen, SZ_H3INDEX);

    H3.polyfill(geoPolygon, res, hexagons);
    var out = readArrayOfHexagons(hexagons, arrayLen);

    libh3._free(hexagons);

    destroyGeoPolygon(geoPolygon);
    return out;
  }
  /**
   * Convert degrees to radians
   * @static
   * @param  {number} deg Value in degrees
   * @return {number}     Value in radians
   */

  function degsToRads(deg) {
    return deg * Math.PI / 180;
  }
  /**
   * Convert radians to degrees
   * @static
   * @param  {number} rad Value in radians
   * @return {number}     Value in degrees
   */

  function radsToDegs(rad) {
    return rad * 180 / Math.PI;
  }

  var THREE$5 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Color: three.Color,
    FaceColors: three.FaceColors,
    Geometry: three.Geometry,
    Mesh: three.Mesh,
    MeshBasicMaterial: three.MeshBasicMaterial,
    MeshLambertMaterial: three.MeshLambertMaterial,
    Object3D: three.Object3D
  };

  var HexBinLayerKapsule = index({
    props: {
      hexBinPointsData: {
        "default": []
      },
      hexBinPointLat: {
        "default": 'lat'
      },
      hexBinPointLng: {
        "default": 'lng'
      },
      hexBinPointWeight: {
        "default": 1
      },
      hexBinResolution: {
        "default": 4
      },
      // 0-15. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons.
      hexMargin: {
        "default": 0.2
      },
      // in fraction of diameter
      hexTopColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      hexSideColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      hexAltitude: {
        "default": function _default(_ref) {
          var sumWeight = _ref.sumWeight;
          return sumWeight * 0.01;
        }
      },
      // in units of globe radius
      hexBinMerge: {
        "default": false
      },
      // boolean. Whether to merge all hex geometries into a single mesh for rendering performance
      hexTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Accessors
      var latAccessor = index$1(state.hexBinPointLat);
      var lngAccessor = index$1(state.hexBinPointLng);
      var weightAccessor = index$1(state.hexBinPointWeight);
      var altitudeAccessor = index$1(state.hexAltitude);
      var topColorAccessor = index$1(state.hexTopColor);
      var sideColorAccessor = index$1(state.hexSideColor);
      var marginAccessor = index$1(state.hexMargin);
      var byH3Idx = index$2(state.hexBinPointsData.map(function (d) {
        return _objectSpread2({}, d, {
          h3Idx: geoToH3(latAccessor(d), lngAccessor(d), state.hexBinResolution)
        });
      }), 'h3Idx');
      var hexBins = Object.entries(byH3Idx).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            h3Idx = _ref3[0],
            points = _ref3[1];

        return {
          h3Idx: h3Idx,
          points: points,
          sumWeight: points.reduce(function (agg, d) {
            return agg + +weightAccessor(d);
          }, 0)
        };
      });
      var hexMaterials = {}; // indexed by color

      var scene = state.hexBinMerge ? new THREE$5.Object3D() : state.scene; // use fake scene if merging hex points

      threeDigest(hexBins, scene, {
        createObj: createObj,
        updateObj: updateObj,
        idAccessor: function idAccessor(d) {
          return d.h3Idx;
        }
      });

      if (state.hexBinMerge) {
        // merge points into a single mesh
        var hexPointsGeometry = new THREE$5.Geometry();
        hexBins.forEach(function (d) {
          var obj = d.__threeObj;
          d.__threeObj = undefined; // unbind merged points
          // color faces

          var topColor = new THREE$5.Color(topColorAccessor(d));
          var sideColor = new THREE$5.Color(sideColorAccessor(d));
          var topFaceIdx = obj.geometry.faces.length - 4;
          obj.geometry.faces.forEach(function (face, idx) {
            return face.color = idx >= topFaceIdx ? topColor : sideColor;
          });
          obj.updateMatrix();
          hexPointsGeometry.merge(obj.geometry, obj.matrix);
        });
        var hexPoints = new THREE$5.Mesh(hexPointsGeometry, new THREE$5.MeshBasicMaterial({
          color: 0xffffff,
          vertexColors: THREE$5.FaceColors,
          morphTargets: false
        }));
        hexPoints.__globeObjType = 'hexBinPoints'; // Add object type

        hexPoints.__data = hexBins; // Attach obj data

        state.scene.add(hexPoints);
      } //


      function createObj(d) {
        var obj = new THREE$5.Mesh();
        obj.__hexCenter = h3ToGeo(d.h3Idx);
        obj.__hexGeoJson = h3ToGeoBoundary(d.h3Idx, true); // stitch longitudes at the anti-meridian

        var centerLng = obj.__hexCenter[1];

        obj.__hexGeoJson.forEach(function (d) {
          var edgeLng = d[0];

          if (Math.abs(centerLng - edgeLng) > 170) {
            // normalize large lng distances
            d[0] += centerLng > edgeLng ? 360 : -360;
          }
        });

        obj.__globeObjType = 'hexbin'; // Add object type

        return obj;
      }

      function updateObj(obj, d) {
        var GeometryClass = state.hexBinMerge ? ConicPolygonGeometry : ConicPolygonGeometry;

        var applyUpdate = function applyUpdate(td) {
          var _obj$__currentTargetD = obj.__currentTargetD = td,
              alt = _obj$__currentTargetD.alt,
              margin = _obj$__currentTargetD.margin; // compute new geojson with relative margin


          var relNum = function relNum(st, end, rat) {
            return st - (st - end) * rat;
          };

          var _obj$__hexCenter = _slicedToArray(obj.__hexCenter, 2),
              clat = _obj$__hexCenter[0],
              clng = _obj$__hexCenter[1];

          var geoJson = margin === 0 ? obj.__hexGeoJson : obj.__hexGeoJson.map(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                elng = _ref5[0],
                elat = _ref5[1];

            return [[elng, clng], [elat, clat]].map(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                  st = _ref7[0],
                  end = _ref7[1];

              return relNum(st, end, margin);
            });
          });
          obj.geometry = new GeometryClass([geoJson], GLOBE_RADIUS, GLOBE_RADIUS * (1 + alt), false);
        };

        var targetD = {
          alt: +altitudeAccessor(d),
          margin: Math.max(0, Math.min(1, +marginAccessor(d)))
        };
        var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
          alt: -1e-3
        });

        if (Object.keys(targetD).some(function (k) {
          return currentTargetD[k] !== targetD[k];
        })) {
          if (state.hexBinMerge || !state.hexTransitionDuration || state.hexTransitionDuration < 0) {
            // set final position
            applyUpdate(targetD);
          } else {
            // animate
            new TWEEN.Tween(currentTargetD).to(targetD, state.hexTransitionDuration).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
          }
        }

        if (!state.hexBinMerge) {
          // Update materials on individual hex points
          var sideColor = sideColorAccessor(d);
          var topColor = topColorAccessor(d);
          [sideColor, topColor].forEach(function (color) {
            if (!hexMaterials.hasOwnProperty(color)) {
              var opacity = colorAlpha(color);
              hexMaterials[color] = new THREE$5.MeshLambertMaterial({
                color: colorStr2Hex(color),
                transparent: opacity < 1,
                opacity: opacity
              });
            }
          });
          obj.material = [sideColor, topColor].map(function (color) {
            return hexMaterials[color];
          });
        }
      }
    }
  });

  var THREE$6 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    DoubleSide: three.DoubleSide,
    Group: three.Group,
    Line: three.Line,
    LineBasicMaterial: three.LineBasicMaterial,
    Mesh: three.Mesh,
    MeshLambertMaterial: three.MeshLambertMaterial
  };

  var PolygonsLayerKapsule = index({
    props: {
      polygonsData: {
        "default": []
      },
      polygonGeoJsonGeometry: {
        "default": 'geometry'
      },
      polygonSideColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      polygonCapColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      polygonStrokeColor: {},
      polygonAltitude: {
        "default": 0.1
      },
      // in units of globe radius
      polygonsTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Data accessors
      var geoJsonAccessor = index$1(state.polygonGeoJsonGeometry);
      var altitudeAccessor = index$1(state.polygonAltitude);
      var capColorAccessor = index$1(state.polygonCapColor);
      var sideColorAccessor = index$1(state.polygonSideColor);
      var strokeColorAccessor = index$1(state.polygonStrokeColor);
      var singlePolygons = [];
      state.polygonsData.forEach(function (polygon) {
        var objAttrs = {
          data: polygon,
          capColor: capColorAccessor(polygon),
          sideColor: sideColorAccessor(polygon),
          strokeColor: strokeColorAccessor(polygon),
          altitude: +altitudeAccessor(polygon)
        };
        var geoJson = geoJsonAccessor(polygon);
        var geoId = polygon.__id || "".concat(Math.round(Math.random() * 1e9)); // generate and stamp polygon ids to keep track in digest

        polygon.__id = geoId;

        if (geoJson.type === 'Polygon') {
          singlePolygons.push(_objectSpread2({
            id: "".concat(geoId, "_0"),
            coords: geoJson.coordinates
          }, objAttrs));
        } else if (geoJson.type === 'MultiPolygon') {
          singlePolygons.push.apply(singlePolygons, _toConsumableArray(geoJson.coordinates.map(function (coords, idx) {
            return _objectSpread2({
              id: "".concat(geoId, "_").concat(idx),
              coords: coords
            }, objAttrs);
          })));
        } else {
          console.warn("Unsupported GeoJson geometry type: ".concat(geoJson.type, ". Skipping geometry..."));
        }
      });
      threeDigest(singlePolygons, state.scene, {
        idAccessor: function idAccessor(d) {
          return d.id;
        },
        createObj: function createObj() {
          var obj = new THREE$6.Group(); // conic geometry

          obj.add(new THREE$6.Mesh(undefined, [new THREE$6.MeshLambertMaterial({
            side: THREE$6.DoubleSide,
            depthWrite: true
          }), // side material
          new THREE$6.MeshLambertMaterial({
            side: THREE$6.DoubleSide,
            depthWrite: true
          }) // cap material
          ])); // polygon stroke

          obj.add(new THREE$6.Line(undefined, new THREE$6.LineBasicMaterial()));
          obj.__globeObjType = 'polygon'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, _ref) {
          var coords = _ref.coords,
              capColor = _ref.capColor,
              sideColor = _ref.sideColor,
              strokeColor = _ref.strokeColor,
              altitude = _ref.altitude;

          var _obj$children = _slicedToArray(obj.children, 2),
              conicObj = _obj$children[0],
              strokeObj = _obj$children[1]; // hide stroke if no color set


          var addStroke = !!strokeColor;
          strokeObj.visible = addStroke; // update materials

          [sideColor, capColor].forEach(function (color, materialIdx) {
            // conic object
            var material = conicObj.material[materialIdx];
            var opacity = colorAlpha(color);
            material.color.set(colorStr2Hex(color));
            material.transparent = opacity < 1;
            material.opacity = opacity;
          });

          if (addStroke) {
            // stroke object
            var material = strokeObj.material;
            var opacity = colorAlpha(strokeColor);
            material.color.set(colorStr2Hex(strokeColor));
            material.transparent = opacity < 1;
            material.opacity = opacity;
          }

          var geoJsonGeometry = {
            type: 'Polygon',
            coordinates: coords
          };

          var applyUpdate = function applyUpdate(td) {
            var _obj$__currentTargetD = obj.__currentTargetD = td,
                alt = _obj$__currentTargetD.alt;

            conicObj.geometry = new ConicPolygonBufferGeometry(coords, GLOBE_RADIUS, GLOBE_RADIUS * (1 + alt), false);
            addStroke && (strokeObj.geometry = new GeoJsonGeometry(geoJsonGeometry, GLOBE_RADIUS * (1 + alt + 1e-4))); // stroke slightly above the conic mesh
          };

          var targetD = {
            alt: altitude
          };
          var currentTargetD = obj.__currentTargetD || {
            alt: -1e-3
          };

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.polygonsTransitionDuration || state.polygonsTransitionDuration < 0) {
              // set final position
              applyUpdate(targetD);
            } else {
              // animate
              new TWEEN.Tween(currentTargetD).to(targetD, state.polygonsTransitionDuration).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
            }
          }
        }
      });
    }
  });

  var THREE$7 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    DoubleSide: three.DoubleSide,
    Group: three.Group,
    Mesh: three.Mesh,
    MeshLambertMaterial: three.MeshLambertMaterial
  };

  var HexedPolygonsLayerKapsule = index({
    props: {
      hexPolygonsData: {
        "default": []
      },
      hexPolygonGeoJsonGeometry: {
        "default": 'geometry'
      },
      hexPolygonColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      hexPolygonAltitude: {
        "default": 0.001
      },
      // in units of globe radius
      hexPolygonResolution: {
        "default": 3
      },
      // 0-15. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons.
      hexPolygonMargin: {
        "default": 0.2
      },
      // in fraction of hex diameter
      hexPolygonsTransitionDuration: {
        "default": 0,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Accessors
      var geoJsonAccessor = index$1(state.hexPolygonGeoJsonGeometry);
      var colorAccessor = index$1(state.hexPolygonColor);
      var altitudeAccessor = index$1(state.hexPolygonAltitude);
      var resolutionAccessor = index$1(state.hexPolygonResolution);
      var marginAccessor = index$1(state.hexPolygonMargin);
      threeDigest(state.hexPolygonsData, state.scene, {
        createObj: function createObj(d) {
          var obj = new THREE$7.Group();
          obj.__globeObjType = 'hexPolygon'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, d) {
          var geoJson = geoJsonAccessor(d);
          var h3Res = resolutionAccessor(d);
          var alt = altitudeAccessor(d);
          var margin = Math.max(0, Math.min(1, +marginAccessor(d)));
          var color = colorAccessor(d);
          var opacity = colorAlpha(color);
          var material = new THREE$7.MeshLambertMaterial({
            color: color,
            transparent: opacity < 1,
            opacity: opacity,
            side: THREE$7.DoubleSide,
            depthWrite: true
          });
          var h3Idxs = [];

          if (geoJson.type === 'Polygon') {
            h3Idxs.push.apply(h3Idxs, _toConsumableArray(polyfill(geoJson.coordinates, h3Res, true)));
          } else if (geoJson.type === 'MultiPolygon') {
            geoJson.coordinates.forEach(function (coords) {
              return h3Idxs.push.apply(h3Idxs, _toConsumableArray(polyfill(coords, h3Res, true)));
            });
          } else {
            console.warn("Unsupported GeoJson geometry type: ".concat(geoJson.type, ". Skipping geometry..."));
          }

          threeDigest(h3Idxs.map(function (h3Idx) {
            return {
              h3Idx: h3Idx
            };
          }), obj, {
            idAccessor: function idAccessor(d) {
              return d.h3Idx;
            },
            createObj: function createObj(_ref) {
              var h3Idx = _ref.h3Idx;
              var obj = new THREE$7.Mesh();
              obj.__hexCenter = h3ToGeo(h3Idx);
              obj.__hexGeoJson = h3ToGeoBoundary(h3Idx, true); // stitch longitudes at the anti-meridian

              var centerLng = obj.__hexCenter[1];

              obj.__hexGeoJson.forEach(function (d) {
                var edgeLng = d[0];

                if (Math.abs(centerLng - edgeLng) > 170) {
                  // normalize large lng distances
                  d[0] += centerLng > edgeLng ? 360 : -360;
                }
              });

              return obj;
            },
            updateObj: function updateObj(obj) {
              // update material
              obj.material = material;

              var applyUpdate = function applyUpdate(td) {
                var _obj$__currentTargetD = obj.__currentTargetD = td,
                    alt = _obj$__currentTargetD.alt,
                    margin = _obj$__currentTargetD.margin; // compute new geojson with relative margin


                var relNum = function relNum(st, end, rat) {
                  return st - (st - end) * rat;
                };

                var _obj$__hexCenter = _slicedToArray(obj.__hexCenter, 2),
                    clat = _obj$__hexCenter[0],
                    clng = _obj$__hexCenter[1];

                var geoJson = margin === 0 ? obj.__hexGeoJson : obj.__hexGeoJson.map(function (_ref2) {
                  var _ref3 = _slicedToArray(_ref2, 2),
                      elng = _ref3[0],
                      elat = _ref3[1];

                  return [[elng, clng], [elat, clat]].map(function (_ref4) {
                    var _ref5 = _slicedToArray(_ref4, 2),
                        st = _ref5[0],
                        end = _ref5[1];

                    return relNum(st, end, margin);
                  });
                });
                obj.geometry = new ConicPolygonGeometry([geoJson], GLOBE_RADIUS, GLOBE_RADIUS * (1 + alt), false);
              };

              var targetD = {
                alt: alt,
                margin: margin
              };
              var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
                alt: -1e-3
              });

              if (Object.keys(targetD).some(function (k) {
                return currentTargetD[k] !== targetD[k];
              })) {
                if (!state.hexPolygonsTransitionDuration || state.hexPolygonsTransitionDuration < 0) {
                  // set final position
                  applyUpdate(targetD);
                } else {
                  // animate
                  new TWEEN.Tween(currentTargetD).to(targetD, state.hexPolygonsTransitionDuration).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
                }
              }
            }
          });
        }
      });
    }
  });

  /**
   * @author WestLangley / http://github.com/WestLangley
   *
   */
  const THREE$8 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Box3: three.Box3,
    BufferGeometry: three.BufferGeometry,
    Float32BufferAttribute: three.Float32BufferAttribute,
    InstancedBufferGeometry: three.InstancedBufferGeometry,
    InstancedInterleavedBuffer: three.InstancedInterleavedBuffer,
    InterleavedBufferAttribute: three.InterleavedBufferAttribute,
    Sphere: three.Sphere,
    Vector3: three.Vector3,
    WireframeGeometry: three.WireframeGeometry
  }; // support multiple method names for backwards threejs compatibility

  var setAttributeFn$3 = new THREE$8.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';

  var LineSegmentsGeometry = function () {
    THREE$8.InstancedBufferGeometry.call(this);
    this.type = 'LineSegmentsGeometry';
    var positions = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0];
    var uvs = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2];
    var index = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(index);
    this[setAttributeFn$3]('position', new THREE$8.Float32BufferAttribute(positions, 3));
    this[setAttributeFn$3]('uv', new THREE$8.Float32BufferAttribute(uvs, 2));
  };

  LineSegmentsGeometry.prototype = Object.assign(Object.create(THREE$8.InstancedBufferGeometry.prototype), {
    constructor: LineSegmentsGeometry,
    isLineSegmentsGeometry: true,
    applyMatrix: function (matrix) {
      console.warn('THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().');
      return this.applyMatrix4(matrix);
    },
    applyMatrix4: function (matrix) {
      var start = this.attributes.instanceStart;
      var end = this.attributes.instanceEnd;

      if (start !== undefined) {
        matrix.applyToBufferAttribute(start);
        matrix.applyToBufferAttribute(end);
        start.data.needsUpdate = true;
      }

      if (this.boundingBox !== null) {
        this.computeBoundingBox();
      }

      if (this.boundingSphere !== null) {
        this.computeBoundingSphere();
      }

      return this;
    },
    setPositions: function (array) {
      var lineSegments;

      if (array instanceof Float32Array) {
        lineSegments = array;
      } else if (Array.isArray(array)) {
        lineSegments = new Float32Array(array);
      }

      var instanceBuffer = new THREE$8.InstancedInterleavedBuffer(lineSegments, 6, 1); // xyz, xyz

      this[setAttributeFn$3]('instanceStart', new THREE$8.InterleavedBufferAttribute(instanceBuffer, 3, 0)); // xyz

      this[setAttributeFn$3]('instanceEnd', new THREE$8.InterleavedBufferAttribute(instanceBuffer, 3, 3)); // xyz
      //

      this.computeBoundingBox();
      this.computeBoundingSphere();
      return this;
    },
    setColors: function (array) {
      var colors;

      if (array instanceof Float32Array) {
        colors = array;
      } else if (Array.isArray(array)) {
        colors = new Float32Array(array);
      }

      var instanceColorBuffer = new THREE$8.InstancedInterleavedBuffer(colors, 6, 1); // rgb, rgb

      this[setAttributeFn$3]('instanceColorStart', new THREE$8.InterleavedBufferAttribute(instanceColorBuffer, 3, 0)); // rgb

      this[setAttributeFn$3]('instanceColorEnd', new THREE$8.InterleavedBufferAttribute(instanceColorBuffer, 3, 3)); // rgb

      return this;
    },
    fromWireframeGeometry: function (geometry) {
      this.setPositions(geometry.attributes.position.array);
      return this;
    },
    fromEdgesGeometry: function (geometry) {
      this.setPositions(geometry.attributes.position.array);
      return this;
    },
    fromMesh: function (mesh) {
      this.fromWireframeGeometry(new THREE$8.WireframeGeometry(mesh.geometry)); // set colors, maybe

      return this;
    },
    fromLineSegements: function (lineSegments) {
      var geometry = lineSegments.geometry;

      if (geometry.isGeometry) {
        this.setPositions(geometry.vertices);
      } else if (geometry.isBufferGeometry) {
        this.setPositions(geometry.position.array); // assumes non-indexed
      } // set colors, maybe


      return this;
    },
    computeBoundingBox: function () {
      var box = new THREE$8.Box3();
      return function computeBoundingBox() {
        if (this.boundingBox === null) {
          this.boundingBox = new THREE$8.Box3();
        }

        var start = this.attributes.instanceStart;
        var end = this.attributes.instanceEnd;

        if (start !== undefined && end !== undefined) {
          this.boundingBox.setFromBufferAttribute(start);
          box.setFromBufferAttribute(end);
          this.boundingBox.union(box);
        }
      };
    }(),
    computeBoundingSphere: function () {
      var vector = new THREE$8.Vector3();
      return function computeBoundingSphere() {
        if (this.boundingSphere === null) {
          this.boundingSphere = new THREE$8.Sphere();
        }

        if (this.boundingBox === null) {
          this.computeBoundingBox();
        }

        var start = this.attributes.instanceStart;
        var end = this.attributes.instanceEnd;

        if (start !== undefined && end !== undefined) {
          var center = this.boundingSphere.center;
          this.boundingBox.getCenter(center);
          var maxRadiusSq = 0;

          for (var i = 0, il = start.count; i < il; i++) {
            vector.fromBufferAttribute(start, i);
            maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(vector));
            vector.fromBufferAttribute(end, i);
            maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(vector));
          }

          this.boundingSphere.radius = Math.sqrt(maxRadiusSq);

          if (isNaN(this.boundingSphere.radius)) {
            console.error('THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.', this);
          }
        }
      };
    }(),
    toJSON: function () {// todo
    },
    clone: function () {// todo
    },
    copy: function ()
    /* source */
    {
      // todo
      return this;
    }
  });

  /**
   * @author WestLangley / http://github.com/WestLangley
   *
   * parameters = {
   *  color: <hex>,
   *  linewidth: <float>,
   *  dashed: <boolean>,
   *  dashScale: <float>,
   *  dashSize: <float>,
   *  gapSize: <float>,
   *  resolution: <Vector2>, // to be set by renderer
   * }
   */
  const THREE$1$1 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    ShaderLib: three.ShaderLib,
    ShaderMaterial: three.ShaderMaterial,
    UniformsLib: three.UniformsLib,
    UniformsUtils: three.UniformsUtils,
    Vector2: three.Vector2
  };
  THREE$1$1.UniformsLib.line = {
    linewidth: {
      value: 1
    },
    resolution: {
      value: new three.Vector2(1, 1)
    },
    dashScale: {
      value: 1
    },
    dashSize: {
      value: 1
    },
    gapSize: {
      value: 1
    } // todo FIX - maybe change to totalSize

  };
  THREE$1$1.ShaderLib['line'] = {
    uniforms: THREE$1$1.UniformsUtils.merge([THREE$1$1.UniformsLib.common, THREE$1$1.UniformsLib.fog, THREE$1$1.UniformsLib.line]),
    vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,
    fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <premultiplied_alpha_fragment>
			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>

		}
		`
  };

  var LineMaterial = function (parameters) {
    THREE$1$1.ShaderMaterial.call(this, {
      type: 'LineMaterial',
      uniforms: THREE$1$1.UniformsUtils.clone(THREE$1$1.ShaderLib['line'].uniforms),
      vertexShader: THREE$1$1.ShaderLib['line'].vertexShader,
      fragmentShader: THREE$1$1.ShaderLib['line'].fragmentShader
    });
    this.dashed = false;
    Object.defineProperties(this, {
      color: {
        enumerable: true,
        get: function () {
          return this.uniforms.diffuse.value;
        },
        set: function (value) {
          this.uniforms.diffuse.value = value;
        }
      },
      linewidth: {
        enumerable: true,
        get: function () {
          return this.uniforms.linewidth.value;
        },
        set: function (value) {
          this.uniforms.linewidth.value = value;
        }
      },
      dashScale: {
        enumerable: true,
        get: function () {
          return this.uniforms.dashScale.value;
        },
        set: function (value) {
          this.uniforms.dashScale.value = value;
        }
      },
      dashSize: {
        enumerable: true,
        get: function () {
          return this.uniforms.dashSize.value;
        },
        set: function (value) {
          this.uniforms.dashSize.value = value;
        }
      },
      gapSize: {
        enumerable: true,
        get: function () {
          return this.uniforms.gapSize.value;
        },
        set: function (value) {
          this.uniforms.gapSize.value = value;
        }
      },
      resolution: {
        enumerable: true,
        get: function () {
          return this.uniforms.resolution.value;
        },
        set: function (value) {
          this.uniforms.resolution.value.copy(value);
        }
      }
    });
    this.setValues(parameters);
  };

  LineMaterial.prototype = Object.create(THREE$1$1.ShaderMaterial.prototype);
  LineMaterial.prototype.constructor = LineMaterial;
  LineMaterial.prototype.isLineMaterial = true;

  LineMaterial.prototype.copy = function (source) {
    THREE$1$1.ShaderMaterial.prototype.copy.call(this, source);
    this.color.copy(source.color);
    this.linewidth = source.linewidth;
    this.resolution = source.resolution; // todo

    return this;
  };

  /**
   * @author WestLangley / http://github.com/WestLangley
   *
   */
  const THREE$2$1 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three.BufferGeometry,
    InstancedInterleavedBuffer: three.InstancedInterleavedBuffer,
    InterleavedBufferAttribute: three.InterleavedBufferAttribute,
    Mesh: three.Mesh,
    Vector3: three.Vector3
  };

  var setAttributeFn$1$1 = new THREE$2$1.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';

  var LineSegments2 = function (geometry, material) {
    THREE$2$1.Mesh.call(this);
    this.type = 'LineSegments2';
    this.geometry = geometry !== undefined ? geometry : new LineSegmentsGeometry();
    this.material = material !== undefined ? material : new LineMaterial({
      color: Math.random() * 0xffffff
    });
  };

  LineSegments2.prototype = Object.assign(Object.create(THREE$2$1.Mesh.prototype), {
    constructor: LineSegments2,
    isLineSegments2: true,
    computeLineDistances: function () {
      // for backwards-compatability, but could be a method of LineSegmentsGeometry...
      var start = new THREE$2$1.Vector3();
      var end = new THREE$2$1.Vector3();
      return function computeLineDistances() {
        var geometry = this.geometry;
        var instanceStart = geometry.attributes.instanceStart;
        var instanceEnd = geometry.attributes.instanceEnd;
        var lineDistances = new Float32Array(2 * instanceStart.data.count);

        for (var i = 0, j = 0, l = instanceStart.data.count; i < l; i++, j += 2) {
          start.fromBufferAttribute(instanceStart, i);
          end.fromBufferAttribute(instanceEnd, i);
          lineDistances[j] = j === 0 ? 0 : lineDistances[j - 1];
          lineDistances[j + 1] = lineDistances[j] + start.distanceTo(end);
        }

        var instanceDistanceBuffer = new THREE$2$1.InstancedInterleavedBuffer(lineDistances, 2, 1); // d0, d1

        geometry[setAttributeFn$1$1]('instanceDistanceStart', new THREE$2$1.InterleavedBufferAttribute(instanceDistanceBuffer, 1, 0)); // d0

        geometry[setAttributeFn$1$1]('instanceDistanceEnd', new THREE$2$1.InterleavedBufferAttribute(instanceDistanceBuffer, 1, 1)); // d1

        return this;
      };
    }(),
    copy: function ()
    /* source */
    {
      // todo
      return this;
    }
  });

  /**
   * @author WestLangley / http://github.com/WestLangley
   *
   */

  var LineGeometry = function () {
    LineSegmentsGeometry.call(this);
    this.type = 'LineGeometry';
  };

  LineGeometry.prototype = Object.assign(Object.create(LineSegmentsGeometry.prototype), {
    constructor: LineGeometry,
    isLineGeometry: true,
    setPositions: function (array) {
      // converts [ x1, y1, z1,  x2, y2, z2, ... ] to pairs format
      var length = array.length - 3;
      var points = new Float32Array(2 * length);

      for (var i = 0; i < length; i += 3) {
        points[2 * i] = array[i];
        points[2 * i + 1] = array[i + 1];
        points[2 * i + 2] = array[i + 2];
        points[2 * i + 3] = array[i + 3];
        points[2 * i + 4] = array[i + 4];
        points[2 * i + 5] = array[i + 5];
      }

      LineSegmentsGeometry.prototype.setPositions.call(this, points);
      return this;
    },
    setColors: function (array) {
      // converts [ r1, g1, b1,  r2, g2, b2, ... ] to pairs format
      var length = array.length - 3;
      var colors = new Float32Array(2 * length);

      for (var i = 0; i < length; i += 3) {
        colors[2 * i] = array[i];
        colors[2 * i + 1] = array[i + 1];
        colors[2 * i + 2] = array[i + 2];
        colors[2 * i + 3] = array[i + 3];
        colors[2 * i + 4] = array[i + 4];
        colors[2 * i + 5] = array[i + 5];
      }

      LineSegmentsGeometry.prototype.setColors.call(this, colors);
      return this;
    },
    fromLine: function (line) {
      var geometry = line.geometry;

      if (geometry.isGeometry) {
        this.setPositions(geometry.vertices);
      } else if (geometry.isBufferGeometry) {
        this.setPositions(geometry.position.array); // assumes non-indexed
      } // set colors, maybe


      return this;
    },
    copy: function ()
    /* source */
    {
      // todo
      return this;
    }
  });

  /**
   * @author WestLangley / http://github.com/WestLangley
   *
   */

  var Line2 = function (geometry, material) {
    LineSegments2.call(this);
    this.type = 'Line2';
    this.geometry = geometry !== undefined ? geometry : new LineGeometry();
    this.material = material !== undefined ? material : new LineMaterial({
      color: Math.random() * 0xffffff
    });
  };

  Line2.prototype = Object.assign(Object.create(LineSegments2.prototype), {
    constructor: Line2,
    isLine2: true,
    copy: function ()
    /* source */
    {
      // todo
      return this;
    }
  });

  var THREE$9 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Vector3: three.Vector3
  };
  function interpolateVectors(fromPnts, toPnts) {
    var extendArr = function extendArr(arr, length) {
      var repeatItem = arr[arr.length - 1];
      return [].concat(_toConsumableArray(arr), _toConsumableArray(_toConsumableArray(new Array(length - arr.length)).map(function () {
        return repeatItem;
      })));
    };

    var arrLength = Math.max(fromPnts.length, toPnts.length);
    var interpolator = interpolateArray.apply(void 0, _toConsumableArray([fromPnts, toPnts].map(function (pnts) {
      return pnts.map(function (_ref) {
        var x = _ref.x,
            y = _ref.y,
            z = _ref.z;
        return [x, y, z];
      });
    }).map(function (arr) {
      return extendArr(arr, arrLength);
    })));
    return function (k) {
      return k === 0 ? fromPnts : k === 1 ? toPnts : interpolator(k).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 3),
            x = _ref3[0],
            y = _ref3[1],
            z = _ref3[2];

        return new THREE$9.Vector3(x, y, z);
      });
    };
  }

  var THREE$a = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    AdditiveBlending: three.AdditiveBlending,
    BufferGeometry: three.BufferGeometry,
    Color: three.Color,
    Float32BufferAttribute: three.Float32BufferAttribute,
    Line: three.Line,
    NoColors: three.NoColors,
    ShaderMaterial: three.ShaderMaterial,
    Vector3: three.Vector3,
    VertexColors: three.VertexColors
  };
  // support both modes for backwards threejs compatibility

  var setAttributeFn$4 = new THREE$a.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';
  var gradientShaders$1 = {
    uniforms: {
      // dash param defaults, all relative to full length
      dashOffset: {
        value: 0
      },
      dashSize: {
        value: 1
      },
      gapSize: {
        value: 0
      },
      dashTranslate: {
        value: 0
      } // used for animating the dash

    },
    vertexShader: "\n    uniform float dashTranslate;\n\n    attribute vec4 vertexColor;\n    varying vec4 vColor;\n\n    attribute float vertexRelDistance;\n    varying float vRelDistance;\n\n    void main() {\n      // pass through colors and distances\n      vColor = vertexColor;\n      vRelDistance = vertexRelDistance + dashTranslate;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ",
    fragmentShader: "\n    uniform float dashOffset;\n    uniform float dashSize;\n    uniform float gapSize;\n\n    varying vec4 vColor;\n    varying float vRelDistance;\n\n    void main() {\n      // ignore pixels in the gap\n      if (vRelDistance < dashOffset) discard;\n      if (mod(vRelDistance - dashOffset, dashSize + gapSize) > dashSize) discard;\n\n      // set px color: [r, g, b, a], interpolated between vertices\n      gl_FragColor = vColor;\n    }\n  "
  };
  var PathsLayerKapsule = index({
    props: {
      pathsData: {
        "default": []
      },
      pathPoints: {
        "default": function _default(pnts) {
          return pnts;
        }
      },
      pathPointLat: {
        "default": function _default(arr) {
          return arr[0];
        }
      },
      pathPointLng: {
        "default": function _default(arr) {
          return arr[1];
        }
      },
      pathPointAlt: {
        "default": 1e-3
      },
      pathResolution: {
        "default": 2
      },
      // in deg
      pathColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      pathStroke: {},
      // in deg
      pathDashLength: {
        "default": 1
      },
      // in units of line length
      pathDashGap: {
        "default": 0
      },
      pathDashInitialGap: {
        "default": 0
      },
      pathDashAnimateTime: {
        "default": 0
      },
      // ms
      pathTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      },
      // ms
      rendererSize: {} // necessary to set correct fatline proportions

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj; // Kick-off dash animations

      new FrameTicker$1().onTick.add(function (_, timeDelta) {
        state.pathsData.filter(function (d) {
          return d.__threeObj && d.__threeObj.material && d.__threeObj.__dashAnimateStep;
        }).forEach(function (d) {
          var obj = d.__threeObj;
          var step = obj.__dashAnimateStep * timeDelta;
          var curTranslate = obj.material.uniforms.dashTranslate.value % 1e9; // reset after 1B loops

          obj.material.uniforms.dashTranslate.value = curTranslate + step;
        });
      });
    },
    update: function update(state) {
      // Data accessors
      var pointsAccessor = index$1(state.pathPoints);
      var pointLatAccessor = index$1(state.pathPointLat);
      var pointLngAccessor = index$1(state.pathPointLng);
      var pointAltAccessor = index$1(state.pathPointAlt);
      var strokeAccessor = index$1(state.pathStroke);
      var colorAccessor = index$1(state.pathColor);
      var dashLengthAccessor = index$1(state.pathDashLength);
      var dashGapAccessor = index$1(state.pathDashGap);
      var dashInitialGapAccessor = index$1(state.pathDashInitialGap);
      var dashAnimateTimeAccessor = index$1(state.pathDashAnimateTime);
      var sharedShaderMaterial = new THREE$a.ShaderMaterial(_objectSpread2({}, gradientShaders$1, {
        transparent: true,
        blending: THREE$a.AdditiveBlending
      }));
      threeDigest(state.pathsData, state.scene, {
        createObj: function createObj(path) {
          var stroke = strokeAccessor(path);
          var useFatLine = stroke !== null && stroke !== undefined;
          var obj = useFatLine ? new Line2(new LineGeometry(), new LineMaterial()) : new THREE$a.Line(new THREE$a.BufferGeometry(), sharedShaderMaterial.clone() // Separate material instance per object to have dedicated uniforms (but shared shaders)
          );
          obj.__globeObjType = 'path'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, path) {
          var stroke = strokeAccessor(path);
          var useFatLine = stroke !== null && stroke !== undefined;
          var points = calcPath(pointsAccessor(path), pointLatAccessor, pointLngAccessor, pointAltAccessor, state.pathResolution);

          if (!useFatLine) {
            // set dash animation step
            var dashAnimateTime = dashAnimateTimeAccessor(path);
            obj.__dashAnimateStep = dashAnimateTime > 0 ? 1000 / dashAnimateTime : 0; // per second
            // set dash uniforms

            Object.assign(obj.material.uniforms, {
              dashSize: {
                value: dashLengthAccessor(path)
              },
              gapSize: {
                value: dashGapAccessor(path)
              },
              dashOffset: {
                value: dashInitialGapAccessor(path)
              }
            }); // calculate vertex colors (to create gradient)

            var vertexColorArray = calcColorVertexArray(colorAccessor(path), // single or array of colors
            points.length // numSegments
            ); // calculate vertex relative distances (for dashed lines)

            var vertexRelDistanceArray = calcVertexRelDistances(points.length, // numSegments
            1, // num vertices per segment
            true // run from end to start, to animate in the correct direction
            );
            obj.geometry[setAttributeFn$4]('vertexColor', vertexColorArray);
            obj.geometry[setAttributeFn$4]('vertexRelDistance', vertexRelDistanceArray);
          } else {
            // fat lines
            obj.material.resolution = state.rendererSize;
            {
              // set dash styling
              obj.__dashAnimateStep = 0; // can't animate dashes on fat lines (no initial gap)

              var dashLength = dashLengthAccessor(path);
              var dashGap = dashGapAccessor(path);
              obj.material.dashed = dashGap > 0; // temp hack to activate line dashes

              obj.material.dashed ? obj.material.defines.USE_DASH = "" : delete obj.material.defines.USE_DASH;

              if (obj.material.dashed) {
                obj.material.dashScale = 1 / calcLineDistance(points); // dash sizes relative to full line length

                obj.material.dashSize = dashLength;
                obj.material.gapSize = dashGap;
              }
            }
            {
              // set line colors
              var colors = colorAccessor(path);

              if (colors instanceof Array) {
                // calculate vertex colors (to create gradient)
                var _vertexColorArray = calcColorVertexArray(colorAccessor(path), // single or array of colors
                points.length - 1, // numSegments
                1, // num vertices per segment
                false);

                obj.geometry.setColors(_vertexColorArray.array);
                obj.material.vertexColors = THREE$a.VertexColors;
              } else {
                // single color
                var color = colors;
                var opacity = colorAlpha(color);
                obj.material.color = new THREE$a.Color(colorStr2Hex(color));
                obj.material.transparent = opacity < 1;
                obj.material.opacity = opacity;
                obj.material.vertexColors = THREE$a.NoColors;
              }
            }
            obj.material.needsUpdate = true;
          } // animate from start to finish by default


          var pointsInterpolator = interpolateVectors(path.__currentTargetD && path.__currentTargetD.points || [points[0]], points);

          var applyUpdate = function applyUpdate(td) {
            var _path$__currentTarget = path.__currentTargetD = td,
                stroke = _path$__currentTarget.stroke,
                interpolK = _path$__currentTarget.interpolK;

            var kPoints = path.__currentTargetD.points = pointsInterpolator(interpolK);

            if (useFatLine) {
              var _ref;

              obj.geometry.setPositions((_ref = []).concat.apply(_ref, _toConsumableArray(kPoints.map(function (_ref2) {
                var x = _ref2.x,
                    y = _ref2.y,
                    z = _ref2.z;
                return [x, y, z];
              }))));
              obj.material.linewidth = stroke; // necessary for dashed lines

              obj.material.dashed && obj.computeLineDistances();
            } else {
              obj.geometry.setFromPoints(kPoints);
              obj.geometry.computeBoundingSphere();
            }
          };

          var targetD = {
            stroke: stroke,
            interpolK: 1
          };
          var currentTargetD = Object.assign({}, path.__currentTargetD || targetD, {
            interpolK: 0
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.pathTransitionDuration || state.pathTransitionDuration < 0) {
              // set final position
              applyUpdate(targetD);
            } else {
              // animate
              new TWEEN.Tween(currentTargetD).to(targetD, state.pathTransitionDuration).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
            }
          }
        }
      }); //

      function calcLineDistance(pnts) {
        var totalDist = 0;
        var prevPnt;
        pnts.forEach(function (pnt) {
          prevPnt && (totalDist += prevPnt.distanceTo(pnt));
          prevPnt = pnt;
        });
        return totalDist;
      }

      function calcPath(points, latAccessor, lngAccessor, altAccessor, angularResolution) {
        var getInterpolatedVals = function getInterpolatedVals(start, end, numPnts) {
          var result = [];

          for (var i = 1; i <= numPnts; i++) {
            result.push(start + (end - start) * i / (numPnts + 1));
          }

          return result;
        };

        var interpolateLine = function interpolateLine() {
          var lineCoords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var maxDegDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var result = [];
          var prevPnt = null;
          lineCoords.forEach(function (pnt) {
            if (prevPnt) {
              var dist = Math.sqrt(Math.pow(pnt[0] - prevPnt[0], 2) + Math.pow(pnt[1] - prevPnt[1], 2));

              if (dist > maxDegDistance) {
                var numAdditionalPnts = Math.floor(dist / maxDegDistance);
                var lats = getInterpolatedVals(prevPnt[0], pnt[0], numAdditionalPnts);
                var lngs = getInterpolatedVals(prevPnt[1], pnt[1], numAdditionalPnts);
                var alts = getInterpolatedVals(prevPnt[2], pnt[2], numAdditionalPnts);

                for (var i = 0, len = lats.length; i < len; i++) {
                  result.push([lats[i], lngs[i], alts[i]]);
                }
              }
            }

            result.push(prevPnt = pnt);
          });
          return result;
        };

        var getVec = function getVec(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 3),
              lat = _ref4[0],
              lng = _ref4[1],
              alt = _ref4[2];

          var _polar2Cartesian = polar2Cartesian(lat, lng, alt),
              x = _polar2Cartesian.x,
              y = _polar2Cartesian.y,
              z = _polar2Cartesian.z;

          return new THREE$a.Vector3(x, y, z);
        };

        return interpolateLine(points.map(function (pnt) {
          return [latAccessor(pnt), lngAccessor(pnt), altAccessor(pnt)];
        }), angularResolution).map(getVec);
      }

      function calcColorVertexArray(colors, numSegments) {
        var numVerticesPerSegment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var includeAlpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

        var getVertexColor;

        if (colors instanceof Array) {
          // array of colors, interpolate at each step
          var colorScale = linear$1().domain(colors.map(function (_, idx) {
            return idx / (colors.length - 1);
          })) // same number of stops as colors
          .range(colors);

          getVertexColor = function getVertexColor(t) {
            return color2ShaderArr(colorScale(t), includeAlpha);
          };
        } else {
          // single color, use constant
          var vertexColor = color2ShaderArr(colors, includeAlpha);

          getVertexColor = function getVertexColor() {
            return vertexColor;
          };
        }

        var numArgs = includeAlpha ? 4 : 3;
        var vertexColorArray = new THREE$a.Float32BufferAttribute(numVerticesGroup * numArgs * numVerticesPerSegment, numArgs);

        for (var v = 0, l = numVerticesGroup; v < l; v++) {
          var _vertexColor = getVertexColor(v / (l - 1));

          for (var s = 0; s < numVerticesPerSegment; s++) {
            vertexColorArray.set(_vertexColor, (v * numVerticesPerSegment + s) * numArgs);
          }
        }

        return vertexColorArray;
      }

      function calcVertexRelDistances(numSegments) {
        var numVerticesPerSegment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

        var arrLen = numVerticesGroup * numVerticesPerSegment;
        var vertexDistanceArray = new THREE$a.Float32BufferAttribute(arrLen, 1);

        for (var v = 0, l = numVerticesGroup; v < l; v++) {
          var relDistance = v / (l - 1);

          for (var s = 0; s < numVerticesPerSegment; s++) {
            var idx = v * numVerticesPerSegment + s;
            var pos = invert ? arrLen - 1 - idx : idx;
            vertexDistanceArray.setX(pos, relDistance);
          }
        }

        return vertexDistanceArray;
      }
    }
  });

  var glyphs={"0":{x_min:73,x_max:715,ha:792,o:"m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 "},"1":{x_min:215.671875,x_max:574,ha:792,o:"m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 "},"2":{x_min:59,x_max:731,ha:792,o:"m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 "},"3":{x_min:54,x_max:737,ha:792,o:"m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 "},"4":{x_min:48,x_max:742.453125,ha:792,o:"m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 "},"5":{x_min:54.171875,x_max:738,ha:792,o:"m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 "},"6":{x_min:53,x_max:739,ha:792,o:"m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 "},"7":{x_min:58.71875,x_max:730.953125,ha:792,o:"m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 "},"8":{x_min:55,x_max:736,ha:792,o:"m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 "},"9":{x_min:53,x_max:739,ha:792,o:"m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 "},"ο":{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 "},S:{x_min:0,x_max:788,ha:890,o:"m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 "},"¦":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"/":{x_min:183.25,x_max:608.328125,ha:792,o:"m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 "},"Τ":{x_min:-0.4375,x_max:777.453125,ha:839,o:"m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 "},y:{x_min:0,x_max:684.78125,ha:771,o:"m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 "},"Π":{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 "},"ΐ":{x_min:-111,x_max:339,ha:361,o:"m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 "},g:{x_min:0,x_max:686,ha:838,o:"m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 "},"²":{x_min:0,x_max:442,ha:539,o:"m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 "},"–":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},"Κ":{x_min:0,x_max:819.5625,ha:893,o:"m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},"ƒ":{x_min:-46.265625,x_max:392,ha:513,o:"m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 "},e:{x_min:0,x_max:714,ha:813,o:"m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 "},"ό":{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 "},J:{x_min:0,x_max:588,ha:699,o:"m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 "},"»":{x_min:-1,x_max:503,ha:601,o:"m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 "},"©":{x_min:-3,x_max:1008,ha:1106,o:"m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 "},"ώ":{x_min:0,x_max:922,ha:1030,o:"m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 "},"^":{x_min:193.0625,x_max:598.609375,ha:792,o:"m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 "},"«":{x_min:0,x_max:507.203125,ha:604,o:"m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 "},D:{x_min:0,x_max:828,ha:935,o:"m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 "},"∙":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"ÿ":{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1009.71875,ha:1100,o:"m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 "},$:{x_min:0,x_max:700,ha:793,o:"m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 "},"\\":{x_min:-0.015625,x_max:425.0625,ha:522,o:"m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 "},"µ":{x_min:0,x_max:697.21875,ha:747,o:"m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 "},"Ι":{x_min:42,x_max:181,ha:297,o:"m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 "},"Ύ":{x_min:0,x_max:1144.5,ha:1214,o:"m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"’":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"Ν":{x_min:0,x_max:801,ha:915,o:"m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 "},"-":{x_min:8.71875,x_max:350.390625,ha:478,o:"m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 "},Q:{x_min:0,x_max:968,ha:1072,o:"m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 "},"ς":{x_min:1,x_max:676.28125,ha:740,o:"m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 "},M:{x_min:0,x_max:954,ha:1067,o:"m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 "},"Ψ":{x_min:0,x_max:1006,ha:1094,o:"m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 "},C:{x_min:0,x_max:886,ha:944,o:"m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 "},"!":{x_min:0,x_max:138,ha:236,o:"m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 "},"{":{x_min:0,x_max:480.5625,ha:578,o:"m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 "},X:{x_min:-0.015625,x_max:854.15625,ha:940,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 "},"#":{x_min:0,x_max:963.890625,ha:1061,o:"m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 "},"ι":{x_min:42,x_max:284,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 "},"Ά":{x_min:0,x_max:906.953125,ha:982,o:"m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},")":{x_min:0,x_max:318,ha:415,o:"m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 "},"ε":{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 "},"Δ":{x_min:0,x_max:952.78125,ha:1028,o:"m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 "},"}":{x_min:0,x_max:481,ha:578,o:"m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 "},"‰":{x_min:-3,x_max:1672,ha:1821,o:"m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 "},a:{x_min:0,x_max:698.609375,ha:794,o:"m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 "},"—":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 "},"=":{x_min:8.71875,x_max:780.953125,ha:792,o:"m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 "},N:{x_min:0,x_max:801,ha:914,o:"m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 "},"ρ":{x_min:0,x_max:712,ha:797,o:"m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 "},"¯":{x_min:0,x_max:941.671875,ha:938,o:"m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 "},Z:{x_min:0,x_max:779,ha:849,o:"m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 "},u:{x_min:0,x_max:617,ha:729,o:"m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 "},k:{x_min:0,x_max:612.484375,ha:697,o:"m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 "},"Η":{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"Α":{x_min:0,x_max:906.953125,ha:985,o:"m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},s:{x_min:0,x_max:604,ha:697,o:"m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 "},B:{x_min:0,x_max:778,ha:876,o:"m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 "},"…":{x_min:0,x_max:614,ha:708,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 "},"?":{x_min:0,x_max:607,ha:704,o:"m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 "},H:{x_min:0,x_max:803,ha:915,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"ν":{x_min:0,x_max:675,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 "},c:{x_min:1,x_max:701.390625,ha:775,o:"m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 "},"¶":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{x_min:0,x_max:660,ha:745,o:"m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 "},"Μ":{x_min:0,x_max:954,ha:1068,o:"m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 "},"Ό":{x_min:0.109375,x_max:1120,ha:1217,o:"m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"Ή":{x_min:0,x_max:1158,ha:1275,o:"m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"•":{x_min:0,x_max:663.890625,ha:775,o:"m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 "},"¥":{x_min:0.1875,x_max:819.546875,ha:886,o:"m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 "},"(":{x_min:0,x_max:318.0625,ha:415,o:"m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 "},U:{x_min:0,x_max:796,ha:904,o:"m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 "},"γ":{x_min:0.5,x_max:744.953125,ha:822,o:"m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 "},"α":{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 "},F:{x_min:0,x_max:683.328125,ha:717,o:"m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 "},"­":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},":":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"Χ":{x_min:0,x_max:854.171875,ha:935,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 "},"*":{x_min:116,x_max:674,ha:792,o:"m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 "},"†":{x_min:0,x_max:777,ha:835,o:"m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 "},"°":{x_min:0,x_max:347,ha:444,o:"m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 "},V:{x_min:0,x_max:862.71875,ha:940,o:"m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 "},"Ξ":{x_min:0,x_max:734.71875,ha:763,o:"m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 "}," ":{x_min:0,x_max:0,ha:853},"Ϋ":{x_min:0.328125,x_max:819.515625,ha:889,o:"m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 "},"”":{x_min:0,x_max:347,ha:454,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 "},"@":{x_min:0,x_max:1260,ha:1357,o:"m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 "},"Ί":{x_min:0,x_max:499,ha:613,o:"m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 "},i:{x_min:14,x_max:136,ha:275,o:"m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 "},"Β":{x_min:0,x_max:778,ha:877,o:"m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 "},"υ":{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 "},"]":{x_min:0,x_max:275,ha:372,o:"m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 "},m:{x_min:0,x_max:1019,ha:1128,o:"m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 "},"χ":{x_min:8.328125,x_max:780.5625,ha:815,o:"m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 "},"ί":{x_min:42,x_max:326.71875,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 "},"Ζ":{x_min:0,x_max:779.171875,ha:850,o:"m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 "},R:{x_min:0,x_max:781.953125,ha:907,o:"m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 "},o:{x_min:0,x_max:713,ha:821,o:"m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 "},K:{x_min:0,x_max:819.46875,ha:906,o:"m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},",":{x_min:0,x_max:142,ha:239,o:"m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 "},d:{x_min:0,x_max:683,ha:796,o:"m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 "},"¨":{x_min:-109,x_max:247,ha:232,o:"m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 "},E:{x_min:0,x_max:736.109375,ha:789,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},Y:{x_min:0,x_max:820,ha:886,o:"m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 "},"\"":{x_min:0,x_max:299,ha:396,o:"m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"‹":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"„":{x_min:0,x_max:364,ha:467,o:"m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 "},"δ":{x_min:1,x_max:710,ha:810,o:"m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 "},"έ":{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 "},"ω":{x_min:0,x_max:922,ha:1031,o:"m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 "},"´":{x_min:0,x_max:96,ha:251,o:"m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"±":{x_min:11,x_max:781,ha:792,o:"m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 "},"|":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"ϋ":{x_min:0,x_max:617,ha:725,o:"m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 "},"§":{x_min:0,x_max:593,ha:690,o:"m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 "},b:{x_min:0,x_max:685,ha:783,o:"m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 "},q:{x_min:0,x_max:683,ha:876,o:"m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 "},"Ω":{x_min:-0.171875,x_max:969.5625,ha:1068,o:"m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 "},"ύ":{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 "},z:{x_min:-0.015625,x_max:613.890625,ha:697,o:"m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 "},"™":{x_min:0,x_max:894,ha:1000,o:"m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 "},"ή":{x_min:0.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 "},"Θ":{x_min:0,x_max:960,ha:1056,o:"m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 "},"®":{x_min:-3,x_max:1008,ha:1106,o:"m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 "},"~":{x_min:0,x_max:833,ha:931,o:"m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 "},"Ε":{x_min:0,x_max:736.21875,ha:778,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},"³":{x_min:0,x_max:450,ha:547,o:"m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 "},"[":{x_min:0,x_max:273.609375,ha:371,o:"m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 "},L:{x_min:0,x_max:645.828125,ha:696,o:"m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 "},"σ":{x_min:0,x_max:803.390625,ha:894,o:"m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 "},"ζ":{x_min:0,x_max:573,ha:642,o:"m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 "},"θ":{x_min:0,x_max:674,ha:778,o:"m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 "},"Ο":{x_min:0,x_max:958,ha:1054,o:"m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 "},"Γ":{x_min:0,x_max:705.28125,ha:749,o:"m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:-3,x_max:1089,ha:1186,o:"m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 "},P:{x_min:0,x_max:726,ha:806,o:"m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 "},"Έ":{x_min:0,x_max:1078.21875,ha:1118,o:"m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"Ώ":{x_min:0.125,x_max:1136.546875,ha:1235,o:"m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 "},_:{x_min:0,x_max:705.5625,ha:803,o:"m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 "},"Ϊ":{x_min:-110,x_max:246,ha:275,o:"m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 "},"+":{x_min:23,x_max:768,ha:792,o:"m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 "},"½":{x_min:0,x_max:1050,ha:1149,o:"m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 "},"Ρ":{x_min:0,x_max:720,ha:783,o:"m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 "},"'":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"ª":{x_min:0,x_max:350,ha:397,o:"m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 "},"΅":{x_min:0,x_max:450,ha:553,o:"m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 "},T:{x_min:0,x_max:777,ha:835,o:"m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 "},"Φ":{x_min:0,x_max:915,ha:997,o:"m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 "},"⁋":{x_min:0,x_max:0,ha:694},j:{x_min:-77.78125,x_max:167,ha:349,o:"m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 "},"Σ":{x_min:0,x_max:756.953125,ha:819,o:"m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 "},"›":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"<":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"£":{x_min:0,x_max:704.484375,ha:801,o:"m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 "},t:{x_min:0,x_max:367,ha:458,o:"m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 "},"¬":{x_min:0,x_max:706,ha:803,o:"m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 "},"λ":{x_min:0,x_max:750,ha:803,o:"m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 "},W:{x_min:0,x_max:1263.890625,ha:1351,o:"m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 "},">":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},v:{x_min:0,x_max:675.15625,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 "},"τ":{x_min:0.28125,x_max:644.5,ha:703,o:"m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 "},"ξ":{x_min:0,x_max:624.9375,ha:699,o:"m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 "},"&":{x_min:-3,x_max:894.25,ha:992,o:"m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 "},"Λ":{x_min:0,x_max:862.5,ha:942,o:"m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 "},I:{x_min:41,x_max:180,ha:293,o:"m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 "},G:{x_min:0,x_max:921,ha:1011,o:"m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 "},"ΰ":{x_min:0,x_max:617,ha:725,o:"m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 "},"`":{x_min:0,x_max:138.890625,ha:236,o:"m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 "},"·":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"Υ":{x_min:0.328125,x_max:819.515625,ha:889,o:"m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 "},r:{x_min:0,x_max:355.5625,ha:432,o:"m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 "},x:{x_min:0,x_max:675,ha:764,o:"m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 "},"μ":{x_min:0,x_max:696.609375,ha:747,o:"m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 "},h:{x_min:0,x_max:615,ha:724,o:"m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 "},".":{x_min:0,x_max:142,ha:239,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"φ":{x_min:-2,x_max:878,ha:974,o:"m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 "},";":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 "},f:{x_min:0,x_max:378,ha:472,o:"m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 "},"“":{x_min:1,x_max:348.21875,ha:454,o:"m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 "},A:{x_min:0.03125,x_max:906.953125,ha:1008,o:"m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 "},"‘":{x_min:1,x_max:139.890625,ha:236,o:"m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 "},"ϊ":{x_min:-70,x_max:283,ha:361,o:"m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 "},"π":{x_min:-0.21875,x_max:773.21875,ha:857,o:"m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 "},"ά":{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 "},O:{x_min:0,x_max:958,ha:1057,o:"m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 "},n:{x_min:0,x_max:615,ha:724,o:"m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 "},l:{x_min:41,x_max:166,ha:279,o:"m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 "},"¤":{x_min:40.09375,x_max:728.796875,ha:825,o:"m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 "},"κ":{x_min:0,x_max:632.328125,ha:679,o:"m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 "},p:{x_min:0,x_max:685,ha:786,o:"m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 "},"‡":{x_min:0,x_max:777,ha:835,o:"m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 "},"ψ":{x_min:0,x_max:808,ha:907,o:"m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 "},"η":{x_min:0.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 "}};var cssFontWeight="normal";var ascender=1189;var underlinePosition=-100;var cssFontStyle="normal";var boundingBox={yMin:-334,xMin:-111,yMax:1189,xMax:1672};var resolution=1000;var original_font_information={postscript_name:"Helvetiker-Regular",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Helvetiker",font_family_name:"Helvetiker",copyright:"Copyright (c) Μagenta ltd, 2004",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Μagenta ltd:Helvetiker:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:"Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\"Fonts\") and associated documentation files (the \"Font Software\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r\n\r\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r\n\r\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \"MgOpen\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r\n\r\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \"MgOpen\" name.\r\n\r\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r\n\r\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.",manufacturer_name:"Μagenta ltd",font_sub_family_name:"Regular"};var descender=-334;var familyName="Helvetiker";var lineHeight=1522;var underlineThickness=50;var defaultTypeFace = {glyphs:glyphs,cssFontWeight:cssFontWeight,ascender:ascender,underlinePosition:underlinePosition,cssFontStyle:cssFontStyle,boundingBox:boundingBox,resolution:resolution,original_font_information:original_font_information,descender:descender,familyName:familyName,lineHeight:lineHeight,underlineThickness:underlineThickness};

  var THREE$b = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    CircleBufferGeometry: three.CircleBufferGeometry,
    Font: three.Font,
    Group: three.Group,
    Mesh: three.Mesh,
    MeshLambertMaterial: three.MeshLambertMaterial,
    TextBufferGeometry: three.TextBufferGeometry,
    Vector3: three.Vector3
  };

  var LabelsLayerKapsule = index({
    props: {
      labelsData: {
        "default": []
      },
      labelLat: {
        "default": 'lat'
      },
      labelLng: {
        "default": 'lng'
      },
      labelAltitude: {
        "default": 0
      },
      // in units of globe radius
      labelText: {
        "default": 'text'
      },
      labelSize: {
        "default": 0.5
      },
      // text height in deg
      labelTypeFace: {
        "default": defaultTypeFace,
        onChange: function onChange(tf, state) {
          state.font = new three.Font(tf);
        }
      },
      labelColor: {
        "default": function _default() {
          return 'lightgrey';
        }
      },
      labelRotation: {
        "default": 0
      },
      // clockwise degrees, relative to the latitute parallel plane
      labelResolution: {
        "default": 3
      },
      // how many segments in the text's curves
      labelIncludeDot: {
        "default": true
      },
      labelDotRadius: {
        "default": 0.1
      },
      // in deg
      labelDotOrientation: {
        "default": function _default() {
          return 'bottom';
        }
      },
      // right, top, bottom
      labelsTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Data accessors
      var latAccessor = index$1(state.labelLat);
      var lngAccessor = index$1(state.labelLng);
      var altitudeAccessor = index$1(state.labelAltitude);
      var textAccessor = index$1(state.labelText);
      var sizeAccessor = index$1(state.labelSize);
      var rotationAccessor = index$1(state.labelRotation);
      var colorAccessor = index$1(state.labelColor);
      var includeDotAccessor = index$1(state.labelIncludeDot);
      var dotRadiusAccessor = index$1(state.labelDotRadius);
      var dotOrientationAccessor = index$1(state.labelDotOrientation);
      var orientations = new Set(['right', 'top', 'bottom']);
      var pxPerDeg = 2 * Math.PI * GLOBE_RADIUS / 360;
      var circleGeometry = new three.CircleBufferGeometry(1, 16);
      threeDigest(state.labelsData, state.scene, {
        createObj: function createObj() {
          var material = new three.MeshLambertMaterial();
          var obj = new THREE$b.Group(); // container

          obj.add(new three.Mesh(circleGeometry, material)); // dot

          obj.add(new three.Mesh(undefined, material)); // text

          obj.__globeObjType = 'label'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, d) {
          var _obj$children = _slicedToArray(obj.children, 2),
              dotObj = _obj$children[0],
              textObj = _obj$children[1]; // update color


          var color = colorAccessor(d);
          var opacity = colorAlpha(color);
          textObj.material.color.set(colorStr2Hex(color));
          textObj.material.transparent = opacity < 1;
          textObj.material.opacity = opacity; // update dot

          var includeDot = includeDotAccessor(d);
          var dotOrient = dotOrientationAccessor(d);
          !includeDot || !orientations.has(dotOrient) && (dotOrient = 'bottom'); // size dot

          var dotR = includeDot ? +dotRadiusAccessor(d) * pxPerDeg : 1e-12;
          dotObj.scale.x = dotObj.scale.y = dotR; // create text geometry

          var textHeight = +sizeAccessor(d) * pxPerDeg;
          textObj.geometry = new three.TextBufferGeometry(textAccessor(d), {
            font: state.font,
            size: textHeight,
            height: 0,
            curveSegments: state.labelResolution
          }); // center text (otherwise anchor is on bottom-left)

          dotOrient !== 'right' && textObj.geometry.center();

          if (includeDot) {
            // translate text
            var padding = dotR + textHeight / 2;
            dotOrient === 'right' && (textObj.position.x = padding);
            textObj.position.y = {
              right: -textHeight / 2,
              // center vertically
              top: padding + textHeight / 2,
              bottom: -padding - textHeight / 2
            }[dotOrient];
          } // animations


          var applyPosition = function applyPosition(td) {
            var _obj$__currentTargetD = obj.__currentTargetD = td,
                lat = _obj$__currentTargetD.lat,
                lng = _obj$__currentTargetD.lng,
                alt = _obj$__currentTargetD.alt,
                rot = _obj$__currentTargetD.rot,
                scale = _obj$__currentTargetD.scale; // position center


            Object.assign(obj.position, polar2Cartesian(lat, lng, alt)); // rotate

            obj.lookAt(state.scene.localToWorld(new THREE$b.Vector3(0, 0, 0))); // face globe (local) center

            obj.rotateY(Math.PI); // face outwards
            // rotate clockwise relative to lat parallel

            obj.rotateZ(-rot * Math.PI / 180); // scale it

            obj.scale.x = obj.scale.y = obj.scale.z = scale;
          };

          var targetD = {
            lat: +latAccessor(d),
            lng: +lngAccessor(d),
            alt: +altitudeAccessor(d),
            rot: +rotationAccessor(d),
            scale: 1
          };
          var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
            scale: 1e-12
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.labelsTransitionDuration || state.labelsTransitionDuration < 0) {
              // set final position
              applyPosition(targetD);
            } else {
              // animate
              new TWEEN.Tween(currentTargetD).to(targetD, state.labelsTransitionDuration).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(applyPosition).start();
            }
          }
        }
      });
    }
  });

  var CustomLayerKapsule = index({
    props: {
      customLayerData: {
        "default": []
      },
      customThreeObject: {},
      customThreeObjectUpdate: {
        triggerUpdate: false
      }
    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      if (!state.customThreeObjectUpdate) {
        emptyObject(state.scene);
      } // Clear the existing objects to create all new, if there's no update method (brute-force)


      var customObjectAccessor = index$1(state.customThreeObject);
      var customObjectUpdateAccessor = index$1(state.customThreeObjectUpdate);
      threeDigest(state.customLayerData, state.scene, {
        createObj: function createObj(d) {
          var obj = customObjectAccessor(d, GLOBE_RADIUS);

          if (obj) {
            if (state.customThreeObject === obj) {
              // clone object if it's a shared object among all points
              obj = obj.clone();
            }

            obj.__globeObjType = 'custom'; // Add object type
          }

          return obj;
        },
        updateObj: function updateObj(obj, d) {
          return customObjectUpdateAccessor(obj, d, GLOBE_RADIUS);
        }
      });
    }
  });

  var THREE$c = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Group: three.Group,
    Vector2: three.Vector2,
    Vector3: three.Vector3
  };

  var layers = ['globeLayer', 'pointsLayer', 'arcsLayer', 'hexBinLayer', 'polygonsLayer', 'hexedPolygonsLayer', 'pathsLayer', 'labelsLayer', 'customLayer']; // Expose config from layers

  var bindGlobeLayer = linkKapsule('globeLayer', GlobeLayerKapsule);
  var linkedGlobeLayerProps = Object.assign.apply(Object, _toConsumableArray(['globeImageUrl', 'bumpImageUrl', 'showAtmosphere', 'showGraticules'].map(function (p) {
    return _defineProperty({}, p, bindGlobeLayer.linkProp(p));
  })));
  var linkedGlobeLayerMethods = Object.assign.apply(Object, _toConsumableArray(['globeMaterial'].map(function (p) {
    return _defineProperty({}, p, bindGlobeLayer.linkMethod(p));
  })));
  var bindPointsLayer = linkKapsule('pointsLayer', PointsLayerKapsule);
  var linkedPointsLayerProps = Object.assign.apply(Object, _toConsumableArray(['pointsData', 'pointLat', 'pointLng', 'pointColor', 'pointAltitude', 'pointRadius', 'pointResolution', 'pointsMerge', 'pointsTransitionDuration'].map(function (p) {
    return _defineProperty({}, p, bindPointsLayer.linkProp(p));
  })));
  var bindArcsLayer = linkKapsule('arcsLayer', ArcsLayerKapsule);
  var linkedArcsLayerProps = Object.assign.apply(Object, _toConsumableArray(['arcsData', 'arcStartLat', 'arcStartLng', 'arcEndLat', 'arcEndLng', 'arcColor', 'arcAltitude', 'arcAltitudeAutoScale', 'arcStroke', 'arcCurveResolution', 'arcCircularResolution', 'arcDashLength', 'arcDashGap', 'arcDashInitialGap', 'arcDashAnimateTime', 'arcsTransitionDuration'].map(function (p) {
    return _defineProperty({}, p, bindArcsLayer.linkProp(p));
  })));
  var bindHexBinLayer = linkKapsule('hexBinLayer', HexBinLayerKapsule);
  var linkedHexBinLayerProps = Object.assign.apply(Object, _toConsumableArray(['hexBinPointsData', 'hexBinPointLat', 'hexBinPointLng', 'hexBinPointWeight', 'hexBinResolution', 'hexMargin', 'hexTopColor', 'hexSideColor', 'hexAltitude', 'hexBinMerge', 'hexTransitionDuration'].map(function (p) {
    return _defineProperty({}, p, bindHexBinLayer.linkProp(p));
  })));
  var bindHexedPolygonsLayer = linkKapsule('hexedPolygonsLayer', HexedPolygonsLayerKapsule);
  var linkedHexedPolygonsLayerProps = Object.assign.apply(Object, _toConsumableArray(['hexPolygonsData', 'hexPolygonGeoJsonGeometry', 'hexPolygonColor', 'hexPolygonAltitude', 'hexPolygonResolution', 'hexPolygonMargin', 'hexPolygonsTransitionDuration'].map(function (p) {
    return _defineProperty({}, p, bindHexedPolygonsLayer.linkProp(p));
  })));
  var bindPolygonsLayer = linkKapsule('polygonsLayer', PolygonsLayerKapsule);
  var linkedPolygonsLayerProps = Object.assign.apply(Object, _toConsumableArray(['polygonsData', 'polygonGeoJsonGeometry', 'polygonCapColor', 'polygonSideColor', 'polygonStrokeColor', 'polygonAltitude', 'polygonsTransitionDuration'].map(function (p) {
    return _defineProperty({}, p, bindPolygonsLayer.linkProp(p));
  })));
  var bindPathsLayer = linkKapsule('pathsLayer', PathsLayerKapsule);
  var linkedPathsLayerProps = Object.assign.apply(Object, _toConsumableArray(['pathsData', 'pathPoints', 'pathPointLat', 'pathPointLng', 'pathPointAlt', 'pathResolution', 'pathColor', 'pathStroke', 'pathDashLength', 'pathDashGap', 'pathDashInitialGap', 'pathDashAnimateTime', 'pathTransitionDuration'].map(function (p) {
    return _defineProperty({}, p, bindPathsLayer.linkProp(p));
  })));
  var bindLabelsLayer = linkKapsule('labelsLayer', LabelsLayerKapsule);
  var linkedLabelsLayerProps = Object.assign.apply(Object, _toConsumableArray(['labelsData', 'labelLat', 'labelLng', 'labelAltitude', 'labelRotation', 'labelText', 'labelSize', 'labelTypeFace', 'labelColor', 'labelResolution', 'labelIncludeDot', 'labelDotRadius', 'labelDotOrientation', 'labelsTransitionDuration'].map(function (p) {
    return _defineProperty({}, p, bindLabelsLayer.linkProp(p));
  })));
  var bindCustomLayer = linkKapsule('customLayer', CustomLayerKapsule);
  var linkedCustomLayerProps = Object.assign.apply(Object, _toConsumableArray(['customLayerData', 'customThreeObject', 'customThreeObjectUpdate'].map(function (p) {
    return _defineProperty({}, p, bindCustomLayer.linkProp(p));
  }))); //

  var Globe = index({
    props: _objectSpread2({
      rendererSize: {
        "default": new THREE$c.Vector2(window.innerWidth, window.innerHeight),
        onChange: function onChange(rendererSize, state) {
          state.pathsLayer.rendererSize(rendererSize);
        },
        triggerUpdate: false
      }
    }, linkedGlobeLayerProps, {}, linkedPointsLayerProps, {}, linkedArcsLayerProps, {}, linkedHexBinLayerProps, {}, linkedPolygonsLayerProps, {}, linkedHexedPolygonsLayerProps, {}, linkedPathsLayerProps, {}, linkedLabelsLayerProps, {}, linkedCustomLayerProps),
    methods: _objectSpread2({
      getCoords: function getCoords(state) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return polar2Cartesian.apply(void 0, args);
      },
      toGeoCoords: function toGeoCoords(state) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return cartesian2Polar.apply(void 0, args);
      }
    }, linkedGlobeLayerMethods),
    stateInit: function stateInit() {
      return {
        globeLayer: GlobeLayerKapsule(),
        pointsLayer: PointsLayerKapsule(),
        arcsLayer: ArcsLayerKapsule(),
        hexBinLayer: HexBinLayerKapsule(),
        polygonsLayer: PolygonsLayerKapsule(),
        hexedPolygonsLayer: HexedPolygonsLayerKapsule(),
        pathsLayer: PathsLayerKapsule(),
        labelsLayer: LabelsLayerKapsule(),
        customLayer: CustomLayerKapsule()
      };
    },
    init: function init(threeObj, state, _ref11) {
      var _ref11$animateIn = _ref11.animateIn,
          animateIn = _ref11$animateIn === void 0 ? true : _ref11$animateIn,
          _ref11$waitForGlobeRe = _ref11.waitForGlobeReady,
          waitForGlobeReady = _ref11$waitForGlobeRe === void 0 ? true : _ref11$waitForGlobeRe;
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      threeObj.add(state.scene = new THREE$c.Group());
      state.scene.visible = false; // hide scene before globe initialization
      // Add all layers groups

      layers.forEach(function (layer) {
        var g = new THREE$c.Group();
        state.scene.add(g);
        state[layer](g);
      });

      var initGlobe = function initGlobe() {
        if (animateIn) {
          // Animate build-in just once
          state.scene.scale.set(1e-6, 1e-6, 1e-6);
          new TWEEN.Tween({
            k: 1e-6
          }).to({
            k: 1
          }, 600).easing(TWEEN.Easing.Quadratic.Out).onUpdate(function (_ref12) {
            var k = _ref12.k;
            return state.scene.scale.set(k, k, k);
          }).start();
          var rotAxis = new THREE$c.Vector3(0, 1, 0);
          new TWEEN.Tween({
            rot: Math.PI * 2
          }).to({
            rot: 0
          }, 1200).easing(TWEEN.Easing.Quintic.Out).onUpdate(function (_ref13) {
            var rot = _ref13.rot;
            return state.scene.setRotationFromAxisAngle(rotAxis, rot);
          }).start();
        }

        state.scene.visible = true;
      };

      waitForGlobeReady ? state.globeLayer.onReady(initGlobe) : initGlobe(); // run tween updates

      (function onFrame() {
        requestAnimationFrame(onFrame);
        TWEEN.update();
      })(); // IIFE

    },
    update: function update(state) {}
  });

  function fromKapsule (kapsule) {
    var baseClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;
    var initKapsuleWithSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var FromKapsule = /*#__PURE__*/function (_baseClass) {
      _inherits(FromKapsule, _baseClass);

      var _super = _createSuper(FromKapsule);

      function FromKapsule() {
        var _this;

        _classCallCheck(this, FromKapsule);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));
        _this.__kapsuleInstance = kapsule.apply(void 0, args).apply(void 0, [].concat(_toConsumableArray(initKapsuleWithSelf ? [_assertThisInitialized(_this)] : []), args));
        return _this;
      }

      return FromKapsule;
    }(baseClass); // attach kapsule props/methods to class prototype


    Object.keys(kapsule()).forEach(function (m) {
      return FromKapsule.prototype[m] = function () {
        var _this$__kapsuleInstan;

        var returnVal = (_this$__kapsuleInstan = this.__kapsuleInstance)[m].apply(_this$__kapsuleInstan, arguments);

        return returnVal === this.__kapsuleInstance ? this // chain based on this class, not the kapsule obj
        : returnVal;
      };
    });
    return FromKapsule;
  }

  var threeGlobe = fromKapsule(Globe, three.Group, true);

  return threeGlobe;

})));
//# sourceMappingURL=three-globe.js.map
