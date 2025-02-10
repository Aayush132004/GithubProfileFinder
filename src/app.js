import React,{useState,useCallback,useEffect} from"react"
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

function Githubprofile(){
    return (
     <>
        <Header  />
        <Body  />

        </>
    )      
    

}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Githubprofile/>)