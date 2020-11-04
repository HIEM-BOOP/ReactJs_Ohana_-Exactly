import React, { Component } from 'react'
import { Room as RoomModel } from "../model/Room"
import { AiOutlineHome } from "react-icons/ai";
import { FaTransgenderAlt } from 'react-icons/fa';
import { FaRulerHorizontal } from 'react-icons/fa';
import { FaMapMarked } from 'react-icons/fa';




/* export default  */class Room extends Component<Props, {}> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
    
  }
  render() {
    
    return (
      
      <div className="right_frame">
        <div id="showPhong">
          <div
            className="anhPhong"
            style={{
              
              background: `url(${this.props.room.hinhAnh[0].link}) no-repeat center center/cover`
              
            }}
            >
                
          </div>
          <div className="thongTin">
            <div className="title">
              <p className="fs-20">{this.props.room.tieuDeDangBai}</p>
            </div>
            <div className="thongTinChiTiet">
              <div className="chiTietPhong">
                <div className="loaiPhong">
                  <AiOutlineHome/>
                  <span>{this.props.room.loaiPhong}</span>

                </div>
                <div className="gt_kichThuoc">
                  <div className="gioiTinh">
                    <FaTransgenderAlt/>
                    <span>{this.props.room.gioiTinh}</span>
                  </div>
                  <div className="kichThuoc">
                    <FaRulerHorizontal/>
                    <span>{this.props.room.dienTich}m²</span>
                    
                  </div>
                </div>
                <div className="diaChi">
                  <FaMapMarked/>
                  <span>{this.props.room.tenPhuong}</span>
                </div>
              </div>
              <div className="gia">
                <span className="fs-48 ">{this.props.room.giaChoThue}</span>
                <span className="fs-20">tr/phòng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// console.log();
type Props = {
  room: RoomModel;
}
export default Room;
