import React from 'react';
import './App.scss';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import Divider from '../Divider';

function App() {
  return (
    <div className="App">
        <Header />
          <Divider />
        <Body />
          <Divider />
        <Footer />
    </div>
  );
}

export default App;
