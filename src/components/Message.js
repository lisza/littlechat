import React from 'react';
import './Message.css';

const message = (props) => {
  // Styles live in Message.css
  
  return (
    <div className="Message">
      <div className="Message-author">{props.author[0]}</div>
      <div className="Message-date">{props.date}</div>
      <p className="Message-text">{props.text}</p>
    </div>
  );
};

export default message;