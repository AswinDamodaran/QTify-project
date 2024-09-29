import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo";
import Search from "../Search/Search"
import Button from "../Button/Button";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      <Button />
    </nav>
  );
}

export default Navbar;