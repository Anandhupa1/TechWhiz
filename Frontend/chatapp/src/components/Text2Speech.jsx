import React, { useState } from 'react';

const Text2Speech = () => {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Set the language for the speech (you can change this to support other languages)
// lemme use usa or india  
      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-Speech is not supported in this browser.');
    }
  };
    //this must be used inside the response  that the gpt gives us  
  return (
    <div>
      <h1>Text-to-Speech For Checking Now</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak..."
      />
      <button onClick={speakText} disabled={isSpeaking || !text}>
        {isSpeaking ? 'Speaking...' : 'Speak'}
      </button>
    </div>
  );
};

export default Text2Speech;


// out of whisper ai , react lib, this is better for us , basic web based api inbuilt   