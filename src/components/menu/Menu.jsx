import React from 'react';
import './Menu.scoped.css';

function Menu({ isShown, children }) {
  return (
    <div className="menu" style={{ display: (isShown ? 'block' : 'none') }}>
      <div className="menu__content">{children}</div>
    </div>
  );
}

export default Menu;
