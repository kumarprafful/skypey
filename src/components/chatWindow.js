import React from 'react';

const ChatWindow = ({activeUserId}) => {
  return (
    <div className="chatWindow">
      Conversation for user id: {activeUserId}
    </div>
  );
};

export default ChatWindow;
