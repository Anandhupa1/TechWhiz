



import { useEffect, useState, useSyncExternalStore } from "react";

import styled from "styled-components"
let baseUrl = "http://localhost:8000";
const QuestionBox = () => {

  let [q,setq] =useState("wait for the question..")
  let [cr,setcr]=useState(0);

  // fetchAndUpdate()
    async function fetchAndUpdate(){
      try {
     alert("started")
      let data1 = JSON.parse(sessionStorage.getItem("interviewData"));
      let obj = {level:data1.level,subject:data1.subject}
      const res = await fetch(`${baseUrl}/q`,{
        method: 'POST',
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
       
        console.log(error)
      }
    }

  

  return (
    <DIV>
        <textarea value={q} className="questionBox" placeholder="Question will be appear here...Please wait for Question..." spellCheck="false"/>
    </DIV>
  )
}

export default QuestionBox;


const DIV=styled.div`

textarea{
    width:65%;
    height:215px;
    background: #E0E0E0;
    color:#131418;
    font-size: 22px;
    border:0;
    outline:0;
    border-radius: 5px;
    resize:none;
    padding:15px;
    margin-bottom:20px;
}


textarea::placeholder{
    font-size: 16px;
    color:#90A4AE;
}


`


