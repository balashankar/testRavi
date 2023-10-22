// importing all required files
const fs = require('fs');
const data = require('../data/tree.json');
const { IdGenerator } = require('../utils/generateUniqueID')
const { findItemById } = require('../utils/findItemById')

// Simple Flat file system is used for storing data
const newId = IdGenerator.getInstance();

function postTree(req, res) {
  const itemId = parseInt(req.body.parent);

  const foundItem = findItemById(data, itemId);
  if (foundItem) {
    const newItem = {
      id: newId.generateId(),
      label: req.body.label,
      children: [],
    }

    foundItem.children.push(newItem);
    fs.writeFileSync('./data/tree.json', JSON.stringify(data, null, 2));
    res.json(foundItem)
  } else {
    res.status(404).json({ error: 'Node not found' });
  }
}

module.exports = {
  postTree,
};
