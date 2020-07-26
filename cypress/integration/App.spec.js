describe('test', () => {
  beforeEach(() => {
    cy.visit('http://172.20.10.10:19006');
  });

  it('test 1', () => {
    cy.get('div');
  });
});
