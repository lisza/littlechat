import React, { Component } from 'react';
import './Chat.css';

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
      message: {
        border: '1px solid lightgrey',
        marginBottom: '10px',
        padding: '5px',
      },
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
        
        { this.state.messageList.map((message) => {
          return <div style={style.message}>
            {message.author} {message.date}
            <p>{message.text}</p>
          </div>
          })
        }
        
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