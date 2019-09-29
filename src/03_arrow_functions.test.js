// 03.1: arrow functions

describe('arrow functions', () => {
  // To do: replace regular function declarations with arrow functions. Make the functions as short as possible!
  // Make sure all tests keep working, leave the asserts unchanged.
  it('shorter to write', () => {
    const func = function() {};

    expect('' + func).toEqual('() => {}');
  });

  it('single line statement - one argument - implicit return value', () => {
    const addOne = function(a) {
      return a + 1;
    };

    expect(addOne(2)).toEqual(3);
  });

  it('single line statement - multiple arguments - implicit return value', () => {
    const add = function(a, b) {
      return a + b;
    };

    expect(add(2, 3)).toEqual(5);
  });

  it('return object literal', () => {
    const getCat = function(a, b) {
      return {
        name: 'Mikado',
        age: 5,
      };
    };

    expect(getCat()).toEqual({ name: 'Mikado', age: 5 });
  });
});

// 03.2: arrow functions - lexical scope

describe('arrow functions - lexical scope', () => {
  // To do: replace regular function declarations with arrow functions where needed to make all tests work.
  // Leave the asserts unchanged.

  it('"this" comes from the surrounding lexical context, an object DOESN\'T create a new scope', () => {
    const person = {
      age: 1,
      getAge: () => {
        return this.age;
      },
    };

    expect(person.getAge()).toEqual(1);
  });

  it('"this" comes from the surrounding lexical context, a function creates a new scope', () => {
    const person = {
      age: 1,
      happyBirthday() {
        function increaseAge(by) {
          this.age += by;
        }

        increaseAge(1);
        return this;
      },
    };

    expect(person.happyBirthday().age).toEqual(2);
    expect(person.happyBirthday().age).toEqual(3);
  });

  it('arrow functions don\'t have their own "arguments" object', () => {
    function getArguments() {
      return arguments[0];
    }

    expect(getArguments('Hello world')).not.toEqual('Hello world');
  });
});
