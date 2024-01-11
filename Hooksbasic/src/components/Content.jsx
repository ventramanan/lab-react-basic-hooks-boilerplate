import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "./Context";

function Content(){

    let [count,setCount] = useState(0)
    let [displayContent,setDisplayContent] = useState(true)
    let {darkTheme,setDarkTheme} = useContext(Mycontext)

    function changeTheme(){
        setDarkTheme(!darkTheme)
    }

    function changeVisibility(){
        alert("wait a minute")
        setDisplayContent(!displayContent)
    }

    function changeCount(){
        setCount(count+1)
    }

    useEffect(()=>{
        return(
            console.log("changed")
        )
    },[displayContent])

    return(
        <>
            <div className="container">
                <button id="toggleButton" onClick={changeTheme}>Toggle</button>
                <div id="box" style={{
                backgroundColor: darkTheme ? "black" : "grey",
                color: darkTheme ? "white" : "black"
            }}>
                    <p  style={{
                        display : displayContent  ?  "none" : "block"
                    }}>He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obivious to anyone who walked into <br/> 
                    the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door.<br />
                    He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they <br />
                    never did.</p>
                    <button id="contentButton" onClick={changeVisibility}>Content</button>
                    <h3>{count}</h3>
                    <button id="likeButton" onClick={changeCount}>Like</button>
                </div>
            </div>
        </>
    )
}

export default Content