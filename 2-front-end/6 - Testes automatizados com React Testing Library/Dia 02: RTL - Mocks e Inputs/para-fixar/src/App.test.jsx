// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText(
    'Whiteboards ... are remarkable.'
  );
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});

it('fetches a new joke', async () => {
  const jokes = [
    {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    },
    {
      id: 'R7UfaahVfFd',
      joke: 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.',
      status: 200,
    },
  ];

  const [joke1, joke2] = jokes;

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke2).mockResolvedValueOnce(joke1),
  });

  render(<App />);

  const btn = screen.getByRole('button');
  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  userEvent.click(btn);
  expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
