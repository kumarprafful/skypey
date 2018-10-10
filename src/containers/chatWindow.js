import React from 'react';
import _ from 'lodash';

import store from '../store';
import Header from '../components/header';
import Chats from '../components/chats';

import '../css/chatWindow.css';

const ChatWindow = ({activeUserId}) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];

  return (
    <div className="chatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
    </div>
  );
};

export default ChatWindow;
