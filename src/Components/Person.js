import React, { Component } from "react";
import './Person.css';



class Person extends Component{ 
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container" onClick={this.props.removeData}>
                <h1>Hey My name is {this.props.name} and my age is {this.props.age }</h1>
            </div>
        );
    };
};

export default Person;