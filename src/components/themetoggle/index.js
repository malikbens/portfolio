import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-simple.svg";
import WhiteLogo from "../../assets/images/whitelogo.svg";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const [lightMode, setLightMode] = React.useState(false);
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <img
        className="mode-switch ml-auto"
        onClick={() => setLightMode(prevMode => !prevMode)}
        src={lightMode ? Logo : WhiteLogo}
        alt="lightning-bolt"
        height="30px"
      />
    </div>
  );
};

export default Themetoggle;
