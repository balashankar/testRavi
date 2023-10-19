let data = require('../json/tree.json');
let { IdGenerator } = require('../utils/generateUniqueID')
const { findItemById } = require('../utils/findItemById')

const fs = require('fs');
const idGenerator1 = IdGenerator.getInstance(); 

function postTree(req, res) {

  const itemId = parseInt(req.body.parent);

  const foundItem = findItemById(data, itemId);
  if (foundItem) {
    // res.json(foundItem);
    const newItem = {
      id: idGenerator1.generateId(),
      label: req.body.label,
      children: []
    }

    foundItem.children.push(newItem);
    fs.writeFileSync('./json/tree.json', JSON.stringify(data, null, 2));
    res.json(foundItem)
  } else {
    res.status(404).json({ error: 'Node not found' });
  }
}

// function findItemById(arr, itemId) {
//   for (const item of arr) {
//     if (item.id === itemId) {
//       return item;
//     }
//     if (item.children && item.children.length > 0) {
//       const foundItem = findItemById(item.children, itemId);
//       if (foundItem) {
//         return foundItem;
//       }
//     }
//   }
// }

module.exports = {
  postTree,
};
