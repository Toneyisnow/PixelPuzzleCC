(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Components/PuzzleBoardProvider.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cd308ikXiRElIrZ+8AGeQsT', 'PuzzleBoardProvider', __filename);
// Scripts/Components/PuzzleBoardProvider.js

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
var Utils = require('Utils');
require('StageDefinition');
require('PoemDefinition');
require('PuzzleDefinition');

require('PuzzleBoard');

var PuzzleBoardProvider = function () {
    function PuzzleBoardProvider() {
        _classCallCheck(this, PuzzleBoardProvider);

        this.board = undefined;

        this.stageDefinition = undefined;
        this.poemDefinition = undefined;
        this.puzzleDefinition = undefined;
    }

    _createClass(PuzzleBoardProvider, [{
        key: 'createBoard',
        value: function createBoard(stageDefinition) {

            if (!stageDefinition) {
                return;
            }

            this.stageDefinition = stageDefinition;
            this.poemDefinition = stageDefinition.poemDefinition;
            this.puzzleDefinition = stageDefinition.puzzleDefinition;

            console.log('PuzzleBoardProvider: creating PuzzleBoard.');
            this.board = new cc.PuzzleBoard();

            var size = this.translateBoardSize(this.puzzleDefinition.boardSize);
            this.board.width = size.x;
            this.board.height = size.y;

            var appearingCharacters = this.generateAppearingChars();
            console.log('PuzzleBoardProvider: appearingCharacters:', appearingCharacters);

            this.board.characterMatrix = this.generateMatrix(appearingCharacters);
            console.log('PuzzleBoardProvider: matrix:', this.board.characterMatrix);

            return this.board;
        }
    }, {
        key: 'getBoardSize',
        value: function getBoardSize() {

            return cc.v2(this.board.width, this.board.height);
        }
    }, {
        key: 'generateAppearingChars',
        value: function generateAppearingChars() {

            var targetCharacters = [];

            var lines = this.puzzleDefinition.selectedLines;
            for (var i = 0; i < lines.length; ++i) {
                for (var j = 0; j < this.poemDefinition.columnCount; ++j) {

                    var charIndex = i * this.poemDefinition.columnCount + j;
                    if (this.puzzleDefinition.isUncoveredChar(charIndex)) {
                        continue;
                    }

                    var characterId = this.poemDefinition.content[lines[i]][j];
                    targetCharacters.push(characterId);
                }
            }

            var noiseCharacters = this.puzzleDefinition.noiseChars;
            for (var i = 0; i < noiseCharacters.length; ++i) {

                targetCharacters.push(noiseCharacters[i]);
            }

            console.log('PuzzleBoardProvider: targetCharacters:', targetCharacters);

            var appearingChars = [];
            for (var i = 0; i < targetCharacters.length; ++i) {

                var characterId = targetCharacters[i];
                var formula = this.stageDefinition.findFormulaDefinition(characterId);
                if (formula) {
                    appearingChars.push(formula.sourceCharacterA);
                    appearingChars.push(formula.sourceCharacterB);
                }
            }

            return appearingChars;
        }
    }, {
        key: 'generateMatrix',
        value: function generateMatrix(appearingCharacters) {

            //var characterMatrix = new Array(this.board.width);
            var characterMatrix = [];
            for (var i = 0; i <= this.board.width + 1; ++i) {

                //characterMatrix[i] = new Array(this.board.height);
                characterMatrix[i] = [];
            }

            for (var i = 0; i < appearingCharacters.length; ++i) {

                var characterId = appearingCharacters[i];

                var x = Utils.randomInteger(this.board.width) + 1;
                var y = Utils.randomInteger(this.board.height) + 1;

                characterMatrix[x][y] = characterId;
            }

            return characterMatrix;
        }
    }, {
        key: 'takeActionAt',
        value: function takeActionAt(position) {

            // TODO:
        }
    }, {
        key: 'getCharacterAt',
        value: function getCharacterAt(x, y) {

            // console.log('retrieving character at ', x, y);

            if (this.board.characterMatrix[x]) {
                return this.board.characterMatrix[x][y];
            } else {
                console.log('getCharacterAt error: matrix exceeded: ', x, y);
            }
        }
    }, {
        key: 'translateBoardSize',
        value: function translateBoardSize(boardType) {

            switch (boardType) {
                case PuzzleBoardSize.TINY:
                    {
                        return cc.v2(5, 6);
                        break;
                    }
                case PuzzleBoardSize.SMALL:
                    {
                        return cc.v2(6, 8);
                        break;
                    }
                case PuzzleBoardSize.MEDIUM:
                    {
                        return cc.v2(8, 10);
                        break;
                    }
                case PuzzleBoardSize.LARGE:
                    {
                        return cc.v2(9, 12);
                        break;
                    }
                case PuzzleBoardSize.HUGE:
                    {
                        return cc.v2(10, 14);
                        break;
                    }
                default:
                    {
                        return cc.v2(6, 8);
                    }
            }
        }
    }]);

    return PuzzleBoardProvider;
}();

;

cc.PuzzleBoardProvider = PuzzleBoardProvider;

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
        //# sourceMappingURL=PuzzleBoardProvider.js.map
        