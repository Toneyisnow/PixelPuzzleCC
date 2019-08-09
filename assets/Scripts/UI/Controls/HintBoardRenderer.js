// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

require('GlobalStorage');

require('PoemDefinition');
require('StageDefinition');
require('PuzzleDefinition');


cc.Class({
    extends: cc.Component,

    properties: {
        
        boardWidth: 1,
        
        boardHeight: 1,
        
        poemId: 0,
        
        poemDefinition: {
            default: null,
            type: cc.PoemDefinition
        },
        
        puzzleDefinition: {
            default: null,
            type: cc.PuzzleDefinition
        },
        
        stageDefinition: {
            default: null,
            type: cc.StageDefinition
        },
        
        characterAnchors: {
            default: [],
            type: cc.Node
        },
        
        poemBoardPrefab: cc.Prefab,
        
        
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

    init: function(stageDefinition) {
    
        console.log('PoemBoard init.');
        
        this.stageDefinition = stageDefinition;
        this.poemDefinition = this.stageDefinition.poemDefinition;
        this.puzzleDefinition = this.stageDefinition.puzzleDefinition;
    },


    onLoad () {
        
        if (!this.poemDefinition) {
        
            console.log('poemDefinition is null.');
            return;
        }
        
        var self = this;
        
        //cc.loader.loadRes("characters/chars_fzlb", cc.SpriteAtlas, function (err, atlas) {
            
        //    var frame = atlas.getSpriteFrame('c_7eb7');
        //    self.testSprite.spriteFrame = frame;
        //});
        
        
        let lines = this.puzzleDefinition.selectedLines;
        
        let lineCount = this.poemDefinition.lineCount;
        let columnCount = this.poemDefinition.columnCount;
        
        //cc.loader.loadRes("characters/chars_fzlb", cc.SpriteAtlas, function (err, atlas) {
            
        //    var frame = atlas.getSpriteFrame('c_7eb7');
            
            //var node = new cc.Node();
            //let charSprite = node.addComponent(cc.Sprite);
            //charSprite.spriteFrame = frame;
            //node.zIndex = 10;
            
            //anchor.addChild(node);
            
        //    self.testSprite.spriteFrame = frame;
        //});
        
        console.log('onLoad: loading PoemDefinitions. Totallength: ', lineCount, columnCount);
        console.log('selectedLines: ', lines);
        for (var i = 0; i < lines.length; ++i) {
            for (var j = 0; j < columnCount; ++j) {
                
                var characterId = this.poemDefinition.content[lines[i]][j];
                cc.GlobalStorage.loadCharacterSpriteFrame(characterId, i, j, function(characterSpriteFrame, ii, jj) {
        
                    var node = new cc.Node();
                    let charSprite = node.addComponent(cc.Sprite);
                    charSprite.spriteFrame = characterSpriteFrame;
                    
                    var charIndex = lines[ii] * columnCount + jj;
                    var anchor = self.characterAnchors[charIndex];
                    console.log('anchor position:', anchor.position.x, anchor.position.y);
                    
                    anchor.addChild(node);
                    node.position = cc.v2(0, 0);
                    
                    console.log('checking uncovered for charIndex: ', charIndex);
                    if (self.puzzleDefinition.isUncoveredChar(charIndex)) {
                        node.opacity = 255;
                    } else {
                        node.opacity = 64;
                    }
                });
            }
        }
    },

    start () {

    },

    // update (dt) {},
});
