import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './content/Home.js';
import ImageViewer from './ImageViewer.js';
import TrainStudy from './content/TrainStudy.js';
import Predict from './content/Predict.js';
import TrainImage from './content/TrainImage.js';

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
        <Route exact path='/trainstudy'>
          <TrainStudy />
        </Route>
        <Route exact path='/samplesub'>
          <Predict />
        </Route>
        <Route exact path='/trainimage'>
          <TrainImage/>
        </Route>
     </div>
    </Router>
  );
}

export default App;
