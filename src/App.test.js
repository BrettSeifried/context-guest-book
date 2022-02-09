import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { EntryProvider } from './context/EntryContext';

test('Name and message should show up', async () => {
  render(
    // <MemoryRouter>
    <EntryProvider>
      <App />
    </EntryProvider>
    // {/* </MemoryRouter> */}
  );

  const input = screen.getByPlaceholderText(/Your Name/i);
  // expect(input).toBeInTheDocument();
  // userEvent.click(input);
  userEvent.type(input, 'Brettford');

  const message = screen.getByPlaceholderText(/Your Message!/i);
  // expect(message).toBeInTheDocument();
  // userEvent.click(message);
  userEvent.type(message, 'test');

  const button = screen.getByRole('button', {
    name: /send it!/i,
  });
  userEvent.click(button);

  const title = screen.getByRole('heading', {
    name: /thanks for the message brettford/i,
  });
  expect(title).toBeInTheDocument();

  const listitem = screen.getByRole('listitem');

  within(listitem).getByRole('heading', {
    name: /brettford/i,
  });
  expect(listitem).toBeInTheDocument();

  const testText = screen.getByText(/test/i);
  expect(testText).toBeInTheDocument();
});
