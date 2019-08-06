// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
        categoryTitle: {
            default: null,
            type: cc.Node,
        },
        
        stagePreview: {
            default: null,
            type: cc.Node,
        },
        
        stagePreviews: [],
        
        titleTransitionDuration: 1.0,
        fadeInDuration: 1.5,
        
        
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

    onLoad () {
        
        
    },

    start () {
    
        var targetedAction = cc.targetedAction(this.categoryTitle, cc.moveTo(this.titleTransitionDuration, 0, 350));
        var targetedAction2 = cc.targetedAction(this.stagePreview, cc.fadeIn(this.fadeInDuration));
        var seq = cc.sequence(targetedAction, targetedAction2);
        
        this.node.runAction(seq);
        
    },

    // update (dt) {},
});
