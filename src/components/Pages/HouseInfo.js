import React, { Component } from 'react'
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol,
    Link
} from "mdbreact";
import TenantCard from '../Cards/TenantCard';

export default class HouseInfo extends Component {

    componentDidMount(){
        console.log('this.props.match.params.id', this.props.match.params.id)
    }

    render() {
        return (
            <MDBContainer >
            <div className="text-center pt-4">
                <Link to='/dashboard'><MDBBtn>Dashboard</MDBBtn></Link>
                <h4>House Information</h4>
                <h5>Address: 7777 Address Street, Dallas, 75221</h5>
                <h5>Cap Rate: 7.5 %</h5>
                <span className="text-center">
                <Link to='/addTenant'><MDBBtn>Add A Tenant</MDBBtn></Link>
                <Link to='/editHouseInfo'><MDBBtn>Edit House info</MDBBtn></Link>
                </span>

                <TenantCard/>
            </div>
            </MDBContainer>
        )
    }
}
