import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-background"></div>
      <div className="loader">
        <div className="loader-inner"></div>
      </div>
      <div className="loader-text">Loading<br/>Please wait</div>
    </div>
  );
};

export default Loader;
