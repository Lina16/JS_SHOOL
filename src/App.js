import React, { Component } from 'react';

//to connect redux with react
import {Provider} from 'react-redux'; 

import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/main/Landing';
import Movie from './components/main/Movie';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
        </Router>
      </Provider>
    );
  }
  }

export default App;
