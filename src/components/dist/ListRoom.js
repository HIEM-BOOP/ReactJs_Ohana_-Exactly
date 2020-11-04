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
var Room_1 = require("./Room");
var ListRoom = /** @class */ (function (_super) {
    __extends(ListRoom, _super);
    function ListRoom(props) {
        var _this = _super.call(this, props) || this;
        var data = localStorage.getItem("dsPhong");
        var dsphong = JSON.parse(data || "{}");
        _this.state = {
            rooms: dsphong
        };
        return _this;
    }
    ListRoom.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "listRoom" },
                react_1["default"].createElement("div", { className: "ketQua" },
                    react_1["default"].createElement("span", { className: "fs-26" }, "K\u1EBFt qu\u1EA3")),
                this.props.rooms.map(function (item) {
                    return (react_1["default"].createElement(Room_1["default"], { room: item }));
                }))));
    };
    return ListRoom;
}(react_1.Component));
exports["default"] = ListRoom;
