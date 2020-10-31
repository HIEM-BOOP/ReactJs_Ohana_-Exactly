import React, { Component } from 'react'

export default class Room extends Component {
  render() {
    return (
      <div className="right_frame">
        <div id="showPhong">
          <div
            className="anhPhong"
            style={{
              background:
                'url("https://nguoinoitieng.tv/images/nnt/101/0/bfrd.jpg") no-repeat center center/cover',
            }}
          >
           
          </div>
          <div className="thongTin">
            <div className="title">
              <p className="fs-20">""</p>
            </div>
            <div className="thongTinChiTiet">
              <div className="chiTietPhong">
                <div className="loaiPhong">
                  <i className="fas fa-home"></i>
                  <span>""</span>
                </div>
                <div className="gt_kichThuoc">
                  <div className="gioiTinh">
                    <i className="fas fa-venus-mars"></i>
                    <span>""</span>
                  </div>
                  <div className="kichThuoc">
                    <i className="fas fa-ruler"></i>
                    <span>""m²</span>
                  </div>
                </div>
                <div className="diaChi">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>""</span>
                </div>
              </div>
              <div className="gia">
                <span className="fs-48 ">""</span>
                <span className="fs-20">tr/phòng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
