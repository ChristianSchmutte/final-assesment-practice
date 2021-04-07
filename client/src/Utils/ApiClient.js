const basUrl = 'http://localhost:8080/topics'
export async function getTopics() {
  try {
    const response = await fetch(basUrl);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
  }
}

export async function postTopic (title) {

  //
}

export async function upvoteTopic(topicId) {
  try {
    
    const response = await fetch(`${basUrl}/${topicId}/up`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
    });
    const body = await response.json();
    return body;

  } catch (error) {
    console.error(error);
    
  }
}

export async function downvoteTopic(topicId) {
  try {
    const response = await fetch(`${basUrl}/${topicId}/down`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
    });
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
  }
}