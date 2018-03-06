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
  };
  
  disconnect = () => {
    const index = allConnections.indexOf(this);
    if (index !== -1) {
      allConnections.splice(index, 1);
    }
  };
}

export default Connection;