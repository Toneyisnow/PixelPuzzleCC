(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/UI/StagePreviewPrefab.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fc24bXN/yhNopixUWz8jb5t', 'StagePreviewPrefab', __filename);
// Scripts/UI/StagePreviewPrefab.js

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

    stage_id: 0,

    properties: {

        stageRecord: {
            default: null,
            type: cc.StageRecord
        },

        callbackHandler: {
            default: null,
            type: cc.Component
        },

        touchNode: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:
    init: function init(stageId, stageRecord) {

        this.stage_id = stageId;

        this.stageRecord = stageRecord;

        this.touchNode.on('touchend', this.onTouchUp, this);
    },

    onLoad: function onLoad() {},
    start: function start() {

        console.log('stageRecord: ' + this.stageRecord.hasFinished());
    },


    onTouchUp: function onTouchUp(caller) {

        console.log('onTouchUp');

        if (this.callbackHandler) {

            console.log('callbackHandler.onPreviewNodeClicked');
            this.callbackHandler.onPreviewNodeClicked(this.node);
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
        //# sourceMappingURL=StagePreviewPrefab.js.map
        