const { findItemById } = require('../../utils/findItemById')

describe('findItemById', () => {
  const testArray = [
    {
      id: 1,
      children: [
        {
          id: 2,
          children: [
            {
              id: 3,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      children: [
        {
          id: 5,
        },
      ],
    },
    {
      id: 6,
    },
  ];

  it('should find an item by its ID', () => {
    const result = findItemById(testArray, 3);
    expect(result).toEqual({ id: 3 });
  });

  it('should return null if the item is not found', () => {
    const result = findItemById(testArray, 7);
    expect(result).toBeNull();
  });
});
