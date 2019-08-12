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
var Utils = require('Utils');

require('PoemDefinition');
require('StageDefinition');
require('PuzzleDefinition');
require('PuzzleBoardProvider');

require('PuzzleNodeRenderer');

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

        this.boardProvider = new cc.PuzzleBoardProvider(this);
        this.boardProvider.createBoard(this.stageDefinition);
    },

    onLoad: function onLoad() {

        var self = this;

        var size = this.boardProvider.getBoardSize();
        for (var i = 1; i <= size.x; ++i) {
            for (var j = 1; j <= size.y; ++j) {

                var characterId = this.boardProvider.getCharacterAt(cc.v2(i, j));

                if (characterId) {

                    console.log('got character: ', i, j, characterId);
                    cc.GlobalStorage.loadCharacterSpriteFrame(characterId, i, j, function (characterSpriteFrame, ii, jj) {

                        var node = new cc.Node();
                        node.name = 'char_' + ii + '_' + jj;

                        var charSprite = node.addComponent(cc.Sprite);
                        charSprite.spriteFrame = characterSpriteFrame;

                        var posX = self.anchorStartPoint.x + ii * self.anchorInterval;
                        var posY = self.anchorStartPoint.y - jj * self.anchorInterval;

                        //var posX = -160 + ii * 64;
                        //var posY = 226 - jj * 64;

                        node.position = cc.v2(posX, posY);
                        node.scale = 0.5;
                        // node.tag = cc.v2(ii, jj);
                        // node.on(cc.Node.EventType.TOUCH_END, this.onBoardClickedAt, this);


                        // var clickEventHandler = new cc.Component.EventHandler();
                        // clickEventHandler.target = self.node; //这个 node 节点是你的事件处理代码组件所属的节点，这里就是Button2
                        // clickEventHandler.component = "PuzzleBoardRenderer";//这个是脚本文件名
                        // clickEventHandler.handler = "onBoardClickedAt"; //回调函名称
                        // clickEventHandler.customEventData = cc.v2(ii, jj); //用户数据
                        // 
                        // let button = node.addComponent(cc.Button); //获取cc.Button组件
                        // button.clickEvents.push(clickEventHandler);

                        var puzzleNode = node.addComponent(cc.PuzzleNodeRenderer);
                        puzzleNode.position = cc.v2(ii, jj);
                        puzzleNode.callbackNode = self.node;
                        puzzleNode.callbackComponentName = "PuzzleBoardRenderer";
                        puzzleNode.callbackHandlerName = "onBoardClickedAt";

                        self.boardRootNode.addChild(node);
                    });
                }
            }
        }
    },
    start: function start() {},
    getNodeAtPosition: function getNodeAtPosition(position) {

        var nodeName = 'char_' + position.x + '_' + position.y;
        return this.boardRootNode.getChildByName(nodeName);
    },


    onBoardClickedAt: function onBoardClickedAt(event, customEventData) {

        console.log('onBoardClickedAt');

        var node = event.target;
        if (!node || !customEventData) {
            console.log("onBoardClickedAt: empty event data detected.");
            return;
        }

        var position = customEventData;

        this.boardProvider.takeActionAt(position);
    },

    // --------------- Callbacks from Provider ---------------
    onChooseCharacterAt: function onChooseCharacterAt(position) {

        console.log('onChooseCharacterAt triggered.');

        var node = this.getNodeAtPosition(position);
        if (node) {

            console.log('Got node on ', position.x, position.y);

            // Play animation
            node.runAction(new cc.scaleTo(0.3, 0.6));
        }
    },

    // The two characters not match, or use click the firstPosition again. Cancel them.
    onUnchooseCharacterAt: function onUnchooseCharacterAt(position, firstPosition) {

        console.log('onUnchooseCharacterAt triggered.');

        var node = this.getNodeAtPosition(position);
        if (node) {

            console.log('Got node on ', position.x, position.y);

            // Play animation
            node.runAction(new cc.scaleTo(0.3, 0.5));
        }

        if (Utils.areSameVec(firstPosition, position)) {
            return;
        }

        var firstNode = this.getNodeAtPosition(firstPosition);
        if (firstNode) {

            console.log('Got node on ', firstPosition.x, firstPosition.y);

            // Play animation
            firstNode.runAction(new cc.scaleTo(0.3, 0.5));
        }
    },

    // The two characters are matching, but not connected, so cancel them
    onMatchNotConnected: function onMatchNotConnected(position, firstPosition) {
        console.log('onMatchNotConnected triggered.');
    },

    // Connect from the firstPosition through connectPoints and to the position
    onConnected: function onConnected(position, firstPosition, connectPoints) {

        console.log('onConnected triggered.');

        var node = this.getNodeAtPosition(position);
        if (node) {

            console.log('Got node on ', position.x, position.y);

            // Play animation
            node.runAction(new cc.scaleTo(0.3, 1.0));
        }

        var firstNode = this.getNodeAtPosition(firstPosition);
        if (firstNode) {

            console.log('Got node on ', firstPosition.x, firstPosition.y);

            // Play animation
            firstNode.runAction(new cc.scaleTo(0.3, 1.0));
        }
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
        //# sourceMappingURL=PuzzleBoardRenderer.js.map
        