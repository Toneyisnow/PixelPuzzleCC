"use strict";
cc._RF.push(module, '9fe61fwd+9OOJp6sh07UELW', 'PuzzleDefinition');
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

    _createClass(PuzzleDefinition, [{
        key: 'isUncoveredChar',
        value: function isUncoveredChar(charIndex) {

            // console.log('uncoveredChars list:', this.uncoveredChars);

            return this.uncoveredChars.some(function (cIndex) {

                if (cIndex == charIndex) {
                    return true;
                }
            });
        }
    }], [{
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