import React, { useState } from "react";

class Updating extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'Red',
            show: true
        }
    }

    componentDidMount() {
        debugger
        setTimeout(() => {
            this.setState({ color: 'Pink' })
        }, 2000)
    }


    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        document.getElementById('p1').innerHTML = 'Color :' + this.state.color
    }

    ChangeColor(){
        this.setState({color:'Yellow'})
    }

        render() {
        return (
            <React.Fragment>
                <p id="p1">{this.state.color}</p>
                <button onClick={()=> this.ChangeColor()}>Color</button>
            </React.Fragment>
        )
    }
}

export default Updating;