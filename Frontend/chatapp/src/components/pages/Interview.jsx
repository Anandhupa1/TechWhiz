import React, {  useState } from 'react'
let baseUrl  = "http://localhost:8000/interview"
function Interview() {
  let [fetchFlag,setFetchFlag] = useState(0);
  let [result,setResult] = useState("Hello")
  let [input,setInput] = useState("input here")
  let [messages,setMessages] =useState([]);
  //_______________function to make request to backend 
  fetchAndUpdate()
  async function fetchAndUpdate(){
    try {
    let obj = {messages , interviewId:sessionStorage.getItem("interviewId")}
    console.log("wait for 20 seconds")
    const res = await fetch(`${baseUrl}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    
    const data = await res.json();
    if(res.status==200){
     alert(data)
    }else {
      alert("res.status !==200")
    }
    } catch (error) {
      alert("catched error")
      console.log(error)
    }
    
  }
  return (
    <>
      <h1>Interview Dashboard</h1>
      <h1>{result}</h1>
      <h2>input : {input}</h2>
      <input onChange={(e)=>{setInput(e.target.value)}} type="text" />
      <button onClick={()=>{setFetchFlag(fetchFlag++)}} >send</button>
    </>
  )
}

export default Interview
