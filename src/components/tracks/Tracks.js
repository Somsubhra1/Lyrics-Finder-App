import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";

export default class Tracks extends Component {
    render() {
        return (
            // Consumer is the wrapper
            <Consumer>
                {value => {
                    // value is the values passed to Context.Provider
                    console.log(value);
                    const { track_list } = value;
                    if (track_list === "undefinded" || track_list.length === 0) {
                        return <Spinner />
                    }
                    return <h1>Tracks loaded</h1>;
                }}
            </Consumer>
        );
    }
}
