import React from 'react';
import ReactDOM from 'react-dom';
// Import de l'image
import LOGO from './logo/logo.png';
import Header from './components/Header/index.jsx';
import Content from './components/Content/index.jsx';


const Index = () => {
  return (
    <div className="container">
      // Utilisation
      <img src={LOGO} alt="Logo" />
      <Header />
      <Content />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));