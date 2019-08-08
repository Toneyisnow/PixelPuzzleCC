// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


class StageRecord {
    
    constructor() {
        this._hasFinished = true;
        this._isLocked = true;
        this._score = 0;
    }
    
    hasFinished() {
        return this._hasFinished;
    }
    
    isLocked() {
        return this._isLocked;
    }
    
    getScore() {
        return this._score;
    }
    
};



cc.StageRecord = StageRecord;
