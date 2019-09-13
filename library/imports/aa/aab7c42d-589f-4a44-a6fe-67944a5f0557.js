"use strict";
cc._RF.push(module, 'aab7cQtWJ9KRKb+Z5RKXwVX', 'WelcomeScene');
// Scripts/UI/WelcomeScene.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var GlobalStorage = require('GlobalStorage');

cc.Class({
    extends: cc.Component,

    properties: {

        buttonStart: {
            default: null,
            type: cc.Button
        },

        canvas: {
            default: null,
            type: cc.Canvas
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

        this.buttonStart.node.on("click", this.onStartClicked, this);

        var self = this;
    },
    start: function start() {},


    onStartClicked: function onStartClicked() {

        //this.canvas.opacity = 255;
        //this.canvas.color = new cc.Color(0, 0, 0);
        //this.canvas.runAction(cc.fadeOut(1.0));


        var targetedAction = cc.targetedAction(this.canvas, cc.fadeOut(1.0));
        var targetedAction2 = cc.callFunc(this.doSwitchScene, this);
        var seq = cc.sequence(targetedAction, targetedAction2);

        this.node.runAction(seq);
    },

    doSwitchScene: function doSwitchScene(caller) {

        cc.GlobalStorage.saveIntermediateValue("selectedCategoryId", 1);
        cc.director.loadScene("SelectCategoryScene");
    }

    // update (dt) {},
});

cc._RF.pop();