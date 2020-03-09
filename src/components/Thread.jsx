import React, { useState } from 'react';

import Message from "./Message";

const Thread = ({thread}) => {
  const [expanded, setExpanded] = useState(thread.length === 1);

  return (
    <div>
      {thread.map(message => <Message message={message} />)}
    </div>
  );
}

export default Thread;