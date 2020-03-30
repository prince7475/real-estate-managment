import React, { Component } from 'react'
import { MDBBtn, 
    MDBCard, 
    MDBCardBody, 
    MDBCardImage, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCol,
    Link
} from 'mdbreact';
export default class TenantCard extends Component {
    render() {
        return (
            <div>
                <MDBCol>
                    <MDBCard style={{ width: "20rem" }} className="mt-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Prince Donkor</MDBCardTitle>
                            <MDBCardText>
                                <span>Rent: $650 a mount</span>
                                <br /><span>Lease length: 3 months</span>
                                <br /><span>Bill Due: 02/01/2019</span>

                            </MDBCardText>
                            <Link to=''><MDBBtn>Tenant Info</MDBBtn></Link>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </div>
        )
    }
}
