
import React, { Component } from "react";


class Form extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
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
          ischeck: false,
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
      free: true,
    };
  }

  render() {
    return (
      <div className="upRoom">
        <form className="dangPhong">
          <div className="title">
            <span className="fs-30 fw-400 text-primary ">Thông Tin Phòng</span>
          </div>
          <div className="loaiPhong">
            <div className="noiDung">
              <span className="fs-20 text-secondary">Loại Phòng</span>
            </div>
            <div className="radio">
              <div className="item_radio">
                <input
                  value="Kí túc xá/Homestay"
                  checked={
                    this.state.loaiPhong.includes("Kí túc xá/Homestay")
                      ? true
                      : false
                  }
                  onChange={(event) => {
                    this.setState({
                      loaiPhong: event.target.value,
                    });
                  }}
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Kí túc xá/Homestay
                </label>
              </div>
              <div className="item_radio">
                <input
                  value="Phòng cho thuê"
                  checked={this.state.loaiPhong.includes("Phòng cho thuê")}
                  onChange={(event) => {
                    this.setState({
                      loaiPhong: event.target.value,
                    });
                  }}
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Phòng cho thuê
                </label>
              </div>
              <div className="item_radio">
                <input
                  value="Phòng ở ghép"
                  checked={this.state.loaiPhong.includes("Phòng ở ghép")}
                  onChange={(event) => {
                    this.setState({
                      loaiPhong: event.target.value,
                    });
                  }}
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Phong ở ghép
                </label>
              </div>
              <div className="item_radio">
                <input
                  value="Nhà nguyên căn"
                  checked={this.state.loaiPhong.includes("Nhà nguyên căn")}
                  onChange={(event) => {
                    this.setState({
                      loaiPhong: event.target.value,
                    });
                  }}
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Nhà nguyên căn
                </label>
              </div>
              <div className="item_radio">
                <input
                  value="Căn hộ"
                  checked={this.state.loaiPhong.includes("Căn hộ")}
                  onChange={(event) => {
                    this.setState({
                      loaiPhong: event.target.value,
                    });
                  }}
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Căn hộ
                </label>
              </div>
            </div>
          </div>
          <div className="noiDung">
            <span className="fs-20 text-secondary">Số lượng phòng</span>
          </div>
          <input
            onClick={this.onClickReset}
            type="number"
            id="soLuongPhong"
            onChange={(event) => {
              this.setState({
                soLuongPhong: event.target.valueAsNumber,
              });
            }}
            value={this.state.soLuongPhong}
            placeholder="Nhập số lượng bạn đang quản lý"
          />
          <div className="sucChua">
            <span className="fs-20 text-secondary">Sức chứa</span>
          </div>
          <input
            // onClick={this.onClickReset}
            onChange={(event) => {
              this.setState({
                sucChua: event.target.valueAsNumber,
              });
            }}
            value={this.state.sucChua}
            type="number"
            id="sucChua"
            placeholder="Nhập số lượng sức chứa"
          />
          <div className="genDer">
            <span className="fs-20 text-secondary">Giới Tính</span>
            <div className="gender">
              <input
                value="Tất cả"
                type="radio"
                name="gioiTinh"
                id="gioiTinh"
                checked={this.state.gioiTinh.includes("Tất cả") ? true : false}
                onChange={(event) => {
                  this.setState({
                    gioiTinh: event.target.value,
                  });
                  console.log(event.target.value);
                }}
              />
              <label htmlFor="content">Tất cả</label>
            </div>
            <div className="gender">
              <input
                checked={this.state.gioiTinh.includes("Nam") ? true : false}
                onChange={(event) => {
                  this.setState({
                    gioiTinh: event.target.value,
                  });
                  console.log(event.target.value);
                }}
                value="Nam"
                type="radio"
                name="gioiTinh"
                id="gioiTinh"
              />
              <label htmlFor="content">Nam</label>
            </div>
            <div className="gender">
              <input
                checked={this.state.gioiTinh.includes("Nữ") ? true : false}
                onChange={(event) => {
                  this.setState({
                    gioiTinh: event.target.value,
                  });
                  console.log(event.target.value);
                }}
                value="Nữ"
                type="radio"
                name="gioiTinh"
                id="gioiTinh"
              />
              <label htmlFor="content">Nữ</label>
            </div>
          </div>
          <div className="dienTich">
            <div className="tt">
              <span className="fs-20 text-secondary">Diện Tích</span>
            </div>
            <div className="tt">
              <input
                onChange={(event) => {
                  this.setState({
                    dienTich: event.target.valueAsNumber,
                  });
                }}
                value={this.state.dienTich}
                type="number"
                name="dienTich"
                id="dienTich"
                placeholder="Nhập diện tích phòng"
              />
            </div>
          </div>
          <div className="chiPhi">
            <span className="fs-20 text-secondary">Chi Phí</span>
            <div className="khungChiPhi">
              <div className="giaChoThue">
                <span className="fs-16 ">Gía cho thuê</span>
                <input
                  onChange={(event) => {
                    this.setState({
                      giaChoThue: event.target.valueAsNumber,
                    });
                  }}
                  value={this.state.giaChoThue}
                  type="number"
                  id="giaChoThue"
                  placeholder="Nhập giá cho thuê"
                />
              </div>
              <div className="datCoc">
                <span className="fs-16 ">Đặt cọc</span>
                <input
                  onChange={(event) => {
                    this.setState({
                      datCoc: event.target.valueAsNumber,
                    });
                  }}
                  value={this.state.datCoc}
                  type="number"
                  id="datCoc"
                  placeholder="Nhập số tháng hoặc số tiền"
                />
              </div>
              <div className="tienDien">
                <div className="ttTienDien">
                  <span className="fs-16 ">Tiền điện</span>
                </div>
                <div className="ipTienDien">
                  <input
                    onChange={(event) => {
                      this.setState({
                        tienDien: event.target.valueAsNumber,
                      });
                    }}
                    value={this.state.tienDien}
                    type="number"
                    id="tienDien"
                    placeholder="Nhập số tiền"
                  />
                  <div className="khungMienPhi">
                    <input
                      checked={this.state.free}
                      onChange={(event) => {
                        this.setState({
                          free: event.target.checked,
                        });
                        console.log(event.target.checked);
                      }}
                      type="checkbox"
                      name="mienPhi"
                      id="mienPhi"
                    />
                    <span className="fs-16">Miễn Phí</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="diaChiChiTiet">
            <div className="thanhPho">
              <span className="fs-16">Thành Phố</span>
              <select
                onChange={(event) => {
                  this.setState({
                    thanhPho: event.target.value,
                  });
                  console.log(event.target.value);
                }}
                name="thanhPho"
                id="thanhPho"
              >
                <option value="Hồ chí minh">Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Singapore">Singapore</option>
                <option value="San Francisco">San Francisco</option>
              </select>
            </div>
            <div className="quan">
              <span className="fs-16">Quận/Huyện</span>
              <select
                onChange={(event) => {
                  this.setState({
                    quan: event.target.value,
                  });
                  console.log(event.target.value);
                }}
                typeof="quan"
                id="quan"
              >
                <option value="Quận 1">Quận 1</option>
                <option value="Quận 2">Quận 2</option>
                <option value="Quận 3">Quận 3</option>
                <option value="Quận 4">Quận 4</option>
                <option value="Quận 5">Quận 5</option>
              </select>
            </div>
            <div className="phuong">
              <span className="fs-16 ">Phường/Xã</span>
              <select
                onChange={(event) => {
                  this.setState({
                    phuong: event.target.value,
                  });
                  console.log(event.target.value);
                }}
                typeof="car"
                id="phuong"
              >
                <option value="Phường 1">Phường 1</option>
                <option value="Phường 2">Phường 2</option>
                <option value="Phường 3">Phương 3</option>
                <option value="Phường 4">Phương 4</option>
                <option value="Phường 5">Phương 5</option>
              </select>
            </div>

            <div className="tenDuong">
              <span className="fs-16">Tên đường</span>
              <input
                onChange={(event) => {
                  this.setState({
                    tenDuong: event.target.value,
                  });
                }}
                value={this.state.tenDuong}
                typeof="text"
                id="tenDuong"
                placeholder="Tên đường"
              />
            </div>
            <div className="soNha">
              <span className="fs-16">Số nhà</span>
              <input
                onChange={(event) => {
                  this.setState({
                    soNha: event.target.value,
                  });
                }}
                value={this.state.soNha}
                typeof="text"
                id="soNha"
                placeholder="Số nhà"
              />
            </div>
          </div>

          <div className="tienich">
            <div className="title_img">
              <span className="fs-20 fw-400 cl-success text-secondary">
                Thông tin hình ảnh và tiện ích
              </span>
              <div className="hinhAnhPhong">
                {/*  <input
                  value={this.state.hinhAnh[1]}
                  type="url"
                  id="hinhAnhPhong2"
                  placeholder="Hình ảnh thứ hai"
                />
                <input
                  value={this.state.hinhAnh[2]}
                  type="url"
                  id="hinhAnhPhong3"
                  placeholder="Hình ảnh thứ ba"
                />
                <input
                  value={this.state.hinhAnh[3]}
                  type="url"
                  id="hinhAnhPhong4"
                  placeholder="Hình ảnh thứ tư"
                />

                <input
                  value={this.state.hinhAnh[4]}
                  type="text"
                  id="hinhAnhPhong5"
                  placeholder="Hình ảnh thứ năm"
                /> */}
                {this.state.hinhAnhs.map((item, index) => {
                  return (
                    <input
                      onChange={(event) => {
                        console.log(index);
                        item.link = event.target.value;
                        let hinhAnhNew = this.state.hinhAnhs.map(
                          (itemValue, indexValue) =>
                            index === indexValue ? (itemValue = item) : itemValue
                        );
                        this.setState({
                          hinhAnhs: hinhAnhNew,
                        });
                        console.log(hinhAnhNew);
                      }}
                      value={item.link}
                      type="text"
                      id="hinhAnhPhong5"
                      placeholder={item.placeholder}
                    />
                  );
                })}
              </div>
              {/* tiên ích */}
            </div>
          </div>

          <div id="ctn_tienich">
            {/* <div className="item_tienIch">
              <i className="fas fa-toilet" />
              <span className="fs-16">WC Riêng</span>
            </div> */}
            {this.state.tienIch.map((item) => {
              if (item.ischeck) {
                return (
                  <div
                    className="item_tienIch"
                    onClick={(event) => {
                      this.onClickChangeIscheck(item);
                    }}
                  >
                    <i className={item.icon} />
                    <span className="fs-16">{item.title}</span>
                  </div>
                );
              } else {
                return (
                  <div
                    onClick={(event) => {
                      this.onClickChangeIscheck(item);
                    }}
                    style={{ background: "pink" }}
                    className="item_tienIch"
                  >
                    <i className={item.icon} />
                    <span className="fs-16">{item.title}</span>
                  </div>
                );
              }
            })}
          </div>

          <div className="khungXacNhan">
            <div className="tt-xacNhan">
              <span className="fs-20 fw-400 cl-success text-secondary">
                Xác nhận
              </span>
            </div>
            <div className="container_xacNhan">
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Số điện thoại</span>
                </div>
                <input
                  onChange={(event) => {
                    this.setState({
                      soDienThoai: event.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Nhập số điện thoại"
                  id="soDienThoai"
                />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Tiêu đề đăng bài</span>
                </div>
                <input
                  onChange={(event) => {
                    this.setState({
                      tieuDeDangBai: event.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Nhập tên phòng"
                  id="tieuDe"
                />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Nội dung mô tả</span>
                </div>
                <input
                  onChange={(event) => {
                    this.setState({
                      noiDungMoTa: event.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Môi trường sống sạch , khu phố an ninh..."
                  id="noiDungMoTa"
                  value={this.state.noiDungMoTa}
                />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Thời gian mở cửa</span>
                </div>
                <input
                  onChange={(event) => {
                    this.setState({
                      thoiGianMoCua: event.target.value,
                    });
                    console.log(event.target.value);
                  }}
                  type="time"
                  placeholder="Giờ mở cửa"
                  id="openWindow"
                />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Thời gian gian đóng cửa</span>
                </div>
                <input
                  onChange={(event) => {
                    this.setState({
                      thoiGianDongCua: event.target.value,
                    });
                  }}
                  type="time"
                  placeholder="Giờ đóng cửa"
                  id="closeOpen"
                />
              </div>
            </div>
          </div>
          <div id="dangPhong">
            <div
              onClick={this.onClickDangPhong}
              className="btn btn-large btn-primary rounded"
            >
              <i className="fas fa-home" />
              <span className="fs-16 fw-400">Đăng Phòng</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
  onClickChangeIscheck = (tienIch: tienIchs) => {
    console.log(tienIch.title);
    let tienIchs = this.state.tienIch;
    for (let i = 0; i < tienIchs.length; i++) {
      if (tienIch.title === tienIchs[i].title) {
        // tienIchs[i].title = 'aaa'
        if (tienIch.ischeck === false) {
          tienIchs[i].ischeck = true;
        } else {
          tienIchs[i].ischeck = false;
        }
      }
    }
    this.setState({
      tienIch: tienIchs,
    });
  };

  handleChange = (newValue: string) => {};

  onClickReset = () => {
    this.setState({
      soLuongPhong: JSON.parse(JSON.stringify([undefined])),
      sucChua: JSON.parse(JSON.stringify([undefined])),
    });
  };
  onClickDangPhong = () => {
    //bước 1 : lấy dữ liệu từ local về
    //bước 2 : chuyển dữ liệu vừa sang array
    //bước 3 : push dữ liệu vừa lấy vô array
    //bước 4 : đưa local

    let room = {
      loaiPhong: this.state.loaiPhong,
      soLuongPhong: this.state.soLuongPhong,
      sucChua: this.state.sucChua,
      gioiTinh: this.state.gioiTinh,
      dienTich: this.state.dienTich,
      giaChoThue: this.state.giaChoThue,
      datCoc: this.state.datCoc,
      tienDien: this.state.tienDien,
      thanhPho: this.state.thanhPho,
      quan: this.state.quan,
      phuong: this.state.phuong,
      tenPhuong: this.state.tenDuong,
      soNha: this.state.soNha,
      hinhAnh: this.state.hinhAnhs,
      tienIch: this.state.tienIch,
      soDienThoai: this.state.soDienThoai,
      tieuDeDangBai: this.state.tieuDeDangBai,
      noiDungMoTa: this.state.noiDungMoTa,
      thoiGianMoCua: this.state.thoiGianMoCua,
      thoiGianDongCua: this.state.thoiGianDongCua,
      free: this.state.free,
    };
    /* var jsonDsPhong = localStorage.getItem("dsPhong");
    if (jsonDsPhong != null) {
      var jsonDsPhong = localStorage.getItem("dsPhong");
      
      dsPhong.push(room);
      localStorage.setItem("dsPhong", JSON.stringify(dsPhong));
    } */
    var dsPhong = localStorage.getItem('dsPhong');
    var jsonDsPhong =  JSON.parse(dsPhong || '{}');
    jsonDsPhong.push(room);
    localStorage.setItem('dsPhong',JSON.stringify(jsonDsPhong))
  };
}

type Props = {};
type State = {
  loaiPhong: string;
  soLuongPhong: number;
  sucChua: number;
  gioiTinh: string;
  dienTich: number;
  giaChoThue: number;
  datCoc: number;
  tienDien: number;
  thanhPho: string;
  quan: string;
  phuong: string; 
  tenDuong: string;
  soNha: string;
  hinhAnhs: hinhAnh[];
  tienIch: tienIchs[];
  soDienThoai: string;
  tieuDeDangBai: string;
  noiDungMoTa: string;
  thoiGianMoCua: string;
  thoiGianDongCua: string;
  free: boolean;
};
type tienIchs = {
  icon: string;
  title: string;
  ischeck: boolean;
};
type hinhAnh = {
  name: string;
  link: string;
  placeholder: string;
};
let dsPhong = new Array();

export default Form;
