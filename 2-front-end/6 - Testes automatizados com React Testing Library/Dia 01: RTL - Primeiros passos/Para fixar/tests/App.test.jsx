// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', async () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  await userEvent.type(inputEmail, EMAIL_USER);
  expect(textEmail).not.toHaveTextContent(`Valor: ${EMAIL_USER}`);
  await userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

test('Verifica se a cor está correta quando o email é valido ou inválido', async () => {
  render(<App />);
  const validEmail = 'email@email.com';
  const invalidEmail = 'teste';
  const input = screen.getByLabelText('Email');
  const btn = screen.getByTestId('id-send');
  const text = screen.getByTestId('id-email-user');

  await userEvent.type(input, validEmail);
  await userEvent.click(btn);
  expect(text).toHaveProperty('className', 'green');

  await userEvent.type(input, invalidEmail);
  await userEvent.click(btn);
  expect(text).toHaveProperty('className', 'red');
});
