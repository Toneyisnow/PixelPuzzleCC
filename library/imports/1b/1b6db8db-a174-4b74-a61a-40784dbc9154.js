"use strict";
cc._RF.push(module, '1b6dbjboXRLdKYaQHhNvJFU', 'StageRecord');
// Scripts/Components/StageRecord.js

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


var StageRecord = function () {
    function StageRecord() {
        _classCallCheck(this, StageRecord);

        this._hasFinished = true;
        this._isLocked = true;
        this._score = 0;
    }

    _createClass(StageRecord, [{
        key: "hasFinished",
        value: function hasFinished() {
            return this._hasFinished;
        }
    }, {
        key: "isLocked",
        value: function isLocked() {
            return this._isLocked;
        }
    }, {
        key: "getScore",
        value: function getScore() {
            return this._score;
        }
    }]);

    return StageRecord;
}();

;

cc.StageRecord = StageRecord;

cc._RF.pop();