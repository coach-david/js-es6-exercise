describe('Final', () => {
  it('Implement analyzeEmail(), use: Regex, destructuring', () => {
    function analyzeEmail() {}

    // don't change ↓
    const person = { name: 'John', email: 'john.doe@example.com' };
    const { username, domain } = analyzeEmail(person);

    expect(username).toEqual('john.doe');
    expect(domain).toEqual('example.com');
  });
});
