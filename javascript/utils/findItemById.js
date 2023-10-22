const findItemById = function (arr, itemId) {
  for (const item of arr) {
    if (item.id === itemId) {
      return item;
    }
    if (item.children && item.children.length > 0) {
      const foundItem = findItemById(item.children, itemId);
      if (foundItem) {
        return foundItem;
      }
    }
  }
  return null;
}

module.exports = {
  findItemById,
};
