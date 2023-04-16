import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrap,
  HeaderNav,
  HeaderSubMenu,
  HeaderInner,
} from "../styles/HeaderCss";

function Header() {
  return (
    <HeaderWrap>
      <HeaderInner>
        <h1>
          <Link to="/">Eundii Board</Link>
        </h1>
        <HeaderNav>
          <ul>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </HeaderNav>
        <HeaderSubMenu>
          <ul>
            <li>
              <Link to="">login</Link>
            </li>
            <li>
              <Link to="">sign up</Link>
            </li>
          </ul>
        </HeaderSubMenu>
      </HeaderInner>
    </HeaderWrap>
  );
}

export default Header;
