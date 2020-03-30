import React, { Component } from 'react'
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol,
    Link,
    MDBInput
} from "mdbreact";
export default class EditHouseInfo extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                    <h2>Edit House Info</h2>
                    <Link to='/houseInfo/1'><MDBBtn>House Info</MDBBtn></Link>
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
