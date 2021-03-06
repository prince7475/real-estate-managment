import React, { Component } from 'react'
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol,
    Link,
    MDBInput
} from "mdbreact";
export default class AddHouse extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                    <h2>Add House Info</h2>
                    <Link to='/dashboard'><MDBBtn>Dashboard</MDBBtn></Link>
                    <MDBInput label="Address" />
                    <MDBInput label="State" />
                    <MDBInput label="Zip Code" />
                    <MDBInput label="Number of rooms" />
                    <MDBBtn>Add House</MDBBtn>
                </MDBContainer>
            </div>
        )
    }
}
