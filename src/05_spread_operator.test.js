// To do: Fix the unit tests, leave the expect lines unchanged.

// 04.1: Spread syntax

describe('Spread syntax', () => {
  it('expands the items of an array by prefixing it with `...`', () => {
    const middle = [1, 2, 3];
    const arr = [0, middle, 4];

    expect(arr).toEqual([0, 1, 2, 3, 4]);
  });

  it('an empty array expanded is no item', () => {
    const arr = [0, [], 1];

    expect(arr).toEqual([0, 1]);
  });

  it('prefix with `...` to spread as function params', () => {
    const magicNumbers = [1, 2];
    const fn = (magicA, magicB) => {
      expect(magicNumbers[0]).toEqual(magicA);
      expect(magicNumbers[1]).toEqual(magicB);
    };

    fn(magicNumbers);
  });

  it('pass all array values to Math.max', () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = Math.max(numbers);

    expect(result).toEqual(10);
  });
});

// 04.2: Rest syntax

describe('Rest syntax', () => {
  it('collect remaining items', () => {
    const [a, b, rest] = [1, 2, 3, 4, 5];

    expect(rest).toEqual([3, 4, 5]);
  });

  it('rest syntax to collect all arguments', () => {
    const fn = args => {
      expect(args).toEqual([55, 42, 78]);
    };

    fn(55, 42, 78);
  });

  it('rest syntax to collect subset of arguments', () => {
    const multiply = (multiplier, ...rest) => {
      expect(multiplier).toEqual(2);
      expect(rest).toEqual([8, 9]);
    };

    multiply(2, 8, 9, 6);
  });
});

// 04.3: Rest + Spread

describe('Combining Rest and Spread', () => {
  it('both use `...` to either expand all items and collect them', () => {
    const [...rest] = [...[, 1, 2, 3, 4, 5]];

    expect(rest).toEqual([1, 2, 3, 4, 5]);
  });

  it('rest syntax must be last in an array, spread can be used in any place', () => {
    const [a, b, ...rest] = [1, [2, 3], 4, 5];

    expect(a).toEqual(1);
    expect(b).toEqual(2);
    expect(rest).toEqual([3, 4, 5]);
  });
});

// 04.4: Rest & Spread for objects

describe('Rest & Spread for objects', () => {
  it('merge 2 objects', () => {
    const obj1 = { firstName: 'John' };
    const obj2 = { lastName: 'Doe' };

    const merged = { obj1, obj2 };

    expect(merged).toEqual({ firstName: 'John', lastName: 'Doe' });
  });

  it('merging overrides existing properties', () => {
    const obj1 = { firstName: 'John', age: 30 };
    const obj2 = { firstName: 'Jane', gender: 'f' };

    const merged = { obj1, obj2 };

    expect(merged).toEqual({ firstName: 'Jane', age: 30, gender: 'f' });
  });

  it('get remaining properties', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const { a, rest } = obj;

    expect(rest).toEqual({ b: 2, c: 3 });
  });

  it('merge deeply nested objects', () => {
    const obj = {
      a: {
        a1: {
          a11: 11,
          a12: 12,
        },
        a2: {
          a21: 21,
          a22: 22,
        },
      },
      b: {
        b1: {
          b11: 11,
          b12: 12,
        },
      },
    };

    const obj2 = {
      a: {
        a1: {
          a13: 13,
        },
      },
      c: {},
    };

    const merged = {};

    expect(merged).toEqual({
      a: {
        a1: {
          a11: 11,
          a12: 12,
          a13: 13,
        },
        a2: {
          a21: 21,
          a22: 22,
        },
      },
      b: {
        b1: {
          b11: 11,
          b12: 12,
        },
      },
      c: {},
    });
  });
});
