import React from 'react';
import './Typing.css';

const style = {
  fontSize: 'small',
  color: 'grey',
  height: '25px'
};

const typing = (props) => {
  return (
    <div className="Typing">
    { props.whosTyping && props.whosTyping[props.partner] ?
          <div className="Typing-dots">
            {props.partner} is typing 
            <div className="Typing-dot1"></div>
            <div className="Typing-dot2"></div>
            <div className="Typing-dot3"></div>
          </div> : null }
    </div>
  );  
};

export default typing;