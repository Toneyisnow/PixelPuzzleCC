"use strict";
cc._RF.push(module, '3196cm7Sw1C0K7lP+686Lkz', 'PoemDefinition');
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
        this.line_count = 0;
        this.column_count = 0;
    }

    _createClass(PoemDefinition, [{
        key: "totalLength",
        value: function totalLength() {

            return this.content.length;
        }
    }]);

    return PoemDefinition;
}();

;

cc.PoemDefinition = PoemDefinition;

cc._RF.pop();