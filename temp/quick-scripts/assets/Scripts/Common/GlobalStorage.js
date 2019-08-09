(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Common/GlobalStorage.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '00eb3kmF/RC2adysbINn/AI', 'GlobalStorage', __filename);
// Scripts/Common/GlobalStorage.js

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


var GlobalStorage = (_temp = _class = function () {
    function GlobalStorage() {
        _classCallCheck(this, GlobalStorage);
    }

    _createClass(GlobalStorage, null, [{
        key: 'saveIntermediateValue',
        value: function saveIntermediateValue(key, value) {

            cc.sys.localStorage.setItem(key, value);
        }
    }, {
        key: 'saveIntermediateObject',
        value: function saveIntermediateObject(key, obj) {

            cc.sys.localStorage.setItem(key, JSON.stringify(obj));
        }
    }, {
        key: 'loadIntermediateValue',
        value: function loadIntermediateValue(key) {

            var value = cc.sys.localStorage.getItem(key);
            console.log('loadIntermediateValue: ', value);

            return value;
        }
    }, {
        key: 'loadIntermediateObject',
        value: function loadIntermediateObject(key) {

            var valueString = cc.sys.localStorage.getItem(key);
            var obj = JSON.parse(valueString);

            return obj;
        }
    }, {
        key: 'clearIntermediateObject',
        value: function clearIntermediateObject(key) {

            cc.sys.localStorage.removeItem(key);
        }
    }, {
        key: 'loadCharacterSpriteFrame',
        value: function loadCharacterSpriteFrame(characterId, i, j, onLoadedCallback) {

            console.log('loadCharacterSpriteFrame: characterId = ', characterId);
            cc.loader.loadRes("characters/chars_fzlb", cc.SpriteAtlas, function (err, atlas) {

                var frame = atlas.getSpriteFrame('c_' + characterId);

                onLoadedCallback(frame, i, j);
            });
        }
    }]);

    return GlobalStorage;
}(), _class.characterAtlas_fzlb = undefined, _temp);
;

module.exports = GlobalStorage;

cc.GlobalStorage = GlobalStorage;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GlobalStorage.js.map
        