import React from "react";

export default function MainHeader({ ...props }) {
 
  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        < a className="main-header__link" href="https://github.com/ShkredovDmitriy/ds-react-starter" target="_blank" />
      </div>
    </header>
  );
}
