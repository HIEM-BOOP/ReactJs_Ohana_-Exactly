import React, { Component } from 'react';
import { FaSearchLocation } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
class Search extends Component {
  render() {
    return (
      <div>
        <div id="search">
          <FaMapMarkedAlt />
          <select name="tinhThanh" id="tinhThanh">
            <option value="TP.HCM">TP.HCM</option>
            <option value="TP Hà Nội">TP Hà Nội</option>
          </select>
          <input
            type="text"
            className="timKiem fs-16 fm-400"
            id="timKiem"
            placeholder="Tìm Kiếm theo địa điểm, quận,tên đường..."
          />
          <FaSearchLocation />
        </div>
      </div>
    );
  }
}

export default Search;