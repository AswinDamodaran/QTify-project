import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo";
import Search from "../Search/Search"
import Button from "../Button/Button";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar} style={{alignItems:"center"}}>
      <div><Logo  className={styles.logo} /></div>
      <div><Search /></div>
      <div><Button /></div>
    </nav>
  );
}

export default Navbar;