// Serves as a mock chat server that broadcasts incoming
// messages to all registered users/ Connection instances.

const allConnections = [];

class Connection {
  constructor(user, onMessage, onTyping, resetTypingTimeout) {
    this.user = user;
    this.onMessage = onMessage;
    this.onTyping = onTyping;
    this.resetTypingTimeout = resetTypingTimeout;
    allConnections.push(this);
  }
  
  postMessage = (message) => {
    allConnections.forEach((connection) => {
      connection.onMessage(message);
    });
  };
  
  broadcastTyping = () => {
    const user = this.user;
    const typingUpdate = {};
    typingUpdate[user] = true;
    allConnections.forEach((connection) => {
      connection.onTyping(typingUpdate);
      connection.resetTypingTimeout(user);
    });   
  }
  
  disconnect = () => {
    const index = allConnections.indexOf(this);
    if (index !== -1) {
      allConnections.splice(index, 1);
    }
  };
}

export default Connection;