import React, { Component } from 'react'
import HouseCard from '../Cards/HouseCard'
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol,
    Link
} from "mdbreact";
export default class DashBoard extends Component {
    render() {
        return (
            <>
                <MDBContainer className="text-center">
                    <div>
                        <h2 className='text-center pt-3'>Dashboard</h2>

                        <Link to='/addHouse'><MDBBtn>Add A House</MDBBtn></Link>
                    </div>
                    <MDBRow>
                        {[1,2,3,4,5,6,7,8,9].map((el,idx) =>
                        <MDBCol key={idx}>
                            <HouseCard />
                        </MDBCol>
                            
                        )}
                    </MDBRow>
                </MDBContainer>

            </>
        )
    }
}
