import { render, screen } from '@testing-library/react';
import Home from './Home';
import { EntryProvider } from '../../context/EntryContext';
import { UserProvider } from '../../context/UserContext';

test.skip('should render title of page', async () => {
  render(
    <EntryProvider>
      <Home />
    </EntryProvider>
  );
  const title = screen.getByText(/Enter your gitHub name/i);
  expect(title).toBeInTheDocument();

  const inputName = screen.getByPlaceholderText(/github user name/i);
  expect(inputName).toBeInTheDocument();

  const button = screen.getByRole('button', {
    name: /send it!/i,
  });
  expect(button).toBeInTheDocument();
});

test('renders Home', () => {
  const container = render(
    <UserProvider>
      <EntryProvider>
        <Home />
      </EntryProvider>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
