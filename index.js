const express = require('express');
const fs = require('fs'); 
const { getTree } = require('./api/getTree');
const { postTree } = require('./api/postTree');

//create an express server and set the port to run
const app = express();
const port = 3001;

// Parse JSON request bodies
app.use(express.json());


// Route handlers to be defined below
app.get('/api/tree', getTree);
app.post('/api/tree', postTree);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
