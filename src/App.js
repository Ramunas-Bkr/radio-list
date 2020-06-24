import React from 'react';
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import DB from './assets/db.json';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.radioBox}>
        <Navbar />
        <List 
          radioStationList={DB.radioStationList}
        />
      </div>
    </div>
  );
}

export default App;
