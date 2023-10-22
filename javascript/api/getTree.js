const data = require('../data/tree.json');

function getTree(req, res) {
  res.json(data);
}

module.exports = {
  getTree,
};
