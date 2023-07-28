import React from 'react';
// import ChatMessage from './ChatMessage';
import ChatMessage from './chatMessage';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message.text} isUser={message.isUser} />
      ))}
    </div>
  );
};

export default MessageList;
