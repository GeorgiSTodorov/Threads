import React, { useState } from 'react';

import Message from "./Message";

const Thread = ({ thread }) => {
  const [expanded, setExpanded] = useState(thread.length === 1);

  const data = expanded ? thread : [thread[0]];

  // The rating of a thread is the average rating of the messages it contains.
  const messagesWithRating = thread.filter(m => m.score !== undefined);
  const threadRating = messagesWithRating.map(m => m.score).reduce((a, b) => a + b)/messagesWithRating.length;
  console.log(threadRating);

  // created_at is not necessarily unique, but it's the best we have in terms of uniqueness.
  return (
    <div onClick={() => setExpanded(true)}>
      {data.map(message => <Message key={message.created_at} messagesLength={!expanded ? thread.length : 0} threadRating={threadRating} message={message} />)}
    </div>
  );
}

export default Thread;