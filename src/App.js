import React from 'react';
import Navbar from './components/Navbar/Navbar';

import classes from './App.module.css'

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.radioBox}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
