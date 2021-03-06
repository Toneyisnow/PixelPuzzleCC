"use strict";
cc._RF.push(module, '6bba1zxEHVJIrFoYCLZ2sib', 'HintBoard');
// Scripts/Components/HintBoard.js

'use strict';

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

var HintBoard = function () {
    function HintBoard() {
        _classCallCheck(this, HintBoard);

        this.charCount = 0;
        this.charList = [];
        this.isCharUncovered = [];
    }

    _createClass(HintBoard, [{
        key: 'pushCharacter',
        value: function pushCharacter(charId) {

            this.charCount++;
            this.charList.push(charId);
            this.isCharUncovered.push(false);
        }
    }, {
        key: 'setUncoveredAt',
        value: function setUncoveredAt(charIndex) {

            if (charIndex < 0 || charIndex >= this.charCount) {
                console.log('charIndex out of range.');
                return;
            }

            this.isCharUncovered[charIndex] = true;
        }
    }, {
        key: 'isUncoveredAt',
        value: function isUncoveredAt(charIndex) {

            if (charIndex < 0 || charIndex >= this.charCount) {
                console.log('charIndex out of range.');
                return;
            }

            return this.isCharUncovered[charIndex];
        }
    }]);

    return HintBoard;
}();

;

cc.HintBoard = HintBoard;

cc._RF.pop();