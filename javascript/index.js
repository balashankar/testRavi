const express = require('express');
const { getTree } = require('./api/getTree');
const { postTree } = require('./api/postTree');

// create an express server and set the port to run
const app = express();
const port = 3001;

// Parse JSON request bodies
app.use(express.json());

// Need to run 'npm i path' to install path header. This will integrate and give access file paths.
const path = require('path');

// Route handlers to be defined below
app.get('/api/tree', getTree);
app.post('/api/tree', postTree);

// front-end file to get/post API calls
app.get('^/$|/home(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
