import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './content/Home.js'
import ImageViewer from './ImageViewer.js';
import CSV from './content/CSV.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/image'>
          <ImageViewer />
        </Route>
        <Route exact path='/csv'>
          <CSV />
        </Route>
     </div>
    </Router>
  );
}

export default App;
