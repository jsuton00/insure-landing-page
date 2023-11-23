import React from 'react';
import Header from '../components/Header';

const ViewPlanPage = (props) => {
  const { width, isOpen, handleToggle, handleClose } = props;
  return (
    <div className="page viewPlan-page">
      <div className="page-content viewPlan-page-content container">
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

export default ViewPlanPage;
