import React from 'react';
import Header from '../components/Header';

const BlogPage = (props) => {
  const { width, isOpen, handleToggle, handleClose } = props;
  return (
    <div className="page blog-page">
      <div className="page-content blog-page-content container">
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

export default BlogPage;
