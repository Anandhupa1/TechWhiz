import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const LandingPage = () => {
  let baseUrl = "http://localhost:8000/interview"
  const [selectedButton, setSelectedButton] = useState('');
  const [obj,setObj]=useState({userId:"1",subject:"react",level:"medium"});
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setObj({...obj,subject:buttonName})
  };
  const navigate = useNavigate();
  //____________________________________________________________________________________
//creating an interview when continue button is clicked.
 
async function createInterview(){
try {
  const res = await fetch(`${baseUrl}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  
  const data = await res.json();
  
  if(res.status==200){
    console.log(data._id);
    sessionStorage.setItem("interviewId",data._id)
    sessionStorage.setItem("interviewData",JSON.stringify(data))
    Swal.fire({
      title:`${data.subject } - ${data.level}`,
      icon : "success",
      text : `Your interview is initialized with id : ${data._id} , subject : ${data.subject} level:${data.level}`,
      confirmButtonText: 'Start Interview',
      showDenyButton: true,
      denyButtonText:"Delete",
      showCancelButton: true,
      cancelButtonText: "Do it later"

    }).then((result)=>{
      if(result.isConfirmed){
       //redirect the user to interview dashboard
        navigate("/interview")
      }
    })
  }
  else {
    alert("response status is not ok ")
    console.log(data)
  }
} catch (error) {
  alert(error)
  console.log(error)
}



}






//_____________________________________________________________________________________
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-8">
      <h1 className="text-4xl font-bold mb-8 text-white">TechWhiz, AI powered interview mastery</h1>

      
      <div className="flex space-x-6 mb-8">
        <button
          className={`px-6 py-3 text-white rounded-md shadow-md ${selectedButton === 'node' ? 'bg-blue-500' : 'bg-gray-500'}`}
          onClick={() =>{ handleButtonClick('node');}}
        >
          Node JS
        </button>
        <button
          className={`px-6 py-3 text-white rounded-md shadow-md ${selectedButton === 'java' ? 'bg-blue-500' : 'bg-gray-500'}`}
          onClick={() => handleButtonClick('java')}
        >
          Java
        </button>
        <button
          className={`px-6 py-3 text-white rounded-md shadow-md ${selectedButton === 'react' ? 'bg-blue-500' : 'bg-gray-500'}`}
          onClick={() => handleButtonClick('react')}
        >
          React
        </button>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2 text-white">Select Difficulty Level:</span>
        <select onChange={(e)=>{setObj({...obj,level:e.target.value})}} className="border border-gray-400 rounded-md px-2 py-1">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md"
        onClick={createInterview}
      >
        Continue
      </button>
    </div>
  );
};

export default LandingPage;
