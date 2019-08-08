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


class StageDefinition {
    
    constructor() {
        
        this.stageId = 0;
        
        this.poem = new cc.PoemDefinition();
        
    }
    
    // Load definition from JSON file
    static loadFromJson(stageId, callback, caller) {
    
        console.log('loadFromJson:', 'stages/stage_' + stageId);
        
        var resouceUrl = 'stages/stage_' + stageId;
        cc.loader.loadRes(resouceUrl, cc.JsonAsset, function( err, result)
        {
            var target = new cc.StageDefinition();
            target.stageId = stageId;
        
            console.log('error:' + JSON.stringify(err));
            console.log('load result: ' + JSON.stringify(result));
            
            Object.assign(target, result.json);
            
            target.poem = new cc.PoemDefinition();
            Object.assign(target.poem, result.json.poem);
            
            //console.log('load result poem: ' + JSON.stringify(target.poem));
            //console.log('load result json poem: ' + JSON.stringify(result.json.poem));
            
            callback(caller, target);
        });
        
    }
    
    
    totalLength() {
        
        return this.contentCharArray.length;
    }
    
    getPoem() {
        
        return this.poem;
    }
    
    
};



cc.StageDefinition = StageDefinition;
