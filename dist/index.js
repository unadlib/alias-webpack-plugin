'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvePath = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_FILE_PATH = './alias.json';

var resolvePath = exports.resolvePath = function resolvePath(relativePath) {
  var currentDirectory = _fs2.default.realpathSync(process.cwd());
  return _path2.default.resolve(currentDirectory, relativePath);
};

exports.default = function () {
  var filePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_FILE_PATH;

  var aliasPath = resolvePath(filePath);
  var isExists = _fs2.default.existsSync(aliasPath);
  var aliasSetting = {};
  if (isExists) {
    var aliasOptions = require(aliasPath);
    Object.entries(aliasOptions).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          relativePath = _ref2[1];

      aliasSetting[key] = resolvePath(relativePath);
    });
  }
  return aliasSetting;
};