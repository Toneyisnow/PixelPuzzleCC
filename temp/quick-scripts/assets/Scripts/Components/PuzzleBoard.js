(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Components/PuzzleBoard.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e04e8hkBZxNVoqgqN3+Bddd', 'PuzzleBoard', __filename);
// Scripts/Components/PuzzleBoard.js

'use strict';

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

var Utils = require('Utils');

var PuzzleBoardStatus = {
    IDLE: 0,
    ONE_SELECTED: 1
};

var PuzzleBoard = function PuzzleBoard() {
    _classCallCheck(this, PuzzleBoard);

    this.width = 0;
    this.height = 0;

    this.characterMatrix = [];

    this.boardStatus = PuzzleBoardStatus.IDLE;
    this.lastSelectedPosition = cc.v2(-1, -1);
};

;

cc.PuzzleBoard = PuzzleBoard;

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
        //# sourceMappingURL=PuzzleBoard.js.map
        