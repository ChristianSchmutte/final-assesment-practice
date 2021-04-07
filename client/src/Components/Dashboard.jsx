import { React, useState, useEffect } from 'react'
import { getTopics, upvoteTopic } from '../Utils/ApiClient';
import Topic from './Topic';
export default function Dashboard() {
  const [ topics, setTopics ] = useState([]);

  useEffect( ()=> {
    (async function fetchTopics() {
      let fetchedTopics = await getTopics();
      fetchedTopics = fetchedTopics.sort((a, b) => b.score - a.score);
      setTopics(fetchedTopics);
    })();

  },[]);

  async function handleUpvote (topic) {
    const { _id } = topic;
    const fetchedTopic = await upvoteTopic( _id );

    let updatedTopics = [...topics];
    updatedTopics = updatedTopics.filter(t => t._id !== fetchedTopic._id);
    updatedTopics.push(fetchedTopic);
    updatedTopics.sort((a, b) => b.score - a.score);
    setTopics(updatedTopics);
  }

  const topicList = topics.map(topic => {
    return (
      <div key={topic._id}>
        <Topic
        topic={topic}
        handleUpvote={(topic) => handleUpvote(topic)}
        handleDownvote={() => console.log('Down')}
        />
      </div>
    )
  });

  return (
    <div>
      Hello Dashboard
      { topicList }
    </div>
  )
}
