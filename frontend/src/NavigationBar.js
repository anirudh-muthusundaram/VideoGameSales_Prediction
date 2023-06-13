import React from 'react';
import './NavigationBar.css';

//Function that declares the Navigation Bar.
//Contains all necessary elements to direct the webpages.
function NavigationBar(props) {
  const handleNavigate = (page) => {
    props.onNavigate(page);
  };

  return (
    <nav className="navigation-bar">
      <div className="navigation-items">
        <div className="title">
          <button className="navigation-button" onClick={() => handleNavigate('Home')}>
            Home
          </button>
        </div>
        <ul className="navigation-items">
          <li className="navigation-item">
            <button className="navigation-button" onClick={() => handleNavigate('About')}>
              About
            </button>
          </li>
          <li className="navigation-item">
            <button className="navigation-button" onClick={() => handleNavigate('Predict')}>
              Predict
            </button>
          </li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button type="submit">Go</button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

