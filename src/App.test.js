import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Start/i);
  expect(buttonElement).toBeInTheDocument();
});
