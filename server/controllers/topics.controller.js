const Topic = require('../models/topic.model');

const severErrMessage = {msg: 'SERVER ERROR, please try again later'};
const noMatchingIDMessage = {msg: 'Could not find item with matching id'};

async function getAllTopics( _ , res) {

  try {
    const topics = await Topic.find();
    res.status(200)
      .json(topics);
  } catch (error) {
    handleError(error, res);
  }

}

async function createTopic(req, res) {
  const { body } = req;
  try {
    const newTopic = await Topic.create({title: body.title});
    res.status(201)
      .json(newTopic);
    
  } catch (error) {
    handleError(error, res);
  }
    
}

async function upvoteTopic(req, res) {
  const { topicId } = req.params;
  try {
    const topic = await Topic.findById(topicId);
    topic.score++;
    await topic.save();
    res.status(200)
      .json(topic);
  } catch (error) {
    handleError(error, res);
  }
}
async function downvoteTopic(req, res) {
  const { topicId } = req.params;
  try {
    const topic = await Topic.findById(topicId);
    if(!topic) res.status(404).json(noMatchingIDMessage);
    topic.score--;
    await topic.save();
    res.status(200)
      .json(topic);
  } catch (error) {
    handleError(error, res);
  }
}

async function deleteTopic(req, res) {
  const { topicId } = req.params;
  try {
    await Topic.findByIdAndDelete(topicId);

  } catch (error) {
    handleError(error, res);
  }
}

function handleError(err, res) {
  console.error(err);
    res.status(500)
      .json(severErrMessage);
}

module.exports = {getAllTopics, createTopic, upvoteTopic, downvoteTopic, deleteTopic}