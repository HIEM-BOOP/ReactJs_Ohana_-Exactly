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
var ai_1 = require("react-icons/ai");
var fa_1 = require("react-icons/fa");
var fa_2 = require("react-icons/fa");
var fa_3 = require("react-icons/fa");
/* export default  */ var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    function Room(props) {
        return _super.call(this, props) || this;
    }
    Room.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "right_frame" },
            react_1["default"].createElement("div", { id: "showPhong" },
                react_1["default"].createElement("div", { className: "anhPhong", style: {
                        background: "url(" + this.props.room.hinhAnh[0].link + ") no-repeat center center/cover"
                    } }),
                react_1["default"].createElement("div", { className: "thongTin" },
                    react_1["default"].createElement("div", { className: "title" },
                        react_1["default"].createElement("p", { className: "fs-20" }, this.props.room.tieuDeDangBai)),
                    react_1["default"].createElement("div", { className: "thongTinChiTiet" },
                        react_1["default"].createElement("div", { className: "chiTietPhong" },
                            react_1["default"].createElement("div", { className: "loaiPhong" },
                                react_1["default"].createElement(ai_1.AiOutlineHome, null),
                                react_1["default"].createElement("span", null, this.props.room.loaiPhong)),
                            react_1["default"].createElement("div", { className: "gt_kichThuoc" },
                                react_1["default"].createElement("div", { className: "gioiTinh" },
                                    react_1["default"].createElement(fa_1.FaTransgenderAlt, null),
                                    react_1["default"].createElement("span", null, this.props.room.gioiTinh)),
                                react_1["default"].createElement("div", { className: "kichThuoc" },
                                    react_1["default"].createElement(fa_2.FaRulerHorizontal, null),
                                    react_1["default"].createElement("span", null,
                                        this.props.room.dienTich,
                                        "m\u00B2"))),
                            react_1["default"].createElement("div", { className: "diaChi" },
                                react_1["default"].createElement(fa_3.FaMapMarked, null),
                                react_1["default"].createElement("span", null, this.props.room.tenPhuong))),
                        react_1["default"].createElement("div", { className: "gia" },
                            react_1["default"].createElement("span", { className: "fs-48 " }, this.props.room.giaChoThue),
                            react_1["default"].createElement("span", { className: "fs-20" }, "tr/ph\u00F2ng")))))));
    };
    return Room;
}(react_1.Component));
exports["default"] = Room;
