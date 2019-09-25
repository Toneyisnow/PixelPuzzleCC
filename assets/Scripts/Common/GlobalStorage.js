// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


class GlobalStorage {
    
    constructor() {
        
    }
    
    static characterAtlas_fzlb = undefined;
    
    static saveIntermediateValue(key, value) {
        
        cc.sys.localStorage.setItem(key, value);

    }
    
    static saveIntermediateObject(key, obj) {
        
        cc.sys.localStorage.setItem(key, JSON.stringify(obj) );

    }
    
    static loadIntermediateValue(key) {
        
        let value = cc.sys.localStorage.getItem(key);
        console.log('loadIntermediateValue: ', value);
        
        return value;
    }
        
    static loadIntermediateObject(key) {

        let valueString = cc.sys.localStorage.getItem(key);
        let obj = JSON.parse(valueString);
        
        return obj;
    }
    
    static clearIntermediateObject(key) {
        
        cc.sys.localStorage.removeItem(key);
    }
    
    static loadCharacterSpriteFrame(characterId, character, onLoadedCallback) {
    
        console.log('loadCharacterSpriteFrame: characterId = ', characterId);
        cc.loader.loadRes("characters/chars_fzlb", cc.SpriteAtlas, function (err, atlas) {
            
            var frame = atlas.getSpriteFrame('c_' + characterId);
            
            onLoadedCallback(frame, i, j, character);
        });
    }
};

module.exports = GlobalStorage;


cc.GlobalStorage = GlobalStorage;
