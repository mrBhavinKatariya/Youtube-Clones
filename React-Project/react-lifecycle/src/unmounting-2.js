import React,{useState} from "react";

class Removes extends React.Component{
    componentWillUnmount(){
        alert('Component Deleted')
    }

    render(){
        return(
            <React.Fragment>
                <h2>Hellow World</h2>
            </React.Fragment>
        )
    }
}
export default Removes;