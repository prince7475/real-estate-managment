import React, { Component } from 'react'
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol,
    Link
} from "mdbreact";
export default class HouseInfo extends Component {

    componentDidMount(){
        console.log('this.props.match.params.id', this.props.match.params.id)
    }

    render() {
        return (
            <div className="text-center pt-4">
                <h4>House Information</h4>
                <h5>Address: 7777 Address Street, Dallas, 75221</h5>
                <h5>Cap Rate: 7.5 %</h5>
                <span className="text-center">
                <Link to='/addTenant'><MDBBtn>Add A Tenant</MDBBtn></Link>
                <Link to='/addHouse'><MDBBtn>Edit House info</MDBBtn></Link>
                </span>
            </div>
        )
    }
}
