import React from 'react';

class Child extends React.Component{

    componentWillUnmount(){
        debugger
        alert('Child component removed from DOM.')
    }

    render(){
        return(
            <React.Fragment>
                <h3>Welcome to Child component</h3>
            </React.Fragment>
        )
    }
}
export default Child;