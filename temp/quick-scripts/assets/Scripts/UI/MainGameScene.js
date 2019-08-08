(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/UI/MainGameScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b39e5V0pmBCe4Id0NP3DWJ8', 'MainGameScene', __filename);
// Scripts/UI/MainGameScene.js

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
require('StageDefinition');

cc.Class({
    extends: cc.Component,

    properties: {

        poemBoard_2_5: cc.Prefab,

        poemBoard_2_7: cc.Prefab,

        poemBoard_4_5: cc.Prefab,

        poemBoard_4_7: cc.Prefab,

        puzzleBoard_Tiny: cc.Prefab,

        puzzleBoard_Small: cc.Prefab,

        puzzleBoard_Medium: cc.Prefab,

        anchorPoemBoard: {
            default: null,
            type: cc.Node
        },

        anchorPuzzleBoard: {
            default: null,
            type: cc.Node
        },

        btnBack: {
            default: null,
            type: cc.Button
        },

        btnRestart: {
            default: null,
            type: cc.Button
        },

        stageId: 0,

        stageDefinition: {
            default: null,
            type: cc.StageDefinition
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

    onLoad: function onLoad() {

        this.stageId = cc.GlobalStorage.loadIntermediateValue("selectedStageId");

        this.btnBack.node.on("click", this.onBackToScene, this);
        this.btnRestart.node.on("click", this.onRefresh, this);

        console.log('onLoad: got selectedStageId', this.stageId);
        cc.StageDefinition.loadFromJson(this.stageId, this.onLoadWithDefinition, this);
    },


    onLoadWithDefinition: function onLoadWithDefinition(self, definition) {

        console.log('onLoadWithDefinition');

        self.stageDefinition = definition;

        if (!self.stageDefinition) {
            console.log('stageDefinition is null.');
            return;
        }

        console.log('stageDefinition: ', JSON.stringify(self.stageDefinition.poem));

        // Add PoemBoard on the top
        var poemDefinition = self.stageDefinition.poem;
        if (!poemDefinition) {
            console.log('poemDefinition is null.');
            return;
        }

        var poemBoardNode = cc.instantiate(self.poemBoard_2_5);
        var poemBoardRenderer = poemBoardNode.getComponent('PoemBoardRenderer');
        poemBoardRenderer.init(poemDefinition);

        self.anchorPoemBoard.addChild(poemBoardNode);

        // Add PuzzleBoard on the middle
        var puzzleBoardNode = cc.instantiate(self.puzzleBoard_Small);
        self.anchorPuzzleBoard.addChild(puzzleBoardNode);
    },

    start: function start() {},


    onBackToScene: function onBackToScene(handle) {

        cc.director.loadScene("SelectStageScene");
    },

    onRefresh: function onRefresh(handle) {

        cc.director.loadScene("MainGameScene");
    }

    // update (dt) {},
});

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
        //# sourceMappingURL=MainGameScene.js.map
        