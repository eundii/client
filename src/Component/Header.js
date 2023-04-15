import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      Header
      <nav>
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
