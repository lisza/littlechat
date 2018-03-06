import React, { Component } from 'react';
import './Chat.css';
import MessageList from './MessageList';

class Chat extends Component {
  state = {
    messageList: [
      { author: "Josh", date: "Today, 10:00am", text: "Hey how's it going?" },
      { author: "Lisza", date: "Today, 10:07am", text: "Hi not too bad. What are you up to?" },
    ],
    newMessage: {}
  }
  
  render() {
    const style = {
      form: {
        fontSize: '16px',
        minHeight: '40px',
        resize: 'none',
        width: '250px'
      }
    };
    
    return(
      <div className="Chat">
        <h2>Chat with {this.props.partner}</h2>
        
        <MessageList
          messages={this.state.messageList} />
        
        <form>
          <textarea
            style={style.form}
            placeholder="New message..." />
        </form>
      </div>
    );
  }
}

export default Chat;