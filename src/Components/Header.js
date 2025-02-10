import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import githublogo from "../utils/images/github-logo.png"

function Header() {

  return(
  <div id="header">
    <div id="header-top">
      <img src={githublogo} alt="Github" />
      <h2>GITHUB Profile Viewer</h2>
    </div>
  </div>
  )
}

export default Header;
