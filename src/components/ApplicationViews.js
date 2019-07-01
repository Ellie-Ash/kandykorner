import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Locations from "./locations/Locations";
import Employees from "./employees/Employees";
import CandyTypes from "./candyTypes/CandyTypes";
import Candies from "./candies/Candies";


export default class ApplicationViews extends Component {

    // pretending api
    locationsFromAPI = [
        { id: 1, address: "123 Oak Street" },
        { id: 2, address: "246 Birch Blvd" },
        { id: 3, address: "1092 Maple Ave" },
        { id: 4, address: "5678 Redwood Way" }
    ]
    
    // This will eventually get pulled from the API
    employeesFromAPI = [
        { id: 1, name: "Holly Flax" },
        { id: 2, name: "Michael Scott" },
        { id: 3, name: "Dwight Schrute" }
    ]
    
    candyTypesFromAPI = [
        { id: 1, type: "Gummy" },
        { id: 2, type: "Chocolate" },
        { id: 3, type: "Hard" },
    ]

    candiesFromAPI = [
        { id: 1, name: "Sour Patch Kids" },
        { id: 2, name: "Butterfinger" },
        { id: 3, name: "Nerds" },
        { id: 4, name: "Reese's" },
        { id: 5, name: "Peppermint" },
        { id: 6, name: "Swedish Fish" }
    ]

    state = {
        locations: this.locationsFromAPI,
        employees: this.employeesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.candiesFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/locations" render={(props) => {
                    return <Locations locations={this.state.locations} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <Employees employees={this.state.employees} />
                }} />
                <Route exact path="/candyTypes" render={(props) => {
                    return <CandyTypes candyTypes={this.state.candyTypes} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <Candies candies=
                    {this.state.candies} />
                }} />
            </React.Fragment>
        )
    }
}