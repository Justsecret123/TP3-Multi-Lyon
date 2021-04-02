import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.component';
import Content from './components/content.component';



const Index = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));