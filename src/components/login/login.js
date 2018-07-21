import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
// import {ButtonAppBar} from '../layout/menu-top/menu-top.js';
class Login extends Component {
  notify = () => toast.success("Wow so easy !");
  render() {
    var self = this;
    return (
      <div>
          {/* <ButtonAppBar /> */}
		      <button onClick={this.notify}>Notify !</button>
          <ToastContainer />
          {self.a}
          <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default Login;
