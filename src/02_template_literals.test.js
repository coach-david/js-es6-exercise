// to do: Change "templateString" in every test, make use of template literals.
// Leave the asserts unchanged.

// 02.1: template literals

describe('template literals basics', () => {
  it('behaves as normal string', () => {
    const templateString = '';

    expect(templateString).toEqual("You're gonna need a bigger boat.");
  });

  it('variable substitutions: concatenate multiple values', () => {
    const sayMyName = 'Heisenberg';

    const templateString = 'My name is sayMyName';

    expect(templateString).toEqual('My name is ' + sayMyName);
  });

  it('variable substitutions: complex strings', () => {
    const a = 2;
    const b = 3;

    const templateString = '';

    expect(templateString).toEqual(a + ' x ' + b + ' = ' + a * b + ', not ' + (a * b - 2));
  });

  it('function calls also work', () => {
    function sayMyName(a, b) {
      return 'Heisenberg';
    }

    const templateString = '';

    expect(templateString).toEqual('My name is ' + sayMyName());
  });

  it('nested', () => {
    function getCssEs6(isLargeScreen, isCollapsed) {
      const templateString = '';

      return templateString;
    }

    function getCss(isLargeScreen, isCollapsed) {
      var classes = 'header ';
      classes += isLargeScreen ? '' : isCollapsed ? 'icon-expander' : 'icon-collapser';

      return classes;
    }

    expect(getCssEs6(false, true)).toEqual(getCss(false, true));
    expect(getCssEs6(false, false)).toEqual(getCss(false, false));
    expect(getCssEs6(true, false)).toEqual(getCss(true, false));
  });
});

describe('template literals multiline', () => {
  it('template literal on two lines', () => {
    const firstName = 'John';
    const lastName = 'Doe';

    const templateString = '';

    expect(templateString).toEqual(firstName + '\n' + lastName);
  });

  it('template literal on many lines', () => {
    const firstName = 'John';
    const lastName = 'Doe';

    const templateString = '';

    expect(templateString.split('\n').length).toEqual(4);
  });
});
