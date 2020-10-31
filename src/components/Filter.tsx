import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <div >
                <div className="left_frame">

                    <ul className="fs-24 fw-400">
                        <li className="fs-24 ">
                            Bộ Lọc <button type="button"
                                className="btn rounded btn-outline-primary rd-15 text-primary btn-link fs-16 "><span>Áp
                                    Dụng</span></button>
                        </li>
                        <li className="fs-20">Giá</li>
                        <li className="fs-20">Tiện ích</li>
                        <li className="fs-20">Loại phòng</li>
                        <li className="fs-20">Giới tính </li>
                        <li className="fs-20 text-primary">Áp dụng</li>
                    </ul>
                </div>
      </div>
      </div>
    );
  }
}

export default Filter;