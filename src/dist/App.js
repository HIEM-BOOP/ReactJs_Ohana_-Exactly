"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var ListRoomContainer_1 = require("./container/ListRoomContainer");
var react_router_dom_1 = require("react-router-dom");
var CreateRoom_1 = require("./container/CreateRoom");
function App() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_router_dom_1.Switch, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/" },
                        react_1["default"].createElement(ListRoomContainer_1["default"], null)),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/ListRoomContainer" },
                        react_1["default"].createElement(ListRoomContainer_1["default"], null)),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/CreateRoomPage" },
                        react_1["default"].createElement(CreateRoom_1["default"], null)))))));
}
exports["default"] = App;
