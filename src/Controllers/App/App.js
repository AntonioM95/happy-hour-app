import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from '../Main/Main';
import NavigationBar from '../Navigation/NavigationBar';
import SideBar from '../SideBar/SideBar';
import StartSearch from '../../Components/StartSearch/StartSearch';
import '../../HappyHour-registry'
class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        navigationBar: null,
        mainPanel: null,
        openModal: false,
        openSideBar: false,
        
      }
    }

render(){
  return (
    <Router>
      <Switch>
        <Main></Main>
      {/* <div className="App">
      <div className='container'>
      <NavigationBar></NavigationBar>
      {/* <StartSearch></StartSearch> */}
      {/* <Main ></Main>
      
        </div>
      
      </div> */} */}
      </Switch>
    </Router>
  );
}
}

export default App;
