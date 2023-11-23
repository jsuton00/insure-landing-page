import React from 'react';
import Header from '../components/Header';

const AccountPage = (props) => {
  const { width, isOpen, handleToggle, handleClose } = props;
  return (
    <div className="page account-page">
      <div className="page-content account-page-content container">
        <Header
          width={width}
          isOpen={isOpen}
          handleToggle={handleToggle}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default AccountPage;
