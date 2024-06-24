import React from "react";
import Profile from "./Profile";

export default function Clock({time,color}){
    return(
        <>
        <h1 style={{color}}>
            {time}
        </h1>
        </>

    );
}