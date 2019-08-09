(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Components/PuzzleDefinition.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fce82vxXNtDFryXSLcq/C0D', 'PuzzleDefinition', __filename);
// Scripts/Components/PuzzleDefinition.js

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

var PuzzleBoardSize = require('Constant').PuzzleBoardSize;

var PuzzleDefinition = function () {
    function PuzzleDefinition() {
        _classCallCheck(this, PuzzleDefinition);

        this.selectedLines = [];
        this.uncoveredChars = [];
        this.noiseChars = [];
        this.boardSize = PuzzleBoardSize.SMALL;
    }

    _createClass(PuzzleDefinition, null, [{
        key: 'loadFromJsonText',
        value: function loadFromJsonText(jsonObject) {

            var puzzle = new cc.PuzzleDefinition();

            puzzle.selectedLines = jsonObject.selected_lines;
            puzzle.uncoveredChars = jsonObject.uncovered_chars;
            puzzle.noiseChars = jsonObject.noise_chars;
            puzzle.boardSize = jsonObject.panel_size;

            return puzzle;
        }
    }]);

    return PuzzleDefinition;
}();

;

cc.PuzzleDefinition = PuzzleDefinition;

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
        //# sourceMappingURL=PuzzleDefinition.js.map
        