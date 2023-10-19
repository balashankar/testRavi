let data = require('../json/tree.json');

function getTree(req, res) {
    res.json(data);
}

module.exports = {
  getTree,
};
