// to do: Replace var/let/const with the correct var/let/const to fix the unit tests

// 01.1: var or let

describe('var or let?', () => {
  it('Exercise 1', () => {
    var fruit = 'banana';

    if (true) {
      var fruit = 'pear';
    }

    // don't change ↓
    expect(fruit).toEqual('banana');
  });

  it('Exercise 2', () => {
    for (let i = 0; i < 10; i++) {
      //
    }

    // don't change ↓
    expect(i).toEqual(10);
  });

  it('Exercise 3', () => {
    if (true) {
      let fruit = 'pear';
    }

    // don't change ↓
    expect(fruit).toEqual('pear');
  });

  it('Exercise 4', () => {
    var callbacks = [];
    for (var i = 0; i < 10; i++) {
      callbacks.push(function() {
        return i;
      });
    }

    expect(callbacks[2]()).toEqual(2);
  });
});

// 01.2: var or const

describe('var or const?', () => {
  it('Exercise 1 - const values cannot be changed', () => {
    var constNum = 0;

    // don't change ↓
    function increaseConstNum() {
      constNum = 1;
    }

    // don't change ↓
    expect(increaseConstNum).toThrow();
  });

  it('Exercise 2 - properties in const Objects can be changed', () => {
    const banana = { color: 'yellow' }; // ← don't change

    // to do: override the color property here

    // don't change ↓
    expect(banana.color).toEqual('black');
  });

  it('Exercise 3 - properties in const Arrays can be changed', () => {
    const fruit = ['kiwi', 'banana']; // ← don't change

    // to do: replace 'banana' here

    // don't change ↓
    expect(fruit[1]).toEqual('apple');
  });
});
