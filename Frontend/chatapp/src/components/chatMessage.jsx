import React from 'react';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`chat-message ${isUser ? 'user' : 'bot'}`}>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
