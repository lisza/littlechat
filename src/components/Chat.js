import React, { Component } from 'react';
import './Chat.css';
import Connection from '../backend/backend.js';
import Moment from 'moment';
import MessageList from './MessageList';
import NewMessage from './NewMessage';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.connection = undefined;
    this.typingTimeout = undefined;    
    this.state = {
      messageList: [
        // A couple messages to get started, feel free to delete
        { author: "Josh", date: "Mon Mar 05 2018 08:10:57 GMT-0800 (PST)", text: "A chat is a chat is a chat" },
        { author: "Lisza", date: "Mon Mar 05 2018 08:18:57 GMT-0800 (PST)", text: "lol you're such a philosopher :)" },
      ],
      newMessage: {},
      whosTyping: undefined
    };
  }
  
  // Create a new connection to backend, pass user and callbacks 
  componentWillMount() {
    this.connection = new Connection(
      this.props.user,
      this.onMessage,
      this.onTyping,
      this.resetTypingTimeout
    );
  }
  
  // Remove user from being broadcast to when Chat unmounts
  // Not strictly necessary in our mock chat scenario
  componentWillUnmount() {
    this.connection.disconnect();
  }
  
  // Construct new message and send to backend
  handleSubmit = () => {
    const author = this.props.user;
    const date = Moment();
    const newMessage = Object.assign({}, this.state.newMessage, {author: author, date: date});  
    this.connection.postMessage(newMessage);
    this.setState({
      newMessage: { text: "" },
    });  
  }
  
  // Callback registered with backend, updates local state with incoming message
  onMessage = (message) => {
    const newMessageList = [...this.state.messageList];
    newMessageList.push(message);
    this.setState({ messageList: newMessageList });
  }
  
  handleChange = (event) => {
    // Detect message input and save to local state before submission
    const message = { text: event.target.value };
    this.setState({
      newMessage: message
    });
    // Send info to backend that user is typing
    this.connection.broadcastTyping();
  }
  
  // Callback registered with backend, updates local typing state
  onTyping = (typingUpdate) => {
    const newTypingUpdate = Object.assign({}, this.state.whosTyping, typingUpdate);
    this.setState({ whosTyping: newTypingUpdate });
  }
  
  // Set timeout to broadcast user stopped typing after 2 seconds of inactivity 
  resetTypingTimeout = (user) => {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    this.typingTimeout = setTimeout(() => {
      const update = Object.assign({}, this.state.whosTyping);
      update[user] = false;
      this.setState({ whosTyping: update });
      this.typingTimeout = undefined;
    }, 2000);
  }
  
  render() {
    const style = {
      typing: {
        fontSize: 'small',
        color: 'grey',
        height: '25px'
      }
    };
    
    return(
      <div className="Chat">
        <h2>Chat with {this.props.partner}</h2>
        
        <MessageList messages={this.state.messageList} />
        
        <div style={style.typing}>
          { this.state.whosTyping && this.state.whosTyping[this.props.partner] ?
              `${this.props.partner} is typing... `
             : null }
        </div>
          
        <NewMessage
          value={this.state.newMessage.text}
          change={this.handleChange}
          submit={this.handleSubmit} />
      </div>
    );
  }
}

export default Chat;