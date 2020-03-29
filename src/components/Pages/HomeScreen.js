import React, { Component } from 'react'
import {
    MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,
    MDBCardTitle, MDBIcon, MDBModal, MDBModalBody,
    MDBModalHeader, MDBModalFooter,
    MDBInput
} from "mdbreact";
export default class HomeScreen extends Component {

    state = {
        loginModal: false,
        signUpModal: false
    }

    loginToggle = () => {
        this.setState({
            ...this.state,
            loginModal: !this.state.loginModal
        })
    }

    loginSubmit = () => {
        console.log("submit login")
    }

    signUpToggle = () => {
        this.setState({
            ...this.state,
            signUpModal: !this.state.signUpModal
        })
    }

    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <MDBJumbotron style={{ padding: 0 }}>
                                <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                                    <MDBCol className="py-5">
                                        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Property Management</MDBCardTitle>
                                        <MDBBtn onClick={this.loginToggle} outline color="white" className="mb-5"><MDBIcon icon="sign-in-alt" className="mr-2"></MDBIcon>Login</MDBBtn>
                                        <MDBBtn onClick={this.signUpToggle} outline color="white" className="mb-5"><MDBIcon icon="scroll" className="mr-2"></MDBIcon>Sign up</MDBBtn>
                                    </MDBCol>
                                </MDBCol>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>

                    {/* Log in modal  */}
                    <MDBModal isOpen={this.state.loginModal} toggle={this.loginToggle}>
                        <div className="text-center pt-4">
                            <h2>Login </h2>
                        </div>
                        <MDBModalBody>
                            <MDBInput label="Email" />
                            <MDBInput label="Password" />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.loginToggle}>Close</MDBBtn>
                            <MDBBtn color="primary" onClick={this.loginSubmit}>Login</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>



                    {/* sign up in modal  */}
                    <MDBModal isOpen={this.state.signUpModal} toggle={this.signUpToggle}>
                        <div className="text-center pt-4">
                            <h2>Sign up </h2>
                        </div>
                        <MDBModalBody>
                            <MDBInput label="First Name" />
                            <MDBInput label="Last Name" />
                            <MDBInput label="Email" />
                            <MDBInput label="Password" />
                            <MDBInput label="Confirm Password" />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.signUpToggle}>Close</MDBBtn>
                            <MDBBtn color="primary" onClick={this.loginSubmit}>Create account</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>


            </div>

        )
    }
}
