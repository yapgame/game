import * as React from 'react';
import PlayerList from './PlayerList';
import Inbox from './Inbox';
import Message from './Message';
import SearchBox from './SearchBox';

function Chat() {
  return (
    <>
      <SearchBox />
      <Message />
      <PlayerList />
      <Inbox />
    </>
  );
}

export default Chat;
