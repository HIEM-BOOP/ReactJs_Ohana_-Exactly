import React from 'react';
import './App.css';
import ListRoomContainer from './container/ListRoomContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateRoom from './container/CreateRoom';



function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
          <Route path="/">
              <ListRoomContainer />
            </Route>
            <Route path="/ListRoomContainer">
              <ListRoomContainer />
            </Route>
            <Route path="/CreateRoom">
              <CreateRoom/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
