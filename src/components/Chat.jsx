import React from 'react'
import Cam from "../components/component-images/cam.png"
import Add from "../components/component-images/add.png";
import More from "../components/component-images/more.png";
import Messages from './Messages';
import Input from './Input'

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat
