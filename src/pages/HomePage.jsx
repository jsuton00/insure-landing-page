import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import imageIntro from '../assets/images/image-intro-desktop.jpg';

const HomePage = (props) => {
  const { width, isOpen, handleToggle, handleClose } = props;

  let navigate = useNavigate();

  const onClick = () => {
    navigate({ pathname: '/plan' });
  };
  return (
    <div className="page home-page">
      <div className="page-content home-page-content container">
        <Header
          width={width}
          isOpen={isOpen}
          handleToggle={handleToggle}
          handleClose={handleClose}
        />
        <main className="page-main-content home-page-main-content">
          <div className="hero-section container">
            <div className="hero-section-text">
              <h1 className="hero-section-title">Humanizing your insurance</h1>
              <p className="hero-section-description">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>
              <div className="hero-section-button">
                <button
                  type="button"
                  className="view-plan-button"
                  onClick={onClick}
                >
                  View Plan
                </button>
              </div>
            </div>
            <div className="hero-section-image">
              <img src={imageIntro} alt="Image intro" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
