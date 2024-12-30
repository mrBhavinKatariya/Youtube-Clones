import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){

    const data = useLoaderData()
    // const [data,setData] = useState([]) 
    //    useEffect(() => {
    //     fetch("https://api.github.com/users/mrbhavinKatariya")
    //     .then((res)  => res.json())
    //     .then(data => setData(data))

    //    },[])

       if(data.followers== 0){
        data.followers = 2580;
       }

    return(
        <div className="text-center bg-gray-600 text-white p-4 text-3xl ">Github Followers:{data.followers }
                <img src={data.avatar_url} alt="GitPicture"  width={300}/>
        </div>
    )
}

export const gitHUbinfoLoader  = async () => {
    const res = await  fetch("https://api.github.com/users/mrbhavinKatariya");
    return res.json();
}