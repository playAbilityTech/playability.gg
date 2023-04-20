import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [lastWord, setLastWord] = useState('');
  const [targetWord, setTargetWord] = useState('');
  const [language, setLanguage] = useState('en-US');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const words = transcript.split(' ');
    const newLastWord = words[words.length - 1];
    if (newLastWord !== lastWord) {
      setLastWord(newLastWord);
      if (newLastWord === targetWord) {
        console.log(`Word detected: ${newLastWord}`);
        SpeechRecognition.stopListening();
        setIsListening(false);
      }
    }
  }, [transcript, lastWord, targetWord]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, interimResults: true, language });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  const containerStyle = {
    // ...containerStyle
  };

  const formStyle = {
    // ...formStyle
  };

  const labelStyle = {
    // ...labelStyle
  };

  const inputStyle = {
    // ...inputStyle
  };

  const buttonStyle = {
    // ...buttonStyle
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <label htmlFor="language" style={labelStyle}>Language:</label>
        <select
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          style={inputStyle}
        >
          <option value="fr-FR">Français</option>
          <option value="en-US">English (US)</option>
          {/* Add more languages here */}
        </select>
        <label htmlFor="targetWord" style={labelStyle}>Target Word:</label>
        <input
          id="targetWord"
          value={targetWord}
          onChange={(event) => setTargetWord(event.target.value)}
          style={inputStyle}
        />
        <button
          onClick={!isListening ? startListening : stopListening}
          style={buttonStyle}
        >
          {!isListening ? 'Start' : 'Stop'}
        </button>
        <button onClick={resetTranscript} style={buttonStyle}>Reset</button>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default Voice;
