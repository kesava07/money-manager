import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import Heading from "../Heading/Heading";
import "./Navbar.css";

function Navbar() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className="navigation-menu shadow">
      <Heading title={`Hello ${user.name}`} />
      <small>Welcome to your money manager</small>
    </div>
  );
}

export default React.memo(Navbar);
