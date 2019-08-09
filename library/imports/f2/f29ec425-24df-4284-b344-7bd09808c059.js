"use strict";
cc._RF.push(module, 'f29ecQlJN9ChLNEe9CYCMBZ', 'PuzzleBoardRenderer');
// Scripts/UI/Controls/PuzzleBoardRenderer.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

require('GlobalStorage');

require('PoemDefinition');
require('StageDefinition');
require('PuzzleDefinition');
require('PuzzleBoardProvider');

cc.Class({
    extends: cc.Component,

    properties: {

        boardWidth: 1,

        boardHeight: 1,

        poemDefinition: {
            default: null,
            type: cc.PoemDefinition
        },

        puzzleDefinition: {
            default: null,
            type: cc.PuzzleDefinition
        },

        stageDefinition: {
            default: null,
            type: cc.StageDefinition
        },

        anchorStartPoint: {
            default: cc.v2(0, 0),
            type: cc.v2
        },

        anchorInterval: 64,

        puzzleBoardPrefab: cc.Prefab,

        boardProvider: {
            default: null,
            type: cc.PuzzleBoardProvider
        },

        boardRootNode: {
            default: null,
            type: cc.Node
        }

        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    init: function init(stageDefinition) {

        console.log('PuzzleBoard init.');

        this.stageDefinition = stageDefinition;
        this.poemDefinition = this.stageDefinition.poemDefinition;
        this.puzzleDefinition = this.stageDefinition.puzzleDefinition;

        if (!this.poemDefinition || !this.puzzleDefinition) {

            console.log('poemDefinition is null.');
            return;
        }

        var self = this;

        this.boardProvider = new cc.PuzzleBoardProvider();
        this.boardProvider.createBoard(this.stageDefinition);
    },

    onLoad: function onLoad() {

        var self = this;

        var size = this.boardProvider.getBoardSize();
        for (var i = 0; i < size.x; ++i) {
            for (var j = 0; j < size.y; ++j) {

                var characterId = this.boardProvider.getCharacterAt(i, j);

                if (characterId) {

                    console.log('got character: ', i, j, characterId);
                    cc.GlobalStorage.loadCharacterSpriteFrame(characterId, i, j, function (characterSpriteFrame, ii, jj) {

                        var node = new cc.Node();
                        var charSprite = node.addComponent(cc.Sprite);
                        charSprite.spriteFrame = characterSpriteFrame;

                        var posX = self.anchorStartPoint.x + ii * self.anchorInterval;
                        var posY = self.anchorStartPoint.y - jj * self.anchorInterval;

                        //var posX = -160 + ii * 64;
                        //var posY = 226 - jj * 64;

                        node.position = cc.v2(posX, posY);
                        node.scale = 0.5;

                        self.boardRootNode.addChild(node);
                    });
                }
            }
        }
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();