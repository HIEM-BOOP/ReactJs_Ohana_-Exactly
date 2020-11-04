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
var Filter_1 = require("../components/Filter");
var Heder_1 = require("../components/Heder");
var ListRoom_1 = require("../components/ListRoom");
var Search_1 = require("../components/Search");
var ListRoomContainer = /** @class */ (function (_super) {
    __extends(ListRoomContainer, _super);
    function ListRoomContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            listRoom: [],
            searchText: ''
        };
        var data = localStorage.getItem("dsPhong");
        var dsphong = JSON.parse(data || "{}");
        _this.state = {
            listRoom: dsphong,
            searchText: ''
        };
        console.log(_this.state.listRoom);
        return _this;
    }
    ListRoomContainer.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Heder_1["default"], null),
            react_1["default"].createElement(Search_1["default"], { searchText: this.state.searchText, onChangeTextSearch: function (newTextSearch) {
                    _this.setState({
                        searchText: newTextSearch
                    });
                    console.log(_this.state.searchText);
                    var layPhong = localStorage.getItem('dsPhong');
                    // Chuyển danh sách về dang thường []
                    var listRoom = JSON.parse(layPhong || "{}");
                    console.log(listRoom);
                    // Tạo mảng rổng để chứa phần tìm kiếm có đúng giá trị đang tìm
                    var danhSachTimKiem = [];
                    // Chạy vòng lặp trong mảng lisRoom để kiểm tra người dùng nhập có trong mảng lisRoom hay ko 
                    if (_this.state.searchText.length == 0) {
                        var layPhong_1 = localStorage.getItem('dsPhong');
                        // Chuyển danh sách về dang thường []
                        var listRoom = JSON.parse(layPhong_1 || "{}");
                        danhSachTimKiem = listRoom;
                    }
                    else {
                        for (var i = 0; i < listRoom.length; i++) {
                            if (listRoom[i].tieuDeDangBai.includes(_this.state.searchText) === true) {
                                danhSachTimKiem.push(listRoom[i]);
                                console.log(danhSachTimKiem);
                            }
                        }
                    }
                    _this.setState({
                        listRoom: danhSachTimKiem
                    });
                } }),
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement(Filter_1["default"], null),
                react_1["default"].createElement(ListRoom_1["default"], { rooms: this.state.listRoom }))));
    };
    return ListRoomContainer;
}(react_1.Component));
exports["default"] = ListRoomContainer;
