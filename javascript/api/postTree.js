let data = require('../json/tree.json');
let { IdGenerator } = require('../utils/generateUniqueID')
const fs = require('fs'); 

function postTree(req, res) {

  const itemId = parseInt(req.body.parent);
  const idGenerator1 = IdGenerator.getInstance();

  function findItemById(arr) {
    for (const item of arr) {
      if (item.id === itemId) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const foundItem = findItemById(item.children);
        if (foundItem) {
          return foundItem;
        }
      }
    }
  }

  const foundItem = findItemById(data);
  if (foundItem) {
    // res.json(foundItem);
    const newItem = {
      id: idGenerator1.generateId(),
      label: req.body.label,
      children: []
    }

    foundItem.children.push(newItem);
    res.json(foundItem)
  } else {
    res.status(404).json({ error: 'Node not found' });
  }

  res.json(newItem);

}


module.exports = {
  postTree,
};
