import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import $ from "jquery";

/* eslint-disable */
// pick utils
// import {ButtonAppBar} from '../layout/menu-top/menu-top.js';
class Login extends Component {
  notify = () => toast.success("Wow so easy !");

  constructor(props) {
  super(props);
    this.state = {
          loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function(e){

    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(function (response) {
    //   // this.setState({
    //   //   loading: true
    //   // });
    //   console.log(this.state.loading)
    //   console.log("asdasd")
    //   console.log(response.data);
      
    // })
    // .catch(function (error) {
    // })
    // $.ajax({
    //   url: "https://jsonplaceholder.typicode.com/posts",
    //   method: "GET",
    //   success: function(result){
    //     this.setState({
    //       loading: true
    //     });
    //   }
    // });
    this.setState({ loading: true });
    axios({
      method:'get',
      url:'https://jsonplaceholder.typicode.com/photos',
      headers: {'Content-Type': 'application/json'},
    })
    // .then(function(response) {
    //   this.setState({
    //     loading: true
    //   });
    // });
    .then((response)=> {
      this.setState({loading: false});
    }).catch((error) =>{

    }).finally(()=>{
      this.setState({loading: false});
    })
  }
  render() {
    var self = this;
    return (
      <div >
		      <button onClick={this.notify}>Notify !</button>
          <ToastContainer />
          {self.state.loading}
          <Button color="danger" onClick={self.handleClick}>Danger!</Button>
      </div>
   
    );
  }
}

export default Login;
