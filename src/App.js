import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
        <div className='background-color'>
          <Main/>
        </div>
    );
  }
}

export default App;
