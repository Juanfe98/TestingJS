import { render, screen } from '@testing-library/react';
import Header from './Header';

it('Render the title sended as prop', () => {
  render(<Header title="Test Header"/>);
  //Getting the element by the text on it
  const headingElement = screen.queryByText(/test header/); 

  //Getting element by the role
  const headingElement2 = screen.getByRole('heading');

  expect(headingElement2).toBeInTheDocument();
});
