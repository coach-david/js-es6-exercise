// To do: Fix these tests with one liners!

// 04.1: destructuring - array

describe('destructuring arrays makes shorter code', () => {
  it('extract value from array', () => {
    let firstValue = [1];

    // don't change ↓
    expect(firstValue).toEqual(1);
  });

  it('extract multiple values from array', () => {
    let firstValue,
      secondValue = [1, 2, 3, 4];

    // don't change ↓
    expect(firstValue).toEqual(1);
    expect(secondValue).toEqual(2);
  });

  it('extract multiple, non successive, values from array', () => {
    // Requirement: Don't create new variables
    let firstValue,
      fourthValue = [1, 2, 3, 4];

    // don't change ↓
    expect(firstValue).toEqual(1);
    expect(fourthValue).toEqual(4);
  });

  it('extract remaining values from array', () => {
    let firstValue,
      secondValue,
      restValue = [1, 2, 3, 4];

    // don't change ↓
    expect(firstValue).toEqual(1);
    expect(secondValue).toEqual(2);
    expect(restValue).toEqual([3, 4]);
  });

  it('extract nested values from array', () => {
    const person = [['John', 'Doe'], 'Antwerp', 30]; // ← don't change

    let firstName,
      lastName,
      age = person;

    // don't change ↓
    expect(`${firstName} ${lastName} is ${age} years`).toEqual('John Doe is 30 years');
  });

  it('chained assignment', () => {
    let a,
      b = c,
      d = [1, 2];

    // don't change ↓
    expect([a, b, c, d]).toEqual([1, 2, 1, 2]);
  });
});

// 04.2: destructuring - object

describe('destructuring objects', () => {
  const person = { name: 'John', age: 30, location: 'Antwerp' };

  it('extract value from object', () => {
    let name = person;

    // don't change ↓
    expect(name).toEqual('John');
  });

  it('extract multiple values from object', () => {
    let name,
      age = person;

    // don't change ↓
    expect(name).toEqual('John');
    expect(age).toEqual(30);
  });

  it('extract nested values from object', () => {
    const person = { name: { firstName: 'John', lastName: 'Doe' }, age: 30, location: 'Antwerp' }; // ← don't change

    let firstName,
      lastName,
      age = person;

    // don't change ↓
    expect(`${firstName} ${lastName} is ${age} years`).toEqual('John Doe is 30 years');
  });

  it('extract value from object with an alias', () => {
    let personLocation = person;

    // don't change ↓
    expect(personLocation).toEqual('Antwerp');
  });

  it('extract value from object with a dynamic key', () => {
    const KEY = 'age';
    // Requirement: Use the KEY variable defined above
    let personAge = person;

    // don't change ↓
    expect(personAge).toEqual(30);
  });
});

// 04.3: destructuring - function parameters

describe('destructuring function parameters', () => {
  it('extract multiple params from object', () => {
    function fn(name, age) {
      // ↑ To do change function declaration
      // don't change ↓
      expect(name).toEqual('John');
      expect(age).toEqual(30);
    }

    // don't change ↓
    const person = { name: 'John', age: 30 };
    fn(person);
  });

  it('extract rest params from object', () => {
    function fn(name, ...rest) {
      // ↑ To do change function declaration
      // don't change ↓
      expect(name).toEqual('John');
      expect(rest).toEqual({ age: 30, location: 'Antwerp' });
    }

    // don't change ↓
    const person = { name: 'John', age: 30, location: 'Antwerp' };
    fn(person);
  });
});

// 04.4: destructuring - default values

describe('destructuring default values', () => {
  it('for a missing array value', () => {
    let b = [1, , 3];

    // don't change ↓
    expect(b).toEqual(2);
  });

  it('for a missing object value', () => {
    const person = { name: 'John', age: 30 }; // ← don't change

    let location = person;

    // don't change ↓
    expect(location).toEqual('Belgium');
  });

  it('function parameter', () => {
    function fn(name, location) {
      // ↑ To do: destructuring + add default values
      // don't change ↓
      expect(`${name} lives in ${location}`).toEqual('John lives in Belgium');
    }

    // don't change ↓
    const person = { name: 'John', age: 30 };
    fn(person);
  });

  it('mix of function parameter types', () => {
    const fn = (id, [arr], { obj }) => {
      // ↑ To do: destructuring + add default values
      // don't change ↓
      expect(id).toEqual(1);
      expect(arr).toEqual(2);
      expect(obj).toEqual(3);
    };

    // don't change ↓
    fn(void 0, [], {});
  });

  it('function parameter depending on another parameter', () => {
    const fn = (arr, start) => {
      // ↑ To do: Add default value for "start" param

      // don't change ↓
      expect(start).toEqual(3);
    };

    // don't change ↓
    fn([1, 2, 3]);
  });
});

// 04.5: destructuring - final

describe('destructuring final', () => {
  it('swapping variables', () => {
    let a = 1,
      b = 2; // ← don't change

    // to do: swap a and b in 1 line!

    // don't change ↓
    expect(a).toEqual(2);
    expect(b).toEqual(1);
  });

  it('extract value from nested object in array', () => {
    const people = [
      { name: { firstName: 'John', lastName: 'Doe' }, age: 30 },
      { name: { firstName: 'Jane', lastName: 'Doe' }, age: 27 },
    ]; // ← don't change

    let firstNamePersonA,
      firstNamePersonB,
      age = people;

    // don't change ↓
    const result = "Jane is the sister of John, she's 27 years old";
    expect(
      `${firstNamePersonB} is the sister of ${firstNamePersonA}, she's ${age} years old`
    ).toEqual(result);
  });

  it('extract value from nested array in object', () => {
    const person = { name: 'Louis', cats: ['Bruno', 'Mikado'] }; // ← don't change

    let secondCat = person;

    // don't change ↓
    const result = "Louis' second cat is Mikado";
    expect(`Louis' second cat is ${secondCat}`).toEqual(result);
  });
});
