import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";
import UserAction from "./UserAction";
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
        <div className="route-wrapper">
          <h1>ARTARO MOVIE DB</h1>
          <div className="nav-items">
            <NavbarItem label="Home" />
            <NavbarItem label="Favorite" />
          </div>
        </div>
        <div className="action-wrapper">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <UserAction />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
