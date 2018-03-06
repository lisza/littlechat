import React, {Component} from 'react';

class NewMessage extends Component {
  
  resizeForm = (event) => {
    const form = event.currentTarget;
    form.style.height = "40px";
    form.style.height = (form.scrollHeight - 4) + "px";
  }
  
  enterPress = (event) => {
    event.stopPropagation();
    if(event.keyCode === 13 && event.shiftKey === false) {
      // event.preventDefault();
      console.log('TEST');
     }
  }
    
    render() {
      const style = {
        height: 'auto',
        width: '300px',
        minHeight: '40px',
        fontSize: '16px',
        resize: 'none',
        overflow: 'hidden',
        border: '1px solid skyblue',
        borderRadius: '5px',
      };
      
      return (
        <div>
          <form onSubmit={this.enterPress}>
            <textarea
              style={style}
              type="text"
              placeholder="New Message..."
              
              onKeyUp={this.resizeForm}
              onKeyDown={this.enterPress} />
          </form>
        </div>
      );  
    }
};

export default NewMessage;