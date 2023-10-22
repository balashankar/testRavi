const { IdGenerator } = require('../../utils/generateUniqueID')

describe('IdGenerator', () => {
  it('should generate unique IDs', () => {
    const generator1 = IdGenerator.getInstance();
    const generator2 = IdGenerator.getInstance();

    const id1 = generator1.generateId();
    const id2 = generator2.generateId();

    expect(id1).not.toEqual(id2);
  });

  it('should maintain a single instance', () => {
    const generator1 = IdGenerator.getInstance();
    const generator2 = IdGenerator.getInstance();

    expect(generator1).toBe(generator2);
  });
});
