import React from 'react';
import '../css/main.css'

import Empty from './empty';
import ChatWindow from './chatWindow';

const Main = ({user, activeUserId}) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    }
    else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };

  return(
    <main className="main">{renderMainContent()}</main>
  );
};

export default Main;
