import React,{useState} from "react";

class Component extends React.Component{
    constructor(){
        super();
        this.state={
            color:'red',
        }
    }

componentDidMount(){
    debugger
   setTimeout(() => {
    this.setState({color:'Pink'})
   },2000)
}

    render(){
        return(
            <React.Fragment>
                <p>{this.state.color}</p>
            </React.Fragment>
        )
    }
}


export default Component;