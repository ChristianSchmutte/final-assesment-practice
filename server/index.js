const express = require('express');
const port = 8080;
const cors = require('cors');
const app = express();
const router = require('./routers/router');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/practice_topic' , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port, () => console.log(`Launched http://localhost:${port} 🚀`));