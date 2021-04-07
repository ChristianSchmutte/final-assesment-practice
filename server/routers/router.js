const router = require('express').Router();
const topicController = require('../controllers/topics.controller');

router.get('/topics', topicController.getAllTopics);
router.post('/topics', topicController.createTopic);
router.put('/topics/:topicId/up', topicController.upvoteTopic);
router.put('/topics/:topicId/down', topicController.downvoteTopic);
router.delete('/topics/:topicId', topicController.deleteTopic);


module.exports = router;