import React, { FC } from "react";
import Nav from "../area/Nav"
import SideBar from "../area/sidebar/SideBar";
import LeftMenu from "../area/LeftMenu";
import Main from "../area/main/Main";
import RightMenu from "../area/rightMenu/RightMenu";
import "./Home.css";

const Home: FC = () => {
    return (
        <div className="screen-root-container home-container">
            <div className="navigation">
                <Nav />
            </div>
            <SideBar />
            <LeftMenu />
            <Main />
            <RightMenu />
        </div>
    );
};

export default Home;