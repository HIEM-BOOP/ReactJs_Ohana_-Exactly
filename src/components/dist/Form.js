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
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.onClickChangeIscheck = function (tienIch) {
            console.log(tienIch.title);
            var tienIchs = _this.state.tienIch;
            for (var i = 0; i < tienIchs.length; i++) {
                if (tienIch.title === tienIchs[i].title) {
                    // tienIchs[i].title = 'aaa'
                    if (tienIch.ischeck === false) {
                        tienIchs[i].ischeck = true;
                    }
                    else {
                        tienIchs[i].ischeck = false;
                    }
                }
            }
            _this.setState({
                tienIch: tienIchs
            });
        };
        _this.handleChange = function (newValue) { };
        _this.onClickReset = function () {
            _this.setState({
                soLuongPhong: JSON.parse(JSON.stringify([undefined])),
                sucChua: JSON.parse(JSON.stringify([undefined]))
            });
        };
        _this.onClickDangPhong = function () {
            //bước 1 : lấy dữ liệu từ local về
            //bước 2 : chuyển dữ liệu vừa sang array
            //bước 3 : push dữ liệu vừa lấy vô array
            //bước 4 : đưa local
            var room = {
                loaiPhong: _this.state.loaiPhong,
                soLuongPhong: _this.state.soLuongPhong,
                sucChua: _this.state.sucChua,
                gioiTinh: _this.state.gioiTinh,
                dienTich: _this.state.dienTich,
                giaChoThue: _this.state.giaChoThue,
                datCoc: _this.state.datCoc,
                tienDien: _this.state.tienDien,
                thanhPho: _this.state.thanhPho,
                quan: _this.state.quan,
                phuong: _this.state.phuong,
                tenPhuong: _this.state.tenDuong,
                soNha: _this.state.soNha,
                hinhAnh: _this.state.hinhAnhs,
                tienIch: _this.state.tienIch,
                soDienThoai: _this.state.soDienThoai,
                tieuDeDangBai: _this.state.tieuDeDangBai,
                noiDungMoTa: _this.state.noiDungMoTa,
                thoiGianMoCua: _this.state.thoiGianMoCua,
                thoiGianDongCua: _this.state.thoiGianDongCua,
                free: _this.state.free
            };
            /* var jsonDsPhong = localStorage.getItem("dsPhong");
            if (jsonDsPhong != null) {
              var jsonDsPhong = localStorage.getItem("dsPhong");
              
              dsPhong.push(room);
              localStorage.setItem("dsPhong", JSON.stringify(dsPhong));
            } */
            var dsPhong = localStorage.getItem('dsPhong');
            var jsonDsPhong = JSON.parse(dsPhong || '{}');
            jsonDsPhong.push(room);
            localStorage.setItem('dsPhong', JSON.stringify(jsonDsPhong));
        };
        _this.state = {
            loaiPhong: "",
            soLuongPhong: 0,
            sucChua: 0,
            gioiTinh: "",
            dienTich: 0,
            giaChoThue: 0,
            datCoc: 0,
            tienDien: 0,
            thanhPho: "",
            quan: "",
            phuong: "",
            tenDuong: "",
            soNha: "",
            hinhAnhs: [
                { name: "IMG1", link: "", placeholder: "Hình ảnh phòng 1" },
                { name: "IMG2", link: "", placeholder: "Hình ảnh phòng 2" },
                { name: "IMG3", link: "", placeholder: "Hình ảnh phòng 3" },
                { name: "IMG4", link: "", placeholder: "Hình ảnh phòng 4" },
                { name: "IMG5", link: "", placeholder: "Hình ảnh phòng 5" },
            ],
            tienIch: [
                { icon: "fas fa-toilet", title: "Wc Riêng", ischeck: true },
                { icon: "fas fa-motorcycle", title: "Chỗ để xe ", ischeck: false },
                { icon: "fas fa-door-open", title: "Cửa sổ", ischeck: false },
                { icon: "fas fa-user-shield", title: "An ninh", ischeck: false },
                { icon: "fas fa-wifi", title: "Wifi", ischeck: false },
                { icon: "fas fa-stopwatch", title: "Tự do", ischeck: false },
                { icon: "fas fa-key", title: "Chủ riêng", ischeck: false },
                { icon: "fas fa-fan", title: "Máy lạnh", ischeck: false },
                {
                    icon: "fas fa-hand-holding-water",
                    title: "Máy nước nóng",
                    ischeck: false
                },
                { icon: "fas fa-sink", title: "Nhà bếp", ischeck: false },
                { icon: "as fa-solar-panel", title: "Tủ lạnh", ischeck: false },
                { icon: "fas fa-recycle", title: "Máy giặt", ischeck: false },
                { icon: "fas fa-life-ring", title: "Gác lửng", ischeck: false },
                { icon: "fas fa-bed", title: "Gác lửng", ischeck: false },
                { icon: "fas fa-door-closed", title: "Tủ đồ", ischeck: false },
                { icon: "fas fa-tv", title: "Tivi", ischeck: false },
                { icon: "fas fa-paw", title: "Thú cưng", ischeck: false },
                { icon: "fad fa-bacon", title: "Ban công", ischeck: false },
            ],
            soDienThoai: "",
            tieuDeDangBai: "Homestay Nữ Quận Tân Bình. Giảm thêm 500k tháng đầu.",
            noiDungMoTa: "hehe",
            thoiGianMoCua: "6h00",
            thoiGianDongCua: "22h00",
            free: true
        };
        return _this;
    }
    Form.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "upRoom" },
            react_1["default"].createElement("form", { className: "dangPhong" },
                react_1["default"].createElement("div", { className: "title" },
                    react_1["default"].createElement("span", { className: "fs-30 fw-400 text-primary " }, "Th\u00F4ng Tin Ph\u00F2ng")),
                react_1["default"].createElement("div", { className: "loaiPhong" },
                    react_1["default"].createElement("div", { className: "noiDung" },
                        react_1["default"].createElement("span", { className: "fs-20 text-secondary" }, "Lo\u1EA1i Ph\u00F2ng")),
                    react_1["default"].createElement("div", { className: "radio" },
                        react_1["default"].createElement("div", { className: "item_radio" },
                            react_1["default"].createElement("input", { value: "K\u00ED t\u00FAc x\u00E1/Homestay", checked: this.state.loaiPhong.includes("Kí túc xá/Homestay")
                                    ? true
                                    : false, onChange: function (event) {
                                    _this.setState({
                                        loaiPhong: event.target.value
                                    });
                                }, type: "radio", className: "loaiPhong", defaultValue: "K\u00ED t\u00FAc x\u00E1/Homestay", name: "loaiPhong" }),
                            react_1["default"].createElement("label", { htmlFor: "content", className: "contents" }, "K\u00ED t\u00FAc x\u00E1/Homestay")),
                        react_1["default"].createElement("div", { className: "item_radio" },
                            react_1["default"].createElement("input", { value: "Ph\u00F2ng cho thu\u00EA", checked: this.state.loaiPhong.includes("Phòng cho thuê"), onChange: function (event) {
                                    _this.setState({
                                        loaiPhong: event.target.value
                                    });
                                }, type: "radio", className: "loaiPhong", defaultValue: "K\u00ED t\u00FAc x\u00E1/Homestay", name: "loaiPhong" }),
                            react_1["default"].createElement("label", { htmlFor: "content", className: "contents" }, "Ph\u00F2ng cho thu\u00EA")),
                        react_1["default"].createElement("div", { className: "item_radio" },
                            react_1["default"].createElement("input", { value: "Ph\u00F2ng \u1EDF gh\u00E9p", checked: this.state.loaiPhong.includes("Phòng ở ghép"), onChange: function (event) {
                                    _this.setState({
                                        loaiPhong: event.target.value
                                    });
                                }, type: "radio", className: "loaiPhong", defaultValue: "K\u00ED t\u00FAc x\u00E1/Homestay", name: "loaiPhong" }),
                            react_1["default"].createElement("label", { htmlFor: "content", className: "contents" }, "Phong \u1EDF gh\u00E9p")),
                        react_1["default"].createElement("div", { className: "item_radio" },
                            react_1["default"].createElement("input", { value: "Nh\u00E0 nguy\u00EAn c\u0103n", checked: this.state.loaiPhong.includes("Nhà nguyên căn"), onChange: function (event) {
                                    _this.setState({
                                        loaiPhong: event.target.value
                                    });
                                }, type: "radio", className: "loaiPhong", defaultValue: "K\u00ED t\u00FAc x\u00E1/Homestay", name: "loaiPhong" }),
                            react_1["default"].createElement("label", { htmlFor: "content", className: "contents" }, "Nh\u00E0 nguy\u00EAn c\u0103n")),
                        react_1["default"].createElement("div", { className: "item_radio" },
                            react_1["default"].createElement("input", { value: "C\u0103n h\u1ED9", checked: this.state.loaiPhong.includes("Căn hộ"), onChange: function (event) {
                                    _this.setState({
                                        loaiPhong: event.target.value
                                    });
                                }, type: "radio", className: "loaiPhong", defaultValue: "K\u00ED t\u00FAc x\u00E1/Homestay", name: "loaiPhong" }),
                            react_1["default"].createElement("label", { htmlFor: "content", className: "contents" }, "C\u0103n h\u1ED9")))),
                react_1["default"].createElement("div", { className: "noiDung" },
                    react_1["default"].createElement("span", { className: "fs-20 text-secondary" }, "S\u1ED1 l\u01B0\u1EE3ng ph\u00F2ng")),
                react_1["default"].createElement("input", { onClick: this.onClickReset, type: "number", id: "soLuongPhong", onChange: function (event) {
                        _this.setState({
                            soLuongPhong: event.target.valueAsNumber
                        });
                    }, value: this.state.soLuongPhong, placeholder: "Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng b\u1EA1n \u0111ang qu\u1EA3n l\u00FD" }),
                react_1["default"].createElement("div", { className: "sucChua" },
                    react_1["default"].createElement("span", { className: "fs-20 text-secondary" }, "S\u1EE9c ch\u1EE9a")),
                react_1["default"].createElement("input", { 
                    // onClick={this.onClickReset}
                    onChange: function (event) {
                        _this.setState({
                            sucChua: event.target.valueAsNumber
                        });
                    }, value: this.state.sucChua, type: "number", id: "sucChua", placeholder: "Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng s\u1EE9c ch\u1EE9a" }),
                react_1["default"].createElement("div", { className: "genDer" },
                    react_1["default"].createElement("span", { className: "fs-20 text-secondary" }, "Gi\u1EDBi T\u00EDnh"),
                    react_1["default"].createElement("div", { className: "gender" },
                        react_1["default"].createElement("input", { value: "T\u1EA5t c\u1EA3", type: "radio", name: "gioiTinh", id: "gioiTinh", checked: this.state.gioiTinh.includes("Tất cả") ? true : false, onChange: function (event) {
                                _this.setState({
                                    gioiTinh: event.target.value
                                });
                                console.log(event.target.value);
                            } }),
                        react_1["default"].createElement("label", { htmlFor: "content" }, "T\u1EA5t c\u1EA3")),
                    react_1["default"].createElement("div", { className: "gender" },
                        react_1["default"].createElement("input", { checked: this.state.gioiTinh.includes("Nam") ? true : false, onChange: function (event) {
                                _this.setState({
                                    gioiTinh: event.target.value
                                });
                                console.log(event.target.value);
                            }, value: "Nam", type: "radio", name: "gioiTinh", id: "gioiTinh" }),
                        react_1["default"].createElement("label", { htmlFor: "content" }, "Nam")),
                    react_1["default"].createElement("div", { className: "gender" },
                        react_1["default"].createElement("input", { checked: this.state.gioiTinh.includes("Nữ") ? true : false, onChange: function (event) {
                                _this.setState({
                                    gioiTinh: event.target.value
                                });
                                console.log(event.target.value);
                            }, value: "N\u1EEF", type: "radio", name: "gioiTinh", id: "gioiTinh" }),
                        react_1["default"].createElement("label", { htmlFor: "content" }, "N\u1EEF"))),
                react_1["default"].createElement("div", { className: "dienTich" },
                    react_1["default"].createElement("div", { className: "tt" },
                        react_1["default"].createElement("span", { className: "fs-20 text-secondary" }, "Di\u1EC7n T\u00EDch")),
                    react_1["default"].createElement("div", { className: "tt" },
                        react_1["default"].createElement("input", { onChange: function (event) {
                                _this.setState({
                                    dienTich: event.target.valueAsNumber
                                });
                            }, value: this.state.dienTich, type: "number", name: "dienTich", id: "dienTich", placeholder: "Nh\u1EADp di\u1EC7n t\u00EDch ph\u00F2ng" }))),
                react_1["default"].createElement("div", { className: "chiPhi" },
                    react_1["default"].createElement("span", { className: "fs-20 text-secondary" }, "Chi Ph\u00ED"),
                    react_1["default"].createElement("div", { className: "khungChiPhi" },
                        react_1["default"].createElement("div", { className: "giaChoThue" },
                            react_1["default"].createElement("span", { className: "fs-16 " }, "G\u00EDa cho thu\u00EA"),
                            react_1["default"].createElement("input", { onChange: function (event) {
                                    _this.setState({
                                        giaChoThue: event.target.valueAsNumber
                                    });
                                }, value: this.state.giaChoThue, type: "number", id: "giaChoThue", placeholder: "Nh\u1EADp gi\u00E1 cho thu\u00EA" })),
                        react_1["default"].createElement("div", { className: "datCoc" },
                            react_1["default"].createElement("span", { className: "fs-16 " }, "\u0110\u1EB7t c\u1ECDc"),
                            react_1["default"].createElement("input", { onChange: function (event) {
                                    _this.setState({
                                        datCoc: event.target.valueAsNumber
                                    });
                                }, value: this.state.datCoc, type: "number", id: "datCoc", placeholder: "Nh\u1EADp s\u1ED1 th\u00E1ng ho\u1EB7c s\u1ED1 ti\u1EC1n" })),
                        react_1["default"].createElement("div", { className: "tienDien" },
                            react_1["default"].createElement("div", { className: "ttTienDien" },
                                react_1["default"].createElement("span", { className: "fs-16 " }, "Ti\u1EC1n \u0111i\u1EC7n")),
                            react_1["default"].createElement("div", { className: "ipTienDien" },
                                react_1["default"].createElement("input", { onChange: function (event) {
                                        _this.setState({
                                            tienDien: event.target.valueAsNumber
                                        });
                                    }, value: this.state.tienDien, type: "number", id: "tienDien", placeholder: "Nh\u1EADp s\u1ED1 ti\u1EC1n" }),
                                react_1["default"].createElement("div", { className: "khungMienPhi" },
                                    react_1["default"].createElement("input", { checked: this.state.free, onChange: function (event) {
                                            _this.setState({
                                                free: event.target.checked
                                            });
                                            console.log(event.target.checked);
                                        }, type: "checkbox", name: "mienPhi", id: "mienPhi" }),
                                    react_1["default"].createElement("span", { className: "fs-16" }, "Mi\u1EC5n Ph\u00ED")))))),
                react_1["default"].createElement("div", { className: "diaChiChiTiet" },
                    react_1["default"].createElement("div", { className: "thanhPho" },
                        react_1["default"].createElement("span", { className: "fs-16" }, "Th\u00E0nh Ph\u1ED1"),
                        react_1["default"].createElement("select", { onChange: function (event) {
                                _this.setState({
                                    thanhPho: event.target.value
                                });
                                console.log(event.target.value);
                            }, name: "thanhPho", id: "thanhPho" },
                            react_1["default"].createElement("option", { value: "H\u1ED3 ch\u00ED minh" }, "H\u1ED3 Ch\u00ED Minh"),
                            react_1["default"].createElement("option", { value: "H\u00E0 N\u1ED9i" }, "H\u00E0 N\u1ED9i"),
                            react_1["default"].createElement("option", { value: "\u0110\u00E0 N\u1EB5ng" }, "\u0110\u00E0 N\u1EB5ng"),
                            react_1["default"].createElement("option", { value: "Singapore" }, "Singapore"),
                            react_1["default"].createElement("option", { value: "San Francisco" }, "San Francisco"))),
                    react_1["default"].createElement("div", { className: "quan" },
                        react_1["default"].createElement("span", { className: "fs-16" }, "Qu\u1EADn/Huy\u1EC7n"),
                        react_1["default"].createElement("select", { onChange: function (event) {
                                _this.setState({
                                    quan: event.target.value
                                });
                                console.log(event.target.value);
                            }, "typeof": "quan", id: "quan" },
                            react_1["default"].createElement("option", { value: "Qu\u1EADn 1" }, "Qu\u1EADn 1"),
                            react_1["default"].createElement("option", { value: "Qu\u1EADn 2" }, "Qu\u1EADn 2"),
                            react_1["default"].createElement("option", { value: "Qu\u1EADn 3" }, "Qu\u1EADn 3"),
                            react_1["default"].createElement("option", { value: "Qu\u1EADn 4" }, "Qu\u1EADn 4"),
                            react_1["default"].createElement("option", { value: "Qu\u1EADn 5" }, "Qu\u1EADn 5"))),
                    react_1["default"].createElement("div", { className: "phuong" },
                        react_1["default"].createElement("span", { className: "fs-16 " }, "Ph\u01B0\u1EDDng/X\u00E3"),
                        react_1["default"].createElement("select", { onChange: function (event) {
                                _this.setState({
                                    phuong: event.target.value
                                });
                                console.log(event.target.value);
                            }, "typeof": "car", id: "phuong" },
                            react_1["default"].createElement("option", { value: "Ph\u01B0\u1EDDng 1" }, "Ph\u01B0\u1EDDng 1"),
                            react_1["default"].createElement("option", { value: "Ph\u01B0\u1EDDng 2" }, "Ph\u01B0\u1EDDng 2"),
                            react_1["default"].createElement("option", { value: "Ph\u01B0\u1EDDng 3" }, "Ph\u01B0\u01A1ng 3"),
                            react_1["default"].createElement("option", { value: "Ph\u01B0\u1EDDng 4" }, "Ph\u01B0\u01A1ng 4"),
                            react_1["default"].createElement("option", { value: "Ph\u01B0\u1EDDng 5" }, "Ph\u01B0\u01A1ng 5"))),
                    react_1["default"].createElement("div", { className: "tenDuong" },
                        react_1["default"].createElement("span", { className: "fs-16" }, "T\u00EAn \u0111\u01B0\u1EDDng"),
                        react_1["default"].createElement("input", { onChange: function (event) {
                                _this.setState({
                                    tenDuong: event.target.value
                                });
                            }, value: this.state.tenDuong, "typeof": "text", id: "tenDuong", placeholder: "T\u00EAn \u0111\u01B0\u1EDDng" })),
                    react_1["default"].createElement("div", { className: "soNha" },
                        react_1["default"].createElement("span", { className: "fs-16" }, "S\u1ED1 nh\u00E0"),
                        react_1["default"].createElement("input", { onChange: function (event) {
                                _this.setState({
                                    soNha: event.target.value
                                });
                            }, value: this.state.soNha, "typeof": "text", id: "soNha", placeholder: "S\u1ED1 nh\u00E0" }))),
                react_1["default"].createElement("div", { className: "tienich" },
                    react_1["default"].createElement("div", { className: "title_img" },
                        react_1["default"].createElement("span", { className: "fs-20 fw-400 cl-success text-secondary" }, "Th\u00F4ng tin h\u00ECnh \u1EA3nh v\u00E0 ti\u1EC7n \u00EDch"),
                        react_1["default"].createElement("div", { className: "hinhAnhPhong" }, this.state.hinhAnhs.map(function (item, index) {
                            return (react_1["default"].createElement("input", { onChange: function (event) {
                                    console.log(index);
                                    item.link = event.target.value;
                                    var hinhAnhNew = _this.state.hinhAnhs.map(function (itemValue, indexValue) {
                                        return index === indexValue ? (itemValue = item) : itemValue;
                                    });
                                    _this.setState({
                                        hinhAnhs: hinhAnhNew
                                    });
                                    console.log(hinhAnhNew);
                                }, value: item.link, type: "text", id: "hinhAnhPhong5", placeholder: item.placeholder }));
                        })))),
                react_1["default"].createElement("div", { id: "ctn_tienich" }, this.state.tienIch.map(function (item) {
                    if (item.ischeck) {
                        return (react_1["default"].createElement("div", { className: "item_tienIch", onClick: function (event) {
                                _this.onClickChangeIscheck(item);
                            } },
                            react_1["default"].createElement("i", { className: item.icon }),
                            react_1["default"].createElement("span", { className: "fs-16" }, item.title)));
                    }
                    else {
                        return (react_1["default"].createElement("div", { onClick: function (event) {
                                _this.onClickChangeIscheck(item);
                            }, style: { background: "pink" }, className: "item_tienIch" },
                            react_1["default"].createElement("i", { className: item.icon }),
                            react_1["default"].createElement("span", { className: "fs-16" }, item.title)));
                    }
                })),
                react_1["default"].createElement("div", { className: "khungXacNhan" },
                    react_1["default"].createElement("div", { className: "tt-xacNhan" },
                        react_1["default"].createElement("span", { className: "fs-20 fw-400 cl-success text-secondary" }, "X\u00E1c nh\u1EADn")),
                    react_1["default"].createElement("div", { className: "container_xacNhan" },
                        react_1["default"].createElement("div", { className: "ttXacNhan" },
                            react_1["default"].createElement("div", { className: "tt" },
                                react_1["default"].createElement("span", { className: "fs-16" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i")),
                            react_1["default"].createElement("input", { onChange: function (event) {
                                    _this.setState({
                                        soDienThoai: event.target.value
                                    });
                                }, type: "text", placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i", id: "soDienThoai" })),
                        react_1["default"].createElement("div", { className: "ttXacNhan" },
                            react_1["default"].createElement("div", { className: "tt" },
                                react_1["default"].createElement("span", { className: "fs-16" }, "Ti\u00EAu \u0111\u1EC1 \u0111\u0103ng b\u00E0i")),
                            react_1["default"].createElement("input", { onChange: function (event) {
                                    _this.setState({
                                        tieuDeDangBai: event.target.value
                                    });
                                }, type: "text", placeholder: "Nh\u1EADp t\u00EAn ph\u00F2ng", id: "tieuDe" })),
                        react_1["default"].createElement("div", { className: "ttXacNhan" },
                            react_1["default"].createElement("div", { className: "tt" },
                                react_1["default"].createElement("span", { className: "fs-16" }, "N\u1ED9i dung m\u00F4 t\u1EA3")),
                            react_1["default"].createElement("input", { onChange: function (event) {
                                    _this.setState({
                                        noiDungMoTa: event.target.value
                                    });
                                }, type: "text", placeholder: "M\u00F4i tr\u01B0\u1EDDng s\u1ED1ng s\u1EA1ch , khu ph\u1ED1 an ninh...", id: "noiDungMoTa", value: this.state.noiDungMoTa })),
                        react_1["default"].createElement("div", { className: "ttXacNhan" },
                            react_1["default"].createElement("div", { className: "tt" },
                                react_1["default"].createElement("span", { className: "fs-16" }, "Th\u1EDDi gian m\u1EDF c\u1EEDa")),
                            react_1["default"].createElement("input", { onChange: function (event) {
                                    _this.setState({
                                        thoiGianMoCua: event.target.value
                                    });
                                    console.log(event.target.value);
                                }, type: "time", placeholder: "Gi\u1EDD m\u1EDF c\u1EEDa", id: "openWindow" })),
                        react_1["default"].createElement("div", { className: "ttXacNhan" },
                            react_1["default"].createElement("div", { className: "tt" },
                                react_1["default"].createElement("span", { className: "fs-16" }, "Th\u1EDDi gian gian \u0111\u00F3ng c\u1EEDa")),
                            react_1["default"].createElement("input", { onChange: function (event) {
                                    _this.setState({
                                        thoiGianDongCua: event.target.value
                                    });
                                }, type: "time", placeholder: "Gi\u1EDD \u0111\u00F3ng c\u1EEDa", id: "closeOpen" })))),
                react_1["default"].createElement("div", { id: "dangPhong" },
                    react_1["default"].createElement("div", { onClick: this.onClickDangPhong, className: "btn btn-large btn-primary rounded" },
                        react_1["default"].createElement("i", { className: "fas fa-home" }),
                        react_1["default"].createElement("span", { className: "fs-16 fw-400" }, "\u0110\u0103ng Ph\u00F2ng"))))));
    };
    return Form;
}(react_1.Component));
var dsPhong = new Array();
exports["default"] = Form;
