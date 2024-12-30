import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";
function Login(){

    const [pass,setPass] = useState("")
    const [username,setUsername] = useState("")
    
    const {setUser} = useContext(UserContext)

    const handlesubmit = (e) =>{
        e.preventDefault();
        setUser({username, pass})
        console.log("hii");
        
    }

    return(
        <>
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value) } placeholder="username"  />{" "}
            <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="password" />
            <button onClick={handlesubmit}>submit</button>

        </div>
        </>
    )
}
export default Login;