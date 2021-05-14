import React from 'react';
import ReactDOM from 'react-dom';
import Datachat from "./components/datachat.component";
import CustomAppBar from "./components/custom-appbar.component";

const Index = () => {
  return (
    <div className="container">
      <CustomAppBar/>
      <Datachat />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));