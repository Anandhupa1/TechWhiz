
import {useState,useRef} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faMicrophone,faMicrophoneAltSlash} from "@fortawesome/free-solid-svg-icons";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const TextBox = () => {

    const [answer,setAnswer]=useState("");
    const [text,setText]=useState("");
    const [toggle,setToggle]=useState(true)

    const startSpeaking=()=>SpeechRecognition.startListening({ continuous: true, language: 'en-IN'});
    
    const stopSpeaking=SpeechRecognition.stopListening;

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ })

    if(!browserSupportsSpeechRecognition) {
        return null
    }

    const handleSubmit=()=>{
      if(toggle){
        setAnswer("")
      }else{
        setText("")
      }
      setToggle(true)
    } 
     

    const handleSpeaking=()=>{
      setToggle(false)
      startSpeaking();
    }

    const ans=
    <textarea className="ans" placeholder="Type your answer...." spellCheck="false" onChange={(e)=>setAnswer(e.target.value)} value={answer}/>

    const speech=
    <textarea className="speech" placeholder="Type your answer...." spellCheck="false" onChange={(e)=>setText(e.target.value)} value={transcript}/>

    console.log(speech)
  return (

    <DIV>
{toggle?ans:speech}

<div>
   <button className="speak" onClick={handleSpeaking}>
    <FontAwesomeIcon icon={faMicrophone}/>
    <span className="speakText">Speak</span>
   </button>

   <button className="stopSpeak" onClick={stopSpeaking}>
    <FontAwesomeIcon icon={faMicrophoneAltSlash}/>
    <span className="stopSpeakText">Stop Speaking</span>
   </button>

   <button className="submit" onClick={handleSubmit}>Submit</button>
</div>
  
    </DIV>
   

  )
}

export default TextBox;

const DIV=styled.div`

textarea{
    width:800px;
    height:175px;
    background: #403d84;
    color:#fff;
    font-size: 18px;
    border:0;
    outline:0;
    border-radius: 5px;
    resize:none;
    padding:15px;
    margin-bottom:20px;
}


textarea::placeholder{
    font-size: 16px;
    color:#C5CAE9;
}

.speak{
    background-color: dodgerblue;
    color:#fff;
    font-size: 14px;
    padding:15px 25px;
    border-radius: 30px;
    border:0;
    outline:0;
    cursor:pointer;
    margin-left: 20px;
    margin-right:30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .speakText{
    margin-left:5px;
  }

  .stopSpeakText{
    margin-left:5px;
  }

  .stopSpeak{
    background-color: #E91E63;
    color:#fff;
    font-size: 14px;
    padding:15px 20px;
    border-radius: 20px;
    border:0;
    outline:0;
    cursor:pointer;
    margin-right:300px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }


  .submit{
    width:140px;
    background-color: #2E7D32;
    color:#fff;
    font-size: 14px;
    padding:15px 25px;
    border-radius: 30px;
    border:0;
    outline:0;
    cursor:pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

`
