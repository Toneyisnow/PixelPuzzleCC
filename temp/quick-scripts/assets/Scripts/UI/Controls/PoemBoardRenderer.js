(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/UI/Controls/PoemBoardRenderer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cabc6lZOFZMY71nyI3kmvuh', 'PoemBoardRenderer', __filename);
// Scripts/UI/Controls/PoemBoardRenderer.js

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

require('PoemDefinition');
require('GlobalStorage');

cc.Class({
    extends: cc.Component,

    properties: {

        boardWidth: 1,

        boardHeight: 1,

        poemId: 0,

        poemDefinition: {
            default: null,
            type: cc.PoemDefinition
        },

        characterAnchors: {
            default: [],
            type: cc.Node
        },

        poemBoardPrefab: cc.Prefab

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

    init: function init(poemDef) {

        console.log('PoemBoard init.');

        this.poemDefinition = new cc.PoemDefinition();
        Object.assign(this.poemDefinition, poemDef);
    },

    onLoad: function onLoad() {

        if (!this.poemDefinition) {

            console.log('poemDefinition is null.');
            return;
        }

        var self = this;

        var lineCount = 2;
        //let lineCount = this.poemDefinition.line_count;
        var columnCount = this.poemDefinition.column_count;

        console.log('onLoad: loading PoemDefinitions. Totallength: ', lineCount, columnCount);
        for (var i = 0; i < lineCount; ++i) {
            for (var j = 0; j < columnCount; ++j) {

                var characterId = this.poemDefinition.content[i][j];
                cc.GlobalStorage.loadCharacterSpriteFrame(characterId, function (characterSpriteFrame) {

                    var node = new cc.Node();
                    var charSprite = node.addComponent(cc.Sprite);
                    charSprite.SpriteFrame = characterSpriteFrame;

                    var anchor = self.characterAnchors[i * lineCount + j];
                    console.log('anchor position:', anchor.position);

                    anchor.addChild(node);
                    node.position = cc.v2(0, 0);
                });
            }
        }
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
        //# sourceMappingURL=PoemBoardRenderer.js.map
        