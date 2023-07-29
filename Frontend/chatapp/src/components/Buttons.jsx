

import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faMicrophone,faMicrophoneAltSlash} from "@fortawesome/free-solid-svg-icons";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const Buttons = ({answer,getText}) => {

    const startSpeaking=()=>SpeechRecognition.startListening({ continuous: true, language: 'en-IN'});
    
    const stopSpeaking=SpeechRecognition.stopListening;


    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ })

    if(!browserSupportsSpeechRecognition) {
        return null
    }

    


    const handleSubmit=()=>{
        console.log(answer)
    }
   
  return (

    <DIV>

    <button className="speak" onClick={startSpeaking}>
    <FontAwesomeIcon icon={faMicrophone}/>
    <span className="speakText">Speak</span>
   </button>

   <button className="stopSpeak" onClick={stopSpeaking}>
    <FontAwesomeIcon icon={faMicrophoneAltSlash}/>
    <span className="stopSpeakText">Stop Speaking</span>
   </button>




   <button className="submit" onClick={handleSubmit}>Submit</button>

    </DIV>
    
  )
}


//color:

export default Buttons;

const DIV=styled.div`


.speak{
    background-color: dodgerblue;
    color:#fff;
    font-size: 16px;
    padding:15px 30px;
    border-radius: 30px;
    border:0;
    outline:0;
    cursor:pointer;
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
    font-size: 16px;
    padding:15px 30px;
    border-radius: 30px;
    border:0;
    outline:0;
    cursor:pointer;
  }


  .submit{
    width:140px;
    background-color: #388E3C;
    color:#fff;
    font-size: 16px;
    padding:15px 30px;
    border-radius: 30px;
    border:0;
    outline:0;
    cursor:pointer;
  }


`




