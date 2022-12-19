import React, { Component } from "react";
import Person from './Components/Person';

class App extends Component{
    constructor() {
        super();

        this.state = {
            personInformation: [
                {
                    name: 'Rakesh Kumar Parida',
                    age: 23,
                },
                {
                    name: 'Bikash Kumar Parida',
                    age: 21,
                },
                {
                    name: 'Rajesh Kumar Parida',
                    age: 22
                },
                {
                    name: 'Millan Kumar Parida',
                    age: 28,
                },
            ]
        };
    };
    removeHandler(currentIndex) {
        
        let stateDataCopy = this.state.personInformation;
        console.log(stateDataCopy);
        stateDataCopy.splice(currentIndex, 1);
        console.log(stateDataCopy);
        this.setState({personInformation:stateDataCopy})
    }
    render() {
        return (
            <div>
                {
                    this.state.personInformation.map((value, currentIndex) => {
                        return (
                            <Person key={currentIndex}
                                    name={value.name}
                                    age={value.age}
                                    removeData={()=>this.removeHandler(currentIndex)}/>
                        );
                    })
                };
            </div>
        );
    };
};

export default App;