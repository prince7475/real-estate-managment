import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import DashBoard from './Pages/DashBoard'
import HomeScreen from './Pages/HomeScreen'
import TenantInfo from './Pages/TenantInfo'
import HouseInfo from './Pages/HouseInfo'
import AddHouse from './Forms/AddHouse'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={HomeScreen}/>
                        <Route exact path='/dashboard' component={DashBoard}/>
                        <Route exact path='/tenantInfo/:id' component={TenantInfo}/>
                        <Route exact path='/houseInfo/:id' component={HouseInfo}/>
                        <Route exact path='/addHouse' component={AddHouse} />
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}
