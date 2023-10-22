const fs = require('fs');
const { postTree } = require('../../api/postTree');
const { findItemById } = require('../../utils/findItemById');

jest.mock('../../utils/findItemById');
jest.mock('fs');

describe('postTree', () => {
  it('should add a new item to the tree and return it', () => {
    const req = { body: { parent: 1, label: 'New Item' } };
    const res = {
      json: jest.fn(),
    };
    const foundItem = {
      id: 1,
      children: [],
    };

    findItemById.mockReturnValue(foundItem);
    fs.writeFileSync.mockReturnValue(null);

    postTree(req, res);

    expect(foundItem.children).toHaveLength(1);
    expect(res.json).toHaveBeenCalledWith(foundItem);
  });

  it('should return a 404 response when the parent node is not found', () => {
    const req = { body: { parent: 123, label: 'New Item' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    findItemById.mockReturnValue(null);

    postTree(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Node not found' });
  });
});
