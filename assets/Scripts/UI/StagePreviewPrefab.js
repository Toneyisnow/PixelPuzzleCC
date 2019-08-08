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
        },
    },

    // LIFE-CYCLE CALLBACKS:
    init: function ( stageId, stageRecord ) {
        
        this.stage_id = stageId;
        
        this.stageRecord = stageRecord;
        
        this.touchNode.on('touchend', this.onTouchUp, this);
        
    },



    onLoad () {
        
        
    },

    start () {

        console.log('stageRecord: ' + this.stageRecord.hasFinished());
        
    },

    onTouchUp: function (caller) {
    
        console.log('onTouchUp');
        
        if (this.callbackHandler) {
            
            console.log('callbackHandler.onPreviewNodeClicked');
            this.callbackHandler.onPreviewNodeClicked(this.node);
        }
        
    },


    // update (dt) {},
});
