import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import $ from "jquery";
import CircularIndeterminate from '../common/loading/loading';

/* eslint-disable */
// pick utils
// import {ButtonAppBar} from '../layout/menu-top/menu-top.js';
class Login extends Component {
  notify = () => toast.success("Wow so easy !");

  constructor(props) {
  super(props);
    this.state = {
      loading: false,
      data:[]
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
    $("body").addClass("pointer-loading");
    // .then(function() {
    //   this.props.didSelect(this.state.loading);
    //     console.log(this.state.loading)
    //   this.props.callBackParentUpdate(this.state.loading);
    // }.bind(this));;
    
    axios({
      method:'get',
      url:'https://jsonplaceholder.typicode.com/photos',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwibmFtZSI6InVzZXIiLCJhdXRoIjoiVVNFUiIsImV4cCI6MTUzMjM5ODI4M30.az0-KeqC1V0BrVR0cUDiTsCCPVPzgt--ttoeDqhb8Igog7Q4fDuV2uYYUEXcvbHPgtT6hIEX8oPUTeR5mOIcCw"
      },
    })
      .then((response)=> {
      // this.setState({loading: false});
      this.state.data = response.data;
      console.log(this.state.data)
    }).catch((error) =>{

    }).finally(()=>{
      this.setState({loading: false});
      $("body").removeClass("pointer-loading");
    })
  }
  render() {
    var self = this;
    return (
      <div className={this.state.loading ? 'pointer-loading': ''}>
		      <button onClick={this.notify}>Notify !</button>
          <ToastContainer />
          {self.state.loading}
          <Button color="danger" onClick={self.handleClick}>Danger!</Button>
          {this.state.loading ? <CircularIndeterminate /> : null}
          <table className="table table-striped">
            <thead>
              <tr>
              <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item,index) => (
              <tr key={index}>
                  <td >{item.title}</td>
              </tr>
              ))}
            </tbody>
          </table>
      </div>
   
    );
  }
}

export default Login;
