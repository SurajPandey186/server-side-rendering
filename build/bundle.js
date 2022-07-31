/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;

              dispatch({
                payload: res,
                type: FETCH_USERS
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;

              dispatch({
                payload: res,
                type: FETCH_CURRENT_USER
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'FETCH_ADMINS';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;


              dispatch({
                payload: res,
                type: FETCH_ADMINS
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Startup point for the client side application


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(13);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(14);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _UsersListPage = __webpack_require__(15);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _AdminsListPage = __webpack_require__(16);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({
        path: '/',
        exact: true
    }, _HomePage2.default), _extends({
        exact: true,
        path: '/users'
    }, _UsersListPage2.default), _extends({
        exact: true,
        path: '/admins'
    }, _AdminsListPage2.default), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(19);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(26);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _app = (0, _express2.default)();

_app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
   proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
   }
}));

_app.use(_express2.default.static('public'));

_app.get('*', function (req, res) {
   var _store = (0, _createStore2.default)(req);

   var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
      var route = _ref.route;

      return route.loadData ? route.loadData(_store) : null;
   });

   Promise.allSettled(promises).then(function () {
      var context = {};
      var content = (0, _renderer2.default)(req, _store, context);

      if (context.url) {
         return res.redirect(301, context.url);
      }

      if (context.notFound) {
         res.status(404);
      }

      res.send(content);
   });
});
/** */

_app.listen(3000, function () {
   console.log('Server started at port 3001');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(4);

var _server = __webpack_require__(17);

var _serializeJavascript = __webpack_require__(18);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  return '\n      <html>\n       <head>\n         <title>Server Side Rendering</title>\n       </head>\n       <body>\n         <div id="root">' + content + '</div>\n         <script>\n           window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\n         </script>\n         <script src="bundle.js"></script>\n       </body>\n      </html> \n     ';
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            _react2.default.createElement(_Header2.default, null)
        ),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

var loadData = function loadData(_ref2) {
    var dispatch = _ref2.dispatch;

    return dispatch((0, _actions.fetchCurrentUser)());
};

exports.default = {
    component: App,
    loadData: loadData
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var auth = _ref.auth;

  var authButton = auth ? _react2.default.createElement(
    "a",
    { href: "/api/logout" },
    "Logout"
  ) : _react2.default.createElement(
    "a",
    { href: "/api/auth/google" },
    "Login"
  );

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/" },
      "React Ssr"
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/users" },
        "Users"
      ),
      "\xA0\xA0\xA0",
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/admins" },
        "Admins"
      ),
      "\xA0\xA0\xA0",
      authButton
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return { auth: auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {

  var clickHandler = function clickHandler() {
    console.log('button is being clicked');
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'Mediatations brings Peace in Human Beings'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/hi' },
      'Hi..Click Me'
    ),
    '\xA0\xA0\xA0\xA0\xA0\xA0',
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/tooMuch' },
      'Too much'
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'h1',
        null,
        'Oops, route not found'
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_React$Component) {
    _inherits(UsersList, _React$Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    'li',
                    { key: user.id },
                    user.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Here\'s is a big list of Users: -',
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UsersList;
}(_react2.default.Component);

var loadData = function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)());
};

var _mapStateToProps = function _mapStateToProps(state) {
    return { users: state.users };
};

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(_mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _RequireAuth = __webpack_require__(27);

var _RequireAuth2 = _interopRequireDefault(_RequireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_React$Component) {
  _inherits(AdminsListPage, _React$Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: 'renderAdmins',
    value: function renderAdmins() {
      return this.props.admins.map(function (user) {
        return _react2.default.createElement(
          'li',
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Here\'s is a big list of Users: -',
        _react2.default.createElement(
          'ul',
          null,
          this.renderAdmins()
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react2.default.Component);

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchAdmins)());
};

var _mapStateToProps = function _mapStateToProps(_ref) {
  var admins = _ref.admins;

  return { admins: admins };
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(_mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _RequireAuth2.default)(AdminsListPage))
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxThunk = __webpack_require__(20);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(21);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(6);

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        headers: {
            cookie: req.get('cookie') || ""
        },
        baseURL: 'http://react-ssr-api.herokuapp.com'
    });

    var _store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return _store;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _authReducer = __webpack_require__(22);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _usersReducer = __webpack_require__(23);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _adminReducer = __webpack_require__(24);

var _adminReducer2 = _interopRequireDefault(_adminReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    auth: _authReducer2.default,
    users: _usersReducer2.default,
    admins: _adminReducer2.default
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

var _actions = __webpack_require__(1);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: "render",
            value: function render() {
                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
                    case null:
                        return _react2.default.createElement(
                            "div",
                            null,
                            "Loading..."
                        );
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    };

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ })
/******/ ]);