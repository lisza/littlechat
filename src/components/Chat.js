import React, { Component } from 'react';
import './Chat.css';
import MessageList from './MessageList';
import NewMessage from './NewMessage';

class Chat extends Component {
  state = {
    messageList: [
      { author: "Josh", date: "Today, 10:00am", text: "Hey how's it going?" },
      { author: "Lisza", date: "Today, 10:07am", text: "Hi not too bad. What are you up to?" },
    ],
    newMessage: {}
  }
  
  render() {  
    return(
      <div className="Chat">
        <h2>Chat with {this.props.partner}</h2>
        
        <MessageList messages={this.state.messageList} />
          
        <NewMessage />
      </div>
    );
  }
}

export default Chat;