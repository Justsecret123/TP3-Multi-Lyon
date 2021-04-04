import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.component';
import Content from './components/content.component';
import Datachat from "./components/datachat.component";



const Index = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <Datachat />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));