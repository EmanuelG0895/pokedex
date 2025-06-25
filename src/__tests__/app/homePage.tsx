import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

it('renders home page', () => {
  render(<HomePage />)
  expect(screen.getByText('Home Page')).toBeInTheDocument()
})