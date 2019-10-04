"use strict";
cc._RF.push(module, 'e78b9L6qINMQKY2Z2ZDxClW', 'StageDefinition');
// Scripts/Components/StageDefinition.js

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

require('PoemDefinition');
require('PuzzleDefinition');
require('FormulaDefinition');

var StageDefinition = function () {
    function StageDefinition() {
        _classCallCheck(this, StageDefinition);

        this.stageId = 0;

        this.poemDefinition = undefined;

        this.puzzleDefinition = undefined;

        this.formulaDefinitions = [];

        this.targetCharacters = [];
    }

    // Load definition from JSON file


    _createClass(StageDefinition, [{
        key: 'findFormulaDefinition',
        value: function findFormulaDefinition(targetCharacterId) {

            for (var i = 0; i < this.formulaDefinitions.length; i++) {

                if (this.formulaDefinitions[i].targetCharacter == targetCharacterId) {
                    return this.formulaDefinitions[i];
                }
            }

            return undefined;
        }
    }, {
        key: 'matchFormulaDefinition',
        value: function matchFormulaDefinition(characterA, characterB) {

            for (var i = 0; i < this.formulaDefinitions.length; i++) {

                if (this.formulaDefinitions[i].sourceCharacterA == characterA && this.formulaDefinitions[i].sourceCharacterB == characterB || this.formulaDefinitions[i].sourceCharacterB == characterA && this.formulaDefinitions[i].sourceCharacterA == characterB) {
                    return this.formulaDefinitions[i];
                }
            }

            return undefined;
        }
    }, {
        key: 'collectTargetCharacters',
        value: function collectTargetCharacters() {

            var result = [];
            var lines = this.puzzleDefinition.selectedLines;
            var columnCount = this.poemDefinition.columnCount;

            for (var i = 0; i < lines.length; ++i) {
                for (var j = 0; j < columnCount; ++j) {

                    var charIndex = i * columnCount + j;
                    if (!this.puzzleDefinition.isUncoveredChar(charIndex)) {
                        var characterId = this.poemDefinition.content[lines[i]][j];
                        result.push(characterId);
                    }
                }
            }

            return result;
        }
    }, {
        key: 'eraseTargetCharacter',
        value: function eraseTargetCharacter(characterId) {
            for (var i = 0; i < this.targetCharacters.length; i++) {
                if (this.targetCharacters[i] == characterId) {
                    //// del this.targetCharacters[i:i]
                    this.targetCharacters.splice(i, 1);
                    return;
                }
            }
        }
    }], [{
        key: 'loadFromFile',
        value: function loadFromFile(stageId, callback, caller) {

            console.log('loadFromJson:', 'stages/stage_' + stageId);

            var resouceUrl = 'stages/stage_' + stageId;
            cc.loader.loadRes(resouceUrl, cc.JsonAsset, function (err, result) {
                if (err) {

                    console.log('StageDefinition.loadFromFile Error: ', err);
                } else {

                    var stage = StageDefinition.loadFromJsonText(result.json);
                    stage.stageId = stageId;

                    callback(caller, stage);
                }

                //Object.assign(target, result.json);

                //console.log('load result poem: ' + JSON.stringify(target.poem));
                //console.log('load result json poem: ' + JSON.stringify(result.json.poem));
            });
        }
    }, {
        key: 'loadFromJsonText',
        value: function loadFromJsonText(jsonObject) {

            var stage = new cc.StageDefinition();
            stage.poemDefinition = cc.PoemDefinition.loadFromJsonText(jsonObject.poem);
            stage.puzzleDefinition = cc.PuzzleDefinition.loadFromJsonText(jsonObject.puzzle);

            if (jsonObject.formula) {
                jsonObject.formula.forEach(function (itemArr, index) {

                    var formula = cc.FormulaDefinition.loadFromArray(itemArr);
                    stage.formulaDefinitions.push(formula);
                });
            }

            stage.targetCharacters = stage.collectTargetCharacters();
            return stage;
        }
    }]);

    return StageDefinition;
}();

;

cc.StageDefinition = StageDefinition;

cc._RF.pop();