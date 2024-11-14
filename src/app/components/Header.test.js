import { render, screen } from '@testing-library/react';
import Header from './Header';
 
test('renders links to subpages', () => {
  render(<Header />);
  const linkElement1 = screen.getByText(/Home/i);
  const linkElement2 = screen.getByText(/About/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});