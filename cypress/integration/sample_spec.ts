describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders home page', () => {
    cy.findByText(/Harassless/i).should('exist')
  })
})
