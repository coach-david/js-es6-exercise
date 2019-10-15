// To do: Make the imperative declarative by making use of array methods map, filter and reduce.
// Make sure all tests keep passing

const heroes = [
  { name: 'Hulk', strength: 90000, sex: 'm' },
  { name: 'Spider-Man', strength: 25000, sex: 'm' },
  { name: 'Hawkeye', strength: 136, sex: 'm' },
  { name: 'Thor', strength: 100000, sex: 'm' },
  { name: 'Black Widow', strength: 136, sex: 'f' },
  { name: 'Vision', strength: 5000, sex: 'm' },
  { name: 'Scarlet Witch', strength: 60, sex: 'f' },
  { name: 'Mystique', strength: 120, sex: 'f' },
  { name: 'Namora', strength: 75000, sex: 'f' },
  { name: 'Darkwing Duck', strength: 10, sex: 'm' },
];

const hiddenIdentities = ['Hulk', 'Spider-Man', 'Darkwing Duck'];

// 07: Declarative programming

describe('Declarative programming', () => {
  it('Give me a list with heroes stronger than "500"', () => {
    const result = [];

    for (let i = 0; i < heroes.length; i++) {
      if (heroes[i].strength >= 500) {
        result.push(heroes[i]);
      }
    }

    expect(result).toEqual([
      { name: 'Hulk', strength: 90000, sex: 'm' },
      { name: 'Spider-Man', strength: 25000, sex: 'm' },
      { name: 'Thor', strength: 100000, sex: 'm' },
      { name: 'Vision', strength: 5000, sex: 'm' },
      { name: 'Namora', strength: 75000, sex: 'f' },
    ]);
  });

  it('Give me a list of all hero names', () => {
    const result = [];

    for (let i = 0; i < heroes.length; i++) {
      result.push(heroes[i].name);
    }

    expect(result).toEqual([
      'Hulk',
      'Spider-Man',
      'Hawkeye',
      'Thor',
      'Black Widow',
      'Vision',
      'Scarlet Witch',
      'Mystique',
      'Namora',
      'Darkwing Duck',
    ]);
  });

  it('Give me a list of all hero names and whether they have a hidden identity', () => {
    const result = [];

    for (let i = 0; i < heroes.length; i++) {
      result.push({
        name: heroes[i].name,
        hidden: hiddenIdentities.includes(heroes[i].name),
      });
    }

    expect(result).toEqual([
      { name: 'Hulk', hidden: true },
      { name: 'Spider-Man', hidden: true },
      { name: 'Hawkeye', hidden: false },
      { name: 'Thor', hidden: false },
      { name: 'Black Widow', hidden: false },
      { name: 'Vision', hidden: false },
      { name: 'Scarlet Witch', hidden: false },
      { name: 'Mystique', hidden: false },
      { name: 'Namora', hidden: false },
      { name: 'Darkwing Duck', hidden: true },
    ]);
  });

  it('Sum up all hero strength', () => {
    let result = 0;

    for (let i = 0; i < heroes.length; i++) {
      result += heroes[i].strength;
    }

    expect(result).toEqual(295462);
  });

  // 07.1b: Declarative programming - combination

  describe('Declarative programming - combination', () => {
    it("Give me the combined strength of all hero's with a hidden identity", () => {
      const result = heroes; // ← To implement

      expect(result).toEqual(115010);
    });

    it('Give me the combined strength of all superhumans with a hidden identity', () => {
      // IMPORTANT: A superhuman is a hero with a strength >= 500
      const result = heroes; // ← To implement

      expect(result).toEqual(115000);
    });

    it('Give me the names of all female superhumans', () => {
      // IMPORTANT: A superhuman is a hero with a strength >= 500
      const result = heroes; // ← To implement

      expect(result).toEqual(['Namora']);
    });
  });
});
