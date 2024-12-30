import React from 'react';

// class Welcome extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             data:('Welcome to codeline infotech')
//         }
//     }

//     Clickme(){
//       this.setState({data:'Thanks for visit..'})
//     }

//     render(){
//         return(
//             <>
//                 <h2>Welcome to Class component.</h2>
//                 <h3>Thanks for visit.</h3>
//                 {this.state.data}<br></br>
//                 {/* {this.props.name} {this.props.city} */}
//                 <button onClick={()=> this.Clickme()}>Click</button>
//             </>
//         ) 
//     }
// }
class Welcome extends React.Component{
    constructor(){
        super();
        this.state={
            values:("Shopsy Is BEst Plateform For Creating Website.")
        }
    }

    EnterMe(){
        debugger
        this.setState({values:'Your Website Is Creating..'})
    }

    render(){
        return(
            <>
            <h2>Hello</h2>
            {this.state.values}<br></br>
            <button onClick={ ()=> this.EnterMe()}>Click</button>
            </>
        )
    }
}
export default Welcome;