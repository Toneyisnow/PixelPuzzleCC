"use strict";
cc._RF.push(module, '038a8IHJsVLj5CleZfNxvxv', 'SelectStageScene');
// Scripts/UI/SelectStageScene.js

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

require('StageRecord');

cc.Class({
    extends: cc.Component,

    properties: {

        categoryTitle: {
            default: null,
            type: cc.Node
        },

        titleTransitionDuration: 1.0,
        fadeInDuration: 1.5,

        stagePreviewAnchors: {
            default: [],
            type: cc.Node
        },

        stagePreviewPrefab: cc.Prefab,

        stagePreviewNodes: []
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

        this.createStagePreviews();
    },
    start: function start() {

        var moveTitleAction = cc.targetedAction(this.categoryTitle, cc.moveTo(this.titleTransitionDuration, 0, 350));

        var actions = [];
        for (var i = 0; i < 9; ++i) {
            var targetedx = cc.targetedAction(this.stagePreviewNodes[i], cc.fadeIn(this.fadeInDuration));
            actions.push(targetedx);
        }

        var seq = cc.sequence(moveTitleAction, cc.spawn(actions));

        this.node.runAction(seq);
    },


    createStagePreviews: function createStagePreviews() {

        var record = new cc.StageRecord();

        for (var i = 0; i < 9; ++i) {
            var previewNode = cc.instantiate(this.stagePreviewPrefab);
            var anchor = this.stagePreviewAnchors[i];
            anchor.addChild(previewNode);
            previewNode.position = cc.v2(0, 0);
            previewNode.opacity = 0;

            previewNode.on("click", this.onPreviewNodeClicked, this);

            var previewRenderer = previewNode.getComponent('StagePreviewPrefab');
            previewRenderer.init(i, record);
            previewRenderer.callbackHandler = this;

            this.stagePreviewNodes.push(previewNode);

            console.log('Created Stage Preview.');
        }
    },

    onPreviewNodeClicked: function onPreviewNodeClicked(node) {

        cc.director.loadScene("MainGameScene");
    }

    // update (dt) {},
});

cc._RF.pop();