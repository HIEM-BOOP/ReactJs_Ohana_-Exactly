"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var Form_1 = require("../components/Form");
var CreateRoomPage = /** @class */ (function (_super) {
    __extends(CreateRoomPage, _super);
    function CreateRoomPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateRoomPage.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement(Form_1["default"], null)));
    };
    return CreateRoomPage;
}(react_1.Component));
exports["default"] = CreateRoomPage;
