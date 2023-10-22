const { getTree } = require('../../api/getTree');

// Mock the req and res objects
const mockRequest = {};
const mockResponse = {
  json: jest.fn(),
};

describe('getTree', () => {
  it('should send the tree data as JSON', () => {
    getTree(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(require('../../data/tree.json'));
  });
});
