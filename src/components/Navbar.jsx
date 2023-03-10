import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Navbar = () => {
  const address = useAddress();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Main
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/onlycollab">
                OnlyCollab
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/collabNFT">
                CollabNFT
                </Link>
              </li>
            </ul>
          </div>
            <div>
            <ConnectWallet />
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
