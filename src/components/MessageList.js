import React from 'react';
import Message from './Message';

const messageList = (props) => {
  return props.messages.map((message, index) => {
    return <Message 
      text={message.text}
      author={message.author}
      date={message.date}
      key={`message-${index}`} />    
  });
}

export default messageList;