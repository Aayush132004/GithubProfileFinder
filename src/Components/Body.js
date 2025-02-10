import React,{useState,useCallback,useEffect} from"react"
import ReactDOM from "react-dom/client"

function Body(){
const[profile,Setprofile]=useState([])
let[profile_number,setprofile_number]=useState("")
let[userid,setuserid]=useState("")

async function fetchprofile(count){
    // console.log("hi");
    let x=Math.floor(Math.random()*10000)
    let data=await fetch(`https://api.github.com/users?since=${x}&per_page=${count}`)
    let profile_data=await data.json();
    // console.log(profile_data);
    Setprofile(profile_data);
   }
async function fetchuseridprofile(userid){
    // console.log("hi");
    let data=await fetch(`https://api.github.com/users/${userid}`)
    let profile_data=[await data.json()];
    console.log(profile_data);
    
    Setprofile(profile_data);
   }
 useEffect(()=>{fetchprofile(10)},[])
return(
<div id="card-container">
<div id="header-bottom">
      <div id="header-bottom-ip">
        <input type="text" placeholder="Enter user name" value={userid} onChange={(e)=>{setuserid(e.target.value)}}></input>
        <button onClick={()=>fetchuseridprofile(userid)}>Search Profile</button>
      </div>
      <div id="header-bottom-ip">
        <input type="text" placeholder="Enter Number OF Profile" value={profile_number} onChange={(e)=>{setprofile_number(e.target.value)}}></input>
        <button onClick={()=>fetchprofile(profile_number)}>Find Profiles</button>
      </div>
    </div>
 {
   profile.map((value)=>{
//    console.log(value);
return(<div id="card" key={value.id}>
     <img src={value.avatar_url}/>
     <h2>{value.login}</h2>
     <a href={value.html_url} target="_blank">Profile</a>
    </div>
   )
  })

 }

</div>)

}

export default Body