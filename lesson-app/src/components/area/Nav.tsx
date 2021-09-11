import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
// import ReactModal from "react-modal";
// import SideBarMenus from "./sidebar/SideBarMenus";

const Nav = () => {
    const { width } = useWindowDimensions()
    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon
                    icon={faBars}
                    size="lg"
                    className="nav-mobile-menu"
                />
            );
        }
        return null;
    };
    return (
        <nav className="navigation">
            {getMobileMenu()}
            <strong>SuperForum</strong>
        </nav>
    )
}
export default Nav