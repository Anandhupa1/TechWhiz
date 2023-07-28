import React, { useState, useEffect } from 'react';

const Speech2Text = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    
    const recognition = new window.webkitSpeechRecognition(); // For Chrome and some browsers
    // For other browsers, use window.SpeechRecognition()

    recognition.continuous = true; // Keep listening until stopped
    recognition.interimResults = true; // Get real-time results as user speaks

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let  interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript(transcript);
        } else {
          interimTranscript += transcript;
        }
      }
      // If i want to get real-time results, i can set them in a separate state variable ok 
      // e.g., setInterimTranscript(interimTranscript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error occurred:', event.error);
      setIsListening(false);
    };

    // this starts listening when the component mounts
    recognition.start();

    // this stops listening and clean up when the component unmounts
    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div>
      <h1>Speech-to-Text Example</h1>
      <button onClick={() => setIsListening(!isListening)}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default Speech2Text;
