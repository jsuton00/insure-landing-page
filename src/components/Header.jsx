import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import Navbar from './Navbar';
import ToggleButton from './ToggleButton';
import NavModal from './NavModal';

const Header = (props) => {
  const { width, isOpen, handleToggle, handleClose } = props;

  const onClick = () => {
    return handleClose();
  };
  return (
    <>
      <header className="header">
        <div className="header-row">
          <div className="header-brand-section">
            <Link to="/" className="header-brand-link">
              <img src={logo} alt="logo" className="brand-logo" />
            </Link>
          </div>
          {width > 992 ? (
            <Navbar />
          ) : (
            <ToggleButton
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleClose={handleClose}
            />
          )}
        </div>
      </header>
      {isOpen === true ? (
        <NavModal width={width} handleClose={handleClose} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
