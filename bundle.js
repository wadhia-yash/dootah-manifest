//region block: polyfills
(function () {
  if (typeof globalThis === 'object')
    return;
  Object.defineProperty(Object.prototype, '__magic__', {get: function () {
    return this;
  }, configurable: true});
  __magic__.globalThis = __magic__;
  delete Object.prototype.__magic__;
}());
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Array.prototype.fill === 'undefined') {
  // Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill
  Object.defineProperty(Array.prototype, 'fill', {value: function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this); // Steps 3-5.
    var len = O.length >>> 0; // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0; // Step 8.
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0; // Step 11.
    var finalValue = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }
    ; // Step 13.
    return O;
  }});
}
[Int8Array, Int16Array, Uint16Array, Int32Array, Float32Array, Float64Array].forEach(function (TypedArray) {
  if (typeof TypedArray.prototype.fill === 'undefined') {
    Object.defineProperty(TypedArray.prototype, 'fill', {value: Array.prototype.fill});
  }
});
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
//endregion
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['dootah-bundle'] = factory(typeof globalThis['dootah-bundle'] === 'undefined' ? {} : globalThis['dootah-bundle']);
}(function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  var clz32 = Math.clz32;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(CharSequence, 'CharSequence');
  initMetadataForClass(Number_0, 'Number');
  initMetadataForClass(Char, 'Char');
  initMetadataForInterface(Collection, 'Collection');
  initMetadataForInterface(KtList, 'List', VOID, VOID, [Collection]);
  initMetadataForInterface(Entry, 'Entry');
  initMetadataForInterface(KtMap, 'Map');
  initMetadataForInterface(KtSet, 'Set', VOID, VOID, [Collection]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Long, 'Long', VOID, Number_0);
  initMetadataForInterface(FunctionAdapter, 'FunctionAdapter');
  initMetadataForInterface(Comparator, 'Comparator');
  initMetadataForObject(Unit, 'Unit');
  initMetadataForClass(AbstractCollection, 'AbstractCollection', VOID, VOID, [Collection]);
  initMetadataForClass(AbstractMutableCollection, 'AbstractMutableCollection', VOID, AbstractCollection, [Collection]);
  initMetadataForClass(IteratorImpl, 'IteratorImpl');
  initMetadataForClass(AbstractMutableList, 'AbstractMutableList', VOID, AbstractMutableCollection, [Collection, KtList]);
  initMetadataForClass(AbstractMap, 'AbstractMap', VOID, VOID, [KtMap]);
  initMetadataForClass(AbstractMutableMap, 'AbstractMutableMap', VOID, AbstractMap, [KtMap]);
  initMetadataForClass(AbstractMutableSet, 'AbstractMutableSet', VOID, AbstractMutableCollection, [Collection, KtSet]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ArrayList, 'ArrayList', ArrayList_init_$Create$, AbstractMutableList, [Collection, KtList]);
  initMetadataForClass(HashMap, 'HashMap', HashMap_init_$Create$, AbstractMutableMap, [KtMap]);
  initMetadataForClass(HashMapEntrySetBase, 'HashMapEntrySetBase', VOID, AbstractMutableSet, [Collection, KtSet]);
  initMetadataForClass(HashMapEntrySet, 'HashMapEntrySet', VOID, HashMapEntrySetBase);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Itr, 'Itr');
  initMetadataForClass(EntriesItr, 'EntriesItr', VOID, Itr);
  initMetadataForClass(EntryRef, 'EntryRef', VOID, VOID, [Entry]);
  function containsAllEntries(m) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(m, Collection)) {
        tmp = m.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = m.d();
      while (_iterator__ex2g4s.e()) {
        var element = _iterator__ex2g4s.f();
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var entry = element;
        var tmp_0;
        if (!(entry == null) ? isInterface(entry, Entry) : false) {
          tmp_0 = this.y3(entry);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  initMetadataForInterface(InternalMap, 'InternalMap');
  initMetadataForClass(InternalHashMap, 'InternalHashMap', InternalHashMap_init_$Create$, VOID, [InternalMap]);
  initMetadataForClass(Exception, 'Exception', Exception_init_$Create$, Error);
  initMetadataForClass(RuntimeException, 'RuntimeException', RuntimeException_init_$Create$, Exception);
  initMetadataForClass(UnsupportedOperationException, 'UnsupportedOperationException', UnsupportedOperationException_init_$Create$, RuntimeException);
  initMetadataForClass(IllegalStateException, 'IllegalStateException', IllegalStateException_init_$Create$, RuntimeException);
  initMetadataForClass(IllegalArgumentException, 'IllegalArgumentException', IllegalArgumentException_init_$Create$, RuntimeException);
  initMetadataForClass(NoSuchElementException, 'NoSuchElementException', NoSuchElementException_init_$Create$, RuntimeException);
  initMetadataForClass(IndexOutOfBoundsException, 'IndexOutOfBoundsException', IndexOutOfBoundsException_init_$Create$, RuntimeException);
  initMetadataForClass(ConcurrentModificationException, 'ConcurrentModificationException', ConcurrentModificationException_init_$Create$, RuntimeException);
  initMetadataForClass(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', NoWhenBranchMatchedException_init_$Create$, RuntimeException);
  initMetadataForClass(NullPointerException, 'NullPointerException', NullPointerException_init_$Create$, RuntimeException);
  initMetadataForClass(ClassCastException, 'ClassCastException', ClassCastException_init_$Create$, RuntimeException);
  initMetadataForClass(KClassImpl, 'KClassImpl');
  initMetadataForClass(PrimitiveKClassImpl, 'PrimitiveKClassImpl', VOID, KClassImpl);
  initMetadataForObject(NothingKClassImpl, 'NothingKClassImpl', VOID, KClassImpl);
  initMetadataForClass(StringBuilder, 'StringBuilder', StringBuilder_init_$Create$_0, VOID, [CharSequence]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForObject(EmptyList, 'EmptyList', VOID, VOID, [KtList]);
  initMetadataForObject(EmptyIterator, 'EmptyIterator');
  initMetadataForClass(InvokeCallback, 'InvokeCallback');
  initMetadataForClass(Log, 'Log');
  initMetadataForClass(Toast, 'Toast');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ScreenArguments, 'ScreenArguments');
  initMetadataForClass(ScreenState, 'ScreenState', ScreenState);
  initMetadataForObject(Inherited, 'Inherited');
  initMetadataForClass(Padding, 'Padding');
  initMetadataForClass(FillMaxWidth, 'FillMaxWidth');
  initMetadataForClass(FillMaxHeight, 'FillMaxHeight');
  initMetadataForClass(FillMaxSize, 'FillMaxSize');
  initMetadataForClass(Size, 'Size');
  initMetadataForClass(Width, 'Width');
  initMetadataForClass(Height, 'Height');
  initMetadataForClass(Weight, 'Weight');
  initMetadataForClass(Background, 'Background');
  initMetadataForClass(ColumnNode, 'ColumnNode', ColumnNode);
  initMetadataForClass(TextNode, 'TextNode');
  initMetadataForClass(NativeSlotNode, 'NativeSlotNode');
  initMetadataForClass(ButtonNode, 'ButtonNode');
  initMetadataForClass(RowNode, 'RowNode', RowNode);
  initMetadataForClass(BoxNode, 'BoxNode');
  initMetadataForObject(DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls, 'DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls');
  initMetadataForObject(DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions, 'DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions');
  //endregion
  function CharSequence() {
  }
  function Number_0() {
  }
  function indexOf(_this__u8e3s4, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__u8e3s4[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, _this__u8e3s4[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.c(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    $l$loop: while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.c(separator);
      }
      if (limit < 0 || count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 && count > limit) {
      buffer.c(truncated);
    }
    buffer.c(postfix);
    return buffer;
  }
  function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.c(prefix);
    var count = 0;
    var _iterator__ex2g4s = _this__u8e3s4.d();
    $l$loop: while (_iterator__ex2g4s.e()) {
      var element = _iterator__ex2g4s.f();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.c(separator);
      }
      if (limit < 0 || count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 && count > limit) {
      buffer.c(truncated);
    }
    buffer.c(postfix);
    return buffer;
  }
  function coerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function coerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function toString($this) {
    // Inline function 'kotlin.js.unsafeCast' call
    return String.fromCharCode(_get_value__a43j40($this));
  }
  function Char() {
  }
  function KtList() {
  }
  function Collection() {
  }
  function Entry() {
  }
  function KtMap() {
  }
  function KtSet() {
  }
  function toString_0(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function Companion() {
    Companion_instance = this;
    this.q_1 = new Long(0, -2147483648);
    this.r_1 = new Long(-1, 2147483647);
    this.s_1 = 8;
    this.t_1 = 64;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Long(low, high) {
    Companion_getInstance();
    Number_0.call(this);
    this.u_1 = low;
    this.v_1 = high;
  }
  protoOf(Long).w = function (other) {
    return compare(this, other);
  };
  protoOf(Long).x = function (other) {
    return this.w(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(Long).toString = function () {
    return toStringImpl(this, 10);
  };
  protoOf(Long).equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Long).hashCode = function () {
    return hashCode(this);
  };
  protoOf(Long).valueOf = function () {
    return toNumber(this);
  };
  function abs(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.js.internal.isNegative' call
    if (_this__u8e3s4 < 0) {
      // Inline function 'kotlin.js.internal.unaryMinus' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = -_this__u8e3s4;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function FunctionAdapter() {
  }
  function get_buf() {
    _init_properties_bitUtils_kt__nfcg4k();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    _init_properties_bitUtils_kt__nfcg4k();
    // Inline function 'kotlin.js.jsBitwiseOr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    if ((obj | 0) === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function _init_properties_bitUtils_kt__nfcg4k() {
    if (!properties_initialized_bitUtils_kt_i2bo3e) {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat64 = new Float64Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat32 = new Float32Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufInt32 = new Int32Array(get_buf());
      // Inline function 'kotlin.run' call
      get_bufFloat64()[0] = -1.0;
      lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function get_ZERO() {
    _init_properties_boxedLong_kt__v24qrw();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    _init_properties_boxedLong_kt__v24qrw();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    _init_properties_boxedLong_kt__v24qrw();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    _init_properties_boxedLong_kt__v24qrw();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    _init_properties_boxedLong_kt__v24qrw();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    _init_properties_boxedLong_kt__v24qrw();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  var longArrayClass;
  function compare(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return thisNeg && !otherNeg ? -1 : !thisNeg && otherNeg ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function convertToInt(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.u_1;
  }
  function toNumber(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.v_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function toStringImpl(_this__u8e3s4, radix) {
    _init_properties_boxedLong_kt__v24qrw();
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = divide(_this__u8e3s4, radixLong);
        var rem = convertToInt(subtract(multiply(div, radixLong), _this__u8e3s4));
        var tmp = toStringImpl(div, radix);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        return tmp + rem.toString(radix);
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = divide(rem_0, radixToPower);
      var intval = convertToInt(subtract(rem_0, multiply(remDiv, radixToPower)));
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var digits = intval.toString(radix);
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function equalsLong(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.v_1 === other.v_1 && _this__u8e3s4.u_1 === other.u_1;
  }
  function hashCode(l) {
    _init_properties_boxedLong_kt__v24qrw();
    return l.u_1 ^ l.v_1;
  }
  function fromInt(value) {
    _init_properties_boxedLong_kt__v24qrw();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.v_1 < 0;
  }
  function subtract(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return add(_this__u8e3s4, negate(other));
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.u_1 >= 0 ? _this__u8e3s4.u_1 : 4.294967296E9 + _this__u8e3s4.u_1;
  }
  function isZero(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.v_1 === 0 && _this__u8e3s4.u_1 === 0;
  }
  function multiply(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) && lessThan(other, get_TWO_PWR_24_())) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.v_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.v_1 & 65535;
    var a16 = _this__u8e3s4.u_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.u_1 & 65535;
    var b48 = other.v_1 >>> 16 | 0;
    var b32 = other.v_1 & 65535;
    var b16 = other.u_1 >>> 16 | 0;
    var b00 = other.u_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function negate(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return add(invert(_this__u8e3s4), new Long(1, 0));
  }
  function fromNumber(value) {
    _init_properties_boxedLong_kt__v24qrw();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp = value % twoPwr32 | 0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp$ret$1 = value / twoPwr32 | 0;
      return new Long(tmp, tmp$ret$1);
    }
  }
  function add(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    var a48 = _this__u8e3s4.v_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.v_1 & 65535;
    var a16 = _this__u8e3s4.u_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.u_1 & 65535;
    var b48 = other.v_1 >>> 16 | 0;
    var b32 = other.v_1 & 65535;
    var b16 = other.u_1 >>> 16 | 0;
    var b00 = other.u_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function isOdd(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return (_this__u8e3s4.u_1 & 1) === 1;
  }
  function lessThan(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return compare(_this__u8e3s4, other) < 0;
  }
  function invert(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return new Long(~_this__u8e3s4.u_1, ~_this__u8e3s4.v_1);
  }
  function divide(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    if (isZero(other)) {
      throw Exception_init_$Create$_0('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) || equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(divide(halfThis, other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, divide(rem, other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = divide(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(divide(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(divide(_this__u8e3s4, negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) || greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftRight(_this__u8e3s4, numBits) {
    _init_properties_boxedLong_kt__v24qrw();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.u_1 >>> numBits_0 | 0 | _this__u8e3s4.v_1 << (32 - numBits_0 | 0), _this__u8e3s4.v_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.v_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.v_1 >= 0 ? 0 : -1);
      }
    }
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    _init_properties_boxedLong_kt__v24qrw();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.u_1 << numBits_0, _this__u8e3s4.v_1 << numBits_0 | (_this__u8e3s4.u_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.u_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function isLongArray(a) {
    _init_properties_boxedLong_kt__v24qrw();
    return isJsArray(a) && a.$type$ === 'LongArray';
  }
  function longArrayClass$lambda(it) {
    _init_properties_boxedLong_kt__v24qrw();
    return !(it == null) ? isLongArray(it) : false;
  }
  var properties_initialized_boxedLong_kt_lfwt2;
  function _init_properties_boxedLong_kt__v24qrw() {
    if (!properties_initialized_boxedLong_kt_lfwt2) {
      properties_initialized_boxedLong_kt_lfwt2 = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp = Array;
      longArrayClass = new PrimitiveKClassImpl(tmp, 'LongArray', longArrayClass$lambda);
    }
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charCodeAt(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.charCodeAt(index);
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = a.length;
    } else {
      tmp = a.a();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      tmp = substring(a, startIndex, endIndex);
    } else {
      tmp = a.b(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
  }
  function arrayToString$lambda(it) {
    return toString_1(it);
  }
  function compareTo(a, b) {
    var tmp;
    switch (typeof a) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, toNumber(b));
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
      case 'bigint':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var ia = 1 / a;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (ia === 1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.x(b);
  }
  function getObjectHashCode(obj) {
    // Inline function 'kotlin.js.jsIn' call
    if (!('kotlinHashCodeValue$' in obj)) {
      var hash = calculateRandomHash();
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    return obj['kotlinHashCodeValue$'];
  }
  function calculateRandomHash() {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    return Math.random() * 4.294967296E9 | 0;
  }
  function objectCreate(proto) {
    proto = proto === VOID ? null : proto;
    return Object.create(proto);
  }
  function defineProp(obj, name, getter, setter, enumerable) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter, enumerable: enumerable});
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else if (!(typeof o.toString === 'function')) {
      tmp = anyToString(o);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = o.toString();
    }
    return tmp;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' && typeof obj1.equals === 'function') {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' && typeof obj2 === 'number') {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = 1 / obj1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = tmp_1 === 1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function hashCode_0(obj) {
    if (obj == null)
      return 0;
    var typeOf = typeof obj;
    var tmp;
    switch (typeOf) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp = getBooleanHashCode(obj);
        break;
      case 'string':
        tmp = getStringHashCode(String(obj));
        break;
      case 'bigint':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp = getBigIntHashCode(obj);
        break;
      case 'symbol':
        tmp = getSymbolHashCode(obj);
        break;
      default:
        tmp = function () {
          throw new Error('Unexpected typeof `' + typeOf + '`');
        }();
        break;
    }
    return tmp;
  }
  function getBooleanHashCode(value) {
    return value ? 1231 : 1237;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function getBigIntHashCode(value) {
    var shiftNumber = BigInt(32);
    var mask = BigInt(4.294967295E9);
    var bigNumber = abs(value);
    var hashCode = 0;
    var tmp;
    // Inline function 'kotlin.js.internal.isNegative' call
    if (value < 0) {
      tmp = -1;
    } else {
      tmp = 1;
    }
    var signum = tmp;
    $l$loop: while (true) {
      // Inline function 'kotlin.js.internal.isZero' call
      if (!!(bigNumber == 0)) {
        break $l$loop;
      }
      // Inline function 'kotlin.js.internal.and' call
      // Inline function 'kotlin.js.jsBitwiseAnd' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.internal.toNumber' call
      var self_0 = bigNumber & mask;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var chunk = Number(self_0);
      hashCode = imul(31, hashCode) + chunk | 0;
      // Inline function 'kotlin.js.internal.shr' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bigNumber = bigNumber >> shiftNumber;
    }
    return imul(hashCode, signum);
  }
  function getSymbolHashCode(value) {
    var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
    var cachedHashCode = hashCodeMap.get(value);
    if (cachedHashCode !== VOID)
      return cachedHashCode;
    var hash = calculateRandomHash();
    hashCodeMap.set(value, hash);
    return hash;
  }
  function symbolIsSharable(symbol) {
    return Symbol.keyFor(symbol) != VOID;
  }
  function getSymbolMap() {
    if (symbolMap === VOID) {
      symbolMap = new Map();
    }
    return symbolMap;
  }
  function getSymbolWeakMap() {
    if (symbolWeakMap === VOID) {
      symbolWeakMap = new WeakMap();
    }
    return symbolWeakMap;
  }
  var symbolMap;
  var symbolWeakMap;
  function unboxIntrinsic(x) {
    // Inline function 'kotlin.error' call
    var message = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      instance.stack = (new Error()).stack;
    }
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function defineMessage(message, cause) {
    var tmp;
    if (isUndefined(message)) {
      var tmp_0;
      if (isUndefined(cause)) {
        tmp_0 = message;
      } else {
        var tmp1_elvis_lhs = cause == null ? null : cause.toString();
        tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = message == null ? VOID : message;
    }
    return tmp;
  }
  function isUndefined(value) {
    return value === VOID;
  }
  function extendThrowable(this_, message, cause) {
    defineFieldOnInstance(this_, 'message', defineMessage(message, cause));
    defineFieldOnInstance(this_, 'cause', cause);
    defineFieldOnInstance(this_, 'name', Object.getPrototypeOf(this_).constructor.name);
  }
  function defineFieldOnInstance(this_, name, value) {
    Object.defineProperty(this_, name, {configurable: true, writable: true, value: value});
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function jsGenerateInterfaceSymbol() {
    return generateInterfaceSymbolById();
  }
  function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    var undef = VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor};
  }
  function initMetadataForClass(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'class';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var metadata = createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
    ctor.$metadata$ = metadata;
    var prototype = ctor.prototype;
    if (!(interfaces == null)) {
      var inductionVariable = 0;
      var last = interfaces.length;
      while (inductionVariable < last) {
        var i = interfaces[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        Object.assign(prototype, i.prototype);
        prototype[i.Symbol] = true;
      }
    }
    if (kind === 'interface') {
      ctor.Symbol = generateInterfaceSymbolById();
    }
  }
  function generateInterfaceSymbolById() {
    return '#__interface_' + generateInterfaceId();
  }
  function generateInterfaceId() {
    if (globalInterfaceId === VOID) {
      globalInterfaceId = 0;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    globalInterfaceId = globalInterfaceId + 1 | 0;
    return globalInterfaceId;
  }
  var globalInterfaceId;
  function initMetadataForObject(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'object';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForInterface(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'interface';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForLambda(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Lambda', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCoroutine(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Coroutine', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForFunctionReference(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'FunctionReference', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCompanion(ctor, parent, interfaces, suspendArity) {
    initMetadataForObject(ctor, 'Companion', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = convertToInt(a);
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    var tmp;
    if (a > 2147483647) {
      tmp = 2147483647;
    } else if (a < -2147483648) {
      tmp = -2147483648;
    } else {
      // Inline function 'kotlin.js.jsBitwiseOr' call
      tmp = a | 0;
    }
    return tmp;
  }
  function isArrayish(o) {
    return isJsArray(o) || isView(o);
  }
  function isJsArray(obj) {
    // Inline function 'kotlin.js.unsafeCast' call
    return Array.isArray(obj);
  }
  function isInterface(obj, iface) {
    return obj[iface.Symbol] === true;
  }
  function isCharSequence(value) {
    return typeof value === 'string' || isInterface(value, CharSequence);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (!properties_initialized_void_kt_e4ret2) {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  function asList(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new ArrayList(_this__u8e3s4);
  }
  function copyOf(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return fillFrom(_this__u8e3s4, new Int32Array(newSize));
  }
  function copyOf_0(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return arrayCopyResize(_this__u8e3s4, newSize, null);
  }
  function Comparator() {
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function takeHighestOneBit(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 === 0) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = 1 << (31 - clz32(_this__u8e3s4) | 0);
    }
    return tmp;
  }
  function Unit() {
  }
  protoOf(Unit).toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    return Unit_instance;
  }
  function collectionToArray(collection) {
    return collectionToArrayCommonImpl(collection);
  }
  function listOf(element) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = [element];
    return new ArrayList(tmp$ret$0);
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  protoOf(AbstractMutableCollection).toJSON = function () {
    return this.toArray();
  };
  protoOf(AbstractMutableCollection).z = function () {
  };
  function IteratorImpl($outer) {
    this.c1_1 = $outer;
    this.a1_1 = 0;
    this.b1_1 = -1;
  }
  protoOf(IteratorImpl).e = function () {
    return this.a1_1 < this.c1_1.g();
  };
  protoOf(IteratorImpl).f = function () {
    if (!this.e())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.a1_1;
    this.a1_1 = _unary__edvuaz + 1 | 0;
    tmp.b1_1 = _unary__edvuaz;
    return this.c1_1.j(this.b1_1);
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.d1_1 = 0;
  }
  protoOf(AbstractMutableList).f1 = function (element) {
    this.z();
    this.e1(this.g(), element);
    return true;
  };
  protoOf(AbstractMutableList).d = function () {
    return new IteratorImpl(this);
  };
  protoOf(AbstractMutableList).i = function (element) {
    return this.g1(element) >= 0;
  };
  protoOf(AbstractMutableList).g1 = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = this.d();
      while (_iterator__ex2g4s.e()) {
        var item = _iterator__ex2g4s.f();
        if (equals(item, element)) {
          tmp$ret$0 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractMutableList).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtList) : false))
      return false;
    return Companion_instance_2.i1(this, other);
  };
  protoOf(AbstractMutableList).hashCode = function () {
    return Companion_instance_2.j1(this);
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.m1_1 = null;
    this.n1_1 = null;
  }
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  protoOf(AbstractMutableSet).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtSet) : false))
      return false;
    return Companion_instance_4.s1(this, other);
  };
  protoOf(AbstractMutableSet).hashCode = function () {
    return Companion_instance_4.t1(this);
  };
  function arrayOfUninitializedElements(capacity) {
    // Inline function 'kotlin.require' call
    if (!(capacity >= 0)) {
      var message = 'capacity must be non-negative.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return Array(capacity);
  }
  function resetRange(_this__u8e3s4, fromIndex, toIndex) {
    // Inline function 'kotlin.js.nativeFill' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.fill(null, fromIndex, toIndex);
  }
  function copyOfUninitializedElements(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return copyOf_0(_this__u8e3s4, newSize);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$_0(0);
    this_0.w1_1 = true;
    tmp.x1_1 = this_0;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ArrayList_init_$Init$($this) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(objectCreate(protoOf(ArrayList)));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      var message = 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(ArrayList)));
  }
  function rangeCheck($this, index) {
    // Inline function 'kotlin.apply' call
    Companion_instance_2.y1(index, $this.g());
    return index;
  }
  function insertionRangeCheck($this, index) {
    // Inline function 'kotlin.apply' call
    Companion_instance_2.z1(index, $this.g());
    return index;
  }
  function ArrayList(array) {
    Companion_getInstance_0();
    AbstractMutableList.call(this);
    this.v1_1 = array;
    this.w1_1 = false;
  }
  protoOf(ArrayList).a2 = function () {
    this.z();
    this.w1_1 = true;
    return this.g() > 0 ? this : Companion_getInstance_0().x1_1;
  };
  protoOf(ArrayList).g = function () {
    return this.v1_1.length;
  };
  protoOf(ArrayList).j = function (index) {
    return this.v1_1[rangeCheck(this, index)];
  };
  protoOf(ArrayList).f1 = function (element) {
    this.z();
    // Inline function 'kotlin.js.asDynamic' call
    this.v1_1.push(element);
    this.d1_1 = this.d1_1 + 1 | 0;
    return true;
  };
  protoOf(ArrayList).e1 = function (index, element) {
    this.z();
    // Inline function 'kotlin.js.asDynamic' call
    this.v1_1.splice(insertionRangeCheck(this, index), 0, element);
    this.d1_1 = this.d1_1 + 1 | 0;
  };
  protoOf(ArrayList).g1 = function (element) {
    return indexOf(this.v1_1, element);
  };
  protoOf(ArrayList).toString = function () {
    return arrayToString(this.v1_1);
  };
  protoOf(ArrayList).b2 = function () {
    return [].slice.call(this.v1_1);
  };
  protoOf(ArrayList).toArray = function () {
    return this.b2();
  };
  protoOf(ArrayList).z = function () {
    if (this.w1_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.g2_1 = internalMap;
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(InternalHashMap_init_$Create$(), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(objectCreate(protoOf(HashMap)));
  }
  protoOf(HashMap).n = function (key) {
    return this.g2_1.i2(key);
  };
  protoOf(HashMap).p = function () {
    var tmp0_elvis_lhs = this.h2_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new HashMapEntrySet(this.g2_1);
      this.h2_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(HashMap).o = function (key) {
    return this.g2_1.o(key);
  };
  protoOf(HashMap).o1 = function (key, value) {
    return this.g2_1.o1(key, value);
  };
  protoOf(HashMap).g = function () {
    return this.g2_1.g();
  };
  function HashMap() {
    this.h2_1 = null;
  }
  function HashMapEntrySet(backing) {
    HashMapEntrySetBase.call(this, backing);
  }
  protoOf(HashMapEntrySet).d = function () {
    return this.k2_1.l2();
  };
  function HashMapEntrySetBase(backing) {
    AbstractMutableSet.call(this);
    this.k2_1 = backing;
  }
  protoOf(HashMapEntrySetBase).g = function () {
    return this.k2_1.g();
  };
  protoOf(HashMapEntrySetBase).h = function () {
    return this.k2_1.g() === 0;
  };
  protoOf(HashMapEntrySetBase).m2 = function (element) {
    return this.k2_1.n2(element);
  };
  protoOf(HashMapEntrySetBase).i = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.m2((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(HashMapEntrySetBase).k = function (elements) {
    return this.k2_1.o2(elements);
  };
  function computeHashSize($this, capacity) {
    return takeHighestOneBit(imul(coerceAtLeast(capacity, 1), 3));
  }
  function computeShift($this, hashSize) {
    // Inline function 'kotlin.countLeadingZeroBits' call
    return clz32(hashSize) + 1 | 0;
  }
  function checkForComodification($this) {
    if (!($this.z2_1.w2_1 === $this.b3_1))
      throw ConcurrentModificationException_init_$Create$_0('The backing map has been modified after this entry was obtained.');
  }
  function InternalHashMap_init_$Init$($this) {
    InternalHashMap_init_$Init$_0(8, $this);
    return $this;
  }
  function InternalHashMap_init_$Create$() {
    return InternalHashMap_init_$Init$(objectCreate(protoOf(InternalHashMap)));
  }
  function InternalHashMap_init_$Init$_0(initialCapacity, $this) {
    InternalHashMap.call($this, arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_1, initialCapacity)), 2, 0);
    return $this;
  }
  function _get_capacity__a9k9f3($this) {
    return $this.p2_1.length;
  }
  function _get_hashSize__tftcho($this) {
    return $this.s2_1.length;
  }
  function registerModification($this) {
    $this.w2_1 = $this.w2_1 + 1 | 0;
  }
  function ensureExtraCapacity($this, n) {
    if (shouldCompact($this, n)) {
      compact($this, true);
    } else {
      ensureCapacity($this, $this.u2_1 + n | 0);
    }
  }
  function shouldCompact($this, extraCapacity) {
    var spareCapacity = _get_capacity__a9k9f3($this) - $this.u2_1 | 0;
    var gaps = $this.u2_1 - $this.g() | 0;
    return spareCapacity < extraCapacity && (gaps + spareCapacity | 0) >= extraCapacity && gaps >= (_get_capacity__a9k9f3($this) / 4 | 0);
  }
  function ensureCapacity($this, minCapacity) {
    if (minCapacity < 0)
      throw RuntimeException_init_$Create$_0('too many elements');
    if (minCapacity > _get_capacity__a9k9f3($this)) {
      var newSize = Companion_instance_2.c3(_get_capacity__a9k9f3($this), minCapacity);
      $this.p2_1 = copyOfUninitializedElements($this.p2_1, newSize);
      var tmp = $this;
      var tmp0_safe_receiver = $this.q2_1;
      tmp.q2_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
      $this.r2_1 = copyOf($this.r2_1, newSize);
      var newHashSize = computeHashSize(Companion_instance_1, newSize);
      if (newHashSize > _get_hashSize__tftcho($this)) {
        rehash($this, newHashSize);
      }
    }
  }
  function allocateValuesArray($this) {
    var curValuesArray = $this.q2_1;
    if (!(curValuesArray == null))
      return curValuesArray;
    var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
    $this.q2_1 = newValuesArray;
    return newValuesArray;
  }
  function hash($this, key) {
    return key == null ? 0 : imul(hashCode_0(key), -1640531527) >>> $this.v2_1 | 0;
  }
  function compact($this, updateHashArray) {
    var i = 0;
    var j = 0;
    var valuesArray = $this.q2_1;
    while (i < $this.u2_1) {
      var hash = $this.r2_1[i];
      if (hash >= 0) {
        $this.p2_1[j] = $this.p2_1[i];
        if (!(valuesArray == null)) {
          valuesArray[j] = valuesArray[i];
        }
        if (updateHashArray) {
          $this.r2_1[j] = hash;
          $this.s2_1[hash] = j + 1 | 0;
        }
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
    resetRange($this.p2_1, j, $this.u2_1);
    if (valuesArray == null)
      null;
    else {
      resetRange(valuesArray, j, $this.u2_1);
    }
    $this.u2_1 = j;
  }
  function rehash($this, newHashSize) {
    registerModification($this);
    if ($this.u2_1 > $this.x2_1) {
      compact($this, false);
    }
    $this.s2_1 = new Int32Array(newHashSize);
    $this.v2_1 = computeShift(Companion_instance_1, newHashSize);
    var i = 0;
    while (i < $this.u2_1) {
      var _unary__edvuaz = i;
      i = _unary__edvuaz + 1 | 0;
      if (!putRehash($this, _unary__edvuaz)) {
        throw IllegalStateException_init_$Create$_0('This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?');
      }
    }
  }
  function putRehash($this, i) {
    var hash_0 = hash($this, $this.p2_1[i]);
    var probesLeft = $this.t2_1;
    while (true) {
      var index = $this.s2_1[hash_0];
      if (index === 0) {
        $this.s2_1[hash_0] = i + 1 | 0;
        $this.r2_1[i] = hash_0;
        return true;
      }
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return false;
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function findKey($this, key) {
    var hash_0 = hash($this, key);
    var probesLeft = $this.t2_1;
    while (true) {
      var index = $this.s2_1[hash_0];
      if (index === 0)
        return -1;
      if (equals($this.p2_1[index - 1 | 0], key))
        return index - 1 | 0;
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return -1;
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function addKey($this, key) {
    $this.d3();
    retry: while (true) {
      var hash_0 = hash($this, key);
      var tentativeMaxProbeDistance = coerceAtMost(imul($this.t2_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
      var probeDistance = 0;
      while (true) {
        var index = $this.s2_1[hash_0];
        if (index === 0) {
          if ($this.u2_1 >= _get_capacity__a9k9f3($this)) {
            ensureExtraCapacity($this, 1);
            continue retry;
          }
          var _unary__edvuaz = $this.u2_1;
          $this.u2_1 = _unary__edvuaz + 1 | 0;
          var putIndex = _unary__edvuaz;
          $this.p2_1[putIndex] = key;
          $this.r2_1[putIndex] = hash_0;
          $this.s2_1[hash_0] = putIndex + 1 | 0;
          $this.x2_1 = $this.x2_1 + 1 | 0;
          registerModification($this);
          if (probeDistance > $this.t2_1)
            $this.t2_1 = probeDistance;
          return putIndex;
        }
        if (equals($this.p2_1[index - 1 | 0], key)) {
          return -index | 0;
        }
        probeDistance = probeDistance + 1 | 0;
        if (probeDistance > tentativeMaxProbeDistance) {
          rehash($this, imul(_get_hashSize__tftcho($this), 2));
          continue retry;
        }
        var _unary__edvuaz_0 = hash_0;
        hash_0 = _unary__edvuaz_0 - 1 | 0;
        if (_unary__edvuaz_0 === 0)
          hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
      }
    }
  }
  function contentEquals($this, other) {
    return $this.x2_1 === other.g() && $this.o2(other.p());
  }
  function Companion_1() {
    this.e3_1 = -1640531527;
    this.f3_1 = 8;
    this.g3_1 = 2;
    this.h3_1 = -1;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function Itr(map) {
    this.i3_1 = map;
    this.j3_1 = 0;
    this.k3_1 = -1;
    this.l3_1 = this.i3_1.w2_1;
    this.m3();
  }
  protoOf(Itr).m3 = function () {
    while (this.j3_1 < this.i3_1.u2_1 && this.i3_1.r2_1[this.j3_1] < 0) {
      this.j3_1 = this.j3_1 + 1 | 0;
    }
  };
  protoOf(Itr).e = function () {
    return this.j3_1 < this.i3_1.u2_1;
  };
  protoOf(Itr).n3 = function () {
    if (!(this.i3_1.w2_1 === this.l3_1))
      throw ConcurrentModificationException_init_$Create$();
  };
  function EntriesItr(map) {
    Itr.call(this, map);
  }
  protoOf(EntriesItr).f = function () {
    this.n3();
    if (this.j3_1 >= this.i3_1.u2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.j3_1;
    this.j3_1 = _unary__edvuaz + 1 | 0;
    tmp.k3_1 = _unary__edvuaz;
    var result = new EntryRef(this.i3_1, this.k3_1);
    this.m3();
    return result;
  };
  protoOf(EntriesItr).s3 = function () {
    if (this.j3_1 >= this.i3_1.u2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.j3_1;
    this.j3_1 = _unary__edvuaz + 1 | 0;
    tmp.k3_1 = _unary__edvuaz;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.i3_1.p2_1[this.k3_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode_0(tmp0_safe_receiver);
    var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = ensureNotNull(this.i3_1.q2_1)[this.k3_1];
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode_0(tmp0_safe_receiver_0);
    var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
    this.m3();
    return result;
  };
  protoOf(EntriesItr).t3 = function (sb) {
    if (this.j3_1 >= this.i3_1.u2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.j3_1;
    this.j3_1 = _unary__edvuaz + 1 | 0;
    tmp.k3_1 = _unary__edvuaz;
    var key = this.i3_1.p2_1[this.k3_1];
    if (equals(key, this.i3_1))
      sb.w3('(this Map)');
    else
      sb.v3(key);
    sb.x3(_Char___init__impl__6a9atx(61));
    var value = ensureNotNull(this.i3_1.q2_1)[this.k3_1];
    if (equals(value, this.i3_1))
      sb.w3('(this Map)');
    else
      sb.v3(value);
    this.m3();
  };
  function EntryRef(map, index) {
    this.z2_1 = map;
    this.a3_1 = index;
    this.b3_1 = this.z2_1.w2_1;
  }
  protoOf(EntryRef).l = function () {
    checkForComodification(this);
    return this.z2_1.p2_1[this.a3_1];
  };
  protoOf(EntryRef).m = function () {
    checkForComodification(this);
    return ensureNotNull(this.z2_1.q2_1)[this.a3_1];
  };
  protoOf(EntryRef).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals(other.l(), this.l());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.m(), this.m());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EntryRef).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode_0(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.m();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode_0(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(EntryRef).toString = function () {
    return toString_0(this.l()) + '=' + toString_0(this.m());
  };
  function InternalHashMap(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
    this.p2_1 = keysArray;
    this.q2_1 = valuesArray;
    this.r2_1 = presenceArray;
    this.s2_1 = hashArray;
    this.t2_1 = maxProbeDistance;
    this.u2_1 = length;
    this.v2_1 = computeShift(Companion_instance_1, _get_hashSize__tftcho(this));
    this.w2_1 = 0;
    this.x2_1 = 0;
    this.y2_1 = false;
  }
  protoOf(InternalHashMap).g = function () {
    return this.x2_1;
  };
  protoOf(InternalHashMap).o = function (key) {
    var index = findKey(this, key);
    if (index < 0)
      return null;
    return ensureNotNull(this.q2_1)[index];
  };
  protoOf(InternalHashMap).i2 = function (key) {
    return findKey(this, key) >= 0;
  };
  protoOf(InternalHashMap).o1 = function (key, value) {
    var index = addKey(this, key);
    var valuesArray = allocateValuesArray(this);
    if (index < 0) {
      var oldValue = valuesArray[(-index | 0) - 1 | 0];
      valuesArray[(-index | 0) - 1 | 0] = value;
      return oldValue;
    } else {
      valuesArray[index] = value;
      return null;
    }
  };
  protoOf(InternalHashMap).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      if (!(other == null) ? isInterface(other, KtMap) : false) {
        tmp_0 = contentEquals(this, other);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(InternalHashMap).hashCode = function () {
    var result = 0;
    var it = this.l2();
    while (it.e()) {
      result = result + it.s3() | 0;
    }
    return result;
  };
  protoOf(InternalHashMap).toString = function () {
    var sb = StringBuilder_init_$Create$(2 + imul(this.x2_1, 3) | 0);
    sb.w3('{');
    var i = 0;
    var it = this.l2();
    while (it.e()) {
      if (i > 0) {
        sb.w3(', ');
      }
      it.t3(sb);
      i = i + 1 | 0;
    }
    sb.w3('}');
    return sb.toString();
  };
  protoOf(InternalHashMap).d3 = function () {
    if (this.y2_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(InternalHashMap).n2 = function (entry) {
    var index = findKey(this, entry.l());
    if (index < 0)
      return false;
    return equals(ensureNotNull(this.q2_1)[index], entry.m());
  };
  protoOf(InternalHashMap).y3 = function (entry) {
    return this.n2(isInterface(entry, Entry) ? entry : THROW_CCE());
  };
  protoOf(InternalHashMap).l2 = function () {
    return new EntriesItr(this);
  };
  function InternalMap() {
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  function IllegalArgumentException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$() {
    var tmp = IllegalArgumentException_init_$Init$(objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$() {
    var tmp = RuntimeException_init_$Init$(objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_0(message) {
    var tmp = RuntimeException_init_$Init$_0(message, objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$_0);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$() {
    var tmp = Exception_init_$Init$(objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_0(message) {
    var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$_0);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  function IndexOutOfBoundsException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$() {
    var tmp = IndexOutOfBoundsException_init_$Init$(objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$_0(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$_0(message, objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  function ConcurrentModificationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ConcurrentModificationException.call($this);
    return $this;
  }
  function ConcurrentModificationException_init_$Create$() {
    var tmp = ConcurrentModificationException_init_$Init$(objectCreate(protoOf(ConcurrentModificationException)));
    captureStack(tmp, ConcurrentModificationException_init_$Create$);
    return tmp;
  }
  function ConcurrentModificationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ConcurrentModificationException.call($this);
    return $this;
  }
  function ConcurrentModificationException_init_$Create$_0(message) {
    var tmp = ConcurrentModificationException_init_$Init$_0(message, objectCreate(protoOf(ConcurrentModificationException)));
    captureStack(tmp, ConcurrentModificationException_init_$Create$_0);
    return tmp;
  }
  function ConcurrentModificationException() {
    captureStack(this, ConcurrentModificationException);
  }
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(objectCreate(protoOf(NoWhenBranchMatchedException)));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    // Inline function 'kotlin.js.unsafeCast' call
    var arr = dst;
    while (index < srcLen && index < dstLen) {
      var tmp = index;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      arr[tmp] = src[_unary__edvuaz];
    }
    return dst;
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    // Inline function 'kotlin.js.unsafeCast' call
    var result = source.slice(0, newSize);
    // Inline function 'kotlin.copyArrayType' call
    if (source.$type$ !== undefined) {
      result.$type$ = source.$type$;
    }
    var index = source.length;
    if (newSize > index) {
      // Inline function 'kotlin.js.asDynamic' call
      result.length = newSize;
      while (index < newSize) {
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        result[_unary__edvuaz] = defaultValue;
      }
    }
    return result;
  }
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this);
    this.b4_1 = jClass;
    this.c4_1 = givenSimpleName;
    this.d4_1 = isInstanceFunction;
  }
  protoOf(PrimitiveKClassImpl).e4 = function () {
    return this.b4_1;
  };
  protoOf(PrimitiveKClassImpl).equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return protoOf(KClassImpl).equals.call(this, other) && this.c4_1 === other.c4_1;
  };
  protoOf(PrimitiveKClassImpl).f4 = function () {
    return this.c4_1;
  };
  function KClassImpl() {
  }
  protoOf(KClassImpl).equals = function (other) {
    var tmp;
    if (other instanceof NothingKClassImpl) {
      tmp = false;
    } else {
      if (other instanceof KClassImpl) {
        tmp = equals(this.e4(), other.e4());
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(KClassImpl).hashCode = function () {
    var tmp0_safe_receiver = this.f4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(KClassImpl).toString = function () {
    return 'class ' + this.f4();
  };
  function NothingKClassImpl() {
  }
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder(content) {
    this.u3_1 = content;
  }
  protoOf(StringBuilder).a = function () {
    // Inline function 'kotlin.js.asDynamic' call
    return this.u3_1.length;
  };
  protoOf(StringBuilder).b = function (startIndex, endIndex) {
    return substring(this.u3_1, startIndex, endIndex);
  };
  protoOf(StringBuilder).x3 = function (value) {
    this.u3_1 = this.u3_1 + toString(value);
    return this;
  };
  protoOf(StringBuilder).c = function (value) {
    this.u3_1 = this.u3_1 + toString_0(value);
    return this;
  };
  protoOf(StringBuilder).v3 = function (value) {
    this.u3_1 = this.u3_1 + toString_0(value);
    return this;
  };
  protoOf(StringBuilder).w3 = function (value) {
    var tmp = this;
    var tmp_0 = this.u3_1;
    tmp.u3_1 = tmp_0 + (value == null ? 'null' : value);
    return this;
  };
  protoOf(StringBuilder).toString = function () {
    return this.u3_1;
  };
  function uppercaseChar(_this__u8e3s4) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var uppercase = toString(_this__u8e3s4).toUpperCase();
    return uppercase.length > 1 ? _this__u8e3s4 : charCodeAt(uppercase, 0);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$_0('radix ' + radix + ' was not in valid range 2..36');
    }
    return radix;
  }
  function toString_2(_this__u8e3s4, radix) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.toString(checkRadix(radix));
  }
  var STRING_CASE_INSENSITIVE_ORDER;
  function substring(_this__u8e3s4, startIndex, endIndex) {
    _init_properties_stringJs_kt__bg7zye();
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.substring(startIndex, endIndex);
  }
  function compareTo_0(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    _init_properties_stringJs_kt__bg7zye();
    if (ignoreCase) {
      var n1 = _this__u8e3s4.length;
      var n2 = other.length;
      // Inline function 'kotlin.comparisons.minOf' call
      var min = Math.min(n1, n2);
      if (min === 0)
        return n1 - n2 | 0;
      var inductionVariable = 0;
      if (inductionVariable < min)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var thisChar = charCodeAt(_this__u8e3s4, index);
          var otherChar = charCodeAt(other, index);
          if (!(thisChar === otherChar)) {
            thisChar = uppercaseChar(thisChar);
            otherChar = uppercaseChar(otherChar);
            if (!(thisChar === otherChar)) {
              // Inline function 'kotlin.text.lowercaseChar' call
              // Inline function 'kotlin.text.lowercase' call
              var this_0 = thisChar;
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$2 = toString(this_0).toLowerCase();
              thisChar = charCodeAt(tmp$ret$2, 0);
              // Inline function 'kotlin.text.lowercaseChar' call
              // Inline function 'kotlin.text.lowercase' call
              var this_1 = otherChar;
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$6 = toString(this_1).toLowerCase();
              otherChar = charCodeAt(tmp$ret$6, 0);
              if (!(thisChar === otherChar)) {
                return Char__compareTo_impl_ypi4mb(thisChar, otherChar);
              }
            }
          }
        }
         while (inductionVariable < min);
      return n1 - n2 | 0;
    } else {
      return compareTo(_this__u8e3s4, other);
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.g4_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).h4 = function (a, b) {
    return this.g4_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.h4(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).y = function () {
    return this.g4_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y(), other.y());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode_0(this.y());
  };
  function STRING_CASE_INSENSITIVE_ORDER$lambda(a, b) {
    _init_properties_stringJs_kt__bg7zye();
    return compareTo_0(a, b, true);
  }
  var properties_initialized_stringJs_kt_nta8o4;
  function _init_properties_stringJs_kt__bg7zye() {
    if (!properties_initialized_stringJs_kt_nta8o4) {
      properties_initialized_stringJs_kt_nta8o4 = true;
      var tmp = STRING_CASE_INSENSITIVE_ORDER$lambda;
      STRING_CASE_INSENSITIVE_ORDER = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_0(it);
    };
  }
  function AbstractCollection() {
  }
  protoOf(AbstractCollection).i = function (element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = this.d();
      while (_iterator__ex2g4s.e()) {
        var element_0 = _iterator__ex2g4s.f();
        if (equals(element_0, element)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).k = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.d();
      while (_iterator__ex2g4s.e()) {
        var element = _iterator__ex2g4s.f();
        if (!this.i(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).h = function () {
    return this.g() === 0;
  };
  protoOf(AbstractCollection).toString = function () {
    return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  };
  protoOf(AbstractCollection).toArray = function () {
    return collectionToArray(this);
  };
  function Companion_2() {
    this.h1_1 = 2147483639;
  }
  protoOf(Companion_2).y1 = function (index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion_2).z1 = function (index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion_2).c3 = function (oldCapacity, minCapacity) {
    var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
    if ((newCapacity - minCapacity | 0) < 0)
      newCapacity = minCapacity;
    if ((newCapacity - 2147483639 | 0) > 0)
      newCapacity = minCapacity > 2147483639 ? 2147483647 : 2147483639;
    return newCapacity;
  };
  protoOf(Companion_2).j1 = function (c) {
    var hashCode = 1;
    var _iterator__ex2g4s = c.d();
    while (_iterator__ex2g4s.e()) {
      var e = _iterator__ex2g4s.f();
      var tmp = imul(31, hashCode);
      var tmp1_elvis_lhs = e == null ? null : hashCode_0(e);
      hashCode = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    return hashCode;
  };
  protoOf(Companion_2).i1 = function (c, other) {
    if (!(c.g() === other.g()))
      return false;
    var otherIterator = other.d();
    var _iterator__ex2g4s = c.d();
    while (_iterator__ex2g4s.e()) {
      var elem = _iterator__ex2g4s.f();
      var elemOther = otherIterator.f();
      if (!equals(elem, elemOther)) {
        return false;
      }
    }
    return true;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function toString_3($this, entry) {
    return toString_4($this, entry.l()) + '=' + toString_4($this, entry.m());
  }
  function toString_4($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp0 = $this.p();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.d();
      while (_iterator__ex2g4s.e()) {
        var element = _iterator__ex2g4s.f();
        if (equals(element.l(), key)) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return toString_3(this$0, it);
    };
  }
  function AbstractMap() {
    this.p1_1 = null;
    this.q1_1 = null;
  }
  protoOf(AbstractMap).n = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  protoOf(AbstractMap).r1 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    var key = entry.l();
    var value = entry.m();
    // Inline function 'kotlin.collections.get' call
    var ourValue = (isInterface(this, KtMap) ? this : THROW_CCE()).o(key);
    if (!equals(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      // Inline function 'kotlin.collections.containsKey' call
      tmp = !(isInterface(this, KtMap) ? this : THROW_CCE()).n(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    return true;
  };
  protoOf(AbstractMap).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtMap) : false))
      return false;
    if (!(this.g() === other.g()))
      return false;
    var tmp0 = other.p();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.d();
      while (_iterator__ex2g4s.e()) {
        var element = _iterator__ex2g4s.f();
        if (!this.r1(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractMap).o = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m();
  };
  protoOf(AbstractMap).hashCode = function () {
    return hashCode_0(this.p());
  };
  protoOf(AbstractMap).g = function () {
    return this.p().g();
  };
  protoOf(AbstractMap).toString = function () {
    var tmp = this.p();
    return joinToString_0(tmp, ', ', '{', '}', VOID, VOID, AbstractMap$toString$lambda(this));
  };
  function Companion_4() {
  }
  protoOf(Companion_4).t1 = function (c) {
    var hashCode = 0;
    var _iterator__ex2g4s = c.d();
    while (_iterator__ex2g4s.e()) {
      var element = _iterator__ex2g4s.f();
      var tmp = hashCode;
      var tmp1_elvis_lhs = element == null ? null : hashCode_0(element);
      hashCode = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    return hashCode;
  };
  protoOf(Companion_4).s1 = function (c, other) {
    if (!(c.g() === other.g()))
      return false;
    return c.k(other);
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function collectionToArrayCommonImpl(collection) {
    if (collection.h()) {
      // Inline function 'kotlin.emptyArray' call
      return [];
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = collection.g();
    var destination = Array(size);
    var iterator = collection.d();
    var index = 0;
    while (iterator.e()) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      destination[_unary__edvuaz] = iterator.f();
    }
    return destination;
  }
  function listOf_0(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this.i4_1 = new Long(-1478467534, -1720727600);
  }
  protoOf(EmptyList).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, KtList) : false) {
      tmp = other.h();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptyList).hashCode = function () {
    return 1;
  };
  protoOf(EmptyList).toString = function () {
    return '[]';
  };
  protoOf(EmptyList).g = function () {
    return 0;
  };
  protoOf(EmptyList).h = function () {
    return true;
  };
  protoOf(EmptyList).d = function () {
    return EmptyIterator_instance;
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
  }
  protoOf(EmptyIterator).e = function () {
    return false;
  };
  protoOf(EmptyIterator).f = function () {
    throw NoSuchElementException_init_$Create$();
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    return EmptyIterator_instance;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null))
      _this__u8e3s4.c(transform(element));
    else {
      if (element == null ? true : isCharSequence(element))
        _this__u8e3s4.c(element);
      else {
        if (element instanceof Char)
          _this__u8e3s4.x3(element.j4_1);
        else {
          _this__u8e3s4.c(toString_1(element));
        }
      }
    }
  }
  function padStart(_this__u8e3s4, length, padChar) {
    padChar = padChar === VOID ? _Char___init__impl__6a9atx(32) : padChar;
    return toString_1(padStart_0(isCharSequence(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE(), length, padChar));
  }
  function padStart_0(_this__u8e3s4, length, padChar) {
    padChar = padChar === VOID ? _Char___init__impl__6a9atx(32) : padChar;
    if (length < 0)
      throw IllegalArgumentException_init_$Create$_0('Desired length ' + length + ' is less than zero.');
    if (length <= charSequenceLength(_this__u8e3s4))
      return charSequenceSubSequence(_this__u8e3s4, 0, charSequenceLength(_this__u8e3s4));
    var sb = StringBuilder_init_$Create$(length);
    var inductionVariable = 1;
    var last = length - charSequenceLength(_this__u8e3s4) | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sb.x3(padChar);
      }
       while (!(i === last));
    sb.c(_this__u8e3s4);
    return sb;
  }
  function escapeJson(_this__u8e3s4) {
    var escaped = StringBuilder_init_$Create$(_this__u8e3s4.length);
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var character = charCodeAt(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (character === _Char___init__impl__6a9atx(92))
        escaped.w3('\\\\');
      else {
        if (character === _Char___init__impl__6a9atx(34))
          escaped.w3('\\"');
        else {
          if (character === _Char___init__impl__6a9atx(10))
            escaped.w3('\\n');
          else {
            if (character === _Char___init__impl__6a9atx(13))
              escaped.w3('\\r');
            else {
              if (character === _Char___init__impl__6a9atx(9))
                escaped.w3('\\t');
              else {
                if (character === _Char___init__impl__6a9atx(8))
                  escaped.w3('\\b');
                else {
                  // Inline function 'kotlin.code' call
                  if (Char__toInt_impl_vasixd(character) < 32) {
                    appendUnicodeEscape(escaped, character);
                  } else {
                    // Inline function 'kotlin.code' call
                    if (Char__toInt_impl_vasixd(character) === 8232)
                      escaped.w3('\\u2028');
                    else {
                      // Inline function 'kotlin.code' call
                      if (Char__toInt_impl_vasixd(character) === 8233)
                        escaped.w3('\\u2029');
                      else {
                        escaped.x3(character);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return escaped.toString();
  }
  function appendUnicodeEscape(_this__u8e3s4, character) {
    _this__u8e3s4.w3('\\u');
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(character);
    _this__u8e3s4.w3(padStart(toString_2(tmp$ret$0, 16), 4, _Char___init__impl__6a9atx(48)));
  }
  function screenIdsJson(screenIds) {
    return '[' + joinToString_0(screenIds, ',', VOID, VOID, VOID, VOID, screenIdsJson$lambda) + ']';
  }
  function unknownScreen(screenId) {
    return '{"error":"unknownScreen","screenId":"' + escapeJson(screenId) + '"}';
  }
  function envelope(ui, commands) {
    var tmp = '{"ui":' + toJson_0(ui) + ',"commands":[';
    return tmp + joinToString_0(commands, ',', VOID, VOID, VOID, VOID, envelope$lambda) + ']}';
  }
  function failure(message) {
    return '{"error":"screenFailed","message":"' + escapeJson(message) + '"}';
  }
  function screenIdsJson$lambda(it) {
    return '"' + escapeJson(it) + '"';
  }
  function envelope$lambda(it) {
    return toJson(it);
  }
  function InvokeCallback(name) {
    this.k4_1 = name;
  }
  protoOf(InvokeCallback).toString = function () {
    return 'InvokeCallback(name=' + this.k4_1 + ')';
  };
  protoOf(InvokeCallback).hashCode = function () {
    return getStringHashCode(this.k4_1);
  };
  protoOf(InvokeCallback).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InvokeCallback))
      return false;
    if (!(this.k4_1 === other.k4_1))
      return false;
    return true;
  };
  function Log() {
  }
  function Toast() {
  }
  function toJson(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof InvokeCallback) {
      tmp = '{"type":"invokeCallback","name":"' + escapeJson(_this__u8e3s4.k4_1) + '"}';
    } else {
      if (_this__u8e3s4 instanceof Log) {
        tmp = '{"type":"log","message":"' + escapeJson(_this__u8e3s4.m4_1) + '"}';
      } else {
        if (_this__u8e3s4 instanceof Toast) {
          tmp = '{"type":"toast","message":"' + escapeJson(_this__u8e3s4.l4_1) + '"}';
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function read($this, name, type) {
    var tmp0_elvis_lhs = readNullable($this, name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      missing($this, name, type);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function readNullable($this, name) {
    var value = $this.n4_1[name];
    return value == null || value == undefined ? null : value;
  }
  function missing($this, name, type) {
    throw IllegalStateException_init_$Create$_0("Dootah screen argument '" + name + "' is not a " + type);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.o4_1 = new ScreenArguments({});
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ScreenArguments(raw) {
    Companion_getInstance_5();
    this.n4_1 = raw;
  }
  protoOf(ScreenArguments).p4 = function (name) {
    var tmp = read(this, name, 'Boolean');
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      missing(this, name, 'Boolean');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  function parseArguments(json) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(json) === 0)
      return Companion_getInstance_5().o4_1;
    return new ScreenArguments(JSON.parse(json));
  }
  function initialize($this, name, initial) {
    if (!$this.q4_1.n(name)) {
      // Inline function 'kotlin.collections.set' call
      $this.q4_1.o1(name, initial);
    }
  }
  function read_0($this, name) {
    if (!$this.q4_1.n(name)) {
      throw IllegalStateException_init_$Create$_0("Dootah screen state '" + name + "' was never initialised");
    }
    return $this.q4_1.o(name);
  }
  function wrongType($this, name, type) {
    throw IllegalStateException_init_$Create$_0("Dootah screen state '" + name + "' is not a " + type);
  }
  function ScreenState() {
    this.q4_1 = HashMap_init_$Create$();
  }
  protoOf(ScreenState).r4 = function (name, initial) {
    return initialize(this, name, initial);
  };
  protoOf(ScreenState).s4 = function (name) {
    var tmp = read_0(this, name);
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      wrongType(this, name, 'Int');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(ScreenState).t4 = function (name, value) {
    // Inline function 'kotlin.collections.set' call
    this.q4_1.o1(name, value);
  };
  function Inherited() {
  }
  protoOf(Inherited).toString = function () {
    return 'Inherited';
  };
  protoOf(Inherited).hashCode = function () {
    return 1711319743;
  };
  protoOf(Inherited).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inherited))
      return false;
    return true;
  };
  var Inherited_instance;
  function Inherited_getInstance() {
    return Inherited_instance;
  }
  function Padding() {
  }
  function FillMaxWidth() {
  }
  function FillMaxHeight() {
  }
  function FillMaxSize() {
  }
  function Size() {
  }
  function Width() {
  }
  function Height() {
  }
  function Weight() {
  }
  function Background() {
  }
  function ColumnNode(modifiers, children) {
    modifiers = modifiers === VOID ? emptyList() : modifiers;
    children = children === VOID ? emptyList() : children;
    this.u4_1 = modifiers;
    this.v4_1 = children;
  }
  protoOf(ColumnNode).toString = function () {
    return 'ColumnNode(modifiers=' + toString_1(this.u4_1) + ', children=' + toString_1(this.v4_1) + ')';
  };
  protoOf(ColumnNode).hashCode = function () {
    var result = hashCode_0(this.u4_1);
    result = imul(result, 31) + hashCode_0(this.v4_1) | 0;
    return result;
  };
  protoOf(ColumnNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnNode))
      return false;
    if (!equals(this.u4_1, other.u4_1))
      return false;
    if (!equals(this.v4_1, other.v4_1))
      return false;
    return true;
  };
  function TextNode(text, modifiers) {
    modifiers = modifiers === VOID ? emptyList() : modifiers;
    this.w4_1 = text;
    this.x4_1 = modifiers;
  }
  protoOf(TextNode).toString = function () {
    return 'TextNode(text=' + this.w4_1 + ', modifiers=' + toString_1(this.x4_1) + ')';
  };
  protoOf(TextNode).hashCode = function () {
    var result = getStringHashCode(this.w4_1);
    result = imul(result, 31) + hashCode_0(this.x4_1) | 0;
    return result;
  };
  protoOf(TextNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextNode))
      return false;
    if (!(this.w4_1 === other.w4_1))
      return false;
    if (!equals(this.x4_1, other.x4_1))
      return false;
    return true;
  };
  function NativeSlotNode(slot) {
    this.y4_1 = slot;
  }
  protoOf(NativeSlotNode).toString = function () {
    return 'NativeSlotNode(slot=' + this.y4_1 + ')';
  };
  protoOf(NativeSlotNode).hashCode = function () {
    return getStringHashCode(this.y4_1);
  };
  protoOf(NativeSlotNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NativeSlotNode))
      return false;
    if (!(this.y4_1 === other.y4_1))
      return false;
    return true;
  };
  function ButtonNode(text, action, modifiers) {
    modifiers = modifiers === VOID ? emptyList() : modifiers;
    this.z4_1 = text;
    this.a5_1 = action;
    this.b5_1 = modifiers;
  }
  protoOf(ButtonNode).toString = function () {
    return 'ButtonNode(text=' + this.z4_1 + ', action=' + this.a5_1 + ', modifiers=' + toString_1(this.b5_1) + ')';
  };
  protoOf(ButtonNode).hashCode = function () {
    var result = getStringHashCode(this.z4_1);
    result = imul(result, 31) + getStringHashCode(this.a5_1) | 0;
    result = imul(result, 31) + hashCode_0(this.b5_1) | 0;
    return result;
  };
  protoOf(ButtonNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ButtonNode))
      return false;
    if (!(this.z4_1 === other.z4_1))
      return false;
    if (!(this.a5_1 === other.a5_1))
      return false;
    if (!equals(this.b5_1, other.b5_1))
      return false;
    return true;
  };
  function RowNode(modifiers, children) {
    modifiers = modifiers === VOID ? emptyList() : modifiers;
    children = children === VOID ? emptyList() : children;
    this.c5_1 = modifiers;
    this.d5_1 = children;
  }
  protoOf(RowNode).toString = function () {
    return 'RowNode(modifiers=' + toString_1(this.c5_1) + ', children=' + toString_1(this.d5_1) + ')';
  };
  protoOf(RowNode).hashCode = function () {
    var result = hashCode_0(this.c5_1);
    result = imul(result, 31) + hashCode_0(this.d5_1) | 0;
    return result;
  };
  protoOf(RowNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowNode))
      return false;
    if (!equals(this.c5_1, other.c5_1))
      return false;
    if (!equals(this.d5_1, other.d5_1))
      return false;
    return true;
  };
  function BoxNode() {
  }
  function toJson_0(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ColumnNode) {
      tmp = container('column', _this__u8e3s4.u4_1, _this__u8e3s4.v4_1);
    } else {
      if (_this__u8e3s4 instanceof RowNode) {
        tmp = container('row', _this__u8e3s4.c5_1, _this__u8e3s4.d5_1);
      } else {
        if (_this__u8e3s4 instanceof BoxNode) {
          tmp = container('box', _this__u8e3s4.e5_1, _this__u8e3s4.f5_1);
        } else {
          if (_this__u8e3s4 instanceof TextNode) {
            tmp = '{"type":"text","text":"' + escapeJson(_this__u8e3s4.w4_1) + '"' + modifiersField(_this__u8e3s4.x4_1) + '}';
          } else {
            if (_this__u8e3s4 instanceof ButtonNode) {
              tmp = '{"type":"button","text":"' + escapeJson(_this__u8e3s4.z4_1) + '",' + ('"action":"' + escapeJson(_this__u8e3s4.a5_1) + '"') + modifiersField(_this__u8e3s4.b5_1) + '}';
            } else {
              if (_this__u8e3s4 instanceof NativeSlotNode) {
                tmp = '{"type":"native","slot":"' + escapeJson(_this__u8e3s4.y4_1) + '"}';
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function container(type, modifiers, children) {
    var tmp = '{"type":"' + type + '"' + modifiersField(modifiers) + ',"children":[';
    return tmp + joinToString_0(children, ',', VOID, VOID, VOID, VOID, container$lambda) + ']}';
  }
  function modifiersField(modifiers) {
    var tmp;
    if (modifiers.h()) {
      tmp = '';
    } else {
      tmp = ',"modifiers":[' + joinToString_0(modifiers, ',', VOID, VOID, VOID, VOID, modifiersField$lambda) + ']';
    }
    return tmp;
  }
  function toJson_1(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof Inherited) {
      tmp = '{"type":"inherited"}';
    } else {
      if (_this__u8e3s4 instanceof Padding) {
        tmp = '{"type":"padding","start":' + _this__u8e3s4.p5_1 + ',"top":' + _this__u8e3s4.q5_1 + ',' + ('"end":' + _this__u8e3s4.r5_1 + ',"bottom":' + _this__u8e3s4.s5_1 + '}');
      } else {
        if (_this__u8e3s4 instanceof FillMaxWidth) {
          tmp = '{"type":"fillMaxWidth","fraction":' + _this__u8e3s4.o5_1 + '}';
        } else {
          if (_this__u8e3s4 instanceof FillMaxHeight) {
            tmp = '{"type":"fillMaxHeight","fraction":' + _this__u8e3s4.n5_1 + '}';
          } else {
            if (_this__u8e3s4 instanceof FillMaxSize) {
              tmp = '{"type":"fillMaxSize","fraction":' + _this__u8e3s4.m5_1 + '}';
            } else {
              if (_this__u8e3s4 instanceof Size) {
                tmp = '{"type":"size","width":' + _this__u8e3s4.k5_1 + ',"height":' + _this__u8e3s4.l5_1 + '}';
              } else {
                if (_this__u8e3s4 instanceof Width) {
                  tmp = '{"type":"width","value":' + _this__u8e3s4.j5_1 + '}';
                } else {
                  if (_this__u8e3s4 instanceof Height) {
                    tmp = '{"type":"height","value":' + _this__u8e3s4.i5_1 + '}';
                  } else {
                    if (_this__u8e3s4 instanceof Weight) {
                      tmp = '{"type":"weight","value":' + _this__u8e3s4.h5_1 + '}';
                    } else {
                      if (_this__u8e3s4 instanceof Background) {
                        tmp = '{"type":"background","color":' + _this__u8e3s4.g5_1.toString() + '}';
                      } else {
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function container$lambda(it) {
    return toJson_0(it);
  }
  function modifiersField$lambda(it) {
    return toJson_1(it);
  }
  function get_screenStates() {
    _init_properties_DootahExports_kt__7euayy();
    return screenStates;
  }
  var screenStates;
  function screenIds() {
    _init_properties_DootahExports_kt__7euayy();
    return screenIdsJson(listOf_0(['com.example.cahier.features.drawing.ToolboxHistoryControls', 'com.example.cahier.features.drawing.ToolboxNoteActions']));
  }
  function renderScreen(screenId, argumentsJson) {
    _init_properties_DootahExports_kt__7euayy();
    var tmp;
    try {
      var state = stateFor(screenId);
      var arguments_0 = parseArguments(argumentsJson);
      var ui = renderOf(screenId, arguments_0, state);
      tmp = ui == null ? unknownScreen(screenId) : envelope(ui, emptyList());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var failure_0 = $p;
        var tmp0_elvis_lhs = failure_0.message;
        tmp_0 = failure(tmp0_elvis_lhs == null ? 'the screen could not be rendered' : tmp0_elvis_lhs);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function handleAction(screenId, action, argumentsJson) {
    _init_properties_DootahExports_kt__7euayy();
    var tmp;
    try {
      var state = stateFor(screenId);
      var arguments_0 = parseArguments(argumentsJson);
      var commands = performOn(screenId, action, arguments_0, state);
      var ui = renderOf(screenId, arguments_0, state);
      tmp = commands == null || ui == null ? unknownScreen(screenId) : envelope(ui, commands);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var failure_0 = $p;
        var tmp0_elvis_lhs = failure_0.message;
        tmp_0 = failure(tmp0_elvis_lhs == null ? 'the action could not be handled' : tmp0_elvis_lhs);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function stateFor(screenId) {
    _init_properties_DootahExports_kt__7euayy();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = get_screenStates();
    var value = this_0.o(screenId);
    var tmp;
    if (value == null) {
      var answer = new ScreenState();
      this_0.o1(screenId, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function renderOf(screenId, arguments_0, state) {
    _init_properties_DootahExports_kt__7euayy();
    switch (screenId) {
      case 'com.example.cahier.features.drawing.ToolboxHistoryControls':
        return DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls_instance.u5(arguments_0, state);
      case 'com.example.cahier.features.drawing.ToolboxNoteActions':
        return DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions_instance.u5(arguments_0, state);
      default:
        return null;
    }
  }
  function performOn(screenId, action, arguments_0, state) {
    _init_properties_DootahExports_kt__7euayy();
    switch (screenId) {
      case 'com.example.cahier.features.drawing.ToolboxHistoryControls':
        return DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls_instance.w5(action, arguments_0, state);
      case 'com.example.cahier.features.drawing.ToolboxNoteActions':
        return DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions_instance.w5(action, arguments_0, state);
      default:
        return null;
    }
  }
  var properties_initialized_DootahExports_kt_l3kioo;
  function _init_properties_DootahExports_kt__7euayy() {
    if (!properties_initialized_DootahExports_kt_l3kioo) {
      properties_initialized_DootahExports_kt_l3kioo = true;
      screenStates = HashMap_init_$Create$();
    }
  }
  function DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls() {
    this.t5_1 = 'com.example.cahier.features.drawing.ToolboxHistoryControls';
  }
  protoOf(DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls).u5 = function (arguments_0, state) {
    var canUndo = arguments_0.p4('canUndo');
    var canRedo = arguments_0.p4('canRedo');
    var isVertical = arguments_0.p4('isVertical');
    state.r4('taps', 0);
    var tmp;
    if (isVertical) {
      var tmp_0 = listOf(Inherited_instance);
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_0 = ArrayList_init_$Create$();
      this_0.f1(new TextNode('History'));
      this_0.f1(new NativeSlotNode('ToolboxHistoryControlsContent(canRedo,canUndo,drawingCanvasViewModel,onClear,onRedo,onUndo)#0'));
      this_0.f1(new TextNode('Taps: ' + state.s4('taps')));
      this_0.f1(new ButtonNode('Count', 'count'));
      this_0.f1(new ButtonNode('Clear all', 'clear-all'));
      var tmp$ret$0 = this_0.a2();
      tmp = new ColumnNode(tmp_0, tmp$ret$0);
    } else {
      var tmp_1 = listOf(Inherited_instance);
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$();
      this_1.f1(new NativeSlotNode('ToolboxHistoryControlsContent(canRedo,canUndo,drawingCanvasViewModel,onClear,onRedo,onUndo)#1'));
      var tmp$ret$4 = this_1.a2();
      tmp = new RowNode(tmp_1, tmp$ret$4);
    }
    return tmp;
  };
  protoOf(DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls).w5 = function (action, arguments_0, state) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var commands = ArrayList_init_$Create$();
    var canUndo = arguments_0.p4('canUndo');
    var canRedo = arguments_0.p4('canRedo');
    var isVertical = arguments_0.p4('isVertical');
    state.r4('taps', 0);
    if (action === 'count') {
      state.t4('taps', state.s4('taps') + 1 | 0);
    } else if (action === 'clear-all') {
      commands.f1(new InvokeCallback('onClear'));
    }
    return commands;
  };
  var DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls_instance;
  function DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls_getInstance() {
    return DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls_instance;
  }
  function DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions() {
    this.v5_1 = 'com.example.cahier.features.drawing.ToolboxNoteActions';
  }
  protoOf(DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions).u5 = function (arguments_0, state) {
    var isVertical = arguments_0.p4('isVertical');
    var tmp;
    if (isVertical) {
      var tmp_0 = listOf(Inherited_instance);
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_0 = ArrayList_init_$Create$();
      this_0.f1(new NativeSlotNode('ToolboxNoteActionsContent(drawingCanvasViewModel,imagePickerLauncher,onEditActiveBrush,onExit)#0'));
      var tmp$ret$0 = this_0.a2();
      tmp = new ColumnNode(tmp_0, tmp$ret$0);
    } else {
      var tmp_1 = listOf(Inherited_instance);
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$();
      this_1.f1(new NativeSlotNode('ToolboxNoteActionsContent(drawingCanvasViewModel,imagePickerLauncher,onEditActiveBrush,onExit)#1'));
      var tmp$ret$4 = this_1.a2();
      tmp = new RowNode(tmp_1, tmp$ret$4);
    }
    return tmp;
  };
  protoOf(DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions).w5 = function (action, arguments_0, state) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var commands = ArrayList_init_$Create$();
    var isVertical = arguments_0.p4('isVertical');
    return commands;
  };
  var DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions_instance;
  function DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions_getInstance() {
    return DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions_instance;
  }
  //region block: post-declaration
  protoOf(InternalHashMap).o2 = containsAllEntries;
  //endregion
  //region block: init
  Unit_instance = new Unit();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  EmptyIterator_instance = new EmptyIterator();
  Inherited_instance = new Inherited();
  DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls_instance = new DootahScreen_com_example_cahier_features_drawing_ToolboxHistoryControls();
  DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions_instance = new DootahScreen_com_example_cahier_features_drawing_ToolboxNoteActions();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    _.screenIds = screenIds;
    _.renderScreen = renderScreen;
    _.handleAction = handleAction;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));
