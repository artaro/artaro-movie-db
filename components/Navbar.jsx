import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";
import "@/styles/Navbar.scss";

const Navbar = (props) => {
  const { searchValue, setSearchValue } = props;
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
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
