(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/UI/SelectCategoryScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e7d07JZh7dKZ5ciOey0tEc4', 'SelectCategoryScene', __filename);
// Scripts/UI/SelectCategoryScene.js

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

        btnCategoryTitle: {
            default: null,
            type: cc.Button
        },

        btnLeft: {
            default: null,
            type: cc.Button
        },

        btnRight: {
            default: null,
            type: cc.Button
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

        this.categoryId = cc.GlobalStorage.loadIntermediateValue("selectedCategoryId");

        this.btnCategoryTitle.node.on("click", this.onTitleClicked, this);
        this.btnLeft.node.on("click", this.onLeftClicked, this);
        this.btnRight.node.on("click", this.onRightClicked, this);
    },
    start: function start() {},


    onTitleClicked: function onTitleClicked(button) {

        // Enter the category

        cc.director.loadScene("SelectStageScene");
    },

    onLeftClicked: function onLeftClicked(button) {

        cc.director.loadScene("SelectStageScene");
    },

    onRightClicked: function onRightClicked(button) {

        cc.director.loadScene("SelectStageScene");
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
        //# sourceMappingURL=SelectCategoryScene.js.map
        