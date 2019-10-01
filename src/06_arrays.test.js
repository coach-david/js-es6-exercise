// To do: Fix the unit tests, leave the expect lines unchanged.

// 06.1: Array.from

describe('Array.from', () => {
  it('call `Array.from` with an array-like object', () => {
    const arrayLike = { 0: 'one', 1: 'two', length: 2 };
    const arr = arrayLike; // ← To change

    expect(arr).toEqual(['one', 'two']);
  });

  it('a DOM node`s classList object can be converted', () => {
    const domNode = document.createElement('span');
    domNode.classList.add('some');
    domNode.classList.add('other');
    const classList = domNode.classList; // ← To change

    expect(classList).toEqual(['some', 'other']);
  });

  it('works with function arguments', () => {
    function sum() {
      const numbers = arguments; // ← To change
      return numbers.reduce((prev, cur) => prev + cur);
    }

    expect(sum(1, 2, 3, 4)).toEqual(10);
  });

  it('we can modify the value before putting it in the array', () => {
    const arrayLike = { 0: 'one', 1: 'two', length: 2 };
    const arr = arrayLike; // ← To change

    expect(arr).toEqual(['ONE', 'TWO']);
  });
});

// 06.2: Array.fill

describe('Array.fill', () => {
  it('`fill(0)` will populate `0` into each array element', () => {
    const arr = new Array(3).fill();

    expect(arr).toEqual([0, 0, 0]);
  });

  it('fill only changes content, adds no new elements', () => {
    const arr = [undefined]; // ← To change

    expect(arr).toEqual([0]);
  });

  it('second parameter to `fill()` is the position where to start filling', () => {
    const fillPosition = 0; // ← To change
    const arr = [1, 2, 3]; // ← To change

    expect(arr).toEqual([1, 2, 42]);
  });

  it('third parameter is the position where filling stops', () => {
    const fillStartAt = 1; // ← To change
    const fillEndAt = 1; // ← To change
    const arr = [1, 2, 3]; // ← To change

    expect(arr).toEqual([1, 42, 3]);
  });
});

// 06.3: Array.find / findIndex

describe('Array.find / findIndex', () => {
  it('find the first cat in the list', () => {
    const animals = [
      { name: 'Blacky', species: 'dog' },
      { name: 'Nelson', species: 'monkey' },
      { name: 'Mikado', species: 'cat' },
      { name: 'Bruno', species: 'cat' },
    ];

    const firstCatFound = animals; // ← To change

    expect(firstCatFound.name).toEqual('Mikado');
  });

  it('find the index of the first cat in the list', () => {
    const animals = [
      { name: 'Blacky', species: 'dog' },
      { name: 'Nelson', species: 'monkey' },
      { name: 'Mikado', species: 'cat' },
      { name: 'Bruno', species: 'cat' },
    ];

    const firstCatIndex = animals; // ← To change

    expect(firstCatIndex).toEqual(2);
  });
});
