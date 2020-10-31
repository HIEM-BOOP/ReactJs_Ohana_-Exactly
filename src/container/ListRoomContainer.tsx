import React, { Component } from "react";
import Filter from "../components/Filter";
import Heder from "../components/Heder";
import ListRoom from "../components/ListRoom";

class ListRoomContainer extends Component {
  render() {
    return (
      <div>
        <Heder></Heder>

        <div className="container">
          <Filter></Filter>
          <ListRoom></ListRoom>
        </div>
      </div>
    );
  }
}

export default ListRoomContainer;
