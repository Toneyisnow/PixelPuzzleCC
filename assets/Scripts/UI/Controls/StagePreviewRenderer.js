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
        
        stageRecord: {
            default: null,
            type: cc.StageRecord
        },
        
        touchNode: {
            default: null,
            type: cc.Node
        },
        
        stageId: 0,
    },

    // LIFE-CYCLE CALLBACKS:
    init: function ( stageId, stageRecord ) {
        
        this.stageId = stageId;
        
        this.stageRecord = stageRecord;
        
        this.touchNode.on('touchend', this.onTouchEnd, this);
        
    },



    onLoad () {
        
        
    },

    start () {

        console.log('stageRecord: ' + this.stageRecord.hasFinished());
        
    },

    onTouchEnd: function (caller) {
    
        console.log('onTouchEnd');
        
        this.node.emit('onSelected', this.stageId);
        
        
        //if (this.callbackHandler) {
            
        //    console.log('callbackHandler.onPreviewNodeClicked');
        //    this.callbackHandler.onPreviewNodeClicked(this.node);
        //}
        
    },


    // update (dt) {},
});
