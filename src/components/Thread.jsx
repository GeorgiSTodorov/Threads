import React, { useState } from 'react';

import Message from "./Message";

const Thread = ({ thread }) => {
  const [expanded, setExpanded] = useState(thread.length === 1);

  const data = expanded ? thread : [thread[0]];

  return (
    <div onClick={() => setExpanded(true)}>
      {data.map(message => <Message messagesLength={!expanded ? thread.length : 0} message={message} />)}
    </div>
  );
}

export default Thread;