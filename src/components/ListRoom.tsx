import React, { Component } from 'react';
import Room from './Room';
import Search from './Search';

class ListRoom extends Component {
  render() {
    return (
      <div>
        <div className="listRoom">
          <Search></Search>
          <div className="ketQua">
            <span className="fs-26">Kết quả</span>
          </div>
          <Room></Room>
          <Room></Room>
          <Room></Room>
          <Room></Room>
        </div>
      </div>
    );
  }
}

export default ListRoom;