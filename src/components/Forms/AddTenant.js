import React, { Component } from 'react'
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol,
    Link,
    MDBInput
} from "mdbreact";
export default class  extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                <Link to='/houseInfo/2'><MDBBtn>House Info</MDBBtn></Link>
                    <MDBInput label="First name" />
                    <MDBInput label="Last name" />
                    <MDBInput label="Email" />
                    <MDBInput label="Temp Password" />
                    <MDBBtn>Add Tenant</MDBBtn>
                </MDBContainer>
            </div>
        )
    }
}
