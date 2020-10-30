import React, { Component } from 'react';
import Filter from '../components/Filter';
import Heder from '../components/Heder';
import ListRoom from '../components/ListRoom';

class CreateRoom extends Component {
    render() {
        return (
            <div>
                <Heder></Heder>
                <ListRoom></ListRoom>
                <Filter></Filter>
            </div>
        );
    }
}

export default CreateRoom;