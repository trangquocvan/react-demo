
/**
 * import css
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/**
 * Import Library
 */
import $ from "jquery";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import purple from '@material-ui/core/colors/purple';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';

/**
 * Import Component
 */
import Login from './components/login/login';
import MenuAppBar from './components/layout/menu-top/menu-top';
import CircularIndeterminate from './components/common/loading/loading';
/**
 * Logo
 */
import logo from './logo.svg';

const theme = createMuiTheme({
  palette: {
    // primary: purple,
    primary: {
      main: '#e91e63',
    },
  },
});

class App extends Component {
  constructor(props) {
  super(props);
      this.state = {
          loading: false,
      };
      this.loading = this.loading.bind(this);
  }

  loading = function(data){
    console.log(data)
    this.setState({loading: data});
  }
  render() {
    return (
    <div className="container-fluid" >
    <div className= {this.state.loading ? 'pointer-loading' : ''} >
      <MuiThemeProvider theme={theme}>
        <MenuAppBar />
        <div className="row margin-auto">  
          <div className="col-md-12 col-lg-12 col-xl-12">
            {/* <Switch>
                <Route exact path='/login' component={Login} />
            </Switch>       */}
            <Login callBackParentUpdate={this.loading}/>
          </div>
          {this.state.loading}
        </div>
      </MuiThemeProvider>
    </div>
    </div>
    );
  }
}

export default App;
