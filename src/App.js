import React from 'react';
//import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
//import Footer from './components/Footer';
//import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import ErrorLogin from './components/ErrorLogin';


function App() {
  return (
    <Router>
      <div>
      
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/login" component = {Login}/>
        <Route path = "/register" component = {Register}/>
        <Route path = "/dashboard/:username" component = {Dashboard}/>
        <Route path = "/errorLogin" component = {ErrorLogin}/>
        
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
