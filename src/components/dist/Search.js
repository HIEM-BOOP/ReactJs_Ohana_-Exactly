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
var fa_1 = require("react-icons/fa");
var fa_2 = require("react-icons/fa");
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Search.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "khung-Tim-Kiem" },
            react_1["default"].createElement("div", { id: "search" },
                react_1["default"].createElement(fa_2.FaMapMarkedAlt, null),
                react_1["default"].createElement("select", { name: "tinhThanh", id: "tinhThanh" },
                    react_1["default"].createElement("option", { value: "TP.HCM" }, "TP.HCM"),
                    react_1["default"].createElement("option", { value: "TP H\u00E0 N\u1ED9i" }, "TP H\u00E0 N\u1ED9i")),
                react_1["default"].createElement("input", { type: "text", className: "timKiem fs-16 fm-400", id: "timKiem", placeholder: "T\u00ECm Ki\u1EBFm theo \u0111\u1ECBa \u0111i\u1EC3m, qu\u1EADn,t\u00EAn \u0111\u01B0\u1EDDng...", 
                    /*   onChange = {(even) => {
                        this.setState({
                          search : even.target.value
                        })
                        console.log(this.state.search);
                        // Lấy dsPhong từ local ra
                        const layPhong = localStorage.getItem('dsPhong');
                        
                        // Chuyển danh sách về dang thường []
                        var listRoom = JSON.parse(layPhong || "{}");
                        console.log(listRoom);
                        // Tạo mảng rổng để chứa phần tìm kiếm có đúng giá trị đang tìm
          
                        let danhSachTimKiem = [];
                        
                        
                        // Chạy vòng lặp trong mảng lisRoom để kiểm tra người dùng nhập có trong mảng lisRoom hay ko
          
                       for(let i = 0 ; i < listRoom.length ; i++){
                          if(listRoom[i].tieuDeDangBai.includes(this.state.search) == true){
                              danhSachTimKiem.push(listRoom[i])
                              console.log(danhSachTimKiem);
                              
                          }
                       }
                       
                      
          
          
                      }} */
                    onChange: function (even) {
                        _this.props.onChangeTextSearch(even.target.value);
                    }, value: this.props.searchText }),
                react_1["default"].createElement(fa_1.FaSearchLocation, null))));
    };
    return Search;
}(react_1.Component));
exports["default"] = Search;
