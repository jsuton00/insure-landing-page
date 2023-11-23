import React from 'react';
import Header from '../components/Header';

const HowWeWorkPage = (props) => {
  const { width, isOpen, handleToggle, handleClose } = props;
  return (
    <div className="page howWeWork-page">
      <div className="page-content howWeWork-page-content container">
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

export default HowWeWorkPage;
