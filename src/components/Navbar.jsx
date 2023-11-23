import React from 'react';
import { NAV_ITEM_LINKS } from '../constants/navItemLinks';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { width, handleClose } = props;

  const onClick = () => {
    return handleClose();
  };
  return (
    <nav
      className={`header-navbar-section ${
        width > 992 ? '' : 'header-navmenu-section'
      }`}
    >
      {NAV_ITEM_LINKS.length > 0 &&
        NAV_ITEM_LINKS.map((link) => {
          return (
            <Link
              key={link.navItemLink}
              onClick={onClick}
              to={`${link.navItemLink}`}
              className={`nav-item-link ${
                link.navItemLink === '/plan'
                  ? 'nav-item-link-plan'
                  : 'nav-item-link'
              }`}
            >
              <div className="nav-item">
                <p className="nav-item-text">{link.navItemLinkText}</p>
              </div>
            </Link>
          );
        })}
    </nav>
  );
};

export default Navbar;
