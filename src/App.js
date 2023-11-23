import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useToggle } from './hooks/useToggle';
import { useViewportContext } from './hooks/useViewport';
import HomePage from './pages/HomePage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import BlogPage from './pages/BlogPage';
import ViewPlanPage from './pages/ViewPlanPage';
import AccountPage from './pages/AccountPage';

const App = () => {
  const [width] = useViewportContext();
  const [isOpen, handleToggle, handleClose] = useToggle();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              width={width}
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path="/howWeWork"
          element={
            <HowWeWorkPage
              width={width}
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage
              width={width}
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path="/account"
          element={
            <AccountPage
              width={width}
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path="/plan"
          element={
            <ViewPlanPage
              width={width}
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleClose={handleClose}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
