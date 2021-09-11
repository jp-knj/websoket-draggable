import React from 'react';
import './App.css';

import Nav from "./components/Nav"
import SideBar from "./components/area/sidebar/SideBar";
import LeftMenu from "./components/area/LeftMenu";
import Main from "./components/Main"
import RightMenu from "./components/RightMenu";

function App() {
  return (
    <div className="App">
        <Nav />
        <SideBar />
        <LeftMenu />
        <Main />
        <RightMenu />
    </div>
  );
}

export default App;
