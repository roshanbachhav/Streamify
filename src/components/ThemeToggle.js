import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/configureSlice";

const ThemeToggle = () => {
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);
  const dispatch = useDispatch();
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={darkTheme}
          className="theme-input"
          onChange={() => {
            dispatch(toggleTheme());
          }}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
