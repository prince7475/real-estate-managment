import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import DashBoard from './Pages/DashBoard'
import HomeScreen from './Pages/HomeScreen'
import TenantInfo from './Pages/TenantInfo'
import HouseInfo from './Pages/HouseInfo'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    {/* <div>
                        Temp:
                        <ul>
                            <li>
                                <Link to='/'>HomeScreen</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>Dashboard</Link>
                            </li>
                            <li>
                                <Link to='/tenantInfo'>TenantInfo</Link>
                            </li>
                            <li>
                                <Link to='/houseInfo'>HouseInfo</Link>
                            </li>
                        </ul>
                    </div> */}



                    <Switch>
                        <Route exact path='/' component={HomeScreen}/>
                        <Route exact path='/dashboard' component={DashBoard}/>
                        <Route exact path='/tenantInfo' component={TenantInfo}/>
                        <Route exact path='/houseInfo' component={HouseInfo}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
