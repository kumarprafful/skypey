import React from 'react';
import _ from 'lodash';

import store from '../store';
import Header from '../components/header';
import Chats from '../components/chats';
import MessageInput from './messageInput';



import '../css/chatWindow.css';

const ChatWindow = ({activeUserId}) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const {typing} = state;

  return (
    <div className="chatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
