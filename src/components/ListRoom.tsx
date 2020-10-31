import React, { Component } from 'react';
import Room from './Room';
import Search from './Search';

class ListRoom extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    var data = localStorage.getItem("dsPhong");
    var dsphong = JSON.parse(data || "{}");
    this.state = { rooms: dsphong, search: "" };
  }
  render() {

    return (
      <div>
        <div className="listRoom">
          <Search></Search>
          <div className="ketQua">
            <span className="fs-26">Kết quả</span>
          </div>
          {
            this.state.rooms.map((item: any) => {
              return (
                <Room></Room>
                
              )
            })
          }
        </div>
      </div >
    );
  }
}
type State = {
  rooms: any[];
  search: string;
};

export default ListRoom;
