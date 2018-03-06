// Serves as a mock chat server that broadcasts incoming
// messages to all registered users/ Connection instances.

const allConnections = [];

class Connection {
  constructor(user, onMessage) {
    this.user = user;
    this.onMessage = onMessage;
    allConnections.push(this);
  }
  
  postMessage = (message) => {
    allConnections.forEach((connection) => {
      connection.onMessage(message);
    });
  }
}

export default Connection;