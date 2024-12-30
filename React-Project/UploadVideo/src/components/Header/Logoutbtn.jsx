import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appwrite/app";
import { logOut } from "../../store/authSlice";

function logOutBtn(){
    const dispatch = useDispatch()
    const logOutHandler = () =>{
        authservice.logOut()
        .then(() => {
            dispatch(logOut())
        })
    }
    return(
    <button className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" >Logout</button>

    )
}



export default logOutBtn;