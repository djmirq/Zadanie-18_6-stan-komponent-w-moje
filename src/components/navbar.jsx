import React from "react";

//Stateless Functional Commponent
const NavBar = props => {
  //sfc

  console.log('Navbar - Rendered')

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
