import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function Menu({ onToggle, isOpen }) {
  const list = ['HOME', 'PROJECTS', 'HISTORY', 'CONTACT'];
  const menuClass = ['menu-wrapper'];
  const menuName = ['menu-name'];

  if (isOpen) {
    menuClass.push('open');
    menuName.push('rotation');
  }
  return (
    <div className="menu">
      <div className={menuClass.join(' ')}>
        {isOpen ? (
          <CloseIcon onClick={onToggle} className="menu-btn"></CloseIcon>
        ) : (
          <MenuIcon onClick={onToggle} className="menu-btn"></MenuIcon>
        )}
      </div>
      <div className={menuName.join(' ')}>
        {isOpen ? (
          <div className= "menu-name-content">
            {list.map((item) => (
              <a href="">{item}</a>
            ))}
          </div>
        ) : (
          <div className="menu-name-item">{list[2]}</div>
        )}
      </div>
    </div>
  );
}
