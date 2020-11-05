import React, { Component } from 'react';
import Room from './Room';

class ListRoom extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
    var data = localStorage.getItem("dsPhong");
    var dsphong = JSON.parse(data || "{}");
    this.state = { 
      rooms: dsphong, 
     
    };
  }
  render() {

    return (
     
      <div>
        <div className="listRoom">
          
          <div className="ketQua">
            <span className="fs-26">Kết quả</span>
          </div>
          {
            this.props.rooms.map((item: any) => {
              return (
                <Room 
                  room = {item}
                ></Room>
              )
            })
          }
        </div>
      </div >
    );
  }
}
type Props = {
  rooms: Room[];
 
};

export default ListRoom;
