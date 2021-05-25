var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function $$jscomp$createTemplateTagFirstArg$($arrayStrings$$) {
  return $arrayStrings$$.raw = $arrayStrings$$;
};
$jscomp.createTemplateTagFirstArgWithRaw = function $$jscomp$createTemplateTagFirstArgWithRaw$($arrayStrings$$, $rawArrayStrings$$) {
  $arrayStrings$$.raw = $rawArrayStrings$$;
  return $arrayStrings$$;
};
$jscomp.arrayIteratorImpl = function $$jscomp$arrayIteratorImpl$($array$$) {
  var $index$$ = 0;
  return function() {
    return $index$$ < $array$$.length ? {done:!1, value:$array$$[$index$$++]} : {done:!0};
  };
};
$jscomp.arrayIterator = function $$jscomp$arrayIterator$($array$$) {
  return {next:$jscomp.arrayIteratorImpl($array$$)};
};
$jscomp.makeIterator = function $$jscomp$makeIterator$($iterable$$) {
  var $iteratorFunction$$ = "undefined" != typeof Symbol && Symbol.iterator && $iterable$$[Symbol.iterator];
  return $iteratorFunction$$ ? $iteratorFunction$$.call($iterable$$) : $jscomp.arrayIterator($iterable$$);
};
$jscomp.getGlobal = function $$jscomp$getGlobal$($passedInThis_possibleGlobals$$) {
  $passedInThis_possibleGlobals$$ = ["object" == typeof globalThis && globalThis, $passedInThis_possibleGlobals$$, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var $i$$ = 0; $i$$ < $passedInThis_possibleGlobals$$.length; ++$i$$) {
    var $maybeGlobal$$ = $passedInThis_possibleGlobals$$[$i$$];
    if ($maybeGlobal$$ && $maybeGlobal$$.Math == Math) {
      return $maybeGlobal$$;
    }
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$$, $property$$, $descriptor$$) {
  if ($target$$ == Array.prototype || $target$$ == Object.prototype) {
    return $target$$;
  }
  $target$$[$property$$] = $descriptor$$.value;
  return $target$$;
};
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
var $jscomp$lookupPolyfilledValue = function $$jscomp$lookupPolyfilledValue$($target$$, $key$$) {
  var $polyfill_polyfilledKey$$ = $jscomp.propertyToPolyfillSymbol[$key$$];
  if (null == $polyfill_polyfilledKey$$) {
    return $target$$[$key$$];
  }
  $polyfill_polyfilledKey$$ = $target$$[$polyfill_polyfilledKey$$];
  return void 0 !== $polyfill_polyfilledKey$$ ? $polyfill_polyfilledKey$$ : $target$$[$key$$];
};
$jscomp.polyfill = function $$jscomp$polyfill$($target$$, $polyfill$$, $fromLang$$, $toLang$$) {
  $polyfill$$ && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated($target$$, $polyfill$$, $fromLang$$, $toLang$$) : $jscomp.polyfillUnisolated($target$$, $polyfill$$, $fromLang$$, $toLang$$));
};
$jscomp.polyfillUnisolated = function $$jscomp$polyfillUnisolated$($property$jscomp$5_split_target$$, $impl_polyfill$$, $fromLang$jscomp$1_obj$$, $i$jscomp$4_orig_toLang$$) {
  $fromLang$jscomp$1_obj$$ = $jscomp.global;
  $property$jscomp$5_split_target$$ = $property$jscomp$5_split_target$$.split(".");
  for ($i$jscomp$4_orig_toLang$$ = 0; $i$jscomp$4_orig_toLang$$ < $property$jscomp$5_split_target$$.length - 1; $i$jscomp$4_orig_toLang$$++) {
    var $key$$ = $property$jscomp$5_split_target$$[$i$jscomp$4_orig_toLang$$];
    $key$$ in $fromLang$jscomp$1_obj$$ || ($fromLang$jscomp$1_obj$$[$key$$] = {});
    $fromLang$jscomp$1_obj$$ = $fromLang$jscomp$1_obj$$[$key$$];
  }
  $property$jscomp$5_split_target$$ = $property$jscomp$5_split_target$$[$property$jscomp$5_split_target$$.length - 1];
  $i$jscomp$4_orig_toLang$$ = $fromLang$jscomp$1_obj$$[$property$jscomp$5_split_target$$];
  $impl_polyfill$$ = $impl_polyfill$$($i$jscomp$4_orig_toLang$$);
  $impl_polyfill$$ != $i$jscomp$4_orig_toLang$$ && null != $impl_polyfill$$ && $jscomp.defineProperty($fromLang$jscomp$1_obj$$, $property$jscomp$5_split_target$$, {configurable:!0, writable:!0, value:$impl_polyfill$$});
};
$jscomp.polyfillIsolated = function $$jscomp$polyfillIsolated$($isNativeClass_target$$, $impl$jscomp$1_polyfill$$, $fromLang$$, $obj$jscomp$28_root$jscomp$3_toLang$$) {
  var $property$jscomp$6_split$$ = $isNativeClass_target$$.split(".");
  $isNativeClass_target$$ = 1 === $property$jscomp$6_split$$.length;
  $obj$jscomp$28_root$jscomp$3_toLang$$ = $property$jscomp$6_split$$[0];
  $obj$jscomp$28_root$jscomp$3_toLang$$ = !$isNativeClass_target$$ && $obj$jscomp$28_root$jscomp$3_toLang$$ in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var $i$$ = 0; $i$$ < $property$jscomp$6_split$$.length - 1; $i$$++) {
    var $key$$ = $property$jscomp$6_split$$[$i$$];
    $key$$ in $obj$jscomp$28_root$jscomp$3_toLang$$ || ($obj$jscomp$28_root$jscomp$3_toLang$$[$key$$] = {});
    $obj$jscomp$28_root$jscomp$3_toLang$$ = $obj$jscomp$28_root$jscomp$3_toLang$$[$key$$];
  }
  $property$jscomp$6_split$$ = $property$jscomp$6_split$$[$property$jscomp$6_split$$.length - 1];
  $fromLang$$ = $jscomp.IS_SYMBOL_NATIVE && "es6" === $fromLang$$ ? $obj$jscomp$28_root$jscomp$3_toLang$$[$property$jscomp$6_split$$] : null;
  $impl$jscomp$1_polyfill$$ = $impl$jscomp$1_polyfill$$($fromLang$$);
  null != $impl$jscomp$1_polyfill$$ && ($isNativeClass_target$$ ? $jscomp.defineProperty($jscomp.polyfills, $property$jscomp$6_split$$, {configurable:!0, writable:!0, value:$impl$jscomp$1_polyfill$$}) : $impl$jscomp$1_polyfill$$ !== $fromLang$$ && ($jscomp.propertyToPolyfillSymbol[$property$jscomp$6_split$$] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol($property$jscomp$6_split$$) : $jscomp.POLYFILL_PREFIX + $property$jscomp$6_split$$, $property$jscomp$6_split$$ = $jscomp.propertyToPolyfillSymbol[$property$jscomp$6_split$$], 
  $jscomp.defineProperty($obj$jscomp$28_root$jscomp$3_toLang$$, $property$jscomp$6_split$$, {configurable:!0, writable:!0, value:$impl$jscomp$1_polyfill$$})));
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function($NativePromise$$) {
  function $AsyncExecutor$$() {
    this.batch_ = null;
  }
  function $resolvingPromise$$($opt_value$$) {
    return $opt_value$$ instanceof $PolyfillPromise$$ ? $opt_value$$ : new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      $resolve$$($opt_value$$);
    });
  }
  if ($NativePromise$$ && !$jscomp.FORCE_POLYFILL_PROMISE) {
    return $NativePromise$$;
  }
  $AsyncExecutor$$.prototype.asyncExecute = function $$AsyncExecutor$$$$asyncExecute$($f$$) {
    if (null == this.batch_) {
      this.batch_ = [];
      var $self$$ = this;
      this.asyncExecuteFunction(function() {
        $self$$.executeBatch_();
      });
    }
    this.batch_.push($f$$);
  };
  var $nativeSetTimeout$$ = $jscomp.global.setTimeout;
  $AsyncExecutor$$.prototype.asyncExecuteFunction = function $$AsyncExecutor$$$$asyncExecuteFunction$($f$$) {
    $nativeSetTimeout$$($f$$, 0);
  };
  $AsyncExecutor$$.prototype.executeBatch_ = function $$AsyncExecutor$$$$executeBatch_$() {
    for (; this.batch_ && this.batch_.length;) {
      var $executingBatch$$ = this.batch_;
      this.batch_ = [];
      for (var $i$$ = 0; $i$$ < $executingBatch$$.length; ++$i$$) {
        var $f$$ = $executingBatch$$[$i$$];
        $executingBatch$$[$i$$] = null;
        try {
          $f$$();
        } catch ($error$$) {
          this.asyncThrow_($error$$);
        }
      }
    }
    this.batch_ = null;
  };
  $AsyncExecutor$$.prototype.asyncThrow_ = function $$AsyncExecutor$$$$asyncThrow_$($exception$$) {
    this.asyncExecuteFunction(function() {
      throw $exception$$;
    });
  };
  var $PolyfillPromise$$ = function $$PolyfillPromise$$$($executor$$) {
    this.state_ = 0;
    this.result_ = void 0;
    this.onSettledCallbacks_ = [];
    var $resolveAndReject$$ = this.createResolveAndReject_();
    try {
      $executor$$($resolveAndReject$$.resolve, $resolveAndReject$$.reject);
    } catch ($e$$) {
      $resolveAndReject$$.reject($e$$);
    }
  };
  $PolyfillPromise$$.prototype.createResolveAndReject_ = function $$PolyfillPromise$$$$createResolveAndReject_$() {
    function $firstCallWins$$($method$$) {
      return function($x$$) {
        $alreadyCalled$$ || ($alreadyCalled$$ = !0, $method$$.call($thisPromise$$, $x$$));
      };
    }
    var $thisPromise$$ = this, $alreadyCalled$$ = !1;
    return {resolve:$firstCallWins$$(this.resolveTo_), reject:$firstCallWins$$(this.reject_)};
  };
  $PolyfillPromise$$.prototype.resolveTo_ = function $$PolyfillPromise$$$$resolveTo_$($value$$) {
    if ($value$$ === this) {
      this.reject_(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if ($value$$ instanceof $PolyfillPromise$$) {
        this.settleSameAsPromise_($value$$);
      } else {
        a: {
          switch(typeof $value$$) {
            case "object":
              var $JSCompiler_inline_result$$ = null != $value$$;
              break a;
            case "function":
              $JSCompiler_inline_result$$ = !0;
              break a;
            default:
              $JSCompiler_inline_result$$ = !1;
          }
        }
        $JSCompiler_inline_result$$ ? this.resolveToNonPromiseObj_($value$$) : this.fulfill_($value$$);
      }
    }
  };
  $PolyfillPromise$$.prototype.resolveToNonPromiseObj_ = function $$PolyfillPromise$$$$resolveToNonPromiseObj_$($obj$$) {
    var $thenMethod$$ = void 0;
    try {
      $thenMethod$$ = $obj$$.then;
    } catch ($error$$) {
      this.reject_($error$$);
      return;
    }
    "function" == typeof $thenMethod$$ ? this.settleSameAsThenable_($thenMethod$$, $obj$$) : this.fulfill_($obj$$);
  };
  $PolyfillPromise$$.prototype.reject_ = function $$PolyfillPromise$$$$reject_$($reason$$) {
    this.settle_(2, $reason$$);
  };
  $PolyfillPromise$$.prototype.fulfill_ = function $$PolyfillPromise$$$$fulfill_$($value$$) {
    this.settle_(1, $value$$);
  };
  $PolyfillPromise$$.prototype.settle_ = function $$PolyfillPromise$$$$settle_$($settledState$$, $valueOrReason$$) {
    if (0 != this.state_) {
      throw Error("Cannot settle(" + $settledState$$ + ", " + $valueOrReason$$ + "): Promise already settled in state" + this.state_);
    }
    this.state_ = $settledState$$;
    this.result_ = $valueOrReason$$;
    this.executeOnSettledCallbacks_();
  };
  $PolyfillPromise$$.prototype.executeOnSettledCallbacks_ = function $$PolyfillPromise$$$$executeOnSettledCallbacks_$() {
    if (null != this.onSettledCallbacks_) {
      for (var $i$$ = 0; $i$$ < this.onSettledCallbacks_.length; ++$i$$) {
        $asyncExecutor$$.asyncExecute(this.onSettledCallbacks_[$i$$]);
      }
      this.onSettledCallbacks_ = null;
    }
  };
  var $asyncExecutor$$ = new $AsyncExecutor$$;
  $PolyfillPromise$$.prototype.settleSameAsPromise_ = function $$PolyfillPromise$$$$settleSameAsPromise_$($promise$$) {
    var $methods$$ = this.createResolveAndReject_();
    $promise$$.callWhenSettled_($methods$$.resolve, $methods$$.reject);
  };
  $PolyfillPromise$$.prototype.settleSameAsThenable_ = function $$PolyfillPromise$$$$settleSameAsThenable_$($thenMethod$$, $thenable$$) {
    var $methods$$ = this.createResolveAndReject_();
    try {
      $thenMethod$$.call($thenable$$, $methods$$.resolve, $methods$$.reject);
    } catch ($error$$) {
      $methods$$.reject($error$$);
    }
  };
  $PolyfillPromise$$.prototype.then = function $$PolyfillPromise$$$$then$($onFulfilled$$, $onRejected$$) {
    function $createCallback$$($paramF$$, $defaultF$$) {
      return "function" == typeof $paramF$$ ? function($x$$) {
        try {
          $resolveChild$$($paramF$$($x$$));
        } catch ($error$$) {
          $rejectChild$$($error$$);
        }
      } : $defaultF$$;
    }
    var $resolveChild$$, $rejectChild$$, $childPromise$$ = new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      $resolveChild$$ = $resolve$$;
      $rejectChild$$ = $reject$$;
    });
    this.callWhenSettled_($createCallback$$($onFulfilled$$, $resolveChild$$), $createCallback$$($onRejected$$, $rejectChild$$));
    return $childPromise$$;
  };
  $PolyfillPromise$$.prototype.catch = function $$PolyfillPromise$$$$catch$($onRejected$$) {
    return this.then(void 0, $onRejected$$);
  };
  $PolyfillPromise$$.prototype.callWhenSettled_ = function $$PolyfillPromise$$$$callWhenSettled_$($onFulfilled$$, $onRejected$$) {
    function $callback$$() {
      switch($thisPromise$$.state_) {
        case 1:
          $onFulfilled$$($thisPromise$$.result_);
          break;
        case 2:
          $onRejected$$($thisPromise$$.result_);
          break;
        default:
          throw Error("Unexpected state: " + $thisPromise$$.state_);
      }
    }
    var $thisPromise$$ = this;
    null == this.onSettledCallbacks_ ? $asyncExecutor$$.asyncExecute($callback$$) : this.onSettledCallbacks_.push($callback$$);
  };
  $PolyfillPromise$$.resolve = $resolvingPromise$$;
  $PolyfillPromise$$.reject = function $$PolyfillPromise$$$reject$($opt_reason$$) {
    return new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      $reject$$($opt_reason$$);
    });
  };
  $PolyfillPromise$$.race = function $$PolyfillPromise$$$race$($thenablesOrValues$$) {
    return new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      for (var $iterator$$ = $jscomp.makeIterator($thenablesOrValues$$), $iterRec$$ = $iterator$$.next(); !$iterRec$$.done; $iterRec$$ = $iterator$$.next()) {
        $resolvingPromise$$($iterRec$$.value).callWhenSettled_($resolve$$, $reject$$);
      }
    });
  };
  $PolyfillPromise$$.all = function $$PolyfillPromise$$$all$($thenablesOrValues$$) {
    var $iterator$$ = $jscomp.makeIterator($thenablesOrValues$$), $iterRec$$ = $iterator$$.next();
    return $iterRec$$.done ? $resolvingPromise$$([]) : new $PolyfillPromise$$(function($resolveAll$$, $rejectAll$$) {
      function $onFulfilled$$($i$$) {
        return function($ithResult$$) {
          $resultsArray$$[$i$$] = $ithResult$$;
          $unresolvedCount$$--;
          0 == $unresolvedCount$$ && $resolveAll$$($resultsArray$$);
        };
      }
      var $resultsArray$$ = [], $unresolvedCount$$ = 0;
      do {
        $resultsArray$$.push(void 0), $unresolvedCount$$++, $resolvingPromise$$($iterRec$$.value).callWhenSettled_($onFulfilled$$($resultsArray$$.length - 1), $rejectAll$$), $iterRec$$ = $iterator$$.next();
      } while (!$iterRec$$.done);
    });
  };
  return $PolyfillPromise$$;
}, "es6", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function $$jscomp$initSymbol$() {
  $jscomp.initSymbol = function $$jscomp$initSymbol$() {
  };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function $$jscomp$SymbolClass$($id$$, $opt_description$$) {
  this.$jscomp$symbol$id_ = $id$$;
  $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:$opt_description$$});
};
$jscomp.SymbolClass.prototype.toString = function $$jscomp$SymbolClass$$toString$() {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = function() {
  function $Symbol$$($opt_description$$) {
    if (this instanceof $Symbol$$) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + ($opt_description$$ || "") + "_" + $counter$$++, $opt_description$$);
  }
  var $counter$$ = 0;
  return $Symbol$$;
}();
$jscomp.initSymbolIterator = function $$jscomp$initSymbolIterator$() {
  $jscomp.initSymbol();
  var $symbolIterator$$ = $jscomp.global.Symbol.iterator;
  $symbolIterator$$ || ($symbolIterator$$ = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[$symbolIterator$$] && $jscomp.defineProperty(Array.prototype, $symbolIterator$$, {configurable:!0, writable:!0, value:function() {
    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
  }});
  $jscomp.initSymbolIterator = function $$jscomp$initSymbolIterator$() {
  };
};
$jscomp.initSymbolAsyncIterator = function $$jscomp$initSymbolAsyncIterator$() {
  $jscomp.initSymbol();
  var $symbolAsyncIterator$$ = $jscomp.global.Symbol.asyncIterator;
  $symbolAsyncIterator$$ || ($symbolAsyncIterator$$ = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function $$jscomp$initSymbolAsyncIterator$() {
  };
};
$jscomp.iteratorPrototype = function $$jscomp$iteratorPrototype$($iterator$$) {
  $jscomp.initSymbolIterator();
  $iterator$$ = {next:$iterator$$};
  $iterator$$[$jscomp.global.Symbol.iterator] = function $$iterator$$$$jscomp$global$Symbol$iterator$() {
    return this;
  };
  return $iterator$$;
};
$jscomp.underscoreProtoCanBeSet = function $$jscomp$underscoreProtoCanBeSet$() {
  var $x$$ = {a:!0}, $y$$ = {};
  try {
    return $y$$.__proto__ = $x$$, $y$$.a;
  } catch ($e$$) {
  }
  return !1;
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function($target$$, $proto$$) {
  $target$$.__proto__ = $proto$$;
  if ($target$$.__proto__ !== $proto$$) {
    throw new TypeError($target$$ + " is not extensible");
  }
  return $target$$;
} : null;
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function $$jscomp$generator$ensureIteratorResultIsObject_$($result$$) {
  if (!($result$$ instanceof Object)) {
    throw new TypeError("Iterator result " + $result$$ + " is not an object");
  }
};
$jscomp.generator.Context = function $$jscomp$generator$Context$() {
  this.isRunning_ = !1;
  this.yieldAllIterator_ = null;
  this.yieldResult = void 0;
  this.nextAddress = 1;
  this.finallyAddress_ = this.catchAddress_ = 0;
  this.finallyContexts_ = this.abruptCompletion_ = null;
};
$jscomp.generator.Context.prototype.start_ = function $$jscomp$generator$Context$$start_$() {
  if (this.isRunning_) {
    throw new TypeError("Generator is already running");
  }
  this.isRunning_ = !0;
};
$jscomp.generator.Context.prototype.stop_ = function $$jscomp$generator$Context$$stop_$() {
  this.isRunning_ = !1;
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function $$jscomp$generator$Context$$jumpToErrorHandler_$() {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
$jscomp.generator.Context.prototype.next_ = function $$jscomp$generator$Context$$next_$($value$$) {
  this.yieldResult = $value$$;
};
$jscomp.generator.Context.prototype.throw_ = function $$jscomp$generator$Context$$throw_$($e$$) {
  this.abruptCompletion_ = {exception:$e$$, isException:!0};
  this.jumpToErrorHandler_();
};
$jscomp.generator.Context.prototype.return = function $$jscomp$generator$Context$$return$($value$$) {
  this.abruptCompletion_ = {return:$value$$};
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function $$jscomp$generator$Context$$jumpThroughFinallyBlocks$($nextAddress$$) {
  this.abruptCompletion_ = {jumpTo:$nextAddress$$};
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.yield = function $$jscomp$generator$Context$$yield$($value$$, $resumeAddress$$) {
  this.nextAddress = $resumeAddress$$;
  return {value:$value$$};
};
$jscomp.generator.Context.prototype.yieldAll = function $$jscomp$generator$Context$$yieldAll$($iterable$jscomp$4_iterator$$, $resumeAddress$$) {
  $iterable$jscomp$4_iterator$$ = $jscomp.makeIterator($iterable$jscomp$4_iterator$$);
  var $result$$ = $iterable$jscomp$4_iterator$$.next();
  $jscomp.generator.ensureIteratorResultIsObject_($result$$);
  if ($result$$.done) {
    this.yieldResult = $result$$.value, this.nextAddress = $resumeAddress$$;
  } else {
    return this.yieldAllIterator_ = $iterable$jscomp$4_iterator$$, this.yield($result$$.value, $resumeAddress$$);
  }
};
$jscomp.generator.Context.prototype.jumpTo = function $$jscomp$generator$Context$$jumpTo$($nextAddress$$) {
  this.nextAddress = $nextAddress$$;
};
$jscomp.generator.Context.prototype.jumpToEnd = function $$jscomp$generator$Context$$jumpToEnd$() {
  this.nextAddress = 0;
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function $$jscomp$generator$Context$$setCatchFinallyBlocks$($catchAddress$$, $finallyAddress$$) {
  this.catchAddress_ = $catchAddress$$;
  void 0 != $finallyAddress$$ && (this.finallyAddress_ = $finallyAddress$$);
};
$jscomp.generator.Context.prototype.setFinallyBlock = function $$jscomp$generator$Context$$setFinallyBlock$($finallyAddress$$) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = $finallyAddress$$ || 0;
};
$jscomp.generator.Context.prototype.leaveTryBlock = function $$jscomp$generator$Context$$leaveTryBlock$($nextAddress$$, $catchAddress$$) {
  this.nextAddress = $nextAddress$$;
  this.catchAddress_ = $catchAddress$$ || 0;
};
$jscomp.generator.Context.prototype.enterCatchBlock = function $$jscomp$generator$Context$$enterCatchBlock$($exception$$) {
  this.catchAddress_ = $exception$$ || 0;
  $exception$$ = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return $exception$$;
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function $$jscomp$generator$Context$$enterFinallyBlock$($nextCatchAddress$$, $nextFinallyAddress$$, $finallyDepth$$) {
  $finallyDepth$$ ? this.finallyContexts_[$finallyDepth$$] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
  this.catchAddress_ = $nextCatchAddress$$ || 0;
  this.finallyAddress_ = $nextFinallyAddress$$ || 0;
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function $$jscomp$generator$Context$$leaveFinallyBlock$($nextAddress$$, $abruptCompletion_finallyDepth$$) {
  $abruptCompletion_finallyDepth$$ = this.finallyContexts_.splice($abruptCompletion_finallyDepth$$ || 0)[0];
  if ($abruptCompletion_finallyDepth$$ = this.abruptCompletion_ = this.abruptCompletion_ || $abruptCompletion_finallyDepth$$) {
    if ($abruptCompletion_finallyDepth$$.isException) {
      return this.jumpToErrorHandler_();
    }
    void 0 != $abruptCompletion_finallyDepth$$.jumpTo && this.finallyAddress_ < $abruptCompletion_finallyDepth$$.jumpTo ? (this.nextAddress = $abruptCompletion_finallyDepth$$.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_;
  } else {
    this.nextAddress = $nextAddress$$;
  }
};
$jscomp.generator.Context.prototype.forIn = function $$jscomp$generator$Context$$forIn$($object$$) {
  return new $jscomp.generator.Context.PropertyIterator($object$$);
};
$jscomp.generator.Context.PropertyIterator = function $$jscomp$generator$Context$PropertyIterator$($object$$) {
  this.object_ = $object$$;
  this.properties_ = [];
  for (var $property$$ in $object$$) {
    this.properties_.push($property$$);
  }
  this.properties_.reverse();
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function $$jscomp$generator$Context$PropertyIterator$$getNext$() {
  for (; 0 < this.properties_.length;) {
    var $property$$ = this.properties_.pop();
    if ($property$$ in this.object_) {
      return $property$$;
    }
  }
  return null;
};
$jscomp.generator.Engine_ = function $$jscomp$generator$Engine_$($program$$) {
  this.context_ = new $jscomp.generator.Context;
  this.program_ = $program$$;
};
$jscomp.generator.Engine_.prototype.next_ = function $$jscomp$generator$Engine_$$next_$($value$$) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) {
    return this.yieldAllStep_(this.context_.yieldAllIterator_.next, $value$$, this.context_.next_);
  }
  this.context_.next_($value$$);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.return_ = function $$jscomp$generator$Engine_$$return_$($value$$) {
  this.context_.start_();
  var $yieldAllIterator$$ = this.context_.yieldAllIterator_;
  if ($yieldAllIterator$$) {
    return this.yieldAllStep_("return" in $yieldAllIterator$$ ? $yieldAllIterator$$["return"] : function($v$$) {
      return {value:$v$$, done:!0};
    }, $value$$, this.context_.return);
  }
  this.context_.return($value$$);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.throw_ = function $$jscomp$generator$Engine_$$throw_$($exception$$) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) {
    return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], $exception$$, this.context_.next_);
  }
  this.context_.throw_($exception$$);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function $$jscomp$generator$Engine_$$yieldAllStep_$($action$$, $value$$, $nextAction$$) {
  try {
    var $result$$ = $action$$.call(this.context_.yieldAllIterator_, $value$$);
    $jscomp.generator.ensureIteratorResultIsObject_($result$$);
    if (!$result$$.done) {
      return this.context_.stop_(), $result$$;
    }
    var $resultValue$$ = $result$$.value;
  } catch ($e$$) {
    return this.context_.yieldAllIterator_ = null, this.context_.throw_($e$$), this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  $nextAction$$.call(this.context_, $resultValue$$);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.nextStep_ = function $$jscomp$generator$Engine_$$nextStep_$() {
  for (; this.context_.nextAddress;) {
    try {
      var $abruptCompletion$$ = this.program_(this.context_);
      if ($abruptCompletion$$) {
        return this.context_.stop_(), {value:$abruptCompletion$$.value, done:!1};
      }
    } catch ($e$$) {
      this.context_.yieldResult = void 0, this.context_.throw_($e$$);
    }
  }
  this.context_.stop_();
  if (this.context_.abruptCompletion_) {
    $abruptCompletion$$ = this.context_.abruptCompletion_;
    this.context_.abruptCompletion_ = null;
    if ($abruptCompletion$$.isException) {
      throw $abruptCompletion$$.exception;
    }
    return {value:$abruptCompletion$$.return, done:!0};
  }
  return {value:void 0, done:!0};
};
$jscomp.generator.Generator_ = function $$jscomp$generator$Generator_$($engine$$) {
  this.next = function $this$next$($opt_value$$) {
    return $engine$$.next_($opt_value$$);
  };
  this.throw = function $this$throw$($exception$$) {
    return $engine$$.throw_($exception$$);
  };
  this.return = function $this$return$($value$$) {
    return $engine$$.return_($value$$);
  };
  $jscomp.initSymbolIterator();
  this[Symbol.iterator] = function $this$Symbol$iterator$() {
    return this;
  };
};
$jscomp.generator.createGenerator = function $$jscomp$generator$createGenerator$($generator$$, $program$jscomp$64_result$$) {
  $program$jscomp$64_result$$ = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_($program$jscomp$64_result$$));
  $jscomp.setPrototypeOf && $jscomp.setPrototypeOf($program$jscomp$64_result$$, $generator$$.prototype);
  return $program$jscomp$64_result$$;
};
$jscomp.asyncExecutePromiseGenerator = function $$jscomp$asyncExecutePromiseGenerator$($generator$$) {
  function $passValueToGenerator$$($value$$) {
    return $generator$$.next($value$$);
  }
  function $passErrorToGenerator$$($error$$) {
    return $generator$$.throw($error$$);
  }
  return new Promise(function($resolve$$, $reject$$) {
    function $handleGeneratorRecord$$($genRec$$) {
      $genRec$$.done ? $resolve$$($genRec$$.value) : Promise.resolve($genRec$$.value).then($passValueToGenerator$$, $passErrorToGenerator$$).then($handleGeneratorRecord$$, $reject$$);
    }
    $handleGeneratorRecord$$($generator$$.next());
  });
};
$jscomp.asyncExecutePromiseGeneratorFunction = function $$jscomp$asyncExecutePromiseGeneratorFunction$($generatorFunction$$) {
  return $jscomp.asyncExecutePromiseGenerator($generatorFunction$$());
};
$jscomp.asyncExecutePromiseGeneratorProgram = function $$jscomp$asyncExecutePromiseGeneratorProgram$($program$$) {
  return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_($program$$)));
};
var ez_consent = function() {
  function $initializeUiAsync$$($options$$) {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function($$jscomp$generator$context$$) {
      if (1 == $$jscomp$generator$context$$.nextAddress) {
        return $$jscomp$generator$context$$.yield($ui$$.injectHtmlAsync($options$$), 2);
      }
      $ui$$.injectCss();
      $ui$$.showElement();
      $ui$$.onClick(function() {
        $consentCookies$$.setCookie();
        $ui$$.delete();
      });
      $$jscomp$generator$context$$.jumpToEnd();
    });
  }
  function $initializeAsync$$($options$$) {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function($$jscomp$generator$context$$) {
      var $JSCompiler_inline_result$jscomp$2_options$$ = $options$$;
      $JSCompiler_inline_result$jscomp$2_options$$ = $JSCompiler_inline_result$jscomp$2_options$$ || {};
      $JSCompiler_inline_result$jscomp$2_options$$.privacy_url = $JSCompiler_inline_result$jscomp$2_options$$.privacy_url || "/privacy";
      $JSCompiler_inline_result$jscomp$2_options$$.texts = $JSCompiler_inline_result$jscomp$2_options$$.texts || {};
      $JSCompiler_inline_result$jscomp$2_options$$.texts.main = $JSCompiler_inline_result$jscomp$2_options$$.texts.main || "This website uses cookies & similar.";
      $JSCompiler_inline_result$jscomp$2_options$$.texts.buttons = $JSCompiler_inline_result$jscomp$2_options$$.texts.buttons || {};
      $JSCompiler_inline_result$jscomp$2_options$$.texts.buttons.more = $JSCompiler_inline_result$jscomp$2_options$$.texts.buttons.more || "More";
      $JSCompiler_inline_result$jscomp$2_options$$.texts.buttons.ok = $JSCompiler_inline_result$jscomp$2_options$$.texts.buttons.ok || "OK";
      $options$$ = $JSCompiler_inline_result$jscomp$2_options$$;
      $JSCompiler_inline_result$jscomp$2_options$$ = $options$$.always_show ? !0 : /[?&]force-consent/.test(location.search) ? !0 : !$consentCookies$$.getCookie();
      return $JSCompiler_inline_result$jscomp$2_options$$ ? $$jscomp$generator$context$$.yield($initializeUiAsync$$($options$$), 0) : $$jscomp$generator$context$$.jumpTo(0);
    });
  }
  var $ui$$ = function() {
    function $initializeHtml$$($options$$) {
      return $consentHtml$$.replace("{main}", $options$$.texts.main).replace("{more}", $options$$.texts.buttons.more).replace("{ok}", $options$$.texts.buttons.ok).replace("{privacy_url}", $options$$.privacy_url);
    }
    function $getElements$$() {
      return {root:document.querySelector("." + $cssClassNames$$.root), buttons:document.querySelectorAll("." + $cssClassNames$$.button)};
    }
    var $cssClassNames$$ = {root:"cookie-consent", hide:"cookie-consent__hide", button:"cookie-consent__buttons-button"}, $consentHtml$$ = '\n            <div class="' + $cssClassNames$$.root + " " + $cssClassNames$$.hide + '">\n                <div class="cookie-consent__text">{main}</div>\n                <div class="cookie-consent__buttons">\n                    <div class="' + $cssClassNames$$.button + ' cookie-consent__buttons__read-more"><a href="{privacy_url}" target="_blank">{more}</a></div>\n                    <div class="' + 
    $cssClassNames$$.button + ' cookie-consent__buttons__close">{ok}</div>\n                </div>\n            </div>\n        ';
    return {injectHtmlAsync:function($options$$) {
      return new Promise(function($resolve$$) {
        var $html$$ = $initializeHtml$$($options$$);
        document.addEventListener("DOMContentLoaded", function() {
          document.body.insertAdjacentHTML("afterbegin", $html$$);
          $resolve$$();
        });
      });
    }, injectCss:function() {
      var $style$$ = document.createElement("style");
      $style$$.textContent = ".cookie-consent         { z-index: 9999; }\n                            .cookie-consent__hide   { display:none !important; }";
      document.head.append($style$$);
    }, showElement:function() {
      $getElements$$().root.classList.remove($cssClassNames$$.hide);
    }, delete:function() {
      $getElements$$().root.remove();
    }, onClick:function($handler$$) {
      for (var $$jscomp$iter$0$$ = $jscomp.makeIterator($getElements$$().buttons), $$jscomp$key$button$$ = $$jscomp$iter$0$$.next(); !$$jscomp$key$button$$.done; $$jscomp$key$button$$ = $$jscomp$iter$0$$.next()) {
        $$jscomp$key$button$$.value.addEventListener("click", function() {
          $handler$$();
        });
      }
    }};
  }(), $consentCookies$$ = function() {
    return {getCookie:function() {
      var $parts$$ = ("; " + document.cookie).split("; cookie-consent=");
      if (2 === $parts$$.length) {
        return $parts$$.pop().split(";").shift();
      }
    }, setCookie:function() {
      var $cookie_cookieParts$$ = [];
      $cookie_cookieParts$$.push("cookie-consent=dismissed");
      var $date$$ = new Date;
      $date$$.setFullYear($date$$.getFullYear() + 10);
      $cookie_cookieParts$$.push("expires=" + $date$$.toUTCString());
      $cookie_cookieParts$$.push("path=/");
      $cookie_cookieParts$$.push("domain=" + location.hostname.replace(/^www\./i, ""));
      $cookie_cookieParts$$ = $cookie_cookieParts$$.join("; ") + ";";
      document.cookie = $cookie_cookieParts$$;
    }};
  }();
  return {init:function($options$$) {
    return $initializeAsync$$($options$$);
  }};
}();
