"use strict";
cc._RF.push(module, 'c2994TLTBJAgKlpHfQi2Tzm', 'PuzzleBoardProvider');
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

var PuzzleBoard = require('PuzzleBoard');
var PuzzleBoardStatus = PuzzleBoard.PuzzleBoardStatus;

var PuzzleBoardProvider = function () {
    function PuzzleBoardProvider(handler) {
        _classCallCheck(this, PuzzleBoardProvider);

        this.board = undefined;

        this.stageDefinition = undefined;
        this.poemDefinition = undefined;
        this.puzzleDefinition = undefined;

        this.handler = handler;
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

                while (characterMatrix[x][y]) {
                    x = Utils.randomInteger(this.board.width) + 1;
                    y = Utils.randomInteger(this.board.height) + 1;
                }

                characterMatrix[x][y] = characterId;
            }

            return characterMatrix;
        }

        // When player choose character on the position

    }, {
        key: 'takeActionAt',
        value: function takeActionAt(position) {

            if (this.board.status == PuzzleBoardStatus.IDLE) {

                this.board.lastSelectedPosition = position;
                this.board.status = PuzzleBoardStatus.ONE_SELECTED;

                this.handler.onChooseCharacterAt(position);
            } else {

                var matchingFormula = this.areCharactersMatching(position, this.board.lastSelectedPosition);
                if (Utils.areSameVec(position, this.board.lastSelectedPosition) || !matchingFormula) {

                    this.board.status = PuzzleBoardStatus.IDLE;
                    this.handler.onUnchooseCharacterAt(position, this.board.lastSelectedPosition);
                    return;
                }

                var connectionPoints = this.connectCharacters(this.board.lastSelectedPosition, position);
                if (connectionPoints && connectionPoints.length > 0) {

                    // Remove the characters 
                    this.clearCharacterAt(this.board.lastSelectedPosition);
                    this.clearCharacterAt(position);
                    this.board.status = PuzzleBoardStatus.IDLE;

                    this.handler.onConnected(position, this.board.lastSelectedPosition, connectionPoints, matchingFormula.targetCharacter);
                } else {

                    this.board.status = PuzzleBoardStatus.IDLE;

                    this.handler.onMatchNotConnected(position, this.board.lastSelectedPosition);
                }
            }
        }
    }, {
        key: 'areCharactersMatching',
        value: function areCharactersMatching(posA, posB) {

            var charA = this.getCharacterAt(posA);
            var charB = this.getCharacterAt(posB);

            if (!charA || !charB) {
                return false;
            }

            return this.stageDefinition.matchFormulaDefinition(charA, charB);
        }
    }, {
        key: 'connectCharacters',
        value: function connectCharacters(posA, posB) {

            console.log('connectCharacters');

            // Check One Connection
            if (posA.x == posB.x && this.areDirectConnected(posA, posB) || posA.y == posB.y && this.areDirectConnected(posA, posB)) {
                return [posA, posB];
            }
            console.log('connectCharacters: check one connection failed.');

            // Check Two Connection
            var candidate = cc.v2(posA.x, posB.y);
            if (!this.getCharacterAt(candidate) && this.areDirectConnected(posA, candidate) && this.areDirectConnected(candidate, posB)) {
                return [posA, candidate, posB];
            }
            candidate = cc.v2(posB.x, posA.y);
            if (!this.getCharacterAt(candidate) && this.areDirectConnected(posA, candidate) && this.areDirectConnected(candidate, posB)) {
                return [posA, candidate, posB];
            }
            console.log('connectCharacters: check two connection failed.');

            // Check Three Inner Connection
            if (posA.x != posB.x) {

                var deltaX = posA.x < posB.x ? 1 : -1;
                var iter = posA.x + deltaX;
                while (iter != posB.x) {
                    var candidate1 = cc.v2(iter, posA.y);
                    var candidate2 = cc.v2(iter, posB.y);
                    if (!this.getCharacterAt(candidate1) && !this.getCharacterAt(candidate2) && this.areDirectConnected(posA, candidate1) && this.areDirectConnected(candidate1, candidate2) && this.areDirectConnected(candidate2, posB)) {
                        return [posA, candidate1, candidate2, posB];
                    }
                    iter = iter + deltaX;
                }
            }
            if (posA.y != posB.y) {

                var deltaY = posA.y < posB.y ? 1 : -1;
                var iter = posA.y + deltaY;
                while (iter != posB.y) {
                    var candidate1 = cc.v2(posA.x, iter);
                    var candidate2 = cc.v2(posB.x, iter);
                    if (!this.getCharacterAt(candidate1) && !this.getCharacterAt(candidate2) && this.areDirectConnected(posA, candidate1) && this.areDirectConnected(candidate1, candidate2) && this.areDirectConnected(candidate2, posB)) {
                        return [posA, candidate1, candidate2, posB];
                    }
                    iter = iter + deltaY;
                }
            }
            console.log('connectCharacters: check three inner connection failed.');

            // Check Three Outter Connection
            var minX = Utils.Min(posA.x, posB.x);
            var maxX = Utils.Max(posA.x, posB.x);
            var minY = Utils.Min(posA.y, posB.y);
            var maxY = Utils.Max(posA.y, posB.y);

            for (var i = maxX + 1; i <= this.board.width + 1; i++) {

                var candidate1 = cc.v2(i, posA.y);
                var candidate2 = cc.v2(i, posB.y);
                if (!this.getCharacterAt(candidate1) && !this.getCharacterAt(candidate2) && this.areDirectConnected(posA, candidate1) && this.areDirectConnected(candidate1, candidate2) && this.areDirectConnected(candidate2, posB)) {
                    return [posA, candidate1, candidate2, posB];
                }
            }
            for (var i = minX - 1; i >= 0; i--) {

                var candidate1 = cc.v2(i, posA.y);
                var candidate2 = cc.v2(i, posB.y);
                if (!this.getCharacterAt(candidate1) && !this.getCharacterAt(candidate2) && this.areDirectConnected(posA, candidate1) && this.areDirectConnected(candidate1, candidate2) && this.areDirectConnected(candidate2, posB)) {
                    return [posA, candidate1, candidate2, posB];
                }
            }
            for (var j = maxY + 1; j <= this.board.height + 1; j++) {

                var candidate1 = cc.v2(posA.x, j);
                var candidate2 = cc.v2(posB.x, j);
                if (!this.getCharacterAt(candidate1) && !this.getCharacterAt(candidate2) && this.areDirectConnected(posA, candidate1) && this.areDirectConnected(candidate1, candidate2) && this.areDirectConnected(candidate2, posB)) {
                    return [posA, candidate1, candidate2, posB];
                }
            }
            for (var j = minY - 1; j >= 0; j--) {

                var candidate1 = cc.v2(posA.x, j);
                var candidate2 = cc.v2(posB.x, j);
                if (!this.getCharacterAt(candidate1) && !this.getCharacterAt(candidate2) && this.areDirectConnected(posA, candidate1) && this.areDirectConnected(candidate1, candidate2) && this.areDirectConnected(candidate2, posB)) {
                    return [posA, candidate1, candidate2, posB];
                }
            }
            console.log('connectCharacters: check three outer connection failed.');

            return [];
        }

        // Simple check for two points to be connected

    }, {
        key: 'areDirectConnected',
        value: function areDirectConnected(posA, posB) {

            if (posA.x == posB.x) {

                var begin = posA.y < posB.y ? posA.y : posB.y;
                var end = posA.y > posB.y ? posA.y : posB.y;

                for (var i = begin + 1; i < end; i++) {
                    if (this.getCharacterAt(cc.v2(posA.x, i))) {
                        return false;
                    }
                }
                return true;
            } else if (posA.y == posB.y) {

                var begin = posA.x < posB.x ? posA.x : posB.x;
                var end = posA.x > posB.x ? posA.x : posB.x;

                for (var i = begin + 1; i < end; i++) {
                    if (this.getCharacterAt(cc.v2(i, posA.y))) {
                        return false;
                    }
                }
                return true;
            }

            // If A and B are not in the same line, just return false.
            return false;
        }
    }, {
        key: 'clearCharacterAt',
        value: function clearCharacterAt(position) {

            var character = this.getCharacterAt(position);
            if (character && this.board.characterMatrix[position.x]) {
                this.board.characterMatrix[position.x][position.y] = undefined;
            }
        }
    }, {
        key: 'getCharacterAt',
        value: function getCharacterAt(position) {

            // console.log('retrieving character at ', x, y);

            if (this.board.characterMatrix[position.x]) {
                return this.board.characterMatrix[position.x][position.y];
            } else {
                console.log('getCharacterAt error: matrix exceeded: ', position.x, position.y);
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