import React from 'react';
import './App.css';
import ListRoomContainer from './container/ListRoomContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/ListRoomContainer">
              <ListRoomContainer />
            </Route>
            <Route path="/">
              <ListRoomContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
