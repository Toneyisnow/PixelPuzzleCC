"use strict";
cc._RF.push(module, '97ef7tr4ctKs5HSx6tgfJ78', 'Utils');
// Scripts/Common/Utils.js

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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


var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    // This will generate integer between 0 and maxValue - 1


    _createClass(Utils, null, [{
        key: "randomInteger",
        value: function randomInteger(maxValue) {

            return Math.floor(Math.random() * maxValue);
        }
    }, {
        key: "areSameVec",
        value: function areSameVec(vec1, vec2) {

            return vec1 && vec2 && vec1.x == vec2.x && vec1.y == vec2.y;
        }
    }, {
        key: "Min",
        value: function Min(val1, val2) {

            return val1 < val2 ? val1 : val2;
        }
    }, {
        key: "Max",
        value: function Max(val1, val2) {

            return val1 > val2 ? val1 : val2;
        }
    }, {
        key: "Abs",
        value: function Abs(val1, val2) {

            return val1 > val2 ? val1 - val2 : val2 - val1;
        }
    }]);

    return Utils;
}();

;

module.exports = Utils;

cc._RF.pop();