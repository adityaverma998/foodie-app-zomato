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
import Header from "./components/Header";
import Footer from './components/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
function App() {
  return (
    <Router>
      
      <Header/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/login" component = {Login}/>
        <Route path = "/register" component = {Register}/>
        <Route path = "/dashboard/:username" component = {Dashboard}/>
        <Route path = "/errorLogin" component = {ErrorLogin}/>
        
        
      </Switch>
      <Footer/>
   
    </Router>
  );
}

export default App;
