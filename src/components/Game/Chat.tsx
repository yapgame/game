import React, { useState } from 'react';
import PlayerList from './PlayerList';
import Inbox from './Inbox';
import Message from './Message';
import SearchBox from './SearchBox';
import FormDialog from './FormDialog';
import { IUser } from '../../interfaces/IUser';

function Chat() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = React.useState<[]|IUser[]>([]);
  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        result={result}
      />
      <SearchBox setOpen={setOpen} setResult={setResult} />
      <Message />
      <PlayerList />
      <Inbox />
    </>
  );
}

export default Chat;
