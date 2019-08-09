(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/UI/Controls/PuzzleBoardRenderer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f29ecQlJN9ChLNEe9CYCMBZ', 'PuzzleBoardRenderer', __filename);
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

        anchors: {
            default: [],
            type: cc.Node
        },

        puzzleBoardPrefab: cc.Prefab

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
    },

    onLoad: function onLoad() {

        if (!this.poemDefinition || !this.puzzleDefinition) {

            console.log('poemDefinition is null.');
            return;
        }

        var self = this;
    },
    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=PuzzleBoardRenderer.js.map
        