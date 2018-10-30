import React, { Component } from 'react';
import './App.css';
import { QuestionPanel } from './components/QuestionPanel';
import { NavBar } from './components/NavBar';
import { Register } from './components/Register';
import { Route, Link } from 'react-router-dom';
import {Login} from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <NavBar />
            <Route path="/test" component={QuestionPanel} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </header>
        </div>
    );
  }

  handleChange(event) {
    this.setState({
      minutes: event.target.value
    });
  }
}

export default App;
