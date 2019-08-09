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
require('PuzzleDefinition');
require('FormulaDefinition');


class StageDefinition {
    
    constructor() {
        
        this.stageId = 0;
        
        this.poemDefinition = undefined;
        
        this.puzzleDefinition = undefined;
        
        this.formulaDefinitions = [];
    }
    
    // Load definition from JSON file
    static loadFromFile(stageId, callback, caller) {
    
        console.log('loadFromJson:', 'stages/stage_' + stageId);
        
        var resouceUrl = 'stages/stage_' + stageId;
        cc.loader.loadRes(resouceUrl, cc.JsonAsset, function( err, result)
        {
            if (err) {
                
                console.log('StageDefinition.loadFromFile Error: ', err);
                
            } else {
            
                let stage = StageDefinition.loadFromJsonText(result.json);
                stage.stageId = stageId;
                
                callback(caller, stage);
            }
            
            //Object.assign(target, result.json);
            
            //console.log('load result poem: ' + JSON.stringify(target.poem));
            //console.log('load result json poem: ' + JSON.stringify(result.json.poem));
        });
    }
    
    static loadFromJsonText(jsonObject) {
        
        var stage = new cc.StageDefinition();
        stage.poemDefinition = cc.PoemDefinition.loadFromJsonText(jsonObject.poem);
        stage.puzzleDefinition = cc.PuzzleDefinition.loadFromJsonText(jsonObject.puzzle);
        
        if (jsonObject.formula) {
            jsonObject.formula.forEach(function (itemArr, index) {
                
                var formula = cc.FormulaDefinition.loadFromArray(itemArr);
                stage.formulaDefinitions.push(formula);
            });
        }
        
        return stage;
    }
    
    findFormulaDefinition(targetCharacterId) {
        
        for (var i = 0; i < this.formulaDefinitions.length; i++) {
            
            if (this.formulaDefinitions[i].targetCharacter == targetCharacterId) {
                return this.formulaDefinitions[i];
            }
        }
        
        return undefined;
    }
};



cc.StageDefinition = StageDefinition;
