const express = require("express");
const { getTree } = require('./api/getTree');
const { postTree } = require('./api/postTree');

//create an express server and set the port to run
const app = express();
const port = 3001;

// Parse JSON request bodies
app.use(express.json());

// Route handlers to be defined below
app.get("/api/tree", getTree);
app.post("/api/tree", postTree);

// front-end file to get/post API calls
app.get("/tree", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
