//WHEEL
let WheelIndicator = (function (win, doc) {
    let eventWheel = "onwheel" in doc ? "" : "mousewheel";
    DEFAULTS = {
      callback: function () {},
      elem: doc,
      preventMouse: true,
    };
    function Module(options) {
      this._options = extend(DEFAULTS, options);
      this._deltaArray = [0, 0, 0];
      this._isAcceleration = false;
      this._isStopped = true;
      this._direction = "";
      this._timer = "";
      this._isWorking = true;
      let self = this;
      this._wheelHandler = function (event) {
        if (self._isWorking) {
          processDelta.call(self, event);
  
          if (self._options.preventMouse) {
            preventDefault(event);
          }
        }
      };
  
      addEvent(this._options.elem, eventWheel, this._wheelHandler);
    }
  
    Module.prototype = {
      constructor: Module,
  
      turnOn: function () {
        this._isWorking = true;
  
        return this;
      },
  
      turnOff: function () {
        this._isWorking = false;
  
        return this;
      },
  
      setOptions: function (options) {
        this._options = extend(this._options, options);
  
        return this;
      },
  
      getOption: function (option) {
        let neededOption = this._options[option];
  
        if (neededOption !== undefined) {
          return neededOption;
        }
  
        throw new Error("Unknown option");
      },
  
      destroy: function () {
        removeEvent(this._options.elem, eventWheel, this._wheelHandler);
  
        return this;
      },
    };
  
    function triggerEvent(event) {
      event.direction = this._direction;
  
      this._options.callback.call(this, event);
    }
  
    let getDeltaY = function (event) {
      if (event.wheelDelta && !event.deltaY) {
        getDeltaY = function (event) {
          return event.wheelDelta * -1;
        };
      } else {
        getDeltaY = function (event) {
          return event.deltaY;
        };
      }
  
      return getDeltaY(event);
    };
  
    function preventDefault(event) {
      event = event || win.event;
  
      if (event.preventDefault) {
        ("");
      } else {
        event.returnValue = false;
      }
    }
  
    function processDelta(event) {
      let self = this,
        delta = getDeltaY(event);
  
      if (delta === 0) return;
  
      let direction = delta > 0 ? "down" : "up",
        arrayLength = self._deltaArray.length,
        changedDirection = false,
        repeatDirection = 0,
        sustainableDirection,
        i;
  
      clearTimeout(self._timer);
  
      self._timer = setTimeout(function () {
        self._deltaArray = [0, 0, 0];
        self._isStopped = true;
        self._direction = direction;
      }, 150);
      for (i = 0; i < arrayLength; i++) {
        if (self._deltaArray[i] !== 0) {
          self._deltaArray[i] > 0 ? ++repeatDirection : --repeatDirection;
        }
      }
      if (Math.abs(repeatDirection) === arrayLength) {
        sustainableDirection = repeatDirection > 0 ? "down" : "up";
  
        if (sustainableDirection !== self._direction) {
          changedDirection = true;
          self._direction = direction;
        }
      }
  
      if (!self._isStopped) {
        if (changedDirection) {
          self._isAcceleration = true;
  
          triggerEvent.call(this, event);
        } else {
          if (Math.abs(repeatDirection) === arrayLength) {
            analyzeArray.call(this, event);
          }
        }
      }
  
      if (self._isStopped) {
        self._isStopped = false;
        self._isAcceleration = true;
        self._direction = direction;
  
        triggerEvent.call(this, event);
      }
  
      self._deltaArray.shift();
      self._deltaArray.push(delta);
    }
  
    function analyzeArray(event) {
      let deltaArray0Abs = Math.abs(this._deltaArray[0]),
        deltaArray1Abs = Math.abs(this._deltaArray[1]),
        deltaArray2Abs = Math.abs(this._deltaArray[2]),
        deltaAbs = Math.abs(getDeltaY(event));
  
      if (
        deltaAbs > deltaArray2Abs &&
        deltaArray2Abs > deltaArray1Abs &&
        deltaArray1Abs > deltaArray0Abs
      ) {
        if (!this._isAcceleration) {
          triggerEvent.call(this, event);
          this._isAcceleration = true;
        }
      }
  
      if (deltaAbs < deltaArray2Abs && deltaArray2Abs <= deltaArray1Abs) {
        this._isAcceleration = false;
      }
    }
  
    function addEvent(elem, type, handler) {
      if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
      } else if (elem.attachEvent) {
        elem.attachEvent("on" + type, handler);
      }
    }
  
    function removeEvent(elem, type, handler) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, handler, false);
      } else if (elem.detachEvent) {
        elem.detachEvent("on" + type, handler);
      }
    }
  
    function extend(defaults, options) {
      let extended = {},
        prop;
  
      for (prop in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
          extended[prop] = defaults[prop];
        }
      }
  
      for (prop in options) {
        if (Object.prototype.hasOwnProperty.call(options, prop)) {
          extended[prop] = options[prop];
        }
      }
  
      return extended;
    }
  
    return Module;
  })(window, document);
  
  if (typeof exports === "object") {
    module.exports = WheelIndicator;
  }
  function animationOut(i) {}
  function animationIn(i) {}
  
  (function ($) {
    let length = $(".main-cube>section").length,
      current = 1,
      next = 1,
      outClass,
      inClass,
      onGoing = false;
    $(".main-cube>section:eq(0)").addClass("visible");
    function openIndex(i) {
      if (!onGoing && next != i) {
        onGoing = true;
        next = i;
        outClass = current > i ? "rotateCubeBottomOut" : "rotateCubeTopOut";
        inClass = current > i ? "rotateCubeBottomIn" : "rotateCubeTopIn";
        show();
      }
    }
  
    function trans(direction) {
      if (!onGoing) {
        onGoing = true;
        if (direction == "up") {
          next = current > 1 ? current - 1 : length;
          outClass = "rotateCubeBottomOut";
          inClass = "rotateCubeBottomIn";
        } else {
          next = current < length ? current + 1 : 1;
          outClass = "rotateCubeTopOut";
          inClass = "rotateCubeTopIn";
        }
        show();
      }
    }
  
    function show() {
      $(".main-cube>section:eq(" + (next - 1) + ")").addClass("visible");
      $(".main-cube>section:eq(" + (current - 1) + ")").addClass(outClass);
      $(".main-cube>section:eq(" + (next - 1) + ")").addClass(inClass);
      $(".header-main-menu>li:eq(" + (current - 1) + ")").removeClass("active");
      $(".header-main-menu>li:eq(" + (next - 1) + ")").addClass("active");
  
      animationOut(current - 1);
      setTimeout(function () {
        $(".main-cube>section:eq(" + (current - 1) + ")").removeClass("visible");
      }, 500);
      setTimeout(function () {
        $(".main-cube>section:eq(" + (current - 1) + ")").removeClass(outClass);
        $(".main-cube>section:eq(" + (next - 1) + ")").removeClass(inClass);
        animationIn(next - 1);
        current = next;
        onGoing = false;
      }, 600);
    }
  
    $(document).ready(function () {
      let indicator = new WheelIndicator({
        callback: function (e) {
          if (e.direction == "down") {
            trans("down");
          } else {
            trans("up");
          }
        },
      });
      indicator.getOption("preventMouse");
      $(document).keydown(function (e) {
        if (e.keyCode == 38 || (e && e.keyCode == 37)) {
          trans("up");
        }
        if (e.keyCode == 39 || (e && e.keyCode == 40)) {
          trans("down");
        }
      });
  
      $(document).swipe({
        swipe: function (event, direction, distance, duration, fingerCount) {
          if (direction == "up") {
            trans("down");
          } else if (direction == "down") {
            trans("up");
          }
        },
      });
  
      $(".header-main-menu>li").on("click", function () {
        openIndex($(this).index() + 1);
      });
    });
  })(jQuery);
  