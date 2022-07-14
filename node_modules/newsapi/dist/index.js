'use strict';
/**
 * This module provides access to the News API
 * https://newsapi.org/
 *
 * The API provides access to recent news headlines
 * from many popular news sources.
 *
 * The author of this code has no formal relationship with NewsAPI.org and does not
 * claim to have created any of the facilities provided by NewsAPI.org.
 */
//GLOBALS

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.bind");

require("core-js/modules/es.function.name");

require("core-js/modules/es.map");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fetch = require('node-fetch'),
    qs = require('querystring'),
    host = 'https://newsapi.org';

var CORSProxyUrl = ''; // To be set by user if declared in options

var API_KEY; // To be set by clients

var NewsAPI = /*#__PURE__*/function () {
  function NewsAPI(apiKey) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, NewsAPI);

    var corsProxyUrl = options.corsProxyUrl;
    CORSProxyUrl = corsProxyUrl ? corsProxyUrl : ''; //assigns to global

    if (!apiKey) throw new Error('No API key specified');
    API_KEY = apiKey;
    this.v2 = {
      topHeadlines: function topHeadlines() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var _splitArgsIntoOptions = splitArgsIntoOptionsAndCallback(args),
            _splitArgsIntoOptions2 = _splitArgsIntoOptions.params,
            params = _splitArgsIntoOptions2 === void 0 ? {
          language: 'en'
        } : _splitArgsIntoOptions2,
            options = _splitArgsIntoOptions.options,
            cb = _splitArgsIntoOptions.cb;

        var url = createUrlFromEndpointAndOptions('/v2/top-headlines', params);
        return getDataFromWeb(url, options, API_KEY, cb);
      },
      everything: function everything() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var _splitArgsIntoOptions3 = splitArgsIntoOptionsAndCallback(args),
            params = _splitArgsIntoOptions3.params,
            options = _splitArgsIntoOptions3.options,
            cb = _splitArgsIntoOptions3.cb;

        var url = createUrlFromEndpointAndOptions('/v2/everything', params);
        return getDataFromWeb(url, options, API_KEY, cb);
      },
      sources: function sources() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var _splitArgsIntoOptions4 = splitArgsIntoOptionsAndCallback(args),
            params = _splitArgsIntoOptions4.params,
            options = _splitArgsIntoOptions4.options,
            cb = _splitArgsIntoOptions4.cb;

        var url = createUrlFromEndpointAndOptions('/v2/sources', params);
        return getDataFromWeb(url, options, API_KEY, cb);
      }
    };
  }

  _createClass(NewsAPI, [{
    key: "sources",
    value: function sources() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var _splitArgsIntoOptions5 = splitArgsIntoOptionsAndCallback(args),
          params = _splitArgsIntoOptions5.params,
          options = _splitArgsIntoOptions5.options,
          cb = _splitArgsIntoOptions5.cb;

      var url = createUrlFromEndpointAndOptions('/v1/sources', params);
      return getDataFromWeb(url, options, null, cb);
    }
  }, {
    key: "articles",
    value: function articles() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var _splitArgsIntoOptions6 = splitArgsIntoOptionsAndCallback(args),
          params = _splitArgsIntoOptions6.params,
          options = _splitArgsIntoOptions6.options,
          cb = _splitArgsIntoOptions6.cb;

      var url = createUrlFromEndpointAndOptions('/v1/articles', params);
      return getDataFromWeb(url, options, API_KEY, cb);
    }
  }]);

  return NewsAPI;
}();

var NewsAPIError = /*#__PURE__*/function (_Error) {
  _inherits(NewsAPIError, _Error);

  var _super = _createSuper(NewsAPIError);

  function NewsAPIError(err) {
    var _this;

    _classCallCheck(this, NewsAPIError);

    _this = _super.call(this);
    _this.name = "NewsAPIError: ".concat(err.code);
    _this.message = err.message;
    return _this;
  }

  return NewsAPIError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Takes a variable-length array that represents arguments to a function and attempts to split it into
 * an 'options' object and a 'cb' callback function.
 * @param {Array}   args The arguments to the function
 * @return {Object}
 */


function splitArgsIntoOptionsAndCallback(args) {
  var params;
  var options;
  var cb;

  if (args.length > 1) {
    var possibleCb = args[args.length - 1];

    if ('function' === typeof possibleCb) {
      cb = possibleCb;
      options = args.length === 3 ? args[1] : undefined;
    } else {
      options = args[1];
    }

    params = args[0];
  } else if ('object' === _typeof(args[0])) {
    params = args[0];
  } else if ('function' === typeof args[0]) {
    cb = args[0];
  }

  return {
    params: params,
    options: options,
    cb: cb
  };
}
/**
 * Creates a url string from an endpoint and an options object by appending the endpoint
 * to the global "host" const and appending the options as querystring parameters.
 * @param {String} endpoint
 * @param {Object} [options]
 * @return {String}
 */


function createUrlFromEndpointAndOptions(endpoint, options) {
  var query = qs.stringify(options);
  var baseURL = "".concat(CORSProxyUrl).concat(host).concat(endpoint);
  return query ? "".concat(baseURL, "?").concat(query) : baseURL;
}
/**
 * Takes a URL string and returns a Promise containing
 * a buffer with the data from the web.
 * @param  {String} url      A URL String
 * @param  {String} apiKey   (Optional) A key to be used for authentication
 * @return {Promise<Buffer>} A Promise containing a Buffer
 */


function getDataFromWeb(url, options, apiKey, cb) {
  var useCallback = 'function' === typeof cb; // CORS Headers by default

  var reqOptions = {
    'mode': 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };

  if (apiKey) {
    reqOptions.headers['X-Api-Key'] = apiKey;
  }

  if (options && options.noCache === true) {
    reqOptions.headers['X-No-Cache'] = 'true';
  }

  return fetch(url, reqOptions).then(function (res) {
    return Promise.all([res, res.json()]);
  }).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        res = _ref2[0],
        body = _ref2[1];

    if (body.status === 'error') throw new NewsAPIError(body); // 'showHeaders' option can be used for clients to debug response headers
    // response will be in form of { headers, body }

    if (options && options.showHeaders) {
      if (useCallback) return cb(null, {
        headers: res.headers,
        body: body
      });
      return {
        headers: res.headers,
        body: body
      };
    }

    if (useCallback) return cb(null, body);
    return body;
  })["catch"](function (err) {
    if (useCallback) return cb(err);
    throw err;
  });
}

module.exports = NewsAPI;