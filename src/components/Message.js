import React from 'react';

const message = (props) => {
  const style = {
    message: {
      border: '1px solid lightgrey',
      marginBottom: '10px',
      padding: '5px',
    }    
  };
  
  return (
    <div style={style.message}>
      <div style={style.author}>{props.author}</div>
      <div style={style.date}>{props.date}</div>
      <p style={style.text}>{props.text}</p>
    </div>
  );
};

export default message;