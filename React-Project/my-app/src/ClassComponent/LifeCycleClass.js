import React from 'react';
import Child from './Child';

class LifeCycleClass extends React.Component {

    constructor() {
        super();
        this.state = {
            color: 'red',
            show: true
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        debugger
        setTimeout(() => {
            this.setState({ color: 'Blue' })
        }, 2000)
    }

    componentDidUpdate() {
        debugger
        document.getElementById('pid').innerHTML = "Your new updated color is : " + this.state.color;
        // this.setState({color:'Yellow'})
    }

    // changeColor(){
    //     debugger
    //     this.setState({color:'Blue'})
    // }

    updateShow() {
        debugger
        this.setState({show:false})
    }

    render() {
        let mychild='';
        if(this.state.show){
            mychild = <Child></Child>
        }
        return (
            <React.Fragment>
                <h2>Life cycle of class component :</h2>
                {/* <button onClick={()=>this.changeColor()}>CLick</button> */}
                <p>Selected color is : {this.state.color}</p>
                {<p id="pid"></p>}
                {mychild}
                <button onClick={() => this.updateShow()}>CLick</button> 
    
            </React.Fragment>
        )
    
    }
}
export default LifeCycleClass;