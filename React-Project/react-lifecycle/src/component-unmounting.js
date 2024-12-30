import React,{useState} from "react";
import Removes from "./unmounting-2";

class Unmounting extends React.Component{
    constructor(){
        super();
        this.state={
            color:'Green',
            show:true,
        }
    }

    componentWillUnmount(){
        alert('Component Deleted');
    }

    Delete(){
        debugger
        this.setState({show:false})
    }

    
    render(){

        let Remove='';
        if(this.state.show){
            Remove=<Removes></Removes>
        }
        return(
            <React.Fragment>
                {/* <p>Hello World</p> */}
                {Remove}
                <button onClick={()=> this.Delete()}>Delete</button>
            </React.Fragment>
        )
    }
}

export default Unmounting;