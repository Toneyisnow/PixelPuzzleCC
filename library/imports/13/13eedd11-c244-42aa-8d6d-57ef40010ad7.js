"use strict";
cc._RF.push(module, '13eed0RwkRCqo1tV+9AAQrX', 'PoemDefinition');
// Scripts/Components/PoemDefinition.js

"use strict";

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

var PoemDefinition = function () {
    function PoemDefinition() {
        _classCallCheck(this, PoemDefinition);

        this.id = 0;

        this.title = [];
        this.author = [];
        this.content = [];
        this.lineCount = 0;
        this.columnCount = 0;
    }

    _createClass(PoemDefinition, null, [{
        key: "loadFromJsonText",
        value: function loadFromJsonText(jsonObject) {

            var poem = new cc.PoemDefinition();

            poem.id = jsonObject.id;
            poem.title = jsonObject.title;
            poem.author = jsonObject.author;
            poem.content = jsonObject.content;
            poem.lineCount = jsonObject.line_count;
            poem.columnCount = jsonObject.column_count;

            return poem;
        }
    }]);

    return PoemDefinition;
}();

;

cc.PoemDefinition = PoemDefinition;

cc._RF.pop();