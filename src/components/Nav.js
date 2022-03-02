import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <section>
          <Link to="/">Dashboard</Link>
          <Link to="/posts">Posts</Link>
        </section>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
