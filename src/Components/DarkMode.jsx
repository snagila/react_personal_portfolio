import React from "react";

export const DarkMode = () => {
  return (
    <div>
      <label htmlFor="darkMode" className="dark-mode-toggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper" id="Home"></div>
    </div>
  );
};
