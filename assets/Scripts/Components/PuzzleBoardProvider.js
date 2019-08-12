// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var PuzzleBoardSize = require('Constant').PuzzleBoardSize;
var Utils = require('Utils');
require('StageDefinition');
require('PoemDefinition');
require('PuzzleDefinition');

require('PuzzleBoard');


class PuzzleBoardProvider {
    
    constructor() {
        
        this.board = undefined;
        
        this.stageDefinition = undefined;
        this.poemDefinition = undefined;
        this.puzzleDefinition = undefined;
        
    }
    
    createBoard(stageDefinition) {
        
        if (!stageDefinition) {
            return;
        }
        
        this.stageDefinition = stageDefinition;
        this.poemDefinition = stageDefinition.poemDefinition;
        this.puzzleDefinition = stageDefinition.puzzleDefinition;
        
        console.log('PuzzleBoardProvider: creating PuzzleBoard.');
        this.board = new cc.PuzzleBoard();
        
        var size = this.translateBoardSize(this.puzzleDefinition.boardSize);
        this.board.width = size.x;
        this.board.height = size.y;
        
        var appearingCharacters = this.generateAppearingChars();
        console.log('PuzzleBoardProvider: appearingCharacters:', appearingCharacters);
        
        this.board.characterMatrix = this.generateMatrix(appearingCharacters);
        console.log('PuzzleBoardProvider: matrix:', this.board.characterMatrix);
        
        return this.board;
    }
    
    getBoardSize() {
        
        return cc.v2(this.board.width, this.board.height);
    }
    
    generateAppearingChars() {
        
        var targetCharacters = [];
        
        let lines = this.puzzleDefinition.selectedLines;
        for (var i = 0; i < lines.length; ++i) {
            for (var j = 0; j < this.poemDefinition.columnCount; ++j) {
                
                var charIndex = i * this.poemDefinition.columnCount + j;
                if (this.puzzleDefinition.isUncoveredChar(charIndex)) {
                    continue;
                }
                
                var characterId = this.poemDefinition.content[lines[i]][j];
                targetCharacters.push(characterId);
            }
        }
        
        var noiseCharacters = this.puzzleDefinition.noiseChars;
        for (var i = 0; i < noiseCharacters.length; ++i) {
            
            targetCharacters.push(noiseCharacters[i]);
        }
        
        console.log('PuzzleBoardProvider: targetCharacters:', targetCharacters);
        
        var appearingChars = [];
        for (var i = 0; i < targetCharacters.length; ++i) {
            
            var characterId = targetCharacters[i];
            var formula = this.stageDefinition.findFormulaDefinition(characterId);
            if (formula) {
                appearingChars.push(formula.sourceCharacterA);
                appearingChars.push(formula.sourceCharacterB);
            }
        }
        
        return appearingChars;
    }
    
    generateMatrix(appearingCharacters) {
    
        //var characterMatrix = new Array(this.board.width);
        var characterMatrix = [];
        for (var i = 0; i <= this.board.width + 1; ++i) {
            
            //characterMatrix[i] = new Array(this.board.height);
            characterMatrix[i] = [];
        }
        
        for (var i = 0; i < appearingCharacters.length; ++i) {
            
            var characterId = appearingCharacters[i];
            
            var x = Utils.randomInteger(this.board.width) + 1;
            var y = Utils.randomInteger(this.board.height) + 1;
            
            characterMatrix[x][y] = characterId;
        }
        
        return characterMatrix;
    }
    
    takeActionAt(position) {
        
        
        
        
        
    }
    
    getCharacterAt(x, y) {
    
        // console.log('retrieving character at ', x, y);
        
        if (this.board.characterMatrix[x]) {
            return this.board.characterMatrix[x][y];
        } else {
            console.log('getCharacterAt error: matrix exceeded: ', x, y);
        }
    }
    
    translateBoardSize(boardType) {
    
        switch(boardType) {
            case PuzzleBoardSize.TINY: {
                return cc.v2(5, 6);
                break;
            }
            case PuzzleBoardSize.SMALL: {
                return cc.v2(6, 8);
                break;
            }
            case PuzzleBoardSize.MEDIUM: {
                return cc.v2(8, 10);
                break;
            }
            case PuzzleBoardSize.LARGE: {
                return cc.v2(9, 12);
                break;
            }
            case PuzzleBoardSize.HUGE: {
                return cc.v2(10, 14);
                break;
            }
            default: {
                return cc.v2(6, 8);
                
            }
        }
    }
    
}; 

cc.PuzzleBoardProvider = PuzzleBoardProvider;
