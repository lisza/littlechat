import React from 'react';

const messageList = (props) => {
  const style = {
      border: '1px solid lightgrey',
      marginBottom: '10px',
      padding: '5px',
  };
  
  return props.messages.map((message) => {
    return <div
      style={style}>
      {message.author} {message.date}
      <p>{message.text}</p>
    </div>
  });
}

export default messageList;