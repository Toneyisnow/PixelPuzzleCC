"use strict";
cc._RF.push(module, 'd3d85VZuHNP74CeBKTWWClw', 'PuzzleNodeRenderer');
// Scripts/UI/Controls/PuzzleNodeRenderer.js

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

var PuzzleNodeRenderer = cc.Class({
    extends: cc.Component,

    properties: {

        position: {
            default: cc.v2(0, 0),
            type: cc.v2
        },

        callbackNode: {
            default: null,
            type: cc.Node
        },

        callbackComponentName: "",

        callbackHandlerName: ""

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

        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.callbackNode; //这个 node 节点是你的事件处理代码组件所属的节点，这里就是Button2
        clickEventHandler.component = this.callbackComponentName; //这个是脚本文件名
        clickEventHandler.handler = this.callbackHandlerName; //回调函名称
        clickEventHandler.customEventData = this.position; //用户数据

        var button = this.node.addComponent(cc.Button); //获取cc.Button组件
        button.clickEvents.push(clickEventHandler);
    },
    start: function start() {}
}

// update (dt) {},
);

cc.PuzzleNodeRenderer = module.exports = PuzzleNodeRenderer;

cc._RF.pop();