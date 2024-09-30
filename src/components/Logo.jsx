import React from "react";
import LogoImage from "../materials/qtify.svg";

export default function Logo() {
  return  <img src={LogoImage} alt="logo" height={"34px"} width={"67px"} style={{marginLeft:"20px",display:"block",alignItems:"center"}} />;
}
