import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import {FaAngleDoubleDown} from "react-icons/fa";
class Heder extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <div className="canGiua">
            <div className="hf_center">
              <div className="hr_left ">
                <div className="item">
                  <FaHome />
                  &nbsp;
                  <span>Đăng phòng dễ dàng</span>
                </div>

                <div className="item">
                  <FaAngleDoubleDown />
                  &nbsp;
                  <span>Tải APP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Logo */}

          <div className="menu">
            <div className="hf_below">
              <div className="hf_center">
                <div className="hf_LgSh">
                  <div id="logo">
                    <img
                      src="https://www.ohanaliving.vn/8cc95480cbd2708db10ad4b8de56306a.svg"
                      alt="#"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Heder;
