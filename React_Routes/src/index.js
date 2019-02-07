import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route} from 'react-router-dom';
class Home extends Component{
  render(){
    return(
      <Router>
    <div>
      <NavBar />
      <Route path="/happy" component={Happy}></Route>
      <Route path="/sleepy" component={Sleepy}></Route>
      <Route path="/guilty" component={Guilty}></Route>
      </div>
    </Router>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
