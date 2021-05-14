import {Component } from "react"; 
import * as React from "react"; 
import LOGO from '/logo/logo.png';

export default class Content extends Component {
    constructor(props){
        super(props);

    }

    render(){

        return(
            <div id="container">
                <img src={LOGO} alt="Logo" />
            </div>
        );

    }

}