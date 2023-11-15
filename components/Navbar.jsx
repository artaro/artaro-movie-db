import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import SearchBar from "./SearchBar";
import "@/styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        {/* <Image
        src={}
        alt="Artaro"
        width={}
        height={}/> */}
        <div className="route-items">
          <h1>ARTARO MOVIE DB</h1>
          <div className="nav-items">
            <NavbarItem label="Home" />
            <NavbarItem label="Favorite" />
          </div>
        </div>
        <div className="action-items">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
