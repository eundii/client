import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HeaderWrap,
  HeaderNav,
  HeaderSubMenu,
  HeaderInner,
} from "../styles/HeaderCss";
import { useSelector } from "react-redux";
import firebase from "../firebase";

function Header() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };
  return (
    <HeaderWrap>
      <HeaderInner>
        <h1>
          <Link to="/">Eundii Coummunity</Link>
        </h1>
        <HeaderNav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </HeaderNav>
        <HeaderSubMenu>
          <ul>
            <li>
              {user.accessToken ? (
                <button type="button" onClick={() => LogoutHandler()}>
                  logout
                </button>
              ) : (
                <Link to="/login">login</Link>
              )}
            </li>
            <li>
              <Link to="/register">sign up</Link>
            </li>
          </ul>
        </HeaderSubMenu>
      </HeaderInner>
    </HeaderWrap>
  );
}

export default Header;
