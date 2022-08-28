import * as React from 'react';
import PlayerList from './PlayerList';
import Inbox from './Inbox';
import Message from './Message';

function Chat() {
  return (
    <>
      <Message />
      <PlayerList />
      <Inbox />
    </>
  );
}

export default Chat;
