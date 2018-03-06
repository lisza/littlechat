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
  
  handleSubmit = () => {
    const author = this.props.user;
    const date = new Date().toString();
    const newMessage = Object.assign({}, this.state.newMessage, {author: author, date: date});
    
    const newMessageList = [...this.state.messageList];
    newMessageList.push(newMessage);
    this.setState({
      messageList: newMessageList,
      newMessage: { text: "" },
    });  
  }
  
  handleChange = (event) => {
    const message = { text: event.target.value };
    this.setState({
      newMessage: message
    });
  }
  
  render() {  
    return(
      <div className="Chat">
        <h2>Chat with {this.props.partner}</h2>
        
        <MessageList messages={this.state.messageList} />
          
        <NewMessage
          value={this.state.newMessage.text}
          change={this.handleChange}
          submit={this.handleSubmit} />
      </div>
    );
  }
}

export default Chat;