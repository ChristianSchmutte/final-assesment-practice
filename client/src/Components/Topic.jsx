import React from 'react'

export default function Topic({topic, handleUpvote, handleDownvote}) {
  return (
    <div>
      {topic.title}
      <button onClick={() => handleUpvote(topic)}>UP</button>
        {topic.score}
      <button onClick={() => handleDownvote(topic)}>DOWN</button>
    </div>
  )
}
