import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import Predict from './Predict';

//main function that runs the entire website.
function App() {
  const [page, setPage] = useState('Home');

  const handleNavigation = (page) => {
    setPage(page);
  };
//decision statements to navigate between the pages
  let currentPage;
  if (page === 'Home') {
    currentPage = <Home />;
  } else if (page === 'About') {
    currentPage = <About />;
  } else if (page === 'Predict') {
    currentPage = <Predict />;
  }
//Navigation bar declared globally to maintain the traversal of Navigation.
  return (
    <div className="App">
      <NavigationBar onNavigate={handleNavigation} />
      {currentPage}
    </div>
  );
}

export default App;

