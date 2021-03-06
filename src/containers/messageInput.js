import React from 'react';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions';
import '../css/messageInput.css';

const MessageInput = ({ value }) => {
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const state = store.getState();

  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  }

  return (
    <form className="message" onSubmit={handleSubmit}>
      <input
        className="message_input"
        onChange={handleChange}
        value={value}
        placeholder="Write a message"
      />
    </form>
  );
}

export default MessageInput;
