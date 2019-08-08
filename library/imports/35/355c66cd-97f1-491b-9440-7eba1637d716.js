"use strict";
cc._RF.push(module, '355c6bNl/FJG5RAfroWN9cW', 'StageDefinition');
// Scripts/Components/StageDefinition.js

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var StageDefinition = function () {
    function StageDefinition() {
        _classCallCheck(this, StageDefinition);

        this.stageId = 0;

        this.poem = new cc.PoemDefinition();
    }

    // Load definition from JSON file


    _createClass(StageDefinition, [{
        key: 'totalLength',
        value: function totalLength() {

            return this.contentCharArray.length;
        }
    }, {
        key: 'getPoem',
        value: function getPoem() {

            return this.poem;
        }
    }], [{
        key: 'loadFromJson',
        value: function loadFromJson(stageId, callback, caller) {

            console.log('loadFromJson:', 'stages/stage_' + stageId);

            var resouceUrl = 'stages/stage_' + stageId;
            cc.loader.loadRes(resouceUrl, cc.JsonAsset, function (err, result) {
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
    }]);

    return StageDefinition;
}();

;

cc.StageDefinition = StageDefinition;

cc._RF.pop();