import React from "react";
import Profile from "./Components/Profile";
import Login from './Components/Login'
import UserContextProvider from "./Context/UserContextProvider";


function App() {
  return (
    <UserContextProvider>
      <div>Hii</div>
      <Login/>
     <Profile/>
    </UserContextProvider>
  );
}
export default App
