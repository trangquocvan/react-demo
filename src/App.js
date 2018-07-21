import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/login/login.js';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import MenuAppBar from './components/layout/menu-top/menu-top';
import './App.css';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
const theme = createMuiTheme({
  palette: {
    // primary: purple,
    primary: {
      main: '#e91e63',
    },
  },
});
class App extends Component {
  render() {
    return (
    <div className="container-fluid">
     <MuiThemeProvider theme={theme}>
      <MenuAppBar />
      <div className="row">  
        <Switch>
            <Route exact path='/login' component={Login}/>
        </Switch>      
      </div>
    </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
