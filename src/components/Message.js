import React from 'react';
import './Message.css';
import Moment from 'moment';

const message = (props) => {
  // Styles live in Message.css
  
  return (
    <div className="Message">
      <div className="Message-author">{props.author[0]}</div>
      <div className="Message-date">{Moment(props.date).format('ddd, h:mmA')}</div>
      <p className="Message-text">{props.text}</p>
    </div>
  );
};

export default message;