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
export default class HouseCard extends Component {
    render() {
        return (
            <MDBCol>
                
                <MDBCard style={{ width: "20rem" }} className="mt-2">
                {/* <Link to='/houseInfo'> */}
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>7777 Address Street, Dallas, TX</MDBCardTitle>
                        <MDBCardText>
                        <span>Tanants: 2</span> 
                        <br/><span>Current Total Rent: $3,600</span>
                        <br/><span>Cap Rate: 7.8%</span>
                        
                        </MDBCardText>
                        <Link to='/houseInfo/2'><MDBBtn>House Info</MDBBtn></Link>
                    </MDBCardBody>
                {/* </Link> */}
                </MDBCard>
            </MDBCol>
        )
    }
}
