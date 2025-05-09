import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="main-container">
      <h1>Clothing Store</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/women">Women</Link> |{" "}
        <Link to="/men">Men</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
