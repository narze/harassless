import React from 'react'
import { render } from '../testUtils'
import { Home } from '../../pages/index'

describe('Home page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home />, {})

    getByText('Harassless')
  })
})
