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
    
    this.state = {
      messageList: [
        { author: "Josh", date: "Mon Mar 05 2018 08:10:57 GMT-0800 (PST)", text: "Hey how's it going?" },
        { author: "Lisza", date: "Mon Mar 05 2018 08:18:57 GMT-0800 (PST)", text: "Hi not too bad. What are you up to?" },
      ],
      newMessage: {}
    };
  }
  
  // Create a new connection to backend, pass user and callbacks 
  componentWillMount() {
    this.connection = new Connection(
      this.props.user,
      this.onMessage,
    );
  }
  
  // Callback registered with backend, update local state with incoming message
  onMessage = (message) => {
    const newMessageList = [...this.state.messageList];
    newMessageList.push(message);
    this.setState({ messageList: newMessageList });
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