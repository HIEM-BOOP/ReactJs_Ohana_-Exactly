import React, { Component } from "react";
import Filter from "../components/Filter";
import Heder from "../components/Heder";
import ListRoom from "../components/ListRoom";
import Search from "../components/Search";
import Room from "../components/Room";

class ListRoomContainer extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      listRoom: [],
      searchText: ''
    }
    var data = localStorage.getItem("dsPhong");
    var dsphong = JSON.parse(data || "{}");
    this.state = {
      listRoom: dsphong,
      searchText: ''

    }

    console.log(this.state.listRoom);
  }

  render() {
    return (
      <div>
        <Heder></Heder>
        <Search
          searchText={this.state.searchText}
          onChangeTextSearch={(newTextSearch) => {
            this.setState({
              searchText: newTextSearch
            })
            console.log(this.state.searchText);
            const layPhong = localStorage.getItem('dsPhong');
            // Chuyển danh sách về dang thường []
            var listRoom = JSON.parse(layPhong || "{}");
            console.log(listRoom);
            // Tạo mảng rổng để chứa phần tìm kiếm có đúng giá trị đang tìm

            var danhSachTimKiem = [];



            // Chạy vòng lặp trong mảng lisRoom để kiểm tra người dùng nhập có trong mảng lisRoom hay ko 

            if (this.state.searchText.length == 0) {
              const layPhong = localStorage.getItem('dsPhong');
              // Chuyển danh sách về dang thường []
              var listRoom = JSON.parse(layPhong || "{}");
              danhSachTimKiem = listRoom
            } else {

              for (let i = 0; i < listRoom.length; i++) {
                if (listRoom[i].tieuDeDangBai.includes(this.state.searchText) === true) {
                  danhSachTimKiem.push(listRoom[i])
                  console.log(danhSachTimKiem);

                }

              }
            }




            this.setState({
              listRoom: danhSachTimKiem
            })




          }}

        ></Search>
        <div className="container">
          <Filter></Filter>
          <ListRoom
            rooms={this.state.listRoom}
          ></ListRoom>
        </div>
      </div>
    );
  }
}


type State = {
  listRoom: Room[]
  searchText: string
}

export default ListRoomContainer;
