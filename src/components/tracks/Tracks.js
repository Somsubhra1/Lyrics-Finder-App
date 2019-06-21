import React, { Component } from "react";
import { Consumer } from "../../context";

export default class Tracks extends Component {
    render() {
        return (
            // Consumer is the wrapper
            <Consumer>
                {value => { // value is the values passed to Context.Provider
                    console.log(value);
                    return <h1>Tracks</h1>;
                }}
            </Consumer>
        );
    }
}
