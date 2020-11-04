import React, { Component } from 'react';
import { FaSearchLocation } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
class Search extends Component <Props,{}> {
 

  render() {
    return (
      <div className = "khung-Tim-Kiem">
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
            onChange = {(even) => {
              this.props.onChangeTextSearch(even.target.value)
            }}
            value = {this.props.searchText}
            
            />
          <FaSearchLocation />
        </div>
      </div>
    );
  }
}
type Props = {
    searchText : string,
    onChangeTextSearch(newTextSearch : string) : void,
}


export default Search;