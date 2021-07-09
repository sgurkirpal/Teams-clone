import React, { Component } from 'react';
import ChatApp from './ChatApp';
import '../img/chat.png'
import './Chatfun.css'

class Chat extends Component {
    state = {
        addContainer: false
    }
    add = () => {
        this.setState({ addContainer: !this.state.addContainer });
    }

    myStyle={
        position: 'fixed',
        bottom:'1%',
        right:'1%',
    }

    render() {
        return (
            <>
                <div>
                    <button className="btn btn-secondary" style={this.myStyle} onClick={() => this.add()}><img id="chatBtn" src="../img/chat.png" alt="img"></img></button>
                    {this.state.addContainer &&
                        <ChatApp roomRef={window.roomRef} />
                    }
                </div>
            </>

        );

    }


}
export default Chat